import React, { useState, useEffect } from 'react';
import { Leaf, Wind, Droplet, Zap, Recycle, BarChart3, TrendingDown, Sun } from 'lucide-react';

export default function SustainabilityDashboard() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-auto xl:h-full w-full flex flex-col bg-[#0A0015] text-white overflow-visible xl:overflow-hidden p-4 xl:p-6 gap-6 relative">
      <div className="flex justify-between items-end shrink-0 z-10">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-white flex items-center gap-3">
            Sustainability & Environment
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-emerald-500/20 text-emerald-400 rounded border border-emerald-500/30">Net Zero Target</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">Live tracking of energy, water, and waste with AI optimization</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Carbon Emissions</div>
            <div className="text-xl font-black text-emerald-400">-12% <span className="text-xs text-slate-400 font-normal">vs target</span></div>
          </div>
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Grid Status</div>
            <div className="text-xl font-black text-white flex items-center gap-2"><Sun size={18} className="text-yellow-400" /> 60% Solar</div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col xl:flex-row gap-6 min-h-0 z-10">
        
        {/* Main Operational Visualization (Resource Flow SVG) */}
        <div className="flex-[2] glass-panel rounded-3xl border border-slate-700/50 p-6 flex flex-col relative overflow-hidden bg-slate-900/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <h3 className="font-bold text-lg mb-4 z-10 flex items-center gap-2"><Leaf size={18} className="text-emerald-400"/> AI Resource Optimization Grid</h3>
          
          <div className="flex-1 relative border border-slate-700 rounded-2xl bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full">
              
              {/* Central Stadium Hub */}
              <g transform="translate(500, 300)">
                 <rect x="-100" y="-80" width="200" height="160" rx="20" fill="#0f172a" stroke="#10b981" strokeWidth="3" />
                 <text x="0" y="-10" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold">STADIUM CORE</text>
                 <text x="0" y="20" textAnchor="middle" fill="#10b981" fontSize="12">Consumption Nodes</text>
              </g>

              {/* Energy Sector (Left) */}
              <g transform="translate(150, 300)">
                 <circle cx="0" cy="0" r="70" fill="#eab308" fillOpacity="0.1" stroke="#eab308" strokeWidth="2" strokeDasharray="10 5" className="animate-[spin_20s_linear_infinite]" />
                 <rect x="-40" y="-30" width="80" height="60" rx="10" fill="#1e293b" />
                 <text x="0" y="0" textAnchor="middle" fill="#eab308" fontSize="14" fontWeight="bold">SOLAR</text>
                 <text x="0" y="15" textAnchor="middle" fill="#fef08a" fontSize="10">2.4 MW</text>
              </g>
              
              {/* Energy Flow Animation */}
              <path d="M 220 300 L 400 300" stroke="#eab308" strokeWidth="6" strokeDasharray="15 10" className="animate-[dash_1s_linear_infinite]" />
              <text x="310" y="290" textAnchor="middle" fill="#eab308" fontSize="10" fontWeight="bold">ENERGY FLOW</text>

              {/* Water Sector (Top) */}
              <g transform="translate(500, 100)">
                 <circle cx="0" cy="0" r="70" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="2" strokeDasharray="10 5" className="animate-[spin_15s_linear_infinite_reverse]" />
                 <rect x="-45" y="-30" width="90" height="60" rx="10" fill="#1e293b" />
                 <text x="0" y="0" textAnchor="middle" fill="#3b82f6" fontSize="14" fontWeight="bold">RAINWATER</text>
                 <text x="0" y="15" textAnchor="middle" fill="#bfdbfe" fontSize="10">Harvest Active</text>
              </g>

              {/* Water Flow Animation */}
              <path d="M 500 170 L 500 220" stroke="#3b82f6" strokeWidth="6" strokeDasharray="15 10" className="animate-[dash_1.5s_linear_infinite_reverse]" />
              <text x="545" y="200" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">WATER FLOW</text>

              {/* Waste Sector (Right) */}
              <g transform="translate(850, 300)">
                 <circle cx="0" cy="0" r="70" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="2" strokeDasharray="10 5" className="animate-[spin_15s_linear_infinite]" />
                 <rect x="-40" y="-30" width="80" height="60" rx="10" fill="#1e293b" />
                 <text x="0" y="0" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold">WASTE</text>
                 <text x="0" y="15" textAnchor="middle" fill="#a7f3d0" fontSize="10">Recycling</text>
              </g>

              {/* Waste Collection Flow Animation (Outbound) */}
              <path d="M 600 300 L 780 300" stroke="#10b981" strokeWidth="6" strokeDasharray="15 10" className="animate-[dash_2s_linear_infinite]" />
              <text x="690" y="290" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">COLLECTION ROUTE</text>

              <style jsx>{`
                @keyframes dash {
                  to { stroke-dashoffset: -30; }
                }
              `}</style>
            </svg>
          </div>
        </div>

        {/* AI Sustainability Insights & KPIs */}
        <div className="flex-1 flex flex-col gap-4 min-w-[320px]">
          
          {/* AI Insights */}
          <div className="glass-panel p-5 rounded-2xl border border-emerald-500/30 bg-emerald-900/10">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><Zap size={14} className="text-emerald-400" /> AI Sustainability Insights</h3>
            
            <div className="space-y-4">
              <div className="bg-slate-900/80 rounded-xl p-4 border border-emerald-500/30">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <Sun size={14} className="text-yellow-400" /> HVAC Optimization
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">Active</span>
                </div>
                <p className="text-xs text-slate-400 mb-3">AI has dynamically reduced HVAC load in Sectors 1-4 due to cooler ambient temperatures and lower crowd density, saving 15% energy.</p>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="text-[10px] text-slate-500 mt-1 text-right">85% Efficiency</div>
              </div>
            </div>
          </div>

          {/* Environmental KPIs */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 flex-1">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><BarChart3 size={14} className="text-blue-400" /> Key Performance Indicators</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Recycling Status (Sorting Efficiency)</span>
                  <span className="text-emerald-400 font-bold">92%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Water Conservation Goal</span>
                  <span className="text-blue-400 font-bold">78%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-slate-800">
                <div className="text-center p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                  <TrendingDown size={16} className="text-emerald-400 mx-auto mb-1" />
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Carbon Offset</div>
                  <div className="text-lg font-black text-white">4.2t</div>
                </div>
                <div className="text-center p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                  <Recycle size={16} className="text-emerald-400 mx-auto mb-1" />
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Waste Diverted</div>
                  <div className="text-lg font-black text-white">12.5t</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
