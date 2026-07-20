import React, { useState, useEffect } from 'react';
import { Users, Activity, AlertTriangle, ChevronRight, UserCheck, Cpu, Maximize2 } from 'lucide-react';
import { useUISounds } from '@/hooks/useUISounds';

export default function CrowdDashboard() {
  const [time, setTime] = useState(0);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);
  const { playHover, playClick } = useUISounds();

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full flex flex-col bg-[#0A0015] text-white overflow-hidden p-6 gap-6 relative">
      
      {/* Header */}
      <div className="flex justify-between items-end shrink-0 z-10">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-white flex items-center gap-3 gaming-text-shadow">
            Crowd Intelligence
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-blue-500/30 text-blue-300 rounded border border-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.5)]">Live Telemetry</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1 font-medium">Advanced biometric flow & high-density capacity mapping</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="glass-panel border-blue-500/30 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-blue-300 font-bold uppercase">System Confidence</div>
            <div className="text-xl font-black text-white flex items-center gap-2">98.4% <Activity size={14} className="text-blue-400 animate-pulse"/></div>
          </div>
          <div className="glass-panel border-purple-500/30 rounded-xl px-4 py-2 text-right shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <div className="text-[10px] text-purple-300 font-bold uppercase">Global Flow Rate</div>
            <div className="text-xl font-black text-white">4.2k <span className="text-xs text-purple-300 font-normal">fans/min</span></div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0 z-10">
        
        {/* Main Operational Visualization (Advanced Professional SVG Map) */}
        <div className="flex-[2] glass-panel rounded-3xl p-0 flex flex-col relative overflow-hidden group border border-slate-700/50">
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <div className="bg-black/60 backdrop-blur border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2">
              <Users size={14} className="text-blue-400"/>
              <span className="text-xs font-bold text-slate-200 uppercase tracking-widest">Live Spatial Heatmap</span>
            </div>
          </div>
          
          <div className="absolute top-4 right-4 z-10">
            <button className="bg-black/60 backdrop-blur border border-white/10 hover:border-blue-500/50 rounded-lg p-2 text-slate-400 hover:text-white transition-colors">
              <Maximize2 size={16} />
            </button>
          </div>

          <div className="flex-1 relative bg-[#05000a] overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <svg viewBox="0 0 1000 600" className="w-full h-full drop-shadow-2xl relative z-10">
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="heavy-glow">
                  <feGaussianBlur stdDeviation="15" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>

                <linearGradient id="alertGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
                  <stop offset="50%" stopColor="#ef4444" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                </linearGradient>
              </defs>

              <g transform="translate(500, 300)">
                
                {/* Outer Stadium Perimeter */}
                <ellipse cx="0" cy="0" rx="350" ry="220" fill="none" stroke="#1e293b" strokeWidth="2" strokeDasharray="5 5" />
                <ellipse cx="0" cy="0" rx="370" ry="240" fill="none" stroke="#0f172a" strokeWidth="1" />
                
                {/* Concourse Rings */}
                <ellipse cx="0" cy="0" rx="280" ry="170" fill="none" stroke="#334155" strokeWidth="1" />
                <ellipse cx="0" cy="0" rx="200" ry="120" fill="none" stroke="#475569" strokeWidth="1.5" />
                
                {/* Pitch Area */}
                <rect x="-100" y="-60" width="200" height="120" rx="10" fill="#020617" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />
                <circle cx="0" cy="0" r="20" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
                <line x1="0" y1="-60" x2="0" y2="60" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />

                {/* --- SECTOR DATA OVERLAYS --- */}
                
                {/* Sector North (Normal) */}
                <path d="M -200 -120 A 200 120 0 0 1 200 -120 L 280 -170 A 280 170 0 0 0 -280 -170 Z" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="1" />
                <circle cx="0" cy="-145" r="4" fill="#3b82f6" filter="url(#glow)" />
                <text x="0" y="-160" fill="#93c5fd" fontSize="10" textAnchor="middle" letterSpacing="2">NORTH WING</text>
                <text x="0" y="-125" fill="#fff" fontSize="14" textAnchor="middle" fontWeight="bold">62%</text>

                {/* Sector South (Warning) */}
                <path d="M 200 120 A 200 120 0 0 1 -200 120 L -280 170 A 280 170 0 0 0 280 170 Z" fill="#eab308" fillOpacity="0.15" stroke="#eab308" strokeWidth="1" />
                <circle cx="0" cy="145" r="4" fill="#eab308" filter="url(#glow)" className="animate-pulse" />
                <text x="0" y="165" fill="#fef08a" fontSize="10" textAnchor="middle" letterSpacing="2">SOUTH WING</text>
                <text x="0" y="140" fill="#fff" fontSize="14" textAnchor="middle" fontWeight="bold">84%</text>

                {/* Sector East (Critical Crush Risk) */}
                <g 
                  onMouseEnter={() => { playHover(); setHoveredZone('east'); }} 
                  onMouseLeave={() => setHoveredZone(null)}
                  className="cursor-crosshair group"
                >
                  <path d="M 200 -120 A 200 120 0 0 1 200 120 L 280 170 A 280 170 0 0 0 280 -170 Z" fill="#ef4444" fillOpacity="0.25" stroke="#ef4444" strokeWidth="2" filter="url(#glow)" className="group-hover:fill-opacity-40 transition-all" />
                  <circle cx="240" cy="0" r="6" fill="#ef4444" filter="url(#heavy-glow)" className="animate-ping" />
                  <text x="250" y="-20" fill="#fca5a5" fontSize="10" textAnchor="middle" letterSpacing="2" transform="rotate(90 250 -20)">EAST GATES</text>
                  <text x="220" y="0" fill="#fff" fontSize="16" textAnchor="middle" fontWeight="bold">98%</text>
                </g>
                
                {/* Sector West (Empty/Spare) */}
                <path d="M -200 120 A 200 120 0 0 1 -200 -120 L -280 -170 A 280 170 0 0 0 -280 170 Z" fill="#10b981" fillOpacity="0.05" stroke="#10b981" strokeWidth="1" />
                <text x="-240" y="20" fill="#a7f3d0" fontSize="10" textAnchor="middle" letterSpacing="2" transform="rotate(-90 -240 20)">WEST GATES</text>
                <text x="-220" y="0" fill="#fff" fontSize="14" textAnchor="middle" fontWeight="bold">21%</text>

                {/* --- ADVANCED FLOW LINES (Animated) --- */}
                
                {/* Normal entry flow */}
                <path d="M -350 0 C -300 50, -250 50, -200 0" fill="none" stroke="url(#flowGradient)" strokeWidth="3" strokeDasharray="10 10" className="animate-[dash_1s_linear_infinite]" />
                <path d="M 0 -220 C 50 -180, 50 -150, 0 -120" fill="none" stroke="url(#flowGradient)" strokeWidth="3" strokeDasharray="10 10" className="animate-[dash_1s_linear_infinite]" />

                {/* Critical bottleneck flow (Thick Red) */}
                <path d="M 350 0 C 300 -50, 280 -20, 240 0" fill="none" stroke="url(#alertGradient)" strokeWidth="6" strokeDasharray="15 10" className="animate-[dash_0.5s_linear_infinite]" filter="url(#glow)" />
                <path d="M 350 50 C 320 20, 280 20, 240 0" fill="none" stroke="url(#alertGradient)" strokeWidth="6" strokeDasharray="15 10" className="animate-[dash_0.5s_linear_infinite]" filter="url(#glow)" />

                {/* AI Rerouting Suggestion Path (Dashed Yellow) */}
                <path d="M 350 0 C 350 100, 250 200, 0 200 C -150 200, -200 150, -200 0" fill="none" stroke="#eab308" strokeWidth="3" strokeDasharray="8 8" className="animate-[dash_2s_linear_infinite]" opacity="0.8" />
                
                {/* Reroute Node Indicator */}
                <g transform="translate(150, 180)">
                  <circle cx="0" cy="0" r="15" fill="#0A0015" stroke="#eab308" strokeWidth="2" />
                  <polygon points="-3,-5 5,0 -3,5" fill="#eab308" />
                  <text x="25" y="4" fill="#fef08a" fontSize="10" fontWeight="bold" letterSpacing="1">AI REROUTE</text>
                </g>

                {/* Data Nodes (Decorative tech elements) */}
                {[
                  {x: -150, y: -180}, {x: 150, y: -180}, {x: -150, y: 180}, {x: -280, y: -80}, {x: -280, y: 80}
                ].map((pos, i) => (
                  <g key={i} transform={`translate(${pos.x}, ${pos.y})`}>
                    <rect x="-4" y="-4" width="8" height="8" fill="none" stroke="#475569" strokeWidth="1" transform={`rotate(${time * 10})`} />
                    <circle cx="0" cy="0" r="1" fill="#94a3b8" />
                  </g>
                ))}

              </g>

              {/* GLOBAL TOOLTIPS (Rendered at the end to stay on top) */}
              
              {/* Tooltip for East Gate: Opens to the far right, exactly where it belongs */}
              {hoveredZone === 'east' && (
                <foreignObject x="800" y="220" width="200" height="150" className="pointer-events-none animate-fade-in z-50">
                  <div className="w-full h-full bg-black/95 border border-red-500/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                    <div className="h-24 w-full bg-cover bg-center" style={{ backgroundImage: "url('/natural-crowd-gate.png')" }}></div>
                    <div className="p-2">
                      <div className="text-[10px] font-bold text-red-400">EAST GATE CAMERA 4</div>
                      <div className="text-xs text-white leading-tight">Critical Density Alert</div>
                    </div>
                  </div>
                </foreignObject>
              )}

              <style jsx>{`
                @keyframes dash {
                  to { stroke-dashoffset: -30; }
                }
              `}</style>
            </svg>
          </div>
        </div>

        {/* AI Recommendations & Interactive Controls */}
        <div className="flex-1 flex flex-col gap-4 min-w-[320px] max-w-[400px]">
          
          <div className="glass-panel p-5 rounded-2xl border-orange-500/30 flex flex-col h-[350px]">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-orange-300 mb-3 flex items-center gap-2"><Cpu size={14} /> AI Recommendation</h3>
            
            <div className="bg-black/60 rounded-xl border border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.1)] flex flex-col flex-1 overflow-hidden">
              
              {/* Situation-specific CGI Image strictly contained within the card */}
              <div className="h-20 w-full relative shrink-0 border-b border-orange-500/30 overflow-hidden bg-[#0A0015] flex flex-col justify-center items-center">
                <Activity size={24} className="text-orange-500/50 mb-1" />
                <div className="text-[10px] font-bold text-orange-400 tracking-widest">ANALYZING TELEMETRY</div>
                <div className="absolute bottom-2 left-3 right-3 flex justify-between items-end">
                  <div className="text-xs font-bold text-white flex items-center gap-2 drop-shadow-md">
                    <AlertTriangle size={14} className="text-orange-400" /> East Gate Crush Risk
                  </div>
                  <span className="text-[9px] bg-orange-500/80 text-white px-1.5 py-0.5 rounded backdrop-blur">98% CAP</span>
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <p className="text-xs text-slate-300 leading-relaxed">
                  Incoming metro surge has pushed East Gates to critical crush capacity (98%). AI suggests immediately activating emergency flow barriers and rerouting 3,000 fans to West Gates.
                </p>
                
                <button 
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="w-full mt-4 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white text-xs font-bold py-2.5 rounded-lg transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] flex items-center justify-center gap-2"
                >
                  Execute Reroute Protocol <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl flex-1 border-blue-500/20">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mb-4 flex items-center gap-2"><UserCheck size={14} /> Intelligence Actions</h3>
            
            <div className="space-y-3">
              {['Analyze East Gate Density', 'Predict Queue Growth (30m)', 'Run Crowd Simulation'].map((action, i) => (
                <button 
                  key={i}
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="w-full text-left bg-slate-900/40 hover:bg-blue-900/40 border border-white/5 hover:border-blue-500/50 text-sm font-medium text-slate-300 hover:text-white p-3 rounded-xl transition-all flex items-center justify-between group"
                >
                  {action}
                  <ChevronRight size={16} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
