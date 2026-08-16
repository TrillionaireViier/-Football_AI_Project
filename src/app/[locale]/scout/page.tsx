'use client';
import { useState } from 'react';

export default function FieldScoutPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [report, setReport] = useState('');
  const [physical, setPhysical] = useState(7);
  const [technical, setTechnical] = useState(8);
  const [mental, setMental] = useState(6);

  const handleMicClick = () => {
    if (isRecording) {
      setIsRecording(false);
      setReport("Гравець демонструє виняткове прискорення на перших 10 метрах. Технічна майстерність під тиском висока, але бракує зрілості в прийнятті рішень в останній третині. Рекомендований для спостереження в U-21.");
    } else {
      setIsRecording(true);
      setReport('');
    }
  };

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', background: '#020617', minHeight: '100vh', padding: '1.5rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.2rem', color: '#60a5fa', margin: 0 }}>ЖИВИЙ СКАУТИНГ</h1>
          <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Стадіон Маракана, Бразилія</div>
        </div>
        <div style={{ background: '#1e293b', padding: '0.5rem', borderRadius: '8px', color: 'white', fontWeight: 'bold' }}>
          СИНХРОНІЗАЦІЯ 🟢
        </div>
      </div>

      <div style={{ background: 'linear-gradient(145deg, #1e293b, #0f172a)', padding: '1.5rem', borderRadius: '16px', border: '1px solid #334155', marginBottom: '2rem' }}>
        <h2 style={{ color: '#f8fafc', fontSize: '1.1rem', margin: '0 0 1rem 0' }}>Ціль: Endrick Felipe</h2>
        <div style={{ display: 'flex', gap: '1rem', color: '#94a3b8', fontSize: '0.9rem' }}>
          <span>Вік: 17</span>
          <span>Поз: ЦН</span>
          <span>Нога: Л</span>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: 'white', fontSize: '1rem', marginBottom: '1rem' }}>Оцінка в режимі реального часу (1-10)</h3>
        {[
          { label: 'Фізика (Швидкість, Сила)', value: physical, setValue: setPhysical, color: '#4ade80' },
          { label: 'Техніка (Пас, Удар, Дриблінг)', value: technical, setValue: setTechnical, color: '#60a5fa' },
          { label: 'Ментальна (Бачення, Витримка)', value: mental, setValue: setMental, color: '#f59e0b' },
        ].map(({ label, value, setValue, color }) => (
          <div key={label} style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              <span>{label}</span>
              <span style={{ color, fontWeight: 'bold' }}>{value}</span>
            </div>
            <input type="range" min="1" max="10" value={value} onChange={(e) => setValue(parseInt(e.target.value))} style={{ width: '100%' }} />
          </div>
        ))}
      </div>

      <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '16px', border: '1px solid #334155', position: 'relative' }}>
        <h3 style={{ color: 'white', fontSize: '1rem', margin: '0 0 1rem 0' }}>🎙️ ШІ Голосовий Звіт</h3>
        <div
          onClick={handleMicClick}
          style={{
            width: '60px', height: '60px', borderRadius: '50%', margin: '0 auto 1rem auto',
            background: isRecording ? '#ef4444' : '#1e293b',
            border: isRecording ? '2px solid white' : '1px solid #475569',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', cursor: 'pointer',
            animation: isRecording ? 'pulse 1s infinite' : 'none'
          }}
        >
          🎤
        </div>
        <style>{`@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }`}</style>
        <div style={{ minHeight: '80px', background: '#020617', padding: '1rem', borderRadius: '8px', color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.5', border: '1px solid #1e293b' }}>
          {isRecording ? <span style={{ color: '#ef4444' }}>Слухаю... Говоріть зараз.</span> : (report || "Натисніть на мікрофон, щоб почати запис спостереження.")}
        </div>
        {report && (
          <button style={{ width: '100%', marginTop: '1rem', background: '#10b981', color: 'white', border: 'none', padding: '0.75rem', borderRadius: '8px', fontWeight: 'bold' }}>
            📤 ВІДПРАВИТИ ДО ГЛОБАЛЬНОЇ БАЗИ СКАУТИНГУ
          </button>
        )}
      </div>
    </div>
  );
}
