import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'ClimaPay | Institutional Ledger',
    description: 'Smart-Clause Environmental Execution Platform',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;500&family=Geist+Mono:wght@400;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </head>
            <body className="bg-background text-on-surface font-body selection:bg-primary/30 min-h-screen">
                {/* Universal Background Gradients mapped from PRD/clima-screens */}
                <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#00E1AB]/5 blur-[120px]" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#B8D300]/5 blur-[120px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00E1AB]/10 to-transparent" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[#B8D300]/10 to-transparent" />
                </div>
                {children}
            </body>
        </html>
    );
}
