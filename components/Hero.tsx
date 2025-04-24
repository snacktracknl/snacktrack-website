
export default function Hero() {
  return (
    <div className="relative h-[60vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center flex-col text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">SnackTrack – snack slimmer op de piste</h1>
        <p className="mt-4 text-xl">Altijd jouw favoriete snack bij de skilift</p>
      </div>
    </div>
  )
}
