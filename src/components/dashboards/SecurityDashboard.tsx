import React, { useState, useEffect } from 'react';
import { ShieldAlert, Fingerprint, Map, Eye, AlertTriangle, ShieldCheck, Lock, Radio } from 'lucide-react';

export default function SecurityDashboard() {
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
            Security & Threat Command
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-blue-500/20 text-blue-400 rounded border border-blue-500/30">Zero Trust</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">AI facial recognition, perimeter security, and drone surveillance tracking</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Threat Level</div>
            <div className="text-xl font-black text-white">Elevated <span className="text-xs text-yellow-400 font-normal">Level 2</span></div>
          </div>
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Active Patrols</div>
            <div className="text-xl font-black text-white">42 <span className="text-xs text-slate-400 font-normal">Units</span></div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0 z-10">
        
        {/* Main SVG Visualization */}
        <div className="flex-1 glass-panel rounded-3xl border border-slate-700/50 p-6 flex flex-col relative overflow-hidden bg-slate-900/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <h3 className="font-bold text-lg mb-4 z-10 flex items-center gap-2"><Map size={18} className="text-blue-400"/> Perimeter & Zone Map</h3>
          
          <div className="flex-1 relative border border-slate-700 rounded-2xl bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full">
              <defs>
                <radialGradient id="pulse" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#eab308" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Perimeter Fence */}
              <rect x="50" y="50" width="900" height="500" rx="40" fill="none" stroke="#1e293b" strokeWidth="4" />
              <rect x="50" y="50" width="900" height="500" rx="40" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="10 10" className="animate-[dash_10s_linear_infinite]" />

              {/* VIP / Restricted Zones */}
              <g transform="translate(400, 150)">
                <rect width="200" height="150" rx="10" fill="#1e3a8a" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
                <text x="100" y="30" fill="#60a5fa" fontSize="14" fontWeight="bold" textAnchor="middle">RESTRICTED VIP ZONE</text>
                <circle cx="50" cy="80" r="20" fill="#3b82f6" fillOpacity="0.2" className="animate-pulse" />
                <text x="50" y="85" fill="#60a5fa" fontSize="12" textAnchor="middle">CCTV</text>
                <circle cx="150" cy="80" r="20" fill="#3b82f6" fillOpacity="0.2" className="animate-pulse" style={{ animationDelay: '1s' }} />
                <text x="150" y="85" fill="#60a5fa" fontSize="12" textAnchor="middle">CCTV</text>
              </g>

              {/* Public Concourses */}
              <path d="M 100 300 Q 500 500 900 300" fill="none" stroke="#334155" strokeWidth="40" strokeOpacity="0.3" />
              
              {/* Drone Surveillance Route */}
              <path id="dronePath" d="M 150 100 L 850 100 L 850 500 L 150 500 Z" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="5 15" opacity="0.5" />
              <g transform="translate(150, 100)">
                 {/* Simulate drone movement - static for now, would use animateMotion normally */}
                 <circle cx="0" cy="0" r="6" fill="#10b981" />
                 <text x="10" y="4" fill="#10b981" fontSize="10">Drone-04</text>
              </g>

              {/* Incident Marker */}
              <g transform="translate(750, 400)">
                 <circle cx="0" cy="0" r="30" fill="url(#pulse)" className="animate-pulse" />
                 <circle cx="0" cy="0" r="5" fill="#eab308" />
                 <text x="0" y="-15" textAnchor="middle" fill="#fef08a" fontSize="12" fontWeight="bold">UNAUTHORIZED ACCESS</text>
                 <text x="0" y="20" textAnchor="middle" fill="#eab308" fontSize="10">Gate 14 - Section B</text>
              </g>

              <style jsx>{`
                @keyframes dash {
                  to { stroke-dashoffset: -100; }
                }
              `}</style>
            </svg>
          </div>
        </div>

        {/* AI Insights & Tracking */}
        <div className="w-[350px] shrink-0 flex flex-col gap-4">
          
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 bg-blue-900/10">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><Eye size={14} className="text-blue-400" /> AI Threat Analysis</h3>
            
            <div className="bg-slate-900/80 rounded-xl p-4 border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.1)] mb-4 relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1 h-full bg-yellow-500"></div>
              <div className="flex items-start gap-3">
                <AlertTriangle size={18} className="text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white mb-1">Tailgating Detected</div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">AI Vision detected 2 individuals entering Gate 14 on a single scan. Security Patrol Alpha en route.</p>
                  <button className="w-full py-2 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 border border-yellow-500/30 rounded text-xs font-bold transition-colors">
                    View Camera Feed
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700">
               <h4 className="text-xs font-bold text-white mb-3 flex items-center gap-2"><Fingerprint size={14} className="text-blue-400"/> Biometric Scans (Last Hour)</h4>
               <div className="space-y-3">
                 <div className="flex justify-between items-center text-xs border-b border-slate-800 pb-2">
                   <span className="text-slate-400">Total Scans</span>
                   <span className="text-white font-mono">14,289</span>
                 </div>
                 <div className="flex justify-between items-center text-xs border-b border-slate-800 pb-2">
                   <span className="text-slate-400">Successful Matches</span>
                   <span className="text-green-400 font-mono">14,242</span>
                 </div>
                 <div className="flex justify-between items-center text-xs">
                   <span className="text-slate-400">Anomalies / Flags</span>
                   <span className="text-red-400 font-mono font-bold">47</span>
                 </div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-1">
            <div className="glass-panel p-4 rounded-2xl border border-slate-700/50 flex flex-col justify-center">
              <ShieldCheck size={20} className="text-green-400 mb-2" />
              <div className="text-2xl font-black text-white">99.8%</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">System Uptime</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-700/50 flex flex-col justify-center">
              <Lock size={20} className="text-blue-400 mb-2" />
              <div className="text-2xl font-black text-white">4</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Doors Locked</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-700/50 flex flex-col justify-center col-span-2 bg-slate-800/50">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Radio size={20} className="text-blue-400 animate-pulse" />
                 </div>
                 <div>
                   <div className="text-sm font-bold text-white">Comms Encrypted</div>
                   <div className="text-xs text-slate-400 mt-0.5">Quantum-safe encryption active on all radios</div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
