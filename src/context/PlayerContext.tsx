'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useAuth } from './AuthContext';

export interface Player {
  id: string;
  name: string;
  photoUrl: string;
  position?: string;
  number?: number;
  x?: number; // For chemistry board
  y?: number; // For chemistry board
}

interface PlayerContextType {
  players: Player[];
  addPlayer: (player: Omit<Player, 'id'>) => void;
  deletePlayer: (id: string) => void;
  updatePlayer: (id: string, updates: Partial<Player>) => void;
}

const defaultPlayers: Player[] = [
  { id: '1', name: 'M. Shaparenko', position: 'Midfielder', number: 10, photoUrl: 'https://ui-avatars.com/api/?name=Shaparenko&background=3b82f6&color=fff', x: 30, y: 40 },
  { id: '2', name: 'V. Brazhko', position: 'Midfielder', number: 6, photoUrl: 'https://ui-avatars.com/api/?name=Brazhko&background=3b82f6&color=fff', x: 70, y: 40 },
  { id: '3', name: 'A. Yarmolenko', position: 'Forward', number: 7, photoUrl: 'https://ui-avatars.com/api/?name=Yarmolenko&background=3b82f6&color=fff', x: 80, y: 70 },
  { id: '4', name: 'G. Bushchan', position: 'Goalkeeper', number: 1, photoUrl: 'https://ui-avatars.com/api/?name=Bushchan&background=10b981&color=fff', x: 50, y: 10 },
  { id: '5', name: 'O. Tymchyk', position: 'Defender', number: 24, photoUrl: 'https://ui-avatars.com/api/?name=Tymchyk&background=3b82f6&color=fff', x: 90, y: 25 },
  { id: '6', name: 'I. Zabarnyi', position: 'Defender', number: 13, photoUrl: 'https://ui-avatars.com/api/?name=Zabarnyi&background=3b82f6&color=fff', x: 65, y: 20 },
  { id: '7', name: 'M. Matviyenko', position: 'Defender', number: 22, photoUrl: 'https://ui-avatars.com/api/?name=Matviyenko&background=3b82f6&color=fff', x: 35, y: 20 },
  { id: '8', name: 'V. Mykolenko', position: 'Defender', number: 16, photoUrl: 'https://ui-avatars.com/api/?name=Mykolenko&background=3b82f6&color=fff', x: 10, y: 25 },
  { id: '9', name: 'T. Stepanenko', position: 'Midfielder', number: 21, photoUrl: 'https://ui-avatars.com/api/?name=Stepanenko&background=3b82f6&color=fff', x: 50, y: 35 },
  { id: '10', name: 'M. Mudryk', position: 'Forward', number: 10, photoUrl: 'https://ui-avatars.com/api/?name=Mudryk&background=3b82f6&color=fff', x: 20, y: 70 },
  { id: '11', name: 'A. Dovbyk', position: 'Forward', number: 11, photoUrl: 'https://ui-avatars.com/api/?name=Dovbyk&background=3b82f6&color=fff', x: 50, y: 85 }
];

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [players, setPlayers] = useState<Player[]>(defaultPlayers);
  const { token, user } = useAuth(); // Assume we have useAuth

  useEffect(() => {
    const fetchPlayers = async () => {
      if (token && user?.team_id) {
        try {
          const res = await fetch(`http://localhost:8000/api/players?team_id=${user.team_id}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          if (res.ok) {
            const data = await res.json();
            if (data.length > 0) {
              setPlayers(data);
            }
          }
        } catch (e) {
          console.error('Failed to fetch players', e);
        }
      }
    };
    fetchPlayers();
  }, [token, user]);

  const addPlayer = async (playerData: Omit<Player, 'id'>) => {
    const newPlayerTemp = {
      ...playerData,
      id: Math.random().toString(36).substring(2, 9),
      x: playerData.x ?? 50,
      y: playerData.y ?? 50
    };
    
    // Optimistic UI update
    setPlayers(prev => [...prev, newPlayerTemp]);

    // Save to API
    if (token) {
      try {
        await fetch('http://localhost:8000/api/players', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: newPlayerTemp.name,
            position: newPlayerTemp.position,
            number: newPlayerTemp.number,
            photoUrl: newPlayerTemp.photoUrl,
            team_id: user?.team_id
          })
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

  const deletePlayer = async (id: string) => {
    setPlayers(prev => prev.filter(p => p.id !== id));
    
    if (token) {
      fetch(`http://localhost:8000/api/players/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).catch(console.error);
    }
  };

  const updatePlayer = (id: string, updates: Partial<Player>) => {
    setPlayers(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
    // Optionally update player on API if coordinates change (might need debouncing)
  };

  return (
    <PlayerContext.Provider value={{ players, addPlayer, deletePlayer, updatePlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayers = () => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayers must be used within a PlayerProvider');
  }
  return context;
};
