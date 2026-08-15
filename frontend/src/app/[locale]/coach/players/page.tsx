'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePlayers } from '@/context/PlayerContext';

export default function PlayersPage() {
  const router = useRouter();
  const { players, addPlayer, deletePlayer } = usePlayers();
  const [search, setSearch] = useState('');
  const [filterPos, setFilterPos] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const filteredPlayers = players
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter(p => filterPos ? p.position === filterPos : true)
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleDelete = (id: string) => {
    if (confirm('Ви впевнені, що хочете видалити цього гравця?')) {
      deletePlayer(id);
    }
  };

  const handleAddSubmit = (e: any) => {
    e.preventDefault();
    const newPlayer = {
      name: `${e.target.firstName.value} ${e.target.lastName.value}`,
      position: e.target.position.value,
      number: parseInt(e.target.number.value) || 0,
      photoUrl: `https://ui-avatars.com/api/?name=${e.target.firstName.value}+${e.target.lastName.value}&background=3b82f6&color=fff`,
    };
    addPlayer(newPlayer);
    setShowAddForm(false);
  };

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 className="title" style={{ marginBottom: 0 }}>Мої Гравці</h1>
        <button className="btn-primary" onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? 'Скасувати' : '+ Додати Гравця'}
        </button>
      </div>

      {showAddForm && (
        <div className="glass-panel" style={{ marginBottom: '2rem' }}>
          <h2>Додати Нового Гравця</h2>
          <form style={{ display: 'grid', gap: '1rem', marginTop: '1rem', maxWidth: '500px' }} onSubmit={handleAddSubmit}>
            <input type="text" name="firstName" placeholder="Ім'я" style={inputStyle} required />
            <input type="text" name="lastName" placeholder="Прізвище" style={inputStyle} required />
            <select name="position" style={inputStyle} required>
              <option value="">Оберіть позицію...</option>
              <option value="Forward">Нападник</option>
              <option value="Midfielder">Півзахисник</option>
              <option value="Defender">Захисник</option>
              <option value="Goalkeeper">Воротар</option>
            </select>
            <input type="number" name="number" placeholder="Номер футболки" style={inputStyle} required />
            <button type="submit" className="btn-primary">Зберегти Гравця</button>
          </form>
        </div>
      )}

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="🔍 Пошук за іменем..."
          style={{...inputStyle, flex: 1, minWidth: '200px'}}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select style={inputStyle} value={filterPos} onChange={e => setFilterPos(e.target.value)}>
          <option value="">Усі позиції</option>
          <option value="Forward">Нападники</option>
          <option value="Midfielder">Півзахисники</option>
          <option value="Defender">Захисники</option>
          <option value="Goalkeeper">Воротарі</option>
        </select>
      </div>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {filteredPlayers.length === 0 ? (
          <div className="glass-panel"><p style={{ color: 'var(--text-muted)' }}>Гравців не знайдено.</p></div>
        ) : (
          filteredPlayers.map(p => (
            <div key={p.id} className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={p.photoUrl} alt={p.name} style={{ width: 50, height: 50, borderRadius: '50%' }} />
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)' }}>{p.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{p.position} • Футболка #{p.number}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <button className="btn-primary" style={{ backgroundColor: 'rgba(248, 113, 113, 0.2)', color: '#f87171', padding: '0.5rem 1rem' }} onClick={() => handleDelete(p.id)}>Видалити</button>
              </div>
            </div>
          ))
        )}
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
