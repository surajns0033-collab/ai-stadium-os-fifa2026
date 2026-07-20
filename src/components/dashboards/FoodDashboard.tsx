import React, { useState, useEffect } from 'react';
import { Utensils, TrendingUp, ChevronRight, AlertCircle, ShoppingCart, Maximize2, Coffee, Pizza, Wine, ShieldCheck } from 'lucide-react';
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
            Food & Beverage Intelligence
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-green-500/30 text-green-300 rounded border border-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.5)]">Concourse Analytics</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1 font-medium">Real-time inventory, vendor demand, and predictive supply routing</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="glass-panel border-green-500/30 rounded-xl px-4 py-2 text-right shadow-[0_0_20px_rgba(34,197,94,0.1)]">
            <div className="text-[10px] text-green-300 font-bold uppercase">Total Revenue (Live)</div>
            <div className="text-xl font-black text-white">$142,500 <span className="text-xs text-green-400 font-normal">↑ 18%</span></div>
          </div>
          <div className="glass-panel border-yellow-500/30 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-yellow-300 font-bold uppercase">Avg Queue Time</div>
            <div className="text-xl font-black text-white">3.2m</div>
          </div>
          <div className="glass-panel border-blue-500/30 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-blue-300 font-bold uppercase">Active Vendors</div>
            <div className="text-xl font-black text-white">48/50</div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0 z-10">
        
        {/* Main Operational Visualization (Complex Concourse Grid SVG) */}
        <div className="flex-[2] glass-panel rounded-3xl p-0 flex flex-col relative overflow-hidden group border border-slate-700/50">
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <div className="bg-black/60 backdrop-blur border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2">
              <ShoppingCart size={14} className="text-green-400"/>
              <span className="text-xs font-bold text-slate-200 uppercase tracking-widest">Sector 4 Concourse Grid</span>
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

            <svg viewBox="0 0 1000 600" className="w-full h-full drop-shadow-2xl relative z-10">
              <defs>
                <filter id="glowGreen"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                <filter id="glowRed"><feGaussianBlur stdDeviation="8" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                <filter id="glowPurple"><feGaussianBlur stdDeviation="6" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                <filter id="glowBlue"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
              </defs>

              {/* Warehouse Infrastructure */}
              <g transform="translate(400, 250)">
                <rect x="-100" y="-80" width="200" height="160" rx="20" fill="#1e1b4b" stroke="#3b82f6" strokeWidth="2" opacity="0.8" />
                <circle cx="0" cy="0" r="140" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5 5" opacity="0.3" className="animate-[spin_60s_linear_infinite]" />
                <text x="0" y="-30" fill="#fff" fontSize="18" fontWeight="bold" textAnchor="middle">CENTRAL LOGISTICS</text>
                <text x="0" y="-10" fill="#93c5fd" fontSize="12" textAnchor="middle">Staging & Supply Hub</text>
                
                {/* Supply boxes in warehouse */}
                <g transform="translate(-60, 20)">
                  <rect x="0" y="0" width="25" height="25" rx="4" fill="#3b82f6" opacity="0.8" />
                  <rect x="35" y="0" width="25" height="25" rx="4" fill="#3b82f6" opacity="0.8" />
                  <rect x="70" y="0" width="25" height="25" rx="4" fill="#10b981" opacity="0.8" />
                  <rect x="105" y="0" width="25" height="25" rx="4" fill="#eab308" opacity="0.8" className="animate-pulse" />
                </g>
              </g>

              {/* Delivery Routes (from warehouse to vendors) */}
              <g opacity="0.4">
                <path d="M 400 250 L 150 120" stroke="#10b981" strokeWidth="2" strokeDasharray="10 5" fill="none" />
                <path d="M 400 250 L 150 480" stroke="#ef4444" strokeWidth="4" strokeDasharray="15 10" fill="none" className="animate-[dash_1s_linear_infinite]" filter="url(#glowRed)" />
                <path d="M 400 250 L 850 150" stroke="#a855f7" strokeWidth="2" strokeDasharray="10 5" fill="none" />
                <path d="M 400 250 L 850 450" stroke="#3b82f6" strokeWidth="2" strokeDasharray="10 5" fill="none" />
                <path d="M 400 250 L 500 50" stroke="#10b981" strokeWidth="2" strokeDasharray="10 5" fill="none" />
              </g>

              {/* --- VENDOR BLOCKS --- */}

              {/* Vendor A: Burgers (Normal) */}
              <g transform="translate(50, 70)">
                <rect x="0" y="0" width="200" height="90" rx="10" fill="#022c22" stroke="#10b981" strokeWidth="2" />
                <text x="20" y="25" fill="#fff" fontSize="14" fontWeight="bold">Burger Station 1</text>
                <rect x="20" y="45" width="160" height="8" rx="4" fill="#0f172a" />
                <rect x="20" y="45" width="130" height="8" rx="4" fill="#10b981" filter="url(#glowGreen)" />
                <text x="20" y="75" fill="#a7f3d0" fontSize="11">Stock: 82% | Queue: Normal</text>
              </g>

              {/* Vendor B: Hotdogs (CRITICAL) */}
              <g 
                transform="translate(50, 430)"
                onMouseEnter={() => { playHover(); setHoveredVendor('vendorB'); }} 
                onMouseLeave={() => setHoveredVendor(null)}
                className="cursor-crosshair group"
              >
                <rect x="0" y="0" width="200" height="100" rx="10" fill="#450a0a" stroke="#ef4444" strokeWidth="3" className="animate-pulse group-hover:fill-opacity-80 transition-all" filter="url(#glowRed)" />
                <text x="20" y="30" fill="#fff" fontSize="16" fontWeight="bold">Hotdog Express (South)</text>
                <rect x="20" y="55" width="160" height="8" rx="4" fill="#0f172a" />
                <rect x="20" y="55" width="30" height="8" rx="4" fill="#ef4444" />
                <text x="20" y="85" fill="#fca5a5" fontSize="12" fontWeight="bold" className="animate-pulse">STOCK CRITICAL: 12%</text>
                
                {/* Delivery cart moving to vendor B */}
                <circle cx="150" cy="-30" r="6" fill="#eab308" filter="url(#glowGreen)" className="animate-ping" />
                
                {/* Hover Tooltip perfectly aligned next to vendor */}
                {hoveredVendor === 'vendorB' && (
                  <foreignObject x="220" y="-30" width="200" height="160" className="pointer-events-none animate-fade-in">
                    <div className="w-full h-full bg-black/90 border border-red-500/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                      <div className="h-24 w-full bg-cover bg-center" style={{ backgroundImage: "url('/natural-hotdog-vendor.png')" }}></div>
                      <div className="p-2">
                        <div className="text-[10px] font-bold text-red-400">CONCESSION CAM 12</div>
                        <div className="text-xs text-white leading-tight">Critical Stock Depletion</div>
                        <div className="text-[9px] text-slate-400 mt-1">Queue: 4.5m | Demand: HIGH</div>
                      </div>
                    </div>
                  </foreignObject>
                )}
              </g>

              {/* Vendor C: Beverages / Bar (High Volume) */}
              <g 
                transform="translate(750, 100)"
                onMouseEnter={() => { playHover(); setHoveredVendor('beverage'); }} 
                onMouseLeave={() => setHoveredVendor(null)}
                className="cursor-crosshair group"
              >
                <rect x="0" y="0" width="220" height="100" rx="10" fill="#2e1065" stroke="#a855f7" strokeWidth="2" className="group-hover:fill-opacity-80 transition-all" />
                <text x="20" y="30" fill="#fff" fontSize="16" fontWeight="bold">Neon Bar & Beverages</text>
                <rect x="20" y="55" width="180" height="8" rx="4" fill="#0f172a" />
                <rect x="20" y="55" width="160" height="8" rx="4" fill="#a855f7" filter="url(#glowPurple)" />
                <text x="20" y="85" fill="#d8b4fe" fontSize="11">Stock: 90% | High Revenue</text>

                {/* Hover Tooltip perfectly aligned next to vendor */}
                {hoveredVendor === 'beverage' && (
                  <foreignObject x="-210" y="-30" width="200" height="160" className="pointer-events-none animate-fade-in">
                    <div className="w-full h-full bg-black/90 border border-purple-500/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                      <div className="h-24 w-full bg-cover bg-center" style={{ backgroundImage: "url('/natural-beverage.png')" }}></div>
                      <div className="p-2">
                        <div className="text-[10px] font-bold text-purple-400">BAR CAM 04</div>
                        <div className="text-xs text-white leading-tight">High Volume Sales</div>
                        <div className="text-[9px] text-slate-400 mt-1">Queue: 1.2m | Flow: STEADY</div>
                      </div>
                    </div>
                  </foreignObject>
                )}
              </g>

              {/* Vendor D: Pizza (Steady) */}
              <g transform="translate(750, 400)">
                <rect x="0" y="0" width="180" height="90" rx="10" fill="#172554" stroke="#3b82f6" strokeWidth="2" />
                <text x="20" y="25" fill="#fff" fontSize="14" fontWeight="bold">Woodfire Pizza</text>
                <rect x="20" y="45" width="140" height="8" rx="4" fill="#0f172a" />
                <rect x="20" y="45" width="90" height="8" rx="4" fill="#3b82f6" filter="url(#glowBlue)" />
                <text x="20" y="75" fill="#bfdbfe" fontSize="11">Stock: 65% | Prep time: 8m</text>
              </g>

              {/* Vendor E: Vegan/Healthy (Low traffic) */}
              <g transform="translate(400, 20)">
                <rect x="0" y="0" width="160" height="70" rx="8" fill="#022c22" stroke="#10b981" strokeWidth="1" />
                <text x="15" y="25" fill="#fff" fontSize="12" fontWeight="bold">Green Bowl Station</text>
                <rect x="15" y="40" width="130" height="6" rx="3" fill="#0f172a" />
                <rect x="15" y="40" width="110" height="6" rx="3" fill="#10b981" />
                <text x="15" y="60" fill="#a7f3d0" fontSize="10">Stock: 85% | Queue: 0m</text>
              </g>

              {/* VIP Dining Room */}
              <g transform="translate(350, 480)">
                <rect x="0" y="0" width="220" height="80" rx="10" fill="#422006" stroke="#ca8a04" strokeWidth="2" strokeDasharray="5 5" />
                <text x="110" y="30" fill="#fef08a" fontSize="14" fontWeight="bold" textAnchor="middle" letterSpacing="1">VIP CLUB DINING</text>
                <text x="110" y="55" fill="#fde047" fontSize="10" textAnchor="middle">Capacity: 92% | Service: Premium</text>
                <circle cx="20" cy="40" r="4" fill="#eab308" filter="url(#glowGreen)" className="animate-pulse" />
                <circle cx="200" cy="40" r="4" fill="#eab308" filter="url(#glowGreen)" className="animate-pulse" />
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
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-yellow-300 mb-3 flex items-center gap-2"><AlertCircle size={14} /> Supply Routing Alert</h3>
            
            <div className="bg-black/60 rounded-xl border border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.1)] flex flex-col flex-1 overflow-hidden">
              
              {/* Analyzer Box */}
              <div className="h-20 w-full relative shrink-0 border-b border-yellow-500/30 overflow-hidden bg-[#0A0015] flex flex-col justify-center items-center">
                <AlertCircle size={24} className="text-yellow-500/50 mb-1 animate-pulse" />
                <div className="text-[10px] font-bold text-yellow-400 tracking-widest">LOGISTICS ENGINE ACTIVE</div>
                <div className="absolute bottom-2 left-3 right-3 flex justify-between items-end">
                  <div className="text-xs font-bold text-white flex items-center gap-2 drop-shadow-md">
                    Vendor B (Hotdogs) Depletion
                  </div>
                  <span className="text-[9px] bg-yellow-500/80 text-black font-bold px-1.5 py-0.5 rounded backdrop-blur">PRIORITY 1</span>
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sales rate at Hotdog Express (South) is 1.8x expected. Stock will run out in 12 mins. AI has staged 350 units at Central Logistics for immediate autonomous cart dispatch.
                </p>
                
                <button 
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="w-full mt-4 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black text-xs font-bold py-2.5 rounded-lg transition-all shadow-[0_0_15px_rgba(234,179,8,0.4)] hover:shadow-[0_0_25px_rgba(234,179,8,0.6)] flex items-center justify-center gap-2"
                >
                  Authorize Auto-Restock <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl flex-1 border-green-500/20">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-green-300 mb-4 flex items-center gap-2"><TrendingUp size={14} /> Global Concourse Analysis</h3>
            
            <div className="space-y-3">
              {['Re-balance Staffing (Predictive)', 'Analyze VIP Dining Flow', 'Optimize Beverage Supply Chain'].map((action, i) => (
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
