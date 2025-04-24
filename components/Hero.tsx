export default function Hero() {
  return (
    <div className="relative h-[75vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">Snack slimmer. Ride harder.</h1>
        <p className="mt-4 text-xl md:text-2xl">Altijd jouw favoriete snack bij de skilift</p>
      </div>
    </div>
  )
}
