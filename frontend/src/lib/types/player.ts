export interface Player {
  id?: string;
  coachId: string;
  firstName: string;
  lastName: string;
  position: string;
  team: string;
  dateOfBirth: string;
  heightCm?: number;
  weightKg?: number;
  createdAt: number;
  updatedAt: number;
}

export interface MatchAnalysis {
  id?: string;
  playerId: string;
  matchId: string;
  date: string;
  passes: number;
  shots: number;
  errors: number;
  topSpeedKmh: number;
  distanceCoveredKm: number;
  videoUrl?: string;
  heatmapUrl?: string;
}
