"use client";

import React, { useState } from 'react';

export default function NodeIngestionHub() {
    const [loading, setLoading] = useState(false);
    const [nodeId, setNodeId] = useState('NODE-UK-ESO-01');
    const [metric, setMetric] = useState('142');

    const handleIngest = async () => {
        setLoading(true);
        try {
            const resp = await fetch('/api/nodes/ingest', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nodeId,
                    metric: parseFloat(metric),
                    unit: 'gCO2/kWh',
                    source: 'Manual Override'
                })
            });
            if (resp.ok) {
                // Trigger a refresh or just show success
                window.location.reload();
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-surface-container-high/40 glass-stroke p-6 rounded-[4px] border-l-2 border-secondary">
            <h4 className="font-label text-[10px] text-secondary uppercase tracking-[0.2em] font-bold mb-4">Manual Ingestion Hub</h4>
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-[9px] uppercase text-on-surface-variant font-label tracking-widest">Node ID</label>
                        <input 
                            value={nodeId}
                            onChange={(e) => setNodeId(e.target.value)}
                            className="w-full bg-black/20 border border-outline-variant/30 px-3 py-2 text-xs font-mono text-on-surface outline-none focus:border-secondary"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[9px] uppercase text-on-surface-variant font-label tracking-widest">Metric Value</label>
                        <input 
                            type="number"
                            value={metric}
                            onChange={(e) => setMetric(e.target.value)}
                            className="w-full bg-black/20 border border-outline-variant/30 px-3 py-2 text-xs font-mono text-on-surface outline-none focus:border-secondary"
                        />
                    </div>
                </div>
                <button 
                    onClick={handleIngest}
                    disabled={loading}
                    className="w-full py-2 bg-secondary text-black font-headline font-bold text-[10px] uppercase tracking-tighter hover:brightness-110 transition-all rounded-[2px] disabled:opacity-50"
                >
                    {loading ? 'Witnessing...' : 'Inject Telemetry Block'}
                </button>
            </div>
            <p className="text-[9px] text-on-surface-variant mt-3 italic">**CAUTION**: Manual injection bypasses cryptographic hardware validation. Audit trail will list as "Manual Override".</p>
        </div>
    );
}
