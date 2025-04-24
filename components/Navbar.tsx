import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full text-center py-6 bg-white shadow">
      <div className="flex justify-center">
        <Image src="/images/logo.png" alt="SnackTrack logo" width={100} height={100} />
      </div>
      <nav className="mt-4">
        <ul className="flex justify-center gap-6 text-sm font-medium text-gray-700">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/over-ons">Over ons</Link></li>
          <li><Link href="/automaten">Automaten</Link></li>
          <li><Link href="/locaties">Locaties</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
