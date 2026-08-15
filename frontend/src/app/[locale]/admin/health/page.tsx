'use client';
import { useState, useEffect } from 'react';

export default function SystemHealthPage() {
  const [cpuLoad, setCpuLoad] = useState(65);
  const [ramLoad, setRamLoad] = useState(82);
  const [gpuLoad, setGpuLoad] = useState(45);
  
  // Simulate live metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuLoad(prev => Math.min(100, Math.max(0, prev + (Math.random() * 10 - 5))));
      setRamLoad(prev => Math.min(100, Math.max(0, prev + (Math.random() * 4 - 2))));
      setGpuLoad(prev => Math.min(100, Math.max(0, prev + (Math.random() * 20 - 10))));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container" style={{ padding: '2rem 0', fontFamily: 'monospace' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #334155', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ color: '#e2e8f0', fontSize: '2rem', letterSpacing: '-0.05em' }}>[ ROOT_ACCESS ] // SYS_HEALTH</h1>
          <p style={{ color: '#94a3b8' }}>Real-time server infrastructure and AI pipeline monitoring.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="/en/admin" style={{ background: '#1e293b', border: '1px solid #475569', color: '#e2e8f0', padding: '0.5rem 1rem', textDecoration: 'none', borderRadius: '4px' }}>BACK_TO_DASHBOARD</a>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* Core Services Status */}
        <div style={{ background: '#0f172a', border: '1px solid #334155', padding: '1.5rem', borderRadius: '8px' }}>
          <h2 style={{ color: '#e2e8f0', fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '1px solid #334155', paddingBottom: '0.5rem' }}>MICROSERVICES_STATUS</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#cbd5e1' }}>Next.js Frontend (Vercel)</span>
              <span style={{ color: '#4ade80', background: 'rgba(74, 222, 128, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>ONLINE (12ms ping)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#cbd5e1' }}>FastAPI Backend (GCP)</span>
              <span style={{ color: '#4ade80', background: 'rgba(74, 222, 128, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>ONLINE (45ms ping)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#cbd5e1' }}>Firebase Auth & Firestore</span>
              <span style={{ color: '#4ade80', background: 'rgba(74, 222, 128, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>ONLINE (8ms ping)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#cbd5e1' }}>YOLOv8 Video Pipeline (GPU Node)</span>
              <span style={{ color: '#f59e0b', background: 'rgba(245, 158, 11, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>HEAVY_LOAD (Queue: 14 vids)</span>
            </div>
          </div>
        </div>

        {/* Hardware Load */}
        <div style={{ background: '#0f172a', border: '1px solid #334155', padding: '1.5rem', borderRadius: '8px' }}>
          <h2 style={{ color: '#e2e8f0', fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '1px solid #334155', paddingBottom: '0.5rem' }}>HARDWARE_TELEMETRY</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* CPU */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: '#94a3b8' }}>CPU_USAGE (8 Cores)</span>
                <span style={{ color: cpuLoad > 85 ? '#ef4444' : '#4ade80' }}>{cpuLoad.toFixed(1)}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: '#1e293b', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${cpuLoad}%`, height: '100%', background: cpuLoad > 85 ? '#ef4444' : '#3b82f6', transition: 'width 0.5s ease' }}></div>
              </div>
            </div>

            {/* RAM */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: '#94a3b8' }}>RAM_USAGE (32GB Total)</span>
                <span style={{ color: ramLoad > 85 ? '#ef4444' : '#4ade80' }}>{ramLoad.toFixed(1)}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: '#1e293b', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${ramLoad}%`, height: '100%', background: ramLoad > 85 ? '#ef4444' : '#a855f7', transition: 'width 0.5s ease' }}></div>
              </div>
            </div>

            {/* GPU */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: '#94a3b8' }}>GPU_USAGE (NVIDIA T4)</span>
                <span style={{ color: gpuLoad > 85 ? '#ef4444' : '#4ade80' }}>{gpuLoad.toFixed(1)}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: '#1e293b', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${gpuLoad}%`, height: '100%', background: gpuLoad > 85 ? '#ef4444' : '#10b981', transition: 'width 0.5s ease' }}></div>
              </div>
            </div>

          </div>
        </div>

      </div>
      
      <div style={{ marginTop: '2rem', background: '#0f172a', border: '1px solid #334155', padding: '1.5rem', borderRadius: '8px' }}>
        <h2 style={{ color: '#e2e8f0', fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '1px solid #334155', paddingBottom: '0.5rem' }}>SYSTEM_LOGS</h2>
        <div style={{ fontFamily: 'monospace', color: '#94a3b8', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', height: '150px', overflowY: 'auto', background: '#020617', padding: '1rem', borderRadius: '4px', border: '1px solid #1e293b' }}>
          <div><span style={{ color: '#4ade80' }}>[OK]</span> 12:21:05 - Authenticated user usr_001 via Firebase.</div>
          <div><span style={{ color: '#4ade80' }}>[OK]</span> 12:21:45 - YOLOv8 model loaded into VRAM (1.2s).</div>
          <div><span style={{ color: '#38bdf8' }}>[INFO]</span> 12:22:10 - Processing video upload: shakhtar_match.mp4 (450MB)...</div>
          <div><span style={{ color: '#f59e0b' }}>[WARN]</span> 12:23:15 - High GPU latency detected. Auto-scaling worker nodes...</div>
          <div><span style={{ color: '#4ade80' }}>[OK]</span> 12:24:00 - Worker node provisioned. Processing queue stabilized.</div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ width: '8px', height: '15px', background: '#e2e8f0', animation: 'blink 1s step-end infinite' }}></span>
            <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
          </div>
        </div>
      </div>
    </div>
  );
}
