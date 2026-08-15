export default function PlannerPage() {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="title">Match & Training Planner</h1>
          <p className="subtitle">Schedule sessions, plan tactics, and monitor workload.</p>
        </div>
        <button className="btn-primary">+ New Event</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem', marginTop: '2rem' }}>
        
        {/* Main Calendar View */}
        <div className="glass-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2>October 2026</h2>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button style={btnSmall}>Prev</button>
              <button style={btnSmall}>Today</button>
              <button style={btnSmall}>Next</button>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem', textAlign: 'center', fontWeight: 'bold', color: 'var(--text-muted)' }}>
            <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem', marginTop: '1rem' }}>
            {/* Calendar Grid Placeholders */}
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} style={{ height: '80px', backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: '8px', padding: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{i + 12}</span>
                {i === 3 && <div style={eventStyleMatch}>Match vs SHT</div>}
                {i === 2 && <div style={eventStyleTraining}>Recovery</div>}
                {i === 5 && <div style={eventStyleTraining}>Tactics</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar: Upcoming Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ border: '1px solid #3b82f6' }}>
            <h3 style={{ color: '#60a5fa' }}>Next Match (In 3 Days)</h3>
            <p style={{ fontWeight: 'bold', fontSize: '1.25rem', marginTop: '0.5rem' }}>Dynamo vs Shakhtar</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Olimpiyskiy Stadium • 19:00</p>
            
            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ fontSize: '0.875rem', color: '#fca5a5' }}>⚠️ 2 Players At Risk of Fatigue</p>
              <button className="btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '0.5rem' }}>View Tactics Board</button>
            </div>
          </div>

          <div className="glass-panel">
            <h3>Training Workload</h3>
            <div style={{ marginTop: '1rem', height: '100px', display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
              <div style={{ flex: 1, backgroundColor: '#4ade80', height: '80%' }}></div>
              <div style={{ flex: 1, backgroundColor: '#fbbf24', height: '95%' }}></div>
              <div style={{ flex: 1, backgroundColor: '#f87171', height: '100%' }}></div>
              <div style={{ flex: 1, backgroundColor: '#4ade80', height: '40%' }}></div>
              <div style={{ flex: 1, backgroundColor: '#4ade80', height: '60%' }}></div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Last 5 Days (ACWR)</p>
          </div>
        </div>

      </div>
    </div>
  );
}

const btnSmall = {
  background: 'rgba(0,0,0,0.3)',
  border: '1px solid var(--surface-border)',
  color: 'white',
  padding: '0.25rem 0.5rem',
  borderRadius: '4px',
  cursor: 'pointer'
};

const eventStyleMatch = {
  backgroundColor: 'rgba(59, 130, 246, 0.2)',
  border: '1px solid #3b82f6',
  color: '#93c5fd',
  fontSize: '0.75rem',
  padding: '2px 4px',
  borderRadius: '4px',
  marginTop: 'auto',
  textAlign: 'center' as const,
  cursor: 'pointer'
};

const eventStyleTraining = {
  backgroundColor: 'rgba(34, 197, 94, 0.2)',
  border: '1px solid #22c55e',
  color: '#86efac',
  fontSize: '0.75rem',
  padding: '2px 4px',
  borderRadius: '4px',
  marginTop: 'auto',
  textAlign: 'center' as const,
  cursor: 'pointer'
};
