'use client';

export default function AcademyPage() {
  const prospects = [
    { name: 'Матвій Пономаренко', age: 18, position: 'ЦН', current: 65, potential: 88, trajectory: 'Швидке', advice: 'Готовий до кубкових матчів першої команди. Домінуючий фізичний розвиток.' },
    { name: 'Тарас Михавко', age: 18, position: 'ЦЗ', current: 62, potential: 85, trajectory: 'Стабільне', advice: 'Потребує покращення тактичного позиціонування. Рекомендується оренда в клуб-супутник.' },
    { name: 'Кирило Пашко', age: 17, position: 'ПВ', current: 58, potential: 89, trajectory: 'Нестабільне', advice: 'Елітна статистика дриблінгу, але високий ризик травм у іграх U-19. Контролювати навантаження.' }
  ];

  const trajectoryColor = (t: string) => t === 'Швидке' ? '#4ade80' : t === 'Стабільне' ? '#60a5fa' : '#fca5a5';

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="title" style={{ background: 'linear-gradient(to right, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Центр Молодіжної Академії 👶</h1>
          <p className="subtitle">Відстеження кривих розвитку U-19 та U-21 і прогнозування максимального потенціалу.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        <div className="glass-panel" style={{ gridColumn: '1 / -1' }}>
          <h2 style={{ marginBottom: '1.5rem', color: '#f8fafc' }}>📈 Найкращі Перспективи Академії</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--surface-border)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '1rem' }}>Гравець</th>
                  <th style={{ padding: '1rem' }}>Поз / Вік</th>
                  <th style={{ padding: '1rem' }}>Поточний OVR</th>
                  <th style={{ padding: '1rem' }}>Прогноз. пік</th>
                  <th style={{ padding: '1rem' }}>ШІ план дій</th>
                </tr>
              </thead>
              <tbody>
                {prospects.map((p, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', fontWeight: 'bold' }}>{p.name}</td>
                    <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{p.position} • {p.age} р.</td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px', display: 'inline-block' }}>{p.current}</div>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ background: 'linear-gradient(to right, #8b5cf6, #3b82f6)', padding: '0.25rem 0.5rem', borderRadius: '4px', color: 'white', fontWeight: 'bold' }}>{p.potential}</div>
                        <span style={{ fontSize: '0.8rem', color: trajectoryColor(p.trajectory) }}>({p.trajectory} розвиток)</span>
                      </div>
                    </td>
                    <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>{p.advice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass-panel" style={{ borderTop: '4px solid #a78bfa' }}>
          <h2 style={{ marginBottom: '1.5rem', color: '#a78bfa', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            🧠 Попередження ШІ про підвищення
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src={`https://ui-avatars.com/api/?name=Matviy+Ponomarenko&background=3b82f6&color=fff`} alt="Player" style={{ width: '80px', height: '80px', borderRadius: '50%', border: '3px solid #8b5cf6' }} />
              <div>
                <h3 style={{ color: 'white', fontSize: '1.2rem' }}>Матвій Пономаренко</h3>
                <div style={{ color: '#4ade80', fontWeight: 'bold' }}>Готовий до 1-ї команди</div>
              </div>
            </div>
            <div style={{ padding: '1rem', background: 'rgba(167, 139, 250, 0.1)', borderRadius: '8px', borderLeft: '4px solid #a78bfa' }}>
              <h4 style={{ color: '#c4b5fd', marginBottom: '0.5rem' }}>Аналіз тактичної відповідності</h4>
              <p style={{ fontSize: '0.9rem', color: 'white', lineHeight: '1.5' }}>
                Його профіль "опорного форварда" ідеально доповнює систему 4-2-3-1. Він перевершує метрики xG U-19 на 40%. Викличте його на наступний кубковий матч.
              </p>
            </div>
            <button className="btn-primary" style={{ background: 'linear-gradient(to right, #8b5cf6, #3b82f6)', color: 'white', marginTop: 'auto' }}>
              Підвищити до основного складу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
