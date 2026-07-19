"use client";
import React, { useState } from 'react';
import { UploadCloud, FileText, Image as ImageIcon, Map as MapIcon, Database, CheckCircle2, ChevronRight, PlayCircle } from 'lucide-react';
import UniversalWorkflowModal, { WorkflowType } from '../UniversalWorkflowModal';

export default function DataCenterWorkspace() {
  const [activeWorkflow, setActiveWorkflow] = useState<string | null>(null);
  const [workflowContext, setWorkflowContext] = useState<{ type: WorkflowType; actionName?: string } | null>(null);

  const startUploadWorkflow = (workflowName: string) => {
    setActiveWorkflow(workflowName);
    // Simulate file selection and upload process
    setTimeout(() => {
      setWorkflowContext({ type: 'click_action', actionName: `Ingest & Analyze ${workflowName}` });
      setActiveWorkflow(null);
    }, 1000);
  };

  const uploadModules = [
    {
      id: 'CSV / Excel',
      icon: Database,
      title: 'Structured Data Import',
      description: 'Upload CSV or Excel for schedule, inventory, transport, or crowd predictions.',
      features: ['Validate & Map Schema', 'Generate Dashboard', 'Run Predictions']
    },
    {
      id: 'PDF Document',
      icon: FileText,
      title: 'Unstructured PDF Import',
      description: 'Upload reports, plans, or guidelines for AI extraction and summarization.',
      features: ['Extract Text & Tables', 'Create Searchable Knowledge', 'Summary Insights']
    },
    {
      id: 'Image / Diagram',
      icon: ImageIcon,
      title: 'Image Intelligence',
      description: 'Upload maps, food menus, QR codes, or parking layouts.',
      features: ['Detect Layout', 'Extract Recommendations', 'Related Dashboards']
    },
    {
      id: 'Stadium Map',
      icon: MapIcon,
      title: 'Blueprint Ingestion',
      description: 'Upload CAD or Stadium Map to automatically generate a Digital Twin.',
      features: ['Detect Gates & Seats', 'Indoor Navigation Mesh', 'Crowd Simulation Ready']
    }
  ];

  return (
    <>
      <div className="h-full w-full flex flex-col p-8 bg-[#0A0015] overflow-y-auto custom-scrollbar text-white">
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Enterprise Data Center</h2>
          <p className="text-slate-400">Multi-Format AI Data Ingestion Pipeline. Upload any file to generate intelligent insights and interactive dashboards instantly.</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          {uploadModules.map(module => (
            <div 
              key={module.id}
              onClick={() => startUploadWorkflow(module.id)}
              className="glass-panel p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-colors">
                  <module.icon size={24} className="text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{module.title}</h3>
                  <p className="text-sm text-slate-400 mb-4">{module.description}</p>
                  
                  <div className="space-y-2">
                    {module.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-slate-300">
                        <CheckCircle2 size={12} className="text-[#1AA65D] mr-2" /> {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-center self-center opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                  <ChevronRight size={24} className="text-blue-400" />
                </div>
              </div>

              {activeWorkflow === module.id && (
                <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm flex flex-col items-center justify-center">
                  <UploadCloud size={32} className="text-blue-400 animate-bounce mb-2" />
                  <div className="text-sm font-bold text-white">Opening Dialog...</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="glass-panel p-6 border border-[#E20074]/30 bg-[#E20074]/5">
          <h3 className="font-bold text-[#E20074] flex items-center gap-2 mb-2">
            <PlayCircle size={18} /> Simulation Engine
          </h3>
          <p className="text-sm text-slate-300 mb-4">Start an AI Simulation Workflow based on current ingested data.</p>
          <div className="flex gap-4">
            <button 
              onClick={() => setWorkflowContext({ type: 'simulate', actionName: 'Metro Delay Scenario' })}
              className="bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-sm transition-colors"
            >
              Scenario: Metro Delay
            </button>
            <button 
              onClick={() => setWorkflowContext({ type: 'simulate', actionName: 'Severe Weather Evacuation' })}
              className="bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-sm transition-colors"
            >
              Scenario: Lightning Evacuation
            </button>
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
