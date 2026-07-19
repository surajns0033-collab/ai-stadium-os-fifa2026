import React, { useState, useEffect } from 'react';
import { Car, Zap, Accessibility, ArrowRight, Brain, AlertTriangle, TrendingUp, Navigation } from 'lucide-react';

export default function ParkingDashboard() {
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
            Intelligent Parking Operations
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-blue-500/20 text-blue-400 rounded border border-blue-500/30">Live Data</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">AI-driven capacity prediction, EV monitoring, and dynamic flow routing</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Total Occupancy</div>
            <div className="text-xl font-black text-white">84% <span className="text-xs text-yellow-400 font-normal">Filling</span></div>
          </div>
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Inflow Rate</div>
            <div className="text-xl font-black text-white">142 <span className="text-xs text-slate-400 font-normal">cars/min</span></div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0 z-10">
        
        {/* Main SVG Visualization */}
        <div className="flex-1 glass-panel rounded-3xl border border-slate-700/50 p-6 flex flex-col relative overflow-hidden bg-slate-900/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <h3 className="font-bold text-lg mb-4 z-10">Live Lot Visualization</h3>
          
          <div className="flex-1 relative border border-slate-700 rounded-2xl bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full">
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
                </marker>
                <marker id="arrow-warn" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#eab308" />
                </marker>
              </defs>

              {/* Stadium footprint placeholder */}
              <circle cx="500" cy="300" r="80" fill="#1e293b" stroke="#334155" strokeWidth="2" />
              <text x="500" y="305" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="bold" className="uppercase tracking-widest">Stadium</text>

              {/* Zones */}
              {/* North Zone - Near Full */}
              <g transform="translate(300, 50)">
                <rect width="400" height="120" rx="8" fill="#eab308" fillOpacity="0.1" stroke="#eab308" strokeWidth="2" />
                <text x="20" y="30" fill="#fef08a" fontSize="14" fontWeight="bold">NORTH LOT (VIP)</text>
                <text x="20" y="50" fill="#eab308" fontSize="12">92% Full</text>
                {/* Grid slots filling animation */}
                {[...Array(10)].map((_, i) => (
                  <rect key={`n1-${i}`} x={20 + i*35} y={60} width="25" height="40" rx="2" fill={i < 9 ? "#eab308" : "#334155"} />
                ))}
              </g>

              {/* South Zone - Filling Fast */}
              <g transform="translate(300, 430)">
                <rect width="400" height="120" rx="8" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="2" />
                <text x="20" y="30" fill="#bfdbfe" fontSize="14" fontWeight="bold">SOUTH LOT</text>
                <text x="20" y="50" fill="#3b82f6" fontSize="12">65% Full</text>
                {[...Array(10)].map((_, i) => (
                  <rect key={`s1-${i}`} x={20 + i*35} y={60} width="25" height="40" rx="2" fill={i < 6 ? "#3b82f6" : "#334155"} />
                ))}
              </g>

              {/* West Zone - EV & Accessible */}
              <g transform="translate(50, 150)">
                <rect width="180" height="300" rx="8" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="2" />
                <text x="90" y="30" fill="#a7f3d0" fontSize="14" fontWeight="bold" textAnchor="middle">WEST LOT</text>
                
                {/* EV Chargers */}
                <rect x="20" y="60" width="60" height="100" rx="4" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
                <text x="50" y="115" textAnchor="middle" fill="#10b981" fontSize="24">⚡</text>
                
                {/* Accessible */}
                <rect x="100" y="60" width="60" height="100" rx="4" fill="#6366f1" fillOpacity="0.2" stroke="#6366f1" />
                <text x="130" y="115" textAnchor="middle" fill="#6366f1" fontSize="24">♿</text>
                
                <text x="90" y="200" fill="#10b981" fontSize="12" textAnchor="middle">EV: 12/20 Avail</text>
                <text x="90" y="220" fill="#6366f1" fontSize="12" textAnchor="middle">Acc: 5/15 Avail</text>
              </g>

              {/* East Zone - Congested */}
              <g transform="translate(770, 150)">
                <rect width="180" height="300" rx="8" fill="#e20074" fillOpacity="0.15" stroke="#e20074" strokeWidth="2" className="animate-pulse" />
                <text x="90" y="30" fill="#fbcfe8" fontSize="14" fontWeight="bold" textAnchor="middle">EAST LOT</text>
                <text x="90" y="50" fill="#e20074" fontSize="12" textAnchor="middle">100% Full - CLOSED</text>
                <rect x="20" y="70" width="140" height="200" rx="4" fill="#e20074" fillOpacity="0.4" />
                <text x="90" y="175" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">CONGESTED</text>
              </g>

              {/* Flow Paths & Vehicles */}
              {/* Main Entry to South */}
              <path d="M 500 600 L 500 550" fill="none" stroke="#3b82f6" strokeWidth="6" strokeDasharray="10 10" className="animate-[dash_1s_linear_infinite]" markerEnd="url(#arrow)" />
              {/* Flow from East Entry to North (Redirected) */}
              <path d="M 1000 300 L 950 300 L 950 110 L 700 110" fill="none" stroke="#eab308" strokeWidth="4" strokeDasharray="8 8" className="animate-[dash_1s_linear_infinite]" markerEnd="url(#arrow-warn)" />
              
              <style jsx>{`
                @keyframes dash {
                  to { stroke-dashoffset: -20; }
                }
              `}</style>
            </svg>
          </div>
        </div>

        {/* AI Insights & KPIs */}
        <div className="w-[350px] shrink-0 flex flex-col gap-4">
          
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 bg-blue-900/10">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><Brain size={14} className="text-blue-400" /> AI Prediction Engine</h3>
            
            <div className="bg-slate-900/80 rounded-xl p-4 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] mb-4 relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1 h-full bg-blue-500"></div>
              <div className="flex items-start gap-3">
                <AlertTriangle size={18} className="text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white mb-1">East Lot Reached Capacity</div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">AI has autonomously redirected incoming digital signage traffic from East Approach to North Lot.</p>
                  <div className="flex gap-2">
                    <span className="text-[10px] px-2 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500/20">Signage Updated</span>
                    <span className="text-[10px] px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded border border-yellow-500/20">Volunteers Reassigned</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={14} className="text-green-400" />
                <span className="text-xs font-bold text-white">Capacity Forecast (Next 30m)</span>
              </div>
              <div className="space-y-3 mt-3">
                {[
                  { lot: 'North', pred: '100%', color: 'bg-red-500' },
                  { lot: 'South', pred: '85%', color: 'bg-yellow-500' },
                  { lot: 'West', pred: '60%', color: 'bg-green-500' },
                ].map(l => (
                  <div key={l.lot}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">{l.lot}</span>
                      <span className="text-white font-mono">{l.pred}</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full ${l.color}`} style={{ width: l.pred }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-1">
            <div className="glass-panel p-4 rounded-2xl border border-slate-700/50 flex flex-col justify-center">
              <Zap size={20} className="text-green-400 mb-2" />
              <div className="text-2xl font-black text-white">12</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">EV Chargers Free</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-700/50 flex flex-col justify-center">
              <Accessibility size={20} className="text-blue-400 mb-2" />
              <div className="text-2xl font-black text-white">5</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Acc. Spots Free</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-700/50 flex flex-col justify-center col-span-2 bg-slate-800/50">
              <div className="flex items-center gap-2 mb-2">
                <Navigation size={16} className="text-slate-400" />
                <span className="text-xs font-bold text-slate-300 uppercase">Avg Exit Time</span>
              </div>
              <div className="text-3xl font-black text-white">14.2 <span className="text-sm text-slate-400 font-normal">mins</span></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
