'use client';
import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

interface PlayerMarker {
  id: number;
  x: number; // percentage relative to stadium container
  y: number; // percentage relative to stadium container
  label: string;
  name: string;
  color: string;
}

export default function TacticsPage() {
  const [markers, setMarkers] = useState<PlayerMarker[]>([
    // Dynamo Starting XI (Blue)
    { id: 1, x: 50, y: 76, label: 'GK', name: 'Bushchan', color: '#3b82f6' },
    { id: 2, x: 20, y: 65, label: 'LB', name: 'Vivcharenko', color: '#3b82f6' },
    { id: 3, x: 38, y: 68, label: 'CB', name: 'Popov', color: '#3b82f6' },
    { id: 4, x: 62, y: 68, label: 'CB', name: 'Mykhavko', color: '#3b82f6' },
    { id: 5, x: 80, y: 65, label: 'RB', name: 'Tymchyk', color: '#3b82f6' },
    { id: 6, x: 50, y: 55, label: 'CDM', name: 'Brazhko', color: '#3b82f6' },
    { id: 7, x: 35, y: 45, label: 'CM', name: 'Shaparenko', color: '#3b82f6' },
    { id: 8, x: 65, y: 45, label: 'CM', name: 'Buyalskyi', color: '#3b82f6' },
    { id: 9, x: 20, y: 35, label: 'LW', name: 'Kabaev', color: '#3b82f6' },
    { id: 10, x: 80, y: 35, label: 'RW', name: 'Yarmolenko', color: '#3b82f6' },
    { id: 11, x: 50, y: 30, label: 'ST', name: 'Vanat', color: '#3b82f6' },
    
    // Opponent Starting XI (Red)
    { id: 12, x: 50, y: 16, label: 'GK', name: 'Riznyk', color: '#ef4444' },
    { id: 13, x: 20, y: 26, label: 'LB', name: 'Azarovi', color: '#ef4444' },
    { id: 14, x: 38, y: 24, label: 'CB', name: 'Matviyenko', color: '#ef4444' },
    { id: 15, x: 62, y: 24, label: 'CB', name: 'Bondar', color: '#ef4444' },
    { id: 16, x: 80, y: 26, label: 'RB', name: 'Konoplya', color: '#ef4444' },
    { id: 17, x: 50, y: 35, label: 'CDM', name: 'Stepanenko', color: '#ef4444' },
    { id: 18, x: 35, y: 45, label: 'CM', name: 'Sudakov', color: '#ef4444' },
    { id: 19, x: 65, y: 45, label: 'CM', name: 'Bondarenko', color: '#ef4444' },
    { id: 20, x: 20, y: 58, label: 'LW', name: 'Kevin', color: '#ef4444' },
    { id: 21, x: 80, y: 58, label: 'RW', name: 'Zubkov', color: '#ef4444' },
    { id: 22, x: 50, y: 62, label: 'ST', name: 'Sikan', color: '#ef4444' },

    // Dynamo Bench (At the bottom)
    { id: 23, x: 37, y: 95, label: 'SUB', name: 'Neshcheret', color: '#3b82f6' },
    { id: 24, x: 44, y: 95, label: 'SUB', name: 'Syrota', color: '#3b82f6' },
    { id: 25, x: 51, y: 95, label: 'SUB', name: 'Karavaev', color: '#3b82f6' },
    { id: 26, x: 58, y: 95, label: 'SUB', name: 'Andriyevskyi', color: '#3b82f6' },
    { id: 27, x: 65, y: 95, label: 'SUB', name: 'Voloshyn', color: '#3b82f6' },
    { id: 28, x: 72, y: 95, label: 'SUB', name: 'Ponomarenko', color: '#3b82f6' },
    { id: 29, x: 79, y: 95, label: 'SUB', name: 'Rubchynskyi', color: '#3b82f6' },
  ]);

  const [draggingId, setDraggingId] = useState<number | null>(null);
  const [selectedCoach, setSelectedCoach] = useState('Oleksandr Shovkovskyi');
  const stadiumRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('TacticsPage');

  const handleMouseDown = (id: number) => {
    setDraggingId(id);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingId === null || !stadiumRef.current) return;

    const rect = stadiumRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));

    setMarkers(prev => prev.map(m => m.id === draggingId ? { ...m, x, y } : m));
  };

  const handleMouseUp = () => {
    setDraggingId(null);
  };

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ marginBottom: '1rem' }}>
        <Link href="/coach" className="btn-primary" style={{ background: '#334155', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
          ← {t('back')}
        </Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div>
          <h1 className="title" style={{ background: 'linear-gradient(to right, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '0.5rem' }}>{t('title')}</h1>
          <p className="subtitle">{t('subtitle')}</p>
        </div>
        <button className="btn-primary" onClick={() => alert(t('savedAlert'))}>{t('save')}</button>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem', width: '100%', background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#3b82f6', border: '2px solid rgba(255,255,255,0.5)' }}></div>
          <span style={{ color: 'white', fontWeight: 'bold' }}>{t('ourTeam')}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#ef4444', border: '2px solid rgba(255,255,255,0.5)' }}></div>
          <span style={{ color: 'white', fontWeight: 'bold' }}>{t('opponent')}</span>
        </div>
      </div>

      {/* STADIUM WRAPPER */}
      <div 
        ref={stadiumRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '800px',
          height: '1000px', // Tall aspect ratio to fit pitch + bench + tribunes
          margin: '0 auto',
          backgroundColor: '#1e293b', // Stadium concrete walkways
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          border: '1px solid #334155'
        }}
      >
        {/* TOP TRIBUNE / SPONSORS */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '8%', backgroundColor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'space-around', borderBottom: '2px solid #334155', backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 20px)' }}>
          <div style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem', opacity: 0.8, letterSpacing: '1px' }}>DYNAMO STORE</div>
          <div style={{ color: '#4ade80', fontWeight: '900', fontSize: '1.5rem', opacity: 0.9 }}>FAVBET</div>
          <div style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem', opacity: 0.8, letterSpacing: '1px' }}>NEW BALANCE</div>
          <div style={{ color: '#3b82f6', fontWeight: '900', fontSize: '1.5rem', opacity: 0.9 }}>FCTX</div>
        </div>

        {/* BOTTOM TRIBUNE / SPONSORS */}
        <div style={{ position: 'absolute', bottom: '12%', left: 0, right: 0, height: '6%', backgroundColor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'space-around', borderTop: '2px solid #334155', backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 20px)' }}>
           <div style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1rem', opacity: 0.7 }}>A-BANK</div>
           <div style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '1.2rem', opacity: 0.8 }}>KLO</div>
           <div style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '1rem', opacity: 0.7 }}>PITULL</div>
        </div>

        {/* PITCH */}
        <div style={{
          position: 'absolute',
          top: '12%',
          bottom: '22%',
          left: '5%',
          right: '5%',
          backgroundColor: '#22c55e', // Grass green
          border: '4px solid white',
          borderRadius: '4px',
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 2px, transparent 2px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 2px, transparent 2px)
          `,
          backgroundSize: '100% 50%, 50% 100%',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}>
          {/* Pitch Markings */}
          {/* Center Circle */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '24%', aspectRatio: '1', border: '2px solid white', borderRadius: '50%' }}></div>
          {/* Center Line */}
          <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '2px', backgroundColor: 'white', transform: 'translateY(-50%)' }}></div>
          
          {/* Penalty Areas */}
          <div style={{ position: 'absolute', top: '0', left: '25%', right: '25%', height: '15%', border: '2px solid white', borderTop: 'none' }}></div>
          <div style={{ position: 'absolute', bottom: '0', left: '25%', right: '25%', height: '15%', border: '2px solid white', borderBottom: 'none' }}></div>
          
          {/* Goal Areas */}
          <div style={{ position: 'absolute', top: '0', left: '38%', right: '38%', height: '5%', border: '2px solid white', borderTop: 'none' }}></div>
          <div style={{ position: 'absolute', bottom: '0', left: '38%', right: '38%', height: '5%', border: '2px solid white', borderBottom: 'none' }}></div>
        </div>

        {/* TECHNICAL AREA & BENCH */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '12%', backgroundColor: '#020617', display: 'flex', padding: '1rem', borderTop: '2px solid #334155' }}>
          
          {/* Coach Box */}
          <div style={{ flex: 1, borderRight: '1px solid #334155', paddingRight: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
             <h4 style={{ color: '#94a3b8', margin: '0 0 0.5rem 0', fontSize: '0.8rem', textTransform: 'uppercase' }}>{t('techArea')}</h4>
             <select 
               value={selectedCoach} 
               onChange={e => setSelectedCoach(e.target.value)}
               style={{ background: '#1e293b', border: '1px solid #475569', color: 'white', padding: '0.5rem', borderRadius: '4px', outline: 'none', cursor: 'pointer' }}
             >
               <option value="Oleksandr Shovkovskyi">O. Shovkovskyi (Head Coach)</option>
               <option value="Emil Caras">E. Caras (Asst. Coach)</option>
               <option value="Oleh Husyev">O. Husyev (First Team Coach)</option>
             </select>
          </div>

          {/* Bench Seating Area (Markers drag over this) */}
          <div style={{ flex: 2, paddingLeft: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
             <h4 style={{ color: '#94a3b8', margin: '0 0 0.5rem 0', fontSize: '0.8rem', textTransform: 'uppercase' }}>{t('bench')}</h4>
             {/* Visual representation of empty seats beneath the players */}
             <div style={{ display: 'flex', gap: '8px', opacity: 0.5 }}>
                {Array.from({length: 7}).map((_, i) => (
                  <div key={i} style={{ width: '40px', height: '40px', backgroundColor: '#1e293b', borderRadius: '8px', border: '1px dashed #475569' }}></div>
                ))}
             </div>
          </div>
        </div>

        {/* PLAYER MARKERS */}
        {markers.map(marker => (
          <div
            key={marker.id}
            onMouseDown={(e) => { e.preventDefault(); handleMouseDown(marker.id); }}
            style={{
              position: 'absolute',
              left: `${marker.x}%`,
              top: `${marker.y}%`,
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: draggingId === marker.id ? 'grabbing' : 'grab',
              transition: draggingId === marker.id ? 'none' : 'transform 0.1s',
              zIndex: draggingId === marker.id ? 10 : 1
            }}
          >
            <div style={{
              width: '36px',
              height: '36px',
              backgroundColor: marker.color,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '11px',
              boxShadow: draggingId === marker.id ? '0 10px 15px rgba(0,0,0,0.8)' : '0 4px 6px rgba(0,0,0,0.5)',
              border: '2px solid rgba(255,255,255,0.8)',
              transform: draggingId === marker.id ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.1s, box-shadow 0.1s'
            }}>
              {marker.label}
            </div>
            <div style={{ 
              background: 'rgba(0,0,0,0.8)', 
              padding: '2px 6px', 
              borderRadius: '4px', 
              fontSize: '10px', 
              color: 'white', 
              marginTop: '4px', 
              whiteSpace: 'nowrap',
              pointerEvents: 'none'
            }}>
              {marker.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
