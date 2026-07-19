"use client";
import React, { useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import { Bot, User, Shield, Stethoscope, Users, Building, Settings, X, Train } from 'lucide-react';

const PRIMARY_PERSONAS: { role: any; icon: React.ElementType; color: string }[] = [
  { role: 'Organizer', icon: Settings, color: 'text-blue-400' },
  { role: 'Venue Staff', icon: Building, color: 'text-orange-400' },
  { role: 'Volunteer', icon: Users, color: 'text-green-400' },
  { role: 'Fan', icon: User, color: 'text-purple-400' },
];

const EXTENDED_PERSONAS: { role: any; icon: React.ElementType; color: string }[] = [
  { role: 'Security Team', icon: Shield, color: 'text-red-400' },
  { role: 'Medical Team', icon: Stethoscope, color: 'text-pink-400' },
  { role: 'Transport Authority', icon: Train, color: 'text-yellow-400' },
  { role: 'Executive Management', icon: Bot, color: 'text-indigo-400' },
];

export default function LoginModal({ onClose }: { onClose: () => void }) {
  const { login } = useAppContext();
  const [isSimulating, setIsSimulating] = useState(false);
  const [selectedRole, setSelectedRole] = useState<any | null>(null);

  const handleLogin = (role: any, isExtended: boolean = false) => {
    // Basic mock user object creation based on selected role
    const mockUser = {
      id: Math.random().toString(),
      name: `Mock ${role}`,
      role: role.toUpperCase() === 'ORGANIZER' || role.toUpperCase() === 'FAN' || role.toUpperCase() === 'SECURITY' || role.toUpperCase() === 'MEDICAL' ? role.toUpperCase() : 'FAN',
      permissions: ['ALL']
    };
    login(mockUser as any);
    setSelectedRole(role);
    setIsSimulating(true);
    
    // AI Welcome Experience simulation as specified in Part 3
    setTimeout(() => {
      // Logic removed as it is now handled by the login call above
    }, 2500);
  };

  if (isSimulating) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
        <div className="glass-panel p-8 rounded-3xl max-w-md w-full text-center border-blue-500/30">
          <Bot size={48} className="mx-auto text-blue-400 mb-6 animate-pulse" />
          <h2 className="text-2xl font-bold text-white mb-2">AI Welcome Experience</h2>
          <p className="text-blue-300 font-medium mb-6">Initializing {selectedRole} Workspace...</p>
          <div className="text-left text-sm text-slate-400 space-y-3 bg-slate-900/50 p-4 rounded-xl border border-slate-700">
            <p className="animate-pulse">Loading Stadium Digital Twin...</p>
            <p className="animate-pulse" style={{ animationDelay: '0.5s' }}>Checking weather & transport APIs...</p>
            <p className="animate-pulse" style={{ animationDelay: '1s' }}>Generating AI Operational Summary...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="glass-panel w-full max-w-3xl rounded-3xl p-6 relative animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors">
          <X size={24} />
        </button>
        
        <div className="text-center mb-8 pt-4">
          <h2 className="text-2xl font-bold text-white mb-2">Select AI Workspace Persona</h2>
          <p className="text-slate-400 text-sm">Target users mapped exactly to the Part 1 specification.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 pl-2">Primary Personas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PRIMARY_PERSONAS.map((p) => (
              <button
                key={p.role}
                onClick={() => handleLogin(p.role)}
                className="glass-button p-4 rounded-2xl flex flex-col items-center justify-center gap-3 group"
              >
                <div className={`p-3 bg-slate-800 rounded-xl group-hover:scale-110 transition-transform ${p.color}`}>
                  <p.icon size={24} />
                </div>
                <span className="font-semibold text-sm text-slate-200">{p.role}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 pl-2">Extended Personas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {EXTENDED_PERSONAS.map((p) => (
              <button
                key={p.role}
                onClick={() => handleLogin(p.role)}
                className="glass-button p-4 rounded-2xl flex flex-col items-center justify-center gap-3 group"
              >
                <div className={`p-3 bg-slate-800 rounded-xl group-hover:scale-110 transition-transform ${p.color}`}>
                  <p.icon size={24} />
                </div>
                <span className="font-semibold text-sm text-slate-200 text-center">{p.role}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
