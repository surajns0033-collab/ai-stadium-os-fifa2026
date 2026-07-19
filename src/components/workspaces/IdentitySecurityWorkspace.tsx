"use client";
import React, { useState } from 'react';
import { ShieldCheck, Users, FileCheck, Brain, Search, Key, History, CheckCircle2, XCircle, MessageSquare, Server, Clock, DownloadCloud } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

export default function IdentitySecurityWorkspace() {
  const { systemLogs } = useAppContext();
  type TabId = 'users' | 'audit' | 'data_quality' | 'ai_knowledge' | 'feedback' | 'search' | 'retention' | 'backup' | 'compliance';
  const [activeTab, setActiveTab] = useState<TabId>('users');

  const USERS = [
    { id: '1', name: 'Alina Petrov', role: 'Executive', scope: 'Global', status: 'Active', mfa: true, lastLogin: '2 mins ago' },
    { id: '2', name: 'Marcus Chen', role: 'Security Lead', scope: 'Stadium A', status: 'Active', mfa: true, lastLogin: '14 mins ago' },
    { id: '3', name: 'Dr. Sarah Jenkins', role: 'Medical', scope: 'Sector North', status: 'Active', mfa: true, lastLogin: '1 hour ago' },
  ];
  const PERMISSIONS = ['CAN_VIEW_SEC', 'CAN_BROADCAST', 'CAN_SIMULATE', 'CAN_EXPORT'];
  const DATASETS = [
    { name: 'metro_schedule_updates_live.json', type: 'JSON', score: 92, issues: 2, status: 'Validated (Warnings)' },
    { name: 'medical_incident_log_2022.xlsx', type: 'Excel', score: 45, issues: 14, status: 'Quarantined (Outliers)' },
  ];

  const renderUsers = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
      <div className="lg:col-span-2 glass-panel p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-lg text-white flex items-center gap-2"><Users size={20} className="text-blue-400" /> Enterprise User Management</h3>
        </div>
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="text-xs uppercase bg-slate-900/50 text-slate-500 border-b border-slate-700">
              <tr>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Role / Persona</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {USERS.map(user => (
                <tr key={user.id} className="border-b border-slate-800 hover:bg-slate-800/50">
                  <td className="px-4 py-3 font-medium text-white flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px]">{user.name.charAt(0)}</div>
                    {user.name}
                  </td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 rounded text-xs border border-slate-700 bg-slate-800">{user.role}</span></td>
                  <td className="px-4 py-3 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span><span className="text-xs">{user.status}</span></td>
                  <td className="px-4 py-3 text-right"><button className="text-blue-400 hover:text-blue-300 text-xs font-bold uppercase">Manage</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="glass-panel p-6 flex flex-col">
        <h3 className="font-bold text-lg text-white mb-2 flex items-center gap-2"><Key size={20} className="text-orange-400" /> Fine-Grained RBAC</h3>
        <p className="text-xs text-slate-400 mb-6">Modify permissions beyond base roles.</p>
        <div className="bg-[#05000A] rounded-xl border border-slate-800 p-4 space-y-3 flex-1 overflow-y-auto custom-scrollbar">
          {PERMISSIONS.map(perm => (
            <div key={perm} className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">{perm}</span>
              <div className={`w-8 h-4 rounded-full flex items-center px-0.5 cursor-pointer ${['CAN_VIEW_SEC', 'CAN_EXPORT'].includes(perm) ? 'bg-green-500' : 'bg-slate-700'}`}>
                <div className={`w-3 h-3 rounded-full bg-white transition-transform ${['CAN_VIEW_SEC', 'CAN_EXPORT'].includes(perm) ? 'translate-x-4' : ''}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAudit = () => (
    <div className="glass-panel p-6 animate-fade-in h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg text-white flex items-center gap-2"><History size={20} className="text-purple-400" /> Immutable Global Audit Trail</h3>
      </div>
      <div className="flex-1 bg-[#05000A] rounded-xl border border-slate-800 p-4 overflow-y-auto custom-scrollbar font-mono text-xs space-y-2">
        <div className="p-2 border border-slate-800 rounded bg-slate-900/50 flex gap-4"><span className="text-slate-500">14:02:44</span><span className="text-purple-400 w-24">SYSTEM</span><span className="text-slate-300 flex-1">Data Retention Policy updated: Logs purging set to 90 Days.</span></div>
        <div className="p-2 border border-slate-800 rounded bg-slate-900/50 flex gap-4"><span className="text-slate-500">14:01:12</span><span className="text-green-400 w-24">AI_ENGINE</span><span className="text-slate-300 flex-1">Recommendation Accepted by [Marcus Chen].</span></div>
        {systemLogs.map((log, i) => (
          <div key={i} className="p-2 border border-slate-800 rounded bg-slate-900/50 flex gap-4"><span className="text-slate-500">{log.timestamp}</span><span className="text-yellow-400 w-24">EVENT_BUS</span><span className="text-slate-300 flex-1">{log.message}</span></div>
        ))}
      </div>
    </div>
  );

  const renderDataQuality = () => (
    <div className="glass-panel p-6 animate-fade-in h-full flex flex-col">
      <h3 className="font-bold text-lg text-white mb-2 flex items-center gap-2"><FileCheck size={20} className="text-green-400" /> AI Data Quality Engine</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 mt-4">
        {DATASETS.map((data, i) => (
          <div key={i} className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-mono text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">{data.type}</span>
                <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded ${data.score > 90 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>Score: {data.score}/100</span>
              </div>
              <div className="font-bold text-sm text-white truncate mb-1">{data.name}</div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2">
              {data.score > 90 ? <CheckCircle2 size={16} className="text-green-500" /> : <XCircle size={16} className="text-red-500" />}
              <span className="text-xs font-bold text-slate-300">{data.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAIKnowledge = () => (
    <div className="glass-panel p-6 animate-fade-in h-full flex flex-col">
      <h3 className="font-bold text-lg text-white mb-2 flex items-center gap-2"><Brain size={20} className="text-[#E20074]" /> Enterprise AI Knowledge Platform</h3>
      <div className="p-4 mt-4 border border-[#E20074]/30 bg-[#E20074]/5 rounded-xl">
        <h4 className="font-bold text-white text-sm mb-3">Active Knowledge Embeddings</h4>
        <ul className="space-y-2 text-xs text-slate-400">
          <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-green-400"/> Medical_SOP_v3.pdf</li>
          <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-green-400"/> Security_Perimeter_Map.json</li>
        </ul>
      </div>
    </div>
  );

  // --- NEW TABS FOR END OF PART 9 ---

  const renderFeedback = () => (
    <div className="glass-panel p-6 animate-fade-in h-full flex flex-col">
      <h3 className="font-bold text-lg text-white mb-2 flex items-center gap-2"><MessageSquare size={20} className="text-blue-400" /> AI Feedback Loop Tracker</h3>
      <p className="text-sm text-slate-400 mb-6">Continuous improvement signals from user interactions to fine-tune AI reasoning.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { label: '👍 Helpful', count: 1240, color: 'text-green-400' },
          { label: '👎 Not Helpful', count: 12, color: 'text-red-400' },
          { label: 'Needs More Detail', count: 45, color: 'text-orange-400' },
          { label: 'Incorrect', count: 3, color: 'text-red-500' },
          { label: 'Outdated', count: 8, color: 'text-yellow-400' },
          { label: 'Missing Context', count: 21, color: 'text-blue-400' },
        ].map((fb, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center">
            <div className={`text-2xl font-bold ${fb.color}`}>{fb.count}</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-bold">{fb.label}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSearch = () => (
    <div className="glass-panel p-6 animate-fade-in h-full flex flex-col">
      <h3 className="font-bold text-lg text-white mb-2 flex items-center gap-2"><Search size={20} className="text-teal-400" /> Enterprise Search Indexer</h3>
      <p className="text-sm text-slate-400 mb-4">Real-time indexing status for universal search capabilities.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 flex-1 overflow-y-auto custom-scrollbar pr-2">
        {['Users', 'Stadiums', 'Matches', 'Gates', 'Seats', 'Food Stalls', 'Washrooms', 'Medical Units', 'Incidents', 'Reports', 'Announcements', 'Knowledge Documents', 'Uploaded Files', 'Dashboards', 'Simulations', 'AI Conversations'].map((item) => (
          <div key={item} className="flex items-center justify-between p-3 border border-slate-700 bg-slate-800/50 rounded-lg">
            <span className="text-xs text-slate-300 font-bold">{item}</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRetention = () => (
    <div className="glass-panel p-6 animate-fade-in h-full flex flex-col">
      <h3 className="font-bold text-lg text-white mb-2 flex items-center gap-2"><Clock size={20} className="text-purple-400" /> Data Retention Configurator</h3>
      <p className="text-sm text-slate-400 mb-6">Organizations can define retention policies based on operational and legal requirements.</p>
      <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-2">
        {[
          { key: 'Operational Events', val: '1 Year' },
          { key: 'Audit Logs', val: '5 Years (Compliance)' },
          { key: 'Reports', val: 'Forever' },
          { key: 'Notifications', val: '30 Days' },
          { key: 'Simulations', val: '90 Days' },
          { key: 'AI Conversations', val: '6 Months (Anonymized)' },
          { key: 'Uploaded Files', val: '3 Years' },
          { key: 'Analytics', val: 'Forever' },
          { key: 'Backups', val: '10 Years' },
        ].map((item) => (
          <div key={item.key} className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-lg">
            <span className="text-sm text-white font-medium">{item.key}</span>
            <select className="bg-slate-800 border border-slate-700 text-xs text-slate-300 px-3 py-1.5 rounded outline-none" defaultValue={item.val}>
              <option>{item.val}</option>
              <option>30 Days</option>
              <option>90 Days</option>
              <option>1 Year</option>
              <option>Forever</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBackup = () => (
    <div className="glass-panel p-6 animate-fade-in h-full flex flex-col">
      <h3 className="font-bold text-lg text-white mb-2 flex items-center gap-2"><DownloadCloud size={20} className="text-blue-500" /> Backup & Recovery Dashboard</h3>
      <p className="text-sm text-slate-400 mb-6">Enterprise continuity and disaster recovery.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Automatic Backups', status: 'Running (Every 1h)' },
          { label: 'Incremental Backups', status: 'Running (Every 15m)' },
          { label: 'Point-in-Time Recovery', status: 'Available' },
          { label: 'Disaster Recovery', status: 'Standby' },
          { label: 'Rollback', status: 'Ready' },
          { label: 'Version Restore', status: 'Ready' },
          { label: 'Export', status: 'Available' },
          { label: 'Archive', status: 'Active (AWS Glacier)' },
        ].map((item) => (
          <div key={item.label} className="p-4 border border-blue-500/20 bg-blue-500/5 rounded-xl flex flex-col items-center text-center justify-center gap-2">
            <Server size={24} className="text-blue-400" />
            <div className="text-xs font-bold text-white uppercase">{item.label}</div>
            <div className="text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded">{item.status}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCompliance = () => (
    <div className="glass-panel p-6 animate-fade-in h-full flex flex-col">
      <h3 className="font-bold text-lg text-white mb-2 flex items-center gap-2"><ShieldCheck size={20} className="text-green-500" /> Enterprise Compliance Principles</h3>
      <p className="text-sm text-slate-400 mb-6">Validation against Part 9 Foundation Requirements.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          'Security by Design',
          'Privacy by Design',
          'Accessibility by Design',
          'Explainability by Design',
          'Observability by Design',
          'Resilience by Design',
          'Scalability by Design'
        ].map((principle) => (
          <div key={principle} className="flex items-center gap-3 p-4 bg-slate-900 border border-green-500/30 rounded-lg">
            <CheckCircle2 size={18} className="text-green-400" />
            <span className="text-sm font-bold text-slate-200">{principle}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const TABS = [
    { id: 'users', label: 'Users & Roles' },
    { id: 'audit', label: 'Audit Trail' },
    { id: 'data_quality', label: 'Data Quality' },
    { id: 'ai_knowledge', label: 'AI Knowledge' },
    { id: 'feedback', label: 'AI Feedback' },
    { id: 'search', label: 'Search Index' },
    { id: 'retention', label: 'Data Retention' },
    { id: 'backup', label: 'Backup & Recovery' },
    { id: 'compliance', label: 'Compliance' },
  ];

  return (
    <div className="h-full w-full flex flex-col p-8 bg-[#0A0015] overflow-y-auto custom-scrollbar text-white">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">
          Identity & Security Workspace 
          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-orange-500/20 text-orange-400 rounded border border-orange-500/30">Super Admin</span>
        </h2>
        <p className="text-slate-400">Enterprise Data Model, Role-Based Access Control, Data Quality, and Audit Governance.</p>
      </div>

      <div className="flex gap-1 mb-6 border-b border-slate-800 pb-px overflow-x-auto custom-scrollbar">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabId)}
            className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap ${activeTab === tab.id ? 'border-orange-500 text-orange-400' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 min-h-[400px]">
        {activeTab === 'users' && renderUsers()}
        {activeTab === 'audit' && renderAudit()}
        {activeTab === 'data_quality' && renderDataQuality()}
        {activeTab === 'ai_knowledge' && renderAIKnowledge()}
        {activeTab === 'feedback' && renderFeedback()}
        {activeTab === 'search' && renderSearch()}
        {activeTab === 'retention' && renderRetention()}
        {activeTab === 'backup' && renderBackup()}
        {activeTab === 'compliance' && renderCompliance()}
      </div>
    </div>
  );
}
