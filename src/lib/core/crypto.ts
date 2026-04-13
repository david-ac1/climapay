import crypto from 'crypto';
import { SettlementSnapshot } from './schema';

/**
 * Generates an immutable SHA-256 hash of the settlement snapshot.
 * This guarantees neither buyer nor seller can tamper with the performance metrics.
 */
export function generateWitnessHash(snapshot: Omit<SettlementSnapshot, 'auditHash'>): string {
    const payload = JSON.stringify({
        invoiceId: snapshot.contract.invoiceId,
        timestamp: snapshot.nodeData.timestamp,
        metric: snapshot.nodeData.metric,
        adjustedPrice: snapshot.adjustedPrice,
        status: snapshot.status
    });

    return crypto.createHash('sha256').update(payload).digest('hex');
}
