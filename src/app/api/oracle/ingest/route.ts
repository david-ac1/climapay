import { NextResponse } from 'next/server';
import { ContractTerms, VerificationNodeData } from '@/lib/core/schema';
import { calculateSettlement } from '@/lib/core/settlement';
import { generateWitnessHash } from '@/lib/core/crypto';

export async function POST(request: Request) {
    try {
        const overrideContract: Partial<ContractTerms> = await request.json().catch(() => ({}));

        // Standard Contract Template
        const contract: ContractTerms = {
            invoiceId: overrideContract.invoiceId || 'CP-9928-TX',
            basePrice: overrideContract.basePrice || 22600.00,
            carbonCeiling: overrideContract.carbonCeiling || 200,
            penaltyRate: overrideContract.penaltyRate || 50, // 50 units per excess metric
            rebateRate: overrideContract.rebateRate || 0.085, // 8.5%
        };

        // 1. Fetch Real Data from National Grid ESO Carbon Intensity API
        let nodeData: VerificationNodeData;
        let isFaulty = false;

        try {
            const response = await fetch('https://api.carbonintensity.org.uk/intensity', {
                // High Availability: short timeout to simulate strict PENDING_AUDIT logic
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
                nodeId: 'NODE-UK-ESO-01',
                source: 'National Grid ESO',
                timestamp: new Date().toISOString(),
                metric: 0,
                unit: 'gCO2/kWh',
            };
        }

        // 2. The Settlement Engine (Math Core)
        const snapshot = calculateSettlement(contract, nodeData, isFaulty);

        // 3. Cryptographic Witnessing
        snapshot.auditHash = generateWitnessHash(snapshot);

        return NextResponse.json(snapshot);

    } catch (error) {
        console.error('Fatal Oracle Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
