import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Automaten() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Onze automaten</h1>
        <p>Onze vendingmachines zijn robuust, betrouwbaar en speciaal ontworpen voor de winter.
           Je vindt er warme en koude snacks, energierepen, drankjes en meer. Alles cashless, snel en eenvoudig.</p>
      </main>
      <Footer />
    </>
  );
}