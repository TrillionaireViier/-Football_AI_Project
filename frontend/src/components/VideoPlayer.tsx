'use client';
import { useState } from 'react';

export default function VideoPlayer({ videoUrl }: { videoUrl?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDrawingMode, setIsDrawingMode] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      {/* Video Container */}
      <div style={{ 
        width: '100%', 
        aspectRatio: '16/9', 
        backgroundColor: '#000', 
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {videoUrl ? (
          <video src={videoUrl} style={{ width: '100%', height: '100%' }} controls={!isDrawingMode} />
        ) : (
          <p style={{ color: 'var(--text-muted)' }}>No video selected. Upload a match to begin AI analysis.</p>
        )}

        {/* Overlay for drawing tools if active */}
        {isDrawingMode && (
          <div style={{ position: 'absolute', inset: 0, zIndex: 10, cursor: 'crosshair', backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
            <p style={{ position: 'absolute', top: 10, left: 10, color: '#fff', background: 'rgba(0,0,0,0.5)', padding: '4px 8px', borderRadius: '4px' }}>Drawing Mode Active</p>
          </div>
        )}
      </div>

      {/* Video Controls / AI Tagging Tools */}
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button className="btn-primary" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? 'Pause' : 'Play / Analyze'}
        </button>
        <button 
          className="btn-primary" 
          style={{ backgroundColor: isDrawingMode ? 'var(--primary-hover)' : 'var(--surface-border)' }}
          onClick={() => setIsDrawingMode(!isDrawingMode)}
        >
          {isDrawingMode ? 'Exit Drawing Mode' : 'Draw Tactical Zones'}
        </button>
        <button className="btn-primary" style={{ backgroundColor: '#10b981' }}>+ Tag Highlight</button>
      </div>

      {/* AI Generated Timeline Tags */}
      <div style={{ marginTop: '2rem' }}>
        <h3>AI Detected Events</h3>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
          <div style={tagStyle}>00:15 - Pass</div>
          <div style={tagStyle}>01:42 - Shot (Off Target)</div>
          <div style={tagStyle}>05:10 - Defensive Error</div>
          <div style={tagStyle}>12:30 - Goal!</div>
        </div>
      </div>
    </div>
  );
}

const tagStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: 'rgba(59, 130, 246, 0.2)',
  border: '1px solid rgba(59, 130, 246, 0.5)',
  borderRadius: '20px',
  color: '#60a5fa',
  whiteSpace: 'nowrap' as const,
  cursor: 'pointer',
  fontSize: '0.875rem'
};
