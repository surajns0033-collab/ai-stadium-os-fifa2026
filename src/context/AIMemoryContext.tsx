"use client";
import React, { createContext, useContext, useState } from 'react';

type AIMemoryState = {
  currentMatch: string;
  currentStadium: string;
  currentUserRole: string;
  currentLanguage: string;
  currentDashboard: string;
  currentGate: string | null;
  currentIncident: string | null;
  currentSimulation: string | null;
  recentSearches: string[];
  accessibilityPreferences: string[];
  favoriteReports: string[];
  previousRecommendations: string[];
  notificationHistory: string[];
  previousConversations: string[];
  uploadedData: string[];
  historicalTrends: string;
};

const defaultMemory: AIMemoryState = {
  currentMatch: 'Group A: MEX vs GER',
  currentStadium: 'Estadio Azteca, Mexico City',
  currentUserRole: 'Chief Organizer',
  currentLanguage: 'English',
  currentDashboard: 'Digital Twin',
  currentGate: null,
  currentIncident: null,
  currentSimulation: null,
  recentSearches: ['Gate C density', 'Medical staff locations'],
  accessibilityPreferences: ['High Contrast', 'Large Text'],
  favoriteReports: ['EOD Revenue', 'Security Summary'],
  previousRecommendations: ['Deploy 5 volunteers to Gate C'],
  notificationHistory: [],
  previousConversations: [],
  uploadedData: ['staff_roster_june.csv'],
  historicalTrends: 'Historical data shows Gate C peaks 45 mins before kickoff.',
};

const AIMemoryContext = createContext<{
  memory: AIMemoryState;
  updateMemory: (updates: Partial<AIMemoryState>) => void;
}>({
  memory: defaultMemory,
  updateMemory: () => {},
});

export const AIMemoryProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [memory, setMemory] = useState<AIMemoryState>(defaultMemory);

  const updateMemory = (updates: Partial<AIMemoryState>) => {
    setMemory(prev => ({ ...prev, ...updates }));
  };

  return (
    <AIMemoryContext.Provider value={{ memory, updateMemory }}>
      {children}
    </AIMemoryContext.Provider>
  );
};

export const useAIMemory = () => useContext(AIMemoryContext);
