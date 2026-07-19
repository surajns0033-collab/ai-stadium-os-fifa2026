"use client";
import React, { useState, useEffect } from 'react';
import { Brain, Sparkles, Database, BarChart3, TrendingUp, Settings, Map, Clock, AlertTriangle, ShieldCheck, Share2, Download, Mic, Globe, History, Eye, Play, X, CheckCircle2 } from 'lucide-react';
import UniversalAIResponse, { AIResponseData } from './workspaces/UniversalAIResponse';

export type WorkflowType = 'search' | 'explain' | 'simulate' | 'broadcast' | 'compare' | 'history' | 'audit' | 'click_action';

interface WorkflowContext {
  type: WorkflowType;
  query?: string;
  sourceModule?: string;
  actionName?: string;
}

interface UniversalWorkflowModalProps {
  isOpen: boolean;
  onClose: () => void;
  context: WorkflowContext | null;
}

export default function UniversalWorkflowModal({ isOpen, onClose, context }: UniversalWorkflowModalProps) {
  const [loadingStep, setLoadingStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(true);

  // Loading Steps for the "Universal Interaction Pipeline"
  const loadingSteps = [
    "🧠 AI Understanding Stadium Context...",
    "📊 Analyzing Operational Data...",
    "📈 Predicting Future Conditions...",
    "🤖 Generating Recommendations...",
    "🌍 Translating Results..."
  ];

  useEffect(() => {
    if (isOpen) {
      // Use setTimeout to avoid setState synchronously in effect
      const init = setTimeout(() => {
        setIsProcessing(true);
        setLoadingStep(0);
      }, 0);
      
      const interval = setInterval(() => {
        setLoadingStep(prev => {
          if (prev >= loadingSteps.length - 1) {
            clearInterval(interval);
            setTimeout(() => setIsProcessing(false), 500);
            return prev;
          }
          return prev + 1;
        });
      }, 600);

      return () => {
        clearTimeout(init);
        clearInterval(interval);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, context]);

  if (!isOpen || !context) return null;

  // Mock AI Response Data based on the context
  const generateMockResponse = (): AIResponseData => {
    if (context.type === 'search' && context.query?.toLowerCase().includes('gate b')) {
      return {
        summary: 'Gate B is experiencing unexpected congestion.',
        reasoning: 'Metro Line 2 arrived 3 minutes early, dropping 800 passengers simultaneously. Scanner 4 is also offline.',
        data: 'Density: 92% | Flow: 800/min | Wait: 12m',
        recommendation: 'Deploy 5 volunteers and open overflow lanes at Gate C.',
        risk: 'High (Crush Hazard)',
        predictedOutcome: 'Wait times return to under 4m in 15 mins.',
        confidence: 96,
        timeSaved: '18 mins',
        usersAffected: '800 Fans'
      };
    }
    
    if (context.type === 'simulate') {
      return {
        summary: 'Simulation Results Generated.',
        reasoning: 'Applied "Metro Delay" scenario to current stadium state. Computed impact across all zones.',
        data: 'Simulated 45,000 entities.',
        recommendation: 'Pre-emptively open Gate D and delay halftime announcements by 5 minutes.',
        risk: 'Medium (Schedule delay)',
        predictedOutcome: 'Prevents 85% of projected bottleneck at North Concourse.',
        confidence: 91,
        timeSaved: '45 mins',
        usersAffected: '12,000 Fans'
      };
    }

    if (context.type === 'broadcast') {
      return {
        summary: 'Multilingual Broadcast Ready.',
        reasoning: 'Emergency tone set. Text translated to Top 5 demographic languages in Sector A.',
        data: 'Channels: PA System, Digital Signage, App Push.',
        recommendation: 'Approve broadcast to clear Sector A.',
        risk: 'Panic risk mitigated by calm tone.',
        predictedOutcome: 'Sector cleared in 3m 45s.',
        confidence: 99,
        timeSaved: '2 mins',
        usersAffected: '1,500 Fans'
      };
    }

    // Default response for explain/compare/etc
    return {
      summary: `AI Analysis complete for ${context.actionName || context.type}.`,
      reasoning: 'Cross-referenced historical patterns with live IoT data streams.',
      data: 'Processed 2.4M data points.',
      recommendation: 'Proceed with standard operational procedures.',
      risk: 'Low',
      predictedOutcome: 'Stable operations.',
      confidence: 94,
      timeSaved: '5 mins',
      usersAffected: '0 Fans'
    };
  };

  const aiResponse = generateMockResponse();

  return (
    <div className="fixed inset-0 z-[100] bg-[#0A0015]/80 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in">
      <div className="w-full max-w-4xl bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-700/50 bg-slate-800/30 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
              <Brain size={16} className="text-blue-400" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">
                {context.type === 'search' ? 'Global AI Search' : 
                 context.type === 'simulate' ? 'Simulation Engine' :
                 context.type === 'broadcast' ? 'Broadcast Workflow' :
                 context.type === 'explain' ? 'AI Explanation' : 
                 context.type === 'compare' ? 'Historical Compare' : 
                 `AI Workflow: ${context.actionName}`}
              </h3>
              {context.query && <p className="text-xs text-slate-400">&ldquo;{context.query}&rdquo;</p>}
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-700/50 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 bg-[#0A0015]">
          {isProcessing ? (
            <div className="flex flex-col items-center justify-center h-64 gap-6">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 border-4 border-slate-700 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                <Brain size={24} className="text-blue-400 animate-pulse" />
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold text-white mb-2">Universal Interaction Pipeline</h4>
                <div className="flex flex-col gap-2">
                  {loadingSteps.map((step, idx) => (
                    <div key={idx} className={`text-sm transition-all duration-500 ${idx === loadingStep ? 'text-blue-400 font-bold scale-105' : idx < loadingStep ? 'text-slate-500 line-through' : 'text-slate-700 opacity-50'}`}>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in-up">
              {context.type === 'broadcast' && (
                <div className="mb-6 glass-panel p-4 border border-orange-500/30 bg-orange-500/5">
                  <h4 className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Mic size={14} /> Broadcast Configuration
                  </h4>
                  <div className="flex gap-4">
                    <button className="flex-1 bg-slate-800 border border-slate-600 rounded-lg p-2 text-sm text-center hover:border-blue-400 transition-colors">Translate (12 Langs)</button>
                    <button className="flex-1 bg-slate-800 border border-slate-600 rounded-lg p-2 text-sm text-center hover:border-red-400 transition-colors text-red-400 font-bold">Emergency Tone</button>
                    <button className="flex-1 bg-slate-800 border border-slate-600 rounded-lg p-2 text-sm text-center hover:border-blue-400 transition-colors"><Play size={14} className="inline mr-1"/> Preview Audio</button>
                  </div>
                </div>
              )}
              
              <UniversalAIResponse response={aiResponse} />
              
              {/* Universal Action Buttons */}
              <div className="mt-6 flex flex-wrap gap-3 pt-6 border-t border-slate-800">
                <button className="glass-button px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 hover:border-blue-500 hover:text-blue-400">
                  <Map size={14} /> Show on Digital Twin
                </button>
                <button className="glass-button px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 hover:border-purple-500 hover:text-purple-400">
                  <History size={14} /> View History
                </button>
                <button className="glass-button px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 hover:border-[#1AA65D] hover:text-[#1AA65D]">
                  <Share2 size={14} /> Share
                </button>
                <button className="glass-button px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 hover:border-slate-300">
                  <Download size={14} /> Export Report
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
