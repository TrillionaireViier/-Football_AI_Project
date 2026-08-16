'use client';
import { useState } from 'react';

export default function UserManagementPage() {
  const [users, setUsers] = useState([
    { id: 'usr_001', name: 'Oleksandr Shovkovskiy', role: 'Head Coach', club: 'Dynamo Kyiv', status: 'Active', tier: 'Pro' },
    { id: 'usr_002', name: 'Marino Pusic', role: 'Head Coach', club: 'Shakhtar Donetsk', status: 'Active', tier: 'Pro' },
    { id: 'usr_003', name: 'John Doe', role: 'Analyst', club: 'FC Lviv', status: 'Suspended', tier: 'Basic' },
    { id: 'usr_004', name: 'Admin Root', role: 'Superadmin', club: 'System', status: 'Active', tier: 'Enterprise' }
  ]);

  return (
    <div className="container" style={{ padding: '2rem 0', fontFamily: 'monospace' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #334155', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ color: '#e2e8f0', fontSize: '2rem', letterSpacing: '-0.05em' }}>[ ROOT_ACCESS ] // USER_MGMT</h1>
          <p style={{ color: '#94a3b8' }}>Manage accounts, subscriptions, and access control.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="/en/admin" style={{ background: '#1e293b', border: '1px solid #475569', color: '#e2e8f0', padding: '0.5rem 1rem', textDecoration: 'none', borderRadius: '4px' }}>BACK_TO_DASHBOARD</a>
        </div>
      </div>

      <div style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '8px', overflow: 'hidden' }}>
        <div style={{ padding: '1rem', borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <input type="text" placeholder="Search by ID, Name, or Club..." style={{ background: '#1e293b', border: '1px solid #475569', padding: '0.5rem 1rem', color: '#e2e8f0', borderRadius: '4px', width: '300px', outline: 'none' }} />
           <button style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>+ PROVISION_NEW_USER</button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', color: '#cbd5e1' }}>
          <thead style={{ background: '#1e293b' }}>
            <tr>
              <th style={{ padding: '1rem', borderBottom: '1px solid #334155' }}>USER_ID</th>
              <th style={{ padding: '1rem', borderBottom: '1px solid #334155' }}>NAME</th>
              <th style={{ padding: '1rem', borderBottom: '1px solid #334155' }}>ROLE & CLUB</th>
              <th style={{ padding: '1rem', borderBottom: '1px solid #334155' }}>TIER</th>
              <th style={{ padding: '1rem', borderBottom: '1px solid #334155' }}>STATUS</th>
              <th style={{ padding: '1rem', borderBottom: '1px solid #334155', textAlign: 'right' }}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={{ borderBottom: '1px solid #1e293b' }}>
                <td style={{ padding: '1rem', color: '#94a3b8' }}>{user.id}</td>
                <td style={{ padding: '1rem', fontWeight: 'bold', color: '#e2e8f0' }}>{user.name}</td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ color: '#e2e8f0' }}>{user.role}</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{user.club}</div>
                </td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ 
                    padding: '0.25rem 0.5rem', 
                    borderRadius: '4px', 
                    fontSize: '0.8rem',
                    background: user.tier === 'Enterprise' ? 'rgba(168, 85, 247, 0.2)' : user.tier === 'Pro' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(148, 163, 184, 0.2)',
                    color: user.tier === 'Enterprise' ? '#c084fc' : user.tier === 'Pro' ? '#60a5fa' : '#94a3b8',
                    border: `1px solid ${user.tier === 'Enterprise' ? '#c084fc' : user.tier === 'Pro' ? '#60a5fa' : '#94a3b8'}`
                  }}>
                    {user.tier}
                  </span>
                </td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ color: user.status === 'Active' ? '#4ade80' : '#ef4444' }}>
                    {user.status === 'Active' ? '🟢' : '🔴'} {user.status}
                  </span>
                </td>
                <td style={{ padding: '1rem', textAlign: 'right' }}>
                  <button style={{ background: 'transparent', border: '1px solid #475569', color: '#e2e8f0', padding: '0.25rem 0.5rem', borderRadius: '4px', cursor: 'pointer', marginRight: '0.5rem' }}>EDIT</button>
                  <button style={{ background: 'transparent', border: '1px solid #ef4444', color: '#ef4444', padding: '0.25rem 0.5rem', borderRadius: '4px', cursor: 'pointer' }}>BAN</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
