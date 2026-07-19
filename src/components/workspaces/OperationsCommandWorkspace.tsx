"use client";
import React, { useState } from 'react';
import {
  MessageSquare, RefreshCw, GitPullRequest, FileText, ShieldAlert, ArrowRight,
  Play, FastForward, CheckSquare, Settings2, Languages, Megaphone, Bell, BarChart3,
  ChevronDown, ChevronUp, Zap
} from 'lucide-react';

type TabId = 'communication' | 'tasks' | 'automation' | 'timeline' | 'briefings' | 'notifications' | 'analytics';

export default function OperationsCommandWorkspace() {
  const [activeTab, setActiveTab] = useState<TabId>('communication');
  const [expandedTask, setExpandedTask] = useState<string | null>('T-8812');

  // --- Communication Hub ---
  const renderCommunicationHub = () => (
    <div className="glass-panel p-6 animate-fade-in h-full flex flex-col gap-4">
      <div>
        <h3 className="font-bold text-lg text-white flex items-center gap-2"><MessageSquare size={20} className="text-blue-400" /> AI Communication Engine</h3>
        <p className="text-sm text-slate-400 mt-1">Context-aware multilingual broadcast generator. One event → audience-specific messages for all 8 stakeholder types.</p>
      </div>
      <div className="flex gap-4 flex-1 min-h-0">
        {/* Trigger Panel */}
        <div className="w-[260px] shrink-0 bg-[#05000A] border border-slate-800 rounded-xl p-4 flex flex-col gap-3">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Trigger Event</div>
          <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
            <div className="flex items-center gap-2 text-red-400 font-bold mb-1 text-sm"><ShieldAlert size={13} /> Medical Emergency</div>
            <div className="text-xs text-slate-400">Heat exhaustion cluster — Sector 112 (Direct Sun exposure).</div>
          </div>
          <button className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-colors">
            <RefreshCw size={13} /> Generate All Broadcasts
          </button>
          <div className="mt-auto">
            <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Channels</div>
            {['Push Notification', 'SMS', 'Digital Screens', 'PA System', 'Volunteer Radio'].map(ch => (
              <div key={ch} className="flex items-center justify-between py-1">
                <span className="text-xs text-slate-400">{ch}</span>
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
              </div>
            ))}
          </div>
        </div>
        {/* Messages Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 overflow-y-auto custom-scrollbar pr-1">
            { audience: 'Fans (App/Signage)', color: 'text-green-400', tone: 'EN/ES/FR', msg: `\u201cPlease stay hydrated! Free water stations now open at Sector 112. Medical assistance available at Gate C.\u201d` },
            { audience: 'Volunteers', color: 'text-purple-400', tone: 'Simple Language', msg: `\u201cRedirect fans away from Sector 112. Distribute water from Supply Room B. Support medical teams on request.\u201d` },
            { audience: 'Executives', color: 'text-orange-400', tone: 'Formal Mode', msg: `\u201cHeat incident active — Sector 112. Mitigation deployed. No impact to match schedule. Resolution ETA: 15 mins.\u201d` },
            { audience: 'Security', color: 'text-blue-400', tone: 'Action Mode', msg: `\u201cClear emergency lane 4 for medical cart. Maintain perimeter around Sector 112. Report to Channel 7.\u201d` },
            { audience: 'Medical Team', color: 'text-red-400', tone: 'Clinical Mode', msg: `\u201c3x heat exhaustion cases confirmed. Deploy 2x medics with IV fluids to Sector 112, Row G.\u201d` },
            { audience: 'Transport Authority', color: 'text-yellow-400', tone: 'Operational', msg: `\u201cHold Shuttle Bus #14 at North Gate for 10 mins to avoid crowd surge overlap with medical response.\u201d` },
            { audience: 'VIP Support', color: 'text-teal-400', tone: 'Concierge', msg: `\u201cMedical incident in Sector 112. VIP routes unaffected. Please reassure guests if asked.\u201d` },
            { audience: 'Broadcast Media', color: 'text-pink-400', tone: 'Press', msg: `\u201cMinor heat incident in Sector 112. Medical teams on-site. Match continues without interruption.\u201d` },
          ].map((m, i) => (
            <div key={i} className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 flex flex-col hover:border-slate-500 hover:shadow-[0_8px_16px_-6px_rgba(59,130,246,0.15)] hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex justify-between items-center mb-2">
                <span className={`text-xs font-bold uppercase tracking-wider ${m.color}`}>{m.audience}</span>
                <span className="text-[9px] bg-slate-800 px-2 py-0.5 rounded text-slate-400 border border-slate-700 flex items-center gap-1"><Languages size={9} /> {m.tone}</span>
              </div>
              <div className="text-xs text-slate-300 italic flex-1 leading-relaxed">{m.msg}</div>
              <button className="mt-2 text-[10px] bg-slate-800 hover:bg-slate-700 text-white py-1 rounded flex items-center justify-center gap-1"><Megaphone size={10} /> Broadcast</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // --- Task & Workflow Engine ---
  const TASKS = [
    { id: 'T-8812', title: 'Open Gate C Overflow Lanes', priority: 'High', status: 'Pending Approval', owner: 'Ops Director', escalation: ['Gate Manager → 2m', 'Ops Director (NOW)', 'Executive (Fallback)'], escalationLevel: 1 },
    { id: 'T-8813', title: 'Deploy Water Team to Sector 112', priority: 'Critical', status: 'In Progress', owner: 'Volunteer Lead', escalation: ['Volunteer Lead (NOW)', 'Medical Head', 'Exec Dashboard'], escalationLevel: 0 },
    { id: 'T-8814', title: 'Inspect Scanner #4 at Gate B', priority: 'Medium', status: 'Assigned', owner: 'Maintenance', escalation: ['Tech Team (Assigned)', 'Ops Manager', 'Exec Dashboard'], escalationLevel: 0 },
  ];
  const renderTasks = () => (
    <div className="glass-panel p-6 animate-fade-in h-full flex flex-col">
      <h3 className="font-bold text-lg text-white mb-1 flex items-center gap-2"><CheckSquare size={20} className="text-green-400" /> Task &amp; Workflow Engine</h3>
      <p className="text-sm text-slate-400 mb-4">AI-generated tasks with approval workflows and intelligent escalation when unacknowledged.</p>
      <div className="flex-1 overflow-y-auto custom-scrollbar space-y-3 pr-1">
        {TASKS.map(task => (
          <div key={task.id} className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-500 transition-all duration-300 hover:shadow-[0_8px_20px_-8px_rgba(255,255,255,0.05)]">
            <div className="p-4 flex items-center gap-3 cursor-pointer" onClick={() => setExpandedTask(expandedTask === task.id ? null : task.id)}>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${task.priority === 'Critical' ? 'bg-red-500/20 text-red-400' : task.priority === 'High' ? 'bg-orange-500/20 text-orange-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{task.priority}</span>
                  <span className="text-[10px] text-slate-500 font-mono">{task.id}</span>
                </div>
                <div className="font-bold text-white text-sm">{task.title}</div>
                <div className="text-xs text-slate-400 mt-0.5">Owner: {task.owner} · {task.status}</div>
              </div>
              {expandedTask === task.id ? <ChevronUp size={16} className="text-slate-500" /> : <ChevronDown size={16} className="text-slate-500" />}
            </div>
            {expandedTask === task.id && (
              <div className="px-4 pb-4 border-t border-slate-800 pt-3 flex flex-col md:flex-row gap-6">
                <div className="flex-1 max-w-2xl space-y-1">
                  <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Escalation Path</div>
                  {task.escalation.map((step, si) => (
                    <div key={si} className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${si === task.escalationLevel ? 'bg-orange-500 animate-pulse' : si < task.escalationLevel ? 'bg-green-500' : 'bg-slate-700'}`}></div>
                      <span className={`text-xs ${si === task.escalationLevel ? 'text-orange-400 font-bold' : 'text-slate-400'}`}>{step}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-row md:flex-col gap-2 md:justify-end items-end md:items-stretch">
                  <button className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white text-xs font-bold rounded">Approve</button>
                  <button className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded">Modify</button>
                  <button className="px-6 py-2 bg-red-900/40 text-red-400 border border-red-500/30 text-xs font-bold rounded">Reject</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  // --- Automation Rules ---
  const renderAutomation = () => (
    <div className="glass-panel p-6 animate-fade-in h-full flex flex-col">
      <h3 className="font-bold text-lg text-white mb-1 flex items-center gap-2"><Settings2 size={20} className="text-purple-400" /> Intelligent Automation Rules</h3>
      <p className="text-sm text-slate-400 mb-4">IFTTT-style rules that trigger automated workflows — all reviewed by authorized users before execution where required.</p>
      <div className="flex-1 space-y-3 overflow-y-auto custom-scrollbar pr-1">
        {[
          { name: 'Crowd Density Mitigation', enabled: true, condition: 'Crowd_Density > 85% AND Queue_Time > 10m', actions: ['Generate High Priority Alert', 'Recommend volunteer deployment', 'Prepare Multilingual Announcement', 'Suggest alternate route', 'Update Digital Twin'] },
          { name: 'Medical Surge Protocol', enabled: true, condition: 'Medical_Incidents > 3 WITHIN 5m', actions: ['Dispatch Medical Response', 'Clear Emergency Lane', 'Notify Medical Lead', 'Create Audit Entry'] },
          { name: 'Metro Arrival Prep', enabled: true, condition: 'Metro_Arrival < 4m AND Density > 70%', actions: ['Open Gate C Overflow', 'Deploy 3 Volunteers', 'Generate Transport Advisory'] },
          { name: 'Sustainability Alert', enabled: false, condition: 'Power_Usage > 95% Capacity', actions: ['Switch to Solar Battery', 'Reduce HVAC by 15%', 'Notify Facilities Manager'] },
        ].map((rule, i) => (
          <div key={i} className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-5 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_8px_20px_-8px_rgba(168,85,247,0.15)] group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-white">{rule.name}</span>
              <div className={`w-8 h-4 rounded-full flex items-center px-0.5 ${rule.enabled ? 'bg-green-500' : 'bg-slate-700'}`}>
                <div className={`w-3 h-3 rounded-full bg-white transition-transform ${rule.enabled ? 'translate-x-4' : ''}`}></div>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-[10px] font-bold text-slate-500">IF</span>
              <span className="px-2 py-0.5 bg-blue-900/30 text-blue-400 rounded text-xs font-mono border border-blue-500/20">{rule.condition}</span>
            </div>
            <div className="space-y-1">
              {rule.actions.map((a, ai) => (
                <div key={ai} className="flex items-center gap-2 text-xs text-slate-300">
                  <ArrowRight size={12} className="text-green-400 shrink-0" /> {a}
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className="w-full py-3 border border-dashed border-slate-600 rounded-xl text-slate-400 font-bold hover:bg-slate-800 text-sm flex items-center justify-center gap-2">
          <Zap size={14} /> Add New Automation Rule
        </button>
      </div>
    </div>
  );

  // --- Timeline ---
  const TIMELINE_EVENTS = [
    { time: '14:00:00', min: '38\'', color: 'bg-blue-500', type: 'System', title: 'Match kicked off', detail: '44,218 fans in stadium. All gates nominal.' },
    { time: '14:02:00', min: '40\'', color: 'bg-blue-500', type: 'System', title: 'Metro Line 2 Arrival', detail: '800 passengers dropped at North Gate.' },
    { time: '14:02:45', min: '41\'', color: 'bg-purple-500', type: 'AI Decision', title: 'Predictive Surge Warning', detail: 'Crowd AI: Gate B congestion predicted in 4 mins. Confidence: 94%.' },
    { time: '14:03:10', min: '42\'', color: 'bg-green-500', type: 'Automation', title: 'Gate Balancing Rule Triggered', detail: 'Rule "Pre-emptive Gate Balancing" auto-executed. Task T-8812 created.' },
    { time: '14:03:30', min: '42\'', color: 'bg-orange-500', type: 'User Action', title: 'Task Approved by Marcus Chen', detail: 'Gate C overflow lanes opened. 6 volunteers deployed.' },
    { time: '14:08:00', min: '46\'', color: 'bg-green-500', type: 'Resolution', title: 'Gate B normalized', detail: 'Wait time back to 3m 12s. Prediction accuracy: 96%.' },
  ];
  const renderTimeline = () => (
    <div className="glass-panel p-6 animate-fade-in h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="font-bold text-lg text-white flex items-center gap-2"><GitPullRequest size={20} className="text-[#E20074]" /> Operational Timeline Replay</h3>
          <p className="text-sm text-slate-400">Unified replayable timeline of every AI decision, user action, and system event.</p>
        </div>
        <div className="flex items-center gap-1 bg-slate-800 rounded-lg p-1 border border-slate-700">
          <button className="p-2 hover:bg-slate-700 rounded text-slate-400 hover:text-white"><Play size={15} /></button>
          <button className="p-2 hover:bg-slate-700 rounded text-slate-400 hover:text-white"><FastForward size={15} /></button>
          <div className="px-3 text-xs font-mono text-white font-bold border-l border-slate-700">Min 46&apos;</div>
        </div>
      </div>
      <div className="flex-1 bg-[#05000A] border border-slate-800 rounded-xl p-5 overflow-y-auto custom-scrollbar">
        <div className="relative border-l-2 border-slate-700 ml-3 space-y-5">
          {TIMELINE_EVENTS.map((ev, i) => (
            <div key={i} className="pl-6 relative">
              <span className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full ${ev.color} shadow-[0_0_8px_rgba(255,255,255,0.2)] border-2 border-[#0A0015]`}></span>
              <div className="text-[10px] text-slate-500 mb-0.5 font-mono">{ev.time} (Min {ev.min}) · {ev.type}</div>
              <div className="font-bold text-white text-sm">{ev.title}</div>
              <div className="text-xs text-slate-400 mt-0.5">{ev.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // --- Briefings ---
  const BRIEFINGS = [
    { label: 'Pre-Match Briefing', icon: '🌅', items: ['Weather: 32°C, UV High', 'Expected attendance: 44,218', 'VIP arrivals: 14 confirmed', 'Metro delays: None', 'AI Alert: Heat risk in open sectors'] },
    { label: 'Half-Time Ops Brief', icon: '⏸️', items: ['Incidents: 2 medical (resolved)', 'F&B Revenue: $1.2M', 'Gate B queue: normalized', 'Volunteer performance: 96%', 'Recommend: Deploy 4 more to North'] },
    { label: 'Post-Match Summary', icon: '🏁', items: ['Attendance: 44,218 (99.4%)', 'Incidents: 3 resolved', 'Revenue: $2.4M total', 'Sustainability score: 91/100', 'Fan satisfaction: 4.7/5'] },
    { label: 'Security Briefing', icon: '🔒', items: ['Threat level: Low', 'Active patrols: 24', 'Zero unauthorized access', 'VIP perimeter: Secure', 'Audit entries: 847'] },
    { label: 'Volunteer Briefing', icon: '🤝', items: ['450 active volunteers', 'Avg response: 1m 20s', 'Language coverage: 24 langs', 'Open tasks: 12', 'Top performers: 8 flagged'] },
    { label: 'Executive Briefing', icon: '📋', items: ['KPIs: All Green', 'Risk index: Low', 'FIFA compliance: 100%', 'Media coverage: Live', 'Revenue vs forecast: +8%'] },
  ];
  const [generatedBriefing, setGeneratedBriefing] = useState<string | null>(null);
  const renderBriefings = () => (
    <div className="glass-panel p-6 animate-fade-in h-full flex flex-col">
      <h3 className="font-bold text-lg text-white mb-1 flex items-center gap-2"><FileText size={20} className="text-teal-400" /> AI Meeting &amp; Briefing Generator</h3>
      <p className="text-sm text-slate-400 mb-4">1-click AI briefing generation for all stakeholders. Each briefing contains summaries, metrics, risks, recommendations, and follow-up tasks.</p>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto custom-scrollbar pr-1">
        {BRIEFINGS.map((b, i) => (
          <div key={i} className={`bg-slate-900/80 backdrop-blur-md border rounded-2xl p-5 flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_-10px_rgba(45,212,191,0.2)] ${generatedBriefing === b.label ? 'border-teal-500 bg-teal-500/10 shadow-[0_0_20px_rgba(45,212,191,0.15)]' : 'border-slate-700/50 hover:border-teal-500/50'}`} onClick={() => setGeneratedBriefing(generatedBriefing === b.label ? null : b.label)}>
            <div className="text-2xl mb-2">{b.icon}</div>
            <div className="font-bold text-sm text-white mb-2">{b.label}</div>
            {generatedBriefing === b.label ? (
              <ul className="space-y-1 flex-1">
                {b.items.map((item, ii) => (
                  <li key={ii} className="text-xs text-slate-300 flex items-start gap-1.5"><span className="text-teal-400 shrink-0 mt-0.5">→</span>{item}</li>
                ))}
              </ul>
            ) : (
              <button className="mt-auto w-full py-1.5 bg-slate-800 hover:bg-teal-900/30 text-slate-300 hover:text-teal-400 border border-slate-700 hover:border-teal-500/30 rounded text-xs font-bold transition-all">Generate</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  // --- Notifications Center ---
  const renderNotifications = () => (
    <div className="glass-panel p-6 animate-fade-in h-full flex flex-col">
      <h3 className="font-bold text-lg text-white mb-1 flex items-center gap-2"><Bell size={20} className="text-yellow-400" /> Enterprise Notification Center</h3>
      <p className="text-sm text-slate-400 mb-4">AI-prioritized notification engine with channel preferences, escalation rules, and delivery confirmation tracking.</p>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#05000A] border border-slate-800 rounded-xl p-4 overflow-y-auto custom-scrollbar space-y-2">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3">Live Notifications Feed</div>
          {[
            { type: 'Critical', icon: '🚨', msg: 'Gate B queue exceeding threshold — Action required', time: '14:03' },
            { type: 'Medical', icon: '🏥', msg: 'Heat incident Sector 112 — Medical team dispatched', time: '14:06' },
            { type: 'AI', icon: '🤖', msg: 'New recommendation: Open Gate C overflow lanes', time: '14:02' },
            { type: 'Info', icon: 'ℹ️', msg: 'Metro Line 2 arriving in 4 minutes', time: '13:58' },
            { type: 'Resolved', icon: '✅', msg: 'Gate B congestion normalized — Task T-8812 complete', time: '14:08' },
          ].map((n, i) => (
            <div key={i} className={`p-3 rounded-lg border text-xs flex items-start gap-2 ${n.type === 'Critical' ? 'border-red-500/20 bg-red-500/5' : n.type === 'Resolved' ? 'border-green-500/20 bg-green-500/5' : 'border-slate-700 bg-slate-800/50'}`}>
              <span>{n.icon}</span>
              <div className="flex-1">
                <div className="text-white font-medium leading-snug">{n.msg}</div>
                <div className="text-slate-500 mt-0.5">{n.time} · {n.type}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-4">
            <div className="text-[10px] font-bold text-slate-500 uppercase mb-3">Notification Categories (Active)</div>
            {['Crowd', 'Transport', 'Medical', 'Security', 'Food', 'Sustainability', 'Volunteers', 'AI Recommendations'].map(cat => (
              <div key={cat} className="flex items-center justify-between py-1.5 border-b border-slate-800 last:border-0">
                <span className="text-xs text-slate-300">{cat}</span>
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
              </div>
            ))}
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-4">
            <div className="text-[10px] font-bold text-slate-500 uppercase mb-3">Delivery Stats</div>
            {[['Sent', '1,248'], ['Read', '1,189 (95%)'], ['Acknowledged', '1,024 (82%)'], ['Escalated', '12']].map(([k, v]) => (
              <div key={k} className="flex justify-between py-1 text-xs">
                <span className="text-slate-400">{k}</span>
                <span className="text-white font-bold">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // --- Communication Analytics ---
  const renderAnalytics = () => (
    <div className="glass-panel p-6 animate-fade-in h-full flex flex-col">
      <h3 className="font-bold text-lg text-white mb-1 flex items-center gap-2"><BarChart3 size={20} className="text-blue-400" /> Communication Analytics</h3>
      <p className="text-sm text-slate-400 mb-4">AI-generated insights on message effectiveness, channel performance, and language distribution.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {[
          { label: 'Messages Sent', value: '1,248', color: 'text-blue-400' },
          { label: 'Avg Read Rate', value: '95%', color: 'text-green-400' },
          { label: 'Avg Response Time', value: '2m 14s', color: 'text-yellow-400' },
          { label: 'Languages Used', value: '24', color: 'text-[#E20074]' },
        ].map((s, i) => (
          <div key={i} className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-5 text-center hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_-10px_rgba(59,130,246,0.2)]">
            <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
            <div className="text-xs text-slate-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#05000A] border border-slate-800 rounded-xl p-4">
          <div className="text-[10px] font-bold text-slate-500 uppercase mb-3">Channel Effectiveness</div>
          {[['Push Notifications', '98%'], ['PA System', '95%'], ['Digital Screens', '87%'], ['SMS', '82%'], ['Email', '71%']].map(([ch, rate]) => (
            <div key={ch} className="mb-2">
              <div className="flex justify-between text-xs mb-1"><span className="text-slate-300">{ch}</span><span className="text-white font-bold">{rate}</span></div>
              <div className="h-1.5 bg-slate-800 rounded-full"><div className="h-full bg-blue-500 rounded-full" style={{ width: rate }}></div></div>
            </div>
          ))}
        </div>
        <div className="bg-[#05000A] border border-slate-800 rounded-xl p-4">
          <div className="text-[10px] font-bold text-slate-500 uppercase mb-3">Top Languages Used</div>
          {[['English', '42%', 'bg-blue-500'], ['Spanish', '22%', 'bg-green-500'], ['French', '14%', 'bg-purple-500'], ['Arabic', '11%', 'bg-yellow-500'], ['Others', '11%', 'bg-slate-500']].map(([lang, pct, color]) => (
            <div key={lang} className="mb-2">
              <div className="flex justify-between text-xs mb-1"><span className="text-slate-300">{lang}</span><span className="text-white font-bold">{pct}</span></div>
              <div className="h-1.5 bg-slate-800 rounded-full"><div className={`h-full ${color} rounded-full`} style={{ width: pct }}></div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: 'communication', label: 'AI Comms Hub', icon: <MessageSquare size={13} /> },
    { id: 'tasks', label: 'Tasks & Workflows', icon: <CheckSquare size={13} /> },
    { id: 'automation', label: 'Automation Rules', icon: <Settings2 size={13} /> },
    { id: 'timeline', label: 'Timeline Replay', icon: <GitPullRequest size={13} /> },
    { id: 'briefings', label: 'Briefing Generator', icon: <FileText size={13} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={13} /> },
    { id: 'analytics', label: 'Comms Analytics', icon: <BarChart3 size={13} /> },
  ];

  return (
    <div className="h-full w-full flex flex-col p-6 bg-gradient-to-br from-[#05000A] via-[#0A0015] to-[#120020] overflow-hidden text-white relative">
      <div className="max-w-7xl mx-auto w-full flex flex-col h-full overflow-hidden relative z-10">
        <div className="mb-6 shrink-0">
          <h2 className="text-3xl font-black tracking-tight flex items-center gap-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-[#E20074]">
          Operations Command
          <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-blue-500/20 text-blue-400 rounded border border-blue-500/30">Part 10 — Full Spec</span>
        </h2>
        <p className="text-slate-400 text-sm">Zero Trust Security · AI Communication · Workflow Engine · Automation · Escalation · Briefings</p>
      </div>

      <div className="flex gap-2 mb-6 pb-2 overflow-x-auto custom-scrollbar shrink-0">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 rounded-full flex items-center gap-2 whitespace-nowrap ${activeTab === tab.id ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] border border-transparent' : 'bg-slate-900/50 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-700/50'}`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 min-h-0 overflow-hidden">
        {activeTab === 'communication' && renderCommunicationHub()}
        {activeTab === 'tasks' && renderTasks()}
        {activeTab === 'automation' && renderAutomation()}
        {activeTab === 'timeline' && renderTimeline()}
        {activeTab === 'briefings' && renderBriefings()}
        {activeTab === 'notifications' && renderNotifications()}
        {activeTab === 'analytics' && renderAnalytics()}
      </div>
      </div>
    </div>
  );
}
