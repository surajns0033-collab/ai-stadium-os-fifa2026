import React, { useState, useEffect } from 'react';
import { ShieldAlert, Crosshair, Users, Activity, Eye, AlertTriangle, Fingerprint, Lock, Shield, ArrowRight } from 'lucide-react';

export default function SecurityDashboard() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full flex flex-col bg-[#0A0015] text-white overflow-hidden p-6 gap-6 relative">
      <div className="flex justify-between items-end shrink-0 z-10">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-white flex items-center gap-3">
            Security & Threat Intelligence
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-red-500/20 text-red-400 rounded border border-red-500/30">Defcon 4</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">Live patrol tracking, CCTV grid, and AI threat assessment</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Active Patrols</div>
            <div className="text-xl font-black text-white">42 <span className="text-xs text-slate-400 font-normal">Units</span></div>
          </div>
          <div className="bg-slate-900/80 border border-red-500/30 rounded-xl px-4 py-2 text-right shadow-[0_0_15px_rgba(239,68,68,0.1)]">
            <div className="text-[10px] text-red-400 font-bold uppercase">Threat Level</div>
            <div className="text-xl font-black text-red-400 animate-pulse">ELEVATED</div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0 z-10">
        {/* Main Operational Visualization (Stadium Security Map) */}
        <div className="flex-[2] glass-panel rounded-3xl border border-slate-700/50 p-6 flex flex-col relative overflow-hidden bg-slate-900/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <h3 className="font-bold text-lg mb-4 z-10 flex items-center gap-2"><Shield size={18} className="text-red-400"/> Security Operations Grid</h3>
          
          <div className="flex-1 relative border border-slate-700 rounded-2xl bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full">
              
              {/* Stadium Base Structure */}
              <g transform="translate(500, 300)">
                 <ellipse cx="0" cy="0" rx="350" ry="250" fill="none" stroke="#1e293b" strokeWidth="4" />
                 <ellipse cx="0" cy="0" rx="280" ry="180" fill="none" stroke="#334155" strokeWidth="2" />
                 <rect x="-150" y="-80" width="300" height="160" fill="#0f172a" stroke="#1e293b" strokeWidth="2" rx="10" />
                 
                 {/* Security Coverage Grid (Radar Sweep Effect) */}
                 <path d="M 0 0 L 350 -250 A 430 430 0 0 1 350 250 Z" fill="url(#radarSweep)" opacity="0.1" className="origin-center animate-[spin_4s_linear_infinite]" />
                 
                 {/* Restricted Areas */}
                 <path d="M -150 -80 L -150 80 L -280 180 L -280 -180 Z" fill="#ef4444" fillOpacity="0.1" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" />
                 <text x="-215" y="0" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold" opacity="0.6" transform="rotate(-90 -215 0)">RESTRICTED ZONE ALPHA</text>

                 <path d="M 150 -80 L 150 80 L 280 180 L 280 -180 Z" fill="#ef4444" fillOpacity="0.1" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" />
                 <text x="215" y="0" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold" opacity="0.6" transform="rotate(90 215 0)">RESTRICTED ZONE BETA</text>
                 
                 {/* Risk Zones (Heatmap style) */}
                 <circle cx="-180" cy="120" r="60" fill="#eab308" fillOpacity="0.15" />
                 <circle cx="-180" cy="120" r="30" fill="#f97316" fillOpacity="0.2" />
                 <circle cx="-180" cy="120" r="10" fill="#ef4444" fillOpacity="0.5" className="animate-pulse" />
                 <text x="-180" y="100" textAnchor="middle" fill="#f87171" fontSize="10" fontWeight="bold">CROWD CRUSH RISK</text>

                 <circle cx="200" cy="-140" r="50" fill="#eab308" fillOpacity="0.15" />
                 <circle cx="200" cy="-140" r="15" fill="#f97316" fillOpacity="0.4" className="animate-pulse" />
                 <text x="200" y="-160" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="bold">UNATTENDED BAG</text>

                 {/* Patrol Movement Paths */}
                 <path id="patrolPath1" d="M -250 -150 Q 0 -220 250 -150 T 250 150 T -250 150 Z" fill="none" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="5 5" />
                 <path id="patrolPath2" d="M -300 0 Q -300 -200 0 -200 Q 300 -200 300 0" fill="none" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="5 5" />

                 {/* Animated Patrol Units */}
                 <circle cx="0" cy="0" r="6" fill="#3b82f6">
                   <animateMotion dur="10s" repeatCount="indefinite" path="M -250 -150 Q 0 -220 250 -150 T 250 150 T -250 150 Z" />
                 </circle>
                 <circle cx="0" cy="0" r="6" fill="#3b82f6">
                   <animateMotion dur="10s" begin="5s" repeatCount="indefinite" path="M -250 -150 Q 0 -220 250 -150 T 250 150 T -250 150 Z" />
                 </circle>
                 <circle cx="0" cy="0" r="6" fill="#3b82f6">
                   <animateMotion dur="12s" repeatCount="indefinite" path="M -300 0 Q -300 -200 0 -200 Q 300 -200 300 0" />
                 </circle>
                 
                 {/* CCTV Cameras */}
                 <g transform="translate(-150, -80)">
                   <circle cx="0" cy="0" r="4" fill="#22c55e" className="animate-pulse" />
                   <path d="M 0 0 L -40 -40 A 60 60 0 0 1 40 -40 Z" fill="#22c55e" fillOpacity="0.1" />
                 </g>
                 <g transform="translate(150, -80) rotate(90)">
                   <circle cx="0" cy="0" r="4" fill="#22c55e" className="animate-pulse" />
                   <path d="M 0 0 L -40 -40 A 60 60 0 0 1 40 -40 Z" fill="#22c55e" fillOpacity="0.1" />
                 </g>
                 <g transform="translate(150, 80) rotate(180)">
                   <circle cx="0" cy="0" r="4" fill="#ef4444" className="animate-pulse" />
                   <path d="M 0 0 L -40 -40 A 60 60 0 0 1 40 -40 Z" fill="#ef4444" fillOpacity="0.1" />
                   <text x="0" y="20" fill="#ef4444" fontSize="10" transform="rotate(180)">CAM OFFLINE</text>
                 </g>
                 <g transform="translate(-150, 80) rotate(270)">
                   <circle cx="0" cy="0" r="4" fill="#22c55e" className="animate-pulse" />
                   <path d="M 0 0 L -40 -40 A 60 60 0 0 1 40 -40 Z" fill="#22c55e" fillOpacity="0.1" />
                 </g>

                 {/* Alert Visualization (Active Ping) */}
                 <g transform="translate(-180, 120)">
                   <circle cx="0" cy="0" r="80" fill="none" stroke="#ef4444" strokeWidth="2" className="animate-ping" />
                   <path d="M 0 -15 L 15 15 L -15 15 Z" fill="#ef4444" />
                   <text x="0" y="30" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" className="animate-pulse">SQUAD 3 EN ROUTE</text>
                 </g>

              </g>

              <defs>
                <radialGradient id="radarSweep" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* AI Threat Assessment & Incident Timeline */}
        <div className="flex-1 flex flex-col gap-4 min-w-[320px]">
          
          {/* AI Threat Assessment */}
          <div className="glass-panel p-5 rounded-2xl border border-red-500/30 bg-red-900/10">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><Eye size={14} className="text-red-400" /> AI Threat Assessment</h3>
            
            <div className="space-y-4">
              <div className="bg-slate-900/80 rounded-xl p-4 border border-red-500/30">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <AlertTriangle size={14} className="text-red-400" /> Pattern Anomaly Detected
                  </div>
                  <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded">94% Confidence</span>
                </div>
                <p className="text-xs text-slate-400">Repeated traversal of Zone Alpha perimeter by unidentified individual. Biometric mismatch against registered personnel.</p>
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-red-400 text-xs py-1.5 rounded-lg transition-colors font-bold">Lockdown Zone</button>
                  <button className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white text-xs py-1.5 rounded-lg transition-colors">Dispatch Drone</button>
                </div>
              </div>

              <div className="bg-slate-900/80 rounded-xl p-4 border border-orange-500/30">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <Users size={14} className="text-orange-400" /> Crowd Density Risk
                  </div>
                  <span className="text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded">88% Confidence</span>
                </div>
                <p className="text-xs text-slate-400">Sector 112 approaching crush threshold. Flow rate imbalance detected at Gate B.</p>
              </div>
            </div>
          </div>

          {/* Incident Timeline */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 flex-1 flex flex-col min-h-0">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><Activity size={14} className="text-blue-400" /> Incident Timeline</h3>
            
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-4">
              <div className="relative pl-6 border-l-2 border-red-500/50 pb-4">
                <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-[7px] top-0 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                <div className="text-[10px] text-slate-500 font-bold mb-1">LIVE · -0m</div>
                <div className="text-sm font-bold text-white mb-1">Unattended Bag Reported</div>
                <div className="text-xs text-slate-400">North Concourse. Bomb squad notified automatically via AI protocol.</div>
              </div>

              <div className="relative pl-6 border-l-2 border-orange-500/50 pb-4">
                <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-[7px] top-0"></div>
                <div className="text-[10px] text-slate-500 font-bold mb-1">-12m</div>
                <div className="text-sm font-bold text-white mb-1">Facial Recognition Hit</div>
                <div className="text-xs text-slate-400">Banned individual detected at Gate D. Security intercepted successfully.</div>
              </div>

              <div className="relative pl-6 border-l-2 border-slate-700 pb-4">
                <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[7px] top-0"></div>
                <div className="text-[10px] text-slate-500 font-bold mb-1">-45m</div>
                <div className="text-sm font-bold text-white mb-1">Drone Sweep Complete</div>
                <div className="text-xs text-slate-400">Perimeter scan found 0 anomalies. Roof access locked.</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
