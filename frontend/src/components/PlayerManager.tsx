'use client';

import { useState, useEffect } from 'react';
import { Player, getPlayers, addPlayer, deletePlayer } from '@/lib/laravel/playerService';
import { useTranslations } from 'next-intl';

export default function PlayerManager() {
  const t = useTranslations('PlayerManager');
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      setLoading(true);
      const data = await getPlayers();
      setPlayers(data);
    } catch (error) {
      console.error("Firebase error, possibly missing keys:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deletePlayer(id);
      setPlayers(players.filter(p => p.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="glass-panel">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>{t('yourPlayers')}</h2>
      </div>

      {loading ? (
        <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>{t('loading')}</p>
      ) : players.length === 0 ? (
        <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>{t('noPlayers')}</p>
      ) : (
        <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
          {players.map(p => (
            <li key={p.id} style={{ padding: '1rem', borderBottom: '1px solid var(--surface-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{p.firstName} {p.lastName}</strong> - {p.position}
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Вік: {p.age} | Рейтинг: {p.rating}</div>
              </div>
              <button onClick={() => p.id && handleDelete(p.id)} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '0.25rem 0.5rem', borderRadius: '4px', cursor: 'pointer' }}>{t('delete')}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
