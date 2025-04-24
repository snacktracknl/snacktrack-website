import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="p-6 space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-2">Waarom SnackTrack?</h2>
          <p>Onze automaten zijn gemaakt voor de sneeuw: robuust, verwarmd en 24/7 beschikbaar. Geen wachtrijen meer voor een snack op de piste!</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">Voor locaties</h2>
          <p>Beheerders van skiliften of skihutten kunnen eenvoudig extra service bieden en omzet genereren zonder personeel.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">Voor skiërs & snowboarders</h2>
          <p>Even een snelle snack of drankje zonder van je gear af te gaan? Wij staan er, direct naast de lift!</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Wat anderen zeggen</h2>
          <blockquote className="italic">"SnackTrack was een gamechanger voor onze skihut – klanten zijn enthousiast!"</blockquote>
          <blockquote className="italic mt-2">"Geen koude energierepen meer in mijn rugzak – ik pak gewoon wat uit de automaat!"</blockquote>
        </section>
      </main>
      <Footer />
    </>
  )
}