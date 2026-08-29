import Head from 'next/head'
import Header from '../components/Header'
import MatchCard from '../components/MatchCard'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function Home() {
  const { data: fixtures } = useSWR('/api/fixtures', fetcher, { fallbackData: [] })

  return (
    <div>
      <Head>
        <title>Sports Hub — Fixtures</title>
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto p-4 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold">Today's matches</h2>
          <div className="mt-4 grid gap-4">
            {fixtures && fixtures.length ? fixtures.map((m: any) => (
              <MatchCard key={m.id} match={m} />
            )) : <div className="text-gray-600">No fixtures available</div>}
          </div>
        </section>
      </main>
    </div>
  )
}
