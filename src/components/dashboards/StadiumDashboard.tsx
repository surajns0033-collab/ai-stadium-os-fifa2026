"use client";
import React, { useState, useEffect } from 'react';
import { Users, Navigation, Accessibility, Crown, ArrowRight, ArrowDown, LogIn, LogOut, CheckCircle2 } from 'lucide-react';

export default function StadiumDashboard() {
  const [simulationTime, setSimulationTime] = useState(0);

  // Animate the simulation state periodically
  useEffect(() => {
    const timer = setInterval(() => {
      setSimulationTime(prev => (prev + 1) % 100);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const kpis = [
    { label: 'Total Occupancy', value: '88%', trend: '+450/m', icon: Users, color: 'text-blue-400' },
    { label: 'VIP Sections', value: '94% Full', trend: 'Stable', icon: Crown, color: 'text-amber-400' },
    { label: 'Accessible Seating', value: '42 / 50', trend: 'Available', icon: Accessibility, color: 'text-purple-400' },
    { label: 'Ingress Rate', value: '1.2k/min', trend: 'Peaking', icon: LogIn, color: 'text-[#1AA65D]' }
  ];

  // Dynamic colors based on time (simulation)
  const getSectionColor = (baseStatus: 'empty' | 'filling' | 'full' | 'congested') => {
    if (baseStatus === 'congested') return '#E20074';
    if (baseStatus === 'full') return '#1AA65D';
    if (baseStatus === 'filling') return '#eab308';
    return '#2B7CE4'; // Base neutral
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0A0015] overflow-hidden text-white relative">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2B7CE4]/5 rounded-full blur-[140px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1AA65D]/5 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="p-6 pb-2 z-10 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Stadium Occupancy
          </h2>
          <p className="text-slate-400 text-sm mt-1">Live section status, entry flows & capacity limits</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4 px-6 py-4 z-10">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="glass-panel p-4 rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-md flex items-center justify-between">
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                  <Icon size={12} className={kpi.color} /> {kpi.label}
                </h4>
                <div className="text-2xl font-black text-white">{kpi.value}</div>
              </div>
              <span className="text-[10px] font-bold text-slate-300 bg-slate-800 px-2 py-1 rounded-full border border-slate-600">
                {kpi.trend}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex-1 p-6 z-10 flex gap-6 min-h-0">
        
        {/* SVG Stadium Map */}
        <div className="flex-1 glass-panel rounded-3xl border border-slate-700/50 bg-[#05000A]/80 backdrop-blur-xl relative overflow-hidden flex items-center justify-center">
          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

          <div className="relative w-full max-w-4xl aspect-[4/3]">
            <svg viewBox="0 0 800 600" className="w-full h-full drop-shadow-[0_0_30px_rgba(26,166,93,0.15)]">
              
              {/* Outer Concourse */}
              <rect x="50" y="50" width="700" height="500" rx="150" fill="none" stroke="#1e293b" strokeWidth="8" />
              
              {/* Pitch */}
              <rect x="280" y="180" width="240" height="240" rx="10" fill="#1AA65D" fillOpacity="0.1" stroke="#1AA65D" strokeWidth="2" />
              <circle cx="400" cy="300" r="30" fill="none" stroke="#1AA65D" strokeWidth="2" />
              <path d="M 400 180 L 400 420" stroke="#1AA65D" strokeWidth="2" />

              {/* SECTIONS */}
              
              {/* North Stand (Congested) */}
              <path d="M 280 160 L 520 160 Q 600 160 620 220 L 180 220 Q 200 160 280 160" fill={getSectionColor('congested')} fillOpacity="0.4" stroke={getSectionColor('congested')} strokeWidth="3" className="animate-pulse" />
              
              {/* South Stand (Filling) */}
              <path d="M 280 440 L 520 440 Q 600 440 620 380 L 180 380 Q 200 440 280 440" fill={getSectionColor('filling')} fillOpacity="0.3" stroke={getSectionColor('filling')} strokeWidth="2" />
              
              {/* West Stand (VIP) */}
              <path d="M 160 220 L 260 220 L 260 380 L 160 380 Q 140 300 160 220" fill="#2B7CE4" fillOpacity="0.3" stroke="#2B7CE4" strokeWidth="2" />
              <circle cx="210" cy="300" r="10" fill="#fbbf24" className="animate-bounce" /> {/* VIP Marker */}

              {/* East Stand (Full) */}
              <path d="M 640 220 L 540 220 L 540 380 L 640 380 Q 660 300 640 220" fill={getSectionColor('full')} fillOpacity="0.3" stroke={getSectionColor('full')} strokeWidth="2" />

              {/* FLOW PATHS (Entry/Exit) */}
              <defs>
                <marker id="arrow-entry" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                  <polygon points="0 0, 6 2, 0 4" fill="#1AA65D" />
                </marker>
                <marker id="arrow-exit" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                  <polygon points="0 0, 6 2, 0 4" fill="#E20074" />
                </marker>
              </defs>

              <g className="animate-[dash_2s_linear_infinite]" strokeDasharray="8 8">
                {/* Entry Flows */}
                <path d="M 400 50 L 400 140" fill="none" stroke="#1AA65D" strokeWidth="4" markerEnd="url(#arrow-entry)" />
                <path d="M 400 550 L 400 460" fill="none" stroke="#1AA65D" strokeWidth="4" markerEnd="url(#arrow-entry)" />
                
                {/* Lateral Concourse Flows */}
                <path d="M 200 80 Q 100 80 100 300" fill="none" stroke="#1e293b" strokeWidth="12" strokeDasharray="1 0" />
                <path d="M 200 80 Q 100 80 100 300" fill="none" stroke="#2B7CE4" strokeWidth="3" markerEnd="url(#arrow-entry)" />
                
                <path d="M 600 80 Q 700 80 700 300" fill="none" stroke="#1e293b" strokeWidth="12" strokeDasharray="1 0" />
                <path d="M 600 80 Q 700 80 700 300" fill="none" stroke="#2B7CE4" strokeWidth="3" markerEnd="url(#arrow-entry)" />
              </g>

              {/* Seat Row Patterns (Overlay on North Stand) */}
              <pattern id="seats" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="2" fill="rgba(255,255,255,0.4)" />
              </pattern>
              <path d="M 280 160 L 520 160 Q 600 160 620 220 L 180 220 Q 200 160 280 160" fill="url(#seats)" />
              <path d="M 640 220 L 540 220 L 540 380 L 640 380 Q 660 300 640 220" fill="url(#seats)" />
              <path d="M 280 440 L 520 440 Q 600 440 620 380 L 180 380 Q 200 440 280 440" fill="url(#seats)" />

            </svg>
            <style jsx>{`
              @keyframes dash {
                to { stroke-dashoffset: -32; }
              }
            `}</style>
            
            {/* Context Labels */}
            <div className="absolute top-[18%] left-1/2 -translate-x-1/2 flex flex-col items-center">
              <span className="bg-[#E20074] text-white px-3 py-1 rounded shadow-lg text-xs font-bold tracking-wider">NORTH STAND (100%)</span>
              <span className="bg-black/80 px-2 py-0.5 rounded text-[10px] text-white mt-1 border border-slate-700">Congested</span>
            </div>
            
            <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 flex flex-col items-center">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded shadow-lg text-xs font-bold tracking-wider">SOUTH STAND (68%)</span>
              <span className="bg-black/80 px-2 py-0.5 rounded text-[10px] text-white mt-1 border border-slate-700 flex items-center gap-1"><ArrowDown size={10} className="text-yellow-400"/> Filling Fast</span>
            </div>
            
            <div className="absolute left-[18%] top-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="bg-blue-600 text-white px-3 py-1 rounded shadow-lg text-xs font-bold tracking-wider flex items-center gap-1"><Crown size={12}/> VIP WEST</span>
              <span className="bg-black/80 px-2 py-0.5 rounded text-[10px] text-white mt-1 border border-slate-700">94% Capacity</span>
            </div>
            
            <div className="absolute right-[18%] top-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="bg-[#1AA65D] text-white px-3 py-1 rounded shadow-lg text-xs font-bold tracking-wider">EAST STAND (98%)</span>
              <span className="bg-black/80 px-2 py-0.5 rounded text-[10px] text-white mt-1 border border-slate-700">Near Full</span>
            </div>
            
            {/* Legend */}
            <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-xl border border-slate-700 rounded-xl p-3 flex flex-col gap-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Live Status Legend</div>
              <div className="flex items-center gap-2 text-xs text-white"><div className="w-3 h-3 bg-[#E20074] rounded-full animate-pulse"></div> Congested / High Density</div>
              <div className="flex items-center gap-2 text-xs text-white"><div className="w-3 h-3 bg-yellow-500 rounded-full"></div> Filling Fast</div>
              <div className="flex items-center gap-2 text-xs text-white"><div className="w-3 h-3 bg-[#1AA65D] rounded-full"></div> Optimal / Stable</div>
              <div className="flex items-center gap-2 text-xs text-white"><div className="w-3 h-3 bg-blue-600 rounded-full"></div> VIP / Reserved</div>
            </div>

          </div>
        </div>

        {/* Right Sidebar Data */}
        <div className="w-80 flex flex-col gap-4">
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl flex-1">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Accessibility size={14} className="text-purple-400"/> Accessibility
            </h3>
            <div className="space-y-3 mb-6">
              <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-white font-medium">Wheelchair Platforms</span>
                  <span className="text-purple-400 font-bold">14 / 20 Full</span>
                </div>
                <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full w-[70%]"></div>
                </div>
              </div>
              <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-white font-medium">Sensory Rooms</span>
                  <span className="text-green-400 font-bold">2 / 4 Full</span>
                </div>
                <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[50%]"></div>
                </div>
              </div>
            </div>

            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <LogOut size={14} className="text-[#E20074]"/> Exit Flow Preparedness
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div> North Gates
                </div>
                <span className="text-xs text-slate-400">100% Open</span>
              </div>
              <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div> East Gates
                </div>
                <span className="text-xs text-slate-400">Staffing Req</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
