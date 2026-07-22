import React, { useState, useEffect } from 'react';
import { Car, Zap, Accessibility, ArrowRight, Brain, AlertTriangle, TrendingUp, Navigation, Maximize2 } from 'lucide-react';
import { useUISounds } from '@/hooks/useUISounds';

export default function ParkingDashboard() {
  const [time, setTime] = useState(0);
  const [hoveredLot, setHoveredLot] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { playHover, playClick } = useUISounds();

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-auto xl:h-full w-full flex flex-col bg-[#0A0015] text-white overflow-visible xl:overflow-hidden p-4 xl:p-6 gap-6 relative">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay z-0 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Header */}
      <div className="flex justify-between items-end shrink-0 z-10">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-white flex items-center gap-3 gaming-text-shadow">
            Intelligent Parking Operations
            <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-blue-500/20 text-blue-400 rounded-sm border border-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-pulse">Live Data</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1 font-medium">AI-driven capacity prediction, EV monitoring, and dynamic flow routing</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="glass-panel border-white/10 hover:border-white/30 transition-all rounded-xl px-5 py-3 text-right cursor-default shadow-[0_4px_20px_rgba(0,0,0,0.5)]" onMouseEnter={playHover}>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Total Occupancy</div>
            <div className="text-2xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">84% <span className="text-xs text-yellow-400 font-bold uppercase tracking-widest ml-1 animate-pulse">Filling</span></div>
          </div>
          <div className="glass-panel border-white/10 hover:border-white/30 transition-all rounded-xl px-5 py-3 text-right cursor-default shadow-[0_4px_20px_rgba(0,0,0,0.5)]" onMouseEnter={playHover}>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Inflow Rate</div>
            <div className="text-2xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">142 <span className="text-xs text-slate-400 font-medium ml-1">cars/min</span></div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col xl:flex-row gap-6 min-h-0 z-10">
        
        {/* Main SVG Visualization */}
        <div className="flex-1 glass-panel rounded-3xl p-0 flex flex-col relative overflow-hidden group border border-slate-700/50 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <div className="bg-black/60 backdrop-blur border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
              <span className="text-xs font-bold text-slate-200 uppercase tracking-widest">Live Lot Visualization</span>
            </div>
          </div>
          
          <div className="absolute top-4 right-4 z-10">
            <button className="bg-black/60 backdrop-blur border border-white/10 hover:border-blue-500/50 rounded-lg p-2 text-slate-400 hover:text-white transition-colors" onMouseEnter={playHover} onClick={playClick}>
              <Maximize2 size={16} />
            </button>
          </div>
          
          <div className="flex-1 relative bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full relative z-10">
              <defs>
                <filter id="glowBlue"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                <filter id="glowYellow"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                <filter id="glowRed"><feGaussianBlur stdDeviation="8" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                <filter id="glowGreen"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
                </marker>
                <marker id="arrow-warn" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#eab308" />
                </marker>

                <linearGradient id="flowNormal" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="flowReroute" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#eab308" stopOpacity="0" />
                  <stop offset="50%" stopColor="#fde047" stopOpacity="1" />
                  <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Stadium footprint placeholder */}
              <circle cx="500" cy="300" r="90" fill="#0f172a" stroke="#334155" strokeWidth="3" filter="url(#glowBlue)" className="animate-[pulse_4s_ease-in-out_infinite]" />
              <circle cx="500" cy="300" r="75" fill="#1e293b" />
              <text x="500" y="305" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold" className="uppercase tracking-[0.3em]">Stadium</text>

              {/* --- ZONES --- */}
              
              {/* North Zone - Near Full */}
              <g 
                transform="translate(300, 40)"
                onMouseEnter={() => { playHover(); setHoveredLot('north'); }}
                onMouseLeave={() => setHoveredLot(null)}
                className="cursor-pointer transition-all group"
                style={{ opacity: hoveredLot && hoveredLot !== 'north' ? 0.4 : 1 }}
              >
                {hoveredLot === 'north' && <rect x="0" y="0" width="400" height="290" fill="transparent" />}
                <rect width="400" height="130" rx="12" fill="#422006" fillOpacity="0.8" stroke="#eab308" strokeWidth={hoveredLot === 'north' ? 3 : 1} filter={hoveredLot === 'north' ? "url(#glowYellow)" : ""} className="group-hover:fill-opacity-100 transition-all" />
                <text x="25" y="35" fill="#fef08a" fontSize="16" fontWeight="bold" letterSpacing="1">NORTH LOT (VIP)</text>
                <text x="25" y="55" fill="#eab308" fontSize="12" fontWeight="bold">CAPACITY: 92%</text>
                
                {/* Grid slots filling animation */}
                {[...Array(10)].map((_, i) => (
                  <rect key={`n1-${i}`} x={25 + i*35} y={70} width="25" height="40" rx="4" fill={i < 9 ? "#eab308" : "#334155"} filter={i < 9 ? "url(#glowYellow)" : ""} className={i === 8 ? "animate-pulse" : ""} />
                ))}

                {hoveredLot === 'north' && (
                  <>
                    <foreignObject x="100" y="140" width="200" height="150" className="animate-fade-in pointer-events-none">
                      <div className="w-full h-full bg-black/95 border border-yellow-500/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(234,179,8,0.5)]">
                        <div className="h-24 w-full bg-cover bg-center" style={{ backgroundImage: "url('/parking_north_vip.png')" }}></div>
                        <div className="p-2">
                          <div className="text-[10px] font-bold text-yellow-400">LOT N-CAM 01</div>
                          <div className="text-xs text-white leading-tight underline">Click to expand</div>
                        </div>
                      </div>
                    </foreignObject>
                    <rect x="100" y="140" width="200" height="150" fill="transparent" className="cursor-pointer" onClick={(e) => { e.stopPropagation(); playClick(); setSelectedImage('/parking_north_vip.png'); }} />
                  </>
                )}
              </g>

              {/* South Zone - Filling Fast */}
              <g 
                transform="translate(300, 430)"
                onMouseEnter={() => { playHover(); setHoveredLot('south'); }}
                onMouseLeave={() => setHoveredLot(null)}
                className="cursor-pointer transition-all group"
                style={{ opacity: hoveredLot && hoveredLot !== 'south' ? 0.4 : 1 }}
              >
                {hoveredLot === 'south' && <rect x="0" y="-160" width="400" height="290" fill="transparent" />}
                <rect width="400" height="130" rx="12" fill="#172554" fillOpacity="0.8" stroke="#3b82f6" strokeWidth={hoveredLot === 'south' ? 3 : 1} filter={hoveredLot === 'south' ? "url(#glowBlue)" : ""} className="group-hover:fill-opacity-100 transition-all" />
                <text x="25" y="35" fill="#bfdbfe" fontSize="16" fontWeight="bold" letterSpacing="1">SOUTH LOT (GA)</text>
                <text x="25" y="55" fill="#60a5fa" fontSize="12" fontWeight="bold">CAPACITY: 65%</text>
                {[...Array(10)].map((_, i) => (
                  <rect key={`s1-${i}`} x={25 + i*35} y={70} width="25" height="40" rx="4" fill={i < 6 ? "#3b82f6" : "#334155"} filter={i < 6 ? "url(#glowBlue)" : ""} className={i === 5 ? "animate-pulse" : ""} />
                ))}

                {hoveredLot === 'south' && (
                  <>
                    <foreignObject x="100" y="-160" width="200" height="150" className="animate-fade-in pointer-events-none">
                      <div className="w-full h-full bg-black/95 border border-blue-500/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                        <div className="h-24 w-full bg-cover bg-center" style={{ backgroundImage: "url('/parking_south_65.png')" }}></div>
                        <div className="p-2">
                          <div className="text-[10px] font-bold text-blue-400">LOT S-CAM 04</div>
                          <div className="text-xs text-white leading-tight underline">Click to expand</div>
                        </div>
                      </div>
                    </foreignObject>
                    <rect x="100" y="-160" width="200" height="150" fill="transparent" className="cursor-pointer" onClick={(e) => { e.stopPropagation(); playClick(); setSelectedImage('/parking_south_65.png'); }} />
                  </>
                )}
              </g>

              {/* West Zone - EV & Accessible */}
              <g 
                transform="translate(40, 150)"
                onMouseEnter={() => { playHover(); setHoveredLot('west'); }}
                onMouseLeave={() => setHoveredLot(null)}
                className="cursor-pointer transition-all group"
                style={{ opacity: hoveredLot && hoveredLot !== 'west' ? 0.4 : 1 }}
              >
                {hoveredLot === 'west' && <rect x="0" y="0" width="400" height="300" fill="transparent" />}
                <rect width="180" height="300" rx="12" fill="#022c22" fillOpacity="0.8" stroke="#10b981" strokeWidth={hoveredLot === 'west' ? 3 : 1} filter={hoveredLot === 'west' ? "url(#glowGreen)" : ""} className="group-hover:fill-opacity-100 transition-all" />
                <text x="90" y="35" fill="#a7f3d0" fontSize="16" fontWeight="bold" textAnchor="middle" letterSpacing="1">WEST LOT</text>
                
                {/* EV Chargers */}
                <rect x="25" y="60" width="60" height="120" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2" filter="url(#glowGreen)" />
                <text x="55" y="130" textAnchor="middle" fill="#10b981" fontSize="32" className="animate-pulse">⚡</text>
                
                {/* Accessible */}
                <rect x="95" y="60" width="60" height="120" rx="8" fill="#6366f1" fillOpacity="0.2" stroke="#6366f1" strokeWidth="2" />
                <text x="125" y="130" textAnchor="middle" fill="#6366f1" fontSize="32">♿</text>
                
                <text x="90" y="220" fill="#10b981" fontSize="12" textAnchor="middle" fontWeight="bold">EV: 12/20 Avail</text>
                <text x="90" y="240" fill="#818cf8" fontSize="12" textAnchor="middle" fontWeight="bold">ACC: 5/15 Avail</text>

                {hoveredLot === 'west' && (
                  <>
                    <foreignObject x="190" y="75" width="200" height="150" className="animate-fade-in pointer-events-none">
                      <div className="w-full h-full bg-black/95 border border-green-500/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                        <div className="h-24 w-full bg-cover bg-center" style={{ backgroundImage: "url('/natural_parking_ev.png')" }}></div>
                        <div className="p-2">
                          <div className="text-[10px] font-bold text-green-400">LOT W-CAM 12</div>
                          <div className="text-xs text-white leading-tight underline">Click to expand</div>
                        </div>
                      </div>
                    </foreignObject>
                    <rect x="190" y="75" width="200" height="150" fill="transparent" className="cursor-pointer" onClick={(e) => { e.stopPropagation(); playClick(); setSelectedImage('/natural_parking_ev.png'); }} />
                  </>
                )}
              </g>

              {/* East Zone - Congested */}
              <g 
                transform="translate(780, 150)"
                onMouseEnter={() => { playHover(); setHoveredLot('east'); }}
                onMouseLeave={() => setHoveredLot(null)}
                className="cursor-pointer transition-all group"
                style={{ opacity: hoveredLot && hoveredLot !== 'east' ? 0.4 : 1 }}
              >
                {hoveredLot === 'east' && <rect x="-210" y="0" width="390" height="300" fill="transparent" />}
                <rect width="180" height="300" rx="12" fill="#450a0a" fillOpacity="0.9" stroke="#ef4444" strokeWidth={hoveredLot === 'east' ? 4 : 2} className="animate-pulse group-hover:fill-opacity-100 transition-all" filter="url(#glowRed)" />
                <text x="90" y="35" fill="#fca5a5" fontSize="16" fontWeight="bold" textAnchor="middle" letterSpacing="1">EAST LOT</text>
                
                <rect x="90" y="45" width="100" height="16" rx="4" fill="#ef4444" transform="translate(-50,0)" />
                <text x="90" y="57" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">100% FULL - CLOSED</text>
                
                <rect x="25" y="80" width="130" height="190" rx="6" fill="#ef4444" fillOpacity="0.4" />
                <text x="90" y="180" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold" className="animate-pulse" filter="url(#glowRed)">CONGESTED</text>

                {hoveredLot === 'east' && (
                  <>
                    <foreignObject x="-210" y="75" width="200" height="150" className="animate-fade-in pointer-events-none">
                      <div className="w-full h-full bg-black/95 border border-red-500/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                        <div className="h-24 w-full bg-cover bg-center" style={{ backgroundImage: "url('/parking_east_100.png')" }}></div>
                        <div className="p-2">
                          <div className="text-[10px] font-bold text-red-400">LOT E-CAM 08</div>
                          <div className="text-xs text-white leading-tight underline">Click to expand</div>
                        </div>
                      </div>
                    </foreignObject>
                    <rect x="-210" y="75" width="200" height="150" fill="transparent" className="cursor-pointer" onClick={(e) => { e.stopPropagation(); playClick(); setSelectedImage('/parking_east_100.png'); }} />
                  </>
                )}
              </g>

              {/* Flow Paths & Vehicles */}
              {/* Main Entry to South */}
              <path d="M 500 650 L 500 570" fill="none" stroke="url(#flowNormal)" strokeWidth="8" strokeDasharray="15 15" className="animate-[dash_1s_linear_infinite]" markerEnd="url(#arrow)" />
              
              {/* AI Reroute Flow from East Entry to North (Redirected) */}
              <path d="M 1050 300 L 970 300 L 970 90 L 710 90" fill="none" stroke="url(#flowReroute)" strokeWidth="6" strokeDasharray="12 12" className="animate-[dash_1s_linear_infinite]" markerEnd="url(#arrow-warn)" />
              
              <g transform="translate(970, 300)">
                <circle r="12" fill="#eab308" filter="url(#glowYellow)" className="animate-ping" opacity="0.5" />
                <circle r="6" fill="#fef08a" />
                <text x="15" y="-15" fill="#fde047" fontSize="10" fontWeight="bold">AI REROUTE</text>
              </g>
              
              <style jsx>{`
                @keyframes dash {
                  to { stroke-dashoffset: -30; }
                }
              `}</style>
            </svg>
          </div>
        </div>

        {/* AI Insights & KPIs */}
        <div className="w-[350px] shrink-0 flex flex-col gap-4">
          
          <div className="glass-panel border-blue-500/30 rounded-2xl p-5 hover:border-blue-400/50 transition-all shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]" onMouseEnter={playHover} onClick={playClick}>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-4 flex items-center gap-2"><Brain size={14} className="animate-pulse" /> AI Prediction Engine</h3>
            
            <div className="bg-black/60 rounded-xl p-4 border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.1)] mb-4 relative overflow-hidden group cursor-pointer hover:bg-red-950/30 transition-colors">
              <div className="absolute left-0 top-0 w-1 h-full bg-red-500 group-hover:shadow-[0_0_10px_#ef4444]"></div>
              <div className="flex items-start gap-3">
                <AlertTriangle size={18} className="text-red-400 shrink-0 mt-0.5 animate-pulse" />
                <div>
                  <div className="text-sm font-bold text-white mb-1 drop-shadow-md">East Lot Reached Capacity</div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">AI has autonomously redirected incoming digital signage traffic from East Approach to North Lot.</p>
                  <div className="flex gap-2">
                    <span className="text-[9px] px-2 py-1 bg-blue-500/20 text-blue-300 rounded border border-blue-500/30 uppercase tracking-wider font-bold shadow-[0_0_5px_rgba(59,130,246,0.5)]">Signage Updated</span>
                    <span className="text-[9px] px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded border border-yellow-500/30 uppercase tracking-wider font-bold shadow-[0_0_5px_rgba(234,179,8,0.5)]">Vols Reassigned</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/60 rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={14} className="text-green-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Capacity Forecast (30m)</span>
              </div>
              <div className="space-y-4">
                {[
                  { lot: 'North', pred: '100%', color: 'bg-red-500', glow: 'shadow-[0_0_10px_#ef4444]' },
                  { lot: 'South', pred: '85%', color: 'bg-yellow-500', glow: 'shadow-[0_0_10px_#eab308]' },
                  { lot: 'West', pred: '60%', color: 'bg-green-500', glow: 'shadow-[0_0_10px_#10b981]' },
                ].map(l => (
                  <div key={l.lot} className="group">
                    <div className="flex justify-between text-[10px] uppercase font-bold mb-1.5">
                      <span className="text-slate-400 group-hover:text-white transition-colors">{l.lot} Lot</span>
                      <span className="text-white font-mono">{l.pred}</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full ${l.color} ${l.glow} transition-all duration-1000`} style={{ width: l.pred }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-1">
            <div className="glass-panel border-white/10 hover:border-green-500/50 p-4 rounded-2xl flex flex-col justify-center shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all cursor-pointer group" onMouseEnter={playHover} onClick={playClick}>
              <Zap size={20} className="text-green-400 mb-2 group-hover:animate-bounce" />
              <div className="text-3xl font-black text-white drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">12</div>
              <div className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mt-1">EV Free</div>
            </div>
            <div className="glass-panel border-white/10 hover:border-indigo-500/50 p-4 rounded-2xl flex flex-col justify-center shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all cursor-pointer group" onMouseEnter={playHover} onClick={playClick}>
              <Accessibility size={20} className="text-indigo-400 mb-2 group-hover:animate-pulse" />
              <div className="text-3xl font-black text-white drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]">5</div>
              <div className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mt-1">Acc. Free</div>
            </div>
            <div className="glass-panel border-white/10 hover:border-white/30 p-4 rounded-2xl flex flex-col justify-center col-span-2 relative overflow-hidden group cursor-pointer transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]" onMouseEnter={playHover} onClick={playClick}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-white/10 transition-colors"></div>
              <div className="flex items-center gap-2 mb-2 z-10">
                <Navigation size={16} className="text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">Avg Exit Time</span>
              </div>
              <div className="text-4xl font-black text-white z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                14.2 <span className="text-sm text-slate-400 font-medium tracking-normal">mins</span>
              </div>
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
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur border border-blue-500/50 rounded-lg px-4 py-2">
              <div className="text-blue-400 font-bold text-xs">LIVE FEED</div>
              <div className="text-white text-sm">Parking Lot Camera</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
