import React, { useState, useEffect } from 'react';
import { Languages, Volume2, MessageSquare, Mic2, Brain, CheckCircle2, Globe2 } from 'lucide-react';

const TRANSLATIONS: Record<string, { label: string; text: string; audioColor: string }> = {
  es: { label: 'Spanish', text: 'Bienvenido al estadio', audioColor: '#10b981' },
  fr: { label: 'French', text: 'Bienvenue au stade', audioColor: '#3b82f6' },
  ar: { label: 'Arabic', text: 'مرحباً بكم في الملعب', audioColor: '#f59e0b' },
  hi: { label: 'Hindi', text: 'स्टेडियम में आपका स्वागत है', audioColor: '#8b5cf6' },
  ja: { label: 'Japanese', text: 'スタジアムへようこそ', audioColor: '#ef4444' },
};

export default function LanguageCenterDashboard() {
  const [time, setTime] = useState(0);
  const [selectedLang, setSelectedLang] = useState('es');
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const activeTranslation = TRANSLATIONS[selectedLang];

  return (
    <div className="h-auto xl:h-full w-full flex flex-col bg-[#0A0015] text-white overflow-visible xl:overflow-hidden p-4 xl:p-6 gap-6 relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 shrink-0 z-10">
        <div>
          <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
            Language & Accessibility Center
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-pink-500/20 text-pink-400 rounded border border-pink-500/30">Live Translation</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">Real-time PA translations, semantic routing, and fan app streaming</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Active Streams</div>
            <div className="text-xl font-black text-white">24 <span className="text-xs text-pink-400 font-normal">Languages</span></div>
          </div>
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-right flex flex-col justify-center">
            <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Fan Language Select</div>
            <select 
              value={selectedLang} 
              onChange={(e) => setSelectedLang(e.target.value)}
              className="bg-slate-900 border border-pink-500/30 text-white text-sm rounded px-3 py-1 outline-none cursor-pointer hover:border-pink-500/60 transition-colors"
            >
              {Object.entries(TRANSLATIONS).map(([key, data]) => (
                <option key={key} value={key}>{data.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col xl:flex-row gap-6 min-h-0 z-10">
        
        {/* Main SVG Visualization */}
        <div className="flex-1 glass-panel rounded-3xl border border-slate-700/50 p-6 flex flex-col relative overflow-hidden bg-slate-900/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <h3 className="font-bold text-lg mb-4 z-10 flex items-center gap-2"><Globe2 size={18} className="text-pink-400"/> Live Semantic Translation Engine</h3>
          
          <div className="flex-1 relative border border-slate-700 rounded-2xl bg-[#05000A] overflow-hidden">
            <svg viewBox="0 0 1000 600" className="w-full h-full">
              
              {/* Audio Wave Animation Background for Source */}
              <g transform="translate(150, 300)">
                 <circle cx="0" cy="0" r="100" fill="#e20074" fillOpacity="0.05" className="animate-ping" />
                 <circle cx="0" cy="0" r="70" fill="#e20074" fillOpacity="0.1" className="animate-pulse" />
              </g>

              {/* Input Source Node */}
              <g transform="translate(150, 300)">
                 <rect x="-80" y="-40" width="160" height="80" rx="40" fill="#1e293b" stroke="#e20074" strokeWidth="2" />
                 <text x="0" y="-10" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">STADIUM PA</text>
                 <text x="0" y="10" textAnchor="middle" fill="#e20074" fontSize="12">Source: English</text>
                 <text x="0" y="30" textAnchor="middle" fill="#fbcfe8" fontSize="12" fontStyle="italic">"Welcome to the stadium"</text>
              </g>

              {/* Data Transfer Line to AI */}
              <path d="M 230 300 L 400 300" stroke="#e20074" strokeWidth="4" strokeDasharray="10 10" className="animate-[dash_1s_linear_infinite]" />
              <text x="315" y="290" textAnchor="middle" fill="#e20074" fontSize="10" fontWeight="bold">RAW AUDIO</text>

              {/* AI Core Processing */}
              <g transform="translate(500, 300)">
                 <rect x="-100" y="-100" width="200" height="200" rx="20" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
                 
                 {/* Internal Neural Net Visual */}
                 <circle cx="-50" cy="-30" r="4" fill="#60a5fa" className="animate-pulse" />
                 <circle cx="0" cy="-50" r="4" fill="#60a5fa" className="animate-ping" />
                 <circle cx="50" cy="-30" r="4" fill="#60a5fa" className="animate-pulse" />
                 <path d="M -50 -30 L 0 -50 L 50 -30" fill="none" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.5" />

                 <text x="0" y="10" textAnchor="middle" fill="#60a5fa" fontSize="20" fontWeight="bold">AI ENGINE</text>
                 <text x="0" y="30" textAnchor="middle" fill="#3b82f6" fontSize="12">Neural Translation</text>
                 <text x="0" y="50" textAnchor="middle" fill="#93c5fd" fontSize="12">Latency: 8ms</text>
                 <text x="0" y="80" textAnchor="middle" fill="#3b82f6" fontSize="10" className="animate-pulse">PROCESSING SEMANTICS...</text>
              </g>

              {/* Data Transfer Line to Output */}
              <path d="M 600 300 L 770 300" stroke={activeTranslation.audioColor} strokeWidth="4" strokeDasharray="10 10" className="animate-[dash_1.5s_linear_infinite]" />
              <text x="685" y="290" textAnchor="middle" fill={activeTranslation.audioColor} fontSize="10" fontWeight="bold">TEXT & AUDIO STREAM</text>

              {/* Fan App Output Device */}
              <g transform="translate(850, 300)">
                 {/* Phone outline */}
                 <rect x="-60" y="-100" width="120" height="200" rx="16" fill="#1e293b" stroke={activeTranslation.audioColor} strokeWidth="4" />
                 {/* Screen */}
                 <rect x="-50" y="-80" width="100" height="160" rx="8" fill="#0f172a" />
                 
                 {/* App Header */}
                 <rect x="-50" y="-80" width="100" height="25" rx="8" fill={activeTranslation.audioColor} fillOpacity="0.2" />
                 <text x="0" y="-64" textAnchor="middle" fill={activeTranslation.audioColor} fontSize="10" fontWeight="bold">FAN APP - {activeTranslation.label.toUpperCase()}</text>
                 
                 {/* Translation Output Area */}
                 <foreignObject x="-45" y="-45" width="90" height="100">
                    <div className="flex flex-col h-full justify-center items-center text-center">
                       <Mic2 size={24} color={activeTranslation.audioColor} className="animate-pulse mb-2" />
                       <p style={{ color: '#fff', fontSize: '11px', fontWeight: 'bold', lineHeight: '1.2' }}>
                         {activeTranslation.text}
                       </p>
                    </div>
                 </foreignObject>

                 {/* Home Button */}
                 <rect x="-15" y="65" width="30" height="4" rx="2" fill="#334155" />
              </g>

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
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><Brain size={14} className="text-pink-400" /> Language Routing Node</h3>
            
            <div className="bg-slate-900/80 rounded-xl p-4 border border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.1)] mb-4 relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1 h-full bg-pink-500"></div>
              <div className="flex items-start gap-3">
                <Globe2 size={18} className="text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white mb-1">Live Intercept: {activeTranslation.label}</div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    PA announcement detected. Translating into {activeTranslation.label} with semantic context preservation. Delivered to fan device in real-time.
                  </p>
                  <div className="flex gap-2">
                     <span className="text-[10px] px-2 py-1 bg-green-500/20 text-green-400 rounded border border-green-500/20 flex items-center gap-1">
                       <CheckCircle2 size={10} /> Stream Active
                     </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700">
                 <Volume2 size={16} className="text-blue-400 mb-1" />
                 <div className="text-xs text-slate-400 uppercase font-bold">Latency</div>
                 <div className="text-lg font-black text-white">8ms</div>
              </div>
              <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700">
                 <MessageSquare size={16} className="text-blue-400 mb-1" />
                 <div className="text-xs text-slate-400 uppercase font-bold">Accuracy</div>
                 <div className="text-lg font-black text-white">99.4%</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
