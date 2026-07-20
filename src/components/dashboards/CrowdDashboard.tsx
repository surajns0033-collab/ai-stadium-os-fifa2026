import React, { useState, useEffect } from 'react';
import { Users, Activity, AlertTriangle, TrendingUp, ChevronRight, UserCheck, ShieldAlert, Cpu } from 'lucide-react';
import { useUISounds } from '@/hooks/useUISounds';

export default function CrowdDashboard() {
  const [time, setTime] = useState(0);
  const { playHover, playClick } = useUISounds();

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full flex flex-col bg-[#0A0015] text-white overflow-hidden p-6 gap-6 relative">
      {/* Hyper-realistic Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
        style={{ backgroundImage: "url('/crowd-bg.png')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0015] via-transparent to-[#0A0015] z-0 opacity-80"></div>

      <div className="flex justify-between items-end shrink-0 z-10">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-white flex items-center gap-3 gaming-text-shadow">
            Crowd Intelligence
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-blue-500/30 text-blue-300 rounded border border-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.5)]">Live Feed</span>
          </h2>
          <p className="text-slate-300 text-sm mt-1 gaming-text-shadow font-medium">Real-time density mapping, flow prediction, and dynamic rerouting</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="glass-panel border-blue-500/30 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-blue-300 font-bold uppercase gaming-text-shadow">Live Density</div>
            <div className="text-xl font-black text-white gaming-text-shadow">82% <span className="text-xs text-blue-300 font-normal">↑ 4%</span></div>
          </div>
          <div className="glass-panel border-purple-500/30 rounded-xl px-4 py-2 text-right shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <div className="text-[10px] text-purple-300 font-bold uppercase gaming-text-shadow">Flow Rate</div>
            <div className="text-xl font-black text-white gaming-text-shadow flex items-center gap-2"><Activity size={18} className="text-purple-400" /> 1.2k/m</div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0 z-10">
        
        {/* Main Operational Visualization (Stadium SVG over Image) */}
        <div className="flex-[2] glass-panel rounded-3xl p-6 flex flex-col relative overflow-hidden group">
          <h3 className="font-bold text-lg mb-4 z-10 flex items-center gap-2 gaming-text-shadow"><Users size={18} className="text-blue-400"/> Sector Density Map</h3>
          
          <div className="flex-1 relative border border-white/10 rounded-2xl bg-black/50 overflow-hidden backdrop-blur-sm">
            <svg viewBox="0 0 1000 600" className="w-full h-full drop-shadow-2xl">
              
              {/* Stadium Shape */}
              <g transform="translate(500, 300)">
                 <path d="M -300 -150 Q 0 -200 300 -150 L 250 150 Q 0 200 -250 150 Z" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="4" />
                 
                 {/* Sector Zones (Heatmap colors) */}
                 <path d="M -300 -150 Q -150 -175 0 -200 L 0 0 L -250 150 Q -275 0 -300 -150" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" className="transition-all duration-1000" />
                 <text x="-150" y="-50" fill="#fff" fontSize="18" fontWeight="bold" className="gaming-text-shadow">SECTOR A</text>
                 <text x="-150" y="-30" fill="#93c5fd" fontSize="12" className="gaming-text-shadow">76% Full</text>

                 <path d="M 0 -200 Q 150 -175 300 -150 L 250 150 Q 125 175 0 0 Z" fill="#ef4444" fillOpacity="0.4" stroke="#ef4444" strokeWidth="2" className="animate-pulse" />
                 <text x="150" y="-50" fill="#fff" fontSize="18" fontWeight="bold" className="gaming-text-shadow">SECTOR B</text>
                 <text x="150" y="-30" fill="#fca5a5" fontSize="12" className="gaming-text-shadow">94% Full (Congestion)</text>

                 <path d="M -250 150 Q 0 200 250 150 L 0 0 Z" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2" />
                 <text x="0" y="100" fill="#fff" fontSize="18" fontWeight="bold" className="gaming-text-shadow" textAnchor="middle">SECTOR C</text>
                 <text x="0" y="120" fill="#a7f3d0" fontSize="12" className="gaming-text-shadow" textAnchor="middle">45% Full</text>

                 {/* Dynamic Flow Arrows */}
                 <path d="M 250 150 Q 300 200 400 150" fill="none" stroke="#ef4444" strokeWidth="8" strokeDasharray="15 10" className="animate-[dash_1s_linear_infinite]" opacity="0.8" />
                 
                 <path d="M -250 150 Q -300 200 -400 150" fill="none" stroke="#3b82f6" strokeWidth="6" strokeDasharray="15 10" className="animate-[dash_1.5s_linear_infinite]" opacity="0.6" />
                 
                 {/* Re-routing Suggestion Path */}
                 <path d="M 150 -100 Q 50 0 0 100" fill="none" stroke="#eab308" strokeWidth="4" strokeDasharray="10 5" className="animate-[dash_2s_linear_infinite]" />
                 <text x="75" y="0" fill="#fef08a" fontSize="12" fontWeight="bold" className="gaming-text-shadow animate-pulse" transform="rotate(-53 75 0)">REROUTE TO C</text>

              </g>

              <style jsx>{`
                @keyframes dash {
                  to { stroke-dashoffset: -30; }
                }
              `}</style>
            </svg>
          </div>
        </div>

        {/* AI Recommendations & Interactive Controls */}
        <div className="flex-1 flex flex-col gap-4 min-w-[320px]">
          
          <div className="glass-panel p-5 rounded-2xl border-orange-500/30">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-orange-300 mb-4 flex items-center gap-2 gaming-text-shadow"><Cpu size={14} /> AI Recommendation</h3>
            
            <div className="bg-black/60 rounded-xl p-4 border border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-bold text-white flex items-center gap-2 gaming-text-shadow">
                  <AlertTriangle size={14} className="text-orange-400" /> Sector B Bottleneck
                </div>
                <span className="text-[10px] bg-orange-500/30 text-orange-200 px-2 py-0.5 rounded border border-orange-500/50">92% Confidence</span>
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed gaming-text-shadow">Incoming metro surge in 4m will push Sector B to critical crush capacity (98%). AI suggests immediately deploying 5 volunteers to redirect flow to Sector C.</p>
              
              <button 
                onMouseEnter={playHover}
                onClick={playClick}
                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white text-xs font-bold py-2.5 rounded-lg transition-all shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] flex items-center justify-center gap-2"
              >
                Execute Reroute Protocol <ChevronRight size={14} />
              </button>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl flex-1 border-blue-500/20">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mb-4 flex items-center gap-2 gaming-text-shadow"><UserCheck size={14} /> Interactive Actions</h3>
            
            <div className="space-y-3">
              {['Analyze Zone B Density', 'Predict Queue Growth (30m)', 'Run Gate Simulation'].map((action, i) => (
                <button 
                  key={i}
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="w-full text-left bg-black/40 hover:bg-blue-900/40 border border-white/10 hover:border-blue-500/50 text-sm font-bold text-slate-200 hover:text-white p-3 rounded-xl transition-all flex items-center justify-between group gaming-text-shadow"
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
