"use client";
import React, { useState } from 'react';
import { useAppContext, GateData } from '@/context/AppContext';
import { Upload, X, Check, Database } from 'lucide-react';

export default function JuryPanel() {
  const { isJuryPanelOpen, setIsJuryPanelOpen, setGates } = useAppContext();
  const [jsonInput, setJsonInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isJuryPanelOpen) return null;

  const handleUpload = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      if (Array.isArray(parsed)) {
        // Simple validation
        const isValid = parsed.every(g => g.id && g.capacity !== undefined);
        if (isValid) {
          setGates(parsed as GateData[]);
          setStatus('success');
          setTimeout(() => {
            setStatus('idle');
            setIsJuryPanelOpen(false);
          }, 1500);
          return;
        }
      }
      setStatus('error');
    } catch (e) {
      setStatus('error');
    }
  };

  const loadScenario = (type: 'crisis' | 'normal') => {
    if (type === 'crisis') {
      setGates([
        { id: 'gA', name: 'Gate A (North)', capacity: 45, status: 'normal', x: 50, y: 15 },
        { id: 'gB', name: 'Gate B (East)', capacity: 95, status: 'critical', x: 85, y: 50 },
        { id: 'gC', name: 'Gate C (South)', capacity: 85, status: 'warning', x: 50, y: 85 },
        { id: 'gD', name: 'Gate D (West)', capacity: 20, status: 'normal', x: 15, y: 50 },
      ]);
    } else {
      setGates([
        { id: 'gA', name: 'Gate A (North)', capacity: 30, status: 'normal', x: 50, y: 15 },
        { id: 'gB', name: 'Gate B (East)', capacity: 40, status: 'normal', x: 85, y: 50 },
        { id: 'gC', name: 'Gate C (South)', capacity: 35, status: 'normal', x: 50, y: 85 },
        { id: 'gD', name: 'Gate D (West)', capacity: 20, status: 'normal', x: 15, y: 50 },
      ]);
    }
    setIsJuryPanelOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg p-6 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl">
        <button onClick={() => setIsJuryPanelOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">
          <X size={20} />
        </button>
        
        <div className="flex items-center space-x-3 mb-6">
          <Database className="text-purple-400" size={24} />
          <h2 className="text-xl font-bold text-white">Jury Evaluation Data Upload</h2>
        </div>

        <p className="text-sm text-slate-400 mb-4">
          Paste a JSON array of gate data to test the GenAI Copilot&apos;s reasoning engine dynamically.
        </p>

        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          className="w-full h-40 p-3 bg-slate-800 border border-slate-700 rounded-xl text-slate-300 font-mono text-xs focus:ring-2 focus:ring-purple-500 outline-none mb-4"
          placeholder='[{"id":"gB","name":"Gate B","capacity":95,"status":"critical","x":85,"y":50}, ...]'
        />

        <div className="flex items-center space-x-3">
          <button 
            onClick={handleUpload}
            className="flex-1 bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
          >
            <Upload size={16} className="mr-2" /> Upload JSON
          </button>
        </div>

        {status === 'error' && <p className="text-red-400 text-sm mt-3">Invalid JSON format or missing fields.</p>}
        {status === 'success' && <p className="text-green-400 text-sm mt-3 flex items-center"><Check size={16} className="mr-1"/> Data injected successfully!</p>}

        <div className="mt-6 pt-6 border-t border-slate-700">
          <p className="text-xs text-slate-400 uppercase tracking-wider mb-3">Quick Scenarios</p>
          <div className="flex space-x-3">
            <button onClick={() => loadScenario('crisis')} className="flex-1 bg-red-500/20 text-red-400 border border-red-500/30 py-2 rounded-lg text-sm hover:bg-red-500/30 transition-colors">
              Simulate Crisis (Gate B 95%)
            </button>
            <button onClick={() => loadScenario('normal')} className="flex-1 bg-green-500/20 text-green-400 border border-green-500/30 py-2 rounded-lg text-sm hover:bg-green-500/30 transition-colors">
              Normal Operations
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
