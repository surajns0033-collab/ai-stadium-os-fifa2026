import React, { useState, useEffect } from 'react';
import { Train, Bus, Activity, Brain, Clock, MapPin, Map, Zap, CheckCircle2 } from 'lucide-react';

export default function TransportDashboard() {
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
            Transit & Transport Network
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-blue-500/20 text-blue-400 rounded border border-blue-500/30">Live Sync</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">Live tracking of Metro, Shuttle, and Pedestrian routes with AI capacity balancing</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Incoming Passengers</div>
            <div className="text-xl font-black text-white">4.2k <span className="text-xs text-orange-400 font-normal">Next 15m</span></div>
          </div>
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Transit Status</div>
            <div className="text-xl font-black text-white">Nominal <span className="text-xs text-green-400 font-normal">98% On-Time</span></div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0 z-10">
        
        {/* Main SVG Visualization - Transport Network Map */}
        <div className="flex-1 glass-panel rounded-3xl border border-slate-700/50 p-6 flex flex-col relative overflow-hidden bg-slate-900/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <div className="flex justify-between items-center mb-4 z-10">
            <h3 className="font-bold text-lg">Mass Transit & Route Map</h3>
            <div className="flex gap-4">
              <span className="flex items-center gap-2 text-xs text-slate-400"><span className="w-3 h-1 rounded-full bg-blue-500"></span> Metro Line 2</span>
              <span className="flex items-center gap-2 text-xs text-slate-400"><span className="w-3 h-1 rounded-full bg-purple-500"></span> Shuttle Routes</span>
              <span className="flex items-center gap-2 text-xs text-slate-400"><span className="w-3 h-1 rounded-full bg-slate-500" style={{borderStyle:'dashed'}}></span> Pedestrian Paths</span>
            </div>
          </div>
          
          <div className="flex-1 relative border border-slate-700 rounded-2xl bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full">
              
              {/* Pedestrian Paths (Stadium to Hubs) */}
              <path d="M 500 300 L 250 150" fill="none" stroke="#334155" strokeWidth="15" strokeOpacity="0.4" />
              <path d="M 500 300 L 800 450" fill="none" stroke="#334155" strokeWidth="15" strokeOpacity="0.4" />
              <path d="M 500 300 L 250 150" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_4s_linear_infinite]" />
              <path d="M 500 300 L 800 450" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_4s_linear_infinite]" />

              {/* Metro Line (Blue) */}
              <path id="metroPath" d="M -100 150 L 250 150 L 400 -100" fill="none" stroke="#3b82f6" strokeWidth="8" opacity="0.6" />
              
              {/* Metro Train (Animated along path using math for simplicity since animateMotion has quirks) */}
              <g transform="translate(150, 150)">
                <rect x="-30" y="-10" width="60" height="20" rx="4" fill="#60a5fa" />
                <circle cx="-15" cy="0" r="3" fill="#1e3a8a" className="animate-pulse" />
                <circle cx="15" cy="0" r="3" fill="#1e3a8a" className="animate-pulse" />
                <text x="0" y="-20" fill="#60a5fa" fontSize="12" fontWeight="bold" textAnchor="middle">M-L2 (ETA: 4m)</text>
              </g>

              {/* Shuttle Line (Purple) */}
              <path d="M 1100 450 L 800 450 L 800 650" fill="none" stroke="#a855f7" strokeWidth="6" opacity="0.5" />
              
              {/* Shuttle Buses */}
              <g transform="translate(900, 450)">
                <rect x="-15" y="-8" width="30" height="16" rx="2" fill="#c084fc" />
                <text x="0" y="-15" fill="#c084fc" fontSize="10" fontWeight="bold" textAnchor="middle">S-42</text>
              </g>
              <g transform="translate(800, 550) rotate(90)">
                <rect x="-15" y="-8" width="30" height="16" rx="2" fill="#c084fc" />
                <text x="0" y="-15" fill="#c084fc" fontSize="10" fontWeight="bold" textAnchor="middle">S-18</text>
              </g>

              {/* Stadium Node */}
              <circle cx="500" cy="300" r="60" fill="#0f172a" stroke="#334155" strokeWidth="4" />
              <text x="500" y="305" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="bold">STADIUM</text>

              {/* Transport Hub Nodes */}
              <g transform="translate(250, 150)">
                <circle cx="0" cy="0" r="40" fill="#1e3a8a" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" className="animate-pulse" />
                <text x="0" y="-55" textAnchor="middle" fill="#60a5fa" fontSize="14" fontWeight="bold">NORTH METRO HUB</text>
                <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="20">🚇</text>
                <rect x="-40" y="25" width="80" height="15" rx="2" fill="#1e293b" />
                <text x="0" y="36" textAnchor="middle" fill="#94a3b8" fontSize="10">Density: 88%</text>
              </g>

              <g transform="translate(800, 450)">
                <circle cx="0" cy="0" r="40" fill="#581c87" fillOpacity="0.3" stroke="#a855f7" strokeWidth="2" />
                <text x="0" y="-55" textAnchor="middle" fill="#c084fc" fontSize="14" fontWeight="bold">EAST SHUTTLE DEPOT</text>
                <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="20">🚌</text>
                <rect x="-40" y="25" width="80" height="15" rx="2" fill="#1e293b" />
                <text x="0" y="36" textAnchor="middle" fill="#94a3b8" fontSize="10">Density: 42%</text>
              </g>

              <style jsx>{`
                @keyframes dash {
                  to { stroke-dashoffset: -20; }
                }
              `}</style>
            </svg>
          </div>
        </div>

        {/* AI Insights & Transport KPIs */}
        <div className="w-[350px] shrink-0 flex flex-col gap-4">
          
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 bg-blue-900/10">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><Brain size={14} className="text-blue-400" /> AI Route Optimization</h3>
            
            <div className="bg-slate-900/80 rounded-xl p-4 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] mb-4 relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1 h-full bg-blue-500"></div>
              <div className="flex items-start gap-3">
                <Zap size={18} className="text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white mb-1">Metro Surge Anticipated</div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">Line 2 dropping 800 passengers in 4m. AI recommends opening Pedestrian Path B to prevent bottleneck at Gate A.</p>
                  <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded text-xs font-bold transition-colors shadow-lg">
                    Execute Route Change
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700">
               <h4 className="text-xs font-bold text-white mb-3 flex items-center gap-2"><Map size={14} className="text-blue-400"/> Pedestrian Route Density</h4>
               <div className="space-y-4">
                 <div>
                   <div className="flex justify-between text-xs mb-1">
                     <span className="text-slate-300">Path A (North)</span>
                     <span className="text-red-400 font-bold">High Density</span>
                   </div>
                   <div className="h-1.5 bg-slate-800 rounded-full"><div className="h-full bg-red-500 rounded-full" style={{ width: '88%' }}></div></div>
                 </div>
                 <div>
                   <div className="flex justify-between text-xs mb-1">
                     <span className="text-slate-300">Path B (East)</span>
                     <span className="text-green-400 font-bold">Clear</span>
                   </div>
                   <div className="h-1.5 bg-slate-800 rounded-full"><div className="h-full bg-green-500 rounded-full" style={{ width: '22%' }}></div></div>
                 </div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-1">
            <div className="glass-panel p-4 rounded-2xl border border-slate-700/50 flex flex-col justify-center">
              <Train size={20} className="text-blue-400 mb-2" />
              <div className="text-xl font-black text-white">4m 12s</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Next Metro ETA</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-700/50 flex flex-col justify-center">
              <Bus size={20} className="text-purple-400 mb-2" />
              <div className="text-xl font-black text-white">2m 45s</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Next Shuttle ETA</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-700/50 flex flex-col justify-center col-span-2 bg-slate-800/50">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} className="text-green-400" />
                 </div>
                 <div>
                   <div className="text-sm font-bold text-white">All Transport Systems Go</div>
                   <div className="text-xs text-slate-400 mt-0.5">No reported delays across network</div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
