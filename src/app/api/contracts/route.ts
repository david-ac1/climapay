import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { invoiceId, buyerName, basePrice, carbonCeiling, penaltyRate, rebateRate } = body;

        const contract = await prisma.contract.create({
            data: {
                invoiceId,
                buyerName,
                basePrice,
                carbonCeiling,
                penaltyRate,
                rebateRate,
            },
        });

        return NextResponse.json(contract);
    } catch (err) {
        console.error('Contract Creation Error:', err);
        return NextResponse.json({ error: 'Failed to create contract' }, { status: 500 });
    }
}
