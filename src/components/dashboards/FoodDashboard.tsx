import React, { useState, useEffect } from 'react';
import { Utensils, TrendingUp, ChevronRight, CheckCircle2, AlertCircle, ShoppingCart, Maximize2 } from 'lucide-react';
import { useUISounds } from '@/hooks/useUISounds';

export default function FoodDashboard() {
  const [time, setTime] = useState(0);
  const [hoveredVendor, setHoveredVendor] = useState<string | null>(null);
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
            Food Intelligence
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-green-500/30 text-green-300 rounded border border-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.5)]">Inventory Sync</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1 font-medium">Real-time concessions, inventory tracking, and demand prediction</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="glass-panel border-green-500/30 rounded-xl px-4 py-2 text-right shadow-[0_0_20px_rgba(34,197,94,0.1)]">
            <div className="text-[10px] text-green-300 font-bold uppercase">Total Revenue</div>
            <div className="text-xl font-black text-white">$42,000 <span className="text-xs text-green-400 font-normal">↑ 15%</span></div>
          </div>
          <div className="glass-panel border-yellow-500/30 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-yellow-300 font-bold uppercase">Avg Queue</div>
            <div className="text-xl font-black text-white">2.5m</div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0 z-10">
        
        {/* Main Operational Visualization (Inventory Flow SVG) */}
        <div className="flex-[2] glass-panel rounded-3xl p-0 flex flex-col relative overflow-hidden group border border-slate-700/50">
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <div className="bg-black/60 backdrop-blur border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2">
              <ShoppingCart size={14} className="text-green-400"/>
              <span className="text-xs font-bold text-slate-200 uppercase tracking-widest">Live Concourse Grid</span>
            </div>
          </div>
          
          <div className="absolute top-4 right-4 z-10">
            <button className="bg-black/60 backdrop-blur border border-white/10 hover:border-green-500/50 rounded-lg p-2 text-slate-400 hover:text-white transition-colors">
              <Maximize2 size={16} />
            </button>
          </div>
          
          <div className="flex-1 relative bg-[#05000a] overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            {hoveredVendor === 'vendorB' && (
              <div className="absolute top-[35%] left-[25%] z-20 w-48 bg-black/80 border border-red-500/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(239,68,68,0.3)] animate-fade-in pointer-events-none">
                <div className="h-24 w-full bg-cover bg-center" style={{ backgroundImage: "url('/food-vendor.png')" }}></div>
                <div className="p-2">
                  <div className="text-[10px] font-bold text-red-400">CONCESSION CAM 12</div>
                  <div className="text-xs text-white">Critical Stock Depletion</div>
                </div>
              </div>
            )}

            <svg viewBox="0 0 1000 600" className="w-full h-full drop-shadow-2xl relative z-10">
              <defs>
                <filter id="glowGreen">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="glowRed">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <g transform="translate(100, 100)">
                {/* Vendor A */}
                <rect x="0" y="0" width="200" height="100" rx="10" fill="#022c22" stroke="#10b981" strokeWidth="2" />
                <text x="20" y="30" fill="#fff" fontSize="16" fontWeight="bold">Vendor A (Burgers)</text>
                <rect x="20" y="60" width="160" height="10" rx="5" fill="#0f172a" />
                <rect x="20" y="60" width="140" height="10" rx="5" fill="#10b981" filter="url(#glowGreen)" className="transition-all duration-1000" />
                <text x="20" y="90" fill="#a7f3d0" fontSize="12">Stock: 85% | Queue: 1.2m</text>

                {/* Vendor B (Critical) */}
                <g 
                  onMouseEnter={() => { playHover(); setHoveredVendor('vendorB'); }} 
                  onMouseLeave={() => setHoveredVendor(null)}
                  className="cursor-crosshair"
                >
                  <rect x="0" y="200" width="200" height="100" rx="10" fill="#450a0a" stroke="#ef4444" strokeWidth="2" className="animate-pulse hover:fill-opacity-80 transition-all" />
                  <text x="20" y="230" fill="#fff" fontSize="16" fontWeight="bold">Vendor B (Hotdogs)</text>
                  <rect x="20" y="260" width="160" height="10" rx="5" fill="#0f172a" />
                  <rect x="20" y="260" width="40" height="10" rx="5" fill="#ef4444" filter="url(#glowRed)" />
                  <text x="20" y="290" fill="#fca5a5" fontSize="12" className="animate-pulse">Stock: 12% | Queue: 4.5m</text>
                </g>

                {/* Warehouse */}
                <rect x="500" y="80" width="250" height="200" rx="15" fill="#1e1b4b" stroke="#3b82f6" strokeWidth="2" />
                <path d="M 500 120 L 750 120" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5 5" opacity="0.5" />
                <text x="520" y="110" fill="#fff" fontSize="18" fontWeight="bold">Central Warehouse</text>
                
                {/* Simulated Stock items in warehouse */}
                <g transform="translate(520, 140)">
                  <rect x="0" y="0" width="30" height="30" rx="4" fill="#3b82f6" opacity="0.8" />
                  <rect x="40" y="0" width="30" height="30" rx="4" fill="#3b82f6" opacity="0.8" />
                  <rect x="80" y="0" width="30" height="30" rx="4" fill="#3b82f6" opacity="0.8" />
                  <rect x="120" y="0" width="30" height="30" rx="4" fill="#eab308" opacity="0.8" className="animate-pulse" />
                </g>
                <text x="520" y="220" fill="#93c5fd" fontSize="12">Staged: 200 Hotdog Units (Zone B)</text>

                {/* Animated supply lines */}
                <path d="M 500 150 C 350 150, 350 50, 200 50" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="10 5" opacity="0.3" />
                
                {/* Active Restock Route to B */}
                <path d="M 500 200 C 350 200, 350 250, 200 250" fill="none" stroke="#eab308" strokeWidth="4" strokeDasharray="15 10" className="animate-[dash_1.5s_linear_infinite]" />
                
                {/* Supply box moving */}
                <g>
                  <rect x="-10" y="-10" width="20" height="20" rx="4" fill="#eab308" filter="url(#glowGreen)" />
                  <animateMotion path="M 500 200 C 350 200, 350 250, 200 250" dur="2s" repeatCount="indefinite" />
                </g>

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
        <div className="flex-1 flex flex-col gap-4 min-w-[320px] max-w-[400px]">
          
          <div className="glass-panel p-5 rounded-2xl border-yellow-500/30 flex flex-col h-[350px]">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-yellow-300 mb-3 flex items-center gap-2"><AlertCircle size={14} /> Supply Warning</h3>
            
            <div className="bg-black/60 rounded-xl border border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.1)] flex flex-col flex-1 overflow-hidden">
              
              {/* Situation-specific CGI Image strictly contained within the card */}
              <div className="h-20 w-full relative shrink-0 border-b border-yellow-500/30 overflow-hidden bg-[#0A0015] flex flex-col justify-center items-center">
                <AlertCircle size={24} className="text-yellow-500/50 mb-1" />
                <div className="text-[10px] font-bold text-yellow-400 tracking-widest">ANALYZING POS DATA</div>
                <div className="absolute bottom-2 left-3 right-3 flex justify-between items-end">
                  <div className="text-xs font-bold text-white flex items-center gap-2 drop-shadow-md">
                    Vendor B Depletion
                  </div>
                  <span className="text-[9px] bg-yellow-500/80 text-black font-bold px-1.5 py-0.5 rounded backdrop-blur">99% CONFIDENCE</span>
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sales rate is 1.5x expected. Stock will run out in 15 mins. AI has pre-staged 200 units at Central Warehouse for immediate dispatch.
                </p>
                
                <button 
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="w-full mt-4 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black text-xs font-bold py-2.5 rounded-lg transition-all shadow-[0_0_15px_rgba(234,179,8,0.4)] hover:shadow-[0_0_25px_rgba(234,179,8,0.6)] flex items-center justify-center gap-2"
                >
                  Approve Restock Dispatch <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl flex-1 border-green-500/20">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-green-300 mb-4 flex items-center gap-2"><TrendingUp size={14} /> Interactive Analysis</h3>
            
            <div className="space-y-3">
              {['Predict Inventory Demand', 'Analyze Peak Hours', 'Compare Vendor Revenue'].map((action, i) => (
                <button 
                  key={i}
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="w-full text-left bg-slate-900/40 hover:bg-green-900/40 border border-white/5 hover:border-green-500/50 text-sm font-medium text-slate-300 hover:text-white p-3 rounded-xl transition-all flex items-center justify-between group"
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
