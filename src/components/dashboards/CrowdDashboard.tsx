"use client";
import React, { useState, useEffect } from 'react';
import { Users, Clock, AlertTriangle, ArrowRight, Activity, Brain, Play, FastForward, Rewind, Info } from 'lucide-react';

export default function CrowdDashboard() {
  const [timeMode, setTimeMode] = useState<'live' | 'replay' | 'predictive'>('live');

  // KPIs
  const kpis = [
    { label: 'Live Stadium Population', value: '42,504', trend: '+1,200/min', color: 'text-[#2B7CE4]' },
    { label: 'Average Queue Time', value: '4m 12s', trend: '-30s', color: 'text-[#1AA65D]' },
    { label: 'Congestion Risk', value: timeMode === 'predictive' ? 'High' : 'Moderate', trend: 'Watch North Gate', color: timeMode === 'predictive' ? 'text-[#E20074]' : 'text-yellow-400' },
    { label: 'Predicted Entry Rate', value: '2.4k/min', trend: 'Steady', color: 'text-purple-400' }
  ];

  // Map state based on timeMode
  const getDensityColor = (zone: string) => {
    if (timeMode === 'predictive' && zone === 'north') return '#E20074'; // High density prediction
    if (zone === 'north') return '#eab308'; // yellow
    if (zone === 'south') return '#1AA65D';
    if (zone === 'east') return '#1AA65D';
    if (zone === 'west') return '#eab308';
    return '#2B7CE4';
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0A0015] overflow-hidden text-white relative">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2B7CE4]/5 rounded-full blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E20074]/5 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="p-6 pb-2 z-10 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Crowd Intelligence
          </h2>
          <p className="text-slate-400 text-sm mt-1">Live operational visualization, density mapping & predictive flow</p>
        </div>
        
        {/* Timeline Playback Controls */}
        <div className="glass-panel border border-slate-700/50 p-2 rounded-2xl flex items-center gap-2 bg-slate-900/60 backdrop-blur-xl">
          <button 
            onClick={() => setTimeMode('replay')}
            className={`p-2 rounded-xl transition-all ${timeMode === 'replay' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            <Rewind size={18} />
          </button>
          
          <div className="w-px h-6 bg-slate-700 mx-1"></div>
          
          <button 
            onClick={() => setTimeMode('live')}
            className={`px-4 py-1.5 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              timeMode === 'live' 
                ? 'bg-[#E20074]/20 text-[#E20074] border border-[#E20074]/40 shadow-[0_0_15px_rgba(226,0,116,0.2)]' 
                : 'text-slate-400 hover:text-white border border-transparent'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${timeMode === 'live' ? 'bg-[#E20074] animate-pulse' : 'bg-slate-500'}`}></span>
            Live
          </button>

          <div className="w-px h-6 bg-slate-700 mx-1"></div>
          
          <button 
            onClick={() => setTimeMode('predictive')}
            className={`px-4 py-1.5 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              timeMode === 'predictive' 
                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/40 shadow-[0_0_15px_rgba(43,124,228,0.2)]' 
                : 'text-slate-400 hover:text-white border border-transparent'
            }`}
          >
            <Brain size={14} className={timeMode === 'predictive' ? 'animate-pulse' : ''} />
            +30m AI Predict
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4 px-6 py-4 z-10">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="glass-panel p-4 rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-md">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{kpi.label}</h4>
            <div className={`text-2xl font-black ${kpi.color} flex items-center justify-between`}>
              {kpi.value}
              <span className="text-xs font-bold text-slate-300 bg-slate-800 px-2 py-1 rounded-full border border-slate-600">
                {kpi.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Visualization Area */}
      <div className="flex-1 p-6 z-10 flex gap-6 min-h-0">
        
        {/* Left: Stadium Map SVG */}
        <div className="flex-1 glass-panel rounded-3xl border border-slate-700/50 bg-[#05000A]/80 backdrop-blur-xl relative overflow-hidden flex items-center justify-center">
          
          {/* Map Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

          {/* Stadium Visualization */}
          <div className="relative w-full max-w-3xl aspect-[4/3]">
            {/* Base Stadium Structure */}
            <svg viewBox="0 0 800 600" className="w-full h-full drop-shadow-[0_0_30px_rgba(43,124,228,0.2)]">
              {/* Outer concourse */}
              <rect x="50" y="50" width="700" height="500" rx="150" fill="none" stroke="#1e293b" strokeWidth="10" />
              {/* Inner Seating */}
              <rect x="150" y="100" width="500" height="400" rx="100" fill="none" stroke="#334155" strokeWidth="30" />
              {/* Pitch */}
              <rect x="250" y="180" width="300" height="240" rx="20" fill="#1AA65D" fillOpacity="0.1" stroke="#1AA65D" strokeWidth="2" />
              
              {/* Density Heatmaps */}
              <g style={{ mixBlendMode: 'screen' }}>
                {/* North Zone */}
                <circle cx="400" cy="115" r="80" fill={getDensityColor('north')} fillOpacity="0.2" filter="blur(20px)" />
                <circle cx="400" cy="115" r="40" fill={getDensityColor('north')} fillOpacity="0.4" filter="blur(10px)" />
                
                {/* South Zone */}
                <circle cx="400" cy="485" r="60" fill={getDensityColor('south')} fillOpacity="0.2" filter="blur(15px)" />
                
                {/* East Zone */}
                <circle cx="635" cy="300" r="70" fill={getDensityColor('east')} fillOpacity="0.2" filter="blur(15px)" />
                
                {/* West Zone */}
                <circle cx="165" cy="300" r="70" fill={getDensityColor('west')} fillOpacity="0.2" filter="blur(15px)" />
              </g>

              {/* Dynamic Flow Paths */}
              <defs>
                <marker id="arrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                  <polygon points="0 0, 6 2, 0 4" fill="#2B7CE4" />
                </marker>
                <marker id="arrow-alert" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                  <polygon points="0 0, 6 2, 0 4" fill="#E20074" />
                </marker>
                <marker id="arrow-ai" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                  <polygon points="0 0, 6 2, 0 4" fill="#a855f7" />
                </marker>
              </defs>

              {/* Entry Flows */}
              <g className="animate-[dash_3s_linear_infinite]" strokeDasharray="10 10">
                {/* North Flow (Congested in predictive mode) */}
                <path d="M 400 0 L 400 100" fill="none" stroke={timeMode === 'predictive' ? '#E20074' : '#2B7CE4'} strokeWidth="4" markerEnd={timeMode === 'predictive' ? 'url(#arrow-alert)' : 'url(#arrow)'} />
                <path d="M 380 -20 Q 400 50 380 100" fill="none" stroke={timeMode === 'predictive' ? '#E20074' : '#2B7CE4'} strokeWidth="2" opacity="0.6" />
                <path d="M 420 -20 Q 400 50 420 100" fill="none" stroke={timeMode === 'predictive' ? '#E20074' : '#2B7CE4'} strokeWidth="2" opacity="0.6" />
                
                {/* South Flow */}
                <path d="M 400 600 L 400 500" fill="none" stroke="#2B7CE4" strokeWidth="4" markerEnd="url(#arrow)" />
                
                {/* West Flow */}
                <path d="M 0 300 L 100 300" fill="none" stroke="#2B7CE4" strokeWidth="4" markerEnd="url(#arrow)" />
                
                {/* East Flow */}
                <path d="M 800 300 L 700 300" fill="none" stroke="#2B7CE4" strokeWidth="4" markerEnd="url(#arrow)" />
              </g>

              {/* AI Recommended Alternative Routes (Visible only in predictive mode) */}
              {timeMode === 'predictive' && (
                <g className="animate-[dash_2s_linear_infinite]" strokeDasharray="15 15">
                  <path d="M 380 0 Q 200 50 120 280" fill="none" stroke="#a855f7" strokeWidth="3" markerEnd="url(#arrow-ai)" />
                  <path d="M 420 0 Q 600 50 680 280" fill="none" stroke="#a855f7" strokeWidth="3" markerEnd="url(#arrow-ai)" />
                  <text x="200" y="80" fill="#a855f7" fontSize="12" fontWeight="bold" className="drop-shadow-lg">AI DIVERT TO WEST</text>
                  <text x="500" y="80" fill="#a855f7" fontSize="12" fontWeight="bold" className="drop-shadow-lg">AI DIVERT TO EAST</text>
                </g>
              )}

            </svg>

            <style jsx>{`
              @keyframes dash {
                to { stroke-dashoffset: -40; }
              }
            `}</style>
            
            {/* Gate Labels */}
            <div className="absolute top-[8%] left-1/2 -translate-x-1/2 bg-black/80 px-3 py-1 rounded border border-slate-700 text-xs font-bold shadow-xl backdrop-blur-md">
              <div className="text-slate-400 mb-0.5 uppercase tracking-wider text-[9px]">North Gate (Main)</div>
              <div className={`flex items-center gap-2 ${timeMode === 'predictive' ? 'text-[#E20074]' : 'text-yellow-400'}`}>
                <Activity size={12}/> {timeMode === 'predictive' ? 'Critical Queue Formation' : 'High Density'}
              </div>
            </div>
            
            <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 bg-black/80 px-3 py-1 rounded border border-slate-700 text-xs font-bold shadow-xl backdrop-blur-md">
              <div className="text-slate-400 mb-0.5 uppercase tracking-wider text-[9px]">South Gate (VIP)</div>
              <div className="flex items-center gap-2 text-[#1AA65D]">
                <Activity size={12}/> Flow Steady
              </div>
            </div>

            <div className="absolute left-[8%] top-1/2 -translate-y-1/2 bg-black/80 px-3 py-1 rounded border border-slate-700 text-xs font-bold shadow-xl backdrop-blur-md">
              <div className="text-slate-400 mb-0.5 uppercase tracking-wider text-[9px]">West Gate</div>
              <div className="flex items-center gap-2 text-yellow-400">
                <Activity size={12}/> Moderate
              </div>
            </div>

            <div className="absolute right-[8%] top-1/2 -translate-y-1/2 bg-black/80 px-3 py-1 rounded border border-slate-700 text-xs font-bold shadow-xl backdrop-blur-md">
              <div className="text-slate-400 mb-0.5 uppercase tracking-wider text-[9px]">East Gate</div>
              <div className="flex items-center gap-2 text-[#1AA65D]">
                <Activity size={12}/> Flow Steady
              </div>
            </div>

          </div>

          {/* Overlay Context Info */}
          <div className="absolute bottom-6 right-6 glass-panel p-4 rounded-2xl border border-slate-700/50 bg-slate-900/80 backdrop-blur-xl max-w-sm">
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <Info size={16} className="text-blue-400"/> Operational State
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {timeMode === 'live' && "Crowd density is actively peaking at the North Gate. Entry flow is steady at 2.4k/min."}
              {timeMode === 'replay' && "Historical playback shows steady queue formation over the last 15 minutes due to Metro surge."}
              {timeMode === 'predictive' && "AI predicts severe bottleneck at North Gate in 30m. Recommend deploying flow-diversion signage to East/West gates immediately."}
            </p>
          </div>
        </div>

        {/* Right: AI Drill-down Analytics */}
        <div className="w-96 flex flex-col gap-4 min-h-0">
          
          <div className="flex-1 glass-panel rounded-3xl p-5 border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl overflow-y-auto custom-scrollbar">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Brain size={14} className="text-purple-400"/> AI Recommendations
            </h3>
            
            <div className="space-y-3">
              <div className="p-3 bg-[#E20074]/10 border border-[#E20074]/30 rounded-xl relative overflow-hidden group hover:border-[#E20074]/60 transition-all cursor-pointer">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#E20074]"></div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-[#E20074]">URGENT DIVERSION</span>
                  <span className="text-[10px] text-slate-400">98% Confidence</span>
                </div>
                <p className="text-sm text-slate-200 mb-3">Divert 30% of incoming North Gate traffic to East/West gates using digital signage.</p>
                <button className="w-full py-2 bg-[#E20074]/20 hover:bg-[#E20074]/30 text-[#E20074] rounded-lg text-xs font-bold transition-colors">
                  EXECUTE DIVERSION
                </button>
              </div>

              <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-xl relative overflow-hidden group hover:border-blue-500/60 transition-all cursor-pointer">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-blue-400">VOLUNTEER DEPLOYMENT</span>
                  <span className="text-[10px] text-slate-400">92% Confidence</span>
                </div>
                <p className="text-sm text-slate-200 mb-3">Deploy 12 additional crowd-control volunteers to North Gate concourse.</p>
                <button className="w-full py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg text-xs font-bold transition-colors">
                  DISPATCH TEAM
                </button>
              </div>
            </div>
            
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-6 mb-4 flex items-center gap-2">
              <Activity size={14} className="text-slate-400"/> Queue Formation Data
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 rounded-lg bg-slate-800/50">
                <span className="text-xs text-slate-300">North Gate</span>
                <span className="text-xs font-bold text-[#E20074]">12m wait</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg bg-slate-800/50">
                <span className="text-xs text-slate-300">South Gate</span>
                <span className="text-xs font-bold text-[#1AA65D]">2m wait</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg bg-slate-800/50">
                <span className="text-xs text-slate-300">East Gate</span>
                <span className="text-xs font-bold text-[#1AA65D]">3m wait</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg bg-slate-800/50">
                <span className="text-xs text-slate-300">West Gate</span>
                <span className="text-xs font-bold text-yellow-400">6m wait</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
