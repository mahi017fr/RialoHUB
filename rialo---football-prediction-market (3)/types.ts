
export type PredictionChoice = 'HOME' | 'DRAW' | 'AWAY';

export interface Team {
  id: string;
  name: string;
  logo: string;
}

export interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  kickOff: string;
  odds: {
    home: number;
    draw: number;
    away: number;
  };
  league: string;
}

export interface Prediction {
  id: string;
  matchId: string;
  choice: PredictionChoice;
  amount: number;
  timestamp: number;
  status: 'PENDING' | 'WON' | 'LOST';
}

export interface UserStats {
  address: string;
  balance: number;
  winRate: number;
  totalPredictions: number;
  rank: number;
}

export interface LeaderboardEntry {
  address: string;
  accuracy: number;
  totalPoints: number;
  avatar: string;
}

// Extend global window for MetaMask
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (...args: any[]) => void) => void;
      removeListener: (event: string, callback: (...args: any[]) => void) => void;
    };
  }
}
