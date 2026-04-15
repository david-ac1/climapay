import React from 'react';
import { prisma } from '@/lib/db';
import DashboardShell from '@/components/layout/DashboardShell';
import NodeIngestionHub from '@/components/nodes/NodeIngestionHub';

export default async function DataNodesPage() {
    // Fetch actual node logs from the database
    const logs = await prisma.nodeLog.findMany({
        orderBy: { timestamp: 'desc' },
        take: 15
    });

    return (
        <DashboardShell>
            {/* Breadcrumbs / Section Title */}
            <div className="mb-8">
                <div className="flex items-center gap-2 font-label text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mb-2">
                    <span>System</span>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span className="text-primary">Verification Nodes</span>
                </div>
                <h2 className="text-4xl font-bold font-headline tracking-tighter text-on-surface uppercase">Data-Nodes Verification</h2>
                <p className="text-on-surface-variant max-w-2xl mt-2 font-body">Real-time cryptographic validation of supply chain and environmental data inputs via institutional-grade ledger protocol.</p>
            </div>

            {/* System Architecture Visualization Area */}
            <section className="relative h-[600px] w-full bg-[#201f1f]/60 backdrop-blur-2xl saturate-150 glass-stroke rounded-lg overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #00E1AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <div className="relative z-20 flex flex-col items-center">
                    <div className="w-48 h-48 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center relative shadow-[0_0_100px_rgba(0,225,171,0.05)]">
                        <div className="absolute inset-0 border-4 border-dashed border-primary/20 rounded-full animate-[spin_30s_linear_infinite]" />
                        <div className="w-32 h-32 rounded-full bg-[#201f1f]/60 backdrop-blur-2xl saturate-150 glass-stroke flex flex-col items-center justify-center shadow-[0_0_64px_rgba(0,225,171,0.1)]">
                            <span className="material-symbols-outlined text-primary text-5xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                            <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">Verified</span>
                        </div>
                    </div>
                </div>

                {/* Node Indicators */}
                <div className="absolute top-[15%] left-[10%] w-64 p-4 bg-[#201f1f]/80 backdrop-blur-2xl glass-stroke rounded-sm border-l-2 border-primary shadow-2xl">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-surface-container-high flex items-center justify-center rounded">
                                <span className="material-symbols-outlined text-primary text-lg">local_shipping</span>
                            </div>
                            <span className="font-headline font-semibold text-sm">Shipping API</span>
                        </div>
                        <span className="font-label text-[10px] text-primary">ONLINE</span>
                    </div>
                    <div className="space-y-1 font-label text-[10px]">
                        <div className="flex justify-between">
                            <span className="text-on-surface-variant uppercase tracking-tighter">Data Integrity</span>
                            <span className="text-primary font-bold">99.98%</span>
                        </div>
                    </div>
                </div>

                <div className="absolute top-[15%] right-[10%] w-64 p-4 bg-[#201f1f]/80 backdrop-blur-2xl glass-stroke rounded-sm border-l-2 border-primary shadow-2xl">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-surface-container-high flex items-center justify-center rounded">
                                <span className="material-symbols-outlined text-primary text-lg">grid_view</span>
                            </div>
                            <span className="font-headline font-semibold text-sm">Grid Intensity</span>
                        </div>
                        <span className="font-label text-[10px] text-primary">SYNCED</span>
                    </div>
                    <div className="space-y-1 font-label text-[10px]">
                        <div className="flex justify-between">
                            <span className="text-on-surface-variant uppercase tracking-tighter">Latest Metric</span>
                            <span className="text-on-surface font-mono">{logs[0]?.metric || 0} {logs[0]?.unit || 'g/kWh'}</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-12 gap-8 mt-12 mb-12 items-start">
                <div className="col-span-8 bg-surface-container-low/20 p-8 glass-stroke rounded-[4px]">
                    <h3 className="font-headline font-bold text-lg mb-4 flex items-center gap-3">
                        <span className="w-1 h-6 bg-secondary" />
                        Platform Telemetry Strategy
                    </h3>
                    <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-6">
                        Verification nodes act as trustless oracles, cryptographically signing energy intensity and logistics data before commitment to the ClimaPay ledger. 
                        Users can manually inject validated blocks for testing and verification purposes using the Ingestion Hub.
                    </p>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="p-4 bg-surface-container rounded-[4px] border border-outline-variant/20">
                            <span className="block text-[10px] text-on-surface-variant font-label uppercase tracking-widest mb-1">Active Nodes</span>
                            <span className="block text-2xl font-mono text-on-surface">12</span>
                        </div>
                        <div className="p-4 bg-surface-container rounded-[4px] border border-outline-variant/20">
                            <span className="block text-[10px] text-on-surface-variant font-label uppercase tracking-widest mb-1">Mined Blocks</span>
                            <span className="block text-2xl font-mono text-on-surface">49.2M</span>
                        </div>
                        <div className="p-4 bg-surface-container rounded-[4px] border border-outline-variant/20">
                            <span className="block text-[10px] text-on-surface-variant font-label uppercase tracking-widest mb-1">Trust Score</span>
                            <span className="block text-2xl font-mono text-secondary">A+</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-4">
                    <NodeIngestionHub />
                </div>
            </div>

            {/* Technical Log View */}
            <section className="mt-8 bg-surface-container-low rounded-sm overflow-hidden mb-12 shadow-inner border border-white/5">
                <div className="px-6 py-4 bg-surface-container-high flex justify-between items-center border-b border-outline-variant/20">
                    <h3 className="font-label text-xs uppercase tracking-[0.2em] font-bold">Node Event Log (Institutional DB)</h3>
                    <div className="flex gap-2 items-center">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="font-label text-[10px] text-primary tracking-widest">LIVE TRANSMISSION</span>
                    </div>
                </div>
                <div className="p-6 font-mono text-[11px] text-on-surface-variant leading-relaxed overflow-x-auto min-h-[300px] bg-black/20">
                    {logs.length > 0 ? logs.map((log) => (
                        <div key={log.id} className="flex gap-4 py-1.5 hover:bg-white/5 transition-colors border-b border-outline-variant/5 group">
                            <span className="text-outline-variant shrink-0 font-bold">[{log.timestamp.toLocaleTimeString()}]</span>
                            <span className="text-primary shrink-0 uppercase font-bold tracking-tighter opacity-80 group-hover:opacity-100">METRIC_LOG</span>
                            <span className="truncate opacity-90">
                                Node <span className="text-on-surface">{log.nodeId}</span> received <span className="text-on-surface font-bold">{log.metric} {log.unit}</span> from <span className="italic">{log.source}</span>. Block signed (SHA-256).
                            </span>
                        </div>
                    )) : (
                        <div className="text-center py-20 italic text-on-surface-variant opacity-50">No node logs found in the permanent ledger.</div>
                    )}
                </div>
            </section>
        </DashboardShell>
    );
}
