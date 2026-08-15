'use client';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import RadarChart, { RadarDataset } from '@/components/RadarChart';

export default function ComparePage() {
  const t = useTranslations('ComparePage');
  const locale = useLocale();
  const [playerA, setPlayerA] = useState('Mykola Shaparenko');
  const [playerB, setPlayerB] = useState('Volodymyr Brazhko');

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: t('title'),
          text: `Check out this comparison between ${playerA} and ${playerB}!`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert(locale === 'uk' ? 'Посилання скопійовано в буфер обміну!' : 'Link copied to clipboard!');
      }
    } catch (err) {
      console.log('Share failed:', err);
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert(locale === 'uk' ? 'Посилання скопійовано в буфер обміну!' : 'Link copied to clipboard!');
      } catch (clipboardErr) {
        alert(locale === 'uk' ? 'Не вдалося поділитися посиланням.' : 'Failed to share or copy link.');
      }
    }
  };

  // Smart mock data for demonstration
  const statsLabels = ['Pace', 'Shooting', 'Passing', 'Dribbling', 'Defending', 'Physicality'];
  
  const playerData: Record<string, number[]> = {
    'Mykola Shaparenko': [78, 75, 88, 85, 60, 70],
    'Volodymyr Brazhko': [72, 80, 82, 75, 85, 88],
    'Andriy Yarmolenko': [75, 85, 80, 82, 45, 75],
    'Mykhailo Mudryk': [95, 76, 75, 88, 40, 65]
  };

  const datasets: RadarDataset[] = [
    {
      label: playerA,
      data: playerData[playerA] || [70, 70, 70, 70, 70, 70],
      backgroundColor: 'rgba(59, 130, 246, 0.4)', // Blue
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 2,
    },
    {
      label: playerB,
      data: playerData[playerB] || [70, 70, 70, 70, 70, 70],
      backgroundColor: 'rgba(239, 68, 68, 0.4)', // Red
      borderColor: 'rgba(239, 68, 68, 1)',
      borderWidth: 2,
    }
  ];

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="title" style={{ background: 'linear-gradient(to right, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{t('title')}</h1>
          <p className="subtitle">{t('subtitle')}</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ borderTop: '4px solid #3b82f6' }}>
          <h3 style={{ marginBottom: '1rem', color: '#60a5fa' }}>{t('playerA')}</h3>
          <select 
            value={playerA} 
            onChange={e => setPlayerA(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(0,0,0,0.2)', color: 'white', outline: 'none' }}
          >
            {Object.keys(playerData).map(name => <option key={name} value={name}>{name}</option>)}
          </select>
        </div>

        <div className="glass-panel" style={{ borderTop: '4px solid #ef4444' }}>
          <h3 style={{ marginBottom: '1rem', color: '#fca5a5' }}>{t('playerB')}</h3>
          <select 
            value={playerB} 
            onChange={e => setPlayerB(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(0,0,0,0.2)', color: 'white', outline: 'none' }}
          >
            {Object.keys(playerData).map(name => <option key={name} value={name}>{name}</option>)}
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <div style={{ width: '100%', maxWidth: '400px' }}>
             <RadarChart labels={statsLabels} datasets={datasets} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass-panel" style={{ background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.9))' }}>
            <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#a78bfa' }}>
              {t('aiVerdict')}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ color: '#e2e8f0', lineHeight: '1.6' }}>
                <strong style={{ color: '#60a5fa' }}>{playerA}</strong> {locale === 'uk' 
                  ? 'пропонує чудову розбудову гри та технічне просування. Він найкраще підходить для системи, заснованої на володінні м\'ячем, де він може диктувати темп в останній третині.'
                  : 'offers superior playmaking and technical progression. He is best suited for a possession-based system where he can dictate the tempo in the final third.'}
              </p>
              <p style={{ color: '#e2e8f0', lineHeight: '1.6' }}>
                <strong style={{ color: '#fca5a5' }}>{playerB}</strong> {locale === 'uk'
                  ? 'відмінно діє у відборі м\'яча та фізичних єдиноборствах. Він забезпечує чудову опору в захисті, дозволяючи більш креативним гравцям йти вперед без ризику для лінії оборони.'
                  : 'excels in ball recovery and physical duels. He provides an excellent defensive anchor, allowing more creative players to push forward without exposing the backline.'}
              </p>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: 'auto' }}>
            <button className="btn-primary" style={{ padding: '1rem', background: '#3b82f6' }}>{t('saveComparison')}</button>
            <button onClick={handleShare} className="btn-primary" style={{ padding: '1rem', background: 'var(--surface-border)', color: 'white' }}>{t('shareToStaff')}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
