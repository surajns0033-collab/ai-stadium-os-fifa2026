"use client";
import React, { useState } from 'react';
import { Sparkles, Brain, Download, Globe, Mic, History, PlayCircle, BarChart3, Activity } from 'lucide-react';
import { useAIMemory } from '@/context/AIMemoryContext';
import UniversalWorkflowModal, { WorkflowType } from '../UniversalWorkflowModal';

interface Insight {
  id: string;
  message: string;
  priority: 'low' | 'medium' | 'high';
  time: string;
}

interface DashboardWrapperProps {
  title: string;
  subtitle: string;
  insights: Insight[];
  children: React.ReactNode;
}

export default function DashboardWrapper({ title, subtitle, insights, children }: DashboardWrapperProps) {
  const { memory } = useAIMemory();
  const [workflowContext, setWorkflowContext] = useState<{ type: WorkflowType; actionName?: string } | null>(null);

  const universalActions = [
    { id: 'explain' as WorkflowType, icon: Brain, label: 'Explain with AI', color: 'text-purple-400' },
    { id: 'predict' as WorkflowType, icon: BarChart3, label: 'Predict Future', color: 'text-blue-400' },
    { id: 'simulate' as WorkflowType, icon: PlayCircle, label: 'Run Simulation', color: 'text-[#E20074]' },
    { id: 'compare' as WorkflowType, icon: Activity, label: 'Historical Compare', color: 'text-[#1AA65D]' },
    { id: 'export' as WorkflowType, icon: Download, label: 'Export Report', color: 'text-slate-400' },
    { id: 'translate' as WorkflowType, icon: Globe, label: 'Translate', color: 'text-slate-400' },
    { id: 'voice' as WorkflowType, icon: Mic, label: 'Voice Summary', color: 'text-slate-400' },
    { id: 'audit' as WorkflowType, icon: History, label: 'Audit Trail', color: 'text-slate-400' },
  ];

  const handleActionClick = (id: WorkflowType) => {
    const type = id === 'simulate' ? 'simulate' :
                 id === 'explain'  ? 'explain'  :
                 id === 'compare'  ? 'compare'  :
                 id === 'audit'    ? 'audit'    :
                 id === 'history'  ? 'history'  :
                 'click_action';
    setWorkflowContext({ type, actionName: id });
  };

  void memory; // suppress unused warning

  return (
    <>
      {/* Full-height flex column — header fixed, body scrolls */}
      <div className="w-full h-auto lg:h-full flex flex-col bg-[#0A0015] animate-fade-in overflow-visible lg:overflow-hidden">

        {/* ── Fixed Header ── */}
        <div className="shrink-0 flex items-center justify-between px-6 pt-5 pb-4 border-b border-slate-800/60">
          <div>
            <h1 className="text-2xl font-black text-white tracking-tight flex items-center gap-3">
              {title}
              <span className="text-[10px] bg-[#E20074]/20 text-[#E20074] px-2 py-1 rounded-full border border-[#E20074]/30 uppercase tracking-widest font-bold">Live</span>
            </h1>
            <p className="text-slate-400 text-sm mt-0.5">{subtitle}</p>
          </div>

          {/* Actions toolbar */}
          <div className="flex bg-slate-900/60 p-1.5 rounded-xl border border-slate-800">
            {universalActions.map(action => (
              <button
                key={action.id}
                onClick={() => handleActionClick(action.id)}
                className="p-2 rounded-lg transition-all hover:bg-slate-800 group relative"
                title={action.label}
              >
                <action.icon size={17} className={`${action.color} group-hover:scale-110 transition-transform`} />
              </button>
            ))}
          </div>
        </div>

        {/* ── Body: left main + right AI feed ── */}
        <div className="flex-1 flex flex-col lg:flex-row min-h-0 gap-0">

          {/* Main content — scrollable independently */}
          <div className="flex-1 overflow-y-auto custom-scrollbar px-6 py-5">
            <div className="flex flex-col gap-5">
              {children}
            </div>
          </div>

          {/* AI Insight Feed sidebar — scrollable independently */}
          <div className="w-full lg:w-72 shrink-0 border-t lg:border-t-0 lg:border-l border-slate-800/60 flex flex-col overflow-hidden">
            <div className="shrink-0 px-4 pt-4 pb-3 border-b border-slate-800/60">
              <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                <Sparkles size={13} /> AI Insight Feed
                <span className="ml-auto w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              </h3>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar px-3 py-3 flex flex-col gap-3">
              {insights.map(insight => (
                <div
                  key={insight.id}
                  className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-3 hover:border-slate-500 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      insight.priority === 'high'   ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      insight.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                                                      'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {insight.priority}
                    </span>
                    <span className="text-[10px] text-slate-500">{insight.time}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{insight.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <UniversalWorkflowModal
        isOpen={!!workflowContext}
        onClose={() => setWorkflowContext(null)}
        context={workflowContext}
      />
    </>
  );
}
