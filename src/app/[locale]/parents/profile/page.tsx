'use client';
import { useTranslations } from 'next-intl';

export default function ParentsProfilePage() {
  const t = useTranslations('ParentsProfilePage');

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', background: '#f8fafc', minHeight: '100vh', padding: '1.5rem', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#0f172a' }}>
      
      <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '1.5rem', textAlign: 'center' }}>
        <img src="https://ui-avatars.com/api/?name=Ivan+Petrov&background=2563eb&color=fff" alt="Child" style={{ width: '100px', height: '100px', borderRadius: '50%', border: '4px solid #2563eb', marginBottom: '1rem' }} />
        <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>Іван Петров</h1>
        <p style={{ color: '#64748b', margin: 0, fontSize: '1.1rem' }}>{t('midfielder')} • {t('yearsOld')}</p>
      </div>

      <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.1rem', margin: '0 0 1rem 0' }}>{t('playerData')}</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
          <div>
            <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '0.2rem' }}>{t('height')}</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>158 см</div>
          </div>
          <div>
            <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '0.2rem' }}>{t('weight')}</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>45 кг</div>
          </div>
          <div>
            <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '0.2rem' }}>{t('birthDate')}</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>15 Травня 2011</div>
          </div>
          <div>
            <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '0.2rem' }}>{t('team')}</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>U-14 Academy</div>
          </div>
          <div>
            <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '0.2rem' }}>{t('preferredFoot')}</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>{t('right')}</div>
          </div>
          <div>
            <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '0.2rem' }}>{t('kitNumber')}</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>#10</div>
          </div>
        </div>
      </div>
      
      <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <h3 style={{ fontSize: '1.1rem', margin: '0 0 1rem 0' }}>{t('parentsContact')}</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '0.2rem' }}>{t('mother')}</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>Олена Петрова</div>
            <div style={{ color: '#2563eb', fontSize: '0.9rem' }}>+380 50 123 4567</div>
          </div>
          <div style={{ height: '1px', background: '#e2e8f0', width: '100%' }}></div>
          <div>
            <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '0.2rem' }}>{t('father')}</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>Олександр Петров</div>
            <div style={{ color: '#2563eb', fontSize: '0.9rem' }}>+380 67 987 6543</div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
