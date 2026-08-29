import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Sports Hub</h1>
        <nav className="space-x-4">
          <Link href="/">Fixtures</Link>
          <Link href="/leagues">Leagues</Link>
          <Link href="/favorites">Favourites</Link>
        </nav>
      </div>
    </header>
  )
}
