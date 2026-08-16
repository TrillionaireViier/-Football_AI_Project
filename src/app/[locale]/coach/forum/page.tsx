export default function ForumPage() {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1 className="title">Coaches Forum</h1>
      <p className="subtitle">Discuss tactics, training plans, and platform features with other professionals.</p>

      <div className="glass-panel" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Recent Discussions</h2>
          <button className="btn-primary">New Topic</button>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <div style={forumRowStyle}>
            <div>
              <h3 style={{ color: 'var(--primary)' }}>Best pressing triggers against a 4-3-3?</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Started by Coach Alex • Tactical Discussions</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ display: 'block', fontWeight: 'bold' }}>14</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Replies</span>
            </div>
          </div>

          <div style={forumRowStyle}>
            <div>
              <h3 style={{ color: 'var(--primary)' }}>How to interpret the YOLO pass accuracy metric?</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Started by Manager Dan • AI Video Analysis</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ display: 'block', fontWeight: 'bold' }}>5</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Replies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const forumRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  borderBottom: '1px solid var(--surface-border)',
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  borderRadius: '8px',
  marginBottom: '0.5rem'
};
