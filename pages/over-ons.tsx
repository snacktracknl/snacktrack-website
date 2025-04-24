import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function OverOns() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Over ons</h1>
        <p>Wij zijn Marenne & Jim, twee avontuurlijke ondernemers met een passie voor bergen én gemak.
           Met SnackTrack willen we de manier waarop je onderweg snackt vernieuwen – met slimme automaten op skilocaties.</p>
      </main>
      <Footer />
    </>
  );
}