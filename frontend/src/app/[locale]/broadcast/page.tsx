'use client';
import { useState, useEffect } from 'react';

export default function BroadcastPage() {
  const [matchTime, setMatchTime] = useState(14);
  const [overlayActive, setOverlayActive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setMatchTime(prev => prev + 1);
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ background: '#020617', minHeight: '100vh', color: 'white', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ background: '#0f172a', padding: '1rem', borderBottom: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: '#eab308', color: 'black', padding: '0.25rem 0.75rem', borderRadius: '4px', fontWeight: 'bold' }}>PRESS BOX PRO</div>
          <h1 style={{ fontSize: '1.2rem', margin: 0 }}>Центр Живого Коментатора</h1>
        </div>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '10px', height: '10px', background: '#ef4444', borderRadius: '50%', display: 'inline-block', animation: 'pulse 1s infinite' }}></span>
          В ЕФІРІ
        </div>
      </div>

      <style>{`@keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }`}</style>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '1rem', padding: '1rem', height: 'calc(100vh - 80px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ flex: 1, background: overlayActive ? '#00ff00' : '#1e293b', borderRadius: '12px', border: '1px solid #334155', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {!overlayActive ? (
              <div style={{ color: '#64748b', fontSize: '1.5rem' }}>ТВ ТРАНСЛЯЦІЯ (ОЧІКУВАННЯ)</div>
            ) : (
              <div style={{ position: 'absolute', bottom: '10%', right: '5%', background: 'rgba(0,0,0,0.8)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', width: '300px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
                <div style={{ borderBottom: '1px solid #334155', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.9rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>ШІ Трекер Спринтів</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>М. Шапаренко</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: '900', color: '#4ade80' }}>34.2</span>
                  <span style={{ fontSize: '1rem', color: '#94a3b8', paddingBottom: '0.5rem' }}>км/год</span>
                </div>
                <div style={{ width: '100%', height: '4px', background: '#334155', borderRadius: '2px' }}>
                  <div style={{ width: '85%', height: '100%', background: '#4ade80', borderRadius: '2px' }}></div>
                </div>
              </div>
            )}
          </div>

          <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '12px', border: '1px solid #334155', display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => setOverlayActive(!overlayActive)}
              style={{ background: overlayActive ? '#ef4444' : '#3b82f6', color: 'white', border: 'none', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', flex: 1 }}
            >
              {overlayActive ? 'ВИМКНУТИ AR ОВЕРЛЕЙ' : 'ДОДАТИ AR СТАТИСТИКУ ДО ЕФІРУ'}
            </button>
          </div>
        </div>

        <div style={{ background: '#0f172a', borderRadius: '12px', border: '1px solid #334155', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '1rem', borderBottom: '1px solid #334155', background: '#1e293b', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
            <h2 style={{ fontSize: '1.2rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              🤖 Тези ШІ для Коментатора
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '0.5rem 0 0 0' }}>Автоматично згенерована статистика для живого коментаря.</p>
          </div>

          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', overflowY: 'auto' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6', padding: '1rem', borderRadius: '4px' }}>
              <div style={{ fontWeight: 'bold', color: '#60a5fa', marginBottom: '0.5rem' }}>Історичний контекст</div>
              <div style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: '1.5' }}>
                "Динамо не пропускало гол з кутового удару в останніх 14 матчах. Вони використовують зонне маркування."
              </div>
            </div>

            <div style={{ background: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid #f59e0b', padding: '1rem', borderRadius: '4px' }}>
              <div style={{ fontWeight: 'bold', color: '#fcd34d', marginBottom: '0.5rem' }}>Поточний матч ({matchTime}')</div>
              <div style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: '1.5' }}>
                "Лівий вінгер Шахтаря знаходить занадто багато простору. Він вже здійснив 4 обведення за 14 хвилин."
              </div>
            </div>

            <div style={{ background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981', padding: '1rem', borderRadius: '4px' }}>
              <div style={{ fontWeight: 'bold', color: '#6ee7b7', marginBottom: '0.5rem' }}>Досягнення гравця</div>
              <div style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: '1.5' }}>
                "Якщо Бражко забʼє сьогодні, він стане наймолодшим опорним хавом в історії клубу, який забив у 3 матчах поспіль."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
