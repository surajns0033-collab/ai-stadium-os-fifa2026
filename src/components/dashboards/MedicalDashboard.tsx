import React, { useState, useEffect } from 'react';
import { HeartPulse, Activity, Stethoscope, AlertCircle, Ambulance, TrendingUp, Clock, PlusSquare } from 'lucide-react';

export default function MedicalDashboard() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-auto xl:h-full w-full flex flex-col bg-[#0A0015] text-white overflow-visible xl:overflow-hidden p-4 xl:p-6 gap-6 relative">
      <div className="flex justify-between items-end shrink-0 z-10">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-white flex items-center gap-3">
            Medical Operations
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-emerald-500/20 text-emerald-400 rounded border border-emerald-500/30">Live Monitoring</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">Real-time patient flow, ambulance tracking, and AI triage prediction</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Avg Response</div>
            <div className="text-xl font-black text-emerald-400">2m 14s</div>
          </div>
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Medics Deployed</div>
            <div className="text-xl font-black text-white">18 <span className="text-xs text-slate-400 font-normal">Teams</span></div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col xl:flex-row gap-6 min-h-0 z-10">
        
        {/* Main Operational Visualization (Medical Response Map) */}
        <div className="flex-[2] glass-panel rounded-3xl border border-slate-700/50 p-6 flex flex-col relative overflow-hidden bg-slate-900/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <h3 className="font-bold text-lg mb-4 z-10 flex items-center gap-2"><PlusSquare size={18} className="text-emerald-400"/> Medical Response & Coverage Grid</h3>
          
          <div className="flex-1 relative border border-slate-700 rounded-2xl bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full">
              
              {/* Stadium Base */}
              <g transform="translate(500, 300)">
                 <ellipse cx="0" cy="0" rx="350" ry="250" fill="none" stroke="#1e293b" strokeWidth="4" />
                 <ellipse cx="0" cy="0" rx="280" ry="180" fill="none" stroke="#334155" strokeWidth="2" />
                 
                 {/* Medical Tents / Facilities */}
                 <g transform="translate(-250, 0)">
                   <circle cx="0" cy="0" r="100" fill="#10b981" fillOpacity="0.05" />
                   <rect x="-20" y="-20" width="40" height="40" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2" />
                   <path d="M 0 -10 L 0 10 M -10 0 L 10 0" stroke="#10b981" strokeWidth="4" />
                   <text x="0" y="35" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">MAIN TENT W</text>
                 </g>
                 
                 <g transform="translate(250, 0)">
                   <circle cx="0" cy="0" r="100" fill="#10b981" fillOpacity="0.05" />
                   <rect x="-20" y="-20" width="40" height="40" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2" />
                   <path d="M 0 -10 L 0 10 M -10 0 L 10 0" stroke="#10b981" strokeWidth="4" />
                   <text x="0" y="35" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">MAIN TENT E</text>
                 </g>

                 {/* Emergency Coverage Overlay (Pulsing Radius) */}
                 <circle cx="-250" cy="0" r="120" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="5 5" className="animate-pulse" />
                 <circle cx="250" cy="0" r="120" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="5 5" className="animate-pulse" />

                 {/* Incident Node */}
                 <g transform="translate(0, -180)">
                   <circle cx="0" cy="0" r="25" fill="#ef4444" fillOpacity="0.2" className="animate-ping" />
                   <circle cx="0" cy="0" r="10" fill="#ef4444" />
                   <text x="0" y="-25" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold">HEAT EXHAUSTION (x3)</text>
                 </g>

                 {/* Medic Response Path (Patient Flow / Medic Flow) */}
                 <path id="medicPath" d="M -250 -30 Q -150 -150 0 -180" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="10 10" className="animate-[dash_2s_linear_infinite]" />
                 <path id="medicPath2" d="M 250 -30 Q 150 -150 0 -180" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="10 10" className="animate-[dash_2s_linear_infinite]" opacity="0.3" />

                 {/* Ambulances Outside Stadium */}
                 <g transform="translate(-400, 200)">
                   <rect x="-15" y="-10" width="30" height="20" rx="4" fill="#f8fafc" stroke="#94a3b8" />
                   <path d="M -5 0 L 5 0 M 0 -5 L 0 5" stroke="#ef4444" strokeWidth="2" />
                   <text x="0" y="20" textAnchor="middle" fill="#94a3b8" fontSize="10">AMB 1 (STBY)</text>
                 </g>
                 
                 <g transform="translate(-300, 250)">
                   <rect x="-15" y="-10" width="30" height="20" rx="4" fill="#f8fafc" stroke="#94a3b8" className="animate-pulse" />
                   <path d="M -5 0 L 5 0 M 0 -5 L 0 5" stroke="#ef4444" strokeWidth="2" />
                   <path d="M -20 -15 L -10 -25 M 20 -15 L 10 -25" stroke="#3b82f6" strokeWidth="2" className="animate-ping" />
                   <animateMotion dur="8s" repeatCount="indefinite" path="M 0 0 L 200 0" />
                   <text x="0" y="20" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">AMB 2 (EN ROUTE HOSPITAL)</text>
                 </g>

              </g>

              <style jsx>{`
                @keyframes dash {
                  to { stroke-dashoffset: -20; }
                }
              `}</style>
            </svg>
          </div>
        </div>

        {/* AI Emergency Prediction & Medical Resources */}
        <div className="flex-1 flex flex-col gap-4 min-w-[320px]">
          
          {/* AI Emergency Prediction */}
          <div className="glass-panel p-5 rounded-2xl border border-emerald-500/30 bg-emerald-900/10">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><Activity size={14} className="text-emerald-400" /> AI Emergency Prediction</h3>
            
            <div className="space-y-4">
              <div className="bg-slate-900/80 rounded-xl p-4 border border-orange-500/30">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <TrendingUp size={14} className="text-orange-400" /> Heat Stroke Surge Expected
                  </div>
                  <span className="text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded">High Risk</span>
                </div>
                <p className="text-xs text-slate-400 mb-3">Stadium temperature rising to 34°C. Direct sun on East Stand (Sectors 108-115). AI predicts a 40% increase in medical requests in the next 30 minutes.</p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/50 text-emerald-400 text-xs py-1.5 rounded-lg transition-colors font-bold">Pre-deploy Medics East</button>
                </div>
              </div>
            </div>
          </div>

          {/* Medical Resource Availability */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 flex-1">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><Stethoscope size={14} className="text-blue-400" /> Resource Availability</h3>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Main Tent W (Beds)</span>
                  <span className="text-white font-bold">12 / 20</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Main Tent E (Beds)</span>
                  <span className="text-white font-bold">18 / 20</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-orange-500 h-full rounded-full animate-pulse" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Ambulances Available</span>
                  <span className="text-white font-bold">3 / 5</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                <Clock size={16} className="text-emerald-400 mx-auto mb-1" />
                <div className="text-xs text-slate-400 uppercase font-bold">Triage Time</div>
                <div className="text-lg font-black text-white">45s</div>
              </div>
              <div className="text-center p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                <Ambulance size={16} className="text-emerald-400 mx-auto mb-1" />
                <div className="text-xs text-slate-400 uppercase font-bold">Transports</div>
                <div className="text-lg font-black text-white">2</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
