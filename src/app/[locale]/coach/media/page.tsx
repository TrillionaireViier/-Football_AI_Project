'use client';
import { useState } from 'react';

export default function MediaSentimentPage() {
  const [activeTopic, setActiveTopic] = useState<'manager' | 'transfers' | 'match'>('manager');

  const topics = {
    manager: {
      score: 82,
      trend: '+5%',
      sentiment: 'Позитивний',
      summary: 'Вболівальники активно підтримують останній тактичний перехід на 4-2-3-1. Схвалюють довіру до вихованців академії.',
      tweets: [
        { user: '@DynamoFan99', text: 'Нарешті тренер, який розуміє, що Бражко має грати опорним. Блискуча тактична схема! 🔥', emotion: 'Позитивний' },
        { user: '@KyivUltra', text: 'Спочатку сумнівався, але пресинг працює. Команда виглядає набагато свіжіше, ніж минулого сезону.', emotion: 'Позитивний' }
      ]
    },
    transfers: {
      score: 35,
      trend: '-12%',
      sentiment: 'Негативний',
      summary: 'Велика тривога через відсутність запасного форварда. Фани обурені чутками про продаж ключових захисників.',
      tweets: [
        { user: '@FootballInsiderUA', text: 'Якщо ми продамо нашого кращого центрального захисника без заміни — керівництво нас підвело. 😡', emotion: 'Негативний' },
        { user: '@TacticsNerd', text: 'Півзахист виглядає чудово, але ми за одну травму від кризи у нападі. Витрачайте гроші!', emotion: 'Негативний' }
      ]
    },
    match: {
      score: 65,
      trend: 'Стабільний',
      sentiment: 'Нейтральний',
      summary: 'Очікування від майбутньої гри з Шахтарем змішані. Фани визнають силу суперника, але очікують боротьби.',
      tweets: [
        { user: '@UltrasVoice', text: 'Нічия з Шахтарем на виїзді прийнятна, але потрібно показати характер. Без прогулянок по полю!', emotion: 'Нейтральний' },
        { user: '@StatTracker', text: 'Традиційно нам важко на цьому стадіоні, але поточний тренд xG дає надію. 🤞', emotion: 'Нейтральний' }
      ]
    }
  };

  const getSentimentColor = (score: number) => {
    if (score >= 70) return '#4ade80';
    if (score >= 40) return '#f59e0b';
    return '#ef4444';
  };

  const currentData = topics[activeTopic];

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="title" style={{ background: 'linear-gradient(to right, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Медіа та Настрої Вболівальників 📰</h1>
          <p className="subtitle">ШІ-аналіз соціальних мереж, новин та фанатських форумів.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '2rem', marginTop: '2rem' }}>
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: 'fit-content' }}>
          <h3 style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.9rem' }}>Актуальні Теми</h3>
          {[
            { key: 'manager', label: 'Рейтинг тренера' },
            { key: 'transfers', label: 'Трансферна політика' },
            { key: 'match', label: 'Наступний матч' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTopic(key as any)}
              style={{
                padding: '1rem', borderRadius: '8px',
                background: activeTopic === key ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                border: activeTopic === key ? '1px solid #3b82f6' : '1px solid var(--surface-border)',
                color: 'white', cursor: 'pointer', textAlign: 'left'
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ position: 'relative', width: '120px', height: '120px', borderRadius: '50%', background: `conic-gradient(${getSentimentColor(currentData.score)} ${currentData.score}%, transparent 0)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--surface)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '2rem', fontWeight: 'bold', color: getSentimentColor(currentData.score) }}>{currentData.score}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>/ 100</span>
              </div>
            </div>
            <div>
              <h2 style={{ color: 'white', marginBottom: '0.5rem' }}>Настрій ШІ: {currentData.sentiment}</h2>
              <div style={{ display: 'inline-block', padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                Тренд: {currentData.trend}
              </div>
              <p style={{ color: '#cbd5e1', lineHeight: '1.5' }}>{currentData.summary}</p>
            </div>
          </div>

          <div className="glass-panel">
            <h3 style={{ color: '#f8fafc', marginBottom: '1rem' }}>🐦 Витягнуті Коментарі</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {currentData.tweets.map((tweet, i) => (
                <div key={i} style={{
                  padding: '1.5rem', borderRadius: '8px', background: 'rgba(255,255,255,0.02)',
                  borderLeft: `4px solid ${tweet.emotion === 'Позитивний' ? '#4ade80' : tweet.emotion === 'Негативний' ? '#ef4444' : '#f59e0b'}`
                }}>
                  <div style={{ fontWeight: 'bold', color: '#60a5fa', marginBottom: '0.5rem' }}>{tweet.user}</div>
                  <div style={{ color: '#e2e8f0', lineHeight: '1.4' }}>"{tweet.text}"</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
