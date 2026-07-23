"use client";
import React, { useState, useRef } from 'react';
import { 
  X, LayoutDashboard, Database, Map, LineChart, Building2, Languages, Users, 
  DoorOpen, Train, Car, HeartPulse, ShieldAlert, Utensils, Droplets, Navigation, 
  Brain, Leaf, FileText, ChevronRight
} from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  drawerProgress?: number; // 0 (hidden) to 1 (fully open)
  isInteractiveDragging?: boolean;
}

const CATEGORIES = [
  {
    name: 'Core Workspaces',
    items: [
      { id: 'Home', label: 'Command Center', icon: LayoutDashboard, desc: 'Executive overview & tournament KPIs' },
      { id: 'Data Center', label: 'Data Center', icon: Database, desc: 'Raw telemetry & database feeds' },
      { id: 'Digital Twin', label: 'Digital Twin Map', icon: Map, desc: '3D stadium spatial visualization' },
      { id: 'Platform Overview', label: 'Platform Metrics', icon: LineChart, desc: 'System health & load analytics' },
    ]
  },
  {
    name: 'Operational Domains',
    items: [
      { id: 'Venue Operations', label: 'Venue Infrastructure', icon: Building2, desc: 'HVAC, lighting, power & structural health' },
      { id: 'Language Center', label: 'Language & Accessibility', icon: Languages, desc: 'Live PA translation & fan multi-language' },
      { id: 'Crowd', label: 'Crowd Intelligence', icon: Users, desc: 'Density heatmaps & flow bottleneck alerts' },
      { id: 'Gates', label: 'Gate Ingress Analytics', icon: DoorOpen, desc: 'Turnstile speed, wait times & queue routing' },
      { id: 'Transportation', label: 'Transit & Transport', icon: Train, desc: 'Metro streams, shuttles & bus dispatch' },
      { id: 'Parking', label: 'Parking Management', icon: Car, desc: 'Lot occupancy, EV charging & traffic' },
      { id: 'Medical', label: 'Medical Response', icon: HeartPulse, desc: 'Ambulance dispatch & first-aid stations' },
      { id: 'Security', label: 'Security & Threat Detection', icon: ShieldAlert, desc: 'Perimeter monitoring & emergency protocol' },
      { id: 'Food', label: 'Food & Beverage', icon: Utensils, desc: 'Concession inventory & POS surge alerts' },
      { id: 'Washrooms', label: 'Sanitation & Washrooms', icon: Droplets, desc: 'Restroom cleanliness & queue tracking' },
      { id: 'Navigation', label: 'Fan Wayfinding', icon: Navigation, desc: 'Turn-by-turn guidance & crowd diversion' },
      { id: 'AI Operations', label: 'AI Agent Telemetry', icon: Brain, desc: 'LLM latency, token usage & copilot logs' },
      { id: 'Sustainability', label: 'Eco & Sustainability', icon: Leaf, desc: 'Solar output, waste recycling & carbon offset' },
      { id: 'Volunteers', label: 'Volunteer Dispatch', icon: Users, desc: 'Staff shift sync & stadium deployment' },
      { id: 'Reports', label: 'AI Executive Reports', icon: FileText, desc: 'Exportable operational briefs & summaries' },
    ]
  }
];

export default function MobileDrawer({ 
  isOpen, 
  onClose, 
  activeTab, 
  setActiveTab,
  drawerProgress = 0,
  isInteractiveDragging = false
}: MobileDrawerProps) {
  const [dragOffset, setDragOffset] = useState(0);
  const [isSelfDragging, setIsSelfDragging] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const effectiveProgress = isInteractiveDragging 
    ? drawerProgress 
    : (isOpen ? Math.max(0, 1 + dragOffset / 300) : 0);

  if (!isOpen && effectiveProgress <= 0.01) return null;

  const handleSelect = (id: string) => {
    setActiveTab(id);
    onClose();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsSelfDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - touchStartX.current;
    
    if (diff <= 0) {
      setDragOffset(diff);
    } else {
      setDragOffset(diff * 0.2);
    }
  };

  const handleTouchEnd = () => {
    setIsSelfDragging(false);
    touchStartX.current = null;
    
    if (dragOffset < -80) {
      onClose();
    }
    setDragOffset(0);
  };

  const currentTranslateX = isInteractiveDragging 
    ? -((1 - effectiveProgress) * 100)
    : (isOpen ? Math.min(0, dragOffset) : -100);

  const backdropOpacity = effectiveProgress * 0.8;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex overflow-hidden">
      {/* Dark Blur Backdrop (Opacity tracks finger 1:1) */}
      <div 
        className={`fixed inset-0 bg-black backdrop-blur-md ${isInteractiveDragging || isSelfDragging ? '' : 'transition-opacity duration-200'}`}
        style={{ opacity: backdropOpacity }}
        onClick={onClose}
      />

      {/* Slide Panel (Glides 1:1 with finger in real-time) */}
      <div 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ 
          transform: `translateX(${currentTranslateX}%)`,
          transition: isInteractiveDragging || isSelfDragging ? 'none' : 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)' 
        }}
        className="relative w-full h-full bg-[#05000A] flex flex-col z-10 shadow-2xl overflow-hidden"
      >
        
        {/* Header */}
        <div className="p-4 border-b border-slate-700/50 flex items-center justify-between bg-slate-900/60 shrink-0">
          <div className="flex items-center gap-2.5">
            <img 
              src="/golden_football_trophy.png" 
              alt="FIFA Trophy" 
              className="w-10 h-9 object-contain" 
              style={{ mixBlendMode: 'screen' }} 
            />
            <div>
              <div className="font-black text-sm tracking-wide text-white">STADIUM OS</div>
              <div className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">FIFA 2026 Navigation</div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700/50 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Navigation Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
          {CATEGORIES.map((category) => (
            <div key={category.name} className="space-y-2">
              <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2">
                {category.name}
              </h3>

              <div className="space-y-1.5">
                {category.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item.id)}
                      className={`w-full text-left p-3 rounded-2xl border transition-all flex items-start gap-3 group relative ${
                        isActive
                          ? 'bg-blue-600/20 border-blue-500/60 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)]'
                          : 'bg-slate-900/40 border-slate-800/80 text-slate-300 hover:bg-slate-800/50 hover:border-slate-700'
                      }`}
                    >
                      <div className={`p-2 rounded-xl shrink-0 mt-0.5 ${
                        isActive ? 'bg-blue-600 text-white' : 'bg-slate-800/80 text-slate-400 group-hover:text-white'
                      }`}>
                        <Icon size={16} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className={`font-bold text-xs ${isActive ? 'text-white' : 'text-slate-200'}`}>
                            {item.label}
                          </span>
                          <ChevronRight size={14} className={`shrink-0 transition-transform ${isActive ? 'text-blue-400 translate-x-0.5' : 'text-slate-600 group-hover:text-slate-400'}`} />
                        </div>
                        <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                          {item.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-700/50 bg-slate-900/40 shrink-0 text-center">
          <p className="text-[10px] text-slate-500 font-semibold">AI Stadium OS — Mobile Edition</p>
        </div>

      </div>
    </div>
  );
}
