import React, { useState, useEffect } from 'react';
import { Utensils, TrendingUp, ChevronRight, CheckCircle2, AlertCircle, ShoppingCart } from 'lucide-react';
import { useUISounds } from '@/hooks/useUISounds';

export default function FoodDashboard() {
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
        style={{ backgroundImage: "url('/food-bg.png')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0015] via-transparent to-[#0A0015] z-0 opacity-80"></div>

      <div className="flex justify-between items-end shrink-0 z-10">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-white flex items-center gap-3 gaming-text-shadow">
            Food Intelligence
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-green-500/30 text-green-300 rounded border border-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.5)]">Inventory Sync</span>
          </h2>
          <p className="text-slate-300 text-sm mt-1 gaming-text-shadow font-medium">Real-time concessions, inventory tracking, and demand prediction</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="glass-panel border-green-500/30 rounded-xl px-4 py-2 text-right shadow-[0_0_20px_rgba(34,197,94,0.1)]">
            <div className="text-[10px] text-green-300 font-bold uppercase gaming-text-shadow">Total Revenue</div>
            <div className="text-xl font-black text-white gaming-text-shadow">$42,000 <span className="text-xs text-green-300 font-normal">↑ 15%</span></div>
          </div>
          <div className="glass-panel border-yellow-500/30 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-yellow-300 font-bold uppercase gaming-text-shadow">Avg Queue</div>
            <div className="text-xl font-black text-white gaming-text-shadow">2.5m</div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0 z-10">
        
        {/* Main Operational Visualization (Inventory Flow SVG) */}
        <div className="flex-[2] glass-panel rounded-3xl p-6 flex flex-col relative overflow-hidden group">
          <h3 className="font-bold text-lg mb-4 z-10 flex items-center gap-2 gaming-text-shadow"><ShoppingCart size={18} className="text-green-400"/> Live Concourse Grid</h3>
          
          <div className="flex-1 relative border border-white/10 rounded-2xl bg-black/50 overflow-hidden backdrop-blur-sm p-4">
            <svg viewBox="0 0 1000 600" className="w-full h-full drop-shadow-2xl">
              <g transform="translate(100, 100)">
                {/* Vendor A */}
                <rect x="0" y="0" width="200" height="100" rx="10" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2" />
                <text x="20" y="30" fill="#fff" fontSize="16" fontWeight="bold" className="gaming-text-shadow">Vendor A (Burgers)</text>
                <rect x="20" y="60" width="160" height="10" rx="5" fill="#000" />
                <rect x="20" y="60" width="140" height="10" rx="5" fill="#10b981" className="transition-all duration-1000" />
                <text x="20" y="90" fill="#a7f3d0" fontSize="12" className="gaming-text-shadow">Stock: 85%</text>

                {/* Vendor B (Critical) */}
                <rect x="0" y="200" width="200" height="100" rx="10" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="2" className="animate-pulse" />
                <text x="20" y="230" fill="#fff" fontSize="16" fontWeight="bold" className="gaming-text-shadow">Vendor B (Hotdogs)</text>
                <rect x="20" y="260" width="160" height="10" rx="5" fill="#000" />
                <rect x="20" y="260" width="40" height="10" rx="5" fill="#ef4444" />
                <text x="20" y="290" fill="#fca5a5" fontSize="12" className="gaming-text-shadow animate-pulse">Stock: 12% (Critical)</text>

                {/* Warehouse */}
                <rect x="500" y="100" width="250" height="150" rx="10" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
                <text x="520" y="140" fill="#fff" fontSize="20" fontWeight="bold" className="gaming-text-shadow">Central Warehouse</text>
                <text x="520" y="170" fill="#93c5fd" fontSize="14" className="gaming-text-shadow">Dispatch Ready</text>

                {/* Animated supply lines */}
                <path d="M 500 150 C 350 150, 350 50, 200 50" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="10 5" opacity="0.3" />
                
                {/* Active Restock Route to B */}
                <path d="M 500 175 C 350 175, 350 250, 200 250" fill="none" stroke="#eab308" strokeWidth="6" strokeDasharray="15 10" className="animate-[dash_1.5s_linear_infinite]" />
                
                {/* Supply box moving */}
                <rect x="0" y="0" width="20" height="20" rx="4" fill="#eab308" className="shadow-[0_0_10px_rgba(234,179,8,1)]">
                  <animateMotion path="M 500 175 C 350 175, 350 250, 200 250" dur="2s" repeatCount="indefinite" />
                </rect>

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
          
          <div className="glass-panel p-5 rounded-2xl border-yellow-500/30">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-yellow-300 mb-4 flex items-center gap-2 gaming-text-shadow"><AlertCircle size={14} /> Supply Warning</h3>
            
            <div className="bg-black/60 rounded-xl p-4 border border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-bold text-white flex items-center gap-2 gaming-text-shadow">
                   Vendor B Depletion
                </div>
                <span className="text-[10px] bg-yellow-500/30 text-yellow-200 px-2 py-0.5 rounded border border-yellow-500/50">99% Confidence</span>
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed gaming-text-shadow">Sales rate is 1.5x expected. Stock will run out in 15 mins. AI has pre-staged 200 units at Central Warehouse for immediate dispatch.</p>
              
              <button 
                onMouseEnter={playHover}
                onClick={playClick}
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black text-xs font-bold py-2.5 rounded-lg transition-all shadow-[0_0_15px_rgba(234,179,8,0.4)] hover:shadow-[0_0_25px_rgba(234,179,8,0.6)] flex items-center justify-center gap-2"
              >
                Approve Restock Dispatch <ChevronRight size={14} />
              </button>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl flex-1 border-green-500/20">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-green-300 mb-4 flex items-center gap-2 gaming-text-shadow"><TrendingUp size={14} /> Interactive Analysis</h3>
            
            <div className="space-y-3">
              {['Predict Inventory Demand', 'Analyze Peak Hours', 'Compare Vendor Revenue'].map((action, i) => (
                <button 
                  key={i}
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="w-full text-left bg-black/40 hover:bg-green-900/40 border border-white/10 hover:border-green-500/50 text-sm font-bold text-slate-200 hover:text-white p-3 rounded-xl transition-all flex items-center justify-between group gaming-text-shadow"
                >
                  {action}
                  <ChevronRight size={16} className="text-slate-500 group-hover:text-green-400 transition-colors" />
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
