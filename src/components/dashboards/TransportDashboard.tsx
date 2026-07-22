import React, { useState, useEffect } from 'react';
import { Train, Bus, Activity, Brain, Clock, MapPin, Map, Zap, CheckCircle2, Maximize2 } from 'lucide-react';
import { useUISounds } from '@/hooks/useUISounds';

export default function TransportDashboard() {
  const [time, setTime] = useState(0);
  const [hoveredHub, setHoveredHub] = useState<string | null>(null);
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
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Header */}
      <div className="flex justify-between items-end shrink-0 z-10">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-white flex items-center gap-3 gaming-text-shadow">
            Transit & Transport Network
            <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-blue-500/20 text-blue-400 rounded-sm border border-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-pulse">Live Sync</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1 font-medium">Live tracking of Metro, Shuttle, and Pedestrian routes with AI capacity balancing</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="glass-panel border-white/10 hover:border-white/30 transition-all rounded-xl px-5 py-3 text-right cursor-default shadow-[0_4px_20px_rgba(0,0,0,0.5)]" onMouseEnter={playHover}>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Incoming Passengers</div>
            <div className="text-2xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">4.2k <span className="text-xs text-orange-400 font-bold uppercase tracking-widest ml-1 animate-pulse">Next 15m</span></div>
          </div>
          <div className="glass-panel border-white/10 hover:border-white/30 transition-all rounded-xl px-5 py-3 text-right cursor-default shadow-[0_4px_20px_rgba(0,0,0,0.5)]" onMouseEnter={playHover}>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Transit Status</div>
            <div className="text-2xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Nominal <span className="text-xs text-green-400 font-medium ml-1">98% On-Time</span></div>
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
              <span className="text-xs font-bold text-slate-200 uppercase tracking-widest">Mass Transit & Route Map</span>
            </div>
          </div>
          
          <div className="absolute top-4 right-4 z-10">
            <button className="bg-black/60 backdrop-blur border border-white/10 hover:border-blue-500/50 rounded-lg p-2 text-slate-400 hover:text-white transition-colors" onMouseEnter={playHover} onClick={playClick}>
              <Maximize2 size={16} />
            </button>
          </div>
          
          <div className="absolute bottom-4 left-4 z-10 flex gap-4">
            <span className="flex items-center gap-2 text-xs text-slate-400 font-bold uppercase tracking-widest bg-black/50 px-2 py-1 rounded border border-white/10"><span className="w-3 h-1 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6]"></span> Metro</span>
            <span className="flex items-center gap-2 text-xs text-slate-400 font-bold uppercase tracking-widest bg-black/50 px-2 py-1 rounded border border-white/10"><span className="w-3 h-1 rounded-full bg-purple-500 shadow-[0_0_5px_#a855f7]"></span> Shuttle</span>
            <span className="flex items-center gap-2 text-xs text-slate-400 font-bold uppercase tracking-widest bg-black/50 px-2 py-1 rounded border border-white/10"><span className="w-3 h-1 rounded-full bg-slate-500" style={{borderStyle:'dashed'}}></span> Pedestrian</span>
          </div>
          
          <div className="flex-1 relative bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full relative z-10">
              <defs>
                <filter id="glowBlue"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                <filter id="glowPurple"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                <filter id="glowGreen"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
              </defs>

              {/* Pedestrian Paths (Stadium to Hubs) */}
              <path d="M 500 300 L 250 150" fill="none" stroke="#334155" strokeWidth="15" strokeOpacity="0.4" />
              <path d="M 500 300 L 800 450" fill="none" stroke="#334155" strokeWidth="15" strokeOpacity="0.4" />
              <path d="M 500 300 L 250 150" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_4s_linear_infinite]" />
              <path d="M 500 300 L 800 450" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_4s_linear_infinite]" />

              {/* Metro Line (Blue) */}
              <path id="metroPath" d="M -100 150 L 250 150 L 400 -100" fill="none" stroke="#3b82f6" strokeWidth="8" opacity="0.6" filter="url(#glowBlue)" />
              
              {/* Metro Train */}
              <g transform="translate(150, 150)">
                <rect x="-30" y="-10" width="60" height="20" rx="4" fill="#60a5fa" filter="url(#glowBlue)" />
                <circle cx="-15" cy="0" r="3" fill="#1e3a8a" className="animate-pulse" />
                <circle cx="15" cy="0" r="3" fill="#1e3a8a" className="animate-pulse" />
                <text x="0" y="-20" fill="#60a5fa" fontSize="12" fontWeight="bold" textAnchor="middle">M-L2 (ETA: 4m)</text>
              </g>

              {/* Shuttle Line (Purple) */}
              <path d="M 1100 450 L 800 450 L 800 650" fill="none" stroke="#a855f7" strokeWidth="6" opacity="0.5" filter="url(#glowPurple)" />
              
              {/* Shuttle Buses */}
              <g transform="translate(900, 450)">
                <rect x="-15" y="-8" width="30" height="16" rx="2" fill="#c084fc" filter="url(#glowPurple)" />
                <text x="0" y="-15" fill="#c084fc" fontSize="10" fontWeight="bold" textAnchor="middle">S-42</text>
              </g>
              <g transform="translate(800, 550) rotate(90)">
                <rect x="-15" y="-8" width="30" height="16" rx="2" fill="#c084fc" filter="url(#glowPurple)" />
                <text x="0" y="-15" fill="#c084fc" fontSize="10" fontWeight="bold" textAnchor="middle">S-18</text>
              </g>

              {/* Stadium Node */}
              <circle cx="500" cy="300" r="60" fill="#0f172a" stroke="#334155" strokeWidth="4" />
              <text x="500" y="305" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="bold">STADIUM</text>

              {/* Transport Hub Nodes */}
              <g 
                transform="translate(250, 150)"
                onMouseEnter={() => { playHover(); setHoveredHub('metro'); }}
                onMouseLeave={() => setHoveredHub(null)}
                className="cursor-pointer group"
              >
                {hoveredHub === 'metro' && <rect x="-100" y="-70" width="400" height="300" fill="transparent" />}
                <circle cx="0" cy="0" r="40" fill="#1e3a8a" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" className="animate-pulse group-hover:fill-opacity-50 transition-all" filter="url(#glowBlue)" />
                <text x="0" y="-55" textAnchor="middle" fill="#60a5fa" fontSize="14" fontWeight="bold">NORTH METRO HUB</text>
                <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="20">🚇</text>
                <rect x="-40" y="25" width="80" height="15" rx="2" fill="#1e293b" />
                <text x="0" y="36" textAnchor="middle" fill="#94a3b8" fontSize="10">Density: 88%</text>

                {hoveredHub === 'metro' && (
                  <>
                    <foreignObject x="80" y="-30" width="200" height="150" className="animate-fade-in pointer-events-none">
                      <div className="w-full h-full bg-black/95 border border-blue-500/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                        <div className="h-24 w-full bg-cover bg-center" style={{ backgroundImage: "url('/natural_crowd_north_1784578297967.png')" }}></div>
                        <div className="p-2">
                          <div className="text-[10px] font-bold text-blue-400">METRO CAM 1</div>
                          <div className="text-xs text-white leading-tight underline">Click to expand</div>
                        </div>
                      </div>
                    </foreignObject>
                    <rect x="80" y="-30" width="200" height="150" fill="transparent" className="cursor-pointer" onClick={(e) => { e.stopPropagation(); playClick(); setSelectedImage('/natural_crowd_north_1784578297967.png'); }} />
                  </>
                )}
              </g>

              <g 
                transform="translate(800, 450)"
                onMouseEnter={() => { playHover(); setHoveredHub('shuttle'); }}
                onMouseLeave={() => setHoveredHub(null)}
                className="cursor-pointer group"
              >
                {hoveredHub === 'shuttle' && <rect x="-250" y="-70" width="350" height="200" fill="transparent" />}
                <circle cx="0" cy="0" r="40" fill="#581c87" fillOpacity="0.3" stroke="#a855f7" strokeWidth="2" className="group-hover:fill-opacity-50 transition-all" filter="url(#glowPurple)" />
                <text x="0" y="-55" textAnchor="middle" fill="#c084fc" fontSize="14" fontWeight="bold">EAST SHUTTLE DEPOT</text>
                <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="20">🚌</text>
                <rect x="-40" y="25" width="80" height="15" rx="2" fill="#1e293b" />
                <text x="0" y="36" textAnchor="middle" fill="#94a3b8" fontSize="10">Density: 42%</text>

                {hoveredHub === 'shuttle' && (
                  <>
                    <foreignObject x="-230" y="-30" width="200" height="150" className="animate-fade-in pointer-events-none">
                      <div className="w-full h-full bg-black/95 border border-purple-500/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                        <div className="h-24 w-full bg-cover bg-center" style={{ backgroundImage: "url('/natural_parking_ga_1784578413675.png')" }}></div>
                        <div className="p-2">
                          <div className="text-[10px] font-bold text-purple-400">SHUTTLE CAM 4</div>
                          <div className="text-xs text-white leading-tight underline">Click to expand</div>
                        </div>
                      </div>
                    </foreignObject>
                    <rect x="-230" y="-30" width="200" height="150" fill="transparent" className="cursor-pointer" onClick={(e) => { e.stopPropagation(); playClick(); setSelectedImage('/natural_parking_ga_1784578413675.png'); }} />
                  </>
                )}
              </g>

              <style jsx>{`
                @keyframes dash {
                  to { stroke-dashoffset: -20; }
                }
              `}</style>
            </svg>
          </div>
        </div>

        {/* AI Insights & Transport KPIs */}
        <div className="w-[350px] shrink-0 flex flex-col gap-4">
          
          <div className="glass-panel border-blue-500/30 rounded-2xl p-5 hover:border-blue-400/50 transition-all shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]" onMouseEnter={playHover} onClick={playClick}>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-4 flex items-center gap-2"><Brain size={14} className="animate-pulse" /> AI Route Optimization</h3>
            
            <div className="bg-black/60 rounded-xl p-4 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] mb-4 relative overflow-hidden group cursor-pointer hover:bg-blue-950/30 transition-colors">
              <div className="absolute left-0 top-0 w-1 h-full bg-blue-500 group-hover:shadow-[0_0_10px_#3b82f6]"></div>
              <div className="flex items-start gap-3">
                <Zap size={18} className="text-blue-400 shrink-0 mt-0.5 animate-pulse" />
                <div>
                  <div className="text-sm font-bold text-white mb-1 drop-shadow-md">Metro Surge Anticipated</div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">Line 2 dropping 800 passengers in 4m. AI recommends opening Pedestrian Path B to prevent bottleneck at Gate A.</p>
                  <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded text-xs font-bold transition-all shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    Execute Route Change
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-black/60 rounded-xl p-4 border border-white/10">
               <h4 className="text-xs font-bold text-white mb-3 flex items-center gap-2 uppercase tracking-wider"><Map size={14} className="text-blue-400"/> Pedestrian Density</h4>
               <div className="space-y-4">
                 <div>
                   <div className="flex justify-between text-[10px] uppercase font-bold mb-1">
                     <span className="text-slate-400">Path A (North)</span>
                     <span className="text-red-400 font-bold">High Density</span>
                   </div>
                   <div className="h-1.5 bg-slate-800 rounded-full"><div className="h-full bg-red-500 rounded-full shadow-[0_0_10px_#ef4444] animate-pulse" style={{ width: '88%' }}></div></div>
                 </div>
                 <div>
                   <div className="flex justify-between text-[10px] uppercase font-bold mb-1">
                     <span className="text-slate-400">Path B (East)</span>
                     <span className="text-green-400 font-bold">Clear</span>
                   </div>
                   <div className="h-1.5 bg-slate-800 rounded-full"><div className="h-full bg-green-500 rounded-full shadow-[0_0_10px_#10b981]" style={{ width: '22%' }}></div></div>
                 </div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-1">
            <div className="glass-panel border-white/10 hover:border-blue-500/50 p-4 rounded-2xl flex flex-col justify-center shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all cursor-pointer group" onMouseEnter={playHover} onClick={playClick}>
              <Train size={20} className="text-blue-400 mb-2 group-hover:animate-bounce" />
              <div className="text-2xl font-black text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">4m 12s</div>
              <div className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mt-1">Next Metro ETA</div>
            </div>
            <div className="glass-panel border-white/10 hover:border-purple-500/50 p-4 rounded-2xl flex flex-col justify-center shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all cursor-pointer group" onMouseEnter={playHover} onClick={playClick}>
              <Bus size={20} className="text-purple-400 mb-2 group-hover:animate-pulse" />
              <div className="text-2xl font-black text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">2m 45s</div>
              <div className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mt-1">Next Shuttle ETA</div>
            </div>
            <div className="glass-panel border-white/10 hover:border-white/30 p-4 rounded-2xl flex flex-col justify-center col-span-2 relative overflow-hidden group cursor-pointer transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]" onMouseEnter={playHover} onClick={playClick}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-white/10 transition-colors"></div>
              <div className="flex items-center gap-3 z-10">
                 <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/50 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 size={20} className="text-green-400" />
                 </div>
                 <div>
                   <div className="text-sm font-bold text-white uppercase tracking-wide">All Systems Go</div>
                   <div className="text-[10px] text-slate-400 mt-0.5 uppercase tracking-wider font-bold">No reported delays</div>
                 </div>
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
              <div className="text-white text-sm">Transit Hub Camera</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
