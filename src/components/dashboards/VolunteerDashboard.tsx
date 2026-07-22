import React, { useState, useEffect } from 'react';
import { Users, MapPin, Activity, Brain, Radio, MessageSquare, AlertCircle } from 'lucide-react';

export default function VolunteerDashboard() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-auto xl:h-full w-full flex flex-col bg-[#0A0015] text-white overflow-visible xl:overflow-hidden p-4 xl:p-6 gap-6 relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 shrink-0 z-10">
        <div>
          <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
            Volunteer Sync & Fleet
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-purple-500/20 text-purple-400 rounded border border-purple-500/30">Active Deployment</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">Live tracking of 450+ volunteers, task assignments, and AI reallocation</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Active Volunteers</div>
            <div className="text-xl font-black text-white">412 <span className="text-xs text-green-400 font-normal">On Shift</span></div>
          </div>
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Pending Tasks</div>
            <div className="text-xl font-black text-white">12 <span className="text-xs text-yellow-400 font-normal">Assigned</span></div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col xl:flex-row gap-6 min-h-0 z-10">
        
        {/* Main SVG Visualization */}
        <div className="flex-1 glass-panel rounded-3xl border border-slate-700/50 p-6 flex flex-col relative overflow-hidden bg-slate-900/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <h3 className="font-bold text-lg mb-4 z-10 flex items-center gap-2"><MapPin size={18} className="text-purple-400"/> Live Volunteer Map</h3>
          
          <div className="flex-1 relative border border-slate-700 rounded-2xl bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full">
              {/* Stadium Background */}
              <circle cx="500" cy="300" r="200" fill="none" stroke="#1e293b" strokeWidth="2" />
              <circle cx="500" cy="300" r="100" fill="none" stroke="#1e293b" strokeWidth="2" />
              
              {/* Volunteer Clusters */}
              <g transform="translate(350, 150)">
                 <circle cx="0" cy="0" r="40" fill="#a855f7" fillOpacity="0.1" stroke="#a855f7" strokeWidth="2" strokeDasharray="5 5" className="animate-[spin_10s_linear_infinite]" />
                 <text x="0" y="-50" textAnchor="middle" fill="#c084fc" fontSize="12" fontWeight="bold">NORTH GATE TEAM (12)</text>
                 {[...Array(12)].map((_, i) => (
                    <circle key={i} cx={Math.cos(i)*20} cy={Math.sin(i)*20} r="4" fill="#a855f7" />
                 ))}
              </g>

              <g transform="translate(650, 450)">
                 <circle cx="0" cy="0" r="40" fill="#a855f7" fillOpacity="0.1" stroke="#a855f7" strokeWidth="2" />
                 <text x="0" y="-50" textAnchor="middle" fill="#c084fc" fontSize="12" fontWeight="bold">SOUTH CONCOURSE (8)</text>
                 {[...Array(8)].map((_, i) => (
                    <circle key={i} cx={Math.cos(i)*15} cy={Math.sin(i)*15} r="4" fill="#a855f7" />
                 ))}
              </g>

              {/* Dynamic Reallocation Animation */}
              <g transform="translate(650, 150)">
                 <circle cx="0" cy="0" r="40" fill="#eab308" fillOpacity="0.1" stroke="#eab308" strokeWidth="2" />
                 <text x="0" y="-50" textAnchor="middle" fill="#fef08a" fontSize="12" fontWeight="bold">VIP ENTRANCE (SHORTAGE)</text>
                 <text x="0" y="55" textAnchor="middle" fill="#eab308" fontSize="10">AI Reallocating 4 units</text>
                 <circle cx="0" cy="0" r="4" fill="#eab308" />
                 <circle cx="10" cy="10" r="4" fill="#eab308" />
              </g>

              {/* Path of reallocation */}
              <path d="M 370 150 L 610 150" fill="none" stroke="#eab308" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_1s_linear_infinite]" />
              {/* Moving units */}
              <circle cx="450" cy="150" r="4" fill="#a855f7" className="animate-ping" />
              <circle cx="550" cy="150" r="4" fill="#a855f7" className="animate-ping" />

              <style jsx>{`
                @keyframes dash {
                  to { stroke-dashoffset: -20; }
                }
              `}</style>
            </svg>
          </div>
        </div>

        {/* AI Insights & Comms */}
        <div className="w-[350px] shrink-0 flex flex-col gap-4">
          
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 bg-purple-900/10">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><Brain size={14} className="text-purple-400" /> AI Fleet Management</h3>
            
            <div className="bg-slate-900/80 rounded-xl p-4 border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.1)] mb-4 relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1 h-full bg-yellow-500"></div>
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white mb-1">VIP Entrance Shortage</div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">VIP arrivals pacing 15% faster than expected. AI is reallocating 4 volunteers from North Gate to VIP Entrance.</p>
                  <button className="w-full py-2 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 border border-yellow-500/30 rounded text-xs font-bold transition-colors">
                    Confirm Reallocation
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700">
                 <Radio size={16} className="text-blue-400 mb-1" />
                 <div className="text-xs text-slate-400 uppercase font-bold">Radio Check</div>
                 <div className="text-lg font-black text-white">100%</div>
              </div>
              <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700">
                 <MessageSquare size={16} className="text-blue-400 mb-1" />
                 <div className="text-xs text-slate-400 uppercase font-bold">Languages</div>
                 <div className="text-lg font-black text-white">24</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
