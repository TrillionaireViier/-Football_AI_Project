'use client';

export default function ParentsPortalPage() {
  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', background: '#f8fafc', minHeight: '100vh', padding: '1.5rem', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#0f172a' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.2rem', color: '#0f172a', margin: 0, fontWeight: '800' }}>Академія U-14</h1>
          <div style={{ color: '#64748b', fontSize: '0.9rem' }}>Портал для Батьків</div>
        </div>
        <img src="https://ui-avatars.com/api/?name=Ivan+Petrov&background=2563eb&color=fff" alt="Child" style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid #2563eb' }} />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>Іван Петров</h2>
        <p style={{ color: '#64748b', margin: 0 }}>Півзахисник • 13 років</p>
      </div>

      <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1rem', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          📈 Трекер Фізичного Розвитку
        </h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div>
            <div style={{ color: '#64748b', fontSize: '0.8rem' }}>Поточний зріст</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0f172a' }}>158 см</div>
          </div>
          <div>
            <div style={{ color: '#64748b', fontSize: '0.8rem' }}>Прогнозований зріст дорослого</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2563eb' }}>182 см</div>
          </div>
        </div>
        <div style={{ width: '100%', height: '100px', background: '#f1f5f9', borderRadius: '8px', position: 'relative', overflow: 'hidden' }}>
          <svg style={{ width: '100%', height: '100%' }}>
            <path d="M 0 100 Q 150 80 300 20 L 400 10" fill="transparent" stroke="#2563eb" strokeWidth="4" />
            <circle cx="150" cy="80" r="6" fill="#ef4444" />
          </svg>
          <div style={{ position: 'absolute', top: '55px', left: '160px', fontSize: '0.75rem', color: '#ef4444', fontWeight: 'bold' }}>Ви тут</div>
        </div>
        <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '1rem', lineHeight: '1.4' }}>
          Іван зараз проходить фазу стрімкого росту (Пікова швидкість зросту). Тренерський штаб зменшує важкі силові навантаження для захисту колін.
        </p>
      </div>

      <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1rem', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          📋 Щотижневий Звіт Тренера
        </h3>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ background: '#dcfce7', color: '#16a34a', padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>Бачення поля (Відмінно)</div>
          <div style={{ background: '#fee2e2', color: '#dc2626', padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>Ліва нога (Потрібна робота)</div>
        </div>
        <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: '1.6' }}>
          "Іван чудово провів тиждень на тренуванні. Його просторове мислення вище середнього для своєї вікової групи. Проте він надто покладається на праву ногу під час пасів під тиском. Будь ласка, заохочуйте його використовувати ліву ногу під час ігор у дворі."
        </p>
        <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '1rem', textAlign: 'right' }}>
          - Тренер Сергій
        </div>
      </div>

      <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <h3 style={{ fontSize: '1rem', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          🥗 Домашня Ціль Харчування
        </h3>
        <p style={{ fontSize: '0.9rem', color: '#334155', marginBottom: '1rem' }}>
          Для підтримки поточного росту Івана, клубний нутриціолог рекомендує збільшити вживання кальцію та білка.
        </p>
        <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Рекомендована вечеря сьогодні:</div>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: '#475569', lineHeight: '1.5' }}>
            <li>Куряча грудка на грилі (150г)</li>
            <li>Бурий рис (100г)</li>
            <li>Салат з броколі та шпинату</li>
            <li>Склянка молока</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
