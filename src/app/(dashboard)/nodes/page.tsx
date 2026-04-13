import React from 'react';

export default function DataNodesPage() {
    return (
        <>
            {/* Breadcrumbs / Section Title */}
            <div className="mb-8">
                <div className="flex items-center gap-2 font-label text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mb-2">
                    <span>System</span>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span className="text-primary">Verification Nodes</span>
                </div>
                <h2 className="text-4xl font-bold font-headline tracking-tighter text-on-surface">Data-Nodes Verification</h2>
                <p className="text-on-surface-variant max-w-2xl mt-2 font-body">Real-time cryptographic validation of supply chain and environmental data inputs via institutional-grade ledger protocol.</p>
            </div>

            {/* System Architecture Visualization Area */}
            <section className="relative h-[600px] w-full bg-[#201f1f]/60 backdrop-blur-2xl saturate-150 glass-stroke rounded-lg overflow-hidden flex items-center justify-center">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #00E1AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                {/* Central Hub (Verified Badge) */}
                <div className="relative z-20 flex flex-col items-center">
                    <div className="w-48 h-48 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center relative">
                        {/* Rotating Outer Ring Glow */}
                        <div className="absolute inset-0 border-4 border-dashed border-primary/20 rounded-full" />
                        <div className="w-32 h-32 rounded-full bg-[#201f1f]/60 backdrop-blur-2xl saturate-150 glass-stroke flex flex-col items-center justify-center shadow-[0_0_64px_rgba(0,225,171,0.1)]">
                            <span className="material-symbols-outlined text-primary text-5xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                            <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">Verified</span>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="font-label text-[10px] text-on-surface-variant uppercase">Central Ledger Node</p>
                        <p className="font-label text-sm text-primary">CP-LN-001-ALPHA</p>
                    </div>
                </div>

                {/* Connections (Lines) */}
                <div className="absolute inset-0 z-10">
                    {/* Line to Shipping */}
                    <div className="absolute top-1/2 left-1/4 right-1/2 h-[0.5px] -rotate-[25deg] origin-right translate-y-[-100px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(134, 148, 143, 0.2), rgba(0, 225, 171, 0.4), rgba(134, 148, 143, 0.2), transparent)' }} />
                    {/* Line to Grid */}
                    <div className="absolute top-1/2 left-1/2 right-1/4 h-[0.5px] rotate-[25deg] origin-left translate-y-[-100px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(134, 148, 143, 0.2), rgba(0, 225, 171, 0.4), rgba(134, 148, 143, 0.2), transparent)' }} />
                    {/* Line to Fuel */}
                    <div className="absolute top-[70%] h-[150px] w-[0.5px] bg-gradient-to-t from-transparent via-primary/40 to-primary/10 left-1/2 translate-x-[-50%]" />
                </div>

                {/* Node 1: Shipping API */}
                <div className="absolute top-[15%] left-[10%] w-64 p-4 bg-[#201f1f]/60 backdrop-blur-2xl glass-stroke rounded-sm border-l-2 border-primary">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-surface-container-high flex items-center justify-center rounded">
                                <span className="material-symbols-outlined text-primary text-lg">local_shipping</span>
                            </div>
                            <span className="font-headline font-semibold text-sm">Shipping API</span>
                        </div>
                        <span className="font-label text-[10px] text-primary">ONLINE</span>
                    </div>
                    <div className="space-y-1">
                        <div className="flex justify-between font-label text-[10px]">
                            <span className="text-on-surface-variant">Latent Delay</span>
                            <span className="text-on-surface">14ms</span>
                        </div>
                        <div className="flex justify-between font-label text-[10px]">
                            <span className="text-on-surface-variant">Data Integrity</span>
                            <span className="text-primary">99.98%</span>
                        </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-outline-variant/30">
                        <p className="font-label text-[9px] text-on-surface-variant truncate">HASH: 0x4f2...e3b1</p>
                    </div>
                </div>

                {/* Node 2: Grid Intensity */}
                <div className="absolute top-[15%] right-[10%] w-64 p-4 bg-[#201f1f]/60 backdrop-blur-2xl glass-stroke rounded-sm border-l-2 border-primary">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-surface-container-high flex items-center justify-center rounded">
                                <span className="material-symbols-outlined text-primary text-lg">grid_view</span>
                            </div>
                            <span className="font-headline font-semibold text-sm">Grid Intensity</span>
                        </div>
                        <span className="font-label text-[10px] text-primary">SYNCED</span>
                    </div>
                    <div className="space-y-1">
                        <div className="flex justify-between font-label text-[10px]">
                            <span className="text-on-surface-variant">Carbon Load</span>
                            <span className="text-on-surface">242g/kWh</span>
                        </div>
                        <div className="flex justify-between font-label text-[10px]">
                            <span className="text-on-surface-variant">Region</span>
                            <span className="text-on-surface">EU-WEST-1</span>
                        </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-outline-variant/30">
                        <p className="font-label text-[9px] text-on-surface-variant truncate">KEY: AES-256-GCM</p>
                    </div>
                </div>

                {/* Node 3: Fuel Logs */}
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-64 p-4 bg-[#201f1f]/60 backdrop-blur-2xl glass-stroke rounded-sm border-l-2 border-primary">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-surface-container-high flex items-center justify-center rounded">
                                <span className="material-symbols-outlined text-primary text-lg">gas_meter</span>
                            </div>
                            <span className="font-headline font-semibold text-sm">Fuel Logs</span>
                        </div>
                        <span className="font-label text-[10px] text-primary">AUDITED</span>
                    </div>
                    <div className="space-y-1">
                        <div className="flex justify-between font-label text-[10px]">
                            <span className="text-on-surface-variant">Consumption</span>
                            <span className="text-on-surface">1,240.5 L</span>
                        </div>
                        <div className="flex justify-between font-label text-[10px]">
                            <span className="text-on-surface-variant">Proof of Origin</span>
                            <span className="text-secondary">Verified</span>
                        </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-outline-variant/30">
                        <p className="font-label text-[9px] text-on-surface-variant truncate">REF: LOG-BNK-992</p>
                    </div>
                </div>
            </section>

            {/* Metrics Bento Grid */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                <div className="col-span-1 p-6 bg-surface-container-low rounded-sm border-l-2 border-secondary">
                    <p className="text-on-surface-variant font-label text-xs uppercase tracking-wider mb-2">Network Health</p>
                    <h4 className="text-3xl font-bold font-label text-secondary">99.9%</h4>
                    <div className="mt-4 h-1 bg-surface-container-high rounded-full overflow-hidden">
                        <div className="h-full bg-secondary w-[99.9%]" />
                    </div>
                </div>
                <div className="col-span-1 p-6 bg-surface-container-low rounded-sm border-l-2 border-primary">
                    <p className="text-on-surface-variant font-label text-xs uppercase tracking-wider mb-2">Nodes Active</p>
                    <h4 className="text-3xl font-bold font-label text-primary">1,204</h4>
                    <p className="text-[10px] text-on-surface-variant mt-2 font-label">+12 in last 1h</p>
                </div>
                <div className="col-span-2 p-6 bg-surface-container-low rounded-sm relative overflow-hidden group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-on-surface-variant font-label text-xs uppercase tracking-wider mb-2">Institutional Trust Score</p>
                            <h4 className="text-3xl font-bold font-label text-on-surface">AA+ <span className="text-sm font-normal text-on-surface-variant">/ Stable</span></h4>
                        </div>
                        <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary">shield_with_heart</span>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 left-0 h-16 opacity-20 pointer-events-none">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 20">
                            <path d="M0 20 L10 15 L20 18 L30 12 L40 16 L50 8 L60 14 L70 10 L80 15 L90 5 L100 12 L100 20 Z" fill="#00E1AB" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Technical Log View */}
            <section className="mt-8 bg-surface-container-low rounded-sm overflow-hidden mb-12">
                <div className="px-6 py-4 bg-surface-container-high flex justify-between items-center">
                    <h3 className="font-label text-xs uppercase tracking-[0.2em] font-bold">Node Event Log</h3>
                    <div className="flex gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="font-label text-[10px] text-primary">LIVE TRANSMISSION</span>
                    </div>
                </div>
                <div className="p-4 font-label text-[11px] text-on-surface-variant leading-relaxed overflow-x-auto">
                    <div className="flex gap-4 py-1 hover:bg-white/5 transition-colors">
                        <span className="text-outline shrink-0">[14:22:01.002]</span>
                        <span className="text-primary shrink-0">AUTH_SUCCESS</span>
                        <span className="truncate">Connection established with Node: SHIPPING_PORT_ROTTERDAM_API-V3</span>
                    </div>
                    <div className="flex gap-4 py-1 hover:bg-white/5 transition-colors">
                        <span className="text-outline shrink-0">[14:22:00.844]</span>
                        <span className="text-secondary shrink-0">BLOCK_FORGED</span>
                        <span className="truncate">New ESG Block #109283-A committed to central ledger. Latency: 22ms.</span>
                    </div>
                    <div className="flex gap-4 py-1 hover:bg-white/5 transition-colors">
                        <span className="text-outline shrink-0">[14:21:58.129]</span>
                        <span className="text-tertiary shrink-0">NODE_PING</span>
                        <span className="truncate">FUEL_MONITOR_SATELLITE-B4 reporting signal variance within acceptable ±0.02% range.</span>
                    </div>
                    <div className="flex gap-4 py-1 hover:bg-white/5 transition-colors">
                        <span className="text-outline shrink-0">[14:21:55.990]</span>
                        <span className="text-primary shrink-0">DATA_REPLICATION</span>
                        <span className="truncate">Grid intensity data mirrored to institutional nodes in [NY, LON, HK, SIN].</span>
                    </div>
                </div>
            </section>
        </>
    );
}
