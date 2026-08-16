'use client';
import { useState } from 'react';

export default function TrainingPlannerPage() {
  const [isGenerating, setIsGenerating] = useState(false);

  const [schedule, setSchedule] = useState<any>({
    "Понеділок": { type: 'Відновлення', intensity: 'Низька', focus: 'Легкий біг, розтяжка, масаж' },
    "Вівторок": { type: 'Техніка', intensity: 'Середня', focus: 'Контроль м\'яча, паси в русі, удари по воротах' },
    "Середа": { type: 'Фізична', intensity: 'Висока', focus: 'Спринти та тренування пресингу (4v2)' },
    "Четвер": { type: 'Тактика', intensity: 'Середня', focus: 'Стандартні положення (Захист)' },
    "П'ятниця": { type: 'Підготовка до матчу', intensity: 'Низька', focus: 'Тіньова гра та фокус на супернику' },
  });

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setSchedule({
        "Понеділок": { type: 'Відновлення', intensity: 'Низька', focus: 'Басейн та масаж' },
        "Вівторок": { type: 'Тактика', intensity: 'Середня', focus: 'Перехід від оборони до атаки' },
        "Середа": { type: 'Технічна', intensity: 'Висока', focus: 'Контратаки та завершення' },
        "Четвер": { type: 'Тактика', intensity: 'Середня', focus: 'Стандартні положення (Атака)' },
        "П'ятниця": { type: 'Підготовка до матчу', intensity: 'Низька', focus: '11х11 тіньова гра (низька інтенсивність)' },
      });
      setIsGenerating(false);
    }, 2000);
  };

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'Висока': return '#ef4444';
      case 'Середня': return '#f59e0b';
      case 'Низька': return '#4ade80';
      default: return '#60a5fa';
    }
  };

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="title" style={{ background: 'linear-gradient(to right, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>ШІ Тренувальний Планувальник 📅</h1>
          <p className="subtitle">Планування мікроциклу з урахуванням наступного суперника та стану гравців.</p>
        </div>
        <button
          className="btn-primary"
          onClick={handleGenerate}
          disabled={isGenerating}
          style={{ background: 'linear-gradient(to right, #10b981, #059669)' }}
        >
          {isGenerating ? 'Оптимізація розкладу...' : '✨ Генерувати оптимальний тиждень'}
        </button>
      </div>

      <div className="glass-panel" style={{ marginTop: '2rem', borderTop: '4px solid #3b82f6' }}>
        <h2 style={{ marginBottom: '1.5rem', color: '#60a5fa', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          🧠 Обґрунтування ШІ
        </h2>
        <div style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
          <p style={{ color: '#e2e8f0', lineHeight: '1.5' }}>
            <strong>Наступний суперник:</strong> Шахтар Донецьк (Субота).<br />
            <strong>Коригування ШІ:</strong> Шахтар вразливий до швидких контратак. Середовищне інтенсивне тренування сфокусоване на відпрацюванні контрататак. Четвер переорієнтовано на атакувальні стандарти — використання слабкості суперника проти верхових м'ячів.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', marginTop: '2rem', overflowX: 'auto' }}>
        {Object.entries(schedule).map(([day, data]: [string, any]) => (
          <div key={day} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '200px' }}>
            <h3 style={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>{day}</h3>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Тип заняття</div>
              <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#f8fafc' }}>{data.type}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Інтенсивність</div>
              <div style={{ display: 'inline-block', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold', background: `${getIntensityColor(data.intensity)}33`, color: getIntensityColor(data.intensity) }}>
                {data.intensity}
              </div>
            </div>
            <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px dashed rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Основний фокус</div>
              <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.4' }}>{data.focus}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
