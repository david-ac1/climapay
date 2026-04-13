import React from 'react';

export default function SideNavBar() {
    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-[#131313]/60 backdrop-blur-3xl border-r border-[#00E1AB]/20 flex flex-col py-6 z-[60]">
            <div className="px-6 mb-10">
                <h1 className="text-xl font-semibold tracking-tighter text-[#00E1AB] font-headline">ClimaPay</h1>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-label mt-1">Institutional Ledger</p>
            </div>
            <nav className="flex-1 px-3 space-y-1">
                <a className="flex items-center px-4 py-3 text-[#BCCAC5] hover:text-white transition-colors hover:bg-white/5 rounded-sm" href="#">
                    <span className="material-symbols-outlined mr-3 text-sm">dashboard</span>
                    <span className="font-headline text-sm font-medium">Dashboard</span>
                </a>
                <a className="flex items-center px-4 py-3 bg-[#00E1AB]/10 text-[#00E1AB] border-l-2 border-[#00E1AB] rounded-sm" href="#">
                    <span className="material-symbols-outlined mr-3 text-sm">account_balance</span>
                    <span className="font-headline text-sm font-medium">ESG Ledger</span>
                </a>
                <a className="flex items-center px-4 py-3 text-[#BCCAC5] hover:text-white transition-colors hover:bg-white/5 rounded-sm" href="#">
                    <span className="material-symbols-outlined mr-3 text-sm">monitoring</span>
                    <span className="font-headline text-sm font-medium">Portfolio</span>
                </a>
                <a className="flex items-center px-4 py-3 text-[#BCCAC5] hover:text-white transition-colors hover:bg-white/5 rounded-sm" href="#">
                    <span className="material-symbols-outlined mr-3 text-sm">receipt_long</span>
                    <span className="font-headline text-sm font-medium">Transactions</span>
                </a>
                <a className="flex items-center px-4 py-3 text-[#BCCAC5] hover:text-white transition-colors hover:bg-white/5 rounded-sm" href="#">
                    <span className="material-symbols-outlined mr-3 text-sm">analytics</span>
                    <span className="font-headline text-sm font-medium">Reporting</span>
                </a>
                <a className="flex items-center px-4 py-3 text-[#BCCAC5] hover:text-white transition-colors hover:bg-white/5 rounded-sm" href="#">
                    <span className="material-symbols-outlined mr-3 text-sm">settings</span>
                    <span className="font-headline text-sm font-medium">Settings</span>
                </a>
            </nav>
            <div className="px-6 py-4">
                <button className="w-full py-2.5 bg-primary text-on-primary font-headline font-bold text-xs rounded-[4px] tracking-tight uppercase">
                    New Transaction
                </button>
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
