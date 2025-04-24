import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative h-[75vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">SNACK SMARTER.<br />RIDE HARDER.</h1>
        <a href="#main" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded shadow">
          LEES MEER
        </a>
      </div>
    </div>
  )
}
