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
    <div className="flex flex-col w-full gap-4">
      
      {/* ── Main Stadium Digital Twin Graphic Container ── */}
      <div className="relative w-full min-h-[440px] sm:min-h-[500px] bg-black flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">
        {/* Background Ambience */}
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0A0015] via-[#05000A] to-black"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        {/* Layer Controls Bar (Top Left) */}
        <div className="absolute top-4 left-4 z-40 flex flex-wrap gap-2 pointer-events-auto">
          {(['density', 'medical', 'security', 'accessibility', 'temperature'] as const).map(layer => (
            <button 
              key={layer}
              onClick={() => setActiveLayer(layer)}
              className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeLayer === layer 
                  ? 'bg-[#E20074] text-white shadow-[0_0_12px_rgba(226,0,116,0.6)] scale-105' 
                  : 'bg-slate-900/80 text-slate-400 border border-slate-700/50 hover:border-[#E20074]/50 hover:text-white'
              }`}
            >
              {layer}
            </button>
          ))}
        </div>
        
        {/* Stadium Graphic Oval Canvas */}
        <div className="relative w-full max-w-3xl aspect-[4/3] rounded-[80px] sm:rounded-[120px] border-4 border-slate-800/80 bg-[#0A0015]/60 shadow-[0_0_50px_rgba(43,124,228,0.1)] flex items-center justify-center backdrop-blur-md my-4">
          
          {/* Seat Intelligence */}
          <SeatIntelligence simulation={simulation} />

          {/* Pitch Heatmap Overlay (No Inner Green Box!) */}
          <PitchHeatmap mode={activeLayer} simulation={simulation} />

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
                className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-40"
                style={{ left: `${gate.x}%`, top: `${gate.y}%` }}
              >
                <div className={`w-8 h-8 rounded-full border-2 ${colorClass} ${pulseClass} flex items-center justify-center transition-all duration-300 group-hover:scale-125`}>
                  {simulation === 'medical_emerg' && gate.id === 'g1' ? (
                    <Activity size={14} className="text-white animate-spin-slow" />
                  ) : (
                    <MapPin size={14} className="text-white" />
                  )}
                </div>
                <div className="mt-2 px-3 py-1.5 bg-black/90 border border-[#E20074]/30 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity absolute top-full pointer-events-none shadow-[0_0_15px_rgba(226,0,116,0.2)] backdrop-blur-md">
                  <div className="font-bold text-white mb-1 uppercase tracking-wider">{gate.name}</div>
                  <div className={`flex items-center space-x-2 ${textClass} font-medium`}>
                    <Users size={12} />
                    <span>{capacity}% Occupied</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── What-If Simulation Engine (Centered card outside stadium oval — Zero Overlap!) ── */}
        <div className="w-full max-w-md mx-auto mt-4 pointer-events-auto z-40">
          <SimulationEngine onTrigger={setSimulation} />
        </div>

      </div>
    </div>
  );
}
