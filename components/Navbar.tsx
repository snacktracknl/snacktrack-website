import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-100 p-4 shadow">
      <ul className="flex gap-4 justify-center">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/over-ons">Over ons</Link></li>
        <li><Link href="/automaten">Automaten</Link></li>
        <li><Link href="/locaties">Locaties</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}