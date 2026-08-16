'use client';
import { useState } from 'react';
import { usePlayers } from '@/context/PlayerContext';
import { useTranslations } from 'next-intl';

export default function PlayerPortalPage() {
  const { players } = usePlayers();
  const t = useTranslations('PlayerPage');
  const [soreness, setSoreness] = useState(5);
  const [submitted, setSubmitted] = useState(false);
  const [selectedPlayerId, setSelectedPlayerId] = useState(players.length > 0 ? players[0].id : '');

  const activeId = selectedPlayerId || (players.length > 0 ? players[0].id : '');
  const currentPlayer = players.find(p => p.id === activeId);

  const handleSubmitWellness = () => {
    setSubmitted(true);
  };

  if (!currentPlayer) {
    return <div style={{ color: 'white', padding: '2rem', textAlign: 'center' }}>{t('noPlayers')}</div>;
  }

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', background: '#0f172a', minHeight: '100vh', padding: '1.5rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Mock Login Switcher */}
      <div style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{t('simulateLogin')}</p>
        <select 
          value={activeId} 
          onChange={(e) => {
            setSelectedPlayerId(e.target.value);
            setSubmitted(false);
          }}
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', background: '#1e293b', color: 'white', border: '1px solid #334155' }}
        >
          {players.map(p => (
            <option key={p.id} value={p.id}>{p.name} ({p.position})</option>
          ))}
        </select>
      </div>

      {/* Header Profile */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <img src={currentPlayer.photoUrl} alt="Player" style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid #3b82f6', objectFit: 'cover' }} />
        <div>
          <h1 style={{ fontSize: '1.5rem', color: 'white', margin: 0 }}>{currentPlayer.name}</h1>
          <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{currentPlayer.position} • Kit #{currentPlayer.number}</div>
        </div>
      </div>

      {/* Wellness Form */}
      {!submitted ? (
        <div style={{ background: 'linear-gradient(145deg, #1e293b, #0f172a)', padding: '1.5rem', borderRadius: '16px', border: '1px solid #334155', marginBottom: '2rem' }}>
          <h2 style={{ color: '#f8fafc', fontSize: '1.1rem', marginBottom: '1rem' }}>{t('wellnessTitle')}</h2>
          <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '1rem' }}>{t('wellnessQuestion')}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: '#94a3b8', fontSize: '0.8rem' }}>
            <span>{t('noPain')}</span>
            <span>{t('severe')}</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="10" 
            value={soreness} 
            onChange={(e) => setSoreness(parseInt(e.target.value))}
            style={{ width: '100%', marginBottom: '1.5rem' }} 
          />
          <button 
            onClick={handleSubmitWellness}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: '#3b82f6', color: 'white', border: 'none', fontWeight: 'bold' }}
          >
            {t('submitData')}
          </button>
        </div>
      ) : (
        <div style={{ background: 'rgba(74, 222, 128, 0.1)', padding: '1.5rem', borderRadius: '16px', border: '1px solid #4ade80', marginBottom: '2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
          <h2 style={{ color: '#4ade80', fontSize: '1.1rem', margin: 0 }}>{t('wellnessLogged')}</h2>
          <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginTop: '0.5rem' }}>{t('medicalReceived')}</p>
        </div>
      )}

      {/* Daily Routine */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>{t('todaySchedule')}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ display: 'flex', gap: '1rem', background: '#1e293b', padding: '1rem', borderRadius: '12px' }}>
            <div style={{ fontWeight: 'bold', color: '#3b82f6' }}>10:00</div>
            <div style={{ color: '#e2e8f0' }}>{t('tacticalBriefing')}</div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', background: 'rgba(59, 130, 246, 0.2)', border: '1px solid #3b82f6', padding: '1rem', borderRadius: '12px' }}>
            <div style={{ fontWeight: 'bold', color: '#60a5fa' }}>11:30</div>
            <div style={{ color: 'white' }}>{t('highIntensity')}</div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', background: '#1e293b', padding: '1rem', borderRadius: '12px' }}>
            <div style={{ fontWeight: 'bold', color: '#3b82f6' }}>14:00</div>
            <div style={{ color: '#e2e8f0' }}>{t('cryotherapy')}</div>
          </div>
        </div>
      </div>

      {/* Personal AI Video Clips */}
      <div>
        <h2 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {t('aiBriefing')}
        </h2>
        <div style={{ background: '#1e293b', borderRadius: '16px', overflow: 'hidden' }}>
          <div style={{ width: '100%', height: '180px', background: '#000', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>▶️</div>
            <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(239, 68, 68, 0.8)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', color: 'white', fontWeight: 'bold' }}>
              {t('opponentAnalysis')}
            </div>
          </div>
          <div style={{ padding: '1rem' }}>
            <h3 style={{ color: 'white', fontSize: '1rem', marginBottom: '0.5rem' }}>{t('halfSpaces')}</h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: '1.4' }}>
              {currentPlayer.name.split(' ')[0]}{t('halfSpacesDesc')}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
