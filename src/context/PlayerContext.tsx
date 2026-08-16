'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

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
  { id: '1', name: 'M. Shaparenko', position: 'Midfielder', number: 10, photoUrl: 'https://ui-avatars.com/api/?name=Shaparenko&background=3b82f6&color=fff', x: 20, y: 20 },
  { id: '2', name: 'V. Brazhko', position: 'Midfielder', number: 6, photoUrl: 'https://ui-avatars.com/api/?name=Brazhko&background=3b82f6&color=fff', x: 80, y: 20 },
  { id: '3', name: 'A. Yarmolenko', position: 'Forward', number: 7, photoUrl: 'https://ui-avatars.com/api/?name=Yarmolenko&background=3b82f6&color=fff', x: 50, y: 80 }
];

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [players, setPlayers] = useState<Player[]>(defaultPlayers);

  const addPlayer = (playerData: Omit<Player, 'id'>) => {
    const newPlayer = {
      ...playerData,
      id: Math.random().toString(36).substring(2, 9),
      x: playerData.x ?? 50,
      y: playerData.y ?? 50
    };
    setPlayers(prev => [...prev, newPlayer]);
  };

  const deletePlayer = (id: string) => {
    setPlayers(prev => prev.filter(p => p.id !== id));
  };

  const updatePlayer = (id: string, updates: Partial<Player>) => {
    setPlayers(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
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
