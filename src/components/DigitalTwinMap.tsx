"use client";
import React, { useState } from 'react';
import { MapPin, Users, Activity, X, Brain } from 'lucide-react';
import SimulationEngine from './workspaces/SimulationEngine';
import PitchHeatmap from './workspaces/PitchHeatmap';
import SeatIntelligence from './workspaces/SeatIntelligence';
import CrowdFlow from './workspaces/CrowdFlow';
import UniversalAIResponse, { AIResponseData } from './workspaces/UniversalAIResponse';

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
  const [selectedAIResponse, setSelectedAIResponse] = useState<AIResponseData | null>(null);

  const GATE_RESPONSES: Record<string, AIResponseData> = {
    g1: {
      summary: "North Gate Spectator Ingress Status",
      reasoning: "North Gate is operating smoothly at 45% capacity. Automated turnstiles scanning at 1.1s per spectator with zero queue backup.",
      data: "Capacity: 45% | Scan Speed: 1.1s | Active Turnstiles: 14/14",
      recommendation: "Maintain standard digital ticket scanning protocol.",
      alternatives: "Keep Gate B backup turnstiles on standby for halftime.",
      risk: "None — All entry channels clear.",
      predictedOutcome: "Smooth fan ingress with average wait time under 40 seconds.",
      confidence: 99,
      timeSaved: "12 Minutes Per Fan",
      usersAffected: "12,400 Spectators"
    },
    g2: {
      summary: "South Gate Ingress Alert — 92% Capacity Reached",
      reasoning: "South Gate experiencing Metro transit arrival surge. High turnstile density detected near South Concourse.",
      data: "Capacity: 92% (CRITICAL) | Wait Time: 14 Mins | Incoming Surge: 4,000 Fans/10m",
      recommendation: "Execute AI Redirection Protocol: Guide incoming fans to East & West Gates via LED concourse screens and Spanish/English PA announcements.",
      alternatives: "Open South Gate emergency overflow turnstiles S15-S20.",
      risk: "Low — Redirection channels ready at East/West gates.",
      predictedOutcome: "South Gate queue clears within 4 minutes; average wait time drops to 2.5 minutes.",
      confidence: 98,
      timeSaved: "14 Minutes Per Fan",
      usersAffected: "18,200 Spectators"
    },
    g3: {
      summary: "East Gate Pre-Match Ingress Status",
      reasoning: "East Gate operating at 78% capacity. Steady spectator flow from East Bus Terminal with minimal queueing.",
      data: "Capacity: 78% | Scan Speed: 1.3s | Bus Shuttle Headway: 3 Mins",
      recommendation: "Keep all 12 main entry gates open and prepare halftime concession diversion.",
      alternatives: "Shift 2 mobile turnstiles from West Gate if surge increases.",
      risk: "None",
      predictedOutcome: "Full crowd entry completed 15 minutes prior to kickoff.",
      confidence: 96,
      timeSaved: "10 Minutes Per Fan",
      usersAffected: "14,500 Spectators"
    },
    g4: {
      summary: "West Gate Low-Traffic Ingress Route",
      reasoning: "West Gate running optimal at 30% capacity. Express entry channel available for VIP & General Public.",
      data: "Capacity: 30% | Wait Time: < 30s | Open Lanes: 10/10",
      recommendation: "Broadcast West Gate low-traffic entry suggestion to incoming fans via mobile app.",
      alternatives: "Maintain current open gate configuration.",
      risk: "None",
      predictedOutcome: "Balances overall stadium ingress evenly across all 4 quadrants.",
      confidence: 97,
      timeSaved: "8 Minutes Per Fan",
      usersAffected: "8,100 Spectators"
    }
  };

  const LAYER_RESPONSES: Record<string, AIResponseData> = {
    density: {
      summary: "Stadium Crowd Density Heatmap Layer",
      reasoning: "Real-time AI Vision sensors analyzing spectator concourse & seating density across North/South stands.",
      data: "Overall Stadium Occupancy: 84% | Concourse Density: Normal",
      recommendation: "Monitor South Stand halftime egress routes.",
      risk: "Low",
      predictedOutcome: "Optimal crowd movement without line bottlenecks.",
      confidence: 98,
      timeSaved: "10 Minutes",
      usersAffected: "82,000 Fans"
    },
    medical: {
      summary: "Medical Readiness & Rapid Paramedic Layer",
      reasoning: "3 First-Aid stations active with 12 paramedics ready. Average medical response time under 90 seconds.",
      data: "First-Aid Stations: 3/3 Active | Ambulances: 4 Ready",
      recommendation: "Maintain clear emergency access corridor on East Concourse.",
      risk: "None",
      predictedOutcome: "Immediate medical response readiness across all stadium sectors.",
      confidence: 99,
      timeSaved: "Instant Dispatch",
      usersAffected: "All Spectators"
    },
    security: {
      summary: "Perimeter Security & Optical AI Vision Layer",
      reasoning: "Multi-camera facial recognition & perimeter sensors active. All 4 entry quadrants clear of safety incidents.",
      data: "Active AI Cameras: 148 | Incident Count: 0",
      recommendation: "Continue automated perimeter monitoring.",
      risk: "Zero Security Threats Detected",
      predictedOutcome: "100% safe tournament venue operation.",
      confidence: 100,
      timeSaved: "Real-time Shield",
      usersAffected: "82,000 Fans"
    },
    accessibility: {
      summary: "Mobility Assistance & Elevator Access Layer",
      reasoning: "Elevators 4 & 5 operating smoothly for mobility-assisted guests. Staff deployed at Ramp B for wheelchair assistance.",
      data: "Elevators Active: 8/8 | Assistance Staff: 16 Deployed",
      recommendation: "Keep priority elevator lanes open post-match.",
      risk: "None",
      predictedOutcome: "Smooth, dignified stadium experience for all guests with accessibility needs.",
      confidence: 97,
      timeSaved: "15 Minutes",
      usersAffected: "1,200 Guests"
    },
    temperature: {
      summary: "Solar Heat & HVAC Chiller Loop Status",
      reasoning: "East Stand ambient temp 24°C. Chiller Loop #2 maintaining optimal cooling offset.",
      data: "Ambient Temp: 24°C | HVAC Capacity: 75% | Energy Offset: 14.2MWh",
      recommendation: "Maintain solar chiller loop modulation.",
      risk: "None",
      predictedOutcome: "Perfect thermal comfort throughout the stadium bowl.",
      confidence: 96,
      timeSaved: "Energy Optimized",
      usersAffected: "82,000 Fans"
    }
  };

  const handleLayerClick = (layer: 'density' | 'medical' | 'security' | 'accessibility' | 'temperature') => {
    setActiveLayer(layer);
    setSelectedAIResponse(LAYER_RESPONSES[layer]);
  };

  const handleGateClick = (gateId: string) => {
    if (GATE_RESPONSES[gateId]) {
      setSelectedAIResponse(GATE_RESPONSES[gateId]);
    }
  };

  return (
    <div className="flex flex-col w-full gap-4">
      
      {/* ── Top Layer Selector Toolbar ── */}
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-start gap-2.5 sm:gap-4 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-lg pointer-events-auto z-40">
        <div className="flex items-center gap-2 text-xs font-extrabold text-white uppercase tracking-wider shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E20074] animate-ping"></span>
          Digital Twin Map Layers:
        </div>

        {/* Mobile: Horizontal Touch-Scroll Pill Bar | Desktop: Inline Next to Title */}
        <div className="w-full sm:w-auto flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 sm:py-0 flex-nowrap sm:flex-wrap shrink-0">
          {(['density', 'medical', 'security', 'accessibility', 'temperature'] as const).map(layer => (
            <button 
              key={layer}
              onClick={() => handleLayerClick(layer)}
              className={`px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-all cursor-pointer shrink-0 whitespace-nowrap ${
                activeLayer === layer 
                  ? 'bg-[#E20074] text-white shadow-[0_0_12px_rgba(226,0,116,0.6)] scale-105' 
                  : 'bg-slate-950 text-slate-300 border border-slate-700/80 hover:border-[#E20074]/50 hover:text-white'
              }`}
            >
              {layer}
            </button>
          ))}
        </div>
      </div>

      {/* ── Main Stadium Digital Twin Graphic Container ── */}
      <div className="relative w-full min-h-[440px] sm:min-h-[500px] bg-black flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">
        {/* Background Ambience */}
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0A0015] via-[#05000A] to-black"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        
        {/* Stadium Graphic Oval Canvas */}
        <div className="relative w-full max-w-3xl aspect-[4/3] rounded-[80px] sm:rounded-[120px] border-4 border-slate-800/80 bg-[#0A0015]/60 shadow-[0_0_50px_rgba(43,124,228,0.1)] flex items-center justify-center backdrop-blur-md my-4">
          
          {/* Seat Intelligence */}
          <SeatIntelligence simulation={simulation} />

          {/* Pitch Heatmap Overlay (No Inner Green Box!) */}
          <PitchHeatmap mode={activeLayer} simulation={simulation} />

          {/* Crowd Flow Vectors */}
          <CrowdFlow simulation={simulation} />

          {/* Gate Pin Markers (Clickable for Relatable AI Response) */}
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
                onClick={() => handleGateClick(gate.id)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-40"
                style={{ left: `${gate.x}%`, top: `${gate.y}%` }}
                title="Click to view Relatable AI Gate Operations"
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

          {/* ── What-If Simulation Engine (DESKTOP ONLY: Inside Center of 4 Gates) ── */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-80 pointer-events-auto">
            <SimulationEngine onTrigger={setSimulation} />
          </div>

        </div>
      </div>

      {/* ── What-If Simulation Engine (MOBILE ONLY: Outside Away From Stadium Box) ── */}
      <div className="block lg:hidden w-full sm:w-80 mx-auto mt-2 pointer-events-auto z-40">
        <SimulationEngine onTrigger={setSimulation} />
      </div>

      {/* Relatable Public AI Operations Response Modal Popup */}
      {selectedAIResponse && (
        <div className="fixed inset-0 z-50 bg-[#0A0015]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-4 sm:p-5 border-b border-slate-700/60 bg-slate-800/80 flex justify-between items-center">
              <h3 className="font-extrabold text-white text-base sm:text-lg flex items-center gap-2.5">
                <Brain size={20} className="text-purple-400 animate-pulse"/> 
                Digital Twin AI Operations Response
              </h3>
              <button 
                onClick={() => setSelectedAIResponse(null)}
                className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="p-4 sm:p-6 overflow-y-auto custom-scrollbar">
              <UniversalAIResponse response={selectedAIResponse} />
              
              <button
                onClick={() => setSelectedAIResponse(null)}
                className="w-full mt-3 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-extrabold text-sm transition-all shadow-lg active:scale-95 cursor-pointer"
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
