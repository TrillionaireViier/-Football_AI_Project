'use client';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function TopNav() {
  const router = useRouter();
  const pathname = usePathname();
  
    const t = useTranslations('Navigation');
  
  // Extract current locale from pathname (e.g., /en/something -> 'en')
  const currentLocale = pathname.split('/')[1];
  
  // Don't show back button on the very root home pages
  const isHome = pathname === '/en' || pathname === '/uk' || pathname === '/';

  const switchLanguage = (locale: string) => {
    const segments = pathname.split('/');
    if (segments.length > 1) {
      segments[1] = locale; // Replace current locale
    } else {
      segments.push(locale);
    }
    router.push(segments.join('/'));
  };

  const goBack = () => {
    const segments = pathname.split('/').filter(Boolean); // ['uk', 'coach', 'tactics']
    if (segments.length > 1) {
      segments.pop(); // remove last segment
      router.push('/' + segments.join('/'));
    } else {
      router.push('/' + currentLocale);
    }
  };

  return (
    <div style={{
      width: '100%',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between', // Push items to edges
      alignItems: 'center',
      background: 'rgba(0,0,0,0.2)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div>
        {!isHome && (
          <button 
            onClick={goBack}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '1rem',
              padding: '0.5rem',
              borderRadius: '8px',
              transition: 'background 0.2s'
            }}
            onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            onMouseOut={e => e.currentTarget.style.background = 'transparent'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            {t('back')}
          </button>
        )}
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button 
          onClick={() => switchLanguage('en')}
          style={{
            background: currentLocale === 'en' ? 'rgba(59, 130, 246, 0.4)' : 'transparent',
            border: currentLocale === 'en' ? '1px solid #3b82f6' : '1px solid var(--surface-border)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50px',
            height: '40px'
          }}
          title="English"
        >
          🇬🇧
        </button>
        <button 
          onClick={() => switchLanguage('uk')}
          style={{
            background: currentLocale === 'uk' ? 'rgba(239, 192, 68, 0.4)' : 'transparent',
            border: currentLocale === 'uk' ? '1px solid #fcd34d' : '1px solid var(--surface-border)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50px',
            height: '40px'
          }}
          title="Українська"
        >
          🇺🇦
        </button>
      </div>
    </div>
  );
}
