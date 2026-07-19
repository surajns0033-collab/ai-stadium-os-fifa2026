"use client";
import React from 'react';
import { Bot, Sparkles, TrendingUp, Clock, AlertCircle } from 'lucide-react';

export default function HeroAICard() {
  return (
    <div className="glass-panel rounded-3xl p-6 relative overflow-hidden group border border-blue-500/30">
      {/* Background glowing effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
        
        {/* Left: AI Operational Summary */}
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-blue-500/20 p-2 rounded-xl text-blue-400">
              <Bot size={24} />
            </div>
            <h2 className="text-xl font-extrabold tracking-tight text-white flex items-center">
              Current Operational Summary
              <Sparkles size={16} className="text-blue-400 ml-2 animate-pulse" />
            </h2>
          </div>
          
          <p className="text-lg text-slate-200 leading-relaxed font-light mb-6">
            Stadium operations remain stable. <strong className="text-white font-semibold">Gate B is expected to reach 92% occupancy within 11 minutes.</strong> Food Court 3 has increasing demand. Metro Line 2 will arrive shortly.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors shadow-lg shadow-blue-500/20">
              Deploy 3 Volunteers to Gate B
            </button>
            <button className="glass-button text-slate-300 px-5 py-2 rounded-full text-sm font-medium">
              View Simulation
            </button>
            <button className="glass-button text-slate-300 px-5 py-2 rounded-full text-sm font-medium">
              Explain Reasoning
            </button>
          </div>
        </div>

        {/* Right: Confidence and Context stats */}
        <div className="w-full md:w-64 bg-slate-900/60 rounded-2xl p-4 border border-slate-700/50 flex flex-col gap-4">
          <div>
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">AI Confidence Score</div>
            <div className="text-3xl font-black text-green-400">96%</div>
          </div>
          <div className="h-px bg-slate-700/50 w-full"></div>
          <div className="flex items-center text-sm text-slate-300">
            <TrendingUp size={16} className="text-blue-400 mr-2" />
            Predictive Model Active
          </div>
          <div className="flex items-center text-sm text-slate-300">
            <AlertCircle size={16} className="text-orange-400 mr-2" />
            3 Secondary Risks Detected
          </div>
          <div className="flex items-center text-sm text-slate-300">
            <Clock size={16} className="text-slate-400 mr-2" />
            Updated 2 seconds ago
          </div>
        </div>

      </div>
    </div>
  );
}
