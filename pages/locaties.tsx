import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Locaties() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-6 max-w-6xl mx-auto space-y-8 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Locaties</h1>

        <p className="text-lg leading-relaxed mb-3">
          SnackTrack richt zich op unieke, drukbezochte plekken waar gemak het verschil maakt – en waar een goede snack precies op het juiste moment nodig is.
        </p>

        <p className="text-lg leading-relaxed mb-3">
          We starten in Oostenrijk, met focus op populaire skiliftlocaties en bergstations. Daar waar wintersporters onderweg zijn, willen wij klaarstaan met warme dranken, energierijke snacks en frisse verfrissingen – 24/7 beschikbaar, zonder wachtrijen of volle restaurants.
        </p>

        <p className="text-lg leading-relaxed mb-3">
          Op zoek naar een vendingoplossing op jouw locatie? We zijn op dit moment actief op zoek naar samenwerkingen in Oostenrijk, en staan ook open voor uitbreidingen richting Frankrijk en Zwitserland.
        </p>

        <p className="text-lg leading-relaxed mb-3">
          Wil je als locatiebeheerder, skigebied of horecapartner met ons in gesprek? Laat van je horen – wij denken graag mee over een oplossing op maat.
        </p>

        <p className="mt-8 text-lg leading-relaxed text-gray-700">
          Neem contact op via info@snacktrack.nl of het formulier op de contactpagina.
        </p>
      </main>
      <Footer />
    </div>
  )
}
