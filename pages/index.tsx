import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main id="main" className="p-6 max-w-6xl mx-auto space-y-24 text-gray-800">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-2 text-blue-900">Voor Locaties</h2>
            <p className="text-lg leading-relaxed">
              Onze vendingmachines zijn speciaal ontworpen voor bergomgevingen. Ze zijn robuust, verwarmd en volledig cashless.
              Voor skihutten, liftstations of hotels is het een perfecte manier om extra omzet te genereren zonder extra personeel.
            </p>
            <p className="text-lg leading-relaxed">
              Laat jouw locatie nog waardevoller worden voor gasten met een 24/7 snackservice. Geen wachtrijen, geen personeel – wél tevreden wintersporters.
            </p>
          </div>
          <div>
            <img src="/images/vending.png" alt="Vending bij skihut" className="rounded shadow w-full max-w-md mx-auto" />
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img src="/images/skiers.jpg" alt="Skiërs met snack" className="rounded shadow w-full max-w-md mx-auto" />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl font-bold mb-2 text-blue-900">Voor Skiërs</h2>
            <p className="text-lg leading-relaxed">
              Je staat bij de gondel. Het is koud. Je hebt trek. Onze automaten staan er precies waar je ze nodig hebt.
            </p>
            <p className="text-lg leading-relaxed">
              Geen gedoe met je handschoenen, geen wachtrijen of pinpassen. Gewoon scannen, kiezen, snacken, en weer door!
              Een perfecte break zonder je skis uit te doen.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
