import React, { useState, useEffect } from 'react';
import { BrainCircuit, Cpu, Network, Lightbulb, CheckCircle2, ShieldAlert, GitMerge, FileText } from 'lucide-react';

export default function AIOperationsDashboard() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full flex flex-col bg-[#0A0015] text-white overflow-hidden p-6 gap-6 relative">
      <div className="flex justify-between items-end shrink-0 z-10">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-white flex items-center gap-3">
            AI Operations & Prediction Engine
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-purple-500/20 text-purple-400 rounded border border-purple-500/30">System Autonomous</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">Live Explainable AI (XAI) reasoning, neural confidence, and decision support</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Avg Confidence</div>
            <div className="text-xl font-black text-purple-400">96.4%</div>
          </div>
          <div className="bg-slate-900/80 border border-purple-500/30 rounded-xl px-4 py-2 text-right shadow-[0_0_15px_rgba(168,85,247,0.1)]">
            <div className="text-[10px] text-purple-400 font-bold uppercase">AI Thinking State</div>
            <div className="text-xl font-black text-white animate-pulse">PROCESSING...</div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0 z-10">
        
        {/* Main Operational Visualization (Neural Network / AI Engine) */}
        <div className="flex-[2] glass-panel rounded-3xl border border-slate-700/50 p-6 flex flex-col relative overflow-hidden bg-slate-900/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <h3 className="font-bold text-lg mb-4 z-10 flex items-center gap-2"><Cpu size={18} className="text-purple-400"/> AI Reasoning Flow</h3>
          
          <div className="flex-1 relative border border-slate-700 rounded-2xl bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full">
              
              {/* Input Nodes (Data Sources) */}
              <g transform="translate(150, 300)">
                 <circle cx="0" cy="-150" r="20" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
                 <text x="-40" y="-145" fill="#93c5fd" fontSize="12" fontWeight="bold">CCTV</text>

                 <circle cx="0" cy="-50" r="20" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2" />
                 <text x="-40" y="-45" fill="#a7f3d0" fontSize="12" fontWeight="bold">SENSORS</text>

                 <circle cx="0" cy="50" r="20" fill="#eab308" fillOpacity="0.2" stroke="#eab308" strokeWidth="2" />
                 <text x="-40" y="55" fill="#fef08a" fontSize="12" fontWeight="bold">APP DATA</text>

                 <circle cx="0" cy="150" r="20" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="2" />
                 <text x="-40" y="155" fill="#fca5a5" fontSize="12" fontWeight="bold">WEATHER</text>
              </g>

              {/* Neural Network Hidden Layers (Thinking State) */}
              <g transform="translate(450, 300)">
                 <rect x="-100" y="-200" width="200" height="400" rx="20" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />
                 <text x="0" y="-220" textAnchor="middle" fill="#a855f7" fontSize="16" fontWeight="bold">PREDICTION ENGINE</text>
                 
                 {/* Neural Nodes */}
                 {[...Array(5)].map((_, i) => (
                    <circle key={`l1-${i}`} cx="-50" cy={-120 + i*60} r="8" fill="#a855f7" className="animate-pulse" />
                 ))}
                 {[...Array(4)].map((_, i) => (
                    <circle key={`l2-${i}`} cx="50" cy={-90 + i*60} r="8" fill="#d946ef" className="animate-pulse" style={{ animationDelay: `${i*0.2}s` }} />
                 ))}
                 
                 {/* Connection Lines (Synapses) */}
                 {[...Array(5)].map((_, i) => (
                    [...Array(4)].map((_, j) => (
                       <path key={`syn-${i}-${j}`} d={`M -50 ${-120 + i*60} L 50 ${-90 + j*60}`} stroke="#a855f7" strokeWidth="1" strokeOpacity="0.2" />
                    ))
                 ))}

                 {/* Active Flow Animation */}
                 <path d="M -50 0 L 50 -30" stroke="#fff" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_1s_linear_infinite]" />
                 <path d="M -50 60 L 50 30" stroke="#fff" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_1s_linear_infinite_reverse]" />
              </g>

              {/* Connections from Inputs to Engine */}
              <path d="M 170 150 Q 300 150 350 250" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="10 5" className="animate-[dash_2s_linear_infinite]" />
              <path d="M 170 250 Q 300 250 350 280" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="10 5" className="animate-[dash_1.5s_linear_infinite]" />
              <path d="M 170 350 Q 300 350 350 320" fill="none" stroke="#eab308" strokeWidth="2" strokeDasharray="10 5" className="animate-[dash_1.8s_linear_infinite]" />
              <path d="M 170 450 Q 300 450 350 350" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="10 5" className="animate-[dash_2.5s_linear_infinite]" />

              {/* Output Decision Node */}
              <g transform="translate(800, 300)">
                 <rect x="-80" y="-60" width="160" height="120" rx="15" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                 <text x="0" y="-30" textAnchor="middle" fill="#38bdf8" fontSize="14" fontWeight="bold">DECISION SUPPORT</text>
                 <text x="0" y="0" textAnchor="middle" fill="#bae6fd" fontSize="12">Deploy Extra Medics</text>
                 <text x="0" y="20" textAnchor="middle" fill="#bae6fd" fontSize="12">to Sector 112</text>
                 <text x="0" y="45" textAnchor="middle" fill="#38bdf8" fontSize="10" className="animate-pulse">CONFIDENCE: 92%</text>
              </g>

              {/* Output Flow */}
              <path d="M 550 300 L 720 300" stroke="#a855f7" strokeWidth="4" strokeDasharray="15 10" className="animate-[dash_1s_linear_infinite]" />
              <text x="635" y="290" textAnchor="middle" fill="#d946ef" fontSize="10" fontWeight="bold">RECOMMENDATION</text>

              <style jsx>{`
                @keyframes dash {
                  to { stroke-dashoffset: -30; }
                }
              `}</style>
            </svg>
          </div>
        </div>

        {/* Explainable AI & Recommendation Timeline */}
        <div className="flex-1 flex flex-col gap-4 min-w-[320px]">
          
          {/* Explainable AI (XAI) Panel */}
          <div className="glass-panel p-5 rounded-2xl border border-purple-500/30 bg-purple-900/10">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><BrainCircuit size={14} className="text-purple-400" /> Explainable AI (XAI)</h3>
            
            <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={16} className="text-yellow-400" />
                <div className="text-sm font-bold text-white">Suggested Action Context</div>
              </div>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                <strong className="text-white">Why did AI recommend deploying medics to Sector 112?</strong><br/><br/>
                1. Sensor data indicates Sector 112 ambient temperature is 2°C above stadium average.<br/>
                2. Crowd density is at 94% capacity, reducing airflow.<br/>
                3. Historical data (Match Day 4) correlates these conditions with a 60% spike in heat exhaustion cases.
              </p>
              
              <div className="space-y-2 border-t border-slate-700/50 pt-3">
                <div className="flex justify-between text-[10px] font-bold uppercase">
                  <span className="text-slate-400">Model Confidence</span>
                  <span className="text-emerald-400">92%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendation Timeline / AI Alerts */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 flex-1 flex flex-col min-h-0">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><GitMerge size={14} className="text-blue-400" /> Recommendation Timeline</h3>
            
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-4">
              <div className="relative pl-6 border-l-2 border-purple-500/50 pb-4">
                <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-0 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                <div className="text-[10px] text-slate-500 font-bold mb-1">LIVE · -0m</div>
                <div className="text-sm font-bold text-white mb-1">Medic Pre-deployment</div>
                <div className="text-xs text-slate-400">Suggested proactive dispatch of 2 EMT teams to Sector 112. (Awaiting Approval)</div>
                <div className="mt-2 flex gap-2">
                  <button className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-1 rounded border border-emerald-500/30">Approve</button>
                  <button className="bg-slate-800 text-slate-300 text-[10px] px-2 py-1 rounded border border-slate-600">Reject</button>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-slate-700 pb-4">
                <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[7px] top-0 flex items-center justify-center">
                  <CheckCircle2 size={8} className="text-slate-900" />
                </div>
                <div className="text-[10px] text-slate-500 font-bold mb-1">-15m</div>
                <div className="text-sm font-bold text-slate-300 mb-1">Route Diversion Executed</div>
                <div className="text-xs text-slate-500">Autonomous diversion of crowd flow from Gate C to Gate D based on density metrics.</div>
              </div>

              <div className="relative pl-6 border-l-2 border-slate-700 pb-4">
                <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[7px] top-0"></div>
                <div className="text-[10px] text-slate-500 font-bold mb-1">-42m</div>
                <div className="text-sm font-bold text-slate-300 mb-1">HVAC Optimization</div>
                <div className="text-xs text-slate-500">Automatically reduced cooling in empty concourse zones to save energy.</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
