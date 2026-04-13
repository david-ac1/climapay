import React from 'react';

export default function TopAppBar() {
    return (
        <header className="flex justify-between items-center px-8 h-16 w-[calc(100%-16rem)] fixed top-0 right-0 z-50 bg-[#0D0D0D]/80 backdrop-blur-2xl border-b border-[#00E1AB]/10">
            <div className="flex items-center space-x-6">
                <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-sm">search</span>
                    <input
                        className="bg-surface-container-lowest border-0.5 border-outline-variant text-on-surface text-xs mono-metrics w-80 pl-10 py-2 focus:ring-1 focus:ring-primary focus:border-primary rounded-[4px]"
                        placeholder="Audit hash or contract ID..."
                        type="text"
                    />
                </div>
                <div className="flex items-center px-3 py-1 bg-primary/5 border border-primary/20 rounded-[4px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse mr-2" />
                    <span className="text-[10px] font-bold text-primary tracking-wider font-headline">Verification: Verified</span>
                </div>
            </div>
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4">
                    <button className="text-on-surface-variant hover:text-primary transition-all">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <button className="text-on-surface-variant hover:text-primary transition-all">
                        <span className="material-symbols-outlined">settings</span>
                    </button>
                </div>
                <div className="h-8 w-8 rounded-[4px] overflow-hidden border border-outline-variant/30">
                    <img
                        className="h-full w-full object-cover"
                        alt="professional portrait of institutional investor in a sharp suit with dark background and moody corporate lighting"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg7DJ2TpTMyN_qGzWA1pdGuhmCKFUJUBQIOsx23HowOPIthnleorrmU9sH4QlVNP-wFEjkSx62pplPJYpqDW-wqKAeVL7WqY0Eo7gPhXBPx7R9QOtzlfYTvby7OLpmOpaM8-FFI8XYHD3qz07CaKrPsyPi00OP1TyhO8VlxUcTzSc2KX75Xjet0Lho_ibZClKm0EXWLuGUdjfggpSZBy9EFMgerpWIDhM4esh_xxzWaJVgpnQtOim1-ZXb3hBH79NJsg5oS-Wq4UQ"
                    />
                </div>
            </div>
        </header>
    );
}
