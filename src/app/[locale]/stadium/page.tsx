'use client';
import { useState, useEffect } from 'react';

export default function StadiumOpsPage() {
  const [gateCongestion, setGateCongestion] = useState(45);
  
  // Simulate live data
  useEffect(() => {
    const timer = setInterval(() => {
      setGateCongestion(prev => Math.min(100, Math.max(10, prev + (Math.random() * 20 - 5))));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ background: '#020617', minHeight: '100vh', color: 'white', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Top Header */}
      <div style={{ background: '#0f172a', padding: '1rem 2rem', borderBottom: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: '#10b981', color: 'black', padding: '0.25rem 0.75rem', borderRadius: '4px', fontWeight: 'bold', animation: 'pulse 2s infinite' }}>
            MATCHDAY LIVE
          </div>
          <h1 style={{ fontSize: '1.2rem', margin: 0, letterSpacing: '1px' }}>Stadium Ops Command Center</h1>
        </div>
        <div style={{ fontSize: '1.2rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span>🌡️ 4°C (Dropping)</span>
          <span>👥 Attendance: 42,150 / 60,000</span>
        </div>
      </div>

      <style>{`@keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.7; } 100% { opacity: 1; } }`}</style>

      <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Security & Gates */}
        <div style={{ background: '#0f172a', borderRadius: '12px', border: '1px solid #334155', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            🚧 AI Gate Congestion Prediction
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 'bold' }}>North Gate (Ultras Sector)</span>
                <span style={{ color: gateCongestion > 80 ? '#ef4444' : '#f59e0b', fontWeight: 'bold' }}>{gateCongestion.toFixed(0)}% Capacity</span>
              </div>
              <div style={{ width: '100%', height: '12px', background: '#1e293b', borderRadius: '6px', overflow: 'hidden' }}>
                <div style={{ width: `${gateCongestion}%`, height: '100%', background: gateCongestion > 80 ? '#ef4444' : '#f59e0b', transition: 'width 1s ease' }}></div>
              </div>
              {gateCongestion > 80 && (
                <div style={{ marginTop: '0.5rem', color: '#ef4444', fontSize: '0.85rem', fontWeight: 'bold' }}>⚠️ ACTION REQUIRED: Deploy 4 extra stewards to North Gate.</div>
              )}
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 'bold' }}>East Gate (Families)</span>
                <span style={{ color: '#4ade80', fontWeight: 'bold' }}>22% Capacity</span>
              </div>
              <div style={{ width: '100%', height: '12px', background: '#1e293b', borderRadius: '6px', overflow: 'hidden' }}>
                <div style={{ width: '22%', height: '100%', background: '#4ade80' }}></div>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 'bold' }}>VIP Entrance</span>
                <span style={{ color: '#4ade80', fontWeight: 'bold' }}>5% Capacity</span>
              </div>
              <div style={{ width: '100%', height: '12px', background: '#1e293b', borderRadius: '6px', overflow: 'hidden' }}>
                <div style={{ width: '5%', height: '100%', background: '#4ade80' }}></div>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Concessions */}
        <div style={{ background: '#0f172a', borderRadius: '12px', border: '1px solid #334155', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            🌭 Dynamic Food & Beverage Pricing
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            AI automatically adjusts menu board prices across the stadium based on weather, match time, and inventory levels.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '8px', border: '1px solid #3b82f6' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <div style={{ fontWeight: 'bold', color: '#60a5fa' }}>Hot Tea / Coffee</div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ textDecoration: 'line-through', color: '#64748b' }}>€4.00</span>
                  <span style={{ fontWeight: 'bold', color: '#4ade80', fontSize: '1.2rem' }}>€3.20</span>
                </div>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                ⚡ AI Trigger: Temperature dropped below 5°C. Price reduced by 20% to clear inventory and maximize impulse buys.
              </div>
            </div>

            <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '8px', border: '1px solid #334155' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <div style={{ fontWeight: 'bold', color: '#e2e8f0' }}>Cold Beer</div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ fontWeight: 'bold', color: '#e2e8f0', fontSize: '1.2rem' }}>€6.50</span>
                </div>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                ⏸️ AI Status: Price locked. Sales are moving at expected velocity.
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
