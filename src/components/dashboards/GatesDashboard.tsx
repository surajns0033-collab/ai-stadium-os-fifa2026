import React, { useState, useEffect } from 'react';
import { DoorOpen, Brain, AlertTriangle, Scan, Activity, CheckCircle2, XCircle, ShieldAlert } from 'lucide-react';

export default function GatesDashboard() {
  const [time, setTime] = useState(0);
  const [aiFeed, setAiFeed] = useState([
    { id: 1, type: 'action', text: 'AI redirected 450 fans to Gate C to balance load.', time: 'Just now' },
    { id: 2, type: 'alert', text: 'Scanner #2 at Gate B offline. Maintenance dispatched.', time: '2m ago' },
    { id: 3, type: 'info', text: 'Gate A processing rate optimal: 140 fans/min.', time: '5m ago' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const events = [
      { type: 'action', text: 'AI opened overflow lane at Gate A.' },
      { type: 'info', text: 'Queue density at Gate B dropping by 15%.' },
      { type: 'alert', text: 'Minor biometric read delay at Gate C.' },
      { type: 'action', text: 'AI deployed 2 crowd control staff to Gate B.' }
    ];
    
    let counter = 0;
    const feedInterval = setInterval(() => {
      const newEvent = { ...events[counter % events.length], id: Date.now(), time: 'Just now' };
      setAiFeed(prev => {
        const updated = [newEvent, ...prev].slice(0, 5);
        return updated.map((item, i) => i === 0 ? item : { ...item, time: `${i*2 + 1}m ago` });
      });
      counter++;
    }, 5000);

    return () => clearInterval(feedInterval);
  }, []);

  return (
    <div className="h-full w-full flex flex-col bg-[#0A0015] text-white overflow-hidden p-6 gap-6 relative">
      <div className="flex justify-between items-end shrink-0 z-10">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-white flex items-center gap-3">
            Gate Analytics & Flow
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-purple-500/20 text-purple-400 rounded border border-purple-500/30">Live Processing</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">Real-time turnstile processing rates, biometric scans, and queue balancing</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Processing Rate</div>
            <div className="text-xl font-black text-white">412 <span className="text-xs text-green-400 font-normal">fans / min</span></div>
          </div>
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Hardware Uptime</div>
            <div className="text-xl font-black text-white">98% <span className="text-xs text-yellow-400 font-normal">1 Warning</span></div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0 z-10">
        <div className="flex-[2] glass-panel rounded-3xl border border-slate-700/50 p-6 flex flex-col relative overflow-hidden bg-slate-900/40">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <h3 className="font-bold text-lg flex items-center gap-2"><DoorOpen size={18} className="text-purple-400"/> Turnstile Flow Simulation</h3>
            <div className="flex items-center gap-3 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/50 text-xs">
              <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Flowing</span>
              <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div> Congested</span>
              <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500"></div> Offline</span>
              <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div> AI Route</span>
            </div>
          </div>
          
          <div className="flex-1 relative border border-slate-700 rounded-2xl bg-[#05000A] overflow-hidden group">
            <img 
              src="/stadium_gate_bg.png" 
              alt="Stadium Gate" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700 mix-blend-luminosity" 
            />
            
            <svg viewBox="0 0 1000 600" className="w-full h-full absolute inset-0 z-10">
              <defs>
                 <linearGradient id="flow-green" x1="0" y1="0" x2="1" y2="0">
                   <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                   <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
                 </linearGradient>
                 <linearGradient id="flow-blue" x1="0" y1="0" x2="1" y2="0">
                   <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                   <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
                 </linearGradient>
              </defs>

              <g transform="translate(100, 100)">
                 <rect width="250" height="90" rx="8" fill="rgba(30,41,59,0.8)" stroke="#10b981" strokeWidth="2" className="backdrop-blur-sm" />
                 <text x="125" y="45" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">GATE A (NORTH)</text>
                 <text x="125" y="65" textAnchor="middle" fill="#a7f3d0" fontSize="12">140 fans/min | Wait: 2m</text>
                 
                 {[20, 105, 190].map((x, i) => (
                    <g key={`ga-ts-${i}`}>
                      <rect x={x} y="85" width="40" height="5" fill="#10b981" />
                      <line x1={x} y1="85" x2={x+40} y2="85" stroke="#fff" strokeWidth="2" className={`animate-[scan_${1.5 + i*0.2}s_linear_infinite]`} />
                    </g>
                 ))}

                 {[0, 1, 2].map(i => (
                    <path key={`ga-fl-${i}`} d={`M ${40 + i*85} 120 L ${40 + i*85} 350`} fill="none" stroke="url(#flow-green)" strokeWidth="4" className="animate-[dash_2s_linear_infinite]" strokeDasharray="10 10" />
                 ))}
                 
                 {[...Array(9)].map((_, i) => (
                    <circle key={`ga-f-${i}`} cx={40 + (i%3)*85} cy={120 + i*25} r="6" fill="#10b981" className="animate-pulse" style={{animationDelay: `${i*0.2}s`}} />
                 ))}
              </g>

              <g transform="translate(600, 100)">
                 <rect width="250" height="90" rx="8" fill="rgba(30,41,59,0.8)" stroke="#eab308" strokeWidth="2" className="backdrop-blur-sm" />
                 <text x="125" y="45" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">GATE B (EAST)</text>
                 <text x="125" y="65" textAnchor="middle" fill="#fef08a" fontSize="12">80 fans/min | Wait: 12m</text>
                 
                 <rect x="20" y="85" width="40" height="5" fill="#10b981" />
                 <rect x="105" y="85" width="40" height="5" fill="#ef4444" className="animate-pulse" />
                 <rect x="190" y="85" width="40" height="5" fill="#10b981" />

                 <text x="125" y="125" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">SCANNER FAULT</text>

                 {[...Array(25)].map((_, i) => (
                    <circle key={`gb-f-${i}`} cx={125 + (Math.random()*160 - 80)} cy={160 + i*7} r="6" fill="#eab308" className="animate-pulse" style={{animationDelay: `${i*0.1}s`}} />
                 ))}
              </g>

              <g transform="translate(350, 400)">
                 <rect width="250" height="90" rx="8" fill="rgba(15,23,42,0.8)" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5 5" className="animate-[pulse_2s_infinite] backdrop-blur-sm" />
                 <text x="125" y="45" textAnchor="middle" fill="#93c5fd" fontSize="16" fontWeight="bold">GATE C (OVERFLOW)</text>
                 <text x="125" y="65" textAnchor="middle" fill="#3b82f6" fontSize="12">AI ACTIVATED - DIVERTING</text>
                 
                 <path d="M 350 -100 Q 250 -50 200 0" fill="none" stroke="url(#flow-blue)" strokeWidth="6" className="animate-[dash_1.5s_linear_infinite]" strokeDasharray="15 15" />
                 
                 {[...Array(5)].map((_, i) => (
                    <circle key={`div-f-${i}`} cx={250 + i*15} cy={-50 + i*20} r="6" fill="#3b82f6" className="animate-pulse" style={{animationDelay: `${i*0.2}s`}} />
                 ))}
              </g>

              <style jsx>{`
                @keyframes dash {
                  to { stroke-dashoffset: -30; }
                }
                @keyframes scan {
                  0% { transform: translateY(-5px); opacity: 0; }
                  50% { opacity: 1; }
                  100% { transform: translateY(15px); opacity: 0; }
                }
              `}</style>
            </svg>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div className="flex-[3] glass-panel p-5 rounded-3xl border border-blue-500/30 bg-blue-900/10 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4 flex items-center gap-2">
              <Brain size={16} className="text-blue-400 animate-pulse" /> AI Operations Feed
            </h3>
            
            <div className="flex-1 flex flex-col gap-3 overflow-hidden">
              {aiFeed.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`bg-slate-900/60 p-4 rounded-xl border flex gap-3 transition-all duration-500 animate-[slideIn_0.3s_ease-out]
                    ${item.type === 'action' ? 'border-blue-500/30 border-l-4 border-l-blue-500' : 
                      item.type === 'alert' ? 'border-yellow-500/30 border-l-4 border-l-yellow-500' : 'border-slate-700/50'}`}
                  style={{ opacity: 1 - index * 0.15 }}
                >
                  <div className="mt-0.5">
                    {item.type === 'action' && <ShieldAlert size={16} className="text-blue-400" />}
                    {item.type === 'alert' && <AlertTriangle size={16} className="text-yellow-400" />}
                    {item.type === 'info' && <Activity size={16} className="text-green-400" />}
                  </div>
                  <div>
                    <p className="text-sm text-slate-200">{item.text}</p>
                    <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Telemetry Panel */}
          <div className="bg-slate-900/80 rounded-3xl p-6 border border-slate-700 shrink-0 shadow-xl">
             <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
               <Scan size={16} className="text-slate-400"/> Hardware Telemetry
             </h4>
             <div className="space-y-4">
               <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-3">
                 <span className="text-slate-300">Total Turnstiles</span>
                 <span className="text-white font-mono font-bold">124</span>
               </div>
               <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-3">
                 <span className="flex items-center gap-2 text-slate-300"><CheckCircle2 size={14} className="text-green-500"/> Online & Scanning</span>
                 <span className="text-green-400 font-mono font-bold">122</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                 <span className="flex items-center gap-2 text-slate-300"><XCircle size={14} className="text-red-500"/> Faulty Hardware</span>
                 <span className="text-red-400 font-mono font-black">2</span>
               </div>
             </div>
             <div className="mt-6 pt-6 border-t border-slate-800">
               <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl text-sm font-bold shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all hover:scale-[1.02]">
                 Run AI Hardware Diagnostic
               </button>
             </div>
          </div>

        </div>
      </div>
      
      <style jsx global>{`
        @keyframes slideIn {
          from { transform: translateX(20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
