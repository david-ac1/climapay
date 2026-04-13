import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log(`Start seeding ...`);

    const contract1 = await prisma.contract.upsert({
        where: { invoiceId: 'CP-9928-TX' },
        update: {},
        create: {
            invoiceId: 'CP-9928-TX',
            buyerName: 'Global Logistics Corp',
            basePrice: 22600.00,
            carbonCeiling: 200,
            penaltyRate: 50, // €50 per gCO2/kWh over threshold
            rebateRate: 0.085, // 8.5%
        },
    });

    const contract2 = await prisma.contract.upsert({
        where: { invoiceId: 'CP-4402-LD' },
        update: {},
        create: {
            invoiceId: 'CP-4402-LD',
            buyerName: 'EuroFreight Express',
            basePrice: 15400.00,
            carbonCeiling: 180,
            penaltyRate: 35,
            rebateRate: 0.05,
        },
    });

    console.log(`Seeding finished. Created contracts:`);
    console.log(contract1, contract2);
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
