"use client";
import React, { useState } from 'react';
import { Database, Network, Shield, Cpu, Activity, Zap, PlayCircle, Users, Unlock, Key, Layers, ArrowRight, BrainCircuit, MessageSquare, Terminal, User } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

export default function SystemArchitectureWorkspace() {
  const { emitGlobalEvent, systemLogs, currentUser, login } = useAppContext();
  type TabId2 = 'architecture' | 'simulator' | 'security' | 'orchestrator';
  const [activeTab, setActiveTab] = useState<TabId2>('architecture');

  const triggerMockEvent = (type: string, message: string) => {
    emitGlobalEvent({
      id: Date.now().toString(),
      type: 'METRO_DELAY', // Just a mock type
      message: message,
      source: 'System Architecture Simulator',
      priority: 'high',
      timestamp: new Date().toLocaleTimeString()
    });
  };

  const renderArchitecture = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 animate-fade-in">
      <div className="glass-panel p-6 border-blue-500/30 bg-blue-500/5">
        <h3 className="font-bold text-lg text-blue-400 mb-4 flex items-center gap-2"><Layers size={20} /> AI Experience Layer</h3>
        <p className="text-sm text-slate-400 mb-4">Universal AI Workspace serving Fans, Volunteers, Organizers, Security, Medical, and Staff.</p>
        <div className="flex flex-wrap gap-2">
          {['Web', 'Mobile', 'Kiosk', 'Digital Signage'].map(platform => (
            <span key={platform} className="px-2 py-1 bg-slate-800 rounded-md text-xs text-slate-300">{platform}</span>
          ))}
        </div>
      </div>

      <div className="glass-panel p-6 border-purple-500/30 bg-purple-500/5">
        <h3 className="font-bold text-lg text-purple-400 mb-4 flex items-center gap-2"><BrainCircuit size={20} /> AI Orchestration Layer</h3>
        <p className="text-sm text-slate-400 mb-4">Coordinates multi-agent collaboration between specialized domain AIs.</p>
        <div className="flex flex-wrap gap-2">
          {['Crowd AI', 'Medical AI', 'Security AI', 'Transport AI'].map(agent => (
            <span key={agent} className="px-2 py-1 bg-purple-900/40 rounded-md text-xs text-purple-200 border border-purple-500/30">{agent}</span>
          ))}
        </div>
      </div>

      <div className="glass-panel p-6 border-[#E20074]/30 bg-[#E20074]/5">
        <h3 className="font-bold text-lg text-[#E20074] mb-4 flex items-center gap-2"><Cpu size={20} /> Decision Intelligence Engine</h3>
        <p className="text-sm text-slate-400 mb-4">Core engine for Analytics, Simulation, Predictions, and Explainable AI (XAI).</p>
        <div className="flex flex-wrap gap-2">
          {['Prediction Engine', 'Simulation Engine', 'Reasoning Engine', 'Explainability'].map(module => (
            <span key={module} className="px-2 py-1 bg-[#E20074]/20 rounded-md text-xs text-[#E20074] border border-[#E20074]/30">{module}</span>
          ))}
        </div>
      </div>

      <div className="glass-panel p-6 border-green-500/30 bg-green-500/5 col-span-full">
        <h3 className="font-bold text-lg text-green-400 mb-4 flex items-center gap-2"><Network size={20} /> Integration & Data Processing Layer</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3 bg-slate-800 rounded-lg text-center border border-slate-700">
            <Database size={24} className="mx-auto mb-2 text-slate-400" />
            <span className="text-xs text-slate-300">Data Platform</span>
          </div>
          <div className="p-3 bg-slate-800 rounded-lg text-center border border-slate-700">
            <Activity size={24} className="mx-auto mb-2 text-slate-400" />
            <span className="text-xs text-slate-300">IoT Sensors</span>
          </div>
          <div className="p-3 bg-slate-800 rounded-lg text-center border border-slate-700">
            <Shield size={24} className="mx-auto mb-2 text-slate-400" />
            <span className="text-xs text-slate-300">Security / Audit</span>
          </div>
          <div className="p-3 bg-slate-800 rounded-lg text-center border border-slate-700">
            <Zap size={24} className="mx-auto mb-2 text-slate-400" />
            <span className="text-xs text-slate-300">APIs & Webhooks</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSimulator = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in h-full">
      <div className="glass-panel p-6 flex flex-col gap-6">
        <div>
          <h3 className="font-bold text-lg text-white mb-2 flex items-center gap-2"><PlayCircle size={20} className="text-[#E20074]" /> Real-Time Event Simulator</h3>
          <p className="text-sm text-slate-400 mb-4">Trigger enterprise-wide events. This proves the Event-Driven Architecture: a single event cascades to all dashboards and AI memory instantly.</p>
        </div>
        
        <div className="space-y-3">
          <button onClick={() => triggerMockEvent('METRO_DELAY', 'Metro Line 2 Delayed by 15 mins. Crowd build-up expected at Station C.')} className="w-full text-left p-4 rounded-xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition-colors flex justify-between items-center group">
            <div>
              <div className="font-bold text-white text-sm">Trigger Metro Delay</div>
              <div className="text-xs text-slate-400 mt-1">Impacts: Transport, Crowd, Volunteers</div>
            </div>
            <ArrowRight size={18} className="text-slate-500 group-hover:text-blue-400" />
          </button>
          
          <button onClick={() => triggerMockEvent('GATE_CONGESTION', 'Scanner Failure at Gate B. Queue wait time exceeding 12 minutes.')} className="w-full text-left p-4 rounded-xl bg-slate-800 border border-slate-700 hover:border-orange-500 transition-colors flex justify-between items-center group">
            <div>
              <div className="font-bold text-white text-sm">Trigger Gate B Scanner Failure</div>
              <div className="text-xs text-slate-400 mt-1">Impacts: Gates, Crowd, Security</div>
            </div>
            <ArrowRight size={18} className="text-slate-500 group-hover:text-orange-400" />
          </button>
          
          <button onClick={() => triggerMockEvent('MEDICAL_EMERGENCY', 'Heat exhaustion reported in Sector 112 (Direct Sun).')} className="w-full text-left p-4 rounded-xl bg-slate-800 border border-slate-700 hover:border-red-500 transition-colors flex justify-between items-center group">
            <div>
              <div className="font-bold text-white text-sm">Trigger Mass Medical Incident</div>
              <div className="text-xs text-slate-400 mt-1">Impacts: Medical, Crowd, Sustainability</div>
            </div>
            <ArrowRight size={18} className="text-slate-500 group-hover:text-red-400" />
          </button>
        </div>
      </div>
      
      <div className="glass-panel p-6 flex flex-col">
        <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2"><Terminal size={20} className="text-green-400" /> Event Pipeline Logs</h3>
        <div className="flex-1 bg-[#05000A] rounded-xl border border-slate-800 p-4 font-mono text-xs overflow-y-auto custom-scrollbar">
          {systemLogs.length === 0 ? (
            <div className="text-slate-500 flex items-center justify-center h-full">Waiting for events...</div>
          ) : (
            <div className="space-y-2">
              {systemLogs.map((log, i) => (
                <div key={i} className="text-green-400">
                  <span className="text-slate-500">[{log.timestamp}]</span> {log.message}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
      <div className="glass-panel p-6">
        <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2"><Users size={20} className="text-blue-400" /> Role-Based Access Control (RBAC)</h3>
        <p className="text-sm text-slate-400 mb-6">Simulate login as different roles to verify secure rendering and API access restriction.</p>
        
        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => login({ id: '2', name: 'Security Chief', role: 'SECURITY', permissions: ['VIEW_SEC', 'CMD_SEC'] })} className={`p-4 rounded-xl border transition-colors flex flex-col items-center justify-center gap-2 ${currentUser?.role === 'SECURITY' ? 'bg-blue-900/40 border-blue-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'}`}>
            <Shield size={24} />
            <span className="text-sm font-bold">Security Role</span>
          </button>
          <button onClick={() => login({ id: '3', name: 'Medical Lead', role: 'MEDICAL', permissions: ['VIEW_MED', 'CMD_MED'] })} className={`p-4 rounded-xl border transition-colors flex flex-col items-center justify-center gap-2 ${currentUser?.role === 'MEDICAL' ? 'bg-red-900/40 border-red-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'}`}>
            <Activity size={24} />
            <span className="text-sm font-bold">Medical Role</span>
          </button>
          <button onClick={() => login({ id: '1', name: 'Demo Organizer', role: 'ORGANIZER', permissions: ['ALL'] })} className={`p-4 rounded-xl border transition-colors flex flex-col items-center justify-center gap-2 ${currentUser?.role === 'ORGANIZER' ? 'bg-purple-900/40 border-purple-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'}`}>
            <Unlock size={24} />
            <span className="text-sm font-bold">Organizer (Admin)</span>
          </button>
          <button onClick={() => login({ id: '4', name: 'Fan 1234', role: 'FAN', permissions: ['VIEW_FAN'] })} className={`p-4 rounded-xl border transition-colors flex flex-col items-center justify-center gap-2 ${currentUser?.role === 'FAN' ? 'bg-green-900/40 border-green-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'}`}>
            <User size={24} />
            <span className="text-sm font-bold">Fan Role</span>
          </button>
        </div>
      </div>

      <div className="glass-panel p-6 flex flex-col">
        <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2"><Key size={20} className="text-orange-400" /> Security & Audit Foundation</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700">
            <span className="text-sm text-white">Encryption at Rest (AES-256)</span>
            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded">ACTIVE</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700">
            <span className="text-sm text-white">Multi-Factor Auth (MFA)</span>
            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded">ENFORCED</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700">
            <span className="text-sm text-white">Zero-Trust Network Access</span>
            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded">ACTIVE</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700">
            <span className="text-sm text-white">Audit Logging (Immutable)</span>
            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded">LOGGING</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOrchestrator = () => (
    <div className="glass-panel p-6 h-full flex flex-col animate-fade-in">
      <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2"><BrainCircuit size={20} className="text-purple-400" /> AI Orchestrator Logs</h3>
      <p className="text-sm text-slate-400 mb-6">Visualizing the Multi-Agent Collaboration and Shared Memory Layer as defined in Part 8.</p>

      <div className="flex-1 bg-[#05000A] rounded-xl border border-slate-800 p-6 overflow-y-auto custom-scrollbar space-y-6">
        
        {/* Mock Orchestration Flow */}
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1"><MessageSquare size={14} className="text-blue-400"/></div>
            <div>
              <div className="text-xs font-bold text-blue-400 mb-1">User Intent Recognized</div>
              <div className="text-sm text-slate-300">&ldquo;Why is Gate B crowded?&rdquo;</div>
            </div>
          </div>
          
          <div className="flex gap-4 ml-8">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-1"><Database size={14} className="text-purple-400"/></div>
            <div>
              <div className="text-xs font-bold text-purple-400 mb-1">Shared Knowledge Retrieval</div>
              <div className="text-sm text-slate-400 font-mono text-xs p-2 bg-slate-900 rounded border border-slate-800">
                &gt; FETCHING Gate_B_Layout<br/>
                &gt; FETCHING Current_Match_Context<br/>
                &gt; FETCHING Live_IoT_Sensors
              </div>
            </div>
          </div>

          <div className="flex gap-4 ml-8 border-l-2 border-slate-800 pl-4 py-2">
            <div className="w-8 h-8 rounded-full bg-[#E20074]/20 flex items-center justify-center shrink-0 mt-1"><Activity size={14} className="text-[#E20074]"/></div>
            <div className="flex-1">
              <div className="text-xs font-bold text-[#E20074] mb-1">Multi-Agent Collaboration</div>
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="p-2 border border-slate-800 rounded bg-slate-900/50">
                  <div className="text-[10px] font-bold text-orange-400 uppercase">Transport AI</div>
                  <div className="text-xs text-slate-400">Metro Line 2 dropped 800 passengers 3 mins ago.</div>
                </div>
                <div className="p-2 border border-slate-800 rounded bg-slate-900/50">
                  <div className="text-[10px] font-bold text-green-400 uppercase">Operations AI</div>
                  <div className="text-xs text-slate-400">Scanner 4 offline at Gate B. Throughput reduced 25%.</div>
                </div>
                <div className="p-2 border border-slate-800 rounded bg-slate-900/50">
                  <div className="text-[10px] font-bold text-blue-400 uppercase">Crowd AI</div>
                  <div className="text-xs text-slate-400">Density at 92%. Crush hazard imminent.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 ml-8">
            <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0 mt-1"><BrainCircuit size={14} className="text-yellow-400"/></div>
            <div>
              <div className="text-xs font-bold text-yellow-400 mb-1">AI Orchestrator Conflict Resolution & Output</div>
              <div className="text-sm text-slate-300 border border-yellow-500/30 bg-yellow-500/10 p-3 rounded-lg">
                <strong>Unified Recommendation:</strong> Deploy 5 volunteers to Gate B and open overflow lanes at Gate C.
                <div className="mt-2 text-xs text-slate-400">Explainability (XAI) payload generated. Confidence: 96%.</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

  return (
    <div className="h-full w-full flex flex-col p-8 bg-[#0A0015] overflow-y-auto custom-scrollbar text-white">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">System Architecture Workspace <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-purple-500/20 text-purple-400 rounded border border-purple-500/30">Admin Only</span></h2>
        <p className="text-slate-400">Visualizing the underlying Enterprise Architecture, Event-Driven Pipeline, and AI Orchestration.</p>
      </div>

      <div className="flex gap-2 mb-6 border-b border-slate-800 pb-px">
        {['architecture', 'simulator', 'security', 'orchestrator'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as TabId2)}
            className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${activeTab === tab ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
          >
            {tab.replace('_', ' ')}
          </button>
        ))}
      </div>

      <div className="flex-1 min-h-[400px]">
        {activeTab === 'architecture' && renderArchitecture()}
        {activeTab === 'simulator' && renderSimulator()}
        {activeTab === 'security' && renderSecurity()}
        {activeTab === 'orchestrator' && renderOrchestrator()}
      </div>
    </div>
  );
}
