'use client';
import { useState, useEffect } from 'react';
import { addVideoTag, getVideoTags, VideoTag } from '@/lib/firebase/videoService';

export default function VideoAnalysisPage() {
  const [tags, setTags] = useState<VideoTag[]>([]);
  const [newTime, setNewTime] = useState('');
  const [newLabel, setNewLabel] = useState('shot');
  const [selectedPlayer, setSelectedPlayer] = useState('1');
  const [isAutoAnalyzing, setIsAutoAnalyzing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Hardcoded mock video ID for the MVP
  const MOCK_VIDEO_ID = "match_dynamo_vs_shakhtar_v1";

  useEffect(() => {
    loadTags();
  }, []);

  const loadTags = async () => {
    try {
      const data = await getVideoTags(MOCK_VIDEO_ID);
      setTags(data);
    } catch (error) {
      console.error("Failed to load tags");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddTag = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newTime) {
      const tagData = {
        videoId: MOCK_VIDEO_ID,
        playerId: selectedPlayer,
        time: newTime,
        label: newLabel,
        createdAt: Date.now()
      };
      
      try {
        const savedTag = await addVideoTag(tagData);
        setTags([...tags, savedTag]);
        setNewTime('');
      } catch (error) {
        alert("Failed to save tag to database");
      }
    }
  };

  const [videoFile, setVideoFile] = useState<File | null>(null);

  const handleAutoAnalyze = async () => {
    if (!videoFile) {
      alert("Please select a video file first!");
      return;
    }
    
    setIsAutoAnalyzing(true);
    try {
      const formData = new FormData();
      formData.append('file', videoFile);
      
      const response = await fetch('/api/analyze-video', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.status === 'success' && data.results?.events) {
        // Save the real AI tags to database
        for (const t of data.results.events) {
          const tagToSave = {
            videoId: MOCK_VIDEO_ID,
            playerId: selectedPlayer,
            time: t.time,
            label: t.type.toLowerCase(),
            createdAt: Date.now()
          };
          const saved = await addVideoTag(tagToSave);
          setTags(prev => [...prev, saved]);
        }
      }
    } catch (error) {
      console.error("AI Analysis failed:", error);
      alert("Failed to analyze video. Is the Python backend running?");
    } finally {
      setIsAutoAnalyzing(false);
    }
  };

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1 className="title">Video Analysis & Highlights</h1>
      <p className="subtitle">Upload match footage and link manual timecodes to players.</p>

      <div className="glass-panel" style={{ marginTop: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <input 
            type="file" 
            accept="video/*" 
            onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
            style={{ color: 'white' }}
          />
          <select style={inputStyle}>
            <option>Link to Player: Andriy Yarmolenko</option>
            <option>Link to Player: Mykhailo Mudryk</option>
          </select>
          <button 
            className="btn-primary" 
            style={{ background: 'linear-gradient(to right, #8b5cf6, #3b82f6)', marginLeft: 'auto' }}
            onClick={handleAutoAnalyze}
            disabled={isAutoAnalyzing}
          >
            {isAutoAnalyzing ? 'Processing AI...' : '✨ Auto-Analyze Video (AI)'}
          </button>
        </div>
        
        <div style={{ width: '100%', height: '400px', backgroundColor: '#000', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: 'var(--text-muted)' }}>[ Video Player Instance ]</p>
        </div>

        <div style={{ marginTop: '2rem', borderTop: '1px solid var(--surface-border)', paddingTop: '2rem' }}>
          <h3>Manual Timecodes</h3>
          
          <form style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }} onSubmit={handleAddTag}>
            <input 
              type="text" 
              placeholder="00:23" 
              style={{...inputStyle, width: '100px'}} 
              value={newTime}
              onChange={e => setNewTime(e.target.value)}
              required
            />
            <select style={inputStyle} value={newLabel} onChange={e => setNewLabel(e.target.value)}>
              <option value="shot">Shot</option>
              <option value="pass">Pass</option>
              <option value="foul">Foul</option>
              <option value="highlight">Highlight</option>
            </select>
            <button type="submit" className="btn-primary">Add Tag</button>
          </form>

          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            {isLoading ? (
              <p style={{ color: 'var(--text-muted)' }}>Loading tags from Database...</p>
            ) : tags.length === 0 ? (
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>No timecodes added yet.</p>
            ) : (
              tags.map((tag, idx) => (
                <div key={idx} style={tagStyle}>
                  {tag.time} — {tag.label.toUpperCase()}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
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
};

const tagStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: 'rgba(59, 130, 246, 0.2)',
  border: '1px solid rgba(59, 130, 246, 0.5)',
  borderRadius: '20px',
  color: '#60a5fa',
  fontSize: '0.875rem'
};
