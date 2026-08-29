// Simple in-memory fixtures API
import type { NextApiRequest, NextApiResponse } from 'next'

const fixtures = [
  { id: '1', home: 'Manchester United', away: 'Liverpool', time: '2026-09-01 16:00', league: 'Premier League', status: '' },
  { id: '2', home: 'Real Madrid', away: 'Barcelona', time: '2026-09-01 20:00', league: 'La Liga', status: 'LIVE' }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(fixtures)
}
