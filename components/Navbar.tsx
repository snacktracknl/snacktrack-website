import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      {/* Witte balk met logo */}
      <div className="bg-white shadow py-1.5 z-50 relative flex justify-between items-center" style={{ height: '130px' }}>
          {/* Logo in het midden */}
          <div className="flex justify-center w-full absolute left-0 right-0">
              <Image src="/images/logo.png" alt="SnackTrack logo" width={180} height={180} />
          </div>
      
          {/* Navigatie rechts */}
          <nav className="absolute right-6">
              <ul className="flex gap-6 text-lg font-bold text-[#003366]">
                  <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
                  <li><Link href="/over-ons" className="hover:text-orange-500">Over ons</Link></li>
                  <li><Link href="/automaten" className="hover:text-orange-500">Automaten</Link></li>
                  <li><Link href="/locaties" className="hover:text-orange-500">Locaties</Link></li>
                  <li><Link href="/contact" className="hover:text-orange-500">Contact</Link></li>
              </ul>
          </nav>
      </div>
    </>
  )
}
