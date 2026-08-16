'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();
  const t = useTranslations(); // Assuming translations exist or fallback to english strings in code

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await res.json();
      login(data.access_token, data.user);
      router.push('/en/coach'); // Redirect to dashboard
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="container" style={{ padding: '2rem 0', display: 'flex', justifyContent: 'center' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '400px' }}>
        <h1 className="title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Login</h1>
        {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              className="input-field" 
              required
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem', borderRadius: '4px' }}
            />
          </div>
          <div>
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              className="input-field" 
              required
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem', borderRadius: '4px' }}
            />
          </div>
          <button type="submit" className="btn-primary" style={{ padding: '0.5rem' }}>Login</button>
        </form>
      </div>
    </div>
  );
}
