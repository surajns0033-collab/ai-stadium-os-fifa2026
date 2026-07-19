import React, { useState, useEffect } from 'react';
import { HeartPulse, Activity, Thermometer, Brain, Navigation, AlertCircle, PlusSquare, Stethoscope } from 'lucide-react';

export default function MedicalDashboard() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full flex flex-col bg-[#0A0015] text-white overflow-hidden p-6 gap-6 relative">
      {/* Header */}
      <div className="flex justify-between items-end shrink-0 z-10">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-white flex items-center gap-3">
            Medical Operations
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-red-500/20 text-red-400 rounded border border-red-500/30">Live Response</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">Live triage, biometric heat tracking, and emergency route optimization</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Active Incidents</div>
            <div className="text-xl font-black text-white">3 <span className="text-xs text-red-400 font-normal">Responding</span></div>
          </div>
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Avg Response</div>
            <div className="text-xl font-black text-white">1m 45s <span className="text-xs text-green-400 font-normal">Fast</span></div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0 z-10">
        
        {/* Main SVG Visualization */}
        <div className="flex-1 glass-panel rounded-3xl border border-slate-700/50 p-6 flex flex-col relative overflow-hidden bg-slate-900/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <h3 className="font-bold text-lg mb-4 z-10 flex items-center gap-2"><Thermometer size={18} className="text-red-400"/> Stadium Heatmap & Routing</h3>
          
          <div className="flex-1 relative border border-slate-700 rounded-2xl bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full">
              <defs>
                <filter id="glow-red">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <marker id="arrow-med" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
                </marker>
              </defs>

              {/* Stadium Sections (Abstract) */}
              <path d="M 200 150 Q 500 50 800 150 Q 850 300 800 450 Q 500 550 200 450 Q 150 300 200 150 Z" fill="none" stroke="#1e293b" strokeWidth="4" />
              
              {/* Hotspot (Heat Exhaustion Area) */}
              <g transform="translate(700, 200)">
                 <circle cx="0" cy="0" r="80" fill="#ef4444" fillOpacity="0.1" filter="url(#glow-red)" />
                 <circle cx="0" cy="0" r="40" fill="#ef4444" fillOpacity="0.2" className="animate-pulse" />
                 <text x="0" y="-15" textAnchor="middle" fill="#fca5a5" fontSize="12" fontWeight="bold">SECTOR 112</text>
                 <text x="0" y="5" textAnchor="middle" fill="#ef4444" fontSize="24">🌡️</text>
                 <text x="0" y="25" textAnchor="middle" fill="#ef4444" fontSize="10">34°C - High Risk</text>
              </g>

              {/* Medical Hub */}
              <g transform="translate(100, 300)">
                <rect x="-30" y="-30" width="60" height="60" rx="8" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
                <path d="M -10 -5 L 10 -5 M 0 -15 L 0 5" stroke="#ef4444" strokeWidth="4" />
                <text x="0" y="45" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">MED HUB A</text>
              </g>

              {/* Emergency Response Route */}
              <path d="M 130 300 L 400 300 L 400 200 L 650 200" fill="none" stroke="#ef4444" strokeWidth="4" strokeDasharray="10 10" className="animate-[dash_1s_linear_infinite]" markerEnd="url(#arrow-med)" />
              <text x="300" y="290" fill="#ef4444" fontSize="12" fontWeight="bold">MEDIC TEAM 4 EN ROUTE</text>

              {/* Minor Incident */}
              <g transform="translate(400, 500)">
                 <circle cx="0" cy="0" r="10" fill="#eab308" className="animate-pulse" />
                 <text x="0" y="-15" textAnchor="middle" fill="#fef08a" fontSize="10">Minor Injury (Resolved)</text>
              </g>

              <style jsx>{`
                @keyframes dash {
                  to { stroke-dashoffset: -20; }
                }
              `}</style>
            </svg>
          </div>
        </div>

        {/* AI Insights & Triage */}
        <div className="w-[350px] shrink-0 flex flex-col gap-4">
          
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 bg-red-900/10">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><Brain size={14} className="text-red-400" /> AI Medical Triage</h3>
            
            <div className="bg-slate-900/80 rounded-xl p-4 border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.1)] mb-4 relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1 h-full bg-red-500"></div>
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white mb-1">Heat Cluster Detected</div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">Biometric sensors indicate 3 potential heat exhaustion cases in Sector 112 (direct sun exposure).</p>
                  <button className="w-full py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 rounded text-xs font-bold transition-colors">
                    Dispatch Medics + Water
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700">
               <h4 className="text-xs font-bold text-white mb-3 flex items-center gap-2"><Stethoscope size={14} className="text-red-400"/> Resources</h4>
               <div className="space-y-3">
                 <div className="flex justify-between items-center text-xs border-b border-slate-800 pb-2">
                   <span className="text-slate-400">Available Medics</span>
                   <span className="text-green-400 font-mono">14 / 20</span>
                 </div>
                 <div className="flex justify-between items-center text-xs border-b border-slate-800 pb-2">
                   <span className="text-slate-400">Ambulances Standby</span>
                   <span className="text-white font-mono">4</span>
                 </div>
                 <div className="flex justify-between items-center text-xs">
                   <span className="text-slate-400">Defibrillators Active</span>
                   <span className="text-white font-mono font-bold">48</span>
                 </div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-1">
            <div className="glass-panel p-4 rounded-2xl border border-slate-700/50 flex flex-col justify-center">
              <Activity size={20} className="text-green-400 mb-2" />
              <div className="text-2xl font-black text-white">96%</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Triage Efficiency</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-700/50 flex flex-col justify-center">
              <PlusSquare size={20} className="text-blue-400 mb-2" />
              <div className="text-2xl font-black text-white">8</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Cases Today</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-700/50 flex flex-col justify-center col-span-2 bg-slate-800/50">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Navigation size={20} className="text-blue-400" />
                 </div>
                 <div>
                   <div className="text-sm font-bold text-white">Emergency Lanes Clear</div>
                   <div className="text-xs text-slate-400 mt-0.5">All designated medical paths are currently unblocked.</div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
