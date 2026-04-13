import React from 'react';

export default function InvoicePage() {
    return (
        <>
            {/* Page Header */}
            <div className="flex justify-between items-end mb-12">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        <span className="font-label text-xs text-primary uppercase tracking-[0.2em]">Transaction View</span>
                    </div>
                    <h2 className="text-4xl font-extrabold font-headline tracking-tighter">Invoice #CP-9928-TX</h2>
                </div>
                <div className="flex gap-4">
                    <button className="px-6 py-2 glass-stroke text-xs font-label uppercase tracking-widest hover:bg-white/5 transition-all">Download PDF</button>
                    <button className="px-6 py-2 bg-primary text-on-primary text-xs font-label font-bold uppercase tracking-widest hover:brightness-110 transition-all">Execute Payment</button>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-8">
                {/* Main Invoice Body */}
                <div className="col-span-12 lg:col-span-8">
                    <div className="glass-stroke bg-[#1C1B1B]/60 p-10 backdrop-blur-xl relative overflow-hidden">
                        {/* Left Indicator Tab */}
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary" />
                        {/* Invoice Header Info */}
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
                                <p className="font-headline font-bold text-lg mb-1">Global Logistics Corp</p>
                                <p className="text-on-surface-variant text-sm leading-relaxed">
                                    Industrial Harbor Dr. 12<br />
                                    Rotterdam, Netherlands<br />
                                    Account: #GL-883-9910
                                </p>
                            </div>
                        </div>

                        {/* Technical Line Items */}
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

                        {/* Summary Section */}
                        <div className="flex flex-col items-end gap-3 px-6">
                            <div className="flex justify-between w-64 border-b border-outline-variant/20 pb-2">
                                <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">Base Total</span>
                                <span className="font-label text-sm line-through decoration-tertiary decoration-2 opacity-60">€22,600.00</span>
                            </div>
                            <div className="flex justify-between w-64 border-b border-outline-variant/20 pb-2">
                                <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">ESG Rebate (-8.5%)</span>
                                <span className="font-label text-sm text-secondary">- €1,921.00</span>
                            </div>
                            <div className="relative flex justify-between items-center w-full mt-6 bg-surface-container-high p-6 glow-mint">
                                <div className="absolute inset-0 border border-primary blur-[12px] opacity-20 -z-10" />
                                <div className="flex flex-col">
                                    <span className="font-label text-xs text-primary font-bold uppercase tracking-[0.3em]">Carbon-Adjusted Total</span>
                                    <span className="text-[10px] text-on-surface-variant font-label mt-1">TAX INCLUSIVE • AUDITED BY CLIMAPAY</span>
                                </div>
                                <span className="text-4xl font-label font-bold text-primary tracking-tight">€20,679.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Side Panel Widgets */}
                <div className="col-span-12 lg:col-span-4 space-y-8">
                    {/* Impact Score Card */}
                    <div className="glass-stroke bg-[#1C1B1B]/40 p-6 relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-tertiary" />
                        <h3 className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">energy_savings_leaf</span>
                            Emission Analysis
                        </h3>
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-3xl font-label font-bold">14.2<span className="text-sm font-normal text-on-surface-variant ml-1">MT</span></p>
                                    <p className="text-[10px] text-on-surface-variant font-label tracking-wide">NET CO2 OFFSET</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-secondary font-label text-sm font-bold">+12% vs LY</span>
                                </div>
                            </div>
                            <div className="h-1 bg-surface-container-highest w-full overflow-hidden">
                                <div className="h-full bg-primary" style={{ width: '72%' }} />
                            </div>
                        </div>
                    </div>

                    {/* Ledger History */}
                    <div className="glass-stroke bg-[#1C1B1B]/40 p-6 relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary" />
                        <h3 className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-6">Ledger Activity</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-1 bg-primary-container h-10" />
                                <div>
                                    <p className="text-xs font-bold font-headline">Invoice Generated</p>
                                    <p className="text-[10px] font-label text-on-surface-variant uppercase">OCT 24, 09:12 AM</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-1 bg-surface-container-highest h-10" />
                                <div>
                                    <p className="text-xs font-bold font-headline">Audit Verified</p>
                                    <p className="text-[10px] font-label text-on-surface-variant uppercase">OCT 24, 11:45 AM</p>
                                </div>
                            </div>
                            <div className="flex gap-4 opacity-40">
                                <div className="w-1 bg-surface-container-highest h-10" />
                                <div>
                                    <p className="text-xs font-bold font-headline">Awaiting Disbursement</p>
                                    <p className="text-[10px] font-label text-on-surface-variant uppercase">PENDING</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual Data Abstract */}
                    <div className="glass-stroke h-48 relative overflow-hidden">
                        <img alt="Data Visualization" className="w-full h-full object-cover opacity-50 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ufswzGYCifyv7LwcRC_T4g_KKX-olOs3Pq6GGYYL5JdGQj9Bmpx4gm7VI6ofeMCo8Y0uY3RqqFTBb1AivrWaRPK9eJBvygrSh-FEJqiM3q6xg82aSSlWjU6Ljs0EHflrSO3xvnFsxyFLiR9QEFTmpGNpIGCQnIuZjXmy4qDghL6zu3W95nSY7xUED7EGIepWYGRwga24NnnpHqiN38UE8i3RfGG7cJgNnKUC3CnXW8wk4N-MsS2IFwEOKMZS-jYLE9RPDevQBkc" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                        <div className="absolute bottom-4 left-6">
                            <p className="font-label text-[10px] text-primary tracking-widest uppercase">Encryption Key</p>
                            <p className="font-label text-xs text-white">SHA-256: 9F86...5A6B</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
