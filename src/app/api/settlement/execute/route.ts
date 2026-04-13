import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: Request) {
    try {
        const payload = await request.json().catch(() => ({}));

        if (!payload.auditHash) {
            return NextResponse.json({ error: 'Missing Protocol Audit Hash' }, { status: 400 });
        }

        // Settles the transaction permanently 
        const execution = await prisma.settlement.update({
            where: { auditHash: payload.auditHash },
            data: { status: 'EXECUTED' }
        });

        return NextResponse.json(execution);
    } catch (error) {
        console.error('Execution Error:', error);
        return NextResponse.json({ error: 'Failed to settle smart-clause' }, { status: 500 });
    }
}
