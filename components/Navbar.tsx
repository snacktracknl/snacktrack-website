import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      {/* Witte balk met logo, maar zelf kleinere hoogte */}
      <div className="bg-white shadow py-1.5 z-50 relative flex justify-center items-center" style={{ height: '130px' }}>
        <Image src="/images/logo.png" alt="SnackTrack logo" width={200} height={200} />
      </div>

      {/* Navigatie onder logo-balk, verder naar beneden op hero */}
      <nav className="absolute z-40 left-0 w-full mt-[1rem]">
        <ul className="flex justify-center gap-8 text-lg font-bold text-white drop-shadow-lg bg-black bg-opacity-10 py-2 px-4 rounded-md max-w-fit mx-auto">
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
