import React, { useState, useEffect } from 'react';
import { Target, TrendingUp, DollarSign, Users, ShieldAlert, BarChart3, Activity, Map, ArrowUpRight, Zap } from 'lucide-react';

export default function ExecutiveCommandDashboard() {
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
            Executive Command & Control
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-emerald-500/20 text-emerald-400 rounded border border-emerald-500/30">Live Global View</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">Multi-stadium tournament KPIs, financial overview, and predictive operational health</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Tournament Revenue</div>
            <div className="text-xl font-black text-emerald-400">$14.2M <span className="text-xs text-emerald-400 font-normal">↑ 4%</span></div>
          </div>
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Total Attendance</div>
            <div className="text-xl font-black text-white">218,450</div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0 z-10">
        
        {/* Main Operational Visualization (Multi-Stadium Overview Map) */}
        <div className="flex-[2] glass-panel rounded-3xl border border-slate-700/50 p-6 flex flex-col relative overflow-hidden bg-slate-900/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <div className="flex justify-between items-center mb-4 z-10">
             <h3 className="font-bold text-lg flex items-center gap-2"><Map size={18} className="text-indigo-400"/> Multi-Stadium Operations Grid</h3>
             <div className="flex gap-2">
                <span className="px-2 py-1 bg-slate-800 text-xs font-bold rounded">North America</span>
             </div>
          </div>
          
          <div className="flex-1 relative border border-slate-700 rounded-2xl bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full">
              
              {/* Map Base (Abstract Continental Shape) */}
              <path d="M 200 100 Q 400 50 600 100 T 900 200 Q 850 400 700 500 T 300 500 Q 150 400 100 250 Z" fill="#0f172a" stroke="#1e293b" strokeWidth="2" opacity="0.5" />
              
              {/* Stadium 1: MetLife (New York) - Warning State */}
              <g transform="translate(750, 250)">
                 <circle cx="0" cy="0" r="40" fill="none" stroke="#eab308" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" />
                 <circle cx="0" cy="0" r="15" fill="#eab308" fillOpacity="0.2" className="animate-ping" />
                 <circle cx="0" cy="0" r="8" fill="#eab308" />
                 <rect x="25" y="-30" width="120" height="60" rx="8" fill="#1e293b" stroke="#eab308" strokeWidth="1" />
                 <text x="35" y="-10" fill="#fff" fontSize="12" fontWeight="bold">New York</text>
                 <text x="35" y="5" fill="#eab308" fontSize="10">Match Active</text>
                 <text x="35" y="20" fill="#94a3b8" fontSize="10">82,000 Fans</text>
              </g>

              {/* Stadium 2: Azteca (Mexico City) - Good State */}
              <g transform="translate(450, 450)">
                 <circle cx="0" cy="0" r="30" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" />
                 <circle cx="0" cy="0" r="8" fill="#10b981" />
                 <rect x="20" y="-20" width="120" height="40" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1" />
                 <text x="30" y="-5" fill="#fff" fontSize="12" fontWeight="bold">Mexico City</text>
                 <text x="30" y="10" fill="#10b981" fontSize="10">Pre-Match (T-45m)</text>
              </g>

              {/* Stadium 3: SoFi (Los Angeles) - Good State */}
              <g transform="translate(250, 300)">
                 <circle cx="0" cy="0" r="30" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" />
                 <circle cx="0" cy="0" r="8" fill="#10b981" />
                 <rect x="-140" y="-20" width="120" height="40" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1" />
                 <text x="-130" y="-5" fill="#fff" fontSize="12" fontWeight="bold">Los Angeles</text>
                 <text x="-130" y="10" fill="#10b981" fontSize="10">Doors Opening</text>
              </g>

              {/* Data Connections / Network Flow */}
              <path d="M 250 300 Q 350 400 450 450" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="10 5" className="animate-[dash_2s_linear_infinite]" opacity="0.5" />
              <path d="M 450 450 Q 600 350 750 250" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="10 5" className="animate-[dash_2s_linear_infinite_reverse]" opacity="0.5" />

              <style jsx>{`
                @keyframes dash {
                  to { stroke-dashoffset: -30; }
                }
              `}</style>
            </svg>
          </div>
          
          <div className="grid grid-cols-4 gap-4 mt-4">
             <div className="bg-slate-900/80 border border-slate-700 p-3 rounded-xl">
               <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Total F&B Rev</div>
               <div className="text-lg font-black text-white">$4.8M</div>
             </div>
             <div className="bg-slate-900/80 border border-slate-700 p-3 rounded-xl">
               <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Merch Rev</div>
               <div className="text-lg font-black text-white">$2.1M</div>
             </div>
             <div className="bg-slate-900/80 border border-slate-700 p-3 rounded-xl">
               <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Energy Offset</div>
               <div className="text-lg font-black text-emerald-400">14.2MWh</div>
             </div>
             <div className="bg-slate-900/80 border border-slate-700 p-3 rounded-xl">
               <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">System Health</div>
               <div className="text-lg font-black text-emerald-400">99.98%</div>
             </div>
          </div>
        </div>

        {/* AI Executive Briefing & Predictive Insights */}
        <div className="flex-1 flex flex-col gap-4 min-w-[320px]">
          
          {/* AI Executive Briefing */}
          <div className="glass-panel p-5 rounded-2xl border border-indigo-500/30 bg-indigo-900/10">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><Zap size={14} className="text-indigo-400" /> AI Executive Briefing</h3>
            
            <div className="space-y-4">
              <div className="bg-slate-900/80 rounded-xl p-4 border border-indigo-500/30">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <TrendingUp size={14} className="text-indigo-400" /> Revenue Opportunity
                  </div>
                  <span className="text-[10px] bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded">High Impact</span>
                </div>
                <p className="text-xs text-slate-400 mb-3">AI predicts a 15% surge in merch sales in NY Stadium at halftime due to cooler weather. Suggest deploying mobile POS units to Sectors 200-210.</p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/50 text-indigo-400 text-xs py-1.5 rounded-lg transition-colors font-bold flex justify-center items-center gap-1">
                    Authorize POS Deploy <ArrowUpRight size={12}/>
                  </button>
                </div>
              </div>

              <div className="bg-slate-900/80 rounded-xl p-4 border border-orange-500/30">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <ShieldAlert size={14} className="text-orange-400" /> Operational Warning
                  </div>
                </div>
                <p className="text-xs text-slate-400">Transit delays in Los Angeles may cause a late influx of fans (T-20m). Automated gate redirection protocol is ready to execute.</p>
              </div>
            </div>
          </div>

          {/* Tournament Overview KPIs */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 flex-1">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><BarChart3 size={14} className="text-blue-400" /> Sustainability & Financials</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Revenue to Target</span>
                  <span className="text-emerald-400 font-bold">104%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Net Zero Carbon Target Progress</span>
                  <span className="text-blue-400 font-bold">88%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Operational Cost Efficiency</span>
                  <span className="text-indigo-400 font-bold">94%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-indigo-500 h-full rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
