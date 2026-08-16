'use client';
import { useState } from 'react';

// Mock data
const initialPlayers = [
  { id: '1', name: 'Andriy Yarmolenko', currentHr: 145, normalHr: 60, maxHr: 185 },
  { id: '2', name: 'Mykhailo Mudryk', currentHr: 168, normalHr: 55, maxHr: 195 },
  { id: '3', name: 'Illia Zabarnyi', currentHr: 182, normalHr: 58, maxHr: 190 }, // Example of high HR
];

export default function PhysicsPage() {
  const [players, setPlayers] = useState(initialPlayers);
  const [selectedPlayerId, setSelectedPlayerId] = useState('1');

  const selectedPlayer = players.find(p => p.id === selectedPlayerId);

  const handleUpdateMedical = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Medical thresholds updated securely!');
  };

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1 className="title">Medical & Heart Rate Monitoring</h1>
      <p className="subtitle">Live wearable sensor data and doctor-recommended medical thresholds.</p>

      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
        
        {/* Player List / Selector */}
        <div className="glass-panel" style={{ flex: 1, minWidth: '300px' }}>
          <h2>Squad Sensors</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            {players.map(p => (
              <div 
                key={p.id} 
                onClick={() => setSelectedPlayerId(p.id)}
                style={{ 
                  padding: '1rem', 
                  borderRadius: '8px', 
                  backgroundColor: selectedPlayerId === p.id ? 'rgba(59, 130, 246, 0.2)' : 'rgba(0,0,0,0.2)',
                  border: selectedPlayerId === p.id ? '1px solid #3b82f6' : '1px solid transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span style={{ fontWeight: 'bold' }}>{p.name}</span>
                <span style={{ 
                  color: p.currentHr > p.maxHr * 0.9 ? '#f87171' : '#4ade80',
                  fontWeight: 'bold'
                }}>
                  {p.currentHr} BPM
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Player Medical Config */}
        {selectedPlayer && (
          <div className="glass-panel" style={{ flex: 2, minWidth: '400px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h2>{selectedPlayer.name}</h2>
                <p style={{ color: 'var(--text-muted)' }}>Medical Thresholds & Limits</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Live Sensor</p>
                <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: selectedPlayer.currentHr > selectedPlayer.maxHr * 0.9 ? '#f87171' : '#4ade80', lineHeight: 1 }}>
                  ❤️ {selectedPlayer.currentHr}
                </p>
              </div>
            </div>

            {selectedPlayer.currentHr > selectedPlayer.maxHr * 0.9 && (
              <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'rgba(248, 113, 113, 0.1)', border: '1px solid rgba(248, 113, 113, 0.3)', borderRadius: '8px' }}>
                <h3 style={{ color: '#fca5a5' }}>⚠️ High Heart Rate Alert</h3>
                <p style={{ color: '#fecaca', fontSize: '0.875rem' }}>Player is operating near absolute maximum limits. Consider subbing out to prevent injury.</p>
              </div>
            )}

            <form onSubmit={handleUpdateMedical} style={{ marginTop: '2rem', display: 'grid', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Doctor's Normal Resting HR (BPM)</label>
                <input 
                  type="number" 
                  defaultValue={selectedPlayer.normalHr} 
                  style={inputStyle} 
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Absolute Maximum HR Limit (BPM)</label>
                <input 
                  type="number" 
                  defaultValue={selectedPlayer.maxHr} 
                  style={inputStyle} 
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Doctor's Notes</label>
                <textarea 
                  placeholder="e.g. Cleared for high intensity, monitor recovery rate..."
                  style={{...inputStyle, minHeight: '80px', width: '100%'}} 
                />
              </div>

              <button type="submit" className="btn-primary" style={{ justifySelf: 'start' }}>
                Save Medical Profile
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}

const inputStyle = {
  padding: '0.75rem',
  borderRadius: '8px',
  border: '1px solid var(--surface-border)',
  background: 'rgba(0,0,0,0.2)',
  color: 'white',
  fontSize: '1rem',
  outline: 'none',
  width: '100%',
  maxWidth: '300px'
};
