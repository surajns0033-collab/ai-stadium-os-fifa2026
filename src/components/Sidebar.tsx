"use client";
import React from 'react';
import { LayoutDashboard, Users, DoorOpen, Utensils, Droplets, Activity, ShieldAlert, Train, Leaf, Navigation, Map, LineChart, FileText, Settings, HeartPulse, Building2, Languages, Network, Database, Car, Brain } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

const MENU_ITEMS = [
  { id: 'Home', label: 'Command Center', icon: LayoutDashboard },
  { id: 'Data Center', label: 'Data Center', icon: Database, highlight: true },
  { id: 'Digital Twin', label: 'Digital Twin', icon: Map },
  { id: 'Platform Overview', label: 'Platform Overview', icon: LineChart, highlight: true },
  { id: 'Operations Command', label: 'Ops Command', icon: Settings, highlight: true },
  { id: 'System Architecture', label: 'System Arch (Admin)', icon: Network, highlight: true },
  { id: 'Identity & Security', label: 'Identity (Super Admin)', icon: ShieldAlert, highlight: true },
];

const DOMAINS = [
  { id: 'Crowd', label: 'Crowd Intelligence', icon: Users },
  { id: 'Gates', label: 'Gate Analytics', icon: DoorOpen },
  { id: 'Transportation', label: 'Transit & Transport', icon: Train },
  { id: 'Parking', label: 'Parking Dashboard', icon: Car },
  { id: 'Medical', label: 'Medical Operations', icon: HeartPulse },
  { id: 'Security', label: 'Security & Threat', icon: ShieldAlert },
  { id: 'Food', label: 'Food & Beverage', icon: Utensils },
  { id: 'Washrooms', label: 'Washroom Status', icon: Droplets },
  { id: 'Stadium', label: 'Stadium Dashboard', icon: Building2 },
  { id: 'Navigation', label: 'Navigation Dashboard', icon: Navigation },
  { id: 'AI Operations', label: 'AI Operations', icon: Brain },
  { id: 'Football Operations', label: 'Football Operations', icon: Activity },
  { id: 'Sustainability', label: 'Sustainability', icon: Leaf },
  { id: 'Accessibility', label: 'Accessibility', icon: Activity },
  { id: 'Volunteers', label: 'Volunteer Sync', icon: Users },
  { id: 'Venue Operations', label: 'Venue Infrastructure', icon: Building2 },
  { id: 'Language Center', label: 'Language Center', icon: Languages },
  { id: 'Reports', label: 'AI Reports', icon: FileText },
];

const SIDEBAR_TRANSLATIONS: Record<string, Record<string, string>> = {
  es: {
    'Command Center': 'Centro de Mando',
    'Data Center': 'Centro de Datos',
    'Digital Twin': 'Gemelo Digital',
    'Platform Overview': 'Resumen de Plataforma',
    'Ops Command': 'Comando de Operaciones',
    'System Arch (Admin)': 'Arquitectura del Sistema',
    'Identity (Super Admin)': 'Identidad y Seguridad',
    'Crowd Intelligence': 'Inteligencia de Multitudes',
    'Gate Analytics': 'Análisis de Puertas',
    'Transit & Transport': 'Tránsito y Transporte',
    'Parking Dashboard': 'Estacionamiento',
    'Medical Operations': 'Operaciones Médicas',
    'Security & Threat': 'Seguridad y Amenazas',
    'Food & Beverage': 'Alimentos y Bebidas',
    'Washroom Status': 'Estado de Baños',
    'Stadium Dashboard': 'Estadio',
    'Navigation Dashboard': 'Navegación',
    'AI Operations': 'Operaciones de IA',
    'Football Operations': 'Operaciones de Fútbol',
    'Sustainability': 'Sostenibilidad',
    'Accessibility': 'Accesibilidad',
    'Volunteer Sync': 'Voluntarios',
    'Venue Infrastructure': 'Infraestructura del Recinto',
    'Language Center': 'Centro de Idiomas',
    'AI Reports': 'Reportes de IA'
  },
  hi: {
    'Command Center': 'कमांड सेंटर',
    'Data Center': 'डेटा सेंटर',
    'Digital Twin': 'डिजिटल ट्विन',
    'Platform Overview': 'प्लेटफ़ॉर्म अवलोकन',
    'Ops Command': 'संचालन कमांड',
    'System Arch (Admin)': 'सिस्टम आर्किटेक्चर',
    'Identity (Super Admin)': 'पहचान और सुरक्षा',
    'Crowd Intelligence': 'भीड़ खुफिया',
    'Gate Analytics': 'गेट एनालिटिक्स',
    'Transit & Transport': 'यातायात और परिवहन',
    'Parking Dashboard': 'पार्किंग',
    'Medical Operations': 'चिकित्सा संचालन',
    'Security & Threat': 'सुरक्षा और खतरे',
    'Food & Beverage': 'भोजन और पेय',
    'Washroom Status': 'वाशरूम की स्थिति',
    'Stadium Dashboard': 'स्टेडियम',
    'Navigation Dashboard': 'नेविगेशन',
    'AI Operations': 'AI संचालन',
    'Football Operations': 'फुटबॉल संचालन',
    'Sustainability': 'स्थिरता',
    'Accessibility': 'पहुंच क्षमता',
    'Volunteer Sync': 'स्वयंसेवक',
    'Venue Infrastructure': 'स्थल का बुनियादी ढांचा',
    'Language Center': 'भाषा केंद्र',
    'AI Reports': 'AI रिपोर्ट'
  }
};

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const { globalLang } = useAppContext();
  
  const t = (text: string) => {
    if (globalLang === 'en') return text;
    if (SIDEBAR_TRANSLATIONS[globalLang] && SIDEBAR_TRANSLATIONS[globalLang][text]) {
      return SIDEBAR_TRANSLATIONS[globalLang][text];
    }
    return text; // fallback
  };
  return (
    <aside className="w-64 glass-panel border-r border-slate-700/50 flex flex-col z-20 relative hidden lg:flex">
      <div className="h-16 flex items-center px-6 border-b border-slate-700/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-[#1AA65D] to-[#E20074] rounded-lg flex items-center justify-center font-bold text-white shadow-lg border border-white/20">
            OS
          </div>
          <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">STADIUM OS</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 custom-scrollbar">
        <div className="space-y-1 mb-8" role="tablist" aria-label="Main Workspaces">
          <div className="px-3 mb-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t('Main Workspaces')}</div>
          {MENU_ITEMS.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                role="tab"
                aria-selected={isActive}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-blue-600/20 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)] border border-blue-500/20' 
                    : item.highlight
                      ? 'text-purple-400 hover:bg-purple-900/20 border border-transparent hover:border-purple-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon size={18} className={isActive ? 'animate-pulse' : ''} />
                {t(item.label)}
              </button>
            );
          })}
        </div>

        <div className="space-y-1" role="tablist" aria-label="Domain Dashboards">
          <div className="px-3 mb-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t('Domain Dashboards')}</div>
          {DOMAINS.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                role="tab"
                aria-selected={isActive}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all group ${
                  isActive 
                    ? 'bg-gradient-to-r from-[#E20074]/20 to-transparent text-[#E20074] border-l-2 border-[#E20074]' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800 border-l-2 border-transparent'
                }`}
              >
                <Icon size={16} className={`transition-transform group-hover:scale-110 ${isActive ? 'text-[#E20074]' : 'text-slate-500 group-hover:text-slate-300'}`} />
                {t(item.label)}
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="p-4 border-t border-slate-700/50">
        <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700/50 shadow-inner flex items-center justify-between group cursor-pointer hover:border-slate-500 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
              <Settings size={14} className="text-slate-400 group-hover:rotate-90 transition-transform duration-500" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">{globalLang === 'es' ? 'Estado del Sistema' : globalLang === 'hi' ? 'सिस्टम की स्थिति' : 'System Status'}</div>
              <div className="text-[10px] text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                {globalLang === 'es' ? 'Sistemas Nominales' : globalLang === 'hi' ? 'सभी सिस्टम सामान्य' : 'All Systems Nominal'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
