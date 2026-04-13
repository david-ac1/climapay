import React from 'react';

export default function DashboardPage() {
    return (
        <>
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
                    <button className="px-5 py-2 bg-primary font-mono text-[10px] font-bold text-on-primary hover:brightness-110 transition-all flex items-center rounded-[4px]">
                        <span className="material-symbols-outlined text-sm mr-2">add_moderator</span> NEW RULESET
                    </button>
                </div>
            </div>

            {/* Featured Section: Carbon-Locked Capital */}
            <section className="grid grid-cols-12 gap-6 mb-12">
                <div className="col-span-8 bg-surface-container-low/40 glass-stroke p-8 relative overflow-hidden flex flex-col justify-between min-h-[340px] rounded-[4px]">
                    <div className="absolute top-0 right-0 p-8">
                        <div className="mono-metrics text-primary text-[64px] font-bold tracking-tighter leading-none">94.2%</div>
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
                            <span className="block mono-metrics text-2xl text-on-surface">$1.24B</span>
                        </div>
                        <div className="space-y-1">
                            <span className="block text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Yield Delta</span>
                            <span className="block mono-metrics text-2xl text-secondary">+12.4%</span>
                        </div>
                        <div className="space-y-1">
                            <span className="block text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Active nodes</span>
                            <span className="block mono-metrics text-2xl text-on-surface">1,822</span>
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

            {/* Horizontal Gauges: Emission Levels */}
            <section className="mb-12">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-headline text-sm font-bold tracking-widest uppercase">Sector Emission Thresholds</h3>
                    <span className="mono-metrics text-[10px] text-on-surface-variant">REFRESHED: 14:02:11 GMT</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-surface-container-low p-6 border-l-2 border-primary rounded-[4px]">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <span className="text-[10px] font-mono text-on-surface-variant uppercase block">Sector ID</span>
                                <span className="text-sm font-headline font-bold">Logistics & Supply Chain</span>
                            </div>
                            <span className="mono-metrics text-xl text-primary">212.5 KT</span>
                        </div>
                        <div className="relative w-full h-3 bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="absolute top-0 left-0 h-full bg-primary" style={{ width: '25%' }} />
                        </div>
                        <div className="flex justify-between mt-2 font-mono text-[9px] text-on-surface-variant">
                            <span>LOW EMISSION (OPTIMAL)</span>
                            <span>THRESHOLD: 800 KT</span>
                        </div>
                    </div>

                    <div className="bg-surface-container-low p-6 border-l-2 border-tertiary rounded-[4px]">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <span className="text-[10px] font-mono text-on-surface-variant uppercase block">Sector ID</span>
                                <span className="text-sm font-headline font-bold">Heavy Manufacturing</span>
                            </div>
                            <span className="mono-metrics text-xl text-tertiary">941.0 KT</span>
                        </div>
                        <div className="relative w-full h-3 bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="absolute top-0 left-0 h-full bg-tertiary" style={{ width: '78%' }} />
                        </div>
                        <div className="flex justify-between mt-2 font-mono text-[9px] text-on-surface-variant">
                            <span>HIGH EMISSION (ATTENTION)</span>
                            <span>THRESHOLD: 1,200 KT</span>
                        </div>
                    </div>

                    <div className="bg-surface-container-low p-6 border-l-2 border-primary rounded-[4px]">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <span className="text-[10px] font-mono text-on-surface-variant uppercase block">Sector ID</span>
                                <span className="text-sm font-headline font-bold">Renewable Energy Credits</span>
                            </div>
                            <span className="mono-metrics text-xl text-primary">12.2 KT</span>
                        </div>
                        <div className="relative w-full h-3 bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="absolute top-0 left-0 h-full bg-primary" style={{ width: '8%' }} />
                        </div>
                        <div className="flex justify-between mt-2 font-mono text-[9px] text-on-surface-variant">
                            <span>MINIMAL OFFSETTING</span>
                            <span>THRESHOLD: 100 KT</span>
                        </div>
                    </div>

                    <div className="bg-surface-container-low p-6 border-l-2 border-secondary rounded-[4px]">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <span className="text-[10px] font-mono text-on-surface-variant uppercase block">Sector ID</span>
                                <span className="text-sm font-headline font-bold">Cloud Infrastructure</span>
                            </div>
                            <span className="mono-metrics text-xl text-secondary">412.9 KT</span>
                        </div>
                        <div className="relative w-full h-3 bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="absolute top-0 left-0 h-full bg-secondary" style={{ width: '45%' }} />
                        </div>
                        <div className="flex justify-between mt-2 font-mono text-[9px] text-on-surface-variant">
                            <span>MODERATE LOAD</span>
                            <span>THRESHOLD: 900 KT</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Asymmetric Data Table Section */}
            <section className="grid grid-cols-12 gap-8">
                <div className="col-span-12">
                    <div className="bg-surface-container-low rounded-[4px] overflow-hidden border border-white/5">
                        <div className="px-8 py-4 bg-surface-container-highest/30 flex justify-between items-center">
                            <h4 className="font-mono text-xs font-bold tracking-widest uppercase">Transaction Watchlist</h4>
                            <div className="flex space-x-2">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                <span className="w-2 h-2 rounded-full bg-outline-variant" />
                                <span className="w-2 h-2 rounded-full bg-outline-variant" />
                            </div>
                        </div>
                        <table className="w-full text-left">
                            <thead className="bg-surface-container-highest/20 font-mono text-[10px] text-on-surface-variant tracking-widest uppercase">
                                <tr>
                                    <th className="px-8 py-4 font-normal">Timestamp</th>
                                    <th className="px-8 py-4 font-normal">Entity</th>
                                    <th className="px-8 py-4 font-normal">Volume</th>
                                    <th className="px-8 py-4 font-normal">ESG Rating</th>
                                    <th className="px-8 py-4 font-normal">Status</th>
                                </tr>
                            </thead>
                            <tbody className="mono-metrics text-[11px]">
                                <tr className="bg-surface border-b border-outline-variant/10 hover:bg-surface-container transition-colors">
                                    <td className="px-8 py-4 text-on-surface-variant">2023.11.24 | 09:12</td>
                                    <td className="px-8 py-4 font-bold text-on-surface">Nordic Grids Ltd.</td>
                                    <td className="px-8 py-4">42.4M credits</td>
                                    <td className="px-8 py-4 text-primary">AAA+</td>
                                    <td className="px-8 py-4">
                                        <span className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-[2px]">EXECUTED</span>
                                    </td>
                                </tr>
                                <tr className="bg-surface-container-low border-b border-outline-variant/10 hover:bg-surface-container transition-colors">
                                    <td className="px-8 py-4 text-on-surface-variant">2023.11.24 | 08:44</td>
                                    <td className="px-8 py-4 font-bold text-on-surface">Amazonia Conservation</td>
                                    <td className="px-8 py-4">128.9M credits</td>
                                    <td className="px-8 py-4 text-primary">AA</td>
                                    <td className="px-8 py-4">
                                        <span className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-[2px]">EXECUTED</span>
                                    </td>
                                </tr>
                                <tr className="bg-surface border-b border-outline-variant/10 hover:bg-surface-container transition-colors">
                                    <td className="px-8 py-4 text-on-surface-variant">2023.11.24 | 08:21</td>
                                    <td className="px-8 py-4 font-bold text-on-surface">Pacific Freight Corp</td>
                                    <td className="px-8 py-4">12.1B credits</td>
                                    <td className="px-8 py-4 text-tertiary">B-</td>
                                    <td className="px-8 py-4">
                                        <span className="px-2 py-0.5 bg-tertiary/10 text-tertiary border border-tertiary/20 rounded-[2px]">PENDING AUDIT</span>
                                    </td>
                                </tr>
                                <tr className="bg-surface-container-low hover:bg-surface-container transition-colors">
                                    <td className="px-8 py-4 text-on-surface-variant">2023.11.24 | 07:55</td>
                                    <td className="px-8 py-4 font-bold text-on-surface">Global Mining Solutions</td>
                                    <td className="px-8 py-4">842.0K credits</td>
                                    <td className="px-8 py-4 text-secondary">A+</td>
                                    <td className="px-8 py-4">
                                        <span className="px-2 py-0.5 bg-secondary/10 text-secondary border border-secondary/20 rounded-[2px]">PROCESSING</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}
