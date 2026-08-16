'use client';
import { usePlayers } from '@/context/PlayerContext';
import { useTranslations } from 'next-intl';

export default function PlayerProfilePage() {
  const { players } = usePlayers();
  const t = useTranslations('PlayerProfilePage');
  
  // Using the first player as the profile for now
  const currentPlayer = players.length > 0 ? players[0] : null;

  if (!currentPlayer) {
    return <div style={{ color: 'white', padding: '2rem', textAlign: 'center' }}>{t('noPlayerFound')}</div>;
  }

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', background: '#0f172a', minHeight: '100vh', padding: '1.5rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', background: '#1e293b', padding: '1.5rem', borderRadius: '16px' }}>
        <img src={currentPlayer.photoUrl} alt="Player" style={{ width: '80px', height: '80px', borderRadius: '50%', border: '3px solid #3b82f6', objectFit: 'cover' }} />
        <div>
          <h1 style={{ fontSize: '1.8rem', color: 'white', margin: 0 }}>{currentPlayer.name}</h1>
          <div style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '0.5rem' }}>{currentPlayer.position} • Kit #{currentPlayer.number}</div>
        </div>
      </div>

      <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '16px', border: '1px solid #334155', marginBottom: '2rem' }}>
        <h2 style={{ color: '#f8fafc', fontSize: '1.2rem', marginBottom: '1rem' }}>{t('personalInformation')}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{t('age')}</div>
            <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold' }}>21</div>
          </div>
          <div>
            <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{t('height')}</div>
            <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold' }}>185 cm</div>
          </div>
          <div>
            <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{t('weight')}</div>
            <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold' }}>78 kg</div>
          </div>
          <div>
            <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{t('preferredFoot')}</div>
            <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold' }}>{t('right')}</div>
          </div>
        </div>
      </div>
      
      <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '16px', border: '1px solid #334155' }}>
        <h2 style={{ color: '#f8fafc', fontSize: '1.2rem', marginBottom: '1rem' }}>{t('seasonStatistics')}</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '0.75rem', marginBottom: '0.75rem' }}>
          <span style={{ color: '#94a3b8' }}>{t('matchesPlayed')}</span>
          <span style={{ color: 'white', fontWeight: 'bold' }}>24</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '0.75rem', marginBottom: '0.75rem' }}>
          <span style={{ color: '#94a3b8' }}>{t('goals')}</span>
          <span style={{ color: 'white', fontWeight: 'bold' }}>8</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '0.75rem', marginBottom: '0.75rem' }}>
          <span style={{ color: '#94a3b8' }}>{t('assists')}</span>
          <span style={{ color: 'white', fontWeight: 'bold' }}>12</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#94a3b8' }}>{t('manOfTheMatch')}</span>
          <span style={{ color: 'white', fontWeight: 'bold' }}>3</span>
        </div>
      </div>

    </div>
  );
}
