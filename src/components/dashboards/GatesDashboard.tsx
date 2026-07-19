import React, { useState, useEffect } from 'react';
import { DoorOpen, ArrowRight, Brain, AlertTriangle, Scan, Zap, Activity } from 'lucide-react';

export default function GatesDashboard() {
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
            Gate Analytics & Flow
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-purple-500/20 text-purple-400 rounded border border-purple-500/30">Live Processing</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">Real-time turnstile processing rates, biometric scans, and queue balancing</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Processing Rate</div>
            <div className="text-xl font-black text-white">412 <span className="text-xs text-green-400 font-normal">fans / min</span></div>
          </div>
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Hardware Uptime</div>
            <div className="text-xl font-black text-white">98% <span className="text-xs text-yellow-400 font-normal">1 Warning</span></div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0 z-10">
        
        {/* Main SVG Visualization */}
        <div className="flex-1 glass-panel rounded-3xl border border-slate-700/50 p-6 flex flex-col relative overflow-hidden bg-slate-900/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <h3 className="font-bold text-lg mb-4 z-10 flex items-center gap-2"><DoorOpen size={18} className="text-purple-400"/> Turnstile Flow Simulation</h3>
          
          <div className="flex-1 relative border border-slate-700 rounded-2xl bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full">
              <defs>
                 <linearGradient id="flow-green" x1="0" y1="0" x2="1" y2="0">
                   <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                   <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
                 </linearGradient>
              </defs>

              {/* Gate A - Smooth Flow */}
              <g transform="translate(150, 100)">
                 <rect width="250" height="80" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
                 <text x="125" y="45" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">GATE A (NORTH)</text>
                 <text x="125" y="65" textAnchor="middle" fill="#a7f3d0" fontSize="12">140 fans/min | Wait: 2m</text>
                 
                 {/* Turnstiles */}
                 <rect x="20" y="80" width="40" height="20" fill="#10b981" />
                 <rect x="105" y="80" width="40" height="20" fill="#10b981" />
                 <rect x="190" y="80" width="40" height="20" fill="#10b981" />

                 {/* Flow Lines */}
                 {[0, 1, 2].map(i => (
                    <path key={`ga-fl-${i}`} d={`M ${40 + i*85} 120 L ${40 + i*85} 300`} fill="none" stroke="url(#flow-green)" strokeWidth="4" className="animate-[dash_2s_linear_infinite]" strokeDasharray="10 10" />
                 ))}
                 
                 {/* Flowing Fans */}
                 {[...Array(6)].map((_, i) => (
                    <circle key={`ga-f-${i}`} cx={40 + (i%3)*85} cy={120 + i*20} r="6" fill="#10b981" className="animate-pulse" style={{animationDelay: `${i*0.3}s`}} />
                 ))}
              </g>

              {/* Gate B - Congested / Hardware Warning */}
              <g transform="translate(550, 100)">
                 <rect width="250" height="80" rx="8" fill="#1e293b" stroke="#eab308" strokeWidth="2" />
                 <text x="125" y="45" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">GATE B (EAST)</text>
                 <text x="125" y="65" textAnchor="middle" fill="#fef08a" fontSize="12">80 fans/min | Wait: 12m</text>
                 
                 {/* Turnstiles */}
                 <rect x="20" y="80" width="40" height="20" fill="#10b981" />
                 <rect x="105" y="80" width="40" height="20" fill="#ef4444" className="animate-pulse" /> {/* Broken Scanner */}
                 <rect x="190" y="80" width="40" height="20" fill="#10b981" />

                 <text x="125" y="120" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">SCANNER FAULT</text>

                 {/* Flowing Fans (Queuing) */}
                 {[...Array(20)].map((_, i) => (
                    <circle key={`gb-f-${i}`} cx={125 + (Math.random()*150 - 75)} cy={150 + i*8} r="6" fill="#eab308" className="animate-pulse" style={{animationDelay: `${i*0.1}s`}} />
                 ))}
              </g>

              {/* Overflow Gate C - Closed but ready */}
              <g transform="translate(350, 400)">
                 <rect width="250" height="80" rx="8" fill="#0f172a" stroke="#64748b" strokeWidth="2" strokeDasharray="5 5" />
                 <text x="125" y="45" textAnchor="middle" fill="#94a3b8" fontSize="16" fontWeight="bold">GATE C (OVERFLOW)</text>
                 <text x="125" y="65" textAnchor="middle" fill="#64748b" fontSize="12">CLOSED - STANDBY</text>
              </g>

              <style jsx>{`
                @keyframes dash {
                  to { stroke-dashoffset: -20; }
                }
              `}</style>
            </svg>
          </div>
        </div>

        {/* AI Insights & Hardware */}
        <div className="w-[350px] shrink-0 flex flex-col gap-4">
          
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 bg-purple-900/10">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><Brain size={14} className="text-purple-400" /> AI Load Balancing</h3>
            
            <div className="bg-slate-900/80 rounded-xl p-4 border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.1)] mb-4 relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1 h-full bg-yellow-500"></div>
              <div className="flex items-start gap-3">
                <AlertTriangle size={18} className="text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white mb-1">Gate B Bottleneck</div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">Scanner #2 has failed, reducing Gate B throughput by 33%. Wait times exceeding 12m.</p>
                  <div className="flex gap-2">
                     <button className="flex-1 py-2 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 border border-yellow-500/30 rounded text-[10px] font-bold transition-colors">
                       Dispatch Tech
                     </button>
                     <button className="flex-1 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 border border-purple-500/30 rounded text-[10px] font-bold transition-colors">
                       Open Gate C
                     </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700">
               <h4 className="text-xs font-bold text-white mb-3 flex items-center gap-2"><Scan size={14} className="text-purple-400"/> Hardware Telemetry</h4>
               <div className="space-y-3">
                 <div className="flex justify-between items-center text-xs border-b border-slate-800 pb-2">
                   <span className="text-slate-400">Total Turnstiles</span>
                   <span className="text-white font-mono">124</span>
                 </div>
                 <div className="flex justify-between items-center text-xs border-b border-slate-800 pb-2">
                   <span className="text-slate-400">Online & Processing</span>
                   <span className="text-green-400 font-mono">122</span>
                 </div>
                 <div className="flex justify-between items-center text-xs">
                   <span className="text-slate-400">Faulty Hardware</span>
                   <span className="text-red-400 font-mono font-bold">2</span>
                 </div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-1">
            <div className="glass-panel p-4 rounded-2xl border border-slate-700/50 flex flex-col justify-center">
              <Zap size={20} className="text-yellow-400 mb-2" />
              <div className="text-2xl font-black text-white">412</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Scans / Min</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-700/50 flex flex-col justify-center">
              <Activity size={20} className="text-purple-400 mb-2" />
              <div className="text-2xl font-black text-white">4m</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Avg Wait Time</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
