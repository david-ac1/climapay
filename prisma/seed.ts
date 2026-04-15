import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

async function main() {
    console.log(`Start seeding realistic dataset...`);

    // 1. Diverse Industrial Contracts
    const industries = [
        { id: 'CP-AVI-772', name: 'SkyBound Airways', price: 145000, ceiling: 250, penalty: 120, rebate: 0.12 },
        { id: 'CP-DC-991', name: 'CloudCore Data Systems', price: 88000, ceiling: 120, penalty: 200, rebate: 0.15 },
        { id: 'CP-MAR-302', name: 'DeepOcean Logistics', price: 210000, ceiling: 400, penalty: 80, rebate: 0.05 },
        { id: 'CP-LOG-441', name: 'Global Freight Union', price: 32000, ceiling: 180, penalty: 45, rebate: 0.08 },
    ];

    const contracts = [];
    for (const ind of industries) {
        const c = await prisma.contract.upsert({
            where: { invoiceId: ind.id },
            update: {},
            create: {
                invoiceId: ind.id,
                buyerName: ind.name,
                basePrice: ind.price,
                carbonCeiling: ind.ceiling,
                penaltyRate: ind.penalty,
                rebateRate: ind.rebate,
            },
        });
        contracts.push(c);
    }

    // 2. Historical Node Logs & Settlements
    console.log(`Generating historical settlement records...`);
    
    for (let i = 0; i < 15; i++) {
        const contract = contracts[i % contracts.length];
        const timestamp = new RegExp('now').test('') ? new Date() : new Date(Date.now() - (i * 3600000 * 2)); // Every 2 hours back
        
        // Random metric around the ceiling
        const metric = contract.carbonCeiling + (Math.random() * 40 - 20);
        const excess = Math.max(0, metric - contract.carbonCeiling);
        const rebate = excess === 0 ? contract.basePrice * contract.rebateRate : 0;
        const penalty = excess * contract.penaltyRate;
        const adjusted = contract.basePrice - rebate + penalty;

        const nodeLog = await prisma.nodeLog.create({
            data: {
                nodeId: `NODE-UK-ESO-${i.toString().padStart(2, '0')}`,
                source: 'National Grid ESO',
                metric: parseFloat(metric.toFixed(2)),
                unit: 'gCO2/kWh',
                timestamp: timestamp
            }
        });

        await prisma.settlement.create({
            data: {
                contractId: contract.id,
                nodeLogId: nodeLog.id,
                adjustedPrice: adjusted,
                excessCarbon: excess,
                rebateApplied: rebate,
                status: i % 5 === 0 ? 'PENDING' : 'EXECUTED',
                auditHash: crypto.createHash('sha256').update(`${contract.id}-${timestamp.getTime()}`).digest('hex'),
                executedAt: timestamp
            }
        });
    }

    console.log(`Seeding finished. Industry-grade dataset active.`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
