import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Locaties() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Locaties</h1>
        <p>Binnenkort vind je onze eerste SnackTrack automaten bij populaire skiliften in Oostenrijk, Frankrijk en Zwitserland.
           Ben je eigenaar van een locatie? Neem contact op voor samenwerking!</p>
      </main>
      <Footer />
    </>
  );
}