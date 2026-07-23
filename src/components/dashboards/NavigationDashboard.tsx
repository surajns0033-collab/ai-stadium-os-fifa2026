import React, { useState, useEffect } from 'react';
import { Navigation, Map as MapIcon, Route, Compass, Clock, Accessibility, AlertTriangle, ArrowRightCircle } from 'lucide-react';

export default function NavigationDashboard() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-auto xl:h-full w-full flex flex-col bg-[#0A0015] text-white overflow-visible xl:overflow-hidden p-4 xl:p-6 gap-6 relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 shrink-0 z-10">
        <div>
          <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
            Intelligent Navigation & Wayfinding
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-blue-500/20 text-blue-400 rounded border border-blue-500/30">Live Routing</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">Indoor/Outdoor flow paths, turn-by-turn guidance, and dynamic route drawing</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Active Users Navigating</div>
            <div className="text-xl font-black text-white">12,450</div>
          </div>
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Routing Status</div>
            <div className="text-xl font-black text-blue-400 flex items-center gap-2"><Route size={18}/> Optimal</div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col xl:flex-row gap-6 min-h-0 z-10">
        
        {/* Main Operational Visualization (Indoor/Outdoor Map & Routing) */}
        <div className="flex-[2] glass-panel min-h-[420px] lg:min-h-0 rounded-3xl border border-slate-700/50 p-6 flex flex-col relative overflow-hidden bg-slate-900/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <h3 className="font-bold text-lg mb-4 z-10 flex items-center gap-2"><MapIcon size={18} className="text-blue-400"/> Wayfinding Grid (Indoor & Outdoor)</h3>
          
          <div className="w-full min-h-[320px] lg:min-h-0 flex-1 relative border border-slate-700 rounded-2xl bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full">
              
              {/* Stadium Base Structure (Indoor) */}
              <g transform="translate(400, 300)">
                 <ellipse cx="0" cy="0" rx="300" ry="200" fill="#0f172a" stroke="#1e293b" strokeWidth="4" />
                 <ellipse cx="0" cy="0" rx="200" ry="120" fill="#05000A" stroke="#334155" strokeWidth="2" />
                 <rect x="-100" y="-60" width="200" height="120" fill="#05000A" stroke="#1e293b" strokeWidth="2" rx="10" />
                 
                 {/* Internal Concourse Walls */}
                 <path d="M -250 -150 Q 0 -220 250 -150" fill="none" stroke="#1e293b" strokeWidth="6" />
                 <path d="M -250 150 Q 0 220 250 150" fill="none" stroke="#1e293b" strokeWidth="6" />

                 {/* Points of Interest */}
                 <circle cx="-150" cy="0" r="15" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
                 <text x="-150" y="5" textAnchor="middle" fill="#93c5fd" fontSize="10" fontWeight="bold">GATE A</text>

                 <circle cx="150" cy="-100" r="15" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2" />
                 <text x="150" y="-95" textAnchor="middle" fill="#a7f3d0" fontSize="10" fontWeight="bold">VIP</text>

                 <circle cx="150" cy="100" r="15" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="2" />
                 <text x="150" y="105" textAnchor="middle" fill="#fca5a5" fontSize="10" fontWeight="bold">MED</text>

                 {/* Outdoor Plazas / Transit */}
                 <g transform="translate(-400, -200)">
                    <rect x="0" y="0" width="100" height="60" rx="5" fill="#1e293b" stroke="#334155" />
                    <text x="50" y="35" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">METRO</text>
                 </g>
                 
                 <g transform="translate(450, 150)">
                    <rect x="0" y="0" width="100" height="60" rx="5" fill="#1e293b" stroke="#334155" />
                    <text x="50" y="35" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">PARKING</text>
                 </g>

                 {/* Route Drawing Animations */}
                 
                 {/* Standard Fan Route (Metro to Gate A to Concourse) */}
                 <path d="M -350 -140 L -250 -70 L -150 -15" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="1000" strokeDashoffset="0" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="4s" repeatCount="indefinite" />
                 </path>
                 <circle cx="-350" cy="-140" r="4" fill="#3b82f6">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 0 0 L 100 70 L 200 125" />
                 </circle>
                 
                 {/* VIP/Accessibility Route (Parking to VIP - smooth flow) */}
                 <path d="M 450 180 Q 250 150 150 -85" fill="none" stroke="#eab308" strokeWidth="4" strokeDasharray="1000" strokeDashoffset="0" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="5s" repeatCount="indefinite" />
                 </path>
                 <circle cx="450" cy="180" r="4" fill="#eab308">
                    <animateMotion dur="5s" repeatCount="indefinite" path="M 0 0 Q -200 -30 -300 -265" />
                 </circle>
                 
                 {/* Emergency Route (Red dashed flow) */}
                 <path d="M 150 115 L 250 180 L 350 250" fill="none" stroke="#ef4444" strokeWidth="4" strokeDasharray="10 10" className="animate-[dash_1s_linear_infinite]" />
                 <text x="250" y="210" fill="#ef4444" fontSize="10" fontWeight="bold" transform="rotate(30 250 210)">EMERGENCY EVAC ROUTE</text>

              </g>

              <style jsx>{`
                @keyframes dash {
                  to { stroke-dashoffset: -20; }
                }
              `}</style>
            </svg>
          </div>
        </div>

        {/* Turn-by-Turn Guidance & Wayfinding Details */}
        <div className="flex-1 flex flex-col gap-4 w-full lg:min-w-[320px]">
          
          {/* Turn-by-Turn Panel */}
          <div className="glass-panel p-5 rounded-2xl border border-blue-500/30 bg-blue-900/10">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><Compass size={14} className="text-blue-400" /> Live Turn-by-Turn App Stream</h3>
            
            <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700">
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-700/50">
                <div className="text-sm font-bold text-white">Route: Metro to Sector 112</div>
                <div className="flex items-center gap-1 text-emerald-400 font-bold text-xs bg-emerald-500/20 px-2 py-1 rounded">
                  <Clock size={12} /> 12 Min
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-blue-500/30">
                    <ArrowRightCircle size={14} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-0.5">Exit Metro Station North</div>
                    <div className="text-xs text-slate-400">Walk 200m towards Gate A</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-blue-500/30">
                    <ArrowRightCircle size={14} className="text-blue-400 -rotate-90" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-0.5">Turn Right at Security Checkpoint</div>
                    <div className="text-xs text-slate-400">Proceed through Fast-Track lane 3</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 opacity-50">
                  <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MapIcon size={14} className="text-slate-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-300 mb-0.5">Arrive at Sector 112</div>
                    <div className="text-xs text-slate-500">Row F, Seat 24</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative & Accessibility Routes */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 flex-1">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><Route size={14} className="text-blue-400" /> Dynamic Route Management</h3>
            
            <div className="space-y-3">
              <div className="p-3 bg-slate-900/80 rounded-xl border border-orange-500/30">
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle size={14} className="text-orange-400" />
                  <span className="text-xs font-bold text-white">Alternative Route Triggered</span>
                </div>
                <p className="text-[10px] text-slate-400 leading-relaxed">
                  Gate B is currently experiencing heavy congestion. AI has dynamically rerouted 3,000 approaching fans to Gate C.
                </p>
                <div className="text-[10px] text-orange-400 mt-2 font-bold">+4 Min Walking Time</div>
              </div>

              <div className="p-3 bg-slate-900/80 rounded-xl border border-blue-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-blue-500/10 rounded-bl-full flex items-start justify-end p-2">
                  <Accessibility size={14} className="text-blue-400" />
                </div>
                <div className="text-xs font-bold text-white mb-1">Accessibility Routing Active</div>
                <p className="text-[10px] text-slate-400 leading-relaxed w-5/6">
                  Providing step-free, elevator-prioritized routes to 215 registered users currently navigating the venue.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
