import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main id="main" className="p-6 max-w-5xl mx-auto space-y-20">
        <section>
          <h2 className="text-3xl font-bold mb-4">Voor Locaties</h2>
          <p className="text-lg text-gray-700">
            Onze automaten zijn een slimme toevoeging voor skihutten, liftstations en resorts. Ze genereren extra omzet zonder extra personeel en bieden 24/7 gemak aan bezoekers.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Voor Skiërs</h2>
          <p className="text-lg text-gray-700">
            Of je nu onderweg bent naar de volgende afdaling of net van de piste komt – met SnackTrack automaten pak je snel een warme of koude snack, zonder je gear uit te trekken.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Waar vind je ons?</h2>
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1lLkU6Eq-U_YFx6tiOAgKgDdcXxEvjB4&hl=en&ehbc=2E312F"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="rounded-md shadow"
            ></iframe>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Neem contact op</h2>
          <form action="https://formspree.io/f/yourformid" method="POST" className="space-y-4">
            <input type="text" name="name" placeholder="Naam" required className="w-full border border-gray-300 rounded p-3" />
            <input type="email" name="email" placeholder="E-mailadres" required className="w-full border border-gray-300 rounded p-3" />
            <textarea name="message" placeholder="Bericht" required rows="5" className="w-full border border-gray-300 rounded p-3"></textarea>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
              Verstuur
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}
