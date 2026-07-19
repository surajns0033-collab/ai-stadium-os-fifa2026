"use client";
import React from 'react';

export default function CrowdFlow({ simulation }: { simulation: string | null }) {
  const isEvacuating = simulation === 'fire_alarm' || simulation === 'security_threat';
  const isRedistributing = simulation === 'gate_closed';

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" style={{ mixBlendMode: 'screen' }}>
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill={isEvacuating ? '#ef4444' : isRedistributing ? '#E20074' : '#1AA65D'} />
        </marker>
      </defs>
      
      {/* Normal flow */}
      {!isEvacuating && !isRedistributing && (
        <>
          <path d="M 20% 50% Q 30% 20% 50% 20%" fill="none" stroke="#1AA65D" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_2s_linear_infinite]" markerEnd="url(#arrowhead)"/>
          <path d="M 80% 50% Q 70% 80% 50% 80%" fill="none" stroke="#1AA65D" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_2s_linear_infinite]" markerEnd="url(#arrowhead)"/>
        </>
      )}

      {/* Evacuation flow */}
      {isEvacuating && (
        <>
          <path d="M 50% 50% L 10% 50%" fill="none" stroke="#ef4444" strokeWidth="4" strokeDasharray="8,8" className="animate-[dash_1s_linear_infinite]" markerEnd="url(#arrowhead)"/>
          <path d="M 50% 50% L 90% 50%" fill="none" stroke="#ef4444" strokeWidth="4" strokeDasharray="8,8" className="animate-[dash_1s_linear_infinite]" markerEnd="url(#arrowhead)"/>
          <path d="M 50% 50% L 50% 10%" fill="none" stroke="#ef4444" strokeWidth="4" strokeDasharray="8,8" className="animate-[dash_1s_linear_infinite]" markerEnd="url(#arrowhead)"/>
          <path d="M 50% 50% L 50% 90%" fill="none" stroke="#ef4444" strokeWidth="4" strokeDasharray="8,8" className="animate-[dash_1s_linear_infinite]" markerEnd="url(#arrowhead)"/>
        </>
      )}

      {/* Redirect flow (Gate closed) */}
      {isRedistributing && (
        <>
          <path d="M 20% 50% Q 30% 80% 50% 90%" fill="none" stroke="#E20074" strokeWidth="3" strokeDasharray="6,6" className="animate-[dash_1.5s_linear_infinite]" markerEnd="url(#arrowhead)"/>
          <text x="30%" y="85%" fill="#E20074" fontSize="10" fontWeight="bold">AI REDIRECT</text>
        </>
      )}

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
      `}</style>
    </svg>
  );
}
