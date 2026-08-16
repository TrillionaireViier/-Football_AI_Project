'use client';
import { useState } from 'react';
import { usePlayers } from '@/context/PlayerContext';

export default function PlayerDashboard() {
  const { players } = usePlayers();
  const [activeTab, setActiveTab] = useState<'homework' | 'stats' | 'video'>('homework');
  const [selectedPlayerId, setSelectedPlayerId] = useState(players.length > 0 ? players[0].id : '');
  
  const activeId = selectedPlayerId || (players.length > 0 ? players[0].id : '');
  const currentPlayer = players.find(p => p.id === activeId);

  if (!currentPlayer) {
    return <div style={{ color: 'white', padding: '2rem', textAlign: 'center' }}>No players available.</div>;
  }

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      
      {/* Mock Login Switcher */}
      <div style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '400px' }}>
        <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Simulate Player Login:</p>
        <select 
          value={activeId} 
          onChange={(e) => setSelectedPlayerId(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', background: '#1e293b', color: 'white', border: '1px solid #334155' }}
        >
          {players.map(p => (
            <option key={p.id} value={p.id}>{p.name} ({p.position})</option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src={currentPlayer.photoUrl} alt="Player" style={{ width: '64px', height: '64px', borderRadius: '50%', border: '2px solid var(--primary)' }} />
          <div>
            <h1 className="title" style={{ marginBottom: '0.2rem' }}>Welcome, {currentPlayer.name.split(' ')[0]}</h1>
            <p className="subtitle">Next Match: Shakhtar Donetsk (Home) • 3 Days Left</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontWeight: 'bold', color: '#4ade80' }}>Ready</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Status</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', borderBottom: '1px solid var(--surface-border)' }}>
        <button style={activeTab === 'homework' ? tabActive : tabInactive} onClick={() => setActiveTab('homework')}>
          📚 My Homework
        </button>
        <button style={activeTab === 'stats' ? tabActive : tabInactive} onClick={() => setActiveTab('stats')}>
          📊 Personal Stats
        </button>
        <button style={activeTab === 'video' ? tabActive : tabInactive} onClick={() => setActiveTab('video')}>
          🎥 Video Feedback
        </button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        {activeTab === 'homework' && (
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div className="glass-panel" style={{ borderLeft: '4px solid #3b82f6' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ color: '#60a5fa' }}>Tactical Assignment: High Press Trigger</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem' }}>Assigned by Coach Rebrov • Due before Match</p>
                  <p style={{ marginTop: '1rem' }}>Please review the global highlight clip of Man City's high press against Real Madrid. Notice how the winger triggers the press when the center-back receives the ball facing his own goal.</p>
                </div>
                <button className="btn-primary" style={{ backgroundColor: '#10b981' }}>Mark as Read</button>
              </div>
              <div style={{ marginTop: '1.5rem', height: '200px', backgroundColor: '#000', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: 'var(--text-muted)' }}>▶️ [ Play Video Attachment ]</p>
              </div>
            </div>

            <div className="glass-panel" style={{ borderLeft: '4px solid #f59e0b' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ color: '#fbbf24' }}>Physical Regimen: Active Recovery</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem' }}>Assigned by Medical Staff • Due Today</p>
                  <p style={{ marginTop: '1rem' }}>Your heart rate hit 185 BPM in yesterday's session. Complete a 30-minute light cycle and stretching routine today. Do not exceed 130 BPM.</p>
                </div>
                <button className="btn-primary" style={{ backgroundColor: 'var(--surface-border)' }}>Start Timer</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'stats' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            <div className="glass-panel" style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--text-muted)' }}>Avg Rating</h3>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', color: '#4ade80' }}>8.2</p>
              <p style={{ fontSize: '0.875rem', color: '#4ade80' }}>↑ +0.3 this month</p>
            </div>
            <div className="glass-panel" style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--text-muted)' }}>Goals</h3>
              <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>8</p>
            </div>
            <div className="glass-panel" style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--text-muted)' }}>Assists</h3>
              <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>3</p>
            </div>
            <div className="glass-panel" style={{ gridColumn: '1 / -1' }}>
               <h3 style={{ marginBottom: '1rem' }}>Psychological Profile Feedback</h3>
               <p style={{ fontStyle: 'italic', color: '#fbcfe8' }}>"You thrive under pressure. Keep up the leadership in the dressing room."</p>
            </div>
          </div>
        )}

        {activeTab === 'video' && (
          <div style={{ display: 'grid', gap: '1.5rem' }}>
             <p style={{ color: 'var(--text-muted)' }}>Recent AI-Analyzed clips featuring you.</p>
             <div className="glass-panel" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '120px', height: '80px', backgroundColor: '#000', borderRadius: '4px' }}></div>
                <div>
                  <h3 style={{ fontSize: '1.125rem' }}>Excellent forward run (01:42)</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Match vs Dynamo • Auto-tagged by AI</p>
                </div>
                <button className="btn-primary" style={{ marginLeft: 'auto', backgroundColor: 'var(--surface-border)' }}>Review Clip</button>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}

const tabActive = {
  padding: '1rem 2rem',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '2px solid var(--primary)',
  color: 'white',
  fontSize: '1.125rem',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const tabInactive = {
  padding: '1rem 2rem',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '2px solid transparent',
  color: 'var(--text-muted)',
  fontSize: '1.125rem',
  cursor: 'pointer'
};
