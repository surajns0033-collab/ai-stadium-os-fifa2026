import React, { useState, useEffect } from 'react';
import { ShieldAlert, Crosshair, Users, Activity, Eye, AlertTriangle, Fingerprint, Lock, Shield, ArrowRight, Maximize2 } from 'lucide-react';
import { useUISounds } from '@/hooks/useUISounds';

export default function SecurityDashboard() {
  const [time, setTime] = useState(0);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { playHover, playClick } = useUISounds();

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNodeHover = (nodeId: string) => {
    playHover();
    setHoveredNode(nodeId);
  };

  const handleNodeClick = (imagePath: string, e: React.MouseEvent) => {
    e.stopPropagation();
    playClick();
    setSelectedImage(imagePath);
  };

  return (
    <div className="h-auto xl:h-full w-full flex flex-col bg-[#0A0015] text-white overflow-visible xl:overflow-hidden p-4 xl:p-6 gap-6 relative">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay z-0 pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="flex justify-between items-end shrink-0 z-10">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-white flex items-center gap-3 gaming-text-shadow">
            Security & Threat Intelligence
            <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-red-500/20 text-red-400 rounded-sm border border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-pulse">Defcon 4</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1 font-medium">Live patrol tracking, CCTV grid, and AI threat assessment</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="glass-panel border-white/10 hover:border-white/30 transition-all rounded-xl px-5 py-3 text-right cursor-default shadow-[0_4px_20px_rgba(0,0,0,0.5)]" onMouseEnter={playHover}>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Active Patrols</div>
            <div className="text-2xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">42 <span className="text-xs text-slate-400 font-medium ml-1">Units</span></div>
          </div>
          <div className="glass-panel border-red-500/30 hover:border-red-500/50 transition-all rounded-xl px-5 py-3 text-right cursor-default shadow-[0_0_20px_rgba(239,68,68,0.2)]" onMouseEnter={playHover}>
            <div className="text-[10px] text-red-400 font-bold uppercase tracking-wider mb-1">Threat Level</div>
            <div className="text-2xl font-black text-red-400 animate-pulse drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">ELEVATED</div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col xl:flex-row gap-6 min-h-0 z-10">
        {/* Main Operational Visualization (Stadium Security Map) */}
        <div className="flex-[2] glass-panel rounded-3xl border border-slate-700/50 p-0 flex flex-col relative overflow-hidden group shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <div className="bg-black/60 backdrop-blur border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2">
              <Shield size={14} className="text-red-400" />
              <span className="text-xs font-bold text-slate-200 uppercase tracking-widest">Security Operations Grid</span>
            </div>
          </div>
          
          <div className="flex-1 relative bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full relative z-10">
              <defs>
                <filter id="glowRed"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                <filter id="glowOrange"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                <filter id="glowGreen"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                <radialGradient id="radarSweep" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Stadium Base Structure */}
              <g transform="translate(500, 300)">
                 <ellipse cx="0" cy="0" rx="350" ry="250" fill="none" stroke="#1e293b" strokeWidth="4" />
                 <ellipse cx="0" cy="0" rx="280" ry="180" fill="none" stroke="#334155" strokeWidth="2" />
                 <rect x="-150" y="-80" width="300" height="160" fill="#0f172a" stroke="#1e293b" strokeWidth="2" rx="10" />
                 
                 {/* Security Coverage Grid (Radar Sweep Effect) */}
                 <path d="M 0 0 L 350 -250 A 430 430 0 0 1 350 250 Z" fill="url(#radarSweep)" opacity="0.1" className="origin-center animate-[spin_4s_linear_infinite]" />
                 
                 {/* Restricted Areas */}
                 <path d="M -150 -80 L -150 80 L -280 180 L -280 -180 Z" fill="#ef4444" fillOpacity="0.1" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" />
                 <text x="-215" y="0" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold" opacity="0.6" transform="rotate(-90 -215 0)">RESTRICTED ZONE ALPHA</text>

                 <path d="M 150 -80 L 150 80 L 280 180 L 280 -180 Z" fill="#ef4444" fillOpacity="0.1" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" />
                 <text x="215" y="0" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold" opacity="0.6" transform="rotate(90 215 0)">RESTRICTED ZONE BETA</text>
                 
                 {/* 1. Crowd Crush Risk Node */}
                 <g 
                   transform="translate(-180, 120)"
                   onMouseEnter={() => handleNodeHover('crush')}
                   onMouseLeave={() => setHoveredNode(null)}
                   className="cursor-pointer transition-all group"
                   style={{ opacity: hoveredNode && hoveredNode !== 'crush' ? 0.3 : 1 }}
                 >
                   {hoveredNode === 'crush' && <rect x="-50" y="-50" width="100" height="100" fill="transparent" />}
                   <circle cx="0" cy="0" r="60" fill="#eab308" fillOpacity="0.15" className="group-hover:fill-opacity-30 transition-all" />
                   <circle cx="0" cy="0" r="30" fill="#f97316" fillOpacity="0.2" className="group-hover:fill-opacity-40 transition-all" />
                   <circle cx="0" cy="0" r="10" fill="#ef4444" fillOpacity="0.5" className="animate-pulse group-hover:fill-opacity-100" filter="url(#glowRed)" />
                   <text x="0" y="-20" textAnchor="middle" fill="#f87171" fontSize="10" fontWeight="bold" className="group-hover:fill-white transition-colors">CROWD CRUSH RISK</text>
                   
                   {hoveredNode === 'crush' && (
                     <>
                       <foreignObject x="40" y="-140" width="220" height="160" className="animate-fade-in pointer-events-none">
                         <div className="w-full h-full bg-black/95 border border-red-500/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                           <div className="h-28 w-full bg-cover bg-center relative" style={{ backgroundImage: "url('/security_crowd_crush.png')" }}>
                             <div className="absolute inset-0 border-[3px] border-red-500 animate-pulse m-2 rounded opacity-50"></div>
                           </div>
                           <div className="p-2 bg-red-950/30">
                             <div className="text-[10px] font-bold text-red-400 flex items-center gap-1"><AlertTriangle size={10}/> THERMAL SCANNERS</div>
                             <div className="text-xs text-white leading-tight font-medium">Click to expand intel</div>
                           </div>
                         </div>
                       </foreignObject>
                       <rect x="40" y="-140" width="220" height="160" fill="transparent" className="cursor-pointer" onClick={(e) => handleNodeClick('/security_crowd_crush.png', e)} />
                     </>
                   )}
                 </g>

                 {/* 2. Unattended Bag Node */}
                 <g 
                   transform="translate(200, -140)"
                   onMouseEnter={() => handleNodeHover('bag')}
                   onMouseLeave={() => setHoveredNode(null)}
                   className="cursor-pointer transition-all group"
                   style={{ opacity: hoveredNode && hoveredNode !== 'bag' ? 0.3 : 1 }}
                 >
                   {hoveredNode === 'bag' && <rect x="-50" y="-50" width="100" height="100" fill="transparent" />}
                   <circle cx="0" cy="0" r="50" fill="#eab308" fillOpacity="0.15" className="group-hover:fill-opacity-30 transition-all" />
                   <circle cx="0" cy="0" r="15" fill="#f97316" fillOpacity="0.4" className="animate-pulse group-hover:fill-opacity-100" filter="url(#glowOrange)" />
                   <text x="0" y="-25" textAnchor="middle" fill="#fb923c" fontSize="10" fontWeight="bold" className="group-hover:fill-white transition-colors">UNATTENDED BAG</text>
                   
                   {hoveredNode === 'bag' && (
                     <>
                       <foreignObject x="-240" y="-140" width="220" height="160" className="animate-fade-in pointer-events-none">
                         <div className="w-full h-full bg-black/95 border border-orange-500/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(249,115,22,0.5)]">
                           <div className="h-28 w-full bg-cover bg-center" style={{ backgroundImage: "url('/security_unattended_bag.png')" }}></div>
                           <div className="p-2 bg-orange-950/30">
                             <div className="text-[10px] font-bold text-orange-400 flex items-center gap-1"><Eye size={10}/> CCTV N-08</div>
                             <div className="text-xs text-white leading-tight font-medium">Click to expand intel</div>
                           </div>
                         </div>
                       </foreignObject>
                       <rect x="-240" y="-140" width="220" height="160" fill="transparent" className="cursor-pointer" onClick={(e) => handleNodeClick('/security_unattended_bag.png', e)} />
                     </>
                   )}
                 </g>

                 {/* 3. Facial Recognition Hit Node */}
                 <g 
                   transform="translate(180, 180)"
                   onMouseEnter={() => handleNodeHover('face')}
                   onMouseLeave={() => setHoveredNode(null)}
                   className="cursor-pointer transition-all group"
                   style={{ opacity: hoveredNode && hoveredNode !== 'face' ? 0.3 : 1 }}
                 >
                   {hoveredNode === 'face' && <rect x="-50" y="-50" width="100" height="100" fill="transparent" />}
                   <circle cx="0" cy="0" r="40" fill="#6366f1" fillOpacity="0.15" className="group-hover:fill-opacity-30 transition-all" />
                   <rect x="-10" y="-10" width="20" height="20" fill="none" stroke="#6366f1" strokeWidth="2" className="animate-ping" />
                   <circle cx="0" cy="0" r="8" fill="#818cf8" filter="url(#glowOrange)" />
                   <text x="0" y="30" textAnchor="middle" fill="#818cf8" fontSize="10" fontWeight="bold" className="group-hover:fill-white transition-colors">FACE REC HIT</text>
                   
                   {hoveredNode === 'face' && (
                     <>
                       <foreignObject x="-240" y="-40" width="220" height="160" className="animate-fade-in pointer-events-none">
                         <div className="w-full h-full bg-black/95 border border-indigo-500/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                           <div className="h-28 w-full bg-cover bg-center" style={{ backgroundImage: "url('/security_facial_recognition.png')" }}></div>
                           <div className="p-2 bg-indigo-950/30">
                             <div className="text-[10px] font-bold text-indigo-400 flex items-center gap-1"><Fingerprint size={10}/> BIOMETRIC MATCH</div>
                             <div className="text-xs text-white leading-tight font-medium">Click to expand intel</div>
                           </div>
                         </div>
                       </foreignObject>
                       <rect x="-240" y="-40" width="220" height="160" fill="transparent" className="cursor-pointer" onClick={(e) => handleNodeClick('/security_facial_recognition.png', e)} />
                     </>
                   )}
                 </g>

                 {/* Patrol Movement Paths */}
                 <path id="patrolPath1" d="M -250 -150 Q 0 -220 250 -150 T 250 150 T -250 150 Z" fill="none" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.4" strokeDasharray="5 5" />
                 
                 {/* Animated Patrol Units */}
                 <circle cx="0" cy="0" r="6" fill="#3b82f6" filter="url(#glowOrange)">
                   <animateMotion dur="10s" repeatCount="indefinite" path="M -250 -150 Q 0 -220 250 -150 T 250 150 T -250 150 Z" />
                 </circle>
                 
                 {/* Alert Visualization (Active Ping) */}
                 <g transform="translate(-180, 120)">
                   <circle cx="0" cy="0" r="80" fill="none" stroke="#ef4444" strokeWidth="2" className="animate-ping" />
                   <path d="M 0 -15 L 15 15 L -15 15 Z" fill="#ef4444" />
                   <text x="0" y="30" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" className="animate-pulse drop-shadow-md">SQUAD 3 EN ROUTE</text>
                 </g>
              </g>
            </svg>
          </div>
        </div>

        {/* AI Threat Assessment & Incident Timeline */}
        <div className="flex-1 flex flex-col gap-4 min-w-[320px]">
          
          {/* AI Threat Assessment */}
          <div className="glass-panel p-5 rounded-2xl border border-red-500/30 bg-red-900/10 shadow-[0_4px_20px_rgba(239,68,68,0.1)] hover:shadow-[0_4px_30px_rgba(239,68,68,0.2)] transition-shadow" onMouseEnter={playHover}>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-4 flex items-center gap-2"><Eye size={14} className="animate-pulse" /> AI Threat Assessment</h3>
            
            <div className="space-y-4">
              <div className="bg-black/60 rounded-xl p-4 border border-red-500/30 hover:bg-red-950/40 transition-colors group cursor-pointer" onClick={(e) => handleNodeClick('/security_facial_recognition.png', e)}>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-bold text-white flex items-center gap-2 group-hover:text-red-300 transition-colors">
                    <AlertTriangle size={14} className="text-red-400" /> Pattern Anomaly Detected
                  </div>
                  <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded shadow-[0_0_5px_rgba(239,68,68,0.5)]">94% Confidence</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300">Repeated traversal of Zone Alpha perimeter by unidentified individual. Biometric mismatch against registered personnel.</p>
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 bg-red-500/20 hover:bg-red-500/40 border border-red-500/50 text-red-300 text-xs py-1.5 rounded-lg transition-colors font-bold shadow-[0_0_10px_rgba(239,68,68,0.2)]">Lockdown Zone</button>
                  <button className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white text-xs py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1"><Crosshair size={12}/> Drone Track</button>
                </div>
              </div>

              <div className="bg-black/60 rounded-xl p-4 border border-orange-500/30 hover:bg-orange-950/40 transition-colors group cursor-pointer" onClick={(e) => handleNodeClick('/security_crowd_crush.png', e)}>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-bold text-white flex items-center gap-2 group-hover:text-orange-300 transition-colors">
                    <Users size={14} className="text-orange-400" /> Crowd Density Risk
                  </div>
                  <span className="text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded shadow-[0_0_5px_rgba(249,115,22,0.5)]">88% Confidence</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300">Sector 112 approaching crush threshold. Flow rate imbalance detected at Gate B.</p>
              </div>
            </div>
          </div>

          {/* Incident Timeline */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 flex-1 flex flex-col min-h-0 hover:border-blue-500/30 transition-colors" onMouseEnter={playHover}>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-4 flex items-center gap-2"><Activity size={14} /> Incident Timeline</h3>
            
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-4">
              <div className="relative pl-6 border-l-2 border-red-500/50 pb-4 group cursor-pointer" onClick={(e) => handleNodeClick('/security_unattended_bag.png', e)}>
                <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-[7.5px] top-0 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse"></div>
                <div className="text-[10px] text-red-400 font-bold mb-1 tracking-widest">LIVE · -0m</div>
                <div className="text-sm font-bold text-white mb-1 group-hover:text-red-300 transition-colors">Unattended Bag Reported</div>
                <div className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300">North Concourse. Bomb squad notified automatically via AI protocol. <span className="text-blue-400 underline ml-1">View Cam</span></div>
              </div>

              <div className="relative pl-6 border-l-2 border-orange-500/50 pb-4 group cursor-pointer" onClick={(e) => handleNodeClick('/security_facial_recognition.png', e)}>
                <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-[7.5px] top-0 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
                <div className="text-[10px] text-slate-500 font-bold mb-1 tracking-widest">-12m</div>
                <div className="text-sm font-bold text-white mb-1 group-hover:text-orange-300 transition-colors">Facial Recognition Hit</div>
                <div className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300">Banned individual detected at Gate D. Security intercepted successfully. <span className="text-blue-400 underline ml-1">View Hit</span></div>
              </div>

              <div className="relative pl-6 border-l-2 border-slate-700 pb-4 group cursor-pointer" onClick={(e) => handleNodeClick('/security_drone_sweep.png', e)}>
                <div className="absolute w-3 h-3 bg-slate-500 rounded-full -left-[7.5px] top-0 shadow-[0_0_10px_rgba(100,116,139,0.8)]"></div>
                <div className="text-[10px] text-slate-500 font-bold mb-1 tracking-widest">-45m</div>
                <div className="text-sm font-bold text-white mb-1 group-hover:text-slate-300 transition-colors">Drone Sweep Complete</div>
                <div className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300">Perimeter scan found 0 anomalies. Roof access locked. <span className="text-blue-400 underline ml-1">View Feed</span></div>
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
            <img src={selectedImage} alt="Security Camera Feed" className="w-full h-full object-cover" />
            
            {/* Cyberpunk HUD overlay on image */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-30"></div>
            <div className="absolute top-8 left-8 text-red-500 font-mono text-sm font-bold animate-pulse pointer-events-none">REC • LIVE STREAM</div>
            <div className="absolute bottom-8 right-8 text-white/50 font-mono text-xs pointer-events-none">SYS.AI.ANALYSIS.CONFIRMED</div>

            <button 
              className="absolute top-4 right-4 bg-black/60 text-white rounded-full p-2 hover:bg-red-500/80 transition-colors border border-white/20 z-10"
              onClick={() => { playClick(); setSelectedImage(null); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur border border-red-500/50 rounded-lg px-4 py-2 z-10 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
              <div className="text-red-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2"><Lock size={12}/> HIGH SECURITY FEED</div>
              <div className="text-white text-sm font-medium">Restricted Access / Level 4</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
