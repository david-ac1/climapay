import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col pt-12">
            {/* Top Bar for landing */}
            <header className="px-12 flex justify-between items-center z-50 fixed top-0 w-full glass-stroke bg-[#131313]/50 backdrop-blur-3xl py-4">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-2xl">account_balance</span>
                    <h1 className="text-2xl font-bold tracking-tighter text-primary font-headline">ClimaPay</h1>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="/dashboard" className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors">Documentation</Link>
                    <Link href="/dashboard" className="px-6 py-2 bg-primary text-on-primary font-headline font-bold text-xs rounded uppercase tracking-wide hover:brightness-110 transition-all shadow-[0_0_20px_rgba(0,225,171,0.2)]">
                        Launch Platform
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex-1 flex flex-col items-center justify-center px-6 relative mt-16 text-center">
                {/* Center glowing orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10" />

                <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="font-label text-[10px] text-primary tracking-[0.2em] uppercase font-bold">Mainnet Live V1.0</span>
                </div>

                <h1 className="text-6xl md:text-[80px] leading-[0.95] font-extrabold font-headline tracking-tighter max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-white to-on-surface-variant">
                    Execution-Layer <br /> for the <span className="text-primary italic font-light pr-2">ESG</span> Paradigm
                </h1>

                <p className="mt-8 text-on-surface-variant max-w-2xl text-lg md:text-xl font-body leading-relaxed">
                    ClimaPay binds financial clearing natively to environmental realities. Execute smart-clauses perfectly anchored to cryptographic telemetry networks. No greenwashing. Mathematically certain.
                </p>

                <div className="mt-12 flex flex-col sm:flex-row gap-6">
                    <Link href="/dashboard" className="pl-6 pr-8 py-4 bg-primary text-on-primary font-headline font-bold text-sm tracking-widest uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,225,171,0.25)] flex items-center gap-3">
                        <span className="material-symbols-outlined">rocket_launch</span>
                        Enter App Console
                    </Link>
                    <Link href="/invoice" className="px-8 py-4 glass-stroke bg-[#1C1B1B]/40 hover:bg-white/5 font-headline font-bold text-sm tracking-widest uppercase transition-all flex items-center gap-3">
                        <span className="material-symbols-outlined text-tertiary">receipt_long</span>
                        View Live Invoices
                    </Link>
                </div>
            </main>

            {/* Bento Callouts mapping to architecture */}
            <section className="px-12 py-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto w-full relative z-10">
                <div className="glass-stroke bg-[#131313]/60 backdrop-blur-xl p-8 rounded border-t-2 border-primary group">
                    <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform">lock</span>
                    <h3 className="font-headline font-bold text-xl mb-2 text-white">Cryptographic Witness</h3>
                    <p className="text-sm text-on-surface-variant font-label leading-relaxed">
                        Immutable execution hashes stored directly on SQLite ledgers. Ensuring audit-ready certainty.
                    </p>
                </div>
                <div className="glass-stroke bg-[#131313]/60 backdrop-blur-xl p-8 rounded border-t-2 border-secondary group">
                    <span className="material-symbols-outlined text-4xl text-secondary mb-4 group-hover:-rotate-12 transition-transform">hub</span>
                    <h3 className="font-headline font-bold text-xl mb-2 text-white">Oracle Network</h3>
                    <p className="text-sm text-on-surface-variant font-label leading-relaxed">
                        Direct integration with EU Grid, Climatiq, and standard shipping telemetries for zero latency reporting.
                    </p>
                </div>
                <div className="glass-stroke bg-[#131313]/60 backdrop-blur-xl p-8 rounded border-t-2 border-tertiary group">
                    <span className="material-symbols-outlined text-4xl text-tertiary mb-4 group-hover:translate-x-2 transition-transform">receipt_long</span>
                    <h3 className="font-headline font-bold text-xl mb-2 text-white">Adaptive Invoicing</h3>
                    <p className="text-sm text-on-surface-variant font-label leading-relaxed">
                        Settlement totals actively fluctuate on-chain, triggering ESG rebates or carbon-penalty multipliers smoothly.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 py-8 px-12 flex justify-between items-center text-on-surface-variant font-label text-xs uppercase tracking-widest mt-auto">
                <p>© 2026 ClimaPay Institutional Protocol</p>
                <p className="flex items-center gap-2">Status: <span className="text-primary font-bold">100% OPERATIONAL</span></p>
            </footer>
        </div>
    );
}
