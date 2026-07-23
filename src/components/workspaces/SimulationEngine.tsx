"use client";
import React, { useState } from 'react';
import { Play, AlertTriangle, ShieldAlert, CloudLightning, Activity, AlertOctagon, XCircle } from 'lucide-react';

const SIMULATIONS = [
  { id: 'gate_closed', icon: AlertTriangle, label: 'Gate Closed / Failure', type: 'crowd' },
  { id: 'medical_emerg', icon: Activity, label: 'Medical Emergency', type: 'medical' },
  { id: 'fire_alarm', icon: AlertOctagon, label: 'Fire Alarm Evacuation', type: 'security' },
  { id: 'heavy_rain', icon: CloudLightning, label: 'Heavy Rain / Storm', type: 'weather' },
  { id: 'security_threat', icon: ShieldAlert, label: 'Security Threat', type: 'security' },
  { id: 'metro_delay', icon: AlertTriangle, label: 'Metro / Transport Delay', type: 'transport' },
];

export default function SimulationEngine({ onTrigger }: { onTrigger: (simId: string | null) => void }) {
  const [activeSim, setActiveSim] = useState<string | null>(null);
  
  const handleTrigger = (id: string) => {
    const nextState = activeSim === id ? null : id;
    setActiveSim(nextState);
    onTrigger(nextState);
  };

  return (
    <div className="glass-panel border border-[#E20074]/30 rounded-2xl p-4 flex flex-col gap-3 shadow-[0_0_20px_rgba(226,0,116,0.1)] backdrop-blur-xl bg-[#0A0015]/80 pointer-events-auto">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Play className="text-[#E20074]" size={18} fill="currentColor" />
          <h4 className="font-bold text-white text-sm uppercase tracking-wider">AI What-If Engine</h4>
        </div>
        {activeSim && (
          <button onClick={() => handleTrigger(activeSim)} className="text-slate-400 hover:text-white transition-colors">
            <XCircle size={16} />
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {SIMULATIONS.map(sim => {
          const Icon = sim.icon;
          const isActive = activeSim === sim.id;
          return (
            <button
              key={sim.id}
              onClick={() => handleTrigger(sim.id)}
              className={`flex items-center gap-2 text-left p-2 rounded-lg text-xs font-medium transition-all ${
                isActive 
                  ? 'bg-[#E20074]/20 border border-[#E20074] text-white shadow-[0_0_15px_rgba(226,0,116,0.3)]' 
                  : 'bg-slate-900/50 border border-slate-700/50 text-slate-300 hover:border-slate-500 hover:text-white'
              }`}
            >
              <Icon size={14} className={isActive ? 'text-[#E20074] animate-pulse shrink-0' : 'text-slate-400 shrink-0'} />
              <span className="truncate leading-tight">{sim.label}</span>
            </button>
          )
        })}
      </div>
      
      {activeSim && (
        <div className="mt-2 p-3 rounded-xl bg-slate-900 border border-slate-700">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Simulating Context</span>
            <span className="text-[10px] text-[#1AA65D] font-bold animate-pulse">Running Model...</span>
          </div>
          <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#2B7CE4] to-[#E20074] animate-pulse-slow w-full"></div>
          </div>
        </div>
      )}
    </div>
  );
}
