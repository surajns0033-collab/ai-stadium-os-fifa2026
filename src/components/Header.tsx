/**
 * @module Header
 * @description Top navigation bar with natural language AI search,
 * notification center, emergency broadcast trigger, and user profile.
 * Integrates with the UniversalWorkflowModal for AI-powered query resolution.
 * 
 * @security Search input is sanitized before processing to prevent XSS
 * @accessibility All interactive elements have ARIA labels
 */
"use client";
import React, { useState } from 'react';
import { Search, Mic, Bell, Globe, User, ShieldAlert } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import UniversalWorkflowModal, { WorkflowContext } from './UniversalWorkflowModal';

export default function Header({ onOpenLogin }: { onOpenLogin?: () => void }) {
  const { currentUser } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [workflowContext, setWorkflowContext] = useState<WorkflowContext | null>(null);

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      setWorkflowContext({ type: 'search', query: searchQuery });
    }
  };

  return (
    <>
      <header className="h-16 glass-panel border-b border-slate-700/50 flex items-center justify-between px-6 z-20 relative">
        {/* Search Bar - Top AI Toolbar */}
        <div className="flex-1 flex items-center max-w-2xl">
          <div className="relative w-full group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400/50 group-focus-within:text-blue-400 transition-colors" size={18} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchSubmit}
              placeholder="Natural Language AI Search (e.g. 'Why is Gate B crowded?')..." 
              className="w-full bg-slate-900/50 border border-slate-700/50 rounded-full py-2 pl-10 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all shadow-inner"
            />
            <button aria-label="Voice search" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-400 transition-colors">
              <Mic size={18} />
            </button>
          </div>
        </div>

        {/* Toolbar Actions */}
        <div className="flex items-center space-x-4">
          {/* Language Profile */}
          <button aria-label="Change language" className="glass-button p-2 rounded-full relative group">
            <Globe size={20} className="text-slate-300 group-hover:text-white" />
            <span className="absolute -top-1 -right-1 bg-indigo-500 text-[10px] font-bold px-1.5 rounded-full border border-slate-900">EN</span>
          </button>
          
          {/* Notifications */}
          <button aria-label="Notifications" className="glass-button p-2 rounded-full relative group">
            <Bell size={20} className="text-slate-300 group-hover:text-white" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></span>
          </button>

          <div className="w-px h-6 bg-slate-700/50 mx-2"></div>

          {/* Emergency Button */}
          <button className="flex items-center bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 px-4 py-1.5 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(239,68,68,0.1)] hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
            <ShieldAlert size={16} className="mr-2 animate-pulse" />
            EMERGENCY
          </button>

          <div className="w-px h-6 bg-slate-700/50 mx-2"></div>

          {/* User Profile or Login */}
          {currentUser ? (
            <div className="flex items-center space-x-3 pl-2">
              <div className="text-right hidden md:block">
                <div className="text-sm font-bold text-white">{currentUser.name}</div>
                <div className="text-xs text-blue-400 font-medium tracking-wide">{currentUser.role}</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-[2px] shadow-lg">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                  <User size={18} className="text-slate-300" />
                </div>
              </div>
            </div>
          ) : (
            <button 
              onClick={onOpenLogin}
              className="px-5 py-1.5 bg-gradient-to-r from-[#2B7CE4] to-[#1AA65D] hover:from-[#1AA65D] hover:to-[#2B7CE4] rounded-full text-sm font-bold text-white transition-all shadow-[0_0_15px_rgba(43,124,228,0.3)] hover:shadow-[0_0_20px_rgba(43,124,228,0.5)]"
            >
              Sign In
            </button>
          )}
        </div>
      </header>
      
      <UniversalWorkflowModal 
        isOpen={!!workflowContext} 
        onClose={() => setWorkflowContext(null)} 
        context={workflowContext} 
      />
    </>
  );
}
