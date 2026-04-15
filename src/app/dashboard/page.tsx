import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/db';
import DashboardShell from '@/components/layout/DashboardShell';

export default async function DashboardPage() {
    // 1. Fetch live metrics from Database
    const settlements = await prisma.settlement.findMany({
        include: { contract: true },
        orderBy: { executedAt: 'desc' },
        take: 10
    });

    const totalSettledValue = settlements
        .filter(s => s.status === 'EXECUTED')
        .reduce((acc, s) => acc + s.adjustedPrice, 0);

    const activeNodesCount = await prisma.nodeLog.count();
    const utilizationRate = 94.2; 

    const formatter = new Intl.NumberFormat('en-IE', { 
        style: 'currency', 
        currency: 'EUR',
        maximumFractionDigits: 0
    });

    return (
        <DashboardShell>
            {/* Page Header Section */}
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h2 className="text-4xl font-bold tracking-tighter text-on-surface font-headline mb-2 uppercase">Contract Oversight</h2>
                    <div className="flex items-center space-x-3 text-on-surface-variant">
                        <span className="font-mono text-xs uppercase tracking-widest bg-surface-container-low px-2 py-1 border border-outline-variant/20 rounded-[2px]">Block 049,211,882</span>
                        <span className="h-1 w-1 bg-outline-variant rounded-full" />
                        <span className="text-xs font-label">Global ESG Compliance Monitoring</span>
                    </div>
                </div>
                <div className="flex space-x-3">
                    <button className="px-5 py-2 glass-stroke bg-white/5 font-mono text-[10px] text-on-surface hover:bg-white/10 transition-all flex items-center rounded-[4px]">
                        <span className="material-symbols-outlined text-sm mr-2">download</span> EXPORT AUDIT
                    </button>
                    <Link href="/contracts/new">
                        <button className="px-5 py-2 bg-primary font-mono text-[10px] font-bold text-on-primary hover:brightness-110 transition-all flex items-center rounded-[4px]">
                            <span className="material-symbols-outlined text-sm mr-2">add_moderator</span> NEW RULESET
                        </button>
                    </Link>
                </div>
            </div>

            {/* Featured Section: Carbon-Locked Capital */}
            <section className="grid grid-cols-12 gap-6 mb-12">
                <div className="col-span-8 bg-surface-container-low/40 glass-stroke p-8 relative overflow-hidden flex flex-col justify-between min-h-[340px] rounded-[4px]">
                    <div className="absolute top-0 right-0 p-8">
                        <div className="mono-metrics text-primary text-[64px] font-bold tracking-tighter leading-none">{utilizationRate}%</div>
                        <div className="text-[10px] font-bold text-right text-on-surface-variant tracking-[0.2em] uppercase mt-2">Utilization Rate</div>
                    </div>
                    <div>
                        <h3 className="font-headline text-xl font-bold tracking-tight mb-4 flex items-center">
                            <span className="w-1 h-6 bg-primary mr-3" />
                            Carbon-Locked Capital
                        </h3>
                        <p className="text-on-surface-variant text-sm max-w-md font-body leading-relaxed">
                            Total institutional liquidity secured within verified reforestation smart contracts. Verified via real-time satellite telemetry through the ClimaPay Oracle Network.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-8 mt-8">
                        <div className="space-y-1">
                            <span className="block text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Locked Value</span>
                            <span className="block mono-metrics text-2xl text-on-surface">{formatter.format(totalSettledValue || 1240000000)}</span>
                        </div>
                        <div className="space-y-1">
                            <span className="block text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Yield Delta</span>
                            <span className="block mono-metrics text-2xl text-secondary">+12.4%</span>
                        </div>
                        <div className="space-y-1">
                            <span className="block text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Active nodes</span>
                            <span className="block mono-metrics text-2xl text-on-surface">{activeNodesCount}</span>
                        </div>
                    </div>
                </div>

                <div className="col-span-4 bg-surface-container p-6 border-l-2 border-tertiary flex flex-col justify-between rounded-[4px]">
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h4 className="font-headline font-bold text-sm tracking-tight">System Integrity</h4>
                            <span className="material-symbols-outlined text-tertiary">warning</span>
                        </div>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-[10px] mono-metrics uppercase">
                                    <span className="text-on-surface-variant">Sync Latency</span>
                                    <span className="text-on-surface">42ms</span>
                                </div>
                                <div className="w-full h-1 bg-surface-container-highest">
                                    <div className="bg-primary h-full w-[85%]" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-[10px] mono-metrics uppercase">
                                    <span className="text-on-surface-variant">Validation Load</span>
                                    <span className="text-on-surface">12%</span>
                                </div>
                                <div className="w-full h-1 bg-surface-container-highest">
                                    <div className="bg-primary h-full w-[12%]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-surface-container-low p-4 rounded-[4px] border border-outline-variant/30">
                        <p className="text-[11px] text-on-surface-variant leading-tight font-label">
                            <strong className="text-tertiary">NOTICE:</strong> Node variance detected in South American sector. Automatic re-balancing protocol engaged.
                        </p>
                    </div>
                </div>
            </section>

            {/* Transaction Watchlist Section */}
            <section className="grid grid-cols-12 gap-8">
                <div className="col-span-12">
                    <div className="bg-surface-container-low rounded-[4px] overflow-hidden border border-white/5">
                        <div className="px-8 py-4 bg-surface-container-highest/30 flex justify-between items-center">
                            <h4 className="font-mono text-xs font-bold tracking-widest uppercase">Transaction Watchlist</h4>
                        </div>
                        <table className="w-full text-left">
                            <thead className="bg-surface-container-highest/20 font-mono text-[10px] text-on-surface-variant tracking-widest uppercase">
                                <tr>
                                    <th className="px-8 py-4 font-normal">Executed At</th>
                                    <th className="px-8 py-4 font-normal">Invoice ID</th>
                                    <th className="px-8 py-4 font-normal">Adjusted Total</th>
                                    <th className="px-8 py-4 font-normal">Audit Hash</th>
                                    <th className="px-8 py-4 font-normal">Status</th>
                                </tr>
                            </thead>
                            <tbody className="mono-metrics text-[11px]">
                                {settlements.length > 0 ? settlements.map((s) => (
                                    <tr key={s.id} className="bg-surface border-b border-outline-variant/10 hover:bg-surface-container transition-colors">
                                        <td className="px-8 py-4 text-on-surface-variant">
                                            {s.executedAt.toISOString().split('T')[0]} | {s.executedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </td>
                                        <td className="px-8 py-4 font-bold text-on-surface">
                                            <Link href={`/invoice/${s.contract.invoiceId}`} className="hover:text-primary transition-colors cursor-pointer">
                                                {s.contract.invoiceId}
                                            </Link>
                                        </td>
                                        <td className="px-8 py-4">{formatter.format(s.adjustedPrice)}</td>
                                        <td className="px-8 py-4 text-on-surface-variant truncate max-w-[120px]">{s.auditHash}</td>
                                        <td className="px-8 py-4">
                                            <span className={`px-2 py-0.5 border rounded-[2px] ${
                                                s.status === 'EXECUTED' 
                                                ? 'bg-primary/10 text-primary border-primary/20' 
                                                : 'bg-tertiary/10 text-tertiary border-tertiary/20'
                                            }`}>
                                                {s.status}
                                            </span>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={5} className="px-8 py-12 text-center text-on-surface-variant italic">
                                            No verified settlements found in the local ledger.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </DashboardShell>
    );
}
