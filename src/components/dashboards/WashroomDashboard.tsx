import React, { useState, useEffect } from 'react';
import { Droplets, Activity, Wrench, AlertTriangle, Brain, Users } from 'lucide-react';

export default function WashroomDashboard() {
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
            Washroom & Hygiene
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-blue-500/20 text-blue-400 rounded border border-blue-500/30">Live Sensors</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">Live queue lengths, supply levels, and smart maintenance routing</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Average Wait Time</div>
            <div className="text-xl font-black text-white">1m 12s <span className="text-xs text-green-400 font-normal">Optimal</span></div>
          </div>
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Maintenance Required</div>
            <div className="text-xl font-black text-white">1 <span className="text-xs text-yellow-400 font-normal">Pending</span></div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0 z-10">
        
        {/* Main SVG Visualization */}
        <div className="flex-1 glass-panel rounded-3xl border border-slate-700/50 p-6 flex flex-col relative overflow-hidden bg-slate-900/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <h3 className="font-bold text-lg mb-4 z-10 flex items-center gap-2"><Droplets size={18} className="text-blue-400"/> Facility Flow Map</h3>
          
          <div className="flex-1 relative border border-slate-700 rounded-2xl bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full">
              {/* Washroom Node 1 - Clean */}
              <g transform="translate(200, 150)">
                 <rect width="200" height="100" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
                 <text x="100" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">BLOCK A (NORTH)</text>
                 <text x="100" y="50" textAnchor="middle" fill="#a7f3d0" fontSize="12">Supplies: 85% | Queue: 4</text>
                 {[...Array(4)].map((_, i) => (
                    <circle key={`w1-${i}`} cx={100} cy={75} r="6" fill="#10b981" transform={`translate(${(i-1.5)*15}, 0)`} />
                 ))}
              </g>

              {/* Washroom Node 2 - Attention Req */}
              <g transform="translate(600, 150)">
                 <rect width="200" height="100" rx="8" fill="#1e293b" stroke="#eab308" strokeWidth="2" />
                 <text x="100" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">BLOCK B (EAST)</text>
                 <text x="100" y="50" textAnchor="middle" fill="#fef08a" fontSize="12">Supplies: 12% | Queue: 12</text>
                 <text x="100" y="85" textAnchor="middle" fill="#eab308" fontSize="10" className="animate-pulse">DISPENSER LOW</text>
              </g>

              {/* Janitorial Hub */}
              <g transform="translate(400, 450)">
                 <rect width="200" height="80" rx="8" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
                 <text x="100" y="45" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">MAINTENANCE HUB</text>
              </g>

              {/* Maintenance Path to Block B */}
              <path d="M 500 450 L 500 350 L 700 350 L 700 250" fill="none" stroke="#eab308" strokeWidth="4" strokeDasharray="10 10" className="animate-[dash_1s_linear_infinite]" />
              <text x="610" y="340" fill="#eab308" fontSize="12" fontWeight="bold">CLEANING TEAM EN ROUTE</text>

              <style jsx>{`
                @keyframes dash {
                  to { stroke-dashoffset: -20; }
                }
              `}</style>
            </svg>
          </div>
        </div>

        {/* AI Insights & Alerts */}
        <div className="w-[350px] shrink-0 flex flex-col gap-4">
          
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 bg-blue-900/10">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><Brain size={14} className="text-blue-400" /> Hygiene Predictive Maintenance</h3>
            
            <div className="bg-slate-900/80 rounded-xl p-4 border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.1)] mb-4 relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1 h-full bg-yellow-500"></div>
              <div className="flex items-start gap-3">
                <AlertTriangle size={18} className="text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white mb-1">Soap Dispenser Low</div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">IoT sensor in Block B (East) reports soap level below 12%. Janitorial Team 4 has been automatically dispatched.</p>
                  <button className="w-full py-2 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 border border-yellow-500/30 rounded text-xs font-bold transition-colors">
                    Acknowledge Dispatch
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700">
                 <Droplets size={16} className="text-blue-400 mb-1" />
                 <div className="text-xs text-slate-400 uppercase font-bold">Total Flow Rate</div>
                 <div className="text-lg font-black text-white">2.4k L/h</div>
              </div>
              <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700">
                 <Wrench size={16} className="text-blue-400 mb-1" />
                 <div className="text-xs text-slate-400 uppercase font-bold">Active Teams</div>
                 <div className="text-lg font-black text-white">12</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
