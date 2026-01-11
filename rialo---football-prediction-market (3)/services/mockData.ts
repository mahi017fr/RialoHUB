
import { Match, LeaderboardEntry } from '../types';
import { IMAGE_ASSETS } from './imageAssets';

export const MOCK_MATCHES: Match[] = [
  {
    id: 'm1',
    homeTeam: { id: 't1', name: 'Liverpool', logo: IMAGE_ASSETS.TEAMS.LIVERPOOL },
    awayTeam: { id: 't2', name: 'Tottenham', logo: IMAGE_ASSETS.TEAMS.TOTTENHAM },
    kickOff: '2026-01-21T15:00:00Z',
    league: 'Premier League',
    odds: { home: 2.1, draw: 3.4, away: 1.8 }
  },
  {
    id: 'm2',
    homeTeam: { id: 't3', name: 'Real Madrid', logo: IMAGE_ASSETS.TEAMS.REAL_MADRID },
    awayTeam: { id: 't4', name: 'Sevilla', logo: IMAGE_ASSETS.TEAMS.SEVILLA },
    kickOff: '2026-01-22T20:00:00Z',
    league: 'La Liga',
    odds: { home: 1.9, draw: 3.6, away: 2.2 }
  },
  {
    id: 'm3',
    homeTeam: { id: 't5', name: 'Roma FC', logo: IMAGE_ASSETS.TEAMS.ROMA },
    awayTeam: { id: 't6', name: 'Juventus', logo: IMAGE_ASSETS.TEAMS.JUVENTUS },
    kickOff: '2026-01-27T17:30:00Z',
    league: 'Serie A',
    odds: { home: 1.4, draw: 4.2, away: 5.5 }
  },
  {
    id: 'm4',
    homeTeam: { id: 't7', name: 'Arsenal', logo: IMAGE_ASSETS.TEAMS.ARSENAL },
    awayTeam: { id: 't8', name: 'Everton', logo: IMAGE_ASSETS.TEAMS.EVERTON },
    kickOff: '2026-01-25T14:00:00Z',
    league: 'Premier League',
    odds: { home: 1.5, draw: 4.0, away: 6.5 }
  },
  {
    id: 'm5',
    homeTeam: { id: 't9', name: 'Barcelona', logo: IMAGE_ASSETS.TEAMS.BARCELONA },
    awayTeam: { id: 't10', name: 'Villarreal', logo: IMAGE_ASSETS.TEAMS.VILLARREAL },
    kickOff: '2026-01-21T19:00:00Z',
    league: 'La Liga',
    odds: { home: 1.7, draw: 3.8, away: 4.2 }
  },
  {
    id: 'm6',
    homeTeam: { id: 't11', name: 'Atletico', logo: IMAGE_ASSETS.TEAMS.ATLETICO },
    awayTeam: { id: 't12', name: 'Girona', logo: IMAGE_ASSETS.TEAMS.GIRONA },
    kickOff: '2026-01-29T21:00:00Z',
    league: 'La Liga',
    odds: { home: 1.8, draw: 3.5, away: 3.9 }
  }
];

export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { address: '0x71C...4f2', accuracy: 88, totalPoints: 1250, avatar: IMAGE_ASSETS.USER_AVATARS[0] },
  { address: '0x3aF...9e1', accuracy: 82, totalPoints: 1100, avatar: IMAGE_ASSETS.USER_AVATARS[1] },
  { address: '0x1bD...2c4', accuracy: 79, totalPoints: 980, avatar: IMAGE_ASSETS.USER_AVATARS[2] },
  { address: '0x9eA...7b3', accuracy: 75, totalPoints: 850, avatar: IMAGE_ASSETS.USER_AVATARS[3] },
  { address: '0x2dF...1a8', accuracy: 72, totalPoints: 720, avatar: IMAGE_ASSETS.USER_AVATARS[4] },
];
