import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p>Heb je vragen of wil je samenwerken?<br/>Mail ons op <a href="mailto:info@snacktrack.nl" className="text-blue-600">info@snacktrack.nl</a>.</p>
      </main>
      <Footer />
    </>
  );
}