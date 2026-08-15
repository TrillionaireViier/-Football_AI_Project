'use client';
import { useState } from 'react';

export default function FanAppPage() {
  const [voted, setVoted] = useState<string | null>(null);

  const players = [
    { name: 'Шапаренко', stats: '2 Передачі, 94% Пасів', rating: 9.1 },
    { name: 'Бражко', stats: '1 Гол, 7 Перехоплень', rating: 8.8 },
    { name: 'Ванат', stats: '1 Гол, 4 Удари', rating: 8.2 }
  ];

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', background: '#020617', minHeight: '100vh', padding: '1.5rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src="https://ui-avatars.com/api/?name=Oleh+Fan&background=fff&color=000" alt="Fan" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
          <h1 style={{ fontSize: '1.2rem', color: 'white', margin: 0 }}>Олег Фанат</h1>
        </div>
        <div style={{ background: 'linear-gradient(to right, #f59e0b, #d97706)', padding: '0.25rem 0.75rem', borderRadius: '12px', color: 'white', fontWeight: 'bold', fontSize: '0.9rem' }}>
          ⭐ 4,250 БАЛ
        </div>
      </div>

      <div style={{ background: 'linear-gradient(145deg, #1e293b, #0f172a)', padding: '1.5rem', borderRadius: '16px', border: '1px solid #334155', marginBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, background: '#ef4444', color: 'white', padding: '0.25rem 1rem', borderBottomLeftRadius: '8px', fontSize: '0.8rem', fontWeight: 'bold' }}>
          ЗАВТРА
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#60a5fa' }}>Динамо</div>
          <div style={{ fontSize: '1.2rem', color: '#94a3b8' }}>ПРОТИ</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f59e0b' }}>Шахтар</div>
        </div>
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontSize: '2.5rem' }}>🔥</div>
          <div>
            <div style={{ color: '#f8fafc', fontWeight: 'bold' }}>Індекс хайпу ШІ: 94%</div>
            <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>ШІ прогнозує активну атакуючу гру з 3+ очікуваними голами!</div>
          </div>
        </div>
        <button style={{ width: '100%', padding: '1rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', marginTop: '1rem', cursor: 'pointer' }}>
          🎟️ КУПИТИ КВИТКИ (+500 БАЛ)
        </button>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>Голосування: ШІ Гравець матчу (Остання гра)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {players.map((p, i) => (
            <div
              key={i}
              onClick={() => setVoted(p.name)}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                background: voted === p.name ? 'rgba(59, 130, 246, 0.2)' : '#1e293b',
                border: voted === p.name ? '1px solid #3b82f6' : '1px solid #334155',
                padding: '1rem', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s'
              }}
            >
              <div>
                <div style={{ fontWeight: 'bold', color: 'white' }}>{p.name}</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{p.stats}</div>
              </div>
              <div style={{ background: '#020617', padding: '0.5rem', borderRadius: '8px', color: '#4ade80', fontWeight: 'bold' }}>
                ШІ: {p.rating}
              </div>
            </div>
          ))}
        </div>
        {voted && (
          <div style={{ marginTop: '1rem', color: '#4ade80', textAlign: 'center', fontSize: '0.9rem' }}>
            Дякуємо за голосування! Ви отримали +50 БАЛ.
          </div>
        )}
      </div>
    </div>
  );
}
