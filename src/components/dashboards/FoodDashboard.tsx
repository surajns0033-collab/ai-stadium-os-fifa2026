import React, { useState, useEffect } from 'react';
import { Utensils, Clock, TrendingUp, AlertCircle, CheckCircle2, Flame, ShoppingBag, Brain } from 'lucide-react';

export default function FoodDashboard() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full flex flex-col bg-[#0A0015] text-white overflow-hidden p-6 gap-6 relative">
      
      {/* Header */}
      <div className="flex justify-between items-end shrink-0 z-10">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-white flex items-center gap-3">
            F&B Operations Command
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-orange-500/20 text-orange-400 rounded border border-orange-500/30">Live Sales</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">Live queue tracking, inventory burn rates, and AI demand forecasting</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Avg Processing Time</div>
            <div className="text-xl font-black text-white">42s <span className="text-xs text-green-400 font-normal">Fast</span></div>
          </div>
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Live Orders / Min</div>
            <div className="text-xl font-black text-white">348 <span className="text-xs text-orange-400 font-normal">Surging</span></div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0 z-10">
        
        {/* Main SVG Visualization - Queue & Service Lines */}
        <div className="flex-1 glass-panel rounded-3xl border border-slate-700/50 p-6 flex flex-col relative overflow-hidden bg-slate-900/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <div className="flex justify-between items-center mb-4 z-10">
            <h3 className="font-bold text-lg">Concourse Vendor Activity</h3>
            <div className="flex gap-4">
              <span className="flex items-center gap-2 text-xs text-slate-400"><span className="w-3 h-3 rounded-full bg-green-500"></span> Nominal</span>
              <span className="flex items-center gap-2 text-xs text-slate-400"><span className="w-3 h-3 rounded-full bg-yellow-500"></span> Busy</span>
              <span className="flex items-center gap-2 text-xs text-slate-400"><span className="w-3 h-3 rounded-full bg-red-500"></span> Congested</span>
            </div>
          </div>
          
          <div className="flex-1 relative border border-slate-700 rounded-2xl bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Vendor Stall 1 - Busy */}
              <g transform="translate(100, 100)">
                <rect width="200" height="80" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                <rect width="200" height="10" rx="2" fill="#eab308" />
                <text x="100" y="45" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">Burger Point (North)</text>
                <text x="100" y="65" textAnchor="middle" fill="#94a3b8" fontSize="12">Wait: 4m | Cap: 85%</text>
                
                {/* Customers in Queue */}
                {[...Array(12)].map((_, i) => (
                  <circle key={`q1-${i}`} cx={100} cy={120 + i*20} r="6" fill="#eab308" className="animate-pulse" style={{ animationDelay: `${i*0.2}s` }} />
                ))}
                
                {/* Order Processing Flow */}
                <path d="M 200 40 L 350 40" fill="none" stroke="#eab308" strokeWidth="4" strokeDasharray="8 8" className="animate-[dash_1s_linear_infinite]" />
              </g>

              {/* Vendor Stall 2 - Congested */}
              <g transform="translate(450, 100)">
                <rect width="200" height="80" rx="4" fill="#1e293b" stroke="#e20074" strokeWidth="2" />
                <rect width="200" height="10" rx="2" fill="#e20074" />
                <text x="100" y="45" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">Beer Garden (Main)</text>
                <text x="100" y="65" textAnchor="middle" fill="#fbcfe8" fontSize="12">Wait: 12m | Cap: 110%</text>
                
                {/* Long Queue */}
                {[...Array(20)].map((_, i) => (
                  <circle key={`q2-${i}`} cx={100 + (Math.sin(i)*10)} cy={120 + i*15} r="6" fill="#e20074" className="animate-bounce" style={{ animationDelay: `${i*0.1}s` }} />
                ))}
              </g>

              {/* Vendor Stall 3 - Nominal */}
              <g transform="translate(100, 400)">
                <rect width="200" height="80" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                <rect width="200" height="10" rx="2" fill="#10b981" />
                <text x="100" y="45" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">Pizza Express</text>
                <text x="100" y="65" textAnchor="middle" fill="#94a3b8" fontSize="12">Wait: 1m | Cap: 30%</text>
                
                {/* Short Queue */}
                {[...Array(3)].map((_, i) => (
                  <circle key={`q3-${i}`} cx={100} cy={120 + i*20} r="6" fill="#10b981" />
                ))}
              </g>

              {/* Central Kitchen / Stock */}
              <g transform="translate(700, 250)">
                <rect width="150" height="150" rx="75" fill="#f97316" fillOpacity="0.1" stroke="#f97316" strokeWidth="3" filter="url(#glow)" />
                <text x="75" y="65" textAnchor="middle" fill="#fdba74" fontSize="30">🍔</text>
                <text x="75" y="95" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">MAIN KITCHEN</text>
                <text x="75" y="115" textAnchor="middle" fill="#f97316" fontSize="12">Inventory Hub</text>
              </g>

              {/* Restock Path */}
              <path d="M 700 325 L 650 325 L 650 180" fill="none" stroke="#f97316" strokeWidth="4" strokeDasharray="15 15" className="animate-[dash_2s_linear_infinite]" />
              <text x="630" y="260" fill="#f97316" fontSize="12" fontWeight="bold" transform="rotate(-90 630 260)">RESTOCKING BEER GARDEN</text>

              <style jsx>{`
                @keyframes dash {
                  to { stroke-dashoffset: -30; }
                }
              `}</style>
            </svg>
          </div>
        </div>

        {/* AI Insights & Popular Items */}
        <div className="w-[350px] shrink-0 flex flex-col gap-4">
          
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 bg-orange-900/10">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><Brain size={14} className="text-orange-400" /> Demand Prediction AI</h3>
            
            <div className="bg-slate-900/80 rounded-xl p-4 border border-red-500/30 shadow-[0_0_15px_rgba(226,0,116,0.1)] mb-4 relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1 h-full bg-red-500"></div>
              <div className="flex items-start gap-3">
                <Flame size={18} className="text-red-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white mb-1">Beer Garden Overwhelmed</div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">Wait times exceed 12m. AI suggests deploying mobile beverage vendors to the adjacent concourse to disperse the queue.</p>
                  <button className="w-full py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 rounded text-xs font-bold transition-colors">
                    Deploy 4 Mobile Vendors
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700">
               <h4 className="text-xs font-bold text-white mb-3 flex items-center gap-2"><ShoppingBag size={14} className="text-orange-400"/> Inventory Burn Rates</h4>
               <div className="space-y-4">
                 <div>
                   <div className="flex justify-between text-xs mb-1">
                     <span className="text-slate-300">Premium Draft Beer</span>
                     <span className="text-red-400 font-bold">18 mins left</span>
                   </div>
                   <div className="h-1.5 bg-slate-800 rounded-full"><div className="h-full bg-red-500 rounded-full" style={{ width: '15%' }}></div></div>
                 </div>
                 <div>
                   <div className="flex justify-between text-xs mb-1">
                     <span className="text-slate-300">Classic Hot Dog</span>
                     <span className="text-yellow-400 font-bold">45 mins left</span>
                   </div>
                   <div className="h-1.5 bg-slate-800 rounded-full"><div className="h-full bg-yellow-500 rounded-full" style={{ width: '40%' }}></div></div>
                 </div>
                 <div>
                   <div className="flex justify-between text-xs mb-1">
                     <span className="text-slate-300">Vegan Wrap</span>
                     <span className="text-green-400 font-bold">Safe (2 hrs+)</span>
                   </div>
                   <div className="h-1.5 bg-slate-800 rounded-full"><div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div></div>
                 </div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-1">
            <div className="glass-panel p-4 rounded-2xl border border-slate-700/50 flex flex-col justify-center">
              <TrendingUp size={20} className="text-green-400 mb-2" />
              <div className="text-2xl font-black text-white">$142k</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Rev / Hr</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-700/50 flex flex-col justify-center">
              <Clock size={20} className="text-blue-400 mb-2" />
              <div className="text-2xl font-black text-white">4.2m</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Avg Wait All</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-700/50 flex flex-col justify-center col-span-2 bg-slate-800/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-300 uppercase">Self-Checkout Kiosks</span>
                <span className="text-xs text-green-400 font-bold">98% Uptime</span>
              </div>
              <div className="flex gap-1">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className={`flex-1 h-6 rounded-sm ${i === 14 ? 'bg-red-500 animate-pulse' : 'bg-green-500/50'}`}></div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
