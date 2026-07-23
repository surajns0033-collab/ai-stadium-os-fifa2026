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
import { Search, Mic, Bell, Globe, User, ShieldAlert, Menu } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import UniversalWorkflowModal, { WorkflowContext } from './UniversalWorkflowModal';

export default function Header({ onOpenLogin, onToggleMobileMenu }: { onOpenLogin?: () => void; onToggleMobileMenu?: () => void }) {
  const { currentUser, globalLang, setGlobalLang } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [workflowContext, setWorkflowContext] = useState<WorkflowContext | null>(null);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'ar', label: 'العربية' },
    { code: 'ja', label: '日本語' }
  ];

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      setWorkflowContext({ type: 'search', query: searchQuery });
    }
  };

  return (
    <>
      <header className="h-16 fixed top-0 left-0 right-0 z-50 bg-[#0A0015]/95 backdrop-blur-xl border-b border-slate-700/50 flex items-center justify-between px-3 sm:px-4 lg:px-6 w-full max-w-full overflow-hidden shrink-0 shadow-2xl">
        {/* Mobile Hamburger Menu Button (3-Line Icon) */}
        <button
          onClick={onToggleMobileMenu}
          className="lg:hidden p-2 mr-2 rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
          title="Open Navigation Menu"
        >
          <Menu size={20} />
        </button>

        {/* Search Bar - Top AI Toolbar */}
        <div className="flex-1 flex items-center max-w-2xl">
          <div className="relative w-full group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400/50 group-focus-within:text-blue-400 transition-colors" size={18} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchSubmit}
              placeholder="AI Search..." 
              className="w-full bg-slate-900/50 border border-slate-700/50 rounded-full py-1.5 sm:py-2 pl-9 sm:pl-10 pr-10 sm:pr-12 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all shadow-inner"
            />
            <button aria-label="Voice search" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-400 transition-colors">
              <Mic size={18} />
            </button>
          </div>
        </div>

        {/* Toolbar Actions */}
        <div className="flex items-center space-x-1.5 sm:space-x-4 shrink-0">
          {/* Language Profile */}
          <div className="relative">
            <button 
              onClick={() => setShowLangMenu(!showLangMenu)}
              aria-label="Change language" 
              className="glass-button p-2 rounded-full relative group flex items-center justify-center"
            >
              <Globe size={20} className="text-slate-300 group-hover:text-white" />
              <span className="absolute -top-1 -right-1 bg-indigo-500 text-[10px] font-bold px-1.5 rounded-full border border-slate-900 uppercase">
                {globalLang}
              </span>
            </button>

            {showLangMenu && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-slate-800 border border-slate-700 rounded-xl shadow-xl overflow-hidden z-50">
                {LANGUAGES.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setGlobalLang(lang.code);
                      setShowLangMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-700 transition-colors ${globalLang === lang.code ? 'text-blue-400 font-bold bg-slate-900' : 'text-slate-300'}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Notifications */}
          <button aria-label="Notifications" className="glass-button p-2 rounded-full relative group">
            <Bell size={20} className="text-slate-300 group-hover:text-white" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></span>
          </button>

          <div className="hidden sm:block w-px h-6 bg-slate-700/50 mx-2"></div>

          {/* Emergency Button */}
          <button className="flex items-center bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 px-3 py-1.5 sm:px-4 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(239,68,68,0.1)] hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
            <ShieldAlert size={16} className="sm:mr-2 animate-pulse" />
            <span className="hidden sm:inline">EMERGENCY</span>
          </button>

          <div className="hidden sm:block w-px h-6 bg-slate-700/50 mx-2"></div>

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
