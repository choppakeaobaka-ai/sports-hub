import type { NextApiRequest, NextApiResponse } from 'next'

const leagues = [
  { id: 'pl', name: 'Premier League' },
  { id: 'll', name: 'La Liga' },
  { id: 'sa', name: 'Serie A' }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(leagues)
}
