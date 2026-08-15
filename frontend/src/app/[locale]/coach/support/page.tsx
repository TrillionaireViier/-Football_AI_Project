export default function SupportPage() {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1 className="title">Technical Support</h1>
      <p className="subtitle">Submit a ticket or view your previous requests.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div className="glass-panel">
          <h2>Create New Ticket</h2>
          <form style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
            <input type="text" placeholder="Subject" style={inputStyle} required />
            <select style={inputStyle} required>
              <option value="">Select Category...</option>
              <option value="bug">Report a Bug</option>
              <option value="billing">Billing Issue</option>
              <option value="ai">AI Analysis Issue</option>
            </select>
            <textarea placeholder="Describe your issue..." style={{...inputStyle, minHeight: '120px'}} required />
            <button type="submit" className="btn-primary">Submit Ticket</button>
          </form>
        </div>

        <div className="glass-panel">
          <h2>Your Tickets</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
            <li style={{ padding: '1rem 0', borderBottom: '1px solid var(--surface-border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 'bold' }}>Video upload failed</span>
                <span style={{ color: '#fbbf24', fontSize: '0.875rem' }}>In Progress</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem' }}>Ticket #1024 • Submitted 2 days ago</p>
            </li>
          </ul>
        </div>
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
};
