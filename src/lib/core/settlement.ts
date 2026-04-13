import { ContractTerms, VerificationNodeData, SettlementSnapshot } from './schema';

/**
 * Executes the "Carbon-Rebate" math.
 * Final Payment = Base Price - (Excess Carbon * Penalty Rate)
 * Note: If actual carbon is below the ceiling, a flat rebate % is applied to the base price.
 */
export function calculateSettlement(
    contract: ContractTerms,
    nodeData: VerificationNodeData,
    isFaultyNode: boolean = false
): SettlementSnapshot {

    if (isFaultyNode) {
        return {
            contract,
            nodeData,
            adjustedPrice: contract.basePrice,
            excessCarbon: 0,
            rebateApplied: 0,
            status: 'PENDING_AUDIT',
        };
    }

    const { basePrice, carbonCeiling, penaltyRate, rebateRate } = contract;
    const actualCarbon = nodeData.metric;

    let adjustedPrice = basePrice;
    let excessCarbon = 0;
    let rebateApplied = 0;

    if (actualCarbon > carbonCeiling) {
        // Penalty phase
        excessCarbon = actualCarbon - carbonCeiling;
        const penaltyAmount = excessCarbon * penaltyRate;
        adjustedPrice = basePrice + penaltyAmount; // Price increases for buyer (or payment reduces for supplier based on perspective)
    } else {
        // Rebate phase (Met climate goals)
        rebateApplied = basePrice * rebateRate;
        adjustedPrice = basePrice - rebateApplied;
    }

    // Ensure price doesn't go below 0
    adjustedPrice = Math.max(0, adjustedPrice);

    return {
        contract,
        nodeData,
        adjustedPrice,
        excessCarbon,
        rebateApplied,
        status: 'VERIFIED',
    };
}
