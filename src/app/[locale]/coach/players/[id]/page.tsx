'use client';
import { useState } from 'react';

export default function PlayerProfilePage({ params }: { params: any }) {
  const [analyzing, setAnalyzing] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const handleFakeAIAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setAiResult({
        rating: 8.4,
        strengths: ["Explosive Speed", "Attacking Positioning", "Finishing"],
        weaknesses: ["Defensive Tracking", "Long Passing"]
      });
    }, 1500);
  };

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="title" style={{ marginBottom: '0.5rem' }}>Andriy Yarmolenko</h1>
          <p className="subtitle">Forward • Dynamo • #7</p>
        </div>
        <button 
          className="btn-primary" 
          style={{ background: 'linear-gradient(to right, #8b5cf6, #3b82f6)' }}
          onClick={handleFakeAIAnalysis}
          disabled={analyzing}
        >
          {analyzing ? 'Analyzing footage...' : '✨ Run AI Analysis'}
        </button>
      </div>

      {aiResult && (
        <div className="glass-panel" style={{ marginBottom: '2rem', border: '1px solid #8b5cf6' }}>
          <h2 style={{ color: '#a78bfa' }}>AI Evaluation Complete</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
            <div>
              <p style={{ color: 'var(--text-muted)' }}>AI Rating</p>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4ade80' }}>{aiResult.rating}</p>
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)' }}>Strengths</p>
              <ul style={{ color: '#4ade80', paddingLeft: '1rem' }}>
                {aiResult.strengths.map((s: string) => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)' }}>Weaknesses</p>
              <ul style={{ color: '#f87171', paddingLeft: '1rem' }}>
                {aiResult.weaknesses.map((w: string) => <li key={w}>{w}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
        <StatCard title="Matches" value="12" />
        <StatCard title="Goals" value="8" />
        <StatCard title="Assists" value="3" />
        <StatCard title="Avg Rating" value="8.2" color="#fbbf24" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div className="glass-panel">
          <h2>Progress Over Time</h2>
          <div style={{ height: '200px', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '8px', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ color: 'var(--text-muted)' }}>[ Simple Line Graph Placeholder ]</p>
          </div>
        </div>

        <div className="glass-panel" style={{ border: '1px solid rgba(236, 72, 153, 0.5)' }}>
          <h2 style={{ color: '#f472b6' }}>🧠 Psychological Portrait</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>AI-generated mental profile based on on-pitch behavior and pressure moments.</p>
          
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Handling Pressure</span>
              <div style={{ width: '150px', height: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '85%', height: '100%', backgroundColor: '#4ade80' }}></div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Leadership</span>
              <div style={{ width: '150px', height: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '92%', height: '100%', backgroundColor: '#3b82f6' }}></div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Adaptability (Tactical)</span>
              <div style={{ width: '150px', height: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '60%', height: '100%', backgroundColor: '#fbbf24' }}></div>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'rgba(236, 72, 153, 0.1)', borderRadius: '8px' }}>
            <p style={{ fontSize: '0.875rem', color: '#fbcfe8', fontStyle: 'italic' }}>
              "Thrives in high-pressure situations. Tends to over-commit when the team is losing, but natural leadership qualities make him essential in the dressing room."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, color = 'white' }: { title: string, value: string, color?: string }) {
  return (
    <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase' }}>{title}</p>
      <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color, marginTop: '0.5rem' }}>{value}</p>
    </div>
  );
}
