"use client";
import React from 'react';
import { FileText, Brain, BarChart2, Target, SplitSquareHorizontal, AlertTriangle, TrendingUp, CheckCircle, Clock, Users, Languages, Volume2, Download, History } from 'lucide-react';

export type AIResponseData = {
  summary: string;
  reasoning: string;
  data: string;
  recommendation: string;
  alternatives?: string;
  risk: string;
  predictedOutcome: string;
  confidence: number;
  timeSaved: string;
  usersAffected: string;
};

export default function UniversalAIResponse({ response }: { response: AIResponseData }) {
  return (
    <div className="bg-[#0A0015] border border-[#2B7CE4]/30 rounded-2xl p-4 shadow-lg text-sm text-slate-200 w-full mb-4">
      {/* 1. Summary */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1 text-[#2B7CE4]">
          <FileText size={14} />
          <span className="font-bold uppercase tracking-wider text-[10px]">Summary</span>
        </div>
        <p className="font-medium">{response.summary}</p>
      </div>

      {/* 2. AI Reasoning */}
      <div className="mb-4 bg-blue-900/10 p-3 rounded-lg border border-blue-500/20">
        <div className="flex items-center gap-2 mb-1 text-blue-400">
          <Brain size={14} className="animate-pulse" />
          <span className="font-bold uppercase tracking-wider text-[10px]">AI Reasoning</span>
        </div>
        <p className="text-slate-300">{response.reasoning}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {/* 3. Supporting Data */}
        <div className="bg-slate-900/50 p-2 rounded border border-slate-700/50">
          <div className="flex items-center gap-2 mb-1 text-slate-400">
            <BarChart2 size={12} />
            <span className="font-bold uppercase tracking-wider text-[10px]">Supporting Data</span>
          </div>
          <p className="text-xs">{response.data}</p>
        </div>
        {/* 8. Confidence Score */}
        <div className="bg-slate-900/50 p-2 rounded border border-slate-700/50 flex flex-col justify-center items-center">
          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Confidence Score</div>
          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-[#1AA65D]" />
            <span className="text-xl font-black text-[#1AA65D]">{response.confidence}%</span>
          </div>
        </div>
      </div>

      {/* 4. Recommendation */}
      <div className="mb-4 bg-[#1AA65D]/10 p-3 rounded-lg border border-[#1AA65D]/30">
        <div className="flex items-center gap-2 mb-1 text-[#1AA65D]">
          <Target size={14} />
          <span className="font-bold uppercase tracking-wider text-[10px]">Recommendation</span>
        </div>
        <p className="font-bold text-white">{response.recommendation}</p>
      </div>

      {/* 5. Alternatives */}
      <div className="mb-4 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
        <div className="flex items-center gap-2 mb-1 text-slate-400">
          <SplitSquareHorizontal size={14} />
          <span className="font-bold uppercase tracking-wider text-[10px]">Alternative Options</span>
        </div>
        <p className="text-xs text-slate-300">{response.alternatives}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {/* 6. Risk Assessment */}
        <div className="bg-[#E20074]/10 p-3 rounded-lg border border-[#E20074]/30">
          <div className="flex items-center gap-2 mb-1 text-[#E20074]">
            <AlertTriangle size={14} />
            <span className="font-bold uppercase tracking-wider text-[10px]">Risk Assessment</span>
          </div>
          <p className="text-xs">{response.risk}</p>
        </div>
        
        {/* 7. Predicted Outcome */}
        <div className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/30">
          <div className="flex items-center gap-2 mb-1 text-purple-400">
            <TrendingUp size={14} />
            <span className="font-bold uppercase tracking-wider text-[10px]">Predicted Outcome</span>
          </div>
          <p className="text-xs">{response.predictedOutcome}</p>
        </div>
      </div>

      {/* 9 & 10. Time & Users */}
      <div className="flex justify-between items-center bg-slate-900 rounded-lg p-2 mb-4 border border-slate-800">
        <div className="flex items-center gap-2 text-xs">
          <Clock size={12} className="text-amber-400" />
          <span className="text-slate-300">Time Saved: <span className="font-bold text-white">{response.timeSaved}</span></span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <Users size={12} className="text-blue-400" />
          <span className="text-slate-300">Affected: <span className="font-bold text-white">{response.usersAffected}</span></span>
        </div>
      </div>

      {/* 11, 12, 13, 14. Action Row */}
      <div className="grid grid-cols-4 gap-2 border-t border-slate-700/50 pt-3">
        <button className="flex flex-col items-center justify-center p-2 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
          <Languages size={16} className="mb-1" />
          <span className="text-[9px] uppercase tracking-wider font-bold">Translate</span>
        </button>
        <button className="flex flex-col items-center justify-center p-2 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
          <Volume2 size={16} className="mb-1" />
          <span className="text-[9px] uppercase tracking-wider font-bold">Voice Summary</span>
        </button>
        <button className="flex flex-col items-center justify-center p-2 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
          <Download size={16} className="mb-1" />
          <span className="text-[9px] uppercase tracking-wider font-bold">Export</span>
        </button>
        <button className="flex flex-col items-center justify-center p-2 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
          <History size={16} className="mb-1" />
          <span className="text-[9px] uppercase tracking-wider font-bold">History</span>
        </button>
      </div>

    </div>
  );
}
