'use client';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function ReportsPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [report, setReport] = useState<any>(null);
  const t = useTranslations('ReportsPage');
  const tTactics = useTranslations('TacticsPage'); // to use the back button translation
  const locale = useLocale();

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI processing delay
    setTimeout(() => {
      const isUk = locale === 'uk';
      setReport({
        match: isUk ? "Динамо Київ vs Шахтар Донецьк" : "Dynamo Kyiv vs Shakhtar Donetsk",
        date: isUk ? "15 Жовтня, 2025" : "Oct 15, 2025",
        score: "2 - 1",
        xg: "1.84 - 0.92",
        possession: "54% - 46%",
        topPerformer: isUk ? "Микола Шапаренко (Rating: 8.7)" : "Mykola Shaparenko (Rating: 8.7)",
        insights: {
          strengths: isUk ? [
            "Відмінна побудова гри від захисту (88% точність передач на своїй половині).",
            "Ефективний високий пресинг призвів до 12 втрат м'яча суперником у їхній третині.",
            "Сильна гра на другому поверсі при стандартах (виграно 75% верхових дуелей в атаці)."
          ] : [
            "Excellent build-up play from the back (88% pass accuracy in own half).",
            "Effective high press forced 12 turnovers in the opposition third.",
            "Strong aerial dominance in set-pieces (won 75% of attacking headers)."
          ],
          weaknesses: isUk ? [
            "Вразливість до контратак на лівому фланзі.",
            "Низький відсоток реалізації ударів у першому таймі (лише 1 гол з 8 ударів у площину)."
          ] : [
            "Vulnerable to counter-attacks on the left flank.",
            "Low shot conversion rate in the first half (only 1 goal from 8 shots on target)."
          ]
        },
        aiVerdict: isUk 
          ? "Загалом солідний виступ. Команда домінувала у боротьбі в центрі поля, але реалізацію потрібно покращувати, щоб раніше «закривати» ігри. Лівий фланг потребує тактичних корективів для уникнення проблем під час переходів."
          : "A solid performance overall. The team dominated the midfield battle, but finishing needs improvement to kill games off earlier. The left flank requires tactical adjustments to prevent exposure during transitions."
      });
      setIsGenerating(false);
    }, 2500);
  };

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ marginBottom: '1rem' }}>
        <Link href="/coach" className="btn-primary" style={{ background: '#334155', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
          ← {tTactics('back')}
        </Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="title" style={{ background: 'linear-gradient(to right, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{t('title')}</h1>
          <p className="subtitle">{t('subtitle')}</p>
        </div>
      </div>

      {!report && !isGenerating && (
        <div className="glass-panel" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>{t('noActive')}</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{t('selectRecent')}</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <select style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'var(--surface)', color: 'white', outline: 'none' }}>
              <option>Dynamo Kyiv vs Shakhtar Donetsk (Oct 15)</option>
              <option>Dynamo Kyiv vs Zorya Luhansk (Oct 08)</option>
            </select>
            <button className="btn-primary" onClick={handleGenerate}>{t('generate')}</button>
          </div>
        </div>
      )}

      {isGenerating && (
        <div className="glass-panel" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <div style={{ display: 'inline-block', width: '50px', height: '50px', border: '4px solid rgba(59, 130, 246, 0.3)', borderTop: '4px solid var(--primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
          <h3 style={{ marginTop: '1.5rem', color: '#60a5fa' }}>{t('analyzing')}</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>{t('compiling')}</p>
        </div>
      )}

      {report && !isGenerating && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Header Stats */}
          <div className="glass-panel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('matchLabel')}</p>
              <div style={{ fontSize: '1.25rem', fontWeight: '600', marginTop: '0.25rem' }}>{report.match}</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{report.date}</div>
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('finalScoreLabel')}</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4ade80', lineHeight: '1' }}>{report.score}</div>
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('xgLabel')}</p>
              <div style={{ fontSize: '1.5rem', fontWeight: '600', marginTop: '0.25rem' }}>{report.xg}</div>
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('possessionLabel')}</p>
              <div style={{ fontSize: '1.5rem', fontWeight: '600', marginTop: '0.25rem' }}>{report.possession}</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {/* Strengths & Weaknesses */}
            <div className="glass-panel">
              <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#4ade80' }}>↗</span> {t('strengths')}
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {report.insights.strengths.map((str: string, i: number) => (
                  <li key={i} style={{ padding: '1rem', background: 'rgba(74, 222, 128, 0.1)', borderLeft: '4px solid #4ade80', borderRadius: '4px' }}>
                    {str}
                  </li>
                ))}
              </ul>

              <h2 style={{ marginBottom: '1.5rem', marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#ef4444' }}>↘</span> {t('vulnerabilities')}
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {report.insights.weaknesses.map((weak: string, i: number) => (
                  <li key={i} style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', borderRadius: '4px' }}>
                    {weak}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Verdict & Top Performer */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="glass-panel" style={{ border: '1px solid rgba(139, 92, 246, 0.5)', background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.9))' }}>
                <h2 style={{ marginBottom: '1rem', color: '#a78bfa', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {t('aiVerdict')}
                </h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#e2e8f0' }}>
                  "{report.aiVerdict}"
                </p>
              </div>

              <div className="glass-panel">
                <h2 style={{ marginBottom: '1rem' }}>{t('topPerformer')}</h2>
                <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {report.topPerformer.split(' ')[0][0]}{report.topPerformer.split(' ')[1][0]}
                  </div>
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{report.topPerformer.split(' (')[0]}</div>
                    <div style={{ color: '#4ade80', fontWeight: '600', marginTop: '0.25rem' }}>{t('rating')} {report.topPerformer.split('Rating: ')[1].replace(')', '')}</div>
                  </div>
                </div>
              </div>
              
              <div style={{ marginTop: 'auto' }}>
                 <button className="btn-primary" style={{ width: '100%', padding: '1rem', background: 'var(--surface-border)', color: 'white' }} onClick={() => setReport(null)}>
                   {t('reset')}
                 </button>
                 <button className="btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}>
                   {t('export')}
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
