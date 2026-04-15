"use client";

import React, { useEffect, useState } from 'react';
import { SettlementSnapshot } from '@/lib/core/schema';
import DashboardShell from '@/components/layout/DashboardShell';

export default function InvoiceClient({ initialContract }: { initialContract: any }) {
    const [snapshot, setSnapshot] = useState<SettlementSnapshot | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchOracle = async () => {
        setLoading(true);
        try {
            const resp = await fetch('/api/oracle/ingest', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    invoiceId: initialContract.invoiceId,
                    basePrice: initialContract.basePrice,
                    carbonCeiling: initialContract.carbonCeiling,
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


    const executePayment = async () => {
        if (!snapshot?.auditHash) return;
        setLoading(true);
        try {
            const resp = await fetch('/api/settlement/execute', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ auditHash: snapshot.auditHash })
            });
            if (resp.ok) {
                setSnapshot({ ...snapshot, status: 'EXECUTED' });
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOracle();
    }, [initialContract.invoiceId]);

    if (loading || !snapshot) {
        return (
            <DashboardShell>
                <div className="p-12 text-on-surface-variant font-mono animate-pulse">
                    Requesting ESG Verification for {initialContract.invoiceId}...
                </div>
            </DashboardShell>
        );
    }

    const { contract, adjustedPrice, excessCarbon, rebateApplied, status, nodeData, auditHash } = snapshot;
    const formatter = new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR' });

    return (
        <DashboardShell>
            <div className="flex justify-between items-end mb-12">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className={`w-2 h-2 rounded-full ${status === 'VERIFIED' ? 'bg-primary' : 'bg-tertiary animate-pulse'}`} />
                        <span className={`font-label text-xs uppercase tracking-[0.2em] ${status === 'VERIFIED' ? 'text-primary' : 'text-tertiary'}`}>
                            Verification: {status}
                        </span>
                    </div>
                    <h2 className="text-4xl font-extrabold font-headline tracking-tighter uppercase">Invoice #{contract.invoiceId}</h2>
                </div>
                <div className="flex gap-4">
                    <button onClick={fetchOracle} disabled={status === 'EXECUTED'} className="px-6 py-2 glass-stroke text-xs font-label uppercase tracking-widest hover:bg-white/10 transition-all disabled:opacity-50 rounded-[4px]">
                        Simulate Next Block
                    </button>
                    <button onClick={executePayment} disabled={status === 'EXECUTED'} className="px-6 py-2 bg-primary text-on-primary text-xs font-label font-bold uppercase tracking-widest hover:brightness-110 transition-all disabled:opacity-50 disabled:bg-surface-container-high disabled:text-on-surface-variant flex items-center gap-2 rounded-[4px]">
                        {status === 'EXECUTED' ? <><span className="material-symbols-outlined text-sm">lock</span> Settled On-Chain</> : 'Execute Payment'}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 lg:col-span-8">
                    <div className="glass-stroke bg-[#1C1B1B]/60 p-10 backdrop-blur-xl relative overflow-hidden rounded-[8px]">
                        <div className={`absolute left-0 top-0 bottom-0 w-[2px] ${status === 'VERIFIED' ? 'bg-primary' : 'bg-tertiary'}`} />
                        <div className="grid grid-cols-2 gap-12 mb-16">
                            <div>
                                <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">Issuer</p>
                                <p className="font-headline font-bold text-lg mb-1 italic">ClimaPay Infrastructure Ltd.</p>
                                <p className="text-on-surface-variant text-sm leading-relaxed">
                                    Terminal 4, Tech Plaza<br />
                                    Geneva, Switzerland 1201
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">Bill To</p>
                                <p className="font-headline font-bold text-lg mb-1">{contract.buyerName}</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-3 px-6">
                            <div className="flex justify-between w-64 border-b border-outline-variant/20 pb-2">
                                <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">Base Rate</span>
                                <span className="font-label text-sm line-through decoration-tertiary/60 decoration-1 opacity-60">{formatter.format(contract.basePrice)}</span>
                            </div>
                            <div className={`relative flex justify-between items-center w-full mt-6 bg-surface-container-high/40 p-6 rounded-[4px]`}>
                                <div className="flex flex-col">
                                    <span className={`font-label text-xs font-bold uppercase tracking-[0.3em] ${status === 'VERIFIED' ? 'text-primary' : 'text-tertiary'}`}>
                                        Adjusted Total
                                    </span>
                                    <span className="text-[10px] text-on-surface-variant font-label mt-1 italic uppercase tracking-wider">Oracle Audited Result</span>
                                </div>
                                <span className={`text-5xl font-label font-bold tracking-tight ${status === 'VERIFIED' ? 'text-primary' : 'text-tertiary'}`}>
                                    {formatter.format(adjustedPrice)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-4 space-y-8">
                    <div className="glass-stroke bg-[#1C1B1B]/40 p-6 relative overflow-hidden rounded-[8px]">
                        <div className={`absolute left-0 top-0 bottom-0 w-[2px] ${status === 'VERIFIED' ? 'bg-primary' : 'bg-tertiary'}`} />
                        <h3 className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">energy_savings_leaf</span>
                            Verification Stream
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <p className={`text-4xl font-label font-bold ${status === 'VERIFIED' ? 'text-on-surface' : 'text-tertiary'}`}>
                                    {nodeData.metric}<span className="text-sm font-normal text-on-surface-variant ml-1">{nodeData.unit}</span>
                                </p>
                                <p className="text-[10px] text-on-surface-variant font-label tracking-wide uppercase mt-1">{nodeData.source}</p>
                            </div>
                            <div className="h-1 bg-surface-container-highest w-full overflow-hidden rounded-full">
                                <div className={`h-full ${excessCarbon > 0 ? 'bg-tertiary' : 'bg-primary'}`} style={{ width: `${Math.min((nodeData.metric / contract.carbonCeiling) * 100, 100)}%` }} />
                            </div>
                        </div>
                    </div>

                    <div className="glass-stroke bg-surface-container-low/40 h-48 relative overflow-hidden flex flex-col justify-end p-6 rounded-[8px]">
                        <div className="z-10 relative">
                            <p className="font-label text-[10px] text-primary tracking-widest uppercase mb-1">Audit Witness</p>
                            <p className="font-mono text-xs text-on-surface break-all opacity-80">{auditHash ? auditHash : 'AWAITING SIGNATURE...'}</p>
                            <p className="font-mono text-[9px] text-on-surface-variant uppercase mt-3 italic">Verified Block: #CP-LEDGER-09M</p>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardShell>
    );
}
