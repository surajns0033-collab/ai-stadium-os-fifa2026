"use client";
import React from 'react';

type SeatStatus = 'occupied' | 'available' | 'reserved' | 'congested' | 'vip' | 'accessible' | 'restricted';

const SECTORS = [
  { id: 'north', top: 5, left: 25, width: 50, height: 15, baseStatus: 'congested' },
  { id: 'south', top: 80, left: 25, width: 50, height: 15, baseStatus: 'occupied' },
  { id: 'east', top: 25, left: 80, width: 15, height: 50, baseStatus: 'vip' },
  { id: 'west', top: 25, left: 5, width: 15, height: 50, baseStatus: 'available' },
];

const getColorForStatus = (status: SeatStatus, simulation: string | null) => {
  if (simulation === 'fire_alarm') return 'bg-red-600/80 border-red-400';
  if (simulation === 'gate_closed' && status === 'congested') return 'bg-[#E20074]/80 border-[#E20074]';

  switch (status) {
    case 'occupied': return 'bg-[#1AA65D]/60 border-[#1AA65D]'; // Grass green
    case 'available': return 'bg-white/20 border-white/40';
    case 'reserved': return 'bg-yellow-500/60 border-yellow-400';
    case 'congested': return 'bg-[#E20074]/60 border-[#E20074]'; // Magenta for congested
    case 'vip': return 'bg-[#2B7CE4]/60 border-[#2B7CE4]'; // Blue for VIP
    case 'accessible': return 'bg-purple-500/60 border-purple-400';
    case 'restricted': return 'bg-slate-800/80 border-slate-600';
    default: return 'bg-slate-700/50 border-slate-500';
  }
};

export default function SeatIntelligence({ simulation }: { simulation: string | null }) {
  return (
    <>
      {SECTORS.map(sector => (
        <div
          key={sector.id}
          className={`absolute rounded-xl border-2 backdrop-blur-sm transition-all duration-1000 ${getColorForStatus(sector.baseStatus as SeatStatus, simulation)}`}
          style={{
            top: `${sector.top}%`,
            left: `${sector.left}%`,
            width: `${sector.width}%`,
            height: `${sector.height}%`,
          }}
        >
          {/* Animated seating rows simulation */}
          <div className="w-full h-full opacity-20 bg-[linear-gradient(90deg,transparent_2px,rgba(255,255,255,0.5)_2px)] bg-[size:4px_100%]"></div>
        </div>
      ))}
    </>
  );
}
