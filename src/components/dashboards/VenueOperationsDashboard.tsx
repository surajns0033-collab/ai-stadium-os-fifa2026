import React, { useState, useEffect } from 'react';
import { Building2, Settings, Zap, ArrowRight, Activity, Brain, Server, ShieldCheck } from 'lucide-react';

export default function VenueOperationsDashboard() {
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
            Venue Infrastructure
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-orange-500/20 text-orange-400 rounded border border-orange-500/30">Live Diagnostics</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">Real-time status of HVAC, Lighting, Elevators, and Structural Health</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">System Uptime</div>
            <div className="text-xl font-black text-white">99.9% <span className="text-xs text-green-400 font-normal">Stable</span></div>
          </div>
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Active Faults</div>
            <div className="text-xl font-black text-white">2 <span className="text-xs text-yellow-400 font-normal">Minor</span></div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0 z-10">
        
        {/* Main SVG Visualization */}
        <div className="flex-1 glass-panel rounded-3xl border border-slate-700/50 p-6 flex flex-col relative overflow-hidden bg-slate-900/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <h3 className="font-bold text-lg mb-4 z-10 flex items-center gap-2"><Building2 size={18} className="text-orange-400"/> Facility Diagnostics Blueprint</h3>
          
          <div className="flex-1 relative border border-slate-700 rounded-2xl bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full">
              {/* Central Core */}
              <rect x="350" y="200" width="300" height="200" rx="20" fill="none" stroke="#334155" strokeWidth="4" />
              <text x="500" y="300" textAnchor="middle" fill="#64748b" fontSize="24" fontWeight="bold">MAIN STRUCTURE</text>

              {/* HVAC Systems */}
              <g transform="translate(150, 150)">
                 <rect width="150" height="80" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                 <text x="75" y="35" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">HVAC (NORTH)</text>
                 <text x="75" y="55" textAnchor="middle" fill="#94a3b8" fontSize="12">Temp: 22°C | Flow: Normal</text>
                 <circle cx="75" cy="75" r="4" fill="#10b981" />
              </g>

              {/* Lighting Control */}
              <g transform="translate(700, 150)">
                 <rect width="150" height="80" rx="8" fill="#1e293b" stroke="#eab308" strokeWidth="2" />
                 <text x="75" y="35" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">PITCH LIGHTING</text>
                 <text x="75" y="55" textAnchor="middle" fill="#94a3b8" fontSize="12">Output: 100%</text>
                 <circle cx="75" cy="75" r="4" fill="#10b981" />
              </g>

              {/* Elevator Bank - Showing minor fault */}
              <g transform="translate(150, 400)">
                 <rect width="150" height="80" rx="8" fill="#1e293b" stroke="#f97316" strokeWidth="2" />
                 <text x="75" y="35" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">ELEVATOR BANK WEST</text>
                 <text x="75" y="55" textAnchor="middle" fill="#fbd38d" fontSize="12">Car 4 Offline</text>
                 <circle cx="75" cy="75" r="4" fill="#f97316" className="animate-pulse" />
              </g>

              {/* Structural Sensors */}
              <g transform="translate(700, 400)">
                 <rect width="150" height="80" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
                 <text x="75" y="35" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">STRUCTURAL HEALTH</text>
                 <text x="75" y="55" textAnchor="middle" fill="#94a3b8" fontSize="12">Vibration: Nominal</text>
                 <circle cx="75" cy="75" r="4" fill="#10b981" />
              </g>

              {/* Connectivity Lines */}
              <path d="M 300 190 L 350 220" stroke="#334155" strokeWidth="2" />
              <path d="M 700 190 L 650 220" stroke="#334155" strokeWidth="2" />
              <path d="M 300 440 L 350 380" stroke="#f97316" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_2s_linear_infinite]" />
              <path d="M 700 440 L 650 380" stroke="#334155" strokeWidth="2" />

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
          
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 bg-orange-900/10">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><Brain size={14} className="text-orange-400" /> Infrastructure AI Monitor</h3>
            
            <div className="bg-slate-900/80 rounded-xl p-4 border border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.1)] mb-4 relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1 h-full bg-orange-500"></div>
              <div className="flex items-start gap-3">
                <Settings size={18} className="text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white mb-1">Elevator Car 4 Offline</div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">Motor temperature anomaly detected in West Bank Elevator 4. Car auto-locked on Ground Floor. Technician dispatched.</p>
                  <button className="w-full py-2 bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 border border-orange-500/30 rounded text-xs font-bold transition-colors">
                    View Sensor Logs
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700">
                 <Server size={16} className="text-blue-400 mb-1" />
                 <div className="text-xs text-slate-400 uppercase font-bold">IoT Sensors</div>
                 <div className="text-lg font-black text-white">4,204</div>
              </div>
              <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700">
                 <ShieldCheck size={16} className="text-green-400 mb-1" />
                 <div className="text-xs text-slate-400 uppercase font-bold">Compliance</div>
                 <div className="text-lg font-black text-white">100%</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
