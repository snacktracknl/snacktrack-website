import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      {/* Witte balk met logo */}
      <div className="bg-white shadow py-0 z-50 relative">
        <div className="flex justify-center">
          <Image src="/images/logo.png" alt="SnackTrack logo" width={200} height={200} />
        </div>
      </div>

      {/* Zichtbare navigatie bovenop hero-afbeelding */}
      <nav className="absolute top-6 left-0 w-full z-50">
        <ul className="flex justify-center gap-8 text-lg font-bold text-white drop-shadow-md bg-black bg-opacity-10 py-2 px-4 rounded-md max-w-fit mx-auto">
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
