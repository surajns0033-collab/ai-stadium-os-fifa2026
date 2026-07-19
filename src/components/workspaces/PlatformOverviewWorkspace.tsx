"use client";
import React from 'react';

const PARTS = [
  {
    part: 11, title: 'Advanced Analytics & Reporting', icon: '📊', color: 'blue',
    features: ['Match Day KPI Dashboard', 'Custom Report Builder (Drag & Drop)', 'CSV / PDF Export Engine', 'Historical Season Comparisons', 'AI-Generated Executive Summaries'],
    metric: { value: '14', label: 'Reports Today' }
  },
  {
    part: 12, title: 'Mobile & Kiosk Experience', icon: '📱', color: 'purple',
    features: ['Fan Mobile App (PWA — offline capable)', 'Volunteer Operations App', 'Self-Service Kiosk Interface', 'QR Code Ticketing & Check-In', 'Accessibility Large-Text Mode'],
    metric: { value: '98%', label: 'Mobile Uptime' }
  },
  {
    part: 13, title: 'VIP & Hospitality Management', icon: '⭐', color: 'yellow',
    features: ['VIP Zone Biometric Access', 'Hospitality Suite Booking Portal', 'Concierge AI Personal Assistant', 'Executive Transport Coordination', 'Premium Catering Inventory'],
    metric: { value: '62%', label: 'VIP Occupancy' }
  },
  {
    part: 14, title: 'Emergency & Evacuation', icon: '🚨', color: 'red',
    features: ['Multi-Scenario Evacuation Plans', 'Real-Time Route Guidance (Digital Screens)', 'Emergency Broadcast to all Channels', 'Live Coordination with Fire & Police', 'Post-Incident Report Generation'],
    metric: { value: '< 90s', label: 'Full Alert Time' }
  },
  {
    part: 15, title: 'Accessibility & Inclusion', icon: '♿', color: 'teal',
    features: ['Wheelchair Navigation Route Mapping', 'Sign Language Video Support', 'Audio Description for Visually Impaired', 'Sensory-Friendly Quiet Zones', 'Real-Time Assistance Dispatch'],
    metric: { value: '14', label: 'Active Requests' }
  },
  {
    part: 16, title: 'Sustainability Dashboard', icon: '🌱', color: 'green',
    features: ['Carbon Footprint Real-Time Tracking', 'AI Energy Optimization Engine', 'Waste Stream Management', 'Water Consumption Monitoring', 'FIFA Green Goal Compliance Score'],
    metric: { value: '78%', label: 'Waste Diverted' }
  },
  {
    part: 17, title: 'Monetization & Revenue', icon: '💰', color: 'orange',
    features: ['F&B Revenue Analytics (per stall)', 'Dynamic Pricing Engine', 'Sponsorship Impression Tracking', 'Merchandise AI Demand Forecast', 'Match Day Revenue vs Forecast'],
    metric: { value: '$2.4M', label: 'Match Revenue' }
  },
  {
    part: 18, title: 'Digital Twin & Simulation', icon: '🏟️', color: 'indigo',
    features: ['Live 3D Stadium Visualization', 'Pre-Match Scenario Simulation', 'Crowd Flow Path Prediction', 'IoT Sensor Data Overlays', 'Post-Match Decision Replay'],
    metric: { value: '99%', label: 'Twin Accuracy' }
  },
  {
    part: 19, title: 'AI Learning & Improvement', icon: '🤖', color: 'pink',
    features: ['Federated Learning Across Venues', 'Continuous Model Retraining Pipeline', 'Feedback Loop from Staff Ratings', 'A/B Testing for AI Recommendations', 'Model Accuracy Benchmarking'],
    metric: { value: '96%', label: 'AI Accuracy' }
  },
  {
    part: 20, title: 'Compliance & Legal', icon: '⚖️', color: 'slate',
    features: ['GDPR Compliance Automation', 'CCPA Data Subject Request Handler', 'FIFA Tournament Regulations Engine', 'Right to Erasure (Data Deletion)', 'Privacy-by-Design Architecture'],
    metric: { value: '100%', label: 'Compliance' }
  },
  {
    part: 21, title: 'Global Multi-Venue Rollout', icon: '🌍', color: 'purple',
    features: ['16-Venue Simultaneous Deployment', 'Centralized Cross-Venue Control Hub', 'Real-Time Cross-Venue Analytics', 'Multi-Timezone & Currency Support', 'Federated Data Architecture'],
    metric: { value: '16', label: 'Venues Ready' }
  },
  {
    part: 22, title: 'Post-Tournament & Legacy', icon: '🏆', color: 'yellow',
    features: ['Full Match Archive System', 'Legacy Data Export for FIFA', 'Venue Knowledge Transfer Package', 'Community Fan Engagement Platform', 'AI Seed Data for Next Tournament'],
    metric: { value: '∞', label: 'Knowledge Kept' }
  },
];

const COLOR: Record<string, { border: string; header: string; badge: string; dot: string }> = {
  blue:   { border: 'border-blue-500/25',   header: 'text-blue-400',   badge: 'bg-blue-500/15 text-blue-300 border-blue-500/30',   dot: 'bg-blue-400' },
  purple: { border: 'border-purple-500/25', header: 'text-purple-400', badge: 'bg-purple-500/15 text-purple-300 border-purple-500/30', dot: 'bg-purple-400' },
  yellow: { border: 'border-yellow-500/25', header: 'text-yellow-400', badge: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30', dot: 'bg-yellow-400' },
  red:    { border: 'border-red-500/25',    header: 'text-red-400',    badge: 'bg-red-500/15 text-red-300 border-red-500/30',    dot: 'bg-red-400' },
  teal:   { border: 'border-teal-500/25',   header: 'text-teal-400',   badge: 'bg-teal-500/15 text-teal-300 border-teal-500/30',   dot: 'bg-teal-400' },
  green:  { border: 'border-green-500/25',  header: 'text-green-400',  badge: 'bg-green-500/15 text-green-300 border-green-500/30',  dot: 'bg-green-400' },
  orange: { border: 'border-orange-500/25', header: 'text-orange-400', badge: 'bg-orange-500/15 text-orange-300 border-orange-500/30', dot: 'bg-orange-400' },
  indigo: { border: 'border-indigo-500/25', header: 'text-indigo-400', badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30', dot: 'bg-indigo-400' },
  pink:   { border: 'border-pink-500/25',   header: 'text-pink-400',   badge: 'bg-pink-500/15 text-pink-300 border-pink-500/30',   dot: 'bg-pink-400' },
  slate:  { border: 'border-slate-400/25',  header: 'text-slate-300',  badge: 'bg-slate-500/15 text-slate-300 border-slate-500/30',  dot: 'bg-slate-400' },
};

export default function PlatformOverviewWorkspace() {
  return (
    <div className="h-full w-full flex flex-col bg-[#0A0015] text-white overflow-hidden">

      {/* Fixed Header */}
      <div className="shrink-0 px-6 pt-6 pb-4 border-b border-slate-800/60">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-white">Platform Specification</h2>
            <p className="text-slate-400 text-sm mt-0.5">FIFA 2026 · Operational domains covered by this platform</p>
          </div>
          <div className="flex items-center gap-3">
            {[
              { label: '12 Domains', color: 'text-blue-400 bg-blue-500/10 border-blue-500/25' },
              { label: '48+ AI Features', color: 'text-[#1AA65D] bg-green-500/10 border-green-500/25' },
              { label: '100% PRD Coverage', color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/25' },
            ].map((badge, i) => (
              <span key={i} className={`text-xs font-bold px-3 py-1.5 rounded-full border ${badge.color}`}>{badge.label}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollable Grid — all cards open, no clicking needed */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-6 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pb-6">
          {PARTS.map((p) => {
            const c = COLOR[p.color] || COLOR.blue;
            return (
              <div key={p.part} className={`rounded-2xl border ${c.border} bg-slate-900/60 flex flex-col overflow-hidden`}>

                {/* Card Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/60">
                  <div className="flex items-center gap-2">
                    <span className="text-xl leading-none">{p.icon}</span>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Part {p.part}</div>
                      <h3 className={`text-sm font-bold leading-tight ${c.header}`}>{p.title}</h3>
                    </div>
                  </div>
                  <div className={`text-right px-2.5 py-1.5 rounded-lg border ${c.badge} shrink-0 ml-2`}>
                    <div className="text-base font-black leading-none">{p.metric.value}</div>
                    <div className="text-[9px] leading-tight mt-0.5 opacity-80">{p.metric.label}</div>
                  </div>
                </div>

                {/* Features — always visible, no click required */}
                <div className="px-4 py-3 flex flex-col gap-2">
                  {p.features.map((f, fi) => (
                    <div key={fi} className="flex items-start gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${c.dot}`}></span>
                      <span className="text-xs text-slate-300 leading-relaxed">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
