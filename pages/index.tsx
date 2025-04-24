import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welkom bij SnackTrack</h1>
        <p className="text-lg">Snack slimmer. Ride harder.</p>
      </main>
      <Footer />
    </>
  );
}