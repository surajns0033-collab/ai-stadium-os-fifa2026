import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { AppProvider } from '@/context/AppContext';
import { AIMemoryProvider } from '@/context/AIMemoryContext';

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stadium OS - FIFA 26",
  description: "Enterprise Digital Twin & AI Orchestration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased min-h-screen bg-[#0A0015] overflow-hidden text-slate-100`}>
        <AIMemoryProvider>
          <AppProvider>
            {children}
          </AppProvider>
        </AIMemoryProvider>
      </body>
    </html>
  );
}
