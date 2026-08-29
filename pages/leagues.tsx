import Head from 'next/head'
import Header from '../components/Header'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function Leagues() {
  const { data: leagues } = useSWR('/api/leagues', fetcher, { fallbackData: [] })

  return (
    <div>
      <Head>
        <title>Sports Hub — Leagues</title>
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-semibold">Leagues</h2>
        <ul className="mt-4 space-y-2">
          {leagues.map((l: any) => (
            <li key={l.id} className="bg-white p-3 rounded shadow">{l.name}</li>
          ))}
        </ul>
      </main>
    </div>
  )
}
