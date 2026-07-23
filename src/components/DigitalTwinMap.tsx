"use client";
import React, { useState } from 'react';
import { MapPin, Users, Activity } from 'lucide-react';
import SimulationEngine from './workspaces/SimulationEngine';
import PitchHeatmap from './workspaces/PitchHeatmap';
import SeatIntelligence from './workspaces/SeatIntelligence';
import CrowdFlow from './workspaces/CrowdFlow';

export type GateData = {
  id: string;
  name: string;
  capacity: number; // 0-100
  x: number; // percentage
  y: number; // percentage
};

const DUMMY_GATES: GateData[] = [
  { id: 'g1', name: 'North Gate', capacity: 45, x: 50, y: 15 },
  { id: 'g2', name: 'South Gate', capacity: 92, x: 50, y: 85 },
  { id: 'g3', name: 'East Gate', capacity: 78, x: 85, y: 50 },
  { id: 'g4', name: 'West Gate', capacity: 30, x: 15, y: 50 },
];

export default function DigitalTwinMap() {
  const gates = DUMMY_GATES;
  const [simulation, setSimulation] = useState<string | null>(null);
  const [activeLayer, setActiveLayer] = useState<'density' | 'medical' | 'security' | 'accessibility' | 'temperature'>('density');

  return (
    <div className="relative w-full min-h-[550px] lg:min-h-[620px] bg-[#05000A] rounded-3xl border border-slate-800 p-4 sm:p-6 flex flex-col items-center justify-between overflow-visible shadow-2xl my-2">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0A0015] via-[#05000A] to-black rounded-3xl"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none rounded-3xl"></div>
      
      {/* Top Bar: Layer Controls */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 z-30 mb-4 pointer-events-auto">
        <div>
          <h3 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E20074] animate-ping"></span>
            Digital Twin Stadium Simulation
          </h3>
          <p className="text-[11px] text-slate-400">Select map layer or trigger AI simulation scenario</p>
        </div>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2 pointer-events-auto">
          {(['density', 'medical', 'security', 'accessibility', 'temperature'] as const).map(layer => (
            <button 
              key={layer}
              onClick={() => setActiveLayer(layer)}
              className={`px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                activeLayer === layer 
                  ? 'bg-[#E20074] text-white shadow-[0_0_12px_rgba(226,0,116,0.6)] scale-105' 
                  : 'bg-slate-900/90 text-slate-300 border border-slate-700/80 hover:border-[#E20074]/50 hover:text-white'
              }`}
            >
              {layer}
            </button>
          ))}
        </div>
      </div>
      
      {/* Stadium Graphic Representation */}
      <div className="relative w-full max-w-3xl min-h-[320px] sm:min-h-[380px] aspect-[4/3] rounded-[60px] sm:rounded-[120px] border-4 border-slate-800/80 bg-[#0A0015]/80 shadow-[0_0_50px_rgba(43,124,228,0.1)] flex items-center justify-center backdrop-blur-md my-4">
        
        {/* Seat Intelligence */}
        <SeatIntelligence simulation={simulation} />

        {/* Pitch Area */}
        <div className="w-1/2 h-2/3 border-2 border-white/10 bg-[#1AA65D]/10 rounded-xl flex items-center justify-center relative shadow-[inset_0_0_50px_rgba(26,166,93,0.15)]">
          <PitchHeatmap mode={activeLayer} simulation={simulation} />
          
          <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white/20 rounded-full z-10"></div>
          <div className="absolute h-full w-[2px] bg-white/20 z-10"></div>
        </div>

        {/* Crowd Flow Vectors */}
        <CrowdFlow simulation={simulation} />

        {/* Gate Pin Markers */}
        {gates.map((gate) => {
          let capacity = gate.capacity;
          if (simulation === 'gate_closed' && gate.id === 'g4') {
            capacity = 100;
          }

          const isCritical = capacity >= 90;
          const isWarning = capacity >= 75 && capacity < 90;
          
          let colorClass = 'bg-[#2B7CE4] border-blue-400';
          let pulseClass = 'shadow-[0_0_15px_rgba(43,124,228,0.5)]';
          let textClass = 'text-blue-400';
          
          if (isCritical) {
            colorClass = 'bg-[#E20074] border-pink-400 animate-pulse';
            pulseClass = 'shadow-[0_0_20px_rgba(226,0,116,0.8)]';
            textClass = 'text-[#E20074] font-bold';
          } else if (isWarning) {
            colorClass = 'bg-amber-500 border-amber-400';
            pulseClass = 'shadow-[0_0_15px_rgba(245,158,11,0.6)]';
            textClass = 'text-amber-400';
          }

          return (
            <div 
              key={gate.id} 
              className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-40 pointer-events-auto"
              style={{ left: `${gate.x}%`, top: `${gate.y}%` }}
            >
              <div className={`w-8 h-8 rounded-full border-2 ${colorClass} ${pulseClass} flex items-center justify-center transition-all duration-300 group-hover:scale-125`}>
                {simulation === 'medical_emerg' && gate.id === 'g1' ? (
                  <Activity size={14} className="text-white animate-spin-slow" />
                ) : (
                  <MapPin size={14} className="text-white" />
                )}
              </div>
              
              {/* Gate Info Badge */}
              <div className="mt-1 px-2.5 py-1 bg-black/95 border border-slate-700 rounded-md text-[10px] whitespace-nowrap shadow-xl backdrop-blur-md">
                <div className="font-extrabold text-white">{gate.name}</div>
                <div className={`flex items-center gap-1 ${textClass} font-bold`}>
                  <Users size={10} />
                  <span>{capacity}% Occupied</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Bar: Simulation Control Panel */}
      <div className="w-full mt-3 z-30 pointer-events-auto">
        <SimulationEngine onTrigger={setSimulation} />
      </div>

    </div>
  );
}
