import { collection, addDoc, getDocs, query, where, orderBy } from 'firebase/firestore';
import { db } from './client';

export interface VideoTag {
  id?: string;
  videoId: string;
  playerId: string;
  time: string;
  label: string;
  createdAt: number;
}

const TAGS_COLLECTION = 'video_tags';

export async function addVideoTag(tag: Omit<VideoTag, 'id'>) {
  try {
    const docRef = await addDoc(collection(db, TAGS_COLLECTION), tag);
    return { id: docRef.id, ...tag };
  } catch (error) {
    console.error("Error adding video tag: ", error);
    throw error;
  }
}

export async function getVideoTags(videoId: string): Promise<VideoTag[]> {
  try {
    const q = query(
      collection(db, TAGS_COLLECTION),
      where("videoId", "==", videoId),
      orderBy("createdAt", "asc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as VideoTag[];
  } catch (error) {
    console.error("Error getting video tags: ", error);
    throw error;
  }
}
