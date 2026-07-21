"use client";
import React, { useState, useEffect } from 'react';
import { Activity, Target, Shield, Zap, TrendingUp, Cpu, Maximize, PlayCircle } from 'lucide-react';
import { useUISounds } from '@/hooks/useUISounds';

// Define 4 dynamic phases of the game to simulate live action
const matchScenarios = [
  {
    phase: "Build Up",
    ball: { x: 250, y: 330 },
    home: [
      { x: 120, y: 330 }, { x: 180, y: 150 }, { x: 180, y: 510 }, { x: 250, y: 250 }, { x: 250, y: 410 },
      { x: 350, y: 330 }, { x: 450, y: 200 }, { x: 450, y: 460 }, { x: 550, y: 330 }, { x: 500, y: 100 }, { x: 500, y: 560 }
    ],
    away: [
      { x: 880, y: 330 }, { x: 750, y: 200 }, { x: 750, y: 460 }, { x: 800, y: 330 }, { x: 750, y: 100 },
      { x: 750, y: 560 }, { x: 650, y: 250 }, { x: 650, y: 410 }, { x: 550, y: 250 }, { x: 550, y: 410 }, { x: 450, y: 330 }
    ],
    pressure: { x: 350, y: 330, r: 80, color: '#1AA65D' },
    desc: "Home team playing out from the back, away team sitting in mid-block.",
    alertTitle: "POSSESSION STABILIZED",
    alertColor: "bg-[#1AA65D]"
  },
  {
    phase: "Midfield Duel",
    ball: { x: 500, y: 200 },
    home: [
      { x: 150, y: 330 }, { x: 250, y: 150 }, { x: 200, y: 510 }, { x: 350, y: 250 }, { x: 300, y: 410 },
      { x: 450, y: 200 }, { x: 550, y: 200 }, { x: 450, y: 460 }, { x: 650, y: 330 }, { x: 600, y: 100 }, { x: 600, y: 560 }
    ],
    away: [
      { x: 880, y: 330 }, { x: 750, y: 200 }, { x: 750, y: 460 }, { x: 800, y: 330 }, { x: 750, y: 100 },
      { x: 750, y: 560 }, { x: 600, y: 200 }, { x: 650, y: 410 }, { x: 500, y: 200 }, { x: 550, y: 410 }, { x: 450, y: 330 }
    ],
    pressure: { x: 500, y: 200, r: 120, color: '#E20074' },
    desc: "Intense midfield duel and high pressing from both sides.",
    alertTitle: "HIGH PRESS INTENSITY",
    alertColor: "bg-[#E20074]"
  },
  {
    phase: "Final Third Overload",
    ball: { x: 750, y: 150 },
    home: [
      { x: 250, y: 330 }, { x: 450, y: 150 }, { x: 300, y: 510 }, { x: 550, y: 250 }, { x: 400, y: 410 },
      { x: 650, y: 200 }, { x: 750, y: 200 }, { x: 650, y: 460 }, { x: 800, y: 330 }, { x: 750, y: 150 }, { x: 750, y: 500 }
    ],
    away: [
      { x: 880, y: 330 }, { x: 800, y: 200 }, { x: 800, y: 460 }, { x: 850, y: 330 }, { x: 800, y: 100 },
      { x: 800, y: 560 }, { x: 700, y: 200 }, { x: 750, y: 410 }, { x: 650, y: 200 }, { x: 650, y: 410 }, { x: 550, y: 330 }
    ],
    pressure: { x: 750, y: 150, r: 160, color: '#E20074' },
    desc: "Home team aggressively overloading the right flank. Cross expected.",
    alertTitle: "DEFENSIVE VULNERABILITY",
    alertColor: "bg-[#E20074]"
  },
  {
    phase: "Counter Attack",
    ball: { x: 300, y: 500 },
    home: [
      { x: 150, y: 330 }, { x: 250, y: 150 }, { x: 250, y: 510 }, { x: 350, y: 250 }, { x: 300, y: 410 },
      { x: 500, y: 200 }, { x: 600, y: 200 }, { x: 450, y: 460 }, { x: 650, y: 330 }, { x: 600, y: 100 }, { x: 600, y: 560 }
    ],
    away: [
      { x: 880, y: 330 }, { x: 750, y: 200 }, { x: 600, y: 460 }, { x: 800, y: 330 }, { x: 750, y: 100 },
      { x: 750, y: 560 }, { x: 500, y: 200 }, { x: 400, y: 500 }, { x: 650, y: 200 }, { x: 550, y: 410 }, { x: 300, y: 500 }
    ],
    pressure: { x: 350, y: 500, r: 100, color: '#eab308' },
    desc: "Away team executes a rapid counter-attack on the left wing.",
    alertTitle: "RAPID TRANSITION",
    alertColor: "bg-[#eab308]"
  }
];

export default function FootballOperationsDashboard() {
  const [matchTime, setMatchTime] = useState(72);
  const [tick, setTick] = useState(0);
  const { playHover, playClick } = useUISounds();

  // Animate the simulation state periodically
  useEffect(() => {
    const timer = setInterval(() => {
      setTick(prev => (prev + 1) % matchScenarios.length);
    }, 4000); // Change phase every 4 seconds
    return () => clearInterval(timer);
  }, []);

  const currentScenario = matchScenarios[tick];

  const kpis = [
    { label: 'Match Time', value: `${matchTime}:14`, trend: '2nd Half', icon: Activity, color: 'text-white' },
    { label: 'Possession', value: '58% - 42%', trend: 'Home Dominant', icon: TrendingUp, color: 'text-blue-400' },
    { label: 'Current Phase', value: currentScenario.phase, trend: 'Live', icon: PlayCircle, color: 'text-green-400' },
    { label: 'Defensive Line', value: '42m', trend: 'High Block', icon: Shield, color: 'text-[#1AA65D]' }
  ];

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0A0015] overflow-hidden text-white relative">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1AA65D]/5 rounded-full blur-[140px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2B7CE4]/5 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="p-6 pb-2 z-10 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-white flex items-center gap-3 gaming-text-shadow">
            Football Operations
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-red-500/30 text-red-300 rounded border border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-pulse">LIVE MATCH</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1 font-medium">Live tactical pitch visualization, player tracking, and dynamic AI match insights</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4 px-6 py-4 z-10">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="glass-panel p-4 rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-md flex items-center justify-between transition-all duration-500 hover:border-blue-500/30 hover:bg-slate-800/60" onMouseEnter={playHover}>
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
        
        {/* SVG Football Pitch Map */}
        <div className="flex-[2] glass-panel rounded-3xl border border-slate-700/50 bg-[#0a111a]/90 backdrop-blur-xl relative overflow-hidden flex items-center justify-center shadow-2xl">
          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

          <div className="absolute top-4 right-4 z-10">
            <button className="bg-black/60 backdrop-blur border border-white/10 hover:border-blue-500/50 rounded-lg p-2 text-slate-400 hover:text-white transition-colors" onClick={playClick} onMouseEnter={playHover}>
              <Maximize size={16} />
            </button>
          </div>

          <div className="relative w-full max-w-5xl aspect-[1.5/1]">
            <svg viewBox="0 0 1000 660" className="w-full h-full drop-shadow-[0_0_40px_rgba(26,166,93,0.1)]">
              
              {/* Pitch Base */}
              <rect x="50" y="50" width="900" height="560" fill="#1AA65D" fillOpacity="0.15" stroke="#1AA65D" strokeWidth="4" />
              
              {/* Pitch Markings */}
              <path d="M 500 50 L 500 610" stroke="#1AA65D" strokeWidth="4" />
              <circle cx="500" cy="330" r="80" fill="none" stroke="#1AA65D" strokeWidth="4" />
              <circle cx="500" cy="330" r="4" fill="#1AA65D" />
              
              {/* Left Penalty Area */}
              <rect x="50" y="160" width="150" height="340" fill="none" stroke="#1AA65D" strokeWidth="4" />
              <rect x="50" y="240" width="50" height="180" fill="none" stroke="#1AA65D" strokeWidth="4" />
              <path d="M 200 270 Q 250 330 200 390" fill="none" stroke="#1AA65D" strokeWidth="4" />
              <circle cx="150" cy="330" r="3" fill="#1AA65D" />

              {/* Right Penalty Area */}
              <rect x="800" y="160" width="150" height="340" fill="none" stroke="#1AA65D" strokeWidth="4" />
              <rect x="900" y="240" width="50" height="180" fill="none" stroke="#1AA65D" strokeWidth="4" />
              <path d="M 800 270 Q 750 330 800 390" fill="none" stroke="#1AA65D" strokeWidth="4" />
              <circle cx="850" cy="330" r="3" fill="#1AA65D" />

              {/* TACTICAL VISUALIZATIONS */}

              {/* Pressure Visualization Heatmap - Dynamically Animating */}
              <defs>
                <radialGradient id="pressureHeat" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={currentScenario.pressure.color} stopOpacity="0.6" />
                  <stop offset="50%" stopColor={currentScenario.pressure.color} stopOpacity="0.2" />
                  <stop offset="100%" stopColor={currentScenario.pressure.color} stopOpacity="0" />
                </radialGradient>
              </defs>
              
              <circle 
                cx={currentScenario.pressure.x} 
                cy={currentScenario.pressure.y} 
                r={currentScenario.pressure.r} 
                fill="url(#pressureHeat)" 
                className="transition-all duration-[3000ms] ease-in-out animate-pulse" 
              />

              {/* Player Movements (Home Team - Blue) */}
              <g fill="#2B7CE4" stroke="#fff" strokeWidth="2">
                {currentScenario.home.map((pos, i) => (
                  <circle 
                    key={`home-${i}`} 
                    cx={pos.x} 
                    cy={pos.y} 
                    r="9" 
                    className="transition-all duration-[3000ms] ease-in-out" 
                  />
                ))}
              </g>

              {/* Player Movements (Away Team - Yellow) */}
              <g fill="#eab308" stroke="#fff" strokeWidth="2">
                {currentScenario.away.map((pos, i) => (
                  <circle 
                    key={`away-${i}`} 
                    cx={pos.x} 
                    cy={pos.y} 
                    r="9" 
                    className="transition-all duration-[3000ms] ease-in-out" 
                  />
                ))}
              </g>

              {/* Ball */}
              <circle 
                cx={currentScenario.ball.x} 
                cy={currentScenario.ball.y} 
                r="6" 
                fill="#fff" 
                className="transition-all duration-[3000ms] ease-in-out" 
                stroke="#000"
                strokeWidth="1"
              />

              {/* Attack Direction Indicator */}
              <path d="M 400 640 L 600 640 L 580 630 M 600 640 L 580 650" fill="none" stroke="#2B7CE4" strokeWidth="4" opacity="0.6" />
              <text x="430" y="630" fill="#2B7CE4" fontSize="12" fontWeight="bold" opacity="0.8">HOME ATTACK DIRECTION</text>

            </svg>
          </div>

          {/* Top Status Bar (Legend + Live Situation) */}
          <div className="absolute top-4 left-4 z-20 flex gap-4 items-center">
            
            {/* Horizontal Tactical Legend */}
            <div className="bg-black/80 backdrop-blur-xl border border-slate-700 rounded-xl px-4 py-3 flex items-center gap-5 shadow-2xl">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-r border-slate-700 pr-4">Legend</div>
              <div className="flex items-center gap-2 text-xs text-white font-medium"><div className="w-3 h-3 bg-[#2B7CE4] border border-white rounded-full shadow-[0_0_8px_#2B7CE4]"></div> Home</div>
              <div className="flex items-center gap-2 text-xs text-white font-medium"><div className="w-3 h-3 bg-[#eab308] border border-white rounded-full shadow-[0_0_8px_#eab308]"></div> Away</div>
              <div className="flex items-center gap-2 text-xs text-white font-medium"><div className="w-4 h-1.5 bg-[#E20074] shadow-[0_0_8px_#E20074]"></div> Pressure</div>
            </div>

            {/* Live Situation */}
            <div className="bg-black/90 backdrop-blur-xl border border-blue-500/50 rounded-xl px-4 py-3 shadow-[0_0_30px_rgba(43,124,228,0.3)] transition-all duration-500 flex items-center gap-4 max-w-2xl">
              <style jsx>{`
                @keyframes slide-left {
                  from { left: 100%; }
                  to { left: -150%; }
                }
                .animate-slide {
                  animation: slide-left 12s linear infinite;
                }
              `}</style>
              <div className="flex items-center gap-2 border-r border-blue-500/30 pr-4 shrink-0">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
                <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest whitespace-nowrap">LIVE: {currentScenario.phase}</div>
              </div>
              <div className="overflow-hidden relative w-72 h-4 flex items-center shrink-0">
                <p className="text-xs text-slate-200 whitespace-nowrap absolute animate-slide">
                  {currentScenario.desc}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Sidebar: AI Match Insights */}
        <div className="w-80 flex flex-col gap-4">
          
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl flex flex-col">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Activity size={14} className="text-red-400 animate-pulse"/> Dynamic Event Log
            </h3>
            
            <div className="bg-black/60 rounded-xl border border-slate-700 overflow-hidden relative">
              <div className={`absolute top-0 left-0 w-full h-1 ${currentScenario.alertColor} transition-colors duration-1000`}></div>
              <div className="p-4">
                <div className={`text-[10px] font-bold ${currentScenario.alertColor.replace('bg-', 'text-')} mb-1 tracking-widest transition-colors duration-1000`}>
                  {currentScenario.alertTitle}
                </div>
                <p className="text-sm text-white leading-relaxed font-medium transition-all duration-500">
                  {currentScenario.desc}
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl flex-1 overflow-y-auto custom-scrollbar">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Cpu size={14} className="text-blue-400"/> General Insights
            </h3>
            
            <div className="space-y-4">
              
              <div className="bg-slate-800/60 border border-slate-700 p-3 rounded-xl relative overflow-hidden transition-all duration-300 hover:border-[#E20074]/50" onMouseEnter={playHover}>
                <div className="absolute left-0 top-0 w-1 h-full bg-[#E20074]"></div>
                <div className="text-xs font-bold text-[#E20074] mb-1">AWAY TEAM OVERLOAD</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-2">
                  Away team's right flank is consistently overloaded during counter-attacks.
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                  <Target size={12}/> Probability of chance creation: 78%
                </div>
              </div>

              <div className="bg-slate-800/60 border border-slate-700 p-3 rounded-xl relative overflow-hidden transition-all duration-300 hover:border-blue-500/50" onMouseEnter={playHover}>
                <div className="absolute left-0 top-0 w-1 h-full bg-blue-500"></div>
                <div className="text-xs font-bold text-blue-400 mb-1">POSSESSION DOMINANCE</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-2">
                  Home team is maintaining a high defensive block (avg 42m), restricting away team to counter-attacks only.
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                  <Activity size={12}/> 14 passes in attacking third (last 5m)
                </div>
              </div>

            </div>

            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-6 mb-4 flex items-center gap-2">
              <Maximize size={14} className="text-purple-400"/> Tactical Zones
            </h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-slate-300">Final Third Entries</span>
                  <span className="font-bold text-white">Home 24 - 8 Away</span>
                </div>
                <div className="w-full flex h-1.5 rounded-full overflow-hidden bg-slate-800">
                  <div className="bg-[#2B7CE4] h-full" style={{ width: '75%' }}></div>
                  <div className="bg-[#eab308] h-full" style={{ width: '25%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-slate-300">Midfield Duels Won</span>
                  <span className="font-bold text-white">Home 42% - 58% Away</span>
                </div>
                <div className="w-full flex h-1.5 rounded-full overflow-hidden bg-slate-800">
                  <div className="bg-[#2B7CE4] h-full" style={{ width: '42%' }}></div>
                  <div className="bg-[#eab308] h-full" style={{ width: '58%' }}></div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
