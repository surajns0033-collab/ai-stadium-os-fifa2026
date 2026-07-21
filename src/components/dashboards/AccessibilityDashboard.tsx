"use client";
import React, { useState, useEffect } from 'react';
import { Accessibility, Eye, Volume2, ArrowRight, Brain, Zap, Heart, Activity, Maximize, Map as MapIcon, Power } from 'lucide-react';
import { useUISounds } from '@/hooks/useUISounds';

export default function AccessibilityDashboard() {
  const { playHover, playClick } = useUISounds();
  const [activeRoute, setActiveRoute] = useState('gate-a');

  // Animation ticks
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setTick(t => (t + 1) % 4), 3000);
    return () => clearInterval(timer);
  }, []);

  const kpis = [
    { label: 'Active Assistance', value: '42', trend: 'Requests', icon: Accessibility, color: 'text-blue-400' },
    { label: 'Sensory Rooms', value: '85%', trend: 'Capacity', icon: Heart, color: 'text-pink-400' },
    { label: 'Elevators', value: '14/14', trend: 'Operational', icon: Power, color: 'text-green-400' },
    { label: 'Audio Streams', value: '1.2k', trend: 'Live', icon: Volume2, color: 'text-purple-400' }
  ];

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0A0015] overflow-hidden text-white relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="p-6 pb-2 z-10 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-white flex items-center gap-3 gaming-text-shadow">
            Accessibility Operations
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-blue-500/30 text-blue-300 rounded border border-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-pulse">INCLUSIVE AI</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1 font-medium">Real-time wheelchair routing, sensory environment monitoring, and assistance dispatch</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 px-6 py-4 z-10">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="glass-panel p-4 rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-md flex items-center justify-between transition-all duration-500 hover:border-blue-500/30 hover:bg-slate-800/60 cursor-pointer" onMouseEnter={playHover} onClick={playClick}>
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

      <div className="flex-1 p-6 pt-2 z-10 flex gap-6 min-h-0">
        <div className="flex-[2] flex flex-col gap-4 min-h-0">
          
          <div className="flex gap-4 items-center w-full">
            <div className="glass-panel bg-slate-900/40 border border-slate-700/50 rounded-xl px-4 py-3 flex items-center gap-5 shadow-lg shrink-0">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-r border-slate-700 pr-4">Map Legend</div>
              <div className="flex items-center gap-2 text-xs text-white"><div className="w-3 h-3 bg-blue-500 border border-white rounded-full shadow-[0_0_8px_#3b82f6]"></div> Wheelchair Path</div>
              <div className="flex items-center gap-2 text-xs text-white"><div className="w-3 h-3 bg-pink-500 border border-white rounded-full shadow-[0_0_8px_#ec4899]"></div> Sensory Room</div>
              <div className="flex items-center gap-2 text-xs text-white"><div className="w-3 h-3 bg-yellow-500 border border-white rounded-full shadow-[0_0_8px_#eab308]"></div> Elevator</div>
            </div>
            
            <div className="glass-panel bg-blue-900/10 border border-blue-500/30 rounded-xl px-4 py-3 shadow-[0_0_30px_rgba(59,130,246,0.15)] flex items-center gap-4 flex-1 overflow-hidden transition-all duration-500">
              <style jsx>{`
                @keyframes slide-left { from { left: 100%; } to { left: -150%; } }
                .animate-slide { animation: slide-left 15s linear infinite; }
              `}</style>
              <div className="flex items-center gap-2 border-r border-blue-500/30 pr-4 shrink-0 w-48">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
                <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest whitespace-nowrap">AI ROUTING ACTIVE</div>
              </div>
              <div className="overflow-hidden relative flex-1 h-4 flex items-center shrink-0">
                <p className="text-xs text-slate-200 whitespace-nowrap absolute animate-slide">
                  Re-routing 12 wheelchair users to avoid crowd surge at East Concourse. Utilizing Elevator 4.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 glass-panel rounded-3xl border border-slate-700/50 bg-[#0a111a]/90 backdrop-blur-xl relative overflow-hidden flex flex-col items-center justify-center shadow-2xl min-h-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
            
            <div className="absolute top-4 right-4 z-30">
              <button className="bg-black/60 backdrop-blur border border-white/10 hover:border-blue-500/50 rounded-lg p-2 text-slate-400 hover:text-white transition-colors cursor-pointer" onClick={playClick} onMouseEnter={playHover}>
                <Maximize size={16} />
              </button>
            </div>

            <div className="relative w-full h-full min-h-0 flex items-center justify-center p-4">
              <svg viewBox="0 0 1000 660" className="w-full h-full max-h-full drop-shadow-[0_0_40px_rgba(59,130,246,0.1)]">
                {/* Stadium Base Layout */}
                <rect x="100" y="80" width="800" height="500" rx="250" fill="none" stroke="#1e293b" strokeWidth="10" />
                <rect x="200" y="180" width="600" height="300" rx="150" fill="none" stroke="#1e293b" strokeWidth="8" />
                
                {/* Corridors */}
                <path d="M 500 80 L 500 180 M 500 480 L 500 580 M 100 330 L 200 330 M 800 330 L 900 330" stroke="#1e293b" strokeWidth="10" />

                {/* Sensory Rooms */}
                <g transform="translate(250, 150)" className="cursor-pointer hover:opacity-80 transition-opacity" onClick={playClick} onMouseEnter={playHover}>
                  <rect x="-40" y="-30" width="80" height="60" rx="10" fill="#ec4899" fillOpacity="0.2" stroke="#ec4899" strokeWidth="2" />
                  <circle cx="0" cy="0" r="10" fill="#ec4899" className="animate-pulse" />
                  <text x="0" y="22" textAnchor="middle" fill="#ec4899" fontSize="10" fontWeight="bold">SENSORY A</text>
                </g>
                <g transform="translate(750, 510)" className="cursor-pointer hover:opacity-80 transition-opacity" onClick={playClick} onMouseEnter={playHover}>
                  <rect x="-40" y="-30" width="80" height="60" rx="10" fill="#ec4899" fillOpacity="0.2" stroke="#ec4899" strokeWidth="2" />
                  <circle cx="0" cy="0" r="10" fill="#ec4899" className="animate-pulse" />
                  <text x="0" y="22" textAnchor="middle" fill="#ec4899" fontSize="10" fontWeight="bold">SENSORY B</text>
                </g>

                {/* Elevators */}
                <g transform="translate(500, 130)" className="cursor-pointer hover:opacity-80 transition-opacity" onClick={playClick} onMouseEnter={playHover}>
                  <rect x="-15" y="-15" width="30" height="30" rx="4" fill="#eab308" />
                  <text x="0" y="30" textAnchor="middle" fill="#eab308" fontSize="10" fontWeight="bold">ELEV 1</text>
                </g>
                <g transform="translate(500, 530)" className="cursor-pointer hover:opacity-80 transition-opacity" onClick={playClick} onMouseEnter={playHover}>
                  <rect x="-15" y="-15" width="30" height="30" rx="4" fill="#eab308" />
                  <text x="0" y="30" textAnchor="middle" fill="#eab308" fontSize="10" fontWeight="bold">ELEV 2</text>
                </g>

                {/* Crowd Density (Obstacles) */}
                <circle cx="700" cy="330" r="80" fill="#ef4444" fillOpacity="0.1" className="animate-pulse" />
                <circle cx="700" cy="330" r="40" fill="#ef4444" fillOpacity="0.2" className="animate-pulse" />
                <text x="700" y="335" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">CROWD SURGE</text>

                {/* Wheelchair Accessible Routes (Animated) */}
                <path id="route1" d="M 150 330 Q 300 330 500 130" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="10 10" className="animate-[dash_2s_linear_infinite]" />
                <path id="route2" d="M 500 130 Q 700 130 850 250" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="10 10" className="animate-[dash_2s_linear_infinite]" />
                <path id="route3" d="M 500 530 Q 700 530 850 410" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="10 10" className="animate-[dash_2s_linear_infinite]" />
                
                {/* Animated Assistance Bots / Staff */}
                <circle cx={tick === 0 ? 300 : tick === 1 ? 350 : tick === 2 ? 400 : 450} cy={tick === 0 ? 250 : tick === 1 ? 220 : tick === 2 ? 180 : 150} r="6" fill="#60a5fa" className="transition-all duration-[3000ms] ease-in-out">
                  <animate attributeName="r" values="6;9;6" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx={tick === 0 ? 600 : tick === 1 ? 650 : tick === 2 ? 700 : 750} cy={tick === 0 ? 450 : tick === 1 ? 480 : tick === 2 ? 510 : 540} r="6" fill="#60a5fa" className="transition-all duration-[3000ms] ease-in-out">
                  <animate attributeName="r" values="6;9;6" dur="2s" repeatCount="indefinite" />
                </circle>

                <style jsx>{`
                  @keyframes dash { to { stroke-dashoffset: -20; } }
                `}</style>
              </svg>
            </div>
          </div>
        </div>

        <div className="w-80 flex flex-col gap-4 min-h-0">
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl flex flex-col shrink-0">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Zap size={14} className="text-blue-400 animate-pulse"/> Dynamic Route Optimization
            </h3>
            
            <div className="bg-black/60 rounded-xl border border-slate-700 overflow-hidden relative cursor-pointer hover:border-blue-500/50 transition-colors group" onMouseEnter={playHover} onClick={playClick}>
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 transition-colors duration-1000"></div>
              <div className="p-4">
                <div className="text-[10px] font-bold text-blue-400 mb-1 tracking-widest">
                  ROUTE DIVERTED
                </div>
                <p className="text-sm text-white leading-relaxed font-medium mb-3">
                  AI detected high crowd density near East Concourse. Wheelchair route automatically diverted via Elevator 2.
                </p>
                <div className="relative w-full h-24 rounded-lg overflow-hidden border border-slate-700/50">
                  <img src="/accessibility/wheelchair_route.png" alt="Accessible Route" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-[9px] font-bold text-white flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span> LIVE CAM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl flex-1 overflow-y-auto custom-scrollbar min-h-0">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2 shrink-0">
              <Brain size={14} className="text-purple-400"/> Specialized Services
            </h3>
            
            <div className="space-y-4">
              <div className="bg-slate-800/60 border border-slate-700 p-3 rounded-xl relative overflow-hidden transition-all duration-300 hover:border-pink-500/50 cursor-pointer" onMouseEnter={playHover} onClick={playClick}>
                <div className="absolute left-0 top-0 w-1 h-full bg-pink-500"></div>
                <div className="text-xs font-bold text-pink-400 mb-1 flex items-center gap-2"><Heart size={12}/> SENSORY ROOM A</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Lighting and sound levels dynamically adjusted for calming environment. 4 families currently inside.
                </p>
                <div className="relative w-full h-20 rounded-lg overflow-hidden border border-slate-700/50 mb-2">
                  <img src="/accessibility/sensory_room.png" alt="Sensory Room" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-1 left-2 text-[9px] font-bold text-white flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse"></span> LIVE CAM
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                  Capacity at 80% - Routing to Room B
                </div>
              </div>

              <div className="bg-slate-800/60 border border-slate-700 p-3 rounded-xl relative overflow-hidden transition-all duration-300 hover:border-blue-500/50 cursor-pointer" onMouseEnter={playHover} onClick={playClick}>
                <div className="absolute left-0 top-0 w-1 h-full bg-blue-500"></div>
                <div className="text-xs font-bold text-blue-400 mb-1 flex items-center gap-2"><Eye size={12}/> AUDIO DESCRIPTION</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-2">
                  Live tactical match description streaming to visually impaired fans. Latency sub 10ms.
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                  <Activity size={12}/> 342 active streams
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
