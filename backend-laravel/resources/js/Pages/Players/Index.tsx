import React from 'react';

interface Player {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  rating: number;
}

interface Props {
  players: Player[];
}

export default function Index({ players }: Props) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Список гравців (Laravel Inertia)</h1>
      <ul>
        {players.map(p => (
          <li key={p.id}>
            <strong>{p.firstName} {p.lastName}</strong> - {p.position} ({p.rating})
          </li>
        ))}
      </ul>
    </div>
  );
}
