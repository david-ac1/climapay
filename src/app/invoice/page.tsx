"use client";

import React, { useEffect, useState } from 'react';
import { SettlementSnapshot } from '@/lib/core/schema';

export default function InvoicePage() {
    const [snapshot, setSnapshot] = useState<SettlementSnapshot | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchOracle = async () => {
        setLoading(true);
        try {
            const resp = await fetch('/api/oracle/ingest', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    invoiceId: 'CP-9928-TX',
                    basePrice: 22600.00,
                    carbonCeiling: 200,
                })
            });
            const data = await resp.json();
            setSnapshot(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOracle();
    }, []);

    if (loading || !snapshot) {
        return <div className="p-12 text-on-surface-variant font-mono">Simulating Oracle Node Ingestion...</div>;
    }

    const { contract, adjustedPrice, excessCarbon, rebateApplied, status, nodeData, auditHash } = snapshot;
    const formatter = new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR' });

    return (
        <>
            <div className="flex justify-between items-end mb-12">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className={`w-2 h-2 rounded-full ${status === 'VERIFIED' ? 'bg-primary' : 'bg-tertiary animate-pulse'}`} />
                        <span className={`font-label text-xs uppercase tracking-[0.2em] ${status === 'VERIFIED' ? 'text-primary' : 'text-tertiary'}`}>
                            Verification: {status}
                        </span>
                    </div>
                    <h2 className="text-4xl font-extrabold font-headline tracking-tighter">Invoice #{contract.invoiceId}</h2>
                </div>
                <div className="flex gap-4">
                    <button onClick={fetchOracle} className="px-6 py-2 glass-stroke text-xs font-label uppercase tracking-widest hover:bg-white/5 transition-all">
                        Simulate Next Block
                    </button>
                    <button className="px-6 py-2 bg-primary text-on-primary text-xs font-label font-bold uppercase tracking-widest hover:brightness-110 transition-all">
                        Execute Payment
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 lg:col-span-8">
                    <div className="glass-stroke bg-[#1C1B1B]/60 p-10 backdrop-blur-xl relative overflow-hidden">
                        <div className={`absolute left-0 top-0 bottom-0 w-[2px] ${status === 'VERIFIED' ? 'bg-primary' : 'bg-tertiary'}`} />
                        <div className="grid grid-cols-2 gap-12 mb-16">
                            <div>
                                <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">Issuer</p>
                                <p className="font-headline font-bold text-lg mb-1">ClimaPay Infrastructure Ltd.</p>
                                <p className="text-on-surface-variant text-sm leading-relaxed">
                                    Terminal 4, Tech Plaza<br />
                                    Geneva, Switzerland 1201<br />
                                    VAT: CHE-492.302.110
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">Bill To</p>
                                <p className="font-headline font-bold text-lg mb-1">{contract.buyerName || 'Global Logistics Corp'}</p>
                                <p className="text-on-surface-variant text-sm leading-relaxed">
                                    Industrial Harbor Dr. 12<br />
                                    Rotterdam, Netherlands<br />
                                    Account: #GL-883-9910
                                </p>
                            </div>
                        </div>

                        <div className="space-y-0 mb-12">
                            <div className="grid grid-cols-12 bg-surface-container-highest px-6 py-3 mb-4">
                                <div className="col-span-6 font-label text-[10px] tracking-widest text-on-surface-variant">DESCRIPTION / ID</div>
                                <div className="col-span-2 font-label text-[10px] tracking-widest text-on-surface-variant text-center">QTY</div>
                                <div className="col-span-2 font-label text-[10px] tracking-widest text-on-surface-variant text-right">UNIT PRICE</div>
                                <div className="col-span-2 font-label text-[10px] tracking-widest text-on-surface-variant text-right">SUBTOTAL</div>
                            </div>
                            <div className="grid grid-cols-12 px-6 py-5 border-b border-outline-variant/10 hover:bg-white/5 transition-colors">
                                <div className="col-span-6">
                                    <p className="font-headline font-semibold text-sm">Carbon Offset Credit (Standard)</p>
                                    <p className="font-label text-[11px] text-on-surface-variant mt-1">REF: CC-2024-AMZ-001</p>
                                </div>
                                <div className="col-span-2 text-center font-label text-sm">1,250</div>
                                <div className="col-span-2 text-right font-label text-sm">€12.00</div>
                                <div className="col-span-2 text-right font-label text-sm">€15,000.00</div>
                            </div>
                            <div className="grid grid-cols-12 px-6 py-5 border-b border-outline-variant/10 hover:bg-white/5 transition-colors">
                                <div className="col-span-6">
                                    <p className="font-headline font-semibold text-sm">Renewable Energy Infrastructure Surcharge</p>
                                    <p className="font-label text-[11px] text-on-surface-variant mt-1">REF: RE-SUR-992</p>
                                </div>
                                <div className="col-span-2 text-center font-label text-sm">1</div>
                                <div className="col-span-2 text-right font-label text-sm">€4,200.00</div>
                                <div className="col-span-2 text-right font-label text-sm">€4,200.00</div>
                            </div>
                            <div className="grid grid-cols-12 px-6 py-5 border-b border-outline-variant/10 hover:bg-white/5 transition-colors">
                                <div className="col-span-6">
                                    <p className="font-headline font-semibold text-sm">Supply Chain Carbon Auditing Fee</p>
                                    <p className="font-label text-[11px] text-on-surface-variant mt-1">REF: AUD-TX-4402</p>
                                </div>
                                <div className="col-span-2 text-center font-label text-sm">4</div>
                                <div className="col-span-2 text-right font-label text-sm">€850.00</div>
                                <div className="col-span-2 text-right font-label text-sm">€3,400.00</div>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-3 px-6">
                            <div className="flex justify-between w-64 border-b border-outline-variant/20 pb-2">
                                <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">Base Total</span>
                                <span className="font-label text-sm line-through decoration-tertiary decoration-2 opacity-60">{formatter.format(contract.basePrice)}</span>
                            </div>
                            {rebateApplied > 0 && (
                                <div className="flex justify-between w-64 border-b border-outline-variant/20 pb-2">
                                    <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">ESG Rebate</span>
                                    <span className="font-label text-sm text-secondary">- {formatter.format(rebateApplied)}</span>
                                </div>
                            )}
                            {excessCarbon > 0 && (
                                <div className="flex justify-between w-64 border-b border-outline-variant/20 pb-2">
                                    <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">Carbon Penalty</span>
                                    <span className="font-label text-sm text-tertiary">+ {formatter.format(adjustedPrice - contract.basePrice)}</span>
                                </div>
                            )}
                            <div className={`relative flex justify-between items-center w-full mt-6 bg-surface-container-high p-6 ${status === 'VERIFIED' ? 'glow-mint' : ''}`}>
                                <div className={`absolute inset-0 border ${status === 'VERIFIED' ? 'border-primary' : 'border-tertiary'} blur-[12px] opacity-20 -z-10`} />
                                <div className="flex flex-col">
                                    <span className={`font-label text-xs font-bold uppercase tracking-[0.3em] ${status === 'VERIFIED' ? 'text-primary' : 'text-tertiary'}`}>
                                        Carbon-Adjusted Total
                                    </span>
                                    <span className="text-[10px] text-on-surface-variant font-label mt-1">TAX INCLUSIVE • AUDITED BY CLIMAPAY</span>
                                </div>
                                <span className={`text-4xl font-label font-bold tracking-tight ${status === 'VERIFIED' ? 'text-primary' : 'text-tertiary'}`}>
                                    {formatter.format(adjustedPrice)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-4 space-y-8">
                    <div className="glass-stroke bg-[#1C1B1B]/40 p-6 relative overflow-hidden">
                        <div className={`absolute left-0 top-0 bottom-0 w-[2px] ${status === 'VERIFIED' ? 'bg-primary' : 'bg-tertiary'}`} />
                        <h3 className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">energy_savings_leaf</span>
                            Node Telemetry
                        </h3>
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className={`text-3xl font-label font-bold ${status === 'VERIFIED' ? 'text-on-surface' : 'text-tertiary'}`}>
                                        {nodeData.metric}<span className="text-sm font-normal text-on-surface-variant ml-1">{nodeData.unit}</span>
                                    </p>
                                    <p className="text-[10px] text-on-surface-variant font-label tracking-wide uppercase">{nodeData.source}</p>
                                </div>
                            </div>
                            <div className="h-1 bg-surface-container-highest w-full overflow-hidden">
                                <div className={`h-full ${excessCarbon > 0 ? 'bg-tertiary' : 'bg-primary'}`} style={{ width: `${Math.min((nodeData.metric / contract.carbonCeiling) * 100, 100)}%` }} />
                            </div>
                            <div className="flex justify-between mt-2 font-mono text-[9px] text-on-surface-variant">
                                <span>THRESHOLD</span>
                                <span>{contract.carbonCeiling} {nodeData.unit}</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-stroke h-48 relative overflow-hidden flex flex-col justify-end p-6">
                        <div className="absolute inset-0 bg-[#0D0D0D] opacity-80 z-0"></div>
                        <div className="z-10 relative">
                            <p className="font-label text-[10px] text-primary tracking-widest uppercase mb-1">Cryptographic Witness</p>
                            <p className="font-label text-xs text-white break-all">{auditHash ? `SHA-256: ${auditHash}` : 'GENERATING...'}</p>
                            <p className="font-mono text-[9px] text-on-surface-variant uppercase mt-3">Node Timestamp: {nodeData.timestamp}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
