'use client';
import { useTranslations } from 'next-intl';

interface Match {
  id: string;
  team1: { name: string; score: number | null; logoColor: string };
  team2: { name: string; score: number | null; logoColor: string };
  winner?: 1 | 2;
  status: 'completed' | 'live' | 'upcoming';
}

const MatchCard = ({ match }: { match: Match }) => {
  return (
    <div className="glass-panel" style={{
      width: '220px',
      padding: 0,
      border: match.status === 'live' ? '1px solid #ef4444' : '1px solid var(--surface-border)',
      borderRadius: '8px',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: match.status === 'live' ? '0 0 15px rgba(239, 68, 68, 0.3)' : 'none',
      zIndex: 2,
      background: 'rgba(15, 23, 42, 0.95)'
    }}>
      {match.status === 'live' && (
        <div style={{ position: 'absolute', top: 0, right: 0, background: '#ef4444', color: 'white', fontSize: '0.65rem', padding: '2px 8px', fontWeight: 'bold', borderBottomLeftRadius: '8px', zIndex: 10 }}>LIVE</div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Team 1 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', opacity: match.winner === 2 ? 0.4 : 1, background: match.winner === 1 ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: match.team1.logoColor, border: '2px solid rgba(255,255,255,0.2)' }}></div>
            <span style={{ color: 'white', fontWeight: match.winner === 1 ? 'bold' : 'normal', fontSize: '1rem' }}>{match.team1.name}</span>
          </div>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>{match.team1.score !== null ? match.team1.score : '-'}</span>
        </div>
        {/* Team 2 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', opacity: match.winner === 1 ? 0.4 : 1, background: match.winner === 2 ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: match.team2.logoColor, border: '2px solid rgba(255,255,255,0.2)' }}></div>
            <span style={{ color: 'white', fontWeight: match.winner === 2 ? 'bold' : 'normal', fontSize: '1rem' }}>{match.team2.name}</span>
          </div>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>{match.team2.score !== null ? match.team2.score : '-'}</span>
        </div>
      </div>
    </div>
  );
};

export default function TournamentPage() {
  const t = useTranslations('TournamentPage');

  const quarterfinals: Match[] = [
    { id: 'q1', status: 'completed', winner: 1, team1: { name: 'Dynamo Kyiv', score: 3, logoColor: '#3b82f6' }, team2: { name: 'Obolon', score: 0, logoColor: '#22c55e' } },
    { id: 'q2', status: 'completed', winner: 1, team1: { name: 'Polissya', score: 2, logoColor: '#fcd34d' }, team2: { name: 'Kryvbas', score: 1, logoColor: '#ef4444' } },
    { id: 'q3', status: 'completed', winner: 1, team1: { name: 'Shakhtar', score: 4, logoColor: '#f97316' }, team2: { name: 'Chornomorets', score: 2, logoColor: '#0ea5e9' } },
    { id: 'q4', status: 'completed', winner: 2, team1: { name: 'Vorskla', score: 0, logoColor: '#22c55e' }, team2: { name: 'Rukh Lviv', score: 1, logoColor: '#eab308' } },
  ];

  const semifinals: Match[] = [
    { id: 's1', status: 'live', team1: { name: 'Dynamo Kyiv', score: 1, logoColor: '#3b82f6' }, team2: { name: 'Polissya', score: 0, logoColor: '#fcd34d' } },
    { id: 's2', status: 'upcoming', team1: { name: 'Shakhtar', score: null, logoColor: '#f97316' }, team2: { name: 'Rukh Lviv', score: null, logoColor: '#eab308' } },
  ];

  const final: Match[] = [
    { id: 'f1', status: 'upcoming', team1: { name: 'TBD', score: null, logoColor: '#94a3b8' }, team2: { name: 'TBD', score: null, logoColor: '#94a3b8' } },
  ];

  // Helper for drawing connecting lines
  const Connector = ({ isLast = false, isLive = false }: { isLast?: boolean, isLive?: boolean }) => (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '40px' }}>
      <div style={{ 
        width: '100%', 
        height: isLast ? '280px' : '100px', 
        borderRight: isLive ? '2px solid #ef4444' : '2px solid #334155', 
        borderTop: isLive ? '2px solid #ef4444' : '2px solid #334155', 
        borderBottom: '2px solid #334155', 
        margin: '1rem 0',
        borderTopRightRadius: '8px',
        borderBottomRightRadius: '8px',
        boxShadow: isLive ? 'inset -5px 0 10px -5px rgba(239,68,68,0.5)' : 'none'
      }}></div>
    </div>
  );

  const StraightLine = ({ isLive = false }) => (
    <div style={{ display: 'flex', alignItems: 'center', width: '40px' }}>
      <div style={{ 
        width: '100%', 
        height: '2px', 
        backgroundColor: isLive ? '#ef4444' : '#334155',
        boxShadow: isLive ? '0 0 10px rgba(239,68,68,0.8)' : 'none'
      }}></div>
    </div>
  );

  return (
    <div className="container" style={{ padding: '3rem 0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="title" style={{ background: 'linear-gradient(to right, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: '3.5rem', marginBottom: '1rem' }}>
          {t('title')}
        </h1>
        <p className="subtitle" style={{ fontSize: '1.2rem', color: '#94a3b8' }}>{t('subtitle')}</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', flex: 1, overflowX: 'auto', paddingBottom: '2rem' }}>
        
        {/* Bracket Container */}
        <div style={{ display: 'flex', gap: '0', minWidth: '800px', alignItems: 'stretch' }}>
          
          {/* Quarterfinals */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', gap: '1rem', width: '220px' }}>
            <div style={{ textAlign: 'center', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>{t('quarterfinals')}</div>
            <MatchCard match={quarterfinals[0]} />
            <MatchCard match={quarterfinals[1]} />
            <MatchCard match={quarterfinals[2]} />
            <MatchCard match={quarterfinals[3]} />
          </div>

          {/* QF to SF Connectors */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', paddingTop: '3rem' }}>
             <Connector isLive={true} />
             <Connector />
          </div>
          
          {/* Straight line into Semifinal */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', paddingTop: '3rem' }}>
             <StraightLine isLive={true} />
             <StraightLine />
          </div>

          {/* Semifinals */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '220px' }}>
            <div style={{ textAlign: 'center', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '-2rem' }}>{t('semifinals')}</div>
            <MatchCard match={semifinals[0]} />
            <MatchCard match={semifinals[1]} />
          </div>

          {/* SF to Final Connectors */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
             <Connector isLast={true} />
          </div>

          {/* Straight line into Final */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
             <StraightLine />
          </div>

          {/* Final */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '220px' }}>
            <div style={{ textAlign: 'center', color: '#fbbf24', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '2rem' }}>{t('final')}</div>
            <div style={{ transform: 'scale(1.1)' }}>
              <MatchCard match={final[0]} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
