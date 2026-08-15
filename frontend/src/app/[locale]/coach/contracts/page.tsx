'use client';
import { useState } from 'react';

export default function ContractsPage() {
  const contracts = [
    { name: 'Mykola Shaparenko', wage: '€35,000 / wk', expiry: 'Jun 2026', status: 'Expiring Soon', recommendation: 'Renew immediately. Market value trending up +15%. Offer €50k/wk.', color: '#f59e0b' },
    { name: 'Andriy Yarmolenko', wage: '€45,000 / wk', expiry: 'Jun 2025', status: 'Critical', recommendation: 'Allow contract to expire. Physical metrics dropping rapidly.', color: '#ef4444' },
    { name: 'Vladyslav Vanat', wage: '€18,000 / wk', expiry: 'Jun 2028', status: 'Secure', recommendation: 'No action needed. Great value for output.', color: '#4ade80' },
    { name: 'Volodymyr Brazhko', wage: '€22,000 / wk', expiry: 'Jun 2027', status: 'Underpaid', recommendation: 'Offer improved terms to ward off interest from Serie A.', color: '#3b82f6' }
  ];

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="title" style={{ background: 'linear-gradient(to right, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Contracts & Wage Bill 💼</h1>
          <p className="subtitle">AI-driven financial management and renewal strategy.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem', marginTop: '2rem' }}>
        
        {/* Contracts Table */}
        <div className="glass-panel" style={{ overflowX: 'auto' }}>
          <h2 style={{ marginBottom: '1.5rem', color: '#f8fafc' }}>📋 Squad Contracts</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--surface-border)', color: 'var(--text-muted)' }}>
                <th style={{ padding: '1rem' }}>Player</th>
                <th style={{ padding: '1rem' }}>Weekly Wage</th>
                <th style={{ padding: '1rem' }}>Expiry Date</th>
                <th style={{ padding: '1rem' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((c, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem', fontWeight: 'bold' }}>{c.name}</td>
                  <td style={{ padding: '1rem', fontFamily: 'monospace', fontSize: '1.1rem' }}>{c.wage}</td>
                  <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{c.expiry}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '20px', 
                      fontSize: '0.85rem', 
                      fontWeight: 'bold',
                      background: `${c.color}33`,
                      color: c.color 
                    }}>
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* AI Recommendations Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ borderTop: '4px solid #f59e0b' }}>
            <h3 style={{ color: '#fbbf24', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              ⚠️ Renewal Alerts
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {contracts.filter(c => c.status !== 'Secure').map((c, i) => (
                <div key={i} style={{ paddingBottom: '1rem', borderBottom: '1px dashed rgba(255,255,255,0.1)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <strong style={{ color: 'white' }}>{c.name}</strong>
                    <span style={{ fontSize: '0.8rem', color: c.color }}>{c.status}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                    {c.recommendation}
                  </p>
                  {c.status === 'Expiring Soon' && (
                    <button className="btn-primary" style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', fontSize: '0.9rem', background: '#f59e0b', color: 'black' }}>
                      Initiate Talks
                    </button>
                  )}
                  {c.status === 'Critical' && (
                    <button className="btn-primary" style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', fontSize: '0.9rem', background: '#ef4444', color: 'white' }}>
                      Release End of Season
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-panel" style={{ background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.9))' }}>
            <h4 style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Total Weekly Wage Bill</h4>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4ade80' }}>€645,000</div>
            <div style={{ marginTop: '1rem', width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '75%', height: '100%', background: '#4ade80' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <span>Current</span>
              <span>Budget: €850,000</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
