'use client';
import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { usePlayers } from '@/context/PlayerContext';

type ChemistryType = 'synergy' | 'conflict' | 'neutral';

export default function ChemistryPage() {
  const t = useTranslations('ChemistryPage');
  const { players: contextPlayers, updatePlayer } = usePlayers();
  
  // Local state for smooth dragging
  const [localPlayers, setLocalPlayers] = useState(contextPlayers);
  
  // Sync context players to local when they change
  useEffect(() => {
    setLocalPlayers(contextPlayers);
  }, [contextPlayers]);
  
  // Track connections
  const [links, setLinks] = useState<Record<string, ChemistryType>>({
    '1-2': 'synergy',
    '1-3': 'conflict',
    '2-3': 'synergy'
  });

  const [draggingId, setDraggingId] = useState<string | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (id: string) => setDraggingId(id);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingId === null || !boardRef.current) return;
    const rect = boardRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setLocalPlayers(prev => prev.map(p => p.id === draggingId ? { ...p, x, y } : p));
  };

  const handleMouseUp = () => {
    if (draggingId) {
      const p = localPlayers.find(p => p.id === draggingId);
      if (p) updatePlayer(draggingId, { x: p.x, y: p.y });
    }
    setDraggingId(null);
  };

  const toggleChemistry = (linkId: string) => {
    setLinks(prev => {
      const current = prev[linkId] || 'neutral';
      const next: ChemistryType = current === 'synergy' ? 'conflict' : current === 'conflict' ? 'neutral' : 'synergy';
      return { ...prev, [linkId]: next };
    });
  };

  // Chemistry data
  const renderLine = (p1: any, p2: any) => {
    if (!p1 || !p2) return null;
    const linkId1 = `${p1.id}-${p2.id}`;
    const linkId2 = `${p2.id}-${p1.id}`;
    const linkId = links[linkId1] ? linkId1 : links[linkId2] ? linkId2 : linkId1;
    
    const status = links[linkId] || 'neutral';
    
    let color = 'rgba(156, 163, 175, 0.5)'; // neutral gray
    if (status === 'synergy') color = 'rgba(74, 222, 128, 0.8)';
    else if (status === 'conflict') color = 'rgba(239, 68, 68, 0.8)';

    const x1 = p1.x; const y1 = p1.y;
    const x2 = p2.x; const y2 = p2.y;
    const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

    return (
      <div 
        key={linkId}
        onClick={() => toggleChemistry(linkId)}
        style={{
          position: 'absolute',
          left: `${x1}%`,
          top: `${y1}%`,
          width: `${length}%`,
          height: '20px', // Hitbox thickness
          marginTop: '-10px', 
          backgroundColor: 'transparent',
          transformOrigin: '0 50%',
          transform: `rotate(${angle}deg)`,
          zIndex: 5,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div style={{
          width: '100%',
          height: '4px',
          backgroundColor: color,
          boxShadow: status !== 'neutral' ? `0 0 10px ${color}` : 'none',
          opacity: status === 'neutral' ? 0.3 : 0.8,
          transition: 'all 0.3s ease',
          borderRadius: '2px'
        }}></div>
      </div>
    );
  };

  const [scale, setScale] = useState(1);

  const handleZoomIn = () => setScale(prev => Math.min(3, prev + 0.2));
  const handleZoomOut = () => setScale(prev => Math.max(0.5, prev - 0.2));

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1 className="title" style={{ background: 'linear-gradient(to right, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{t('title')}</h1>
      <p className="subtitle">{t('subtitle')}</p>

      <div className="glass-panel" style={{ marginTop: '2rem', position: 'relative' }}>
        
        {/* Zoom Controls */}
        <div style={{ position: 'absolute', right: '1rem', top: '1rem', zIndex: 100, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button 
            onClick={handleZoomIn} 
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', width: '36px', height: '36px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', backdropFilter: 'blur(4px)' }}
          >
            +
          </button>
          <button 
            onClick={handleZoomOut} 
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', width: '36px', height: '36px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', backdropFilter: 'blur(4px)' }}
          >
            -
          </button>
        </div>

        <div 
          style={{
            position: 'relative',
            width: '100%',
            height: '500px',
            backgroundColor: 'rgba(0,0,0,0.3)',
            border: '2px dashed rgba(255,255,255,0.2)',
            borderRadius: '12px',
            overflow: 'hidden'
          }}
          onWheel={(e) => {
            // Optional: adjust scale on wheel
            setScale(prev => Math.min(Math.max(0.5, prev - e.deltaY * 0.002), 3));
          }}
        >
          <div
            ref={boardRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              transform: `scale(${scale})`,
              transformOrigin: 'center center',
              transition: 'transform 0.1s ease-out'
            }}
          >
            {/* Draw Lines - dynamically between all players */}
            {localPlayers.map((p1, i) => 
              localPlayers.slice(i + 1).map(p2 => renderLine(p1, p2))
            )}

            {/* Draw Players */}
            {localPlayers.map(player => (
              <div
                key={player.id}
                onMouseDown={(e) => { e.preventDefault(); handleMouseDown(player.id); }}
                style={{
                  position: 'absolute',
                  left: `${player.x}%`,
                  top: `${player.y}%`,
                  transform: 'translate(-50%, -50%)',
                  cursor: draggingId === player.id ? 'grabbing' : 'grab',
                  zIndex: draggingId === player.id ? 10 : 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <img 
                  src={player.photoUrl} 
                  alt={player.name} 
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    border: '3px solid white',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
                    pointerEvents: 'none'
                  }}
                />
                <span style={{ background: 'rgba(0,0,0,0.7)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  {player.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '20px', height: '4px', background: 'rgba(74, 222, 128, 0.8)', boxShadow: '0 0 10px rgba(74, 222, 128, 0.8)' }}></div>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t('strongSynergy')}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '20px', height: '4px', background: 'rgba(239, 68, 68, 0.8)', boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)' }}></div>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t('tacticalConflict')}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '20px', height: '4px', background: 'rgba(156, 163, 175, 0.5)' }}></div>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t('neutralLink')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
