import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from './client';

export interface Player {
  id?: string;
  firstName: string;
  lastName: string;
  position: string;
  age: number;
  rating: number;
}

const PLAYERS_COLLECTION = 'players';

// Fallback in-memory storage if Firebase is not configured
let mockPlayers: Player[] = [];

// Helper to check if Firebase is configured
const isFirebaseConfigured = () => {
  return process.env.NEXT_PUBLIC_FIREBASE_API_KEY && process.env.NEXT_PUBLIC_FIREBASE_API_KEY.length > 0;
};

export async function addPlayer(player: Omit<Player, 'id'>) {
  if (!isFirebaseConfigured()) {
    const newPlayer = { id: Math.random().toString(36).substr(2, 9), ...player };
    mockPlayers.push(newPlayer);
    return newPlayer;
  }
  
  try {
    const docRef = await addDoc(collection(db, PLAYERS_COLLECTION), player);
    return { id: docRef.id, ...player };
  } catch (error) {
    console.error("Error adding player: ", error);
    throw error;
  }
}

export async function getPlayers(): Promise<Player[]> {
  if (!isFirebaseConfigured()) {
    return [...mockPlayers];
  }
  
  try {
    const querySnapshot = await getDocs(collection(db, PLAYERS_COLLECTION));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Player[];
  } catch (error) {
    console.error("Error getting players: ", error);
    throw error;
  }
}

export async function deletePlayer(id: string) {
  if (!isFirebaseConfigured()) {
    mockPlayers = mockPlayers.filter(p => p.id !== id);
    return;
  }
  
  try {
    await deleteDoc(doc(db, PLAYERS_COLLECTION, id));
  } catch (error) {
    console.error("Error deleting player: ", error);
    throw error;
  }
}
