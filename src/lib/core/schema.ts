export type NodeStatus = 'VERIFIED' | 'PENDING_AUDIT' | 'PROCESSING' | 'EXECUTED';

export interface VerificationNodeData {
    nodeId: string;
    source: string; // e.g., "National Grid ESO"
    timestamp: string;
    metric: number; // e.g., 200
    unit: string; // e.g., "gCO2/kWh"
    metadata?: any;
}

export interface ContractTerms {
    invoiceId: string;
    basePrice: number;
    carbonCeiling: number; // The threshold limit (T)
    penaltyRate: number; // Rate per excess unit (r)
    rebateRate: number; // Percentage discount if below threshold (e.g. 0.05 for 5%)
}

export interface SettlementSnapshot {
    contract: ContractTerms;
    nodeData: VerificationNodeData;
    adjustedPrice: number;
    excessCarbon: number;
    rebateApplied: number;
    status: NodeStatus;
    auditHash?: string;
}
