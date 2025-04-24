import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function OverOns() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-6 max-w-6xl mx-auto space-y-4 text-gray-800">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">Over ons</h1>

        <p className="text-lg leading-relaxed mb-3">
          Wij zijn Marenne en Jim – partners in het leven én in de vending business. Vanuit Rotterdam bouwen we samen aan SnackTrack: slimme vendingoplossingen voor mensen die onderweg zijn, honger hebben en geen zin hebben in gedoe.
        </p>

        <p className="text-lg leading-relaxed mb-3">
          Het idee voor SnackTrack ontstond tijdens een skivakantie. We stonden bij de gondel, het was lunchtijd en we hadden niets bij ons. De restaurants zaten vol en de rijen waren lang. We vroegen ons af waarom er op zo’n drukke plek geen eenvoudige oplossing was voor een snelle, goede snack of iets warms te drinken.
        </p>

        <p className="text-lg leading-relaxed mb-3">
          Dat simpele moment zette iets in gang. Terug in Nederland besloten we het zelf te gaan doen.
        </p>

        <p className="text-lg leading-relaxed mb-3">
          Als stel combineren we onze liefde voor reizen en eten met een gedeelde ondernemersdrive. We geloven dat gemak, kwaliteit en slimme technologie hand in hand kunnen gaan – en dat een vendingmachine véél meer kan zijn dan een ijzeren kast met blikjes fris.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4 text-blue-900">Waar wij voor staan:</h2>

        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
          <li><strong>Gebruiksgemak:</strong> Intuïtieve, cashless automaten die altijd toegankelijk zijn, ook met skihandschoenen aan.</li>
          <li><strong>Betrouwbaarheid & kwaliteit:</strong> Goed gevulde machines, alleen met producten waar we zelf enthousiast van worden.</li>
          <li><strong>Innovatie:</strong> Slim voorraadbeheer, realtime storingsmeldingen en mogelijkheden voor lokale selectie.</li>
          <li><strong>Servicegerichtheid:</strong> Geen klantendienst op afstand – je spreekt gewoon met ons, Marenne en Jim.</li>
        </ul>

        <p className="mt-8 text-lg leading-relaxed text-gray-700">
          SnackTrack is ons avontuur. Een bedrijf dat we met zorg, lef en een flinke dosis Rotterdamse mentaliteit opbouwen. Omdat een goede snack op het juiste moment echt het verschil kan maken.
        </p>
      </main>
      <Footer />
    </div>
  )
}
