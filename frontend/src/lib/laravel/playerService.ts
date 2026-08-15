export interface Player {
  id?: string | number;
  firstName: string;
  lastName: string;
  name?: string;
  position: string;
  number: number;
  age: number;
  rating: number;
  photoUrl: string;
}

const API_URL = 'http://localhost:8000/api';

export const getPlayers = async (): Promise<Player[]> => {
  const response = await fetch(`${API_URL}/players`);
  if (!response.ok) throw new Error('Failed to fetch players');
  return response.json();
};

export const addPlayer = async (player: Player): Promise<Player> => {
  const response = await fetch(`${API_URL}/players`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(player),
  });
  if (!response.ok) throw new Error('Failed to add player');
  return response.json();
};

export const deletePlayer = async (id: string | number): Promise<void> => {
  const response = await fetch(`${API_URL}/players/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete player');
};
