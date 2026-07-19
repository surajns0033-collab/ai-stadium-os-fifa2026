import React, { useState, useEffect } from 'react';
import { Languages, Volume2, MessageSquare, Mic2, Brain, CheckCircle2 } from 'lucide-react';

export default function LanguageCenterDashboard() {
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
            Language & Accessibility Center
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-pink-500/20 text-pink-400 rounded border border-pink-500/30">Live Translation</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">Real-time sign language avatars, PA translations, and app streaming</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Active Streams</div>
            <div className="text-xl font-black text-white">24 <span className="text-xs text-pink-400 font-normal">Languages</span></div>
          </div>
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Connected Devices</div>
            <div className="text-xl font-black text-white">12.4k <span className="text-xs text-slate-400 font-normal">Listening</span></div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0 z-10">
        
        {/* Main SVG Visualization */}
        <div className="flex-1 glass-panel rounded-3xl border border-slate-700/50 p-6 flex flex-col relative overflow-hidden bg-slate-900/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <h3 className="font-bold text-lg mb-4 z-10 flex items-center gap-2"><Languages size={18} className="text-pink-400"/> Translation Routing Engine</h3>
          
          <div className="flex-1 relative border border-slate-700 rounded-2xl bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full">
              {/* Input Source */}
              <g transform="translate(150, 300)">
                 <circle cx="0" cy="0" r="60" fill="#1e293b" stroke="#e20074" strokeWidth="2" />
                 <text x="0" y="-10" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">ENGLISH</text>
                 <text x="0" y="10" textAnchor="middle" fill="#e20074" fontSize="12">Source Audio</text>
                 <circle cx="0" cy="0" r="40" fill="none" stroke="#e20074" strokeWidth="2" className="animate-ping" />
              </g>

              {/* AI Core */}
              <rect x="400" y="200" width="200" height="200" rx="20" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
              <text x="500" y="290" textAnchor="middle" fill="#60a5fa" fontSize="24" fontWeight="bold">AI TRANSLATION</text>
              <text x="500" y="320" textAnchor="middle" fill="#3b82f6" fontSize="12">Latency: &lt;10ms</text>
              <circle cx="500" cy="350" r="4" fill="#3b82f6" className="animate-pulse" />

              {/* Output Streams */}
              {/* Spanish */}
              <g transform="translate(850, 100)">
                 <rect x="-60" y="-30" width="120" height="60" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
                 <text x="0" y="5" textAnchor="middle" fill="#a7f3d0" fontSize="14" fontWeight="bold">SPANISH</text>
              </g>
              {/* French */}
              <g transform="translate(850, 200)">
                 <rect x="-60" y="-30" width="120" height="60" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
                 <text x="0" y="5" textAnchor="middle" fill="#a7f3d0" fontSize="14" fontWeight="bold">FRENCH</text>
              </g>
              {/* Arabic */}
              <g transform="translate(850, 300)">
                 <rect x="-60" y="-30" width="120" height="60" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
                 <text x="0" y="5" textAnchor="middle" fill="#a7f3d0" fontSize="14" fontWeight="bold">ARABIC</text>
              </g>
              {/* ASL Avatar */}
              <g transform="translate(850, 400)">
                 <rect x="-60" y="-30" width="120" height="60" rx="8" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />
                 <text x="0" y="-5" textAnchor="middle" fill="#c084fc" fontSize="14" fontWeight="bold">ASL AVATAR</text>
                 <text x="0" y="15" textAnchor="middle" fill="#a855f7" fontSize="10">Big Screens</text>
              </g>
              {/* Subtitles */}
              <g transform="translate(850, 500)">
                 <rect x="-60" y="-30" width="120" height="60" rx="8" fill="#0f172a" stroke="#eab308" strokeWidth="2" />
                 <text x="0" y="-5" textAnchor="middle" fill="#fef08a" fontSize="14" fontWeight="bold">SUBTITLES</text>
                 <text x="0" y="15" textAnchor="middle" fill="#eab308" fontSize="10">Fan App</text>
              </g>

              {/* Data Lines */}
              <path d="M 210 300 L 400 300" stroke="#e20074" strokeWidth="4" strokeDasharray="5 5" className="animate-[dash_1s_linear_infinite]" />
              <path d="M 600 250 L 790 100" stroke="#10b981" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_2s_linear_infinite]" />
              <path d="M 600 280 L 790 200" stroke="#10b981" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_2s_linear_infinite]" />
              <path d="M 600 300 L 790 300" stroke="#10b981" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_2s_linear_infinite]" />
              <path d="M 600 320 L 790 400" stroke="#a855f7" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_2s_linear_infinite]" />
              <path d="M 600 350 L 790 500" stroke="#eab308" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_2s_linear_infinite]" />

              <style jsx>{`
                @keyframes dash {
                  to { stroke-dashoffset: -20; }
                }
              `}</style>
            </svg>
          </div>
        </div>

        {/* AI Insights & Alerts */}
        <div className="w-[350px] shrink-0 flex flex-col gap-4">
          
          <div className="glass-panel p-5 rounded-2xl border border-slate-700/50 bg-pink-900/10">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><Brain size={14} className="text-pink-400" /> Auto-Translation Status</h3>
            
            <div className="bg-slate-900/80 rounded-xl p-4 border border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.1)] mb-4 relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1 h-full bg-pink-500"></div>
              <div className="flex items-start gap-3">
                <Mic2 size={18} className="text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white mb-1">Live PA Intercept Active</div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">All public announcements are currently being transcribed, translated into 24 languages, and streamed to the Fan App in real-time.</p>
                  <div className="flex gap-2">
                     <span className="text-[10px] px-2 py-1 bg-green-500/20 text-green-400 rounded border border-green-500/20">Zero Dropout</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700">
                 <Volume2 size={16} className="text-blue-400 mb-1" />
                 <div className="text-xs text-slate-400 uppercase font-bold">Audio Channels</div>
                 <div className="text-lg font-black text-white">24</div>
              </div>
              <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700">
                 <MessageSquare size={16} className="text-blue-400 mb-1" />
                 <div className="text-xs text-slate-400 uppercase font-bold">Text Channels</div>
                 <div className="text-lg font-black text-white">48</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
