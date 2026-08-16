'use client';

import { useState } from 'react';
import { usePlayers } from '@/context/PlayerContext';
import { useTranslations } from 'next-intl';

export default function PlayerManager() {
  const t = useTranslations('PlayerManager');
  const { players, deletePlayer, addPlayer } = usePlayers();
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState('Динамо Київ');

  const handleAddSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newPlayer = {
      name: `${formData.get('firstName')} ${formData.get('lastName')}`,
      position: formData.get('position') as string,
      number: parseInt(formData.get('number') as string) || 0,
      photoUrl: `https://ui-avatars.com/api/?name=${formData.get('firstName')}+${formData.get('lastName')}&background=3b82f6&color=fff`,
      team: selectedTeam,
    };
    addPlayer(newPlayer);
    setShowAddForm(false);
  };

  const filteredPlayers = players.filter(p => !p.team || p.team === selectedTeam);

  return (
    <div className="glass-panel" style={{ marginTop: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <h2>{t('yourPlayers')}</h2>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <select 
            value={selectedTeam} 
            onChange={(e) => setSelectedTeam(e.target.value)}
            style={{
              padding: '0.5rem',
              borderRadius: '8px',
              border: '1px solid var(--surface-border)',
              background: 'rgba(0,0,0,0.2)',
              color: 'white',
              outline: 'none',
            }}
          >
            <option value="Динамо Київ">Динамо Київ</option>
            <option value="Шахтар Донецьк">Шахтар Донецьк</option>
            <option value="Збірна України">Збірна України</option>
          </select>
          <button 
            className="btn-primary" 
            onClick={() => setShowAddForm(!showAddForm)}
          >
            {showAddForm ? t('cancel') : t('addPlayer')}
          </button>
        </div>
      </div>

      {showAddForm && (
        <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
          <form style={{ display: 'grid', gap: '1rem', maxWidth: '500px' }} onSubmit={handleAddSubmit}>
            <input type="text" name="firstName" placeholder={t('firstName')} style={inputStyle} required />
            <input type="text" name="lastName" placeholder={t('lastName')} style={inputStyle} required />
            <select name="position" style={inputStyle} required>
              <option value="">{t('position')}...</option>
              <option value="Forward">Нападник (Forward)</option>
              <option value="Midfielder">Півзахисник (Midfielder)</option>
              <option value="Defender">Захисник (Defender)</option>
              <option value="Goalkeeper">Воротар (Goalkeeper)</option>
            </select>
            <input type="number" name="number" placeholder="Номер футболки" style={inputStyle} required />
            <button type="submit" className="btn-primary">{t('save')}</button>
          </form>
        </div>
      )}

      {filteredPlayers.length === 0 ? (
        <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>{t('noPlayers')}</p>
      ) : (
        <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
          {filteredPlayers.map(p => (
            <li key={p.id} style={{ padding: '1rem', borderBottom: '1px solid var(--surface-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={p.photoUrl} alt={p.name} style={{ width: 40, height: 40, borderRadius: '50%' }} />
                <div>
                  <strong>{p.name}</strong> - {p.position}
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Футболка #{p.number || 'N/A'}</div>
                </div>
              </div>
              <button onClick={() => p.id && deletePlayer(String(p.id))} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '0.25rem 0.5rem', borderRadius: '4px', cursor: 'pointer' }}>{t('delete')}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const inputStyle = {
  padding: '0.75rem',
  borderRadius: '8px',
  border: '1px solid var(--surface-border)',
  background: 'rgba(0,0,0,0.4)',
  color: 'white',
  fontSize: '1rem',
  outline: 'none',
};
