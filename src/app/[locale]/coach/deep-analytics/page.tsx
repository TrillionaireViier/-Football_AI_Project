export default function DeepAnalyticsPage() {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1 className="title">Enterprise AI & Deep Analytics</h1>
      <p className="subtitle">Pro-level tactical breakdowns, space control, and 3D reconstructions.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
        
        {/* Space Control Map */}
        <div className="glass-panel">
          <h2>Space Control (Voronoi)</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>AI evaluation of team compactness and zone dominance without the ball.</p>
          <div style={{ height: '250px', backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '8px', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ color: '#60a5fa' }}>[ Interactive 2D Pitch Diagram ]</p>
          </div>
        </div>

        {/* AI Opponent Analysis */}
        <div className="glass-panel">
          <h2>AI Opponent Breakdown</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Predictive models for upcoming matches based on historical tactics.</p>
          <ul style={{ marginTop: '1.5rem', listStyle: 'none' }}>
            <li style={{ padding: '1rem', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '8px', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: 'bold', color: '#f87171' }}>Vulnerability:</span> Left flank defense during transitions (74% attack success rate).
            </li>
            <li style={{ padding: '1rem', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
              <span style={{ fontWeight: 'bold', color: '#4ade80' }}>Strength:</span> High pressing intensity in middle third (82% turnover rate).
            </li>
          </ul>
        </div>

      </div>

      <div className="glass-panel" style={{ marginTop: '2rem' }}>
        <h2>Pro Video AR Engine</h2>
        <p style={{ color: 'var(--text-muted)' }}>Upload footage for 2D-to-3D tactical reconstruction and automatic highlight generation with AI voice commentary.</p>
        <button className="btn-primary" style={{ marginTop: '1rem' }}>Launch 3D Reconstructor</button>
      </div>

    </div>
  );
}
