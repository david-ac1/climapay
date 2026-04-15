"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardShell from '@/components/layout/DashboardShell';

export default function NewContractPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        invoiceId: `CP-${Math.floor(1000 + Math.random() * 9000)}-${['TX', 'LD', 'GL', 'AVI'][Math.floor(Math.random() * 4)]}`,
        buyerName: '',
        basePrice: '',
        carbonCeiling: '200',
        penaltyRate: '50',
        rebateRate: '0.05',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const resp = await fetch('/api/contracts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    basePrice: parseFloat(formData.basePrice),
                    carbonCeiling: parseInt(formData.carbonCeiling),
                    penaltyRate: parseFloat(formData.penaltyRate),
                    rebateRate: parseFloat(formData.rebateRate),
                }),
            });

            if (resp.ok) {
                router.push('/dashboard');
                router.refresh();
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <DashboardShell>
            <div className="max-w-4xl mx-auto py-12">
                <div className="flex items-center gap-3 mb-8">
                    <span className="w-1 h-8 bg-primary" />
                    <h2 className="text-4xl font-bold font-headline tracking-tighter text-on-surface uppercase">Sign New Ruleset</h2>
                </div>

                <div className="bg-surface-container-low/40 glass-stroke p-10 rounded-[8px] backdrop-blur-xl">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Section: Entity Information */}
                        <div className="grid grid-cols-2 gap-10">
                            <div className="space-y-2">
                                <label className="block font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Protocol ID</label>
                                <input 
                                    type="text" 
                                    disabled 
                                    value={formData.invoiceId}
                                    className="w-full bg-surface-container-high/50 border border-outline-variant/30 px-4 py-3 font-mono text-sm text-on-surface-variant rounded-[4px]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Counterparty Name</label>
                                <input 
                                    required
                                    type="text" 
                                    placeholder="e.g. Global Maritime Ltd."
                                    value={formData.buyerName}
                                    onChange={(e) => setFormData({...formData, buyerName: e.target.value})}
                                    className="w-full bg-white/5 border border-outline-variant/50 focus:border-primary px-4 py-3 font-headline text-sm text-on-surface rounded-[4px] outline-none transition-all"
                                />
                            </div>
                        </div>

                        {/* Section: Financial & ESG Thresholds */}
                        <div className="grid grid-cols-2 gap-10 pt-6 border-t border-outline-variant/10">
                            <div className="space-y-2">
                                <label className="block font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Base Contract Value (€)</label>
                                <input 
                                    required
                                    type="number" 
                                    placeholder="15000"
                                    value={formData.basePrice}
                                    onChange={(e) => setFormData({...formData, basePrice: e.target.value})}
                                    className="w-full bg-white/5 border border-outline-variant/50 focus:border-primary px-4 py-3 font-mono text-sm text-on-surface rounded-[4px] outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Carbon Ceiling (gCO2/kWh)</label>
                                <input 
                                    required
                                    type="number" 
                                    value={formData.carbonCeiling}
                                    onChange={(e) => setFormData({...formData, carbonCeiling: e.target.value})}
                                    className="w-full bg-white/5 border border-outline-variant/50 focus:border-primary px-4 py-3 font-mono text-sm text-on-surface rounded-[4px] outline-none"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-10">
                            <div className="space-y-2">
                                <label className="block font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Penalty Rate (€/unit)</label>
                                <input 
                                    required
                                    type="number" 
                                    value={formData.penaltyRate}
                                    onChange={(e) => setFormData({...formData, penaltyRate: e.target.value})}
                                    className="w-full bg-white/5 border border-outline-variant/50 focus:border-primary px-4 py-3 font-mono text-sm text-on-surface rounded-[4px] outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Rebate Rate (0.01 = 1%)</label>
                                <input 
                                    required
                                    type="number" 
                                    step="0.001"
                                    value={formData.rebateRate}
                                    onChange={(e) => setFormData({...formData, rebateRate: e.target.value})}
                                    className="w-full bg-white/5 border border-outline-variant/50 focus:border-primary px-4 py-3 font-mono text-sm text-on-surface rounded-[4px] outline-none"
                                />
                            </div>
                        </div>

                        <div className="pt-8 flex justify-end gap-4">
                            <button 
                                type="button" 
                                onClick={() => router.back()}
                                className="px-8 py-3 glass-stroke text-[11px] font-label font-bold uppercase tracking-widest hover:bg-white/5 transition-all rounded-[4px]"
                            >
                                Discard Changes
                            </button>
                            <button 
                                type="submit" 
                                disabled={loading}
                                className="px-10 py-3 bg-primary text-on-primary text-[11px] font-label font-bold uppercase tracking-widest hover:brightness-110 transition-all rounded-[4px] disabled:opacity-50"
                            >
                                {loading ? 'Auditing Transaction...' : 'Sign & Deploy Contract'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </DashboardShell>
    );
}
