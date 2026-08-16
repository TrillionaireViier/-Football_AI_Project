'use client';
import { useState } from 'react';

export default function ScoutingPage() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setIsSearching(true);
    setResults([]);

    setTimeout(() => {
      setResults([
        { name: 'Endrick Felipe', age: 17, region: 'Південна Америка', position: 'ЦН', potential: 95, match: 98, price: '€45M', traits: ['Вибухова швидкість', 'Завершення'] },
        { name: 'Estevão Willian', age: 16, region: 'Південна Америка', position: 'ПВ', potential: 92, match: 88, price: '€30M', traits: ['Дриблінг', 'Бачення поля'] },
        { name: 'Claudio Echeverri', age: 18, region: 'Південна Америка', position: 'АПЗ', potential: 90, match: 85, price: '€20M', traits: ['Плеймейкер', 'Спритність'] }
      ]);
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1 className="title" style={{ background: 'linear-gradient(to right, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Глобальна Скаутингова Мережа 🌍</h1>
      <p className="subtitle">ШІ-пошук по світовій базі гравців та картування регіональних талантів.</p>

      <div className="glass-panel" style={{ marginTop: '2rem' }}>
        <form onSubmit={handleSearch} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="ШІ Запит: напр. 'Знайди лівоногого вінгера до 19 років з високою швидкістю'"
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{ flex: '1', minWidth: '300px', padding: '1rem', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(0,0,0,0.2)', color: 'white', fontSize: '1rem', outline: 'none' }}
          />
          <button type="submit" className="btn-primary" disabled={isSearching || !query.trim()} style={{ background: 'linear-gradient(to right, #3b82f6, #2563eb)' }}>
            {isSearching ? 'Пошук в базі...' : '🔍 Шукати ШІ'}
          </button>
        </form>
      </div>

      {isSearching && (
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <div style={{ display: 'inline-block', width: '40px', height: '40px', border: '3px solid rgba(59, 130, 246, 0.3)', borderTop: '3px solid #3b82f6', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
          <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Запит по понад 50,000 активних молодих гравців по всьому світу...</p>
        </div>
      )}

      {results.length > 0 && (
        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {results.map((player, idx) => (
            <div key={idx} className="glass-panel" style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, padding: '0.5rem 1rem', background: 'rgba(74, 222, 128, 0.2)', color: '#4ade80', fontWeight: 'bold', borderBottomLeftRadius: '8px' }}>
                {player.match}% Збіг
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <img src={`https://ui-avatars.com/api/?name=${player.name}&background=1e293b&color=fff`} alt={player.name} style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid #3b82f6' }} />
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'white' }}>{player.name}</h3>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{player.age} р. • {player.region}</div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Позиція</div>
                  <div style={{ fontWeight: 'bold', color: '#60a5fa' }}>{player.position}</div>
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Потенціал</div>
                  <div style={{ fontWeight: 'bold', color: '#a78bfa' }}>{player.potential} / 100</div>
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Оцін. вартість</div>
                  <div style={{ fontWeight: 'bold', color: '#4ade80' }}>{player.price}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {player.traits.map((trait: string, i: number) => (
                  <span key={i} style={{ background: 'rgba(255,255,255,0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', color: '#e2e8f0' }}>{trait}</span>
                ))}
              </div>
              <button className="btn-primary" style={{ width: '100%', marginTop: '1.5rem', padding: '0.75rem', background: 'var(--surface-border)', color: 'white' }}>
                Відправити Скаута
              </button>
            </div>
          ))}
        </div>
      )}

      {!isSearching && results.length === 0 && (
        <div className="glass-panel" style={{ marginTop: '2rem', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', opacity: 0.5 }}>🗺️</div>
            <h3 style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Глобальна карта в очікуванні</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Введіть ШІ запит, щоб знайти відповідних гравців по всьому світу.</p>
          </div>
        </div>
      )}
    </div>
  );
}
