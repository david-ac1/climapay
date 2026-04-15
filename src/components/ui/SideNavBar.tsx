import React from 'react';
import Link from 'next/link';

export default function SideNavBar() {
    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-[#131313]/60 backdrop-blur-3xl border-r border-[#00E1AB]/20 flex flex-col py-6 z-[60]">
            <div className="px-6 mb-10 cursor-pointer">
                <Link href="/">
                    <h1 className="text-xl font-semibold tracking-tighter text-[#00E1AB] font-headline">ClimaPay</h1>
                </Link>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-label mt-1">Institutional Ledger</p>
            </div>
            <nav className="flex-1 px-3 space-y-1">
                <Link href="/dashboard" className="flex items-center px-4 py-3 text-[#BCCAC5] hover:text-white transition-colors hover:bg-white/5 rounded-sm">
                    <span className="material-symbols-outlined mr-3 text-sm">dashboard</span>
                    <span className="font-headline text-sm font-medium">Dashboard</span>
                </Link>
                <Link href="/nodes" className="flex items-center px-4 py-3 text-[#BCCAC5] hover:text-white transition-colors hover:bg-white/5 rounded-sm">
                    <span className="material-symbols-outlined mr-3 text-sm">hub</span>
                    <span className="font-headline text-sm font-medium">Data Nodes</span>
                </Link>
                <Link href="#" className="flex items-center px-4 py-3 text-[#BCCAC5] hover:text-white transition-colors hover:bg-white/5 rounded-sm">
                    <span className="material-symbols-outlined mr-3 text-sm">account_balance</span>
                    <span className="font-headline text-sm font-medium">ESG Ledger</span>
                </Link>
                <Link href="/invoice" className="flex items-center px-4 py-3 text-[#BCCAC5] hover:text-white transition-colors hover:bg-white/5 rounded-sm">
                    <span className="material-symbols-outlined mr-3 text-sm">receipt_long</span>
                    <span className="font-headline text-sm font-medium">Transactions</span>
                </Link>
                <Link href="#" className="flex items-center px-4 py-3 text-[#BCCAC5] hover:text-white transition-colors hover:bg-white/5 rounded-sm">
                    <span className="material-symbols-outlined mr-3 text-sm">analytics</span>
                    <span className="font-headline text-sm font-medium">Reporting</span>
                </Link>
                <Link href="#" className="flex items-center px-4 py-3 text-[#BCCAC5] hover:text-white transition-colors hover:bg-white/5 rounded-sm">
                    <span className="material-symbols-outlined mr-3 text-sm">settings</span>
                    <span className="font-headline text-sm font-medium">Settings</span>
                </Link>
            </nav>
            <div className="px-6 py-4">
                <Link href="/contracts/new">
                    <button className="w-full py-2.5 bg-primary text-on-primary font-headline font-bold text-xs rounded-[4px] tracking-tight uppercase hover:brightness-110 transition-all">
                        New Ruleset
                    </button>
                </Link>
            </div>
            <div className="px-3 pt-4 border-t border-white/5 space-y-1">
                <a className="flex items-center px-4 py-2 text-[#BCCAC5] hover:text-white transition-colors text-xs font-label" href="#">
                    <span className="material-symbols-outlined mr-3 text-lg">help_outline</span>
                    Support
                </a>
                <a className="flex items-center px-4 py-2 text-[#BCCAC5] hover:text-white transition-colors text-xs font-label" href="#">
                    <span className="material-symbols-outlined mr-3 text-lg">logout</span>
                    Sign Out
                </a>
            </div>
        </aside>
    );
}
