'use client';
import { useState } from 'react';

export default function GlobalParsingPage() {
  const [isParsing, setIsParsing] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const handleParse = (e: React.FormEvent) => {
    e.preventDefault();
    setIsParsing(true);
    
    // Fake AI Parsing Delay
    setTimeout(() => {
      setIsParsing(false);
      setResults([
        { id: 1, title: 'Real Madrid Build-up (UCL Final)', source: 'Wyscout / Global', ourMatch: 'Dynamo vs SHT (Match 82%)' },
        { id: 2, title: 'Man City High Press', source: 'Opta / Global', ourMatch: 'High Press vs Zorya (Match 65%)' }
      ]);
    }, 2500);
  };

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1 className="title">Global Arena Parser & Comparison</h1>
      <p className="subtitle">Scrape and analyze the world's best tactical moments to compare against your own team's performance.</p>

      <div className="glass-panel" style={{ marginTop: '2rem' }}>
        <h2>Parse Global Highlights</h2>
        <form onSubmit={handleParse} style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          <input 
            type="text" 
            placeholder="Search tactical patterns (e.g., 'Guardiola False 9 Build-up')..." 
            style={inputStyle} 
            required 
          />
          <button 
            type="submit" 
            className="btn-primary" 
            style={{ background: 'linear-gradient(to right, #ec4899, #8b5cf6)' }}
            disabled={isParsing}
          >
            {isParsing ? 'Scraping Global Databases...' : '🌐 Parse World Arena'}
          </button>
        </form>
      </div>

      {results.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h3>AI Comparison Results</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>The AI found global clips matching your search and compared them to your team's historical moments.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            {results.map(r => (
              <div key={r.id} className="glass-panel" style={{ border: '1px solid #ec4899', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                
                {/* Global Clip */}
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: '#f472b6' }}>Global: {r.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Source: {r.source}</p>
                  <div style={{ height: '150px', backgroundColor: '#000', borderRadius: '8px', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ color: 'var(--text-muted)' }}>[ Video Player (Global) ]</p>
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '2rem' }}>⚔️</p>
                  <p style={{ color: '#4ade80', fontWeight: 'bold' }}>{r.ourMatch}</p>
                  <button className="btn-primary" style={{ backgroundColor: 'var(--surface-border)', padding: '0.25rem 0.5rem', fontSize: '0.75rem', marginTop: '0.5rem' }}>Analyze Diff</button>
                </div>

                {/* Our Team Clip */}
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: 'var(--primary)' }}>Our Team's Closest Match</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>From your uploaded videos</p>
                  <div style={{ height: '150px', backgroundColor: '#000', borderRadius: '8px', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ color: 'var(--text-muted)' }}>[ Video Player (Ours) ]</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  padding: '0.75rem',
  borderRadius: '8px',
  border: '1px solid var(--surface-border)',
  background: 'rgba(0,0,0,0.2)',
  color: 'white',
  fontSize: '1rem',
  outline: 'none',
  flex: 1,
  minWidth: '250px'
};
