import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="p-6 max-w-4xl mx-auto space-y-16">
        <section>
          <h2 className="text-3xl font-bold mb-4">Waarom SnackTrack?</h2>
          <p className="text-lg">Onze automaten zijn gebouwd voor sneeuw en kou. Geen wachtrijen meer, geen gedoe met pinpassen of muntjes: gewoon snacken, direct op de piste.</p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Voor skiërs & snowboarders</h2>
          <p className="text-lg">Je bent onderweg, het is koud en je hebt trek. Onze slimme automaten staan direct bij de skilift en bieden warme én koude snacks, zonder je gear uit te hoeven doen.</p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Voor locaties & exploitanten</h2>
          <p className="text-lg">Bied extra service zonder extra personeel. Onze vendingmachines zijn snel, betrouwbaar en volledig cashless – perfect voor skihutten, liften en resorts.</p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Wat anderen zeggen</h2>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">"Onze klanten zijn dol op de snelheid en het gemak van SnackTrack. En wij ook!" – Skihut Tirol</blockquote>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mt-4">"Eindelijk warme snacks zónder van de piste af te hoeven!" – Wintersporter.nl</blockquote>
        </section>
      </main>
      <Footer />
    </>
  )
}
