'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function FinancePage() {
  const t = useTranslations('FinancePage');
  const [activeTab, setActiveTab] = useState<'budget' | 'ffp'>('budget');

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="title" style={{ background: 'linear-gradient(to right, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{t('title')}</h1>
          <p className="subtitle">{t('subtitle')}</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '12px' }}>
          <button onClick={() => setActiveTab('budget')} style={{ padding: '0.5rem 1rem', borderRadius: '8px', background: activeTab === 'budget' ? 'rgba(59, 130, 246, 0.2)' : 'transparent', color: activeTab === 'budget' ? '#60a5fa' : 'var(--text-muted)', border: 'none', cursor: 'pointer' }}>
            {t('clubBudget')}
          </button>
          <button onClick={() => setActiveTab('ffp')} style={{ padding: '0.5rem 1rem', borderRadius: '8px', background: activeTab === 'ffp' ? 'rgba(59, 130, 246, 0.2)' : 'transparent', color: activeTab === 'ffp' ? '#60a5fa' : 'var(--text-muted)', border: 'none', cursor: 'pointer' }}>
            {t('ffpCompliance')}
          </button>
        </div>
      </div>

      {activeTab === 'budget' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.9rem' }}>{t('transferBudgetRemaining')}</h3>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#4ade80' }}>€45.2M</div>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>{t('transferBudgetDesc')}</p>
          </div>
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.9rem' }}>{t('annualWageExpenditure')}</h3>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#f59e0b' }}>€33.5M</div>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>{t('annualWageDesc')}</p>
          </div>
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.9rem' }}>{t('projectedMatchdayRevenue')}</h3>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#60a5fa' }}>€18.1M</div>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>{t('projectedMatchdayDesc')}</p>
          </div>
        </div>
      )}

      {activeTab === 'ffp' && (
        <div className="glass-panel" style={{ marginTop: '2rem', borderTop: '4px solid #ef4444' }}>
          <h2 style={{ marginBottom: '1.5rem', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {t('riskAnalysis')}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>{t('squadCostRule')}</span>
                <span style={{ color: '#ef4444', fontWeight: 'bold' }}>72%</span>
              </div>
              <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: '72%', height: '100%', background: '#ef4444' }}></div>
              </div>
              <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', borderLeft: '4px solid #ef4444', marginTop: '1.5rem' }}>
                <h4 style={{ color: '#fca5a5', marginBottom: '0.5rem' }}>{t('aiSanctionWarning')}</h4>
                <p style={{ fontSize: '0.9rem', color: 'white', lineHeight: '1.5' }}>{t('aiSanctionDesc')}</p>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>{t('footballEarningsRule')}</span>
                <span style={{ color: '#4ade80', fontWeight: 'bold' }}>€12M / €60M</span>
              </div>
              <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: '20%', height: '100%', background: '#4ade80' }}></div>
              </div>
              <div style={{ padding: '1rem', background: 'rgba(74, 222, 128, 0.1)', borderRadius: '8px', borderLeft: '4px solid #4ade80', marginTop: '1.5rem' }}>
                <h4 style={{ color: '#86efac', marginBottom: '0.5rem' }}>{t('deficitStatus')}</h4>
                <p style={{ fontSize: '0.9rem', color: 'white', lineHeight: '1.5' }}>{t('deficitDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
