/**
 * @module RootLayout
 * @description Root layout component for AI Stadium OS.
 * Configures global font (Outfit), metadata for SEO, context providers,
 * and accessibility attributes for screen readers.
 */
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { AppProvider } from '@/context/AppContext';
import { AIMemoryProvider } from '@/context/AIMemoryContext';

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Stadium OS — FIFA World Cup 2026",
  description: "Enterprise-grade Digital Twin & AI Orchestration Platform for FIFA World Cup 2026 stadium operations. Real-time crowd analytics, multi-agent AI copilot, and predictive safety systems.",
  keywords: ["FIFA 2026", "Stadium OS", "AI", "Digital Twin", "Crowd Safety", "Smart Stadium"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${outfit.className} antialiased min-h-screen bg-[#0A0015] overflow-y-auto lg:overflow-hidden text-slate-100`}
        role="application"
        aria-label="AI Stadium OS - FIFA World Cup 2026 Command Center"
      >
        <AIMemoryProvider>
          <AppProvider>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black">
              Skip to main content
            </a>
            <main id="main-content">
              {children}
            </main>
          </AppProvider>
        </AIMemoryProvider>
      </body>
    </html>
  );
}
