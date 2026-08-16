'use client';
import { useState } from 'react';

export default function OpponentAnalysisPage() {
  const [opponent, setOpponent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [report, setReport] = useState<any>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!opponent.trim()) return;
    setIsGenerating(true);
    setReport(null);

    setTimeout(() => {
      setReport({
        team: opponent,
        style: "Інтенсивне пресингове володіння з швидкими флангованими переходами.",
        strengths: [
          "Перевантаження лівого напівпростору.",
          "Висока лінія з активним виходом воротаря.",
          "Миттєвий контрпресинг після втрати м'яча."
        ],
        weaknesses: [
          "Вразливі до довгих діагональних передач за атакуючими бровками.",
          "Проблеми із захистом стандартів проти рослих центральних захисників.",
          "Центральні півзахисники залишають простір при підключеннях в атаку."
        ],
        gamePlan: {
          formation: "4-2-3-1 (Подвійний опорний)",
          strategy: "Грати компактним середнім блоком. Надати їхнім ЦЗ м'яч. При відборі одразу атакувати простір за агресивним лівим бровочником довгими діагоналями на правого вінгера.",
          dangerZone: "Зона 14 (центр одразу перед штрафним майданчиком). Не фолити тут."
        }
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1 className="title" style={{ background: 'linear-gradient(to right, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Аналіз Суперника та Ігровий План</h1>
      <p className="subtitle">Введіть назву суперника для генерації тактичного плану перемоги.</p>

      <div className="glass-panel" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <form onSubmit={handleGenerate} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Назва суперника (напр. Шахтар)"
            value={opponent}
            onChange={e => setOpponent(e.target.value)}
            style={{ flex: '1', minWidth: '250px', padding: '1rem', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(0,0,0,0.2)', color: 'white', fontSize: '1rem', outline: 'none' }}
          />
          <button type="submit" className="btn-primary" disabled={isGenerating || !opponent.trim()} style={{ padding: '0 2rem' }}>
            {isGenerating ? 'Аналізую...' : '✨ Генерувати ігровий план'}
          </button>
        </form>
      </div>

      {isGenerating && (
        <div className="glass-panel" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <div style={{ display: 'inline-block', width: '50px', height: '50px', border: '4px solid rgba(59, 130, 246, 0.3)', borderTop: '4px solid var(--primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
          <h3 style={{ marginTop: '1.5rem', color: '#60a5fa' }}>Скаутинг {opponent}...</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Аналізую останні 5 матчів, теплові карти та тактичні тенденції.</p>
        </div>
      )}

      {report && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass-panel" style={{ border: '1px solid rgba(59, 130, 246, 0.5)' }}>
            <h2 style={{ marginBottom: '1rem', color: '#60a5fa' }}>Скаутинговий Звіт: {report.team}</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px' }}>
              <strong>Виявлений стиль:</strong> {report.style}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div>
                <h3 style={{ color: '#ef4444', marginBottom: '1rem' }}>⚠️ Небезпечні зони (Сильні сторони)</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {report.strengths.map((s: string, i: number) => (
                    <li key={i} style={{ padding: '0.75rem', background: 'rgba(239, 68, 68, 0.1)', borderLeft: '3px solid #ef4444', borderRadius: '4px', fontSize: '0.9rem' }}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ color: '#4ade80', marginBottom: '1rem' }}>🎯 Для використання (Слабкі сторони)</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {report.weaknesses.map((w: string, i: number) => (
                    <li key={i} style={{ padding: '0.75rem', background: 'rgba(74, 222, 128, 0.1)', borderLeft: '3px solid #4ade80', borderRadius: '4px', fontSize: '0.9rem' }}>{w}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.9))', border: '1px solid rgba(167, 139, 250, 0.5)' }}>
            <h2 style={{ marginBottom: '1.5rem', color: '#a78bfa', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              🧠 Генератор ігрового плану ШІ
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <h4 style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Рекомендована Формація</h4>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>{report.gamePlan.formation}</div>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Ключова стратегія перемоги</h4>
                <div style={{ fontSize: '1.1rem', color: '#e2e8f0', lineHeight: '1.5', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                  {report.gamePlan.strategy}
                </div>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Зона небезпеки для захисту</h4>
                <div style={{ fontSize: '1.1rem', color: '#fca5a5', lineHeight: '1.5', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  {report.gamePlan.dangerZone}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
