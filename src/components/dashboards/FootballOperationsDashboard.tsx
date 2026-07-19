"use client";
import React, { useState, useEffect } from 'react';
import { Activity, Target, Shield, Zap, TrendingUp, Cpu, Maximize } from 'lucide-react';

export default function FootballOperationsDashboard() {
  const [matchTime, setMatchTime] = useState(72);
  const [tick, setTick] = useState(0);

  // Animate the simulation state periodically
  useEffect(() => {
    const timer = setInterval(() => {
      setTick(prev => (prev + 1) % 100);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const kpis = [
    { label: 'Match Time', value: `${matchTime}:14`, trend: '2nd Half', icon: Activity, color: 'text-white' },
    { label: 'Possession', value: '58% - 42%', trend: 'Home Dominant', icon: TrendingUp, color: 'text-blue-400' },
    { label: 'High Press Intensity', value: 'High', trend: 'Last 10m', icon: Zap, color: 'text-[#E20074]' },
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
          <h2 className="text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Football Operations
          </h2>
          <p className="text-slate-400 text-sm mt-1">Live tactical pitch visualization, pressure heatmaps & AI match insights</p>
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
        
        {/* SVG Football Pitch Map */}
        <div className="flex-1 glass-panel rounded-3xl border border-slate-700/50 bg-[#0a111a]/90 backdrop-blur-xl relative overflow-hidden flex items-center justify-center">
          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

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

              {/* Pressure Visualization Heatmap */}
              <defs>
                <radialGradient id="pressureHeat" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#E20074" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#E20074" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#E20074" stopOpacity="0" />
                </radialGradient>
                <marker id="pass-arrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                  <polygon points="0 0, 6 2, 0 4" fill="#fff" opacity="0.6" />
                </marker>
              </defs>
              
              <circle cx="650" cy="300" r="150" fill="url(#pressureHeat)" className="animate-pulse" />
              <circle cx="300" cy="450" r="100" fill="url(#pressureHeat)" opacity="0.5" />

              {/* Defensive Shape (Polygons) */}
              <polygon points="120,200 120,460 220,380 220,280" fill="#2B7CE4" fillOpacity="0.1" stroke="#2B7CE4" strokeWidth="2" strokeDasharray="4 4" />
              <polygon points="780,180 780,480 650,400 650,260" fill="#eab308" fillOpacity="0.1" stroke="#eab308" strokeWidth="2" strokeDasharray="4 4" />

              {/* Passing Animation (Ball Movement) */}
              <g className="animate-[dash_2s_ease-out_infinite]">
                <path d="M 300 250 Q 450 150 550 280" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="10 10" markerEnd="url(#pass-arrow)" opacity="0.6" />
                <path d="M 550 280 Q 600 400 700 380" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="10 10" markerEnd="url(#pass-arrow)" opacity="0.6" />
              </g>

              {/* Player Movements (Home Team - Blue) */}
              <g fill="#2B7CE4" stroke="#fff" strokeWidth="2">
                <circle cx="120" cy="200" r="8" />
                <circle cx="120" cy="330" r="8" />
                <circle cx="120" cy="460" r="8" />
                
                <circle cx="220" cy="280" r="8" />
                <circle cx="220" cy="380" r="8" />
                
                <circle cx="300" cy="250" r="8" /> {/* Passer */}
                <circle cx="320" cy="480" r="8" />
                
                <circle cx="550" cy="280" r="8" /> {/* Receiver 1 */}
                <circle cx="700" cy="380" r="8" /> {/* Receiver 2 */}
                
                <circle cx="600" cy="120" r="8" />
              </g>

              {/* Player Movements (Away Team - Yellow) */}
              <g fill="#eab308" stroke="#fff" strokeWidth="2">
                <circle cx="850" cy="330" r="8" />
                
                <circle cx="780" cy="180" r="8" />
                <circle cx="780" cy="330" r="8" />
                <circle cx="780" cy="480" r="8" />
                
                <circle cx="650" cy="260" r="8" />
                <circle cx="650" cy="400" r="8" /> {/* High Pressure Defender */}
                
                <circle cx="580" cy="300" r="8" />
                
                <circle cx="450" cy="180" r="8" />
                <circle cx="450" cy="480" r="8" />
                
                <circle cx="320" cy="330" r="8" />
              </g>

              {/* Ball */}
              <circle cx="555" cy="285" r="5" fill="#fff" className="animate-bounce" />

              {/* Attack Direction Indicator */}
              <path d="M 400 640 L 600 640 L 580 630 M 600 640 L 580 650" fill="none" stroke="#2B7CE4" strokeWidth="4" opacity="0.6" />
              <text x="430" y="630" fill="#2B7CE4" fontSize="12" fontWeight="bold" opacity="0.8">HOME ATTACK DIRECTION</text>

            </svg>
            
            <style jsx>{`
              @keyframes dash {
                to { stroke-dashoffset: -50; }
              }
            `}</style>
            
            {/* Tactical Legend overlay */}
            <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-xl border border-slate-700 rounded-xl p-3 flex flex-col gap-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Tactical Legend</div>
              <div className="flex items-center gap-2 text-xs text-white"><div className="w-3 h-3 bg-[#2B7CE4] border border-white rounded-full"></div> Home (4-2-3-1)</div>
              <div className="flex items-center gap-2 text-xs text-white"><div className="w-3 h-3 bg-[#eab308] border border-white rounded-full"></div> Away (4-3-3)</div>
              <div className="flex items-center gap-2 text-xs text-white"><div className="w-4 h-1 bg-[#E20074]"></div> High Pressure Zone</div>
            </div>

          </div>
        </div>

        {/* Right Sidebar: AI Match Insights */}
        <div className="w-80 flex flex-col gap-4">
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl flex-1 overflow-y-auto custom-scrollbar">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Cpu size={14} className="text-blue-400"/> AI Match Insights
            </h3>
            
            <div className="space-y-4">
              
              <div className="bg-slate-800/60 border border-slate-700 p-3 rounded-xl relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-[#E20074]"></div>
                <div className="text-xs font-bold text-[#E20074] mb-1">DEFENSIVE VULNERABILITY</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-2">
                  Away team's right flank is consistently overloaded. Home team #7 is finding space behind the fullback.
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                  <Target size={12}/> Probability of chance creation: 78%
                </div>
              </div>

              <div className="bg-slate-800/60 border border-slate-700 p-3 rounded-xl relative overflow-hidden">
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

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300">Final Third Entries</span>
                <span className="font-bold text-white">Home 24 - 8 Away</span>
              </div>
              <div className="w-full flex h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#2B7CE4] h-full" style={{ width: '75%' }}></div>
                <div className="bg-[#eab308] h-full" style={{ width: '25%' }}></div>
              </div>

              <div className="flex justify-between items-center text-xs mt-3">
                <span className="text-slate-300">Midfield Duels Won</span>
                <span className="font-bold text-white">Home 42% - 58% Away</span>
              </div>
              <div className="w-full flex h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#2B7CE4] h-full" style={{ width: '42%' }}></div>
                <div className="bg-[#eab308] h-full" style={{ width: '58%' }}></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
