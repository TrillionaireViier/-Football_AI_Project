import RadarChart from '@/components/RadarChart';

export default function TeamVisualizationPage() {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1 className="title">Team Visualization</h1>
      <p className="subtitle">Aggregate analytics and squad comparison.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div className="glass-panel">
          <h2>Team Attack vs Defense (Avg)</h2>
          <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
            <RadarChart 
              title="Team Averages"
              labels={['Pace', 'Shooting', 'Passing', 'Dribbling', 'Defending', 'Physical']}
              data={[75, 68, 82, 70, 78, 85]}
            />
          </div>
        </div>
        
        <div className="glass-panel">
          <h2>Squad Overview</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Total Players: 24</p>
          <p style={{ color: 'var(--text-muted)' }}>Average Age: 23.5</p>
          <p style={{ color: 'var(--text-muted)' }}>Avg Top Speed: 31.2 km/h</p>
        </div>
      </div>
    </div>
  );
}
