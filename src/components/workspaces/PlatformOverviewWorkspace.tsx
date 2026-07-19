"use client";
import React, { useState } from 'react';
import { Activity, Brain, Shield, Cloud, Server, Database, Lock, Zap, ArrowRight, X } from 'lucide-react';

const PARTS = [
  { part: 11, title: 'Advanced Analytics', icon: '📊', color: '#3b82f6', features: ['Match Day KPI Dashboard', 'Custom Report Builder', 'Historical Season Comparisons', 'AI Summaries'], metric: { value: '14', label: 'Reports Today' } },
  { part: 12, title: 'Mobile & Kiosk', icon: '📱', color: '#a855f7', features: ['Fan Mobile App (PWA)', 'Volunteer Operations App', 'Self-Service Kiosks', 'QR Code Ticketing'], metric: { value: '98%', label: 'Mobile Uptime' } },
  { part: 13, title: 'VIP & Hospitality', icon: '⭐', color: '#eab308', features: ['Biometric Access', 'Suite Booking Portal', 'Concierge AI', 'Premium Catering'], metric: { value: '62%', label: 'VIP Occupancy' } },
  { part: 14, title: 'Emergency Eval', icon: '🚨', color: '#ef4444', features: ['Multi-Scenario Evac Plans', 'Real-Time Route Guidance', 'Emergency Broadcasts', 'Live Police Coordination'], metric: { value: '< 90s', label: 'Full Alert Time' } },
  { part: 15, title: 'Accessibility', icon: '♿', color: '#14b8a6', features: ['Wheelchair Navigation', 'Sign Language Video', 'Audio Description', 'Real-Time Assistance'], metric: { value: '14', label: 'Active Requests' } },
  { part: 16, title: 'Sustainability', icon: '🌱', color: '#22c55e', features: ['Carbon Footprint Tracker', 'AI Energy Optimization', 'Waste Stream Management', 'Water Monitoring'], metric: { value: '78%', label: 'Waste Diverted' } },
  { part: 17, title: 'Monetization', icon: '💰', color: '#f97316', features: ['F&B Revenue Analytics', 'Dynamic Pricing Engine', 'Merchandise AI Forecast', 'Sponsorship Tracking'], metric: { value: '$2.4M', label: 'Match Revenue' } },
  { part: 18, title: 'Digital Twin', icon: '🏟️', color: '#6366f1', features: ['Live 3D Visualization', 'Pre-Match Simulations', 'Crowd Flow Paths', 'IoT Sensor Overlays'], metric: { value: '99%', label: 'Twin Accuracy' } },
  { part: 19, title: 'AI Learning', icon: '🤖', color: '#ec4899', features: ['Federated Learning', 'Continuous Retraining', 'Feedback Loop', 'A/B Testing for AI'], metric: { value: '96%', label: 'AI Accuracy' } },
  { part: 20, title: 'Compliance', icon: '⚖️', color: '#94a3b8', features: ['GDPR Automation', 'CCPA Handler', 'FIFA Regulations Engine', 'Privacy-by-Design'], metric: { value: '100%', label: 'Compliance' } },
  { part: 21, title: 'Global Rollout', icon: '🌍', color: '#8b5cf6', features: ['16-Venue Deployment', 'Cross-Venue Control Hub', 'Cross-Venue Analytics', 'Multi-Timezone Support'], metric: { value: '16', label: 'Venues Ready' } },
  { part: 22, title: 'Post-Tournament', icon: '🏆', color: '#facc15', features: ['Full Match Archive', 'Legacy Data Export', 'Venue Knowledge Transfer', 'Community Fan Platform'], metric: { value: '∞', label: 'Knowledge Kept' } },
];

export default function PlatformOverviewWorkspace() {
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);

  const activeNode = activeNodeId !== null ? PARTS.find(p => p.part === activeNodeId) : null;

  // Center of SVG
  const cx = 500;
  const cy = 400;
  const radius = 280;

  return (
    <div className="h-full w-full flex flex-col bg-[#0A0015] text-white overflow-hidden relative">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#E20074]/10 rounded-full blur-[140px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#2B7CE4]/10 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <div className="shrink-0 px-6 pt-6 pb-4 z-10 border-b border-slate-800/60 flex justify-between items-end bg-slate-900/40 backdrop-blur-md">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Platform Ecosystem
          </h2>
          <p className="text-slate-400 text-sm mt-1">Interactive operational domains network mapping</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold px-3 py-1.5 rounded-full border border-blue-500/30 text-blue-400 bg-blue-500/10 flex items-center gap-2">
            <Server size={14} /> 12 Active Nodes
          </span>
          <span className="text-xs font-bold px-3 py-1.5 rounded-full border border-green-500/30 text-green-400 bg-green-500/10 flex items-center gap-2">
            <Zap size={14} /> AI Core Stable
          </span>
        </div>
      </div>

      {/* Main Interactive SVG Area */}
      <div className="flex-1 relative overflow-hidden flex z-10 min-h-0">
        
        <div className="flex-1 relative flex items-center justify-center">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

          <svg viewBox="0 0 1000 800" className="w-full h-full max-h-full drop-shadow-[0_0_30px_rgba(226,0,116,0.1)]">
            
            <defs>
              {/* Radial glow for central core */}
              <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#E20074" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#E20074" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0A0015" stopOpacity="0" />
              </radialGradient>
              
              <marker id="data-arrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                <polygon points="0 0, 6 2, 0 4" fill="#E20074" />
              </marker>
            </defs>

            {/* AI Core (Center) */}
            <g className="animate-pulse-slow">
              <circle cx={cx} cy={cy} r="120" fill="url(#coreGlow)" />
              <circle cx={cx} cy={cy} r="50" fill="#E20074" fillOpacity="0.2" stroke="#E20074" strokeWidth="4" />
              <circle cx={cx} cy={cy} r="60" fill="none" stroke="#E20074" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" style={{ transformOrigin: `${cx}px ${cy}px` }} />
              <text x={cx} y={cy + 5} textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" className="tracking-widest drop-shadow-md">AI CORE</text>
            </g>

            {/* Orbiting Nodes */}
            {PARTS.map((node, index) => {
              const angle = (index * (360 / PARTS.length)) * (Math.PI / 180);
              const x = cx + radius * Math.cos(angle);
              const y = cy + radius * Math.sin(angle);
              const isActive = activeNodeId === node.part;

              return (
                <g key={node.part} className="cursor-pointer transition-all duration-300 hover:opacity-100" opacity={activeNodeId === null || isActive ? 1 : 0.3} onClick={() => setActiveNodeId(isActive ? null : node.part)}>
                  
                  {/* Data Stream (Connecting Line) */}
                  <path 
                    d={`M ${cx} ${cy} L ${x} ${y}`} 
                    fill="none" 
                    stroke={isActive ? node.color : '#334155'} 
                    strokeWidth={isActive ? "3" : "1"} 
                    strokeDasharray={isActive ? "8 8" : "4 4"}
                    className={isActive ? "animate-[dash_1s_linear_infinite]" : "animate-[dash_3s_linear_infinite]"}
                  />
                  {isActive && (
                    <path 
                      d={`M ${x} ${y} L ${cx} ${cy}`} 
                      fill="none" 
                      stroke="transparent" 
                      strokeWidth="0" 
                      markerEnd="url(#data-arrow)"
                    />
                  )}

                  {/* Node Circle */}
                  <circle cx={x} cy={y} r={isActive ? "30" : "24"} fill={node.color} fillOpacity="0.2" stroke={node.color} strokeWidth={isActive ? "4" : "2"} className="transition-all duration-300" />
                  
                  {/* Outer Pulsing Ring when Active */}
                  {isActive && (
                    <circle cx={x} cy={y} r="40" fill="none" stroke={node.color} strokeWidth="1" className="animate-ping" opacity="0.5" />
                  )}

                  <text x={x} y={y + 6} textAnchor="middle" fontSize={isActive ? "18" : "14"}>{node.icon}</text>
                  
                  {/* Label (Visible on hover or active) */}
                  <text x={x} y={y + 50} textAnchor="middle" fill="#cbd5e1" fontSize="12" fontWeight="bold" className="drop-shadow-lg opacity-80 hover:opacity-100 transition-opacity">
                    {node.title.toUpperCase()}
                  </text>
                </g>
              );
            })}
          </svg>
          
          <style jsx>{`
            @keyframes dash {
              to { stroke-dashoffset: -40; }
            }
          `}</style>
        </div>

        {/* Dynamic Side Panel */}
        <div className={`w-96 bg-slate-900/80 backdrop-blur-2xl border-l border-slate-700/50 h-full transform transition-transform duration-500 flex flex-col shadow-2xl ${activeNode ? 'translate-x-0' : 'translate-x-full absolute right-0'}`}>
          {activeNode ? (
            <>
              {/* Panel Header */}
              <div className="p-6 border-b border-slate-700/50 relative">
                <button onClick={() => setActiveNodeId(null)} className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors">
                  <X size={20} />
                </button>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border" style={{ backgroundColor: `${activeNode.color}20`, borderColor: `${activeNode.color}50` }}>
                    {activeNode.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Part {activeNode.part}</div>
                    <h3 className="text-lg font-black text-white leading-tight">{activeNode.title}</h3>
                  </div>
                </div>
              </div>

              {/* Panel Content */}
              <div className="p-6 flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-6">
                
                {/* Metric Card */}
                <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex items-center justify-between relative overflow-hidden group">
                  <div className="absolute left-0 top-0 w-1 h-full transition-all duration-300 group-hover:w-full opacity-10 group-hover:opacity-20" style={{ backgroundColor: activeNode.color }}></div>
                  <div className="absolute left-0 top-0 w-1 h-full" style={{ backgroundColor: activeNode.color }}></div>
                  <div className="z-10">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{activeNode.metric.label}</div>
                    <div className="text-3xl font-black text-white mt-1">{activeNode.metric.value}</div>
                  </div>
                  <Activity size={24} className="text-slate-500 z-10" />
                </div>

                {/* Features List */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Brain size={14} style={{ color: activeNode.color }} /> Sub-Systems Included
                  </h4>
                  <div className="space-y-2">
                    {activeNode.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors cursor-default">
                        <ArrowRight size={14} className="mt-0.5 shrink-0" style={{ color: activeNode.color }} />
                        <span className="text-sm text-slate-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Simulated AI Action */}
                <button className="mt-auto w-full py-3 rounded-xl text-sm font-bold transition-all border shadow-lg flex items-center justify-center gap-2" style={{ backgroundColor: `${activeNode.color}20`, color: activeNode.color, borderColor: `${activeNode.color}50` }}>
                  <Zap size={16} /> Execute Diagnostic Scan
                </button>

              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center p-8 text-center">
              <p className="text-slate-500">Select a node from the ecosystem map to view its details.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
