"use client";
import React from 'react';
import { Shield, Stethoscope, Users, CheckCircle, Volume2, Globe, ArrowRight } from 'lucide-react';

const NOTIFICATIONS = [
  {
    id: 1,
    domain: 'Security',
    priority: 'High',
    reason: 'Unidentified bag near Section 112.',
    confidence: '98%',
    zone: 'Section 112 (North)',
    suggestedAction: 'Dispatch Security Team Alpha.',
    icon: Shield,
    color: 'text-red-400',
    bgColor: 'bg-red-400/10 border-red-500/20'
  },
  {
    id: 2,
    domain: 'Medical',
    priority: 'Medium',
    reason: 'Heat exhaustion risk increasing.',
    confidence: '85%',
    zone: 'East Sun Deck',
    suggestedAction: 'Send 2 medics with water supplies.',
    icon: Stethoscope,
    color: 'text-pink-400',
    bgColor: 'bg-pink-400/10 border-pink-500/20'
  },
  {
    id: 3,
    domain: 'Crowd',
    priority: 'Low',
    reason: 'Queue building at Gate C.',
    confidence: '92%',
    zone: 'Gate C Entry',
    suggestedAction: 'Open overflow lanes 4 & 5.',
    icon: Users,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10 border-blue-500/20'
  }
];

export default function UniversalNotificationCenter() {
  return (
    <div className="glass-panel rounded-3xl p-6 flex flex-col h-full border border-slate-700/50">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white tracking-wide">Universal Notifications</h3>
        <span className="bg-slate-800 text-xs font-bold px-2 py-1 rounded text-slate-300">Live Stream</span>
      </div>

      <div className="space-y-4 flex-1 overflow-y-auto pr-2 no-scrollbar">
        {NOTIFICATIONS.map((notif) => (
          <div key={notif.id} className={`p-4 rounded-2xl border ${notif.bgColor} transition-all hover:bg-slate-800/80`}>
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                <notif.icon size={16} className={notif.color} />
                <span className={`text-xs font-bold uppercase tracking-wider ${notif.color}`}>{notif.domain}</span>
                <span className="text-xs text-slate-500">•</span>
                <span className="text-xs text-slate-400">{notif.zone}</span>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                notif.priority === 'High' ? 'bg-red-500/20 text-red-400' : 
                notif.priority === 'Medium' ? 'bg-orange-500/20 text-orange-400' : 
                'bg-blue-500/20 text-blue-400'
              }`}>
                {notif.priority} PRIORITY
              </span>
            </div>
            
            <p className="text-sm text-white font-medium mb-3">{notif.reason}</p>
            
            <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-700/50 mb-3">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-slate-400">Suggested Action</span>
                <span className="text-green-400 font-bold">Conf: {notif.confidence}</span>
              </div>
              <p className="text-sm text-blue-300 font-medium">{notif.suggestedAction}</p>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex-1 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 py-1.5 rounded-lg text-xs font-bold transition-colors">
                Assign
              </button>
              <button className="glass-button p-1.5 rounded-lg text-slate-400 hover:text-white" title="Voice Summary">
                <Volume2 size={16} />
              </button>
              <button className="glass-button p-1.5 rounded-lg text-slate-400 hover:text-white" title="Translate">
                <Globe size={16} />
              </button>
              <button className="glass-button p-1.5 rounded-lg text-slate-400 hover:text-green-400" title="Resolve">
                <CheckCircle size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-4 w-full flex items-center justify-center text-sm text-blue-400 hover:text-blue-300 font-medium">
        View Audit History <ArrowRight size={16} className="ml-1" />
      </button>
    </div>
  );
}
