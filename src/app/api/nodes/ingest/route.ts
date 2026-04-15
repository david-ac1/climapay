import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { nodeId, metric, unit, source } = body;

        const log = await prisma.nodeLog.create({
            data: {
                nodeId,
                metric,
                unit,
                source,
            },
        });

        return NextResponse.json(log);
    } catch (err) {
        console.error('Node Ingestion Error:', err);
        return NextResponse.json({ error: 'Failed to ingest node data' }, { status: 500 });
    }
}
