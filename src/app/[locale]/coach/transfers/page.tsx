'use client';
import { useTranslations } from 'next-intl';

export default function TransfersPage() {
  const t = useTranslations('TransfersPage');

  const squadValues = [
    { name: t('shaparenko'), value: '€18,000,000', trend: '+15%', potential: t('potentialElite'), potentialKey: 'Elite' },
    { name: t('brazhko'), value: '€7,000,000', trend: '+25%', potential: t('potentialElite'), potentialKey: 'Elite' },
    { name: t('yarmolenko'), value: '€2,000,000', trend: '-10%', potential: t('potentialDeclining'), potentialKey: 'Declining' },
  ];

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="title" style={{ background: 'linear-gradient(to right, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{t('title')}</h1>
          <p className="subtitle">{t('subtitle')}</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ gridColumn: '1 / -1' }}>
          <h2 style={{ marginBottom: '1.5rem', color: '#f8fafc' }}>{t('squadValueTitle')}</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--surface-border)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '1rem' }}>{t('colPlayer')}</th>
                  <th style={{ padding: '1rem' }}>{t('colEstValue')}</th>
                  <th style={{ padding: '1rem' }}>{t('colTrend')}</th>
                  <th style={{ padding: '1rem' }}>{t('colPotential')}</th>
                </tr>
              </thead>
              <tbody>
                {squadValues.map((p, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', fontWeight: '500' }}>{p.name}</td>
                    <td style={{ padding: '1rem' }}>{p.value}</td>
                    <td style={{ padding: '1rem', color: p.trend.startsWith('+') ? '#4ade80' : '#ef4444' }}>{p.trend}</td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.875rem',
                        background: p.potentialKey === 'Elite' ? 'rgba(167, 139, 250, 0.2)' : p.potentialKey === 'High' ? 'rgba(74, 222, 128, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                        color: p.potentialKey === 'Elite' ? '#a78bfa' : p.potentialKey === 'High' ? '#4ade80' : '#fca5a5'
                      }}>
                        {p.potential}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass-panel" style={{ borderTop: '4px solid #ef4444' }}>
          <h2 style={{ marginBottom: '1.5rem', color: '#fca5a5', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {t('sellTitle')}
          </h2>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
            <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>{t('yarmolenko')}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              <strong>{t('aiReasonLabel')}</strong> {t('sellReason')}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(239, 68, 68, 0.2)' }}>
              <span style={{ color: '#fca5a5', fontWeight: 'bold' }}>{t('estPrice', { value: '€2.0M' })}</span>
              <button className="btn-primary" style={{ padding: '0.5rem 1rem', background: '#ef4444', fontSize: '0.875rem' }}>{t('listForSale')}</button>
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ borderTop: '4px solid #4ade80' }}>
          <h2 style={{ marginBottom: '1.5rem', color: '#4ade80', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {t('buyTitle')}
          </h2>
          <div style={{ background: 'rgba(74, 222, 128, 0.1)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(74, 222, 128, 0.3)' }}>
            <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>{t('tsygankov')}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              <strong>{t('aiReasonLabel')}</strong> {t('buyReason')}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(74, 222, 128, 0.2)' }}>
              <span style={{ color: '#4ade80', fontWeight: 'bold' }}>{t('estPrice', { value: '€25.0M' })}</span>
              <button className="btn-primary" style={{ padding: '0.5rem 1rem', background: '#22c55e', fontSize: '0.875rem' }}>{t('detailedScouting')}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
