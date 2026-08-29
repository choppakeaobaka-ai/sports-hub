type Match = {
  id: string
  home: string
n  away: string
  time: string
  league: string
  status?: string
}

export default function MatchCard({ match }: { match: Match }) {
  return (
    <div className="bg-white p-4 rounded shadow flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-500">{match.league}</div>
        <div className="text-lg font-medium">{match.home} vs {match.away}</div>
        <div className="text-sm text-gray-600">{match.time}</div>
      </div>
      <div className="text-right">
        {match.status ? <div className="text-red-500">{match.status}</div> : <div className="text-sm text-gray-500">Not started</div>}
      </div>
    </div>
  )
}
