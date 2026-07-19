"use client";
import React, { useState } from 'react';
import { Users, ShieldAlert, Sparkles, TrendingUp } from 'lucide-react';
import DashboardWrapper from './DashboardWrapper';

export default function ExecutiveCommandDashboard() {
  const [selectedScore, setSelectedScore] = useState<string | null>(null);

  const insights = [
    { id: '1', message: "Overall stadium health is stable. Metro Line 2 surge predicted in 15 mins.", priority: "medium" as const, time: "Just now" },
    { id: '2', message: "Gate B occupancy reaching 92%. Recommend redirecting to Gate D.", priority: "high" as const, time: "2m ago" },
    { id: '3', message: "Food Court 3 inventory requires restocking in 30 minutes.", priority: "low" as const, time: "12m ago" }
  ];

  const scores = [
    { name: 'Crowd', value: 95, status: 'Good', colorClass: 'text-emerald-400', ringClass: 'ring-emerald-500/40', bgClass: 'bg-emerald-500/10' },
    { name: 'Transport', value: 92, status: 'Good', colorClass: 'text-yellow-400', ringClass: 'ring-yellow-500/40', bgClass: 'bg-yellow-500/10' },
    { name: 'Food & Bev', value: 98, status: 'Excellent', colorClass: 'text-emerald-400', ringClass: 'ring-emerald-500/40', bgClass: 'bg-emerald-500/10' },
    { name: 'Security', value: 99, status: 'Excellent', colorClass: 'text-emerald-400', ringClass: 'ring-emerald-500/40', bgClass: 'bg-emerald-500/10' },
    { name: 'Medical', value: 97, status: 'Excellent', colorClass: 'text-emerald-400', ringClass: 'ring-emerald-500/40', bgClass: 'bg-emerald-500/10' },
    { name: 'Access', value: 96, status: 'Good', colorClass: 'text-emerald-400', ringClass: 'ring-emerald-500/40', bgClass: 'bg-emerald-500/10' },
    { name: 'Sustain.', value: 91, status: 'Good', colorClass: 'text-yellow-400', ringClass: 'ring-yellow-500/40', bgClass: 'bg-yellow-500/10' },
    { name: 'Infra', value: 98, status: 'Excellent', colorClass: 'text-emerald-400', ringClass: 'ring-emerald-500/40', bgClass: 'bg-emerald-500/10' },
    { name: 'Weather', value: 100, status: 'Excellent', colorClass: 'text-blue-400', ringClass: 'ring-blue-500/40', bgClass: 'bg-blue-500/10' },
  ];

  const selected = scores.find(s => s.name === selectedScore);

  const kpis = [
    { label: 'Crowd Density', current: '73%', prediction: '89% in 15m', trend: 'up', reason: 'Metro Line 2 arrival imminent (800 passengers)', recommendation: 'Deploy 5 volunteers to Gate C.', confidence: 97 },
    { label: 'Avg Queue Time', current: '4.2m', prediction: '6.5m in 20m', trend: 'up', reason: 'Peak half-time demand approaching', recommendation: 'Open 3 additional food stalls in Sector North.', confidence: 94 },
    { label: 'Medical Risk', current: 'Low', prediction: 'Medium in 30m', trend: 'up', reason: 'Temperature 32°C, high UV index', recommendation: 'Pre-position water stations in Sectors D, E.', confidence: 88 },
    { label: 'Gate B Throughput', current: '84%', prediction: '92% in 10m', trend: 'up', reason: 'Scanner #4 marginal performance', recommendation: 'Dispatch maintenance to Gate B Scanner #4.', confidence: 96 },
  ];

  return (
    <DashboardWrapper
      title="Executive Command"
      subtitle="Comprehensive AI Operational Overview"
      insights={insights}
    >
      {/* Top row: Health Score + AI Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">

        {/* Overall Health Score */}
        <div className="glass-panel p-6 border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-xl flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none"></div>
          <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 relative z-10">Overall Stadium Health</div>
          <div className="text-7xl font-black text-white leading-none mb-1 relative z-10 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:scale-105 transition-transform duration-500">96</div>
          <div className="text-lg text-slate-400 font-medium mb-2">/100</div>
          <div className="flex items-center gap-1 text-sm text-emerald-400 font-bold">
            <TrendingUp size={15} /> +2% since kickoff
          </div>
          <div className="mt-3 px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30">EXCELLENT</div>
        </div>

        {/* AI Operational Summary */}
        <div className="lg:col-span-2 glass-panel p-6 border border-blue-500/30 bg-blue-950/20 backdrop-blur-xl relative overflow-hidden group hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-500 rounded"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-blue-400/20 transition-all duration-500"></div>
          <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2 pl-2 relative z-10">
            <Sparkles size={14} className="animate-pulse" /> AI Operational Summary
          </h3>
          <div className="grid grid-cols-2 gap-4 pl-2">
            <div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Current Situation</div>
              <p className="text-sm text-white font-medium mb-3 leading-relaxed">All sectors stable. Rapid ingress underway at North Concourse. No critical incidents active.</p>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Major Risk</div>
              <p className="text-sm text-red-400 font-medium flex items-center gap-1"><ShieldAlert size={13} /> 5% risk of Gate B bottleneck in 15 mins.</p>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Immediate Action</div>
              <p className="text-sm text-yellow-400 font-medium mb-3 flex items-center gap-1"><Users size={13} /> Reallocate 5 volunteers to Gate B.</p>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Next 15 Minutes</div>
              <p className="text-sm text-purple-400 font-medium">Metro Line 2 arriving with 800 passengers. Prepare Gate C overflow.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Domain Health Scores — large, readable cards */}
      <div className="glass-panel p-6 border border-slate-700/50 mb-6 bg-slate-900/50 backdrop-blur-xl rounded-3xl">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Domain Health Scores — Click any to inspect</h3>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
          {scores.map(s => (
            <div
              key={s.name}
              onClick={() => setSelectedScore(selectedScore === s.name ? null : s.name)}
              className={`flex flex-col items-center justify-center p-3 rounded-2xl border cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_16px_-6px_currentColor] hover:-translate-y-1 ${s.bgClass} ${selectedScore === s.name ? `ring-2 ${s.ringClass} border-transparent shadow-[0_0_20px_currentColor] scale-105` : 'border-slate-700/50 hover:border-slate-400/50'} text-[color:var(--tw-shadow-color)]`}
              style={{ '--tw-shadow-color': s.colorClass === 'text-emerald-400' ? 'rgba(52,211,153,0.3)' : s.colorClass === 'text-yellow-400' ? 'rgba(251,191,36,0.3)' : 'rgba(96,165,250,0.3)' } as React.CSSProperties}
            >
              <div className={`text-2xl font-black leading-none ${s.colorClass}`}>{s.value}</div>
              <div className="text-[9px] text-slate-300 mt-1.5 uppercase tracking-wider text-center font-bold leading-tight">{s.name}</div>
              <div className={`text-[8px] mt-1 ${s.colorClass} opacity-70`}>{s.status}</div>
            </div>
          ))}
        </div>

        {/* Expanded detail for selected score */}
        {selected && (
          <div className={`mt-3 p-3 rounded-xl border ${selected.bgClass} ${selected.ringClass.replace('ring-', 'border-')} flex items-center gap-3`}>
            <div className={`text-4xl font-black ${selected.colorClass}`}>{selected.value}<span className="text-lg text-slate-500">/100</span></div>
            <div>
              <div className="font-bold text-white">{selected.name} Domain</div>
              <div className={`text-sm ${selected.colorClass}`}>{selected.status} — All subsystems nominal. AI monitoring active.</div>
            </div>
          </div>
        )}
      </div>

      {/* KPI Cards — 2×2 grid, large readable text */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="glass-panel p-6 border border-slate-700/50 rounded-3xl bg-slate-900/50 backdrop-blur-xl hover:border-slate-500 transition-all duration-300 hover:shadow-[0_12px_24px_-12px_rgba(255,255,255,0.1)] group cursor-pointer hover:-translate-y-1">
            <div className="flex justify-between items-start mb-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{kpi.label}</div>
              <div className="w-9 h-9 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-emerald-500/10 shrink-0">
                <span className="text-xs font-black text-emerald-400">{kpi.confidence}%</span>
              </div>
            </div>
            <div className="flex items-end gap-3 mb-3">
              <div className="text-3xl font-black text-white">{kpi.current}</div>
              <div className="flex items-center gap-1 px-2 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-xs text-red-400 font-bold mb-0.5">
                <TrendingUp size={11} /> {kpi.prediction}
              </div>
            </div>
            <div className="bg-slate-900/60 rounded-lg p-3 border border-slate-800 space-y-1.5">
              <div className="text-xs text-slate-400">
                <span className="text-slate-500 font-bold">WHY:</span> <span className="text-slate-300">{kpi.reason}</span>
              </div>
              <div className="text-xs text-slate-400">
                <span className="text-slate-500 font-bold">ACTION:</span> <span className="text-blue-400 font-medium">{kpi.recommendation}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardWrapper>
  );
}
