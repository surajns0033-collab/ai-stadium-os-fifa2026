"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Bot, MessageSquare, Globe, Lightbulb, ChevronDown, CheckCircle2, CircleDashed, Brain } from 'lucide-react';
import UniversalAIResponse, { AIResponseData } from './UniversalAIResponse';
import { useAIMemory } from '@/context/AIMemoryContext';

const COPILOTS = [
  'Orchestrator AI',
  'Fan AI',
  'Volunteer AI',
  'Organizer AI',
  'Venue Ops AI',
  'Security AI',
  'Medical AI',
  'Crowd AI',
  'Navigation AI',
  'Food AI',
  'Transport AI',
  'Accessibility AI',
  'Sustainability AI',
  'Language AI',
  'Prediction AI',
  'Simulation AI',
  'Executive AI'
];

type Message = {
  id: string;
  sender: 'user' | 'ai';
  text?: string;
  isSimulating?: boolean;
  simulationSteps?: { agent: string, status: 'pending' | 'active' | 'done' }[];
  responseData?: AIResponseData;
};

export default function AICopilotsPanel() {
  const { memory } = useAIMemory();
  const [activeCopilot, setActiveCopilot] = useState('Orchestrator AI');
  const [isCopilotMenuOpen, setIsCopilotMenuOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const simulateAgentCollaboration = (query: string) => {
    // 1. Add user message
    const userMsgId = Date.now().toString();
    setMessages(prev => [...prev, { id: userMsgId, sender: 'user', text: query }]);

    // 2. Add AI "Thinking" state with Multi-Agent Simulation
    const aiMsgId = (Date.now() + 1).toString();
    const cascade = [
      { agent: 'Crowd AI', status: 'pending' as const },
      { agent: 'Transport AI', status: 'pending' as const },
      { agent: 'Navigation AI', status: 'pending' as const },
      { agent: 'Executive AI', status: 'pending' as const }
    ];

    setMessages(prev => [...prev, { id: aiMsgId, sender: 'ai', isSimulating: true, simulationSteps: cascade }]);

    // Step-by-step animation
    let stepIndex = 0;
    const interval = setInterval(() => {
      setMessages(prev => prev.map(msg => {
        if (msg.id !== aiMsgId || !msg.simulationSteps) return msg;
        
        const newSteps = [...msg.simulationSteps];
        
        // Mark previous as done
        if (stepIndex > 0 && stepIndex <= newSteps.length) {
          newSteps[stepIndex - 1].status = 'done';
        }
        
        // Mark current as active
        if (stepIndex < newSteps.length) {
          newSteps[stepIndex].status = 'active';
        }

        return { ...msg, simulationSteps: newSteps };
      }));

      stepIndex++;

      // Finish simulation
      if (stepIndex > cascade.length) {
        clearInterval(interval);
        
        // Replace simulation with Universal Response
        const finalResponse: AIResponseData = {
          summary: `Resolved issue at ${memory.currentGate || 'Sector 4'}. Redirected flow.`,
          reasoning: `Crowd AI detected 82% density at ${memory.currentGate || 'Sector 4'}. Transport AI confirmed Metro Line 2 surge. Navigation AI calculated alternate route via Gate C.`,
          data: `Density: 82% | Flow: 1.2k/min | Wait: 12m`,
          recommendation: `Deploy 5 volunteers to ${memory.currentGate || 'Sector 4'} and open overflow Gate C.`,
          alternatives: `Hold metro egress by 3 minutes to clear existing queue.`,
          risk: `Low. 5% chance of minor bottleneck at Gate C.`,
          predictedOutcome: `Queue clears in 4 minutes. Flow normalizes.`,
          confidence: 94,
          timeSaved: `8 mins`,
          usersAffected: `~1,200 Fans`,
        };

        setMessages(prev => prev.map(msg => 
          msg.id === aiMsgId ? { id: aiMsgId, sender: 'ai', responseData: finalResponse } : msg
        ));
      }
    }, 1200); // 1.2 seconds per agent step
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const query = inputText;
    setInputText('');
    simulateAgentCollaboration(query);
  };

  return (
    <div className="w-[400px] glass-panel border-l border-slate-700/50 h-full flex flex-col z-20 relative bg-[#0A0015]/90 backdrop-blur-2xl">
      
      {/* Header & Copilot Selector */}
      <div className="p-4 border-b border-slate-700/50 relative">
        <div 
          className="flex items-center justify-between bg-slate-800/50 hover:bg-slate-800 rounded-lg p-2 cursor-pointer transition-colors border border-slate-700"
          onClick={() => setIsCopilotMenuOpen(!isCopilotMenuOpen)}
        >
          <div className="flex items-center">
            <Bot size={20} className="text-[#E20074] mr-3" />
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Active Agent</div>
              <div className="font-bold text-white leading-tight">{activeCopilot}</div>
            </div>
          </div>
          <ChevronDown size={18} className="text-slate-400" />
        </div>

        {/* Dropdown Menu */}
        {isCopilotMenuOpen && (
          <div className="absolute top-full left-4 right-4 mt-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 max-h-64 overflow-y-auto custom-scrollbar p-2">
            {COPILOTS.map(c => (
              <button 
                key={c}
                onClick={() => { setActiveCopilot(c); setIsCopilotMenuOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCopilot === c ? 'bg-[#E20074]/20 text-[#E20074]' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Chat/Context Area */}
      <div className="flex-1 p-4 overflow-y-auto custom-scrollbar flex flex-col gap-4">
        
        {/* Context Engine Box (Only show if no messages yet) */}
        {messages.length === 0 && (
          <div className="bg-blue-900/10 rounded-2xl p-4 border border-blue-500/20">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                <Brain size={12} /> AI Memory Engine
              </span>
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-300">
              <div><span className="text-slate-500">Role:</span> {memory.currentUserRole}</div>
              <div><span className="text-slate-500">Lang:</span> {memory.currentLanguage}</div>
              <div><span className="text-slate-500">View:</span> {memory.currentDashboard}</div>
              <div><span className="text-slate-500">Match:</span> {memory.currentMatch.split(':')[0]}</div>
            </div>
            
            {/* Quick Actions */}
            <div className="mt-4 space-y-2">
              <button onClick={() => simulateAgentCollaboration("What is the optimal crowd redistribution plan for Gate C?")} className="w-full text-left p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-sm font-medium text-slate-300 transition-colors border border-slate-700/50 flex items-center">
                <Lightbulb size={16} className="text-yellow-400 mr-3 shrink-0" /> Resolve Gate C Congestion
              </button>
              <button onClick={() => simulateAgentCollaboration("Translate the medical emergency announcement to Spanish.")} className="w-full text-left p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-sm font-medium text-slate-300 transition-colors border border-slate-700/50 flex items-center">
                <Globe size={16} className="text-purple-400 mr-3 shrink-0" /> Translate Announcement
              </button>
              <button onClick={() => simulateAgentCollaboration("Navigate to Crowd Intelligence and show me sector B.")} className="w-full text-left p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-sm font-medium text-slate-300 transition-colors border border-slate-700/50 flex items-center">
                <Globe size={16} className="text-blue-400 mr-3 shrink-0" /> Navigate Dashboard
              </button>
              <button onClick={() => simulateAgentCollaboration("Generate the final Executive Match Report.")} className="w-full text-left p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-sm font-medium text-slate-300 transition-colors border border-slate-700/50 flex items-center">
                <Lightbulb size={16} className="text-emerald-400 mr-3 shrink-0" /> Generate Report
              </button>
            </div>
          </div>
        )}

        {/* Chat Messages */}
        {messages.map((msg) => (
          <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
            {msg.sender === 'user' && (
              <div className="bg-[#2B7CE4] text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[85%] text-sm shadow-md">
                {msg.text}
              </div>
            )}
            
            {msg.sender === 'ai' && msg.isSimulating && (
              <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-4 w-full">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-3">Orchestrating Agents...</div>
                <div className="space-y-3">
                  {msg.simulationSteps?.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      {step.status === 'done' ? (
                        <CheckCircle2 size={16} className="text-[#1AA65D]" />
                      ) : step.status === 'active' ? (
                        <CircleDashed size={16} className="text-[#E20074] animate-spin-slow" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-slate-700"></div>
                      )}
                      <span className={`text-sm font-bold ${
                        step.status === 'done' ? 'text-slate-300' :
                        step.status === 'active' ? 'text-white' : 'text-slate-600'
                      }`}>
                        {step.agent} {step.status === 'active' && 'thinking...'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {msg.sender === 'ai' && msg.responseData && (
              <UniversalAIResponse response={msg.responseData} />
            )}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Chat Input */}
      <form onSubmit={handleSend} className="p-4 border-t border-slate-700/50 bg-slate-900/30">
        <div className="relative">
          <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`Message ${activeCopilot}...`}
            className="w-full bg-slate-950 border border-slate-700 rounded-full py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E20074]/50 transition-colors shadow-inner"
          />
        </div>
      </form>
    </div>
  );
}
