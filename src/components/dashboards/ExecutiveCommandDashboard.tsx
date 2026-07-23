"use client";
import React, { useState, useEffect } from 'react';
import { Target, TrendingUp, DollarSign, Users, ShieldAlert, BarChart3, Activity, Map, ArrowUpRight, Zap, CheckCircle2, Radio, X, Brain } from 'lucide-react';
import UniversalAIResponse, { AIResponseData } from '../workspaces/UniversalAIResponse';

export default function ExecutiveCommandDashboard() {
  const [time, setTime] = useState(0);
  const [selectedResponse, setSelectedResponse] = useState<AIResponseData | null>(null);

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const PUBLIC_ACTIONS: Record<string, AIResponseData> = {
    pos_deploy: {
      summary: "Mobile Merchandise & Food POS Deployment Authorized",
      reasoning: "Cooler halftime weather in New York is driving a predicted 15% surge in fan demand. Deploying 5 mobile concession units prevents queue build-up.",
      data: "Expected Sales Boost: +$45,000 | Sector Queue Reduced by 40%",
      recommendation: "Deploy Mobile Units to Sectors 200-210 immediately.",
      alternatives: "Keep stationary concessions open 15 minutes post-match.",
      risk: "Low — Extra staffing already present on concourse.",
      predictedOutcome: "Smooth fan concession flow and zero line bottlenecks.",
      confidence: 96,
      timeSaved: "12 Minutes Per Fan",
      usersAffected: "4,500 Spectators"
    },
    gate_redirect: {
      summary: "Automated Fan Ingress & Metro Diversion Protocol",
      reasoning: "Metro Line 2 transit surge arriving at Los Angeles Stadium. Gate B turnstiles reaching 92% capacity.",
      data: "Current Gate B Wait Time: 14 Mins | Gate C Wait Time: 2 Mins",
      recommendation: "Redirect incoming fans to Gate C via LED signage & PA system.",
      alternatives: "Open Gate B emergency overflow turnstiles.",
      risk: "None — Gate C has 12 open turnstiles ready.",
      predictedOutcome: "Ingress wait times normalize to under 3 minutes for all fans.",
      confidence: 98,
      timeSaved: "14 Minutes Per Fan",
      usersAffected: "6,200 Spectators"
    },
    new_york: {
      summary: "New York Stadium Live Command Status",
      reasoning: "Match active. Stadium operating at 92% capacity with 82,000 fans present. All safety & HVAC systems optimal.",
      data: "Attendance: 82,000 | F&B Rev: $1.8M | Energy Offset: 5.2MWh",
      recommendation: "Prepare halftime crowd flow diversion for Sectors 100-120.",
      alternatives: "Maintain current flow protocol.",
      risk: "Low — All emergency exits clear.",
      predictedOutcome: "Match completion with zero crowd incidents.",
      confidence: 99,
      timeSaved: "15 Minutes",
      usersAffected: "82,000 Fans"
    },
    mexico: {
      summary: "Mexico City Stadium Pre-Match Preparation",
      reasoning: "Pre-match preparation (T-45m). Gates open and fan ingress progressing smoothly across all entry points.",
      data: "Ingress Flow: 1,400 Fans/Min | Turnstile Speed: 1.2s",
      recommendation: "Maintain automated entry scanners and digital ticket validation.",
      risk: "None",
      predictedOutcome: "Stadium reaches 100% seating capacity 10 minutes prior to kickoff.",
      confidence: 97,
      timeSaved: "10 Minutes",
      usersAffected: "87,500 Fans"
    },
    la: {
      summary: "Los Angeles Stadium Ingress Status",
      reasoning: "Doors opening for evening fixture. Metro shuttle arrival stream actively monitored by AI Vision sensors.",
      data: "Bus Shuttles Active: 48 | Metro Headway: 3 Mins",
      recommendation: "Sync transit shuttle dispatch with stadium gate turnstile speeds.",
      risk: "Low",
      predictedOutcome: "On-time kickoff with full crowd seating.",
      confidence: 95,
      timeSaved: "8 Minutes",
      usersAffected: "70,000 Fans"
    }
  };

  return (
    <div className="h-auto lg:h-full w-full flex flex-col bg-[#0A0015] text-white overflow-visible lg:overflow-hidden p-4 lg:p-6 gap-6 relative">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 shrink-0 z-10">
        <div>
          <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
            Executive Command & Control
            <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30 animate-pulse">
              Live Global View
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">Multi-stadium tournament KPIs, fan attendance analytics, and live AI command operations</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
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

      <div className="flex-1 flex flex-col xl:flex-row gap-6 min-h-0 z-10">
        
        {/* Main Operational Visualization (Multi-Stadium Command Canvas) */}
        <div className="flex-[2] glass-panel min-h-[420px] lg:min-h-0 rounded-3xl border border-slate-700/50 p-4 sm:p-6 flex flex-col relative overflow-hidden bg-slate-900/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <div className="flex justify-between items-center mb-4 z-10">
             <h3 className="font-bold text-sm sm:text-lg flex items-center gap-2">
               <Radio size={18} className="text-indigo-400 animate-pulse"/> 
               Multi-Stadium Live Operations Canvas
             </h3>
             <div className="flex gap-2">
                <span className="px-2.5 py-1 bg-slate-800 text-xs font-bold rounded-lg border border-slate-700 text-slate-300">
                  Click Stadium to View Public Status
                </span>
             </div>
          </div>
          
          {/* Interactive SVG Canvas */}
          <div className="w-full min-h-[320px] lg:min-h-0 flex-1 relative border border-slate-700/80 rounded-2xl bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full">
              
              <defs>
                <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59,130,246,0.08)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="1000" height="600" fill="url(#gridPattern)" />

              {/* Map Base (Abstract Continental Shape) */}
              <path d="M 200 100 Q 400 50 600 100 T 900 200 Q 850 400 700 500 T 300 500 Q 150 400 100 250 Z" fill="#0f172a" stroke="#1e293b" strokeWidth="2" opacity="0.6" />
              
              {/* Stadium Node 1: MetLife (New York) */}
              <g transform="translate(750, 240)" className="cursor-pointer group" onClick={() => setSelectedResponse(PUBLIC_ACTIONS.new_york)}>
                 <circle cx="0" cy="0" r="45" fill="none" stroke="#eab308" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[spin_12s_linear_infinite]" />
                 <circle cx="0" cy="0" r="16" fill="#eab308" fillOpacity="0.25" className="animate-ping" />
                 <circle cx="0" cy="0" r="9" fill="#eab308" />
                 <rect x="25" y="-30" width="140" height="60" rx="10" fill="#0f172a" stroke="#eab308" strokeWidth="1.5" className="group-hover:stroke-yellow-300 transition-colors" />
                 <text x="35" y="-8" fill="#fff" fontSize="12" fontWeight="bold">New York Stadium</text>
                 <text x="35" y="8" fill="#eab308" fontSize="10">Match Active (82,000 Fans)</text>
                 <text x="35" y="22" fill="#3b82f6" fontSize="9" fontWeight="bold">Click for Public Status →</text>
              </g>

              {/* Stadium Node 2: Azteca (Mexico City) */}
              <g transform="translate(450, 440)" className="cursor-pointer group" onClick={() => setSelectedResponse(PUBLIC_ACTIONS.mexico)}>
                 <circle cx="0" cy="0" r="35" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" />
                 <circle cx="0" cy="0" r="9" fill="#10b981" />
                 <rect x="20" y="-25" width="140" height="50" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" className="group-hover:stroke-emerald-300 transition-colors" />
                 <text x="30" y="-5" fill="#fff" fontSize="12" fontWeight="bold">Mexico City Stadium</text>
                 <text x="30" y="10" fill="#10b981" fontSize="10">Pre-Match (T-45m)</text>
                 <text x="30" y="21" fill="#3b82f6" fontSize="9" fontWeight="bold">Click for Public Status →</text>
              </g>

              {/* Stadium Node 3: SoFi (Los Angeles) */}
              <g transform="translate(250, 290)" className="cursor-pointer group" onClick={() => setSelectedResponse(PUBLIC_ACTIONS.la)}>
                 <circle cx="0" cy="0" r="35" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" />
                 <circle cx="0" cy="0" r="9" fill="#3b82f6" />
                 <rect x="-155" y="-25" width="140" height="50" rx="10" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" className="group-hover:stroke-blue-300 transition-colors" />
                 <text x="-145" y="-5" fill="#fff" fontSize="12" fontWeight="bold">Los Angeles Stadium</text>
                 <text x="-145" y="10" fill="#3b82f6" fontSize="10">Doors Opening</text>
                 <text x="-145" y="21" fill="#3b82f6" fontSize="9" fontWeight="bold">Click for Public Status →</text>
              </g>

              {/* Data Connections / Network Flow */}
              <path d="M 250 290 Q 350 390 450 440" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="10 5" className="animate-[dash_2s_linear_infinite]" opacity="0.7" />
              <path d="M 450 440 Q 600 340 750 240" fill="none" stroke="#eab308" strokeWidth="2.5" strokeDasharray="10 5" className="animate-[dash_2s_linear_infinite_reverse]" opacity="0.7" />

              <style jsx>{`
                @keyframes dash {
                  to { stroke-dashoffset: -30; }
                }
              `}</style>
            </svg>
          </div>
          
          {/* Telemetry Summary Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-4">
             <div className="bg-slate-900/80 border border-slate-700 p-3 rounded-xl">
               <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Total F&B Rev</div>
               <div className="text-lg font-black text-white">$4.8M</div>
             </div>
             <div className="bg-slate-900/80 border border-slate-700 p-3 rounded-xl">
               <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Merch Rev</div>
               <div className="text-lg font-black text-white">$2.1M</div>
             </div>
             <div className="bg-slate-900/80 border border-slate-700 p-3 rounded-xl">
               <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Energy Offset</div>
               <div className="text-lg font-black text-emerald-400">14.2MWh</div>
             </div>
             <div className="bg-slate-900/80 border border-slate-700 p-3 rounded-xl">
               <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">System Health</div>
               <div className="text-lg font-black text-emerald-400">99.98%</div>
             </div>
          </div>
        </div>

        {/* AI Executive Briefing & Interactive Action Workflows */}
        <div className="flex-1 flex flex-col gap-4 w-full lg:min-w-[340px]">
          
          {/* AI Executive Briefing */}
          <div className="glass-panel p-5 rounded-2xl border border-indigo-500/30 bg-indigo-900/10">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
              <Zap size={14} className="text-indigo-400" /> 
              AI Operational Recommendations & Actions
            </h3>
            
            <div className="space-y-4">
              
              {/* Action 1: Merch POS */}
              <div className="bg-slate-900/80 rounded-xl p-4 border border-indigo-500/30 hover:border-indigo-500 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <TrendingUp size={14} className="text-indigo-400" /> Mobile Concession Surge
                  </div>
                  <span className="text-[10px] bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded font-bold">High Impact</span>
                </div>
                <p className="text-xs text-slate-400 mb-3">AI predicts a 15% surge in merch sales in NY Stadium at halftime due to cooler weather. Deploying mobile POS units eliminates concession queues.</p>
                <button 
                  onClick={() => setSelectedResponse(PUBLIC_ACTIONS.pos_deploy)}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs py-2 rounded-lg transition-all font-extrabold flex justify-center items-center gap-1.5 shadow-lg active:scale-95 cursor-pointer"
                >
                  Click to View Public AI Response <ArrowUpRight size={14}/>
                </button>
              </div>

              {/* Action 2: Gate Redirection */}
              <div className="bg-slate-900/80 rounded-xl p-4 border border-orange-500/30 hover:border-orange-500 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <ShieldAlert size={14} className="text-orange-400" /> Transit Gate Redirection
                  </div>
                  <span className="text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded font-bold">Urgent</span>
                </div>
                <p className="text-xs text-slate-400 mb-3">Metro transit arrival in Los Angeles causing Gate B turnstile queues. Automated redirection guides fans to Gate C.</p>
                <button 
                  onClick={() => setSelectedResponse(PUBLIC_ACTIONS.gate_redirect)}
                  className="w-full bg-orange-600 hover:bg-orange-500 text-white text-xs py-2 rounded-lg transition-all font-extrabold flex justify-center items-center gap-1.5 shadow-lg active:scale-95 cursor-pointer"
                >
                  Click to View Public AI Response <ArrowUpRight size={14}/>
                </button>
              </div>

            </div>
          </div>

          {/* Tournament Overview KPIs */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 flex-1">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
              <BarChart3 size={14} className="text-blue-400" /> 
              Sustainability & Financial Metrics
            </h3>
            
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

      {/* Human-Understandable Public AI Response Modal Popup */}
      {selectedResponse && (
        <div className="fixed inset-0 z-50 bg-[#0A0015]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-4 sm:p-5 border-b border-slate-700/60 bg-slate-800/80 flex justify-between items-center">
              <h3 className="font-extrabold text-white text-base sm:text-lg flex items-center gap-2.5">
                <Brain size={20} className="text-purple-400 animate-pulse"/> 
                Public AI Operations Response
              </h3>
              <button 
                onClick={() => setSelectedResponse(null)}
                className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="p-4 sm:p-6 overflow-y-auto custom-scrollbar">
              <UniversalAIResponse response={selectedResponse} />
              
              <button
                onClick={() => setSelectedResponse(null)}
                className="w-full mt-3 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-extrabold text-sm transition-all shadow-lg active:scale-95"
              >
                Close Response Panel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
