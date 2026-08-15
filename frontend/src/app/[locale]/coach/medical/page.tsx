'use client';
import { useState } from 'react';

export default function MedicalHubPage() {
  const [selectedPlayer, setSelectedPlayer] = useState('Andriy Yarmolenko');

  const squadHealth = [
    { name: 'Andriy Yarmolenko', risk: 'High', load: '95%', stamina: '45%', recommendation: 'Rest immediately. Muscle fatigue detected in right hamstring.' },
    { name: 'Mykola Shaparenko', risk: 'Medium', load: '78%', stamina: '65%', recommendation: 'Reduce high-intensity sprints in next training session.' },
    { name: 'Volodymyr Brazhko', risk: 'Low', load: '40%', stamina: '92%', recommendation: 'Optimal condition. Ready for full 90 minutes.' },
    { name: 'Vladyslav Vanat', risk: 'Low', load: '50%', stamina: '88%', recommendation: 'Optimal condition. Load can be increased.' }
  ];

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="title" style={{ background: 'linear-gradient(to right, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Medical Hub & Injury AI 🏥</h1>
          <p className="subtitle">Predictive injury modeling and load management.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        
        {/* Squad Health Overview */}
        <div className="glass-panel" style={{ gridColumn: '1 / -1' }}>
          <h2 style={{ marginBottom: '1.5rem', color: '#f8fafc' }}>🩺 Squad Risk Scanner</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--surface-border)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '1rem' }}>Player</th>
                  <th style={{ padding: '1rem' }}>Cumulative Load</th>
                  <th style={{ padding: '1rem' }}>Current Stamina</th>
                  <th style={{ padding: '1rem' }}>Injury Risk</th>
                  <th style={{ padding: '1rem' }}>AI Recommendation</th>
                </tr>
              </thead>
              <tbody>
                {squadHealth.map((p, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer', background: p.name === selectedPlayer ? 'rgba(255,255,255,0.05)' : 'transparent' }} onClick={() => setSelectedPlayer(p.name)}>
                    <td style={{ padding: '1rem', fontWeight: '500' }}>{p.name}</td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: p.load, background: parseInt(p.load) > 85 ? '#ef4444' : parseInt(p.load) > 60 ? '#eab308' : '#4ade80' }}></div>
                      </div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem', display: 'block' }}>{p.load}</span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: p.stamina, background: parseInt(p.stamina) < 50 ? '#ef4444' : parseInt(p.stamina) < 70 ? '#eab308' : '#4ade80' }}></div>
                      </div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem', display: 'block' }}>{p.stamina}</span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '20px', 
                        fontSize: '0.875rem',
                        background: p.risk === 'High' ? 'rgba(239, 68, 68, 0.2)' : p.risk === 'Medium' ? 'rgba(234, 179, 8, 0.2)' : 'rgba(74, 222, 128, 0.2)',
                        color: p.risk === 'High' ? '#fca5a5' : p.risk === 'Medium' ? '#fde047' : '#4ade80'
                      }}>
                        {p.risk}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>{p.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Player Analysis */}
        <div className="glass-panel" style={{ border: '1px solid rgba(239, 68, 68, 0.5)' }}>
           <h2 style={{ marginBottom: '1.5rem', color: '#fca5a5', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            ⚠️ Action Required: {selectedPlayer}
           </h2>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
             <div>
               <h4 style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.8rem', marginBottom: '0.5rem' }}>AI Diagnostics</h4>
               <p style={{ color: '#e2e8f0', lineHeight: '1.6', fontSize: '0.9rem' }}>Both players have spent 15% more time in the "Red Zone" (high-speed running &gt; 20km/h) than their seasonal average.</p>
             </div>
             
             <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
               <h4 style={{ color: '#fca5a5', marginBottom: '0.5rem' }}>Predicted Injury: Hamstring Tear</h4>
               <p style={{ fontSize: '0.9rem', color: 'white' }}>Probability: <span style={{ fontWeight: 'bold', color: '#ef4444' }}>87%</span> within the next 7 days if current match load continues.</p>
             </div>

             <button className="btn-primary" style={{ background: '#ef4444', color: 'white', marginTop: 'auto' }}>
               Schedule Rest & Recovery
             </button>
           </div>
        </div>

      </div>
    </div>
  );
}
