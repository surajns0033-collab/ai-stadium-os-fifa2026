"use client";
import React, { useState } from 'react';

import React, { useState } from 'react';
import { useAppContext } from '@/context/AppContext';

export default function LandingPage({ onOpenLogin }: { onOpenLogin: () => void }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const { globalLang } = useAppContext();

  const getTranslation = (lang: string) => {
    switch (lang) {
      case 'es': return {
        tagline: 'Plataforma de Inteligencia Artificial',
        subtext: 'Una Plataforma Inteligente para Cada Aficionado, Voluntario y Organizador.',
        enter: 'Entrar a la Plataforma',
        status: 'Sistemas Activos',
        activeWs: 'Espacios Activos',
        pillars: 'Pilares de la Plataforma',
        cta: 'Lanzar AI Stadium OS →'
      };
      case 'hi': return {
        tagline: 'एआई प्लेटफॉर्म',
        subtext: 'हर प्रशंसक, स्वयंसेवक और आयोजक के लिए एक इंटेलिजेंट प्लेटफॉर्म।',
        enter: 'प्लेटफ़ॉर्म में प्रवेश करें',
        status: 'सभी सिस्टम सक्रिय',
        activeWs: 'सक्रिय कार्यस्थान',
        pillars: 'प्लेटफ़ॉर्म के स्तंभ',
        cta: 'AI स्टेडियम OS लॉन्च करें →'
      };
      default: return {
        tagline: 'Enterprise AI Platform',
        subtext: 'One Intelligent AI Platform for Every Fan, Every Volunteer, Every Organizer, Every Stadium Operation.',
        enter: 'Enter the Platform',
        status: 'All Systems Live',
        activeWs: 'Active Workspaces',
        pillars: 'Platform Pillars',
        cta: 'Launch AI Stadium OS →'
      };
    }
  };

  const t = getTranslation(globalLang);

  const STATS = [
    { value: '10+', label: 'Workspaces Active', color: 'text-[#2B7CE4]' },
    { value: '45k+', label: 'Fans Served Live', color: 'text-[#1AA65D]' },
    { value: '100+', label: 'Languages Supported', color: 'text-[#E20074]' },
    { value: '99.9%', label: 'System Uptime', color: 'text-yellow-400' },
  ];

  const PILLARS = [
    { icon: '🧠', title: 'AI-Powered Decisions', desc: 'Real-time predictions, recommendations and autonomous decision support across every operational domain.' },
    { icon: '🌐', title: 'Universal Platform', desc: 'One system for Fans, Volunteers, Organizers, Security, Medical, Transport, and Executives.' },
    { icon: '⚡', title: 'Event-Driven Architecture', desc: 'A single stadium event instantly cascades across all dashboards and AI agents in milliseconds.' },
    { icon: '🔒', title: 'Zero Trust Security', desc: 'Role-based access control, MFA, biometrics, and immutable audit logs at every layer.' },
    { icon: '🌍', title: 'Multilingual AI', desc: '100+ languages with context-aware tone. Fans get friendly tips; Executives get precise metrics.' },
    { icon: '📊', title: 'Explainable AI (XAI)', desc: 'Every AI decision shows Reasoning, Evidence, Confidence %, Risk, and Expected Impact.' },
  ];

  const WORKSPACES = [
    { label: 'Command Center', desc: 'Live executive dashboard with health scores & AI KPIs', tag: 'Live' },
    { label: 'Data Center', desc: 'Enterprise data model — ingestion, quality, lineage', tag: 'Live' },
    { label: 'Digital Twin', desc: 'Interactive 3D stadium simulation with IoT overlays', tag: 'Live' },
    { label: 'Ops Command', desc: 'Communication hub, task engine & automation rules', tag: 'Live' },
    { label: 'System Architecture', desc: 'Event pipeline simulator & multi-agent AI orchestration', tag: 'Admin' },
    { label: 'Identity & Security', desc: 'IAM, audit trails, retention, backup & compliance', tag: 'Admin' },
    { label: '14 Domain Dashboards', desc: 'Crowd, Gates, Medical, Security, F&B, Transport + more', tag: 'Live' },
  ];

  return (
    <div className="relative min-h-screen bg-[#05000F] overflow-auto text-white">

      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#E20074]/8 rounded-full blur-[160px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[#2B7CE4]/8 rounded-full blur-[160px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1AA65D]/5 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_30%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E20074]/40 bg-[#E20074]/10 text-sm text-[#E20074] font-bold tracking-widest uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E20074] animate-pulse"></span>
            FIFA World Cup 2026 — {t.tagline}
          </div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-6 leading-none">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">AI STADIUM</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2B7CE4] via-[#1AA65D] to-[#E20074]">OS</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-3 leading-relaxed font-light">
            {t.subtext}
          </p>
          <p className="text-sm text-slate-500 mb-12">Built for 45,000+ fans · FIFA 26 Master Specification</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onOpenLogin}
              className="group px-10 py-4 bg-gradient-to-r from-[#2B7CE4] to-[#1AA65D] rounded-2xl font-bold text-white text-lg shadow-[0_0_40px_rgba(43,124,228,0.35)] hover:shadow-[0_0_60px_rgba(43,124,228,0.55)] transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              🚀 {t.enter}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              {t.status}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {STATS.map((stat, i) => (
            <div key={i} className="glass-panel rounded-2xl p-6 text-center border border-slate-700/50">
              <div className={`text-4xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Active Workspaces */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-2">{t.activeWs}</h2>
          <p className="text-slate-400 text-center mb-10">Login and navigate using the sidebar to explore each workspace</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WORKSPACES.map((ws, i) => (
              <div key={i} className="glass-panel rounded-2xl p-5 border border-slate-700/50 hover:border-slate-500 transition-all group cursor-default">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white">{ws.label}</h3>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${ws.tag === 'Admin' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 'bg-green-500/20 text-green-400 border border-green-500/30'}`}>{ws.tag}</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{ws.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Pillars */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-2">{t.pillars}</h2>
          <p className="text-slate-400 text-center mb-10">Six foundational principles built into every layer</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILLARS.map((p, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`glass-panel p-6 rounded-2xl cursor-default transition-all duration-300 ${hovered === i ? 'border-[#E20074]/50 bg-[#E20074]/5 scale-[1.02]' : 'border-slate-700/50'}`}
              >
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onOpenLogin}
            className="group px-12 py-5 bg-gradient-to-r from-[#E20074] to-[#2B7CE4] rounded-2xl font-bold text-white text-xl shadow-[0_0_50px_rgba(226,0,116,0.25)] hover:shadow-[0_0_80px_rgba(226,0,116,0.45)] transition-all duration-300 hover:scale-105"
          >
            {t.cta}
          </button>
          <p className="text-slate-500 text-sm mt-4">FIFA World Cup 2026 · Enterprise Grade · Built for 45,000+ fans</p>
        </div>
      </div>
    </div>
  );
}
