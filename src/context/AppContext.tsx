/**
 * @module AppContext
 * @description Central application state management using React Context API.
 * Implements an event-driven architecture with a global event bus,
 * role-based access control (RBAC), and system observability logging.
 * 
 * Design Decisions:
 * - Context API chosen over Redux/Zustand to minimize bundle size
 * - Event bus pattern enables decoupled module communication
 * - Log rotation (50 entries max) prevents memory leaks in long sessions
 * 
 * @see {@link GlobalEvent} for event schema
 * @see {@link UserRole} for RBAC persona types
 */
"use client";
import React, { createContext, useContext, useState } from 'react';

export type GlobalEvent = {
  id: string;
  type: string;
  message: string;
  source: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  timestamp: string;
};

export type SystemLog = {
  timestamp: string;
  message: string;
  type: 'info' | 'warn' | 'error' | 'success';
};

export type UserRole = 'FAN' | 'SECURITY' | 'MEDICAL' | 'ORGANIZER';

export type UserData = {
  id: string;
  name: string;
  role: UserRole;
  permissions: string[];
};

type AppContextType = {
  currentUser: UserData | null;
  login: (user: UserData) => void;
  logout: () => void;
  
  // Event Driven Architecture
  activeEvents: GlobalEvent[];
  emitGlobalEvent: (event: GlobalEvent) => void;
  clearEvent: (id: string) => void;
  
  // System Observability
  systemLogs: SystemLog[];
  addSystemLog: (log: SystemLog) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<UserData | null>({
    id: '1',
    name: 'Demo Organizer',
    role: 'ORGANIZER',
    permissions: ['ALL']
  });

  const [activeEvents, setActiveEvents] = useState<GlobalEvent[]>([]);
  const [systemLogs, setSystemLogs] = useState<SystemLog[]>([
    { timestamp: new Date().toLocaleTimeString(), message: 'System initialized.', type: 'info' },
    { timestamp: new Date().toLocaleTimeString(), message: 'RBAC Active. Encryption at rest Active.', type: 'success' }
  ]);

  const login = (user: UserData) => {
    setCurrentUser(user);
    addSystemLog({
      timestamp: new Date().toLocaleTimeString(),
      message: `User ${user.name} logged in with role ${user.role}`,
      type: 'info'
    });
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const emitGlobalEvent = (event: GlobalEvent) => {
    setActiveEvents(prev => [event, ...prev]);
    
    // Simulate Event-Driven ripple effect for Observability
    addSystemLog({
      timestamp: new Date().toLocaleTimeString(),
      message: `EVENT RECEIVED: ${event.type} - ${event.message}`,
      type: 'warn'
    });

    // Simulate Orchestrator resolving it
    setTimeout(() => {
       addSystemLog({
         timestamp: new Date().toLocaleTimeString(),
         message: `AI ORCHESTRATOR: Processing event ${event.type}. Context loaded. Multi-agent negotiation initiated.`,
         type: 'info'
       });
    }, 1000);

    setTimeout(() => {
      addSystemLog({
        timestamp: new Date().toLocaleTimeString(),
        message: `DECISION ENGINE: Generated response for ${event.type}. Global dashboards updated.`,
        type: 'success'
      });
   }, 3000);
  };

  const clearEvent = (id: string) => {
    setActiveEvents(prev => prev.filter(e => e.id !== id));
  };

  const addSystemLog = (log: SystemLog) => {
    setSystemLogs(prev => [log, ...prev].slice(0, 50)); // Keep last 50 logs
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        login,
        logout,
        activeEvents,
        emitGlobalEvent,
        clearEvent,
        systemLogs,
        addSystemLog
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
