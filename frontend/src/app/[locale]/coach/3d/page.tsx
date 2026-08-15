'use client';
import { useState } from 'react';

export default function ThreeDReplayPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Toggle the CSS animation state
  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="container" style={{ padding: '2rem 0', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
        <div>
          <h1 className="title" style={{ background: 'linear-gradient(to right, #c084fc, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>3D Tactical Replay 🏟️</h1>
          <p className="subtitle">Volumetric video analysis and AI pass trajectories.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            onClick={handlePlay}
            style={{ 
              background: isPlaying ? '#ef4444' : '#10b981', 
              color: 'white', 
              border: 'none', 
              padding: '0.75rem 1.5rem', 
              borderRadius: '8px', 
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            {isPlaying ? '⏸️ PAUSE ENGINE' : '▶️ PLAY 3D SIMULATION'}
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem' }}>
        
        {/* 3D Pitch Container */}
        <div className="glass-panel" style={{ height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1000px', overflow: 'hidden', background: '#020617' }}>
          
          {/* Isometric Pitch */}
          <div style={{
            width: '400px',
            height: '600px',
            background: '#166534', // Pitch green
            border: '4px solid white',
            position: 'relative',
            transformStyle: 'preserve-3d',
            transform: 'rotateX(60deg) rotateZ(-30deg)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}>
            
            {/* Pitch Markings */}
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '4px', background: 'white', transform: 'translateY(-50%)' }}></div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100px', height: '100px', border: '4px solid white', borderRadius: '50%', transform: 'translate(-50%, -50%)' }}></div>
            
            <div style={{ position: 'absolute', top: 0, left: '25%', width: '50%', height: '15%', border: '4px solid white', borderTop: 'none' }}></div>
            <div style={{ position: 'absolute', bottom: 0, left: '25%', width: '50%', height: '15%', border: '4px solid white', borderBottom: 'none' }}></div>

            {/* Simulated 3D Player 1 (Passer) */}
            <div style={{
              position: 'absolute',
              top: '70%',
              left: '60%',
              width: '20px',
              height: '40px', // Taller for 3D effect
              background: '#3b82f6',
              transform: 'rotateX(-90deg) translateZ(20px)', // Stand up vertically
              transformOrigin: 'bottom center',
              borderRadius: '10px 10px 0 0',
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)'
            }}></div>

            {/* Simulated 3D Player 2 (Receiver) */}
            <div style={{
              position: 'absolute',
              top: '20%',
              left: '30%',
              width: '20px',
              height: '40px',
              background: '#3b82f6',
              transform: 'rotateX(-90deg) translateZ(20px)',
              transformOrigin: 'bottom center',
              borderRadius: '10px 10px 0 0',
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)'
            }}></div>

            {/* Simulated 3D Defender */}
            <div style={{
              position: 'absolute',
              top: '35%',
              left: '45%',
              width: '20px',
              height: '40px',
              background: '#f59e0b',
              transform: 'rotateX(-90deg) translateZ(20px)',
              transformOrigin: 'bottom center',
              borderRadius: '10px 10px 0 0'
            }}></div>

            {/* 3D Ball & Pass Trajectory Animation */}
            {isPlaying && (
              <>
                {/* SVG Curve for the pass */}
                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', transform: 'translateZ(15px)' }}>
                  <path 
                    d="M 240 420 Q 200 250 120 120" 
                    fill="transparent" 
                    stroke="#fbbf24" 
                    strokeWidth="3" 
                    strokeDasharray="10"
                    style={{ animation: 'dash 2s linear forwards' }}
                  />
                </svg>

                {/* The Ball */}
                <div style={{
                  position: 'absolute',
                  width: '12px',
                  height: '12px',
                  background: 'white',
                  borderRadius: '50%',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
                  animation: 'pass 2s ease-in-out forwards'
                }}></div>

                <style>{`
                  @keyframes pass {
                    0% { top: 70%; left: 60%; transform: rotateX(-90deg) translateZ(5px); }
                    50% { top: 45%; left: 45%; transform: rotateX(-90deg) translateZ(60px); } /* Arc height */
                    100% { top: 20%; left: 30%; transform: rotateX(-90deg) translateZ(5px); }
                  }
                  @keyframes dash {
                    to { stroke-dashoffset: -100; }
                  }
                `}</style>
              </>
            )}

          </div>
        </div>

        {/* Playback Controls & AI Notes */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          <div className="glass-panel">
            <h3 style={{ color: 'white', marginBottom: '1rem', borderBottom: '1px solid var(--surface-border)', paddingBottom: '0.5rem' }}>Camera Angle</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button style={{ background: 'rgba(59, 130, 246, 0.2)', border: '1px solid #3b82f6', color: 'white', padding: '0.75rem', borderRadius: '4px', cursor: 'pointer', textAlign: 'left' }}>🚁 Isometric Drone</button>
              <button style={{ background: 'transparent', border: '1px solid var(--surface-border)', color: 'var(--text-muted)', padding: '0.75rem', borderRadius: '4px', cursor: 'pointer', textAlign: 'left' }}>👀 Player POV (Shaparenko)</button>
              <button style={{ background: 'transparent', border: '1px solid var(--surface-border)', color: 'var(--text-muted)', padding: '0.75rem', borderRadius: '4px', cursor: 'pointer', textAlign: 'left' }}>🥅 Goal-cam</button>
            </div>
          </div>

          <div className="glass-panel" style={{ borderLeft: '4px solid #c084fc' }}>
            <h3 style={{ color: '#c084fc', marginBottom: '0.5rem' }}>AI Volumetric Analysis</h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.5' }}>
              The ball reached a maximum height of <strong>4.2 meters</strong>, perfectly bypassing the defender's interception zone. The expected completion probability (xPass) was only <strong>14%</strong>.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
