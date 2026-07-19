"use client";
import React, { useMemo } from 'react';
import { useAppContext } from '@/context/AppContext';
import { Brain, AlertTriangle, Zap, MessageSquare } from 'lucide-react';

export default function AICopilot() {
  const { gates } = useAppContext();

  // XAI Reasoning Engine
  const recommendation = useMemo(() => {
    const criticalGates = gates.filter(g => g.capacity >= 90);
    const warningGates = gates.filter(g => g.capacity >= 75 && g.capacity < 90);
    const freeGates = gates.filter(g => g.capacity < 50);

    if (criticalGates.length > 0) {
      const g = criticalGates[0];
      const target = freeGates.length > 0 ? freeGates[0].name : 'a less crowded gate';
      return {
        type: 'critical',
        title: 'High Congestion Alert',
        reasoning: `${g.name} is at ${g.capacity}% capacity, exceeding safe thresholds.`,
        action: `Redirect incoming fans to ${target}. Dispatch 3 multilingual volunteers to assist with redirection.`,
      };
    } else if (warningGates.length > 0) {
      const g = warningGates[0];
      return {
        type: 'warning',
        title: 'Rising Crowd Density',
        reasoning: `${g.name} is approaching bottleneck levels (${g.capacity}%).`,
        action: `Open auxiliary scanners at ${g.name} to increase throughput.`,
      };
    }

    return {
      type: 'normal',
      title: 'Operations Optimal',
      reasoning: 'All gates are currently operating within optimal parameters.',
      action: 'Continue standard monitoring.',
    };
  }, [gates]);

  return (
    <div className="w-[320px] flex-shrink-0 flex flex-col h-full space-y-4">
      {/* Copilot Header */}
      <div className="p-4 bg-slate-900/60 border border-slate-700/50 rounded-2xl flex items-center space-x-3 backdrop-blur-md">
        <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-lg">
          <Brain size={20} className="animate-pulse" />
        </div>
        <div>
          <h3 className="font-bold text-white text-sm">GenAI Ops Copilot</h3>
          <p className="text-xs text-slate-400">Live XAI Reasoning</p>
        </div>
      </div>

      {/* Main Reasoning Panel */}
      <div className="flex-1 bg-slate-900/60 border border-slate-700/50 rounded-2xl p-4 flex flex-col overflow-y-auto no-scrollbar backdrop-blur-md">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-slate-300">Active Analysis</h4>
          {recommendation.type === 'critical' && <span className="flex w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>}
        </div>

        <div className={`p-4 rounded-xl border mb-4 ${
          recommendation.type === 'critical' ? 'bg-red-500/10 border-red-500/30' :
          recommendation.type === 'warning' ? 'bg-amber-500/10 border-amber-500/30' :
          'bg-blue-500/10 border-blue-500/30'
        }`}>
          <div className="flex items-center space-x-2 mb-2">
            {recommendation.type === 'critical' ? <AlertTriangle size={16} className="text-red-400" /> : <Zap size={16} className="text-blue-400" />}
            <span className={`font-bold text-sm ${
              recommendation.type === 'critical' ? 'text-red-400' :
              recommendation.type === 'warning' ? 'text-amber-400' :
              'text-blue-400'
            }`}>{recommendation.title}</span>
          </div>
          <div className="space-y-3">
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Reasoning</div>
              <p className="text-sm text-slate-200">{recommendation.reasoning}</p>
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Actionable Recommendation</div>
              <p className="text-sm text-white font-medium">{recommendation.action}</p>
            </div>
          </div>
        </div>

        {/* Dispatch Button */}
        {recommendation.type !== 'normal' && (
          <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold transition-colors flex items-center justify-center">
            <MessageSquare size={16} className="mr-2" />
            Dispatch AI Command to Volunteers
          </button>
        )}
      </div>
    </div>
  );
}
