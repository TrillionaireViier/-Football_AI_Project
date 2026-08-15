'use client';
import { useState } from 'react';

export default function AdminDashboardPage() {
  return (
    <div className="container" style={{ padding: '2rem 0', fontFamily: 'monospace' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #334155', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ color: '#e2e8f0', fontSize: '2rem', letterSpacing: '-0.05em' }}>[ ROOT_ACCESS ] // SAAS_CONTROL</h1>
          <p style={{ color: '#94a3b8' }}>Global platform metrics and revenue tracking.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="/en/admin/users" style={{ background: '#1e293b', border: '1px solid #475569', color: '#e2e8f0', padding: '0.5rem 1rem', textDecoration: 'none', borderRadius: '4px' }}>USER_MGMT</a>
          <a href="/en/admin/health" style={{ background: '#1e293b', border: '1px solid #475569', color: '#e2e8f0', padding: '0.5rem 1rem', textDecoration: 'none', borderRadius: '4px' }}>SYS_HEALTH</a>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* MRR Card */}
        <div style={{ background: '#0f172a', border: '1px solid #334155', padding: '1.5rem', borderRadius: '8px', boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)' }}>
          <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem' }}>MONTHLY_RECURRING_REVENUE (MRR)</div>
          <div style={{ fontSize: '3rem', color: '#4ade80', fontWeight: 'bold' }}>$42,500</div>
          <div style={{ color: '#4ade80', fontSize: '0.9rem', marginTop: '0.5rem' }}>▲ +12.4% vs last month</div>
        </div>

        {/* Active Clubs Card */}
        <div style={{ background: '#0f172a', border: '1px solid #334155', padding: '1.5rem', borderRadius: '8px', boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)' }}>
          <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem' }}>ACTIVE_CLUB_SUBSCRIPTIONS</div>
          <div style={{ fontSize: '3rem', color: '#38bdf8', fontWeight: 'bold' }}>142</div>
          <div style={{ color: '#38bdf8', fontSize: '0.9rem', marginTop: '0.5rem' }}>▲ +5 new signups this week</div>
        </div>

        {/* Churn Rate Card */}
        <div style={{ background: '#0f172a', border: '1px solid #334155', padding: '1.5rem', borderRadius: '8px', boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)' }}>
          <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem' }}>USER_CHURN_RATE</div>
          <div style={{ fontSize: '3rem', color: '#fbbf24', fontWeight: 'bold' }}>2.1%</div>
          <div style={{ color: '#fbbf24', fontSize: '0.9rem', marginTop: '0.5rem' }}>Target: &lt; 2.5% (Healthy)</div>
        </div>

      </div>

      <div style={{ marginTop: '2rem', background: '#0f172a', border: '1px solid #334155', padding: '1.5rem', borderRadius: '8px' }}>
         <h2 style={{ color: '#e2e8f0', fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '1px solid #334155', paddingBottom: '0.5rem' }}>REVENUE_HISTORY (YTD)</h2>
         <div style={{ height: '200px', width: '100%', position: 'relative', borderLeft: '1px solid #334155', borderBottom: '1px solid #334155' }}>
            {/* Mock Chart using CSS */}
            <div style={{ position: 'absolute', bottom: '0', left: '10%', width: '40px', height: '40%', background: 'rgba(74, 222, 128, 0.4)', border: '1px solid #4ade80' }}></div>
            <div style={{ position: 'absolute', bottom: '0', left: '30%', width: '40px', height: '55%', background: 'rgba(74, 222, 128, 0.4)', border: '1px solid #4ade80' }}></div>
            <div style={{ position: 'absolute', bottom: '0', left: '50%', width: '40px', height: '50%', background: 'rgba(74, 222, 128, 0.4)', border: '1px solid #4ade80' }}></div>
            <div style={{ position: 'absolute', bottom: '0', left: '70%', width: '40px', height: '75%', background: 'rgba(74, 222, 128, 0.4)', border: '1px solid #4ade80' }}></div>
            <div style={{ position: 'absolute', bottom: '0', left: '90%', width: '40px', height: '90%', background: 'rgba(74, 222, 128, 0.4)', border: '1px solid #4ade80' }}></div>
         </div>
      </div>
    </div>
  );
}
