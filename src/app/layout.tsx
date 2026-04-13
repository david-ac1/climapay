import type { Metadata } from 'next';
import './globals.css';
import SideNavBar from '@/components/ui/SideNavBar';
import TopAppBar from '@/components/ui/TopAppBar';

export const metadata: Metadata = {
    title: 'Contract Oversight | ClimaPay',
    description: 'ClimaPay Institutional ESG-Linked Invoicing',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&family=Inter:wght@400;500&family=Space+Grotesk:wght@400;500&family=Geist+Mono:wght@400;600&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </head>
            <body className="antialiased overflow-hidden">
                <SideNavBar />
                <TopAppBar />
                <main className="ml-64 pt-24 px-8 pb-12 h-screen overflow-y-auto scroll-smooth relative">
                    {children}
                    {/* Visual Background Elements */}
                    <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-[-1]" />
                    <div className="fixed top-[-5%] left-[20%] w-[30%] h-[30%] bg-secondary/5 blur-[100px] rounded-full pointer-events-none z-[-1]" />
                </main>
            </body>
        </html>
    );
}
