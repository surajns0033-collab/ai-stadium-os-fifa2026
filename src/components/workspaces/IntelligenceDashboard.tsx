"use client";
import React from 'react';
import { Activity, MapPin, AlertCircle, RefreshCw } from 'lucide-react';

type IntelligenceDashboardProps = {
  title: string;
  themeColor: string;
  metrics: { label: string, value: string, trend: 'up' | 'down' | 'neutral' }[];
  alerts: { text: string, severity: 'high' | 'medium' | 'low' }[];
};

export default function IntelligenceDashboard({ title, themeColor, metrics, alerts }: IntelligenceDashboardProps) {
  return (
    <div className="flex-1 glass-panel rounded-3xl overflow-hidden border border-slate-700/50 flex flex-col">
      <div className="p-4 border-b border-slate-700/50 flex justify-between items-center bg-slate-900/50">
        <h3 className="font-bold text-white tracking-wide" style={{ color: themeColor }}>{title} Intelligence</h3>
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: themeColor }}></span>
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: themeColor }}>Live Analysis</span>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col p-6 gap-6 overflow-y-auto custom-scrollbar">
        {/* KPI Grid */}
        <div className="grid grid-cols-3 gap-4">
          {metrics.map((m, idx) => (
            <div key={idx} className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
              <div className="text-xs text-slate-400 font-bold uppercase mb-1">{m.label}</div>
              <div className="text-3xl font-black text-white">{m.value}</div>
              <div className={`text-xs mt-2 font-medium ${m.trend === 'up' ? 'text-red-400' : m.trend === 'down' ? 'text-green-400' : 'text-blue-400'}`}>
                {m.trend === 'up' ? '↗ Increasing' : m.trend === 'down' ? '↘ Decreasing' : '→ Stable'}
              </div>
            </div>
          ))}
        </div>

        {/* AI Recommendations */}
        <div className="bg-[#0A0015] border border-[#2B7CE4]/30 rounded-xl p-5 shadow-[inset_0_0_20px_rgba(43,124,228,0.1)]">
          <div className="flex items-center gap-2 mb-4">
            <RefreshCw className="text-[#2B7CE4] animate-spin-slow" size={18} />
            <h4 className="text-[#2B7CE4] font-bold uppercase tracking-widest text-xs">AI Operational Insights</h4>
          </div>
          <div className="space-y-3">
            {alerts.map((a, idx) => (
              <div key={idx} className={`p-3 rounded-lg border flex gap-3 ${
                a.severity === 'high' ? 'bg-[#E20074]/10 border-[#E20074]/50 text-white' :
                a.severity === 'medium' ? 'bg-amber-500/10 border-amber-500/50 text-white' :
                'bg-[#1AA65D]/10 border-[#1AA65D]/50 text-white'
              }`}>
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                <p className="text-sm font-medium">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Wireframe Map/Chart Area */}
        <div className="flex-1 bg-slate-900/30 rounded-xl border border-slate-800 flex items-center justify-center min-h-[300px] relative overflow-hidden">
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
           <MapPin size={48} className="text-slate-700 animate-pulse" />
           <span className="absolute bottom-4 right-4 text-[10px] text-slate-500 font-bold tracking-widest">ADVANCED VISUALIZATION LAYER</span>
        </div>
      </div>
    </div>
  );
}
