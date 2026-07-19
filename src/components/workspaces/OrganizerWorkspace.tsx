"use client";
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import HeroAICard from './HeroAICard';
import UniversalNotificationCenter from './UniversalNotificationCenter';
import AICopilotsPanel from './AICopilotsPanel';
import LiveTimeline from './LiveTimeline';
import DigitalTwinMap from '@/components/DigitalTwinMap';
import ExecutiveCommandDashboard from '../dashboards/ExecutiveCommandDashboard';
import SpecializedDashboard from '../dashboards/SpecializedDashboard';
import DataCenterWorkspace from './DataCenterWorkspace';
import SystemArchitectureWorkspace from './SystemArchitectureWorkspace';
import IdentitySecurityWorkspace from './IdentitySecurityWorkspace';
import OperationsCommandWorkspace from './OperationsCommandWorkspace';
import PlatformOverviewWorkspace from './PlatformOverviewWorkspace';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DASHBOARD_CONFIGS: Record<string, any> = {
  'Crowd': { 
    id: 'crowd',
    title: 'Crowd Intelligence', 
    subtitle: 'Live density, flow rates, and prediction analytics',
    visualizations: [{label: 'Live Density', value: '82%', trend: '+4%', trendUp: true}, {label: 'Flow Rate', value: '1.2k/m', trend: '-2%'}, {label: 'Congestion Risk', value: 'High', trend: 'Watch Sector B', trendUp: true}, {label: 'Queue Growth', value: '2.4% /m'}], 
    clickInteractions: ['Analyze Zone B Density', 'Predict Queue Growth (30m)', 'Generate Volunteer Suggestion', 'Run Gate Simulation'],
    insights: [{id:'1', message: 'Gate C corridor density rising. Deploying volunteers.', priority: 'medium', time: '1m ago'}],
    mockAIResponse: { summary: 'Crowd density is stable. High risk at Gate C.', reasoning: 'Incoming metro surge in 4m.', data: 'Density: 82% | Flow: 1.2k/min', recommendation: 'Deploy 5 volunteers.', risk: 'Medium', predictedOutcome: 'Flow normalizes in 8 mins.', confidence: 92, timeSaved: '6 mins', usersAffected: '800 Fans' }
  },
  'Gates': { 
    id: 'gates',
    title: 'Gate Analytics', subtitle: 'Processing speeds and wait times',
    visualizations: [{label: 'Avg Wait', value: '4.2m', trend: '-1m'}, {label: 'Throughput', value: '84%', trend: '+2%'}, {label: 'Open Gates', value: '12/14'}, {label: 'Scanner Status', value: '98% Online'}], 
    clickInteractions: ['Analyze Gate Performance', 'View Queue Timeline', 'Predict Gate Congestion', 'Simulate Gate Failure'],
    insights: [{id:'1', message: 'Gate B processing speed dropping. Investigate scanner #4.', priority: 'high', time: 'Now'}],
    mockAIResponse: { summary: 'Scanner #4 offline.', reasoning: 'Hardware fault detected.', data: 'Throughput dropped 12%.', recommendation: 'Dispatch maintenance to Scanner #4.', risk: 'Queue build-up', predictedOutcome: 'Fixed in 3m.', confidence: 98, timeSaved: '15 mins', usersAffected: '1,200 Fans' }
  },
  'Seating': { 
    id: 'seats',
    title: 'Seat Intelligence', subtitle: 'Occupancy and fan experience tracking',
    visualizations: [{label: 'Occupancy', value: '78%', trend: '+12%', trendUp: true}, {label: 'Reserved', value: '99%'}, {label: 'VIP Fullness', value: '62%'}, {label: 'Accessible Seats', value: '45% Used'}], 
    clickInteractions: ['Analyze Section B Occupancy', 'Predict Entry Time', 'Check Accessibility Routing', 'Compare Historical Match'],
    insights: [{id:'1', message: 'North Stand filling rapidly.', priority: 'low', time: '2m ago'}],
    mockAIResponse: { summary: 'North Stand ingress on track.', reasoning: 'Gate A flow is steady.', data: 'Fill rate 500/min.', recommendation: 'Keep flow steady.', risk: 'Low', predictedOutcome: 'Full in 25m.', confidence: 95, timeSaved: '0 mins', usersAffected: '0 Fans' }
  },
  'Food': { 
    id: 'food',
    title: 'Food Intelligence', subtitle: 'Inventory, wait times, and demand predictions',
    visualizations: [{label: 'Avg Queue', value: '2.5m', trend: '-30s'}, {label: 'Inventory', value: '76%'}, {label: 'Revenue', value: '$42k', trend: '+15%', trendUp: true}, {label: 'Dietary Options', value: 'Available'}], 
    clickInteractions: ['Predict Inventory Demand', 'Generate Restocking Plan', 'Analyze Peak Hours', 'Compare Vendor Revenue'],
    insights: [{id:'1', message: 'Food Court 2 predicting burger shortage. Restocking advised.', priority: 'medium', time: '4m ago'}],
    mockAIResponse: { summary: 'Burger inventory low at FC2.', reasoning: 'Sales rate 1.5x expected.', data: 'Remaining: 40 units.', recommendation: 'Dispatch 200 units from Warehouse B.', risk: 'Stockout in 15m', predictedOutcome: 'Restocked before half-time.', confidence: 99, timeSaved: '10 mins', usersAffected: '300 Fans' }
  },
  'Washrooms': { 
    id: 'washrooms',
    title: 'Washroom Intelligence', subtitle: 'Cleaning schedules, queues, and supply levels',
    visualizations: [{label: 'Avg Occupancy', value: '64%', trend: '+5%', trendUp: true}, {label: 'Cleanliness Score', value: '94%'}, {label: 'Water Usage', value: 'Normal'}, {label: 'Maintenance', value: '2 Pending'}], 
    clickInteractions: ['View Cleaning History', 'Predict Queue Spikes', 'Analyze Water Usage', 'Generate Maintenance Route'],
    insights: [{id:'1', message: 'Washroom 8 requires immediate cleaning.', priority: 'medium', time: '1m ago'}],
    mockAIResponse: { summary: 'Washroom 8 cleaning required.', reasoning: 'Occupancy threshold exceeded 500 uses.', data: 'Last cleaned 2h ago.', recommendation: 'Dispatch Cleaning Team C.', risk: 'Hygiene drop', predictedOutcome: 'Cleaned in 5m.', confidence: 97, timeSaved: '0 mins', usersAffected: '50 Fans' }
  },
  'Medical': { 
    id: 'medical',
    title: 'Medical Intelligence', subtitle: 'Incidents, response times, and heat zones',
    visualizations: [{label: 'Active Incidents', value: '2', trend: '+1', trendUp: true}, {label: 'Avg Response', value: '1m 45s', trend: '-15s'}, {label: 'Ambulances', value: '3 Ready'}, {label: 'Heat Incidents', value: 'High Risk'}], 
    clickInteractions: ['Analyze Patient Timeline', 'Calculate Response Route', 'Predict Medical Demand', 'Generate Incident Report'],
    insights: [{id:'1', message: 'Heat exhaustion risk in Sector 4. Dispatching water.', priority: 'high', time: 'Just now'}],
    mockAIResponse: { summary: 'Sector 4 heat risk critical.', reasoning: 'Temperature 34C in direct sun.', data: '3 reports of dizziness.', recommendation: 'Dispatch Team Alpha with water.', risk: 'Medical emergencies', predictedOutcome: 'Resolved in 4m.', confidence: 96, timeSaved: '8 mins', usersAffected: '500 Fans' }
  },
  'Security': { 
    id: 'security',
    title: 'Security Intelligence', subtitle: 'Threat levels, patrols, and incident timelines',
    visualizations: [{label: 'Threat Level', value: 'Low'}, {label: 'Active Patrols', value: '24'}, {label: 'Open Incidents', value: '1'}, {label: 'Restricted Zones', value: 'Secure'}], 
    clickInteractions: ['Analyze Incident Timeline', 'Assess Crowd Risk', 'Assign Response Team', 'Export Security Log'],
    insights: [{id:'1', message: 'Unauthorized access attempt near VIP Zone A.', priority: 'high', time: '3m ago'}],
    mockAIResponse: { summary: 'VIP Zone A access attempt.', reasoning: 'Badge scan failed 3x.', data: 'Location: Door A2.', recommendation: 'Dispatch Patrol Unit 4.', risk: 'Unauthorized entry', predictedOutcome: 'Intercepted in 1m.', confidence: 99, timeSaved: '2 mins', usersAffected: '1 VIP' }
  },
  'Transportation': { 
    id: 'transport',
    title: 'Transportation Intelligence', subtitle: 'Metro arrivals, parking, and traffic',
    visualizations: [{label: 'Metro Demand', value: 'High', trend: 'Surging', trendUp: true}, {label: 'Parking', value: '92% Full'}, {label: 'Ride Wait', value: '4m'}, {label: 'Road Traffic', value: 'Heavy'}], 
    clickInteractions: ['Predict Exit Demand', 'Find Best Exit Gate', 'Analyze Metro Occupancy', 'Simulate Metro Delay'],
    insights: [{id:'1', message: 'Metro Line 2 arriving in 4 minutes. Anticipate surge.', priority: 'medium', time: '1m ago'}],
    mockAIResponse: { summary: 'Metro Line 2 surge incoming.', reasoning: '800 passengers disembarking.', data: 'Time to gate: 4m.', recommendation: 'Open Gate C overflow.', risk: 'Gate B bottleneck', predictedOutcome: 'Flow distributed evenly.', confidence: 94, timeSaved: '12 mins', usersAffected: '800 Fans' }
  },
  'Sustainability': { 
    id: 'sustainability',
    title: 'Sustainability Intelligence', subtitle: 'Energy, water, carbon, and waste metrics',
    visualizations: [{label: 'Energy Usage', value: '42MWh', trend: '-2%'}, {label: 'Waste Diversion', value: '78%', trend: '+4%'}, {label: 'Solar Output', value: '12MW'}, {label: 'Water Usage', value: 'Stable'}], 
    clickInteractions: ['Analyze Energy Trend', 'Predict HVAC Demand', 'Optimize Waste Collection', 'Calculate Environmental Impact'],
    insights: [{id:'1', message: 'Solar battery fully charged. Switching grid offset.', priority: 'low', time: '10m ago'}],
    mockAIResponse: { summary: 'Switching to solar power.', reasoning: 'Battery at 100%. Grid rates peaking.', data: 'Offsetting 4MW.', recommendation: 'Execute switch automatically.', risk: 'None', predictedOutcome: 'Save $400/hr.', confidence: 99, timeSaved: '0 mins', usersAffected: '0' }
  },
  'Accessibility': { 
    id: 'accessibility',
    title: 'Accessibility Dashboard', subtitle: 'Wheelchair routes, assistance, and elevators',
    visualizations: [{label: 'Wheelchair Requests', value: '14 Active'}, {label: 'Elevator Status', value: '100% Online'}, {label: 'Ramp Usage', value: 'Normal'}, {label: 'Avg Wait', value: '2m'}], 
    clickInteractions: ['Calculate Accessible Route', 'Identify Obstacles', 'Dispatch Assistance', 'Enable Voice Guidance'],
    insights: [{id:'1', message: 'Elevator 3 experiencing high usage.', priority: 'low', time: '4m ago'}],
    mockAIResponse: { summary: 'Elevator 3 high usage.', reasoning: 'Multiple wheelchair arrivals at Gate A.', data: 'Wait time 4m.', recommendation: 'Redirect to Elevator 4.', risk: 'Accessibility delay', predictedOutcome: 'Wait time reduced to 1m.', confidence: 95, timeSaved: '3 mins', usersAffected: '14 Fans' }
  },
  'Volunteers': { 
    id: 'volunteers',
    title: 'Volunteer Operations', subtitle: 'Live locations, assignments, and response times',
    visualizations: [{label: 'Active Staff', value: '450'}, {label: 'Avg Response', value: '1m 20s'}, {label: 'Open Tasks', value: '12'}, {label: 'Language Coverage', value: '24 Langs'}], 
    clickInteractions: ['Analyze Volunteer Locations', 'Assign New Task', 'Check Language Availability', 'Assess Performance'],
    insights: [{id:'1', message: 'Sector North short on Spanish speakers.', priority: 'medium', time: '2m ago'}],
    mockAIResponse: { summary: 'Spanish speaker needed in North Sector.', reasoning: 'Large group from Mexico arriving.', data: '0 Spanish volunteers in zone.', recommendation: 'Reallocate 2 volunteers from West Sector.', risk: 'Communication barrier', predictedOutcome: 'Assigned in 2m.', confidence: 98, timeSaved: '5 mins', usersAffected: '200 Fans' }
  },
  'Venue Operations': {
    id: 'infrastructure',
    title: 'Infrastructure & Operations', subtitle: 'Power, network, elevators, and IoT devices',
    visualizations: [{label: 'Power Grid', value: 'Stable'}, {label: 'Network', value: '98% Uptime'}, {label: 'CCTV Status', value: '99% Online'}, {label: 'Elevators', value: '1 Issue'}],
    clickInteractions: ['Analyze Generator Status', 'Predict Network Load', 'Simulate Power Failure', 'Dispatch Maintenance'],
    insights: [{id:'1', message: 'Elevator 2 running hot. Maintenance advised.', priority: 'medium', time: '5m ago'}],
    mockAIResponse: { summary: 'Elevator 2 motor temp high.', reasoning: 'Continuous operation for 4 hours.', data: 'Temp: 68C.', recommendation: 'Switch to Elevator 3 and inspect.', risk: 'Breakdown', predictedOutcome: 'Avoided failure.', confidence: 95, timeSaved: '60 mins', usersAffected: '50 Fans' }
  },
  'Language Center': {
    id: 'language',
    title: 'Language Intelligence', subtitle: 'Translation requests, voice broadcasts, and interpreters',
    visualizations: [{label: 'Top Language', value: 'Spanish'}, {label: 'Live Translations', value: '4.2k/hr'}, {label: 'Interpreter Wait', value: '0m'}, {label: 'Broadcasts', value: '2 Active'}],
    clickInteractions: ['Analyze Language Demographics', 'Generate Multilingual Broadcast', 'Request Interpreter', 'Analyze Common Questions'],
    insights: [{id:'1', message: 'Spike in Arabic translation requests near Gate C.', priority: 'low', time: '1m ago'}],
    mockAIResponse: { summary: 'Arabic translations surging.', reasoning: 'Flight from Qatar arrived.', data: 'Requests up 400%.', recommendation: 'Deploy Arabic volunteers to Gate C.', risk: 'Confusion', predictedOutcome: 'Smooth entry.', confidence: 99, timeSaved: '15 mins', usersAffected: '600 Fans' }
  },
  'Reports': {
    id: 'reports',
    title: 'Enterprise Reports', subtitle: 'One-click AI generation for all domain reports',
    visualizations: [{label: 'Generated Today', value: '14'}, {label: 'Pending Reviews', value: '2'}, {label: 'Match Report', value: 'Drafting'}, {label: 'Export Formats', value: 'PDF/CSV'}],
    clickInteractions: ['Generate Executive Report', 'Generate Incident Report', 'Generate Sustainability Report', 'Export Match Data'],
    insights: [{id:'1', message: 'Medical Incident Report 441 ready for signature.', priority: 'low', time: '10m ago'}],
    mockAIResponse: { summary: 'Incident Report 441 compiled.', reasoning: 'All field logs aggregated.', data: '4 pages, 2 attachments.', recommendation: 'Review and sign.', risk: 'None', predictedOutcome: 'Logged securely.', confidence: 100, timeSaved: '45 mins', usersAffected: '1 Patient' }
  }
};

export default function OrganizerWorkspace() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderMainContent = () => {
    if (activeTab === 'Home') {
       return <ExecutiveCommandDashboard />;
    }
    
    if (activeTab === 'Data Center') {
       return <DataCenterWorkspace />;
    }

    if (activeTab === 'System Architecture') {
       return <SystemArchitectureWorkspace />;
    }

    if (activeTab === 'Identity & Security') {
       return <IdentitySecurityWorkspace />;
    }

    if (activeTab === 'Operations Command') {
       return <OperationsCommandWorkspace />;
    }

    if (activeTab === 'Platform Overview') {
       return <PlatformOverviewWorkspace />;
    }

    if (activeTab === 'Digital Twin') {
      return (
        <div className="flex-1 glass-panel rounded-3xl overflow-hidden border border-slate-700/50 flex flex-col">
          <div className="p-4 border-b border-slate-700/50 flex justify-between items-center bg-slate-900/50">
            <h3 className="font-bold text-white tracking-wide">Digital Twin Simulation</h3>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-[#1AA65D] animate-pulse"></span>
              <span className="text-xs text-[#1AA65D] font-bold uppercase tracking-wider">Live</span>
            </div>
          </div>
          <div className="flex-1 relative">
            <DigitalTwinMap />
          </div>
        </div>
      );
    }
    
    if (DASHBOARD_CONFIGS[activeTab]) {
      const config = DASHBOARD_CONFIGS[activeTab];
      return <SpecializedDashboard {...config} />;
    }

    return (
      <div className="flex-1 glass-panel rounded-3xl overflow-hidden border border-slate-700/50 flex flex-col items-center justify-center p-8 text-center">
        <h3 className="font-bold text-2xl text-white mb-2">{activeTab} Intelligence</h3>
        <p className="text-slate-400 max-w-md">The AI model is currently aggregating live operational data for this module. Data streams will initialize shortly.</p>
      </div>
    );
  };

  return (
    <div className="h-screen w-full bg-[#0A0015] overflow-hidden flex flex-col text-slate-100 selection:bg-[#E20074]/30">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#2B7CE4]/10 rounded-full blur-[140px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#E20074]/10 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Top AI Toolbar */}
      <Header />

      {/* Main Layout Area */}
      <div className="flex-1 flex overflow-hidden z-10 relative">
        
        {/* Persistent Left Navigation */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Central Workspace (Split View Layout) */}
        <main className="flex-1 flex flex-col h-full overflow-hidden p-4">
          
          <div className="flex-1 flex flex-col lg:flex-row gap-4 min-h-0">
            
            {/* Left Column in Workspace */}
            <div className="flex-1 flex flex-col gap-4 min-w-0">
              {/* Hero AI Summary Card */}
              <div className="flex-shrink-0">
                <HeroAICard />
              </div>
              
              {/* Dynamic Primary Content */}
              {renderMainContent()}
            </div>

            {/* Right Column in Workspace (Notifications) */}
            <div className="w-full lg:w-96 flex-shrink-0 flex flex-col min-h-0">
              <UniversalNotificationCenter />
            </div>

          </div>

          {/* Bottom Live Timeline */}
          <div className="mt-4 flex-shrink-0">
            <LiveTimeline />
          </div>

        </main>

        {/* Right AI Assistant Panel */}
        <AICopilotsPanel />

      </div>
    </div>
  );
}
