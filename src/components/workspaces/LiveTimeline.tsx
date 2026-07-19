"use client";
import React from 'react';
import { Clock, CheckCircle, AlertTriangle, Info } from 'lucide-react';

const TIMELINE_EVENTS = [
  { id: 1, time: '14:32', type: 'info', msg: 'Gates A & B opened for Fan entry.', icon: Info, color: 'text-blue-400' },
  { id: 2, time: '14:45', type: 'alert', msg: 'Crowd density spike detected at North Concourse.', icon: AlertTriangle, color: 'text-orange-400' },
  { id: 3, time: '14:47', type: 'action', msg: 'AI routed 5 volunteers to North Concourse.', icon: CheckCircle, color: 'text-green-400' },
  { id: 4, time: '14:55', type: 'info', msg: 'Metro Line 2 arrived with 800 passengers.', icon: Clock, color: 'text-slate-400' }
];

export default function LiveTimeline() {
  return (
    <div className="h-48 glass-panel border-t border-slate-700/50 p-4 z-10 relative overflow-hidden flex flex-col">
      <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-4 flex items-center">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse mr-2"></span>
        Live Operations Timeline
      </h3>
      
      <div className="flex-1 overflow-x-auto no-scrollbar flex items-center space-x-6 pb-2">
        {TIMELINE_EVENTS.map((evt, idx) => (
          <div key={evt.id} className="flex-shrink-0 flex items-start space-x-3 w-64 group">
            <div className={`mt-1 ${evt.color}`}>
              <evt.icon size={16} />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 mb-1">{evt.time}</div>
              <p className="text-sm text-slate-300 font-medium leading-snug group-hover:text-white transition-colors">
                {evt.msg}
              </p>
            </div>
            {/* Timeline connector */}
            {idx !== TIMELINE_EVENTS.length - 1 && (
              <div className="hidden md:block w-8 h-px bg-slate-700 mt-3 ml-4"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
