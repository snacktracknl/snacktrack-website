import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      {/* Compacte witte balk met logo */}
      <div className="bg-white shadow py-1 z-50 relative">
        <div className="flex justify-center">
          <Image src="/images/logo.png" alt="SnackTrack logo" width={200} height={200} />
        </div>
      </div>

      {/* Navigatie bovenop hero-afbeelding */}
      <nav className="absolute top-4 left-0 w-full z-40 text-white">
        <ul className="flex justify-center gap-6 text-lg font-bold tracking-wide drop-shadow-lg">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/over-ons" className="hover:underline">Over ons</Link></li>
          <li><Link href="/automaten" className="hover:underline">Automaten</Link></li>
          <li><Link href="/locaties" className="hover:underline">Locaties</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}
