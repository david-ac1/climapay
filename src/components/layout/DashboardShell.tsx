import React from 'react';
import SideNavBar from '@/components/ui/SideNavBar';
import TopAppBar from '@/components/ui/TopAppBar';

export default function DashboardShell({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="antialiased overflow-hidden">
            <SideNavBar />
            <TopAppBar />
            <main className="ml-64 pt-24 px-8 pb-12 h-screen overflow-y-auto scroll-smooth relative">
                {children}
                {/* Visual Background Elements */}
                <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-[-1]" />
                <div className="fixed top-[-5%] left-[20%] w-[30%] h-[30%] bg-secondary/5 blur-[100px] rounded-full pointer-events-none z-[-1]" />
            </main>
        </div>
    );
}
