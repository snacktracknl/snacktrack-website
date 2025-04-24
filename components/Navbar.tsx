
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="SnackTrack logo" width={40} height={40} />
        <span className="font-bold text-xl">SnackTrack</span>
      </div>
      <ul className="flex gap-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/over-ons">Over ons</Link></li>
        <li><Link href="/automaten">Automaten</Link></li>
        <li><Link href="/locaties">Locaties</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
