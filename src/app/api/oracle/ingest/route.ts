import { NextResponse } from 'next/server';
import { calculateSettlement } from '@/lib/core/settlement';
import { generateWitnessHash } from '@/lib/core/crypto';
import { prisma } from '@/lib/db';
import { VerificationNodeData, ContractTerms } from '@/lib/core/schema';

export async function POST(request: Request) {
    try {
        const payload = await request.json().catch(() => ({}));
        const tgtInvoiceId = payload.invoiceId || 'CP-9928-TX';

        // 1. Fetch Contract from Persistence Layer
        const contractDb = await prisma.contract.findUnique({
            where: { invoiceId: tgtInvoiceId }
        });

        if (!contractDb) {
            return NextResponse.json({ error: 'Contract Not Found' }, { status: 404 });
        }

        const contract: ContractTerms = {
            invoiceId: contractDb.invoiceId,
            basePrice: contractDb.basePrice,
            carbonCeiling: contractDb.carbonCeiling,
            penaltyRate: contractDb.penaltyRate,
            rebateRate: contractDb.rebateRate,
        };

        // 2. Fetch Real Data from National Grid ESO Carbon Intensity API
        let nodeData: VerificationNodeData;
        let isFaulty = false;

        try {
            const response = await fetch('https://api.carbonintensity.org.uk/intensity', {
                signal: AbortSignal.timeout(5000)
            });

            if (!response.ok) throw new Error('Oracle API Network Response was not ok');
            const data = await response.json();
            const intensity = data.data[0].intensity;

            nodeData = {
                nodeId: 'NODE-UK-ESO-01',
                source: 'National Grid ESO',
                timestamp: new Date().toISOString(),
                metric: intensity.actual || intensity.forecast || 0,
                unit: 'gCO2/kWh',
                metadata: { index: intensity.index }
            };
        } catch (error) {
            console.warn('Oracle Fetch Failed, falling back to Fault-Tolerance Mode:', error);
            isFaulty = true;
            nodeData = {
                nodeId: 'NODE-UK-ESO-01-',
                source: 'National Grid ESO',
                timestamp: new Date().toISOString(),
                metric: 0,
                unit: 'gCO2/kWh',
            };
        }

        // 3. The Settlement Engine (Math Core)
        const snapshot = calculateSettlement(contract, nodeData, isFaulty);
        const auditHash = generateWitnessHash(snapshot);

        // 4. Persistence Execution: Transactionally save the Log and Settlement
        const savedSettlement = await prisma.$transaction(async (tx: any) => {
            const log = await tx.nodeLog.create({
                data: {
                    nodeId: nodeData.nodeId,
                    source: nodeData.source,
                    metric: nodeData.metric,
                    unit: nodeData.unit,
                }
            });

            return await tx.settlement.upsert({
                where: { auditHash: auditHash }, // Prevent duplicates if logic is pure
                update: {
                    adjustedPrice: snapshot.adjustedPrice,
                    excessCarbon: snapshot.excessCarbon,
                    rebateApplied: snapshot.rebateApplied,
                    status: snapshot.status,
                    nodeLogId: log.id,
                },
                create: {
                    contractId: contractDb.id,
                    nodeLogId: log.id,
                    adjustedPrice: snapshot.adjustedPrice,
                    excessCarbon: snapshot.excessCarbon,
                    rebateApplied: snapshot.rebateApplied,
                    status: snapshot.status,
                    auditHash: auditHash,
                }
            });
        });

        snapshot.auditHash = savedSettlement.auditHash;

        return NextResponse.json(snapshot);

    } catch (error) {
        console.error('Fatal Oracle Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
