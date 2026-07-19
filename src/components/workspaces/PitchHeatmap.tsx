"use client";
import React from 'react';

type HeatmapMode = 'density' | 'medical' | 'security' | 'accessibility' | 'noise' | 'temperature' | 'energy';

export default function PitchHeatmap({ mode, simulation }: { mode: HeatmapMode, simulation: string | null }) {
  // Determine gradient colors based on mode and simulation
  let gradientClass = '';
  
  if (simulation === 'gate_closed') {
    gradientClass = 'from-red-600/60 via-amber-500/40 to-green-500/10';
  } else if (simulation === 'medical_emerg') {
    gradientClass = 'from-red-600/80 via-transparent to-transparent';
  } else {
    switch (mode) {
      case 'density':
        gradientClass = 'from-[#E20074]/60 via-amber-500/30 to-transparent';
        break;
      case 'medical':
        gradientClass = 'from-blue-500/50 via-white/20 to-transparent';
        break;
      case 'security':
        gradientClass = 'from-red-600/50 via-red-900/30 to-transparent';
        break;
      case 'temperature':
        gradientClass = 'from-amber-500/40 via-red-500/30 to-[#2B7CE4]/20';
        break;
      default:
        gradientClass = 'from-[#1AA65D]/30 via-transparent to-transparent';
    }
  }

  return (
    <div className="absolute inset-0 z-10 pointer-events-none rounded-lg overflow-hidden flex items-center justify-center">
      {/* Dynamic Heatmap Overlay */}
      <div className={`w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${gradientClass} transition-all duration-1000 opacity-70 mix-blend-screen`}></div>
      
      {/* Simulation AI Target Overlay */}
      {simulation && (
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-red-500/50 rounded-full animate-ping opacity-50"></div>
      )}
    </div>
  );
}
