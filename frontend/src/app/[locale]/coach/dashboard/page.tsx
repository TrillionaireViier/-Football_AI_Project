import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="title" style={{ background: 'linear-gradient(to right, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '0.5rem' }}>Coach Dashboard</h1>
          <p className="subtitle">Welcome back. Here is your club overview for today.</p>
        </div>
        <button className="btn-primary">Start Training Session</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
        <MetricBox title="Squad Size" value="24" icon="👥" />
        <MetricBox title="Avg Rating" value="7.8" icon="⭐" />
        <MetricBox title="Next Match" value="3 Days" icon="⚽" />
        <MetricBox title="Medical Alerts" value="2" icon="⚠️" alert />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginTop: '2rem' }}>
        <div className="glass-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>Recent Video Uploads</h2>
            <Link href="/en/coach/video" style={{ color: 'var(--primary)', textDecoration: 'none' }}>View All →</Link>
          </div>
          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <VideoRow title="Dynamo vs Shakhtar (1st Half)" date="Today" status="Processed (AI)" />
            <VideoRow title="Tactical Drills (Defense)" date="Yesterday" status="Pending Analysis" />
          </div>
        </div>

        <div className="glass-panel">
          <h2>Top Performers (Last Match)</h2>
          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <PlayerRow name="Illia Zabarnyi" rating="8.5" trend="up" />
            <PlayerRow name="Andriy Yarmolenko" rating="8.2" trend="stable" />
            <PlayerRow name="Mykhailo Mudryk" rating="7.9" trend="down" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricBox({ title, value, icon, alert }: { title: string, value: string, icon: string, alert?: boolean }) {
  return (
    <div className="glass-panel" style={{ border: alert ? '1px solid #f87171' : '1px solid var(--surface-border)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '1.5rem' }}>{icon}</span>
        {alert && <span style={{ color: '#f87171', fontSize: '0.75rem', fontWeight: 'bold' }}>ACTION REQ</span>}
      </div>
      <p style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem', color: alert ? '#f87171' : 'white' }}>{value}</p>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{title}</p>
    </div>
  );
}

function VideoRow({ title, date, status }: { title: string, date: string, status: string }) {
  return (
    <div style={{ padding: '1rem', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <p style={{ fontWeight: 'bold' }}>{title}</p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{date}</p>
      </div>
      <span style={{ fontSize: '0.75rem', padding: '4px 8px', borderRadius: '12px', backgroundColor: status.includes('AI') ? 'rgba(74, 222, 128, 0.2)' : 'rgba(251, 191, 36, 0.2)', color: status.includes('AI') ? '#4ade80' : '#fbbf24' }}>
        {status}
      </span>
    </div>
  );
}

function PlayerRow({ name, rating, trend }: { name: string, rating: string, trend: 'up' | 'down' | 'stable' }) {
  const trendIcon = trend === 'up' ? '↗️' : trend === 'down' ? '↘️' : '➡️';
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontWeight: 'bold' }}>{name}</span>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>{rating}</span>
        <span style={{ fontSize: '0.875rem' }}>{trendIcon}</span>
      </div>
    </div>
  );
}
