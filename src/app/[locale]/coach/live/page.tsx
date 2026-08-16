'use client';
import { useState, useEffect } from 'react';

export default function LiveMatchPage() {
  const [matchTime, setMatchTime] = useState(42);
  
  // Simulate live clock
  useEffect(() => {
    const timer = setInterval(() => {
      setMatchTime(prev => prev < 45 ? prev + 1 : prev);
    }, 60000); // 1 real minute (simulate for demo, usually much faster)
    return () => clearInterval(timer);
  }, []);

  const [liveEvents, setLiveEvents] = useState([
    { time: "41'", text: "Yarmolenko loses the ball in the defensive third. Dangerous counter-attack stopped by Brazhko.", type: "Negative" },
    { time: "38'", text: "Shaparenko plays a through ball to Vanat. Shot saved by the keeper.", type: "Positive" },
    { time: "32'", text: "Tactical Warning: Shakhtar is overloading the left flank (7 attacks in last 10 mins).", type: "Alert" }
  ]);

  return (
    <div style={{ background: '#020617', minHeight: '100vh', color: 'white', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Top Scoreboard Bar */}
      <div style={{ background: '#0f172a', padding: '1rem', borderBottom: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: '#ef4444', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '4px', fontWeight: 'bold', animation: 'pulse 2s infinite' }}>
            LIVE
          </div>
          <style>{`@keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }`}</style>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{matchTime}:14</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
          <span style={{ color: '#60a5fa' }}>Dynamo</span>
          <span style={{ fontSize: '2rem', padding: '0.5rem 1rem', background: '#1e293b', borderRadius: '8px' }}>1 - 0</span>
          <span style={{ color: '#f59e0b' }}>Shakhtar</span>
        </div>

        <div>
          <button style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', fontWeight: 'bold' }}>Substitutions</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '1rem', padding: '1rem', height: 'calc(100vh - 80px)' }}>
        
        {/* Main Pitch View */}
        <div style={{ background: '#1e293b', borderRadius: '12px', border: '1px solid #334155', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          
          <div style={{ padding: '1rem', borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between' }}>
            <h2 style={{ fontSize: '1.2rem', margin: 0 }}>Live Tactical Map</h2>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>View: <strong style={{ color: '#38bdf8' }}>Average Positions</strong></span>
            </div>
          </div>

          <div style={{ flex: 1, background: '#166534', position: 'relative', margin: '1rem', borderRadius: '8px', border: '2px solid white' }}>
             {/* Center Line & Circle */}
             <div style={{ position: 'absolute', top: '0', bottom: '0', left: '50%', width: '2px', background: 'white', transform: 'translateX(-50%)' }}></div>
             <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100px', height: '100px', border: '2px solid white', borderRadius: '50%', transform: 'translate(-50%, -50%)' }}></div>
             
             {/* Penalty Boxes */}
             <div style={{ position: 'absolute', top: '20%', left: '0', width: '15%', height: '60%', border: '2px solid white', borderLeft: 'none' }}></div>
             <div style={{ position: 'absolute', top: '20%', right: '0', width: '15%', height: '60%', border: '2px solid white', borderRight: 'none' }}></div>

             {/* Heatmap Overlay Simulation */}
             <div style={{ position: 'absolute', top: '10%', left: '10%', width: '30%', height: '80%', background: 'radial-gradient(ellipse at center, rgba(239, 68, 68, 0.4) 0%, transparent 70%)' }}></div>
             <div style={{ position: 'absolute', bottom: '20%', right: '20%', width: '20%', height: '40%', background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.5) 0%, transparent 70%)' }}></div>
             
             {/* Example Players */}
             <div style={{ position: 'absolute', top: '30%', left: '40%', width: '20px', height: '20px', background: '#3b82f6', borderRadius: '50%', border: '2px solid white' }}></div>
             <div style={{ position: 'absolute', top: '60%', left: '35%', width: '20px', height: '20px', background: '#3b82f6', borderRadius: '50%', border: '2px solid white' }}></div>
             <div style={{ position: 'absolute', top: '45%', right: '30%', width: '20px', height: '20px', background: '#f59e0b', borderRadius: '50%', border: '2px solid white' }}></div>

             <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(0,0,0,0.5)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                AI Note: Dynamo playing highly asymmetric. Left winger staying wide, right winger cutting inside.
             </div>
          </div>
        </div>

        {/* AI Assistant Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          {/* Half Time Prediction */}
          <div style={{ background: 'linear-gradient(145deg, #3b82f6, #1d4ed8)', borderRadius: '12px', padding: '1.5rem', border: '1px solid #60a5fa' }}>
            <h3 style={{ margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🧠 AI Half-Time Advice</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.4', margin: 0 }}>
              Shakhtar is successfully bypassing your midfield press (68% success rate). 
              <strong>Recommendation:</strong> Drop the defensive line by 5 meters and instruct Brazhko to man-mark their #10.
            </p>
          </div>

          {/* Live Events Timeline */}
          <div style={{ background: '#1e293b', borderRadius: '12px', border: '1px solid #334155', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ padding: '1rem', borderBottom: '1px solid #334155', margin: 0, fontSize: '1.1rem' }}>Live AI Events Feed</h3>
            
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto' }}>
              {liveEvents.map((evt, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem' }}>
                  <div style={{ fontWeight: 'bold', color: '#94a3b8', minWidth: '35px' }}>{evt.time}</div>
                  <div style={{ 
                    padding: '0.75rem', 
                    background: 'rgba(0,0,0,0.2)', 
                    borderRadius: '8px', 
                    fontSize: '0.9rem',
                    borderLeft: `3px solid ${evt.type === 'Positive' ? '#4ade80' : evt.type === 'Negative' ? '#ef4444' : '#f59e0b'}`
                  }}>
                    {evt.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
