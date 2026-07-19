import React, { useState, useEffect } from 'react';
import { Leaf, Sun, Wind, BatteryCharging, Brain, Droplets, ArrowRight } from 'lucide-react';

export default function SustainabilityDashboard() {
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
            Sustainability & Energy Core
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-green-500/20 text-green-400 rounded border border-green-500/30">Net Zero</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">Real-time solar generation, micro-grid distribution, and water recycling</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Grid Status</div>
            <div className="text-xl font-black text-white">Off-Grid <span className="text-xs text-green-400 font-normal">100% Self-Sustaining</span></div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0 z-10">
        
        {/* Main SVG Visualization */}
        <div className="flex-1 glass-panel rounded-3xl border border-slate-700/50 p-6 flex flex-col relative overflow-hidden bg-slate-900/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <h3 className="font-bold text-lg mb-4 z-10 flex items-center gap-2"><Leaf size={18} className="text-green-400"/> Micro-Grid & Resource Distribution</h3>
          
          <div className="flex-1 relative border border-slate-700 rounded-2xl bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full">
              <defs>
                 <linearGradient id="flow-energy" x1="0" y1="0" x2="1" y2="0">
                   <stop offset="0%" stopColor="#eab308" stopOpacity="0" />
                   <stop offset="100%" stopColor="#eab308" stopOpacity="1" />
                 </linearGradient>
                 <linearGradient id="flow-water" x1="0" y1="0" x2="1" y2="0">
                   <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                   <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
                 </linearGradient>
              </defs>

              {/* Solar Array Node */}
              <g transform="translate(150, 150)">
                 <rect x="-60" y="-40" width="120" height="80" rx="8" fill="#1e293b" stroke="#eab308" strokeWidth="2" />
                 <text x="0" y="-10" textAnchor="middle" fill="#fef08a" fontSize="14" fontWeight="bold">SOLAR CANOPY</text>
                 <text x="0" y="10" textAnchor="middle" fill="#eab308" fontSize="20">12.4 MW</text>
                 <text x="0" y="25" textAnchor="middle" fill="#eab308" fontSize="10" className="animate-pulse">GENERATING</text>
              </g>

              {/* Rainwater Harvesting Node */}
              <g transform="translate(150, 450)">
                 <rect x="-60" y="-40" width="120" height="80" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                 <text x="0" y="-10" textAnchor="middle" fill="#bfdbfe" fontSize="14" fontWeight="bold">RAIN CATCHMENT</text>
                 <text x="0" y="10" textAnchor="middle" fill="#3b82f6" fontSize="20">450k L</text>
                 <text x="0" y="25" textAnchor="middle" fill="#3b82f6" fontSize="10">RESERVOIR FULL</text>
              </g>

              {/* Central Stadium Node */}
              <g transform="translate(500, 300)">
                 <circle cx="0" cy="0" r="80" fill="#0f172a" stroke="#10b981" strokeWidth="4" />
                 <text x="0" y="-15" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">STADIUM</text>
                 <text x="0" y="5" textAnchor="middle" fill="#a7f3d0" fontSize="12">Net Usage: 8.2 MW</text>
                 <text x="0" y="25" textAnchor="middle" fill="#a7f3d0" fontSize="12">H2O Usage: 12k L/hr</text>
              </g>

              {/* Battery Storage Node */}
              <g transform="translate(850, 150)">
                 <rect x="-60" y="-40" width="120" height="80" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
                 <text x="0" y="-10" textAnchor="middle" fill="#a7f3d0" fontSize="14" fontWeight="bold">BESS ARRAY</text>
                 <text x="0" y="10" textAnchor="middle" fill="#10b981" fontSize="20">98%</text>
                 <text x="0" y="25" textAnchor="middle" fill="#10b981" fontSize="10">CHARGING</text>
                 <rect x="-40" y="-35" width="80" height="70" fill="#10b981" fillOpacity="0.2" className="animate-pulse" />
              </g>

              {/* Energy Flow Lines */}
              {/* Solar to Stadium */}
              <path d="M 210 150 L 500 150 L 500 220" fill="none" stroke="url(#flow-energy)" strokeWidth="6" strokeDasharray="15 15" className="animate-[dash_1s_linear_infinite]" />
              {/* Solar to Battery (Excess) */}
              <path d="M 500 150 L 790 150" fill="none" stroke="url(#flow-energy)" strokeWidth="4" strokeDasharray="10 10" className="animate-[dash_1.5s_linear_infinite]" />
              
              {/* Water Flow Lines */}
              {/* Rain to Stadium */}
              <path d="M 210 450 L 500 450 L 500 380" fill="none" stroke="url(#flow-water)" strokeWidth="6" strokeDasharray="15 15" className="animate-[dash_2s_linear_infinite]" />

              <style jsx>{`
                @keyframes dash {
                  to { stroke-dashoffset: -30; }
                }
              `}</style>
            </svg>
          </div>
        </div>

        {/* AI Insights */}
        <div className="w-[350px] shrink-0 flex flex-col gap-4">
          
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 bg-green-900/10">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><Brain size={14} className="text-green-400" /> AI Micro-Grid Controller</h3>
            
            <div className="bg-slate-900/80 rounded-xl p-4 border border-green-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] mb-4 relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1 h-full bg-green-500"></div>
              <div className="flex items-start gap-3">
                <Sun size={18} className="text-green-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white mb-1">Peak Generation Achieved</div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">Solar canopy is generating 12.4 MW. Stadium usage is 8.2 MW. AI is automatically routing 4.2 MW excess to BESS storage arrays.</p>
                  <button className="w-full py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/30 rounded text-xs font-bold transition-colors">
                    Optimize Load Distribution
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700">
                 <Wind size={16} className="text-blue-400 mb-1" />
                 <div className="text-xs text-slate-400 uppercase font-bold">HVAC Efficiency</div>
                 <div className="text-lg font-black text-white">94%</div>
              </div>
              <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700">
                 <Droplets size={16} className="text-blue-400 mb-1" />
                 <div className="text-xs text-slate-400 uppercase font-bold">Water Reused</div>
                 <div className="text-lg font-black text-white">88%</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
