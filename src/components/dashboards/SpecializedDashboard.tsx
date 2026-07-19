"use client";
import React, { useState } from 'react';
import DashboardWrapper from './DashboardWrapper';
import { Sparkles, ArrowRight, Brain, Zap, ShieldAlert, BarChart } from 'lucide-react';
import UniversalAIResponse, { AIResponseData } from '../workspaces/UniversalAIResponse';

export interface SpecializedDashboardProps {
  id: string;
  title: string;
  subtitle: string;
  visualizations: { label: string; value: string; trend?: string; trendUp?: boolean }[];
  clickInteractions: string[];
  insights: { id: string; message: string; priority: 'low' | 'medium' | 'high'; time: string; }[];
  mockAIResponse: AIResponseData;
}

export default function SpecializedDashboard({ 
  title, 
  subtitle, 
  visualizations, 
  clickInteractions,
  insights,
  mockAIResponse
}: SpecializedDashboardProps) {
  const [activeInteraction, setActiveInteraction] = useState<string | null>(null);
  const [showAIResponse, setShowAIResponse] = useState(false);

  const handleInteractionClick = (interaction: string) => {
    setActiveInteraction(interaction);
    setShowAIResponse(true);
  };

  return (
    <DashboardWrapper title={title} subtitle={subtitle} insights={insights}>
      
      {/* Visualizations Grid */}
      <div className="grid grid-cols-4 gap-4">
        {visualizations.map((vis, idx) => (
          <div key={idx} className="glass-panel p-4 border border-slate-700/50 hover:border-slate-500 transition-colors cursor-pointer group relative overflow-hidden">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{vis.label}</h4>
            <div className="text-2xl font-black text-white flex items-center gap-2">
              {vis.value}
              {vis.trend && (
                <span className={`text-xs px-2 py-1 rounded-full border ${vis.trendUp ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-[#1AA65D]/10 text-[#1AA65D] border-[#1AA65D]/20'}`}>
                  {vis.trend}
                </span>
              )}
            </div>
            
            {/* Hover Explainer */}
            <div className="absolute inset-0 bg-[#0A0015]/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                <Brain size={14}/> Click to analyze
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 h-full mt-2">
        {/* Main Content Area / Map Placeholder */}
        <div className="col-span-2 glass-panel border border-slate-700/50 flex flex-col relative overflow-hidden bg-slate-900/30">
           <div className="absolute top-4 left-4 z-10 flex gap-2">
             <span className="bg-[#E20074]/20 text-[#E20074] border border-[#E20074]/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
               <Zap size={14}/> Live Feed Active
             </span>
           </div>
           
           {/* Placeholder for actual visual (Heatmap, map, timeline etc) */}
           <div className="flex-1 flex items-center justify-center relative">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="text-center z-10 p-8">
               <BarChart size={48} className="text-slate-700 mx-auto mb-4" />
               <h3 className="text-xl font-bold text-slate-500 mb-2">{title} Visualization Engine</h3>
               <p className="text-sm text-slate-600">Select any metric or interaction to trigger the AI decision workspace.</p>
             </div>
           </div>
        </div>

        {/* AI Interaction Workflows */}
        <div className="col-span-1 flex flex-col gap-4">
          <div className="glass-panel p-5 border border-slate-700/50 bg-slate-900/50">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Sparkles size={14} className="text-purple-400"/> AI Interactions
            </h3>
            <div className="flex flex-col gap-2">
              {clickInteractions.map((interaction, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleInteractionClick(interaction)}
                  className={`text-left p-3 rounded-lg border text-sm font-medium transition-all flex items-center justify-between ${
                    activeInteraction === interaction 
                      ? 'bg-blue-500/20 border-blue-500/50 text-white' 
                      : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  {interaction}
                  <ArrowRight size={14} className={activeInteraction === interaction ? 'text-blue-400' : 'opacity-0'} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI Response Modal Overlay if interaction selected */}
      {showAIResponse && activeInteraction && (
        <div className="fixed inset-0 z-50 bg-[#0A0015]/80 backdrop-blur-sm flex items-center justify-center p-8">
          <div className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-4 border-b border-slate-700/50 bg-slate-800/50 flex justify-between items-center">
              <h3 className="font-bold text-white flex items-center gap-2">
                <Brain size={16} className="text-purple-400"/> 
                AI Workflow: {activeInteraction}
              </h3>
              <button 
                onClick={() => setShowAIResponse(false)}
                className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider"
              >
                Close
              </button>
            </div>
            <div className="p-4 overflow-y-auto custom-scrollbar">
               <UniversalAIResponse response={{
                 ...mockAIResponse,
                 summary: `AI Output for ${activeInteraction}`
               }} />
            </div>
          </div>
        </div>
      )}
    </DashboardWrapper>
  );
}
