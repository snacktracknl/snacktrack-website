import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 text-white">
      <div className="flex flex-col items-center pt-4">
        <Image src="/images/logo.png" alt="SnackTrack logo" width={200} height={200} />
        <nav className="mt-4">
          <ul className="flex gap-6 text-lg font-extrabold tracking-wide">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/over-ons" className="hover:underline">Over ons</Link></li>
            <li><Link href="/automaten" className="hover:underline">Automaten</Link></li>
            <li><Link href="/locaties" className="hover:underline">Locaties</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
