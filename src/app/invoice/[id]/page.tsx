import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import InvoiceClient from '@/components/invoice/InvoiceClient';

export default async function DynamicInvoicePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    
    // Fetch the contract from the database
    const contract = await prisma.contract.findUnique({
        where: { invoiceId: id }
    });

    if (!contract) {
        notFound();
    }

    return <InvoiceClient initialContract={contract} />;
}
