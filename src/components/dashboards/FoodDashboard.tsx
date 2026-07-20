import React, { useState, useEffect } from 'react';
import { Utensils, TrendingUp, ChevronRight, AlertCircle, ShoppingCart, Maximize2, Coffee, Pizza, Wine, ShieldCheck } from 'lucide-react';
import { useUISounds } from '@/hooks/useUISounds';

export default function FoodDashboard() {
  const [time, setTime] = useState(0);
  const [hoveredVendor, setHoveredVendor] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
              <g transform="translate(480, 260)">
                <rect x="-170" y="-110" width="340" height="220" rx="20" fill="#1e1b4b" stroke="#3b82f6" strokeWidth="2" opacity="0.9" />
                <circle cx="0" cy="0" r="200" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5 5" opacity="0.3" className="animate-[spin_60s_linear_infinite]" />
                <text x="0" y="-60" fill="#fff" fontSize="26" fontWeight="bold" textAnchor="middle" className="drop-shadow-md">CENTRAL LOGISTICS</text>
                <text x="0" y="-30" fill="#93c5fd" fontSize="18" textAnchor="middle" fontWeight="bold">Staging & Supply Hub</text>
                
                {/* Supply staging areas in warehouse */}
                <g transform="translate(-135, 5)">
                  {/* Burgers / General (Green) */}
                  <rect x="0" y="0" width="60" height="55" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2" />
                  <text x="30" y="26" fill="#10b981" fontSize="18" fontWeight="bold" textAnchor="middle">BRG</text>
                  <text x="30" y="46" fill="#a7f3d0" fontSize="14" fontWeight="bold" textAnchor="middle">82%</text>

                  {/* Pizza (Blue) */}
                  <rect x="70" y="0" width="60" height="55" rx="8" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
                  <text x="100" y="26" fill="#3b82f6" fontSize="18" fontWeight="bold" textAnchor="middle">PIZ</text>
                  <text x="100" y="46" fill="#bfdbfe" fontSize="14" fontWeight="bold" textAnchor="middle">65%</text>

                  {/* Beverages (Purple) */}
                  <rect x="140" y="0" width="60" height="55" rx="8" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeWidth="2" />
                  <text x="170" y="26" fill="#a855f7" fontSize="18" fontWeight="bold" textAnchor="middle">BEV</text>
                  <text x="170" y="46" fill="#e9d5ff" fontSize="14" fontWeight="bold" textAnchor="middle">90%</text>

                  {/* Hotdogs (Red - CRITICAL STAGING) */}
                  <rect x="210" y="0" width="60" height="55" rx="8" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="2" className="animate-pulse" filter="url(#glowRed)" />
                  <text x="240" y="26" fill="#ef4444" fontSize="18" fontWeight="bold" textAnchor="middle">HOT</text>
                  <text x="240" y="46" fill="#fecaca" fontSize="11" fontWeight="bold" textAnchor="middle">STAGED</text>
                </g>
              </g>

              {/* Delivery Routes (from warehouse staging boxes to vendors) */}
              <g opacity="0.6">
                {/* To Burger Station 1 (Green) - from BRG box (375, 292.5) to (150, 120) */}
                <path d="M 375 292.5 L 150 120" stroke="#10b981" strokeWidth="2" strokeDasharray="10 5" fill="none" />
                
                {/* To Green Bowl Station (Green) - from BRG box (375, 292.5) to (500, 50) */}
                <path d="M 375 292.5 L 500 50" stroke="#10b981" strokeWidth="2" strokeDasharray="10 5" fill="none" />

                {/* To Woodfire Pizza (Blue) - from PIZ box (445, 292.5) to (850, 450) */}
                <path d="M 445 292.5 L 850 450" stroke="#3b82f6" strokeWidth="2" strokeDasharray="10 5" fill="none" />

                {/* To Neon Bar (Purple) - from BEV box (515, 292.5) to (850, 150) */}
                <path d="M 515 292.5 L 850 150" stroke="#a855f7" strokeWidth="2" strokeDasharray="10 5" fill="none" />

                {/* To Hotdog Express (Red) - from HOT box (585, 292.5) to (150, 480) */}
                <path id="hotdogRoute" d="M 585 292.5 L 150 480" stroke="#ef4444" strokeWidth="4" strokeDasharray="15 10" fill="none" className="animate-[dash_1s_linear_infinite]" filter="url(#glowRed)" />
                
                {/* Animated Autonomous Supply Cart */}
                <rect x="-10" y="-8" width="20" height="16" rx="4" fill="#eab308" stroke="#fff" strokeWidth="2" filter="url(#glowGreen)">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 585 292.5 L 150 480" />
                </rect>
              </g>

              {/* --- HIGH Z-INDEX VENDOR BLOCKS (WITH TOOLTIPS) --- */}

              {/* Vendor A: Burgers (Normal) */}
              <g 
                transform="translate(50, 70)"
                onMouseEnter={() => { playHover(); setHoveredVendor('vendorA'); }} 
                onMouseLeave={() => setHoveredVendor(null)}
                className="cursor-pointer group"
              >
                {hoveredVendor === 'vendorA' && <rect x="0" y="0" width="200" height="260" fill="transparent" />}
                <rect x="0" y="0" width="200" height="90" rx="10" fill="#022c22" stroke="#10b981" strokeWidth="2" className="group-hover:fill-opacity-80 transition-all" />
                <text x="20" y="25" fill="#fff" fontSize="14" fontWeight="bold">Burger Station 1</text>
                <rect x="20" y="45" width="160" height="8" rx="4" fill="#0f172a" />
                <rect x="20" y="45" width="130" height="8" rx="4" fill="#10b981" filter="url(#glowGreen)" />
                <text x="20" y="75" fill="#a7f3d0" fontSize="13" fontWeight="bold">Stock: 82% | Queue: Normal</text>

                {hoveredVendor === 'vendorA' && (
                  <>
                    <foreignObject x="0" y="100" width="200" height="150" className="animate-fade-in pointer-events-none">
                      <div className="w-full h-full bg-black/95 border border-green-500/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                        <div className="h-24 w-full bg-cover bg-center" style={{ backgroundImage: "url('/natural_burger_vendor_1784578177175.png')" }}></div>
                        <div className="p-2">
                          <div className="text-[10px] font-bold text-green-400">BURGER CAM 1</div>
                          <div className="text-xs text-white leading-tight underline">Click to expand</div>
                        </div>
                      </div>
                    </foreignObject>
                    <rect x="0" y="100" width="200" height="150" fill="transparent" className="cursor-pointer" onClick={(e) => { e.stopPropagation(); playClick(); setSelectedImage('/natural_burger_vendor_1784578177175.png'); }} />
                  </>
                )}
              </g>

              {/* Vendor D: Pizza (Steady) */}
              <g 
                transform="translate(750, 400)"
                onMouseEnter={() => { playHover(); setHoveredVendor('vendorD'); }} 
                onMouseLeave={() => setHoveredVendor(null)}
                className="cursor-pointer group"
              >
                {hoveredVendor === 'vendorD' && <rect x="-210" y="0" width="390" height="150" fill="transparent" />}
                <rect x="0" y="0" width="180" height="90" rx="10" fill="#172554" stroke="#3b82f6" strokeWidth="2" className="group-hover:fill-opacity-80 transition-all" />
                <text x="20" y="25" fill="#fff" fontSize="14" fontWeight="bold">Woodfire Pizza</text>
                <rect x="20" y="45" width="140" height="8" rx="4" fill="#0f172a" />
                <rect x="20" y="45" width="90" height="8" rx="4" fill="#3b82f6" filter="url(#glowBlue)" />
                <text x="20" y="75" fill="#bfdbfe" fontSize="13" fontWeight="bold">Stock: 65% | Prep time: 8m</text>

                {hoveredVendor === 'vendorD' && (
                  <>
                    <foreignObject x="-210" y="0" width="200" height="150" className="animate-fade-in pointer-events-none">
                      <div className="w-full h-full bg-black/95 border border-blue-500/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                        <div className="h-24 w-full bg-cover bg-center" style={{ backgroundImage: "url('/natural_pizza_vendor_1784578196984.png')" }}></div>
                        <div className="p-2">
                          <div className="text-[10px] font-bold text-blue-400">PIZZA CAM 3</div>
                          <div className="text-xs text-white leading-tight underline">Click to expand</div>
                        </div>
                      </div>
                    </foreignObject>
                    <rect x="-210" y="0" width="200" height="150" fill="transparent" className="cursor-pointer" onClick={(e) => { e.stopPropagation(); playClick(); setSelectedImage('/natural_pizza_vendor_1784578196984.png'); }} />
                  </>
                )}
              </g>

              {/* Vendor E: Vegan/Healthy (Low traffic) */}
              <g 
                transform="translate(400, 20)"
                onMouseEnter={() => { playHover(); setHoveredVendor('vendorE'); }} 
                onMouseLeave={() => setHoveredVendor(null)}
                className="cursor-pointer group"
              >
                {hoveredVendor === 'vendorE' && <rect x="0" y="0" width="160" height="230" fill="transparent" />}
                <rect x="0" y="0" width="160" height="70" rx="8" fill="#022c22" stroke="#10b981" strokeWidth="1" className="group-hover:fill-opacity-80 transition-all" />
                <text x="15" y="25" fill="#fff" fontSize="12" fontWeight="bold">Green Bowl Station</text>
                <rect x="15" y="40" width="130" height="6" rx="3" fill="#0f172a" />
                <rect x="15" y="40" width="110" height="6" rx="3" fill="#10b981" />
                <text x="15" y="60" fill="#a7f3d0" fontSize="12" fontWeight="bold">Stock: 85% | Queue: 0m</text>

                {hoveredVendor === 'vendorE' && (
                  <>
                    <foreignObject x="0" y="80" width="160" height="140" className="animate-fade-in pointer-events-none">
                      <div className="w-full h-full bg-black/95 border border-green-500/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                        <div className="h-20 w-full bg-cover bg-center" style={{ backgroundImage: "url('/natural_vegan_vendor_1784578215256.png')" }}></div>
                        <div className="p-2">
                          <div className="text-[10px] font-bold text-green-400">VEGAN CAM 2</div>
                          <div className="text-[10px] text-white leading-tight underline">Click to expand</div>
                        </div>
                      </div>
                    </foreignObject>
                    <rect x="0" y="80" width="160" height="140" fill="transparent" className="cursor-pointer" onClick={(e) => { e.stopPropagation(); playClick(); setSelectedImage('/natural_vegan_vendor_1784578215256.png'); }} />
                  </>
                )}
              </g>

              {/* VIP Dining Room */}
              <g 
                transform="translate(350, 480)"
                onMouseEnter={() => { playHover(); setHoveredVendor('vip'); }} 
                onMouseLeave={() => setHoveredVendor(null)}
                className="cursor-pointer group"
              >
                {hoveredVendor === 'vip' && <rect x="0" y="-160" width="220" height="240" fill="transparent" />}
                <rect x="0" y="0" width="220" height="80" rx="10" fill="#422006" stroke="#ca8a04" strokeWidth="2" strokeDasharray="5 5" className="group-hover:fill-opacity-80 transition-all" />
                <text x="110" y="28" fill="#fef08a" fontSize="16" fontWeight="bold" textAnchor="middle" letterSpacing="1">VIP CLUB DINING</text>
                <text x="110" y="55" fill="#fde047" fontSize="13" fontWeight="bold" textAnchor="middle">Capacity: 92% | Service: Premium</text>
                <circle cx="20" cy="40" r="4" fill="#eab308" filter="url(#glowGreen)" className="animate-pulse" />
                <circle cx="200" cy="40" r="4" fill="#eab308" filter="url(#glowGreen)" className="animate-pulse" />

                {hoveredVendor === 'vip' && (
                  <>
                    <foreignObject x="0" y="-160" width="220" height="150" className="animate-fade-in pointer-events-none">
                      <div className="w-full h-full bg-black/95 border border-yellow-500/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(234,179,8,0.5)]">
                        <div className="h-24 w-full bg-cover bg-center" style={{ backgroundImage: "url('/natural_vip_dining_1784578236565.png')" }}></div>
                        <div className="p-2">
                          <div className="text-[10px] font-bold text-yellow-400">VIP CAM 1</div>
                          <div className="text-xs text-white leading-tight underline">Click to expand</div>
                        </div>
                      </div>
                    </foreignObject>
                    <rect x="0" y="-160" width="220" height="150" fill="transparent" className="cursor-pointer" onClick={(e) => { e.stopPropagation(); playClick(); setSelectedImage('/natural_vip_dining_1784578236565.png'); }} />
                  </>
                )}
              </g>

              {/* --- HIGH Z-INDEX VENDOR BLOCKS (WITH TOOLTIPS) --- */}

              {/* Vendor B: Hotdogs (CRITICAL) - Placed at end for high z-index */}
              <g 
                transform="translate(50, 430)"
                onMouseEnter={() => { playHover(); setHoveredVendor('vendorB'); }} 
                onMouseLeave={() => setHoveredVendor(null)}
                className="cursor-pointer group"
              >
                {/* Invisible bridge to prevent mouseleave when moving to tooltip */}
                {hoveredVendor === 'vendorB' && <rect x="0" y="0" width="200" height="280" fill="transparent" />}
                
                <rect x="0" y="0" width="200" height="100" rx="10" fill="#450a0a" stroke="#ef4444" strokeWidth="3" className="animate-pulse group-hover:fill-opacity-80 transition-all" filter="url(#glowRed)" />
                <text x="20" y="30" fill="#fff" fontSize="16" fontWeight="bold">Hotdog Express (South)</text>
                <rect x="20" y="55" width="160" height="8" rx="4" fill="#0f172a" />
                <rect x="20" y="55" width="30" height="8" rx="4" fill="#ef4444" />
                <text x="20" y="85" fill="#fca5a5" fontSize="14" fontWeight="bold" className="animate-pulse">STOCK CRITICAL: 12%</text>

                {/* Tooltip for Vendor B: Opens BELOW the vendor to avoid VIP dining */}
                {hoveredVendor === 'vendorB' && (
                  <>
                    <foreignObject x="0" y="110" width="200" height="160" className="animate-fade-in pointer-events-none">
                      <div className="w-full h-full bg-black/95 border border-red-500/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                        <div className="h-24 w-full bg-cover bg-center" style={{ backgroundImage: "url('/natural_hotdog_vendor_1784576514844.png')" }}></div>
                        <div className="p-2">
                          <div className="text-[10px] font-bold text-red-400">CONCESSION CAM 12</div>
                          <div className="text-xs text-white leading-tight underline">Click to expand</div>
                        </div>
                      </div>
                    </foreignObject>
                    {/* Invisible clickable rect exactly over the tooltip */}
                    <rect x="0" y="110" width="200" height="160" fill="transparent" className="cursor-pointer" onClick={(e) => { e.stopPropagation(); playClick(); setSelectedImage('/natural_hotdog_vendor_1784576514844.png'); }} />
                  </>
                )}
              </g>

              {/* Vendor C: Beverages / Bar (High Volume) - Placed at end for high z-index */}
              <g 
                transform="translate(750, 100)"
                onMouseEnter={() => { playHover(); setHoveredVendor('beverage'); }} 
                onMouseLeave={() => setHoveredVendor(null)}
                className="cursor-pointer group"
              >
                {/* Invisible bridge to prevent mouseleave when moving to tooltip */}
                {hoveredVendor === 'beverage' && <rect x="-210" y="0" width="430" height="160" fill="transparent" />}

                <rect x="0" y="0" width="220" height="100" rx="10" fill="#2e1065" stroke="#a855f7" strokeWidth="2" className="group-hover:fill-opacity-80 transition-all" />
                <text x="20" y="30" fill="#fff" fontSize="16" fontWeight="bold">Neon Bar & Beverages</text>
                <rect x="20" y="55" width="180" height="8" rx="4" fill="#0f172a" />
                <rect x="20" y="55" width="160" height="8" rx="4" fill="#a855f7" filter="url(#glowPurple)" />
                <text x="20" y="85" fill="#d8b4fe" fontSize="13" fontWeight="bold">Stock: 90% | High Revenue</text>

                {/* Tooltip for Beverage: Opens to the LEFT of the vendor */}
                {hoveredVendor === 'beverage' && (
                  <>
                    <foreignObject x="-210" y="0" width="200" height="160" className="animate-fade-in pointer-events-none">
                      <div className="w-full h-full bg-black/95 border border-purple-500/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                        <div className="h-24 w-full bg-cover bg-center" style={{ backgroundImage: "url('/natural_beverage_1784576534351.png')" }}></div>
                        <div className="p-2">
                          <div className="text-[10px] font-bold text-purple-400">BAR CAM 04</div>
                          <div className="text-xs text-white leading-tight underline">Click to expand</div>
                        </div>
                      </div>
                    </foreignObject>
                    {/* Invisible clickable rect exactly over the tooltip */}
                    <rect x="-210" y="0" width="200" height="160" fill="transparent" className="cursor-pointer" onClick={(e) => { e.stopPropagation(); playClick(); setSelectedImage('/natural_beverage_1784576534351.png'); }} />
                  </>
                )}
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

      {/* Full-screen Image Modal */}
      {selectedImage && (
        <div 
          className="absolute inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-8 animate-fade-in cursor-pointer"
          onClick={() => { playClick(); setSelectedImage(null); }}
        >
          <div className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-slate-700 pointer-events-auto" onClick={e => e.stopPropagation()}>
            <img src={selectedImage} alt="Live Camera Feed" className="w-full h-full object-cover" />
            <button 
              className="absolute top-4 right-4 bg-black/60 text-white rounded-full p-2 hover:bg-red-500/80 transition-colors border border-white/20"
              onClick={() => { playClick(); setSelectedImage(null); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur border border-purple-500/50 rounded-lg px-4 py-2">
              <div className="text-purple-400 font-bold text-xs">LIVE FEED</div>
              <div className="text-white text-sm">Concourse Security Camera</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
