"use client";
import React from 'react';
import { LayoutDashboard, Map, Bot, Bell, Menu, Sparkles } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onToggleMenu: () => void;
  onToggleChat: () => void;
  onToggleAlerts?: () => void;
  isChatOpen: boolean;
  isDrawerOpen: boolean;
}

export default function MobileBottomNav({
  activeTab,
  setActiveTab,
  onToggleMenu,
  onToggleChat,
  isChatOpen,
  isDrawerOpen
}: MobileBottomNavProps) {

  const TABS = [
    { 
      id: 'Home', 
      label: 'Home', 
      icon: LayoutDashboard,
      action: () => setActiveTab('Home'),
      isActive: activeTab === 'Home' && !isChatOpen && !isDrawerOpen
    },
    { 
      id: 'Digital Twin', 
      label: 'Map', 
      icon: Map,
      action: () => setActiveTab('Digital Twin'),
      isActive: activeTab === 'Digital Twin' && !isChatOpen && !isDrawerOpen
    },
    { 
      id: 'Ask AI', 
      label: 'Ask AI', 
      icon: Bot,
      action: onToggleChat,
      isActive: isChatOpen,
      badge: true
    },
    { 
      id: 'Menu', 
      label: 'All Apps', 
      icon: Menu,
      action: onToggleMenu,
      isActive: isDrawerOpen
    }
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 h-16 bg-[#05000A]/95 backdrop-blur-xl border-t border-slate-800/80 z-40 flex items-center justify-around px-3 shadow-[0_-10px_25px_rgba(0,0,0,0.5)]">
      {TABS.map((tab) => {
        const Icon = tab.icon;
        const isActive = tab.isActive;

        return (
          <button
            key={tab.id}
            onClick={tab.action}
            className={`flex flex-col items-center justify-center flex-1 h-full py-1 relative transition-all active:scale-95 ${
              isActive ? 'text-blue-400' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {/* Top Active Indicator Glow */}
            {isActive && (
              <span className="absolute top-0 inset-x-4 h-0.5 bg-gradient-to-r from-blue-500 to-[#E20074] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            )}

            <div className="relative">
              {tab.id === 'Ask AI' ? (
                <div className={`p-1.5 rounded-full transition-all ${
                  isChatOpen 
                    ? 'bg-gradient-to-r from-blue-600 to-[#E20074] text-white shadow-[0_0_15px_rgba(226,0,116,0.6)]' 
                    : 'bg-slate-800/80 text-blue-400 border border-slate-700'
                }`}>
                  <Bot size={18} className={isChatOpen ? 'animate-bounce' : ''} />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-black animate-ping" />
                </div>
              ) : (
                <Icon size={18} className={isActive ? 'scale-110 text-blue-400' : ''} />
              )}
            </div>

            <span className={`text-[10px] font-bold mt-1 tracking-tight ${
              isActive ? 'text-blue-400' : 'text-slate-400'
            }`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
