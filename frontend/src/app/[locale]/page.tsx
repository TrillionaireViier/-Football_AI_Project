import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('HomePage');
  
  return (
    <main className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
      <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <h1 className="title">{t('title')}</h1>
        <p className="subtitle">{t('description')}</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/coach" className="btn-primary" style={{ padding: '0.75rem 3rem', fontSize: '1.2rem' }}>{t('login')}</Link>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <Link href="/tournament" className="btn-primary" style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', padding: '0.75rem 2rem' }}>
            🏆 {t('viewTournament')}
          </Link>
        </div>
      </div>
    </main>
  );
}
