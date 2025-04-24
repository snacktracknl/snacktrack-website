import { useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verstuur formulier naar Formspree
    fetch('https://formspree.io/f/movdqzoz', { // vervang 'mwknejzv' met je eigen Form ID
      method: 'POST',
      body: new FormData(e.target),
    })
      .then((response) => {
        if (response.ok) {
          setStatus('Bericht succesvol verstuurd!');
        } else {
          setStatus('Er is een fout opgetreden, probeer het opnieuw.');
        }
      })
      .catch(() => setStatus('Er is een fout opgetreden, probeer het opnieuw.'));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-6 max-w-6xl mx-auto space-y-8 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Neem contact op</h1>

        <p className="text-lg leading-relaxed mb-4">
          Heb jij een locatie in Oostenrijk (of daarbuiten) waar een slimme vendingoplossing perfect zou passen? Of ben je benieuwd naar de mogelijkheden van SnackTrack voor jouw skigebied, accommodatie of bergstation?
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Wij staan open voor samenwerkingen en denken graag met je mee.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Stuur ons een bericht, bel ons of plan direct een kennismakingsgesprek in. Je spreekt altijd direct met ons – Marenne of Jim.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          📧 E-mail: <a href="mailto:info@snacktrack.nl" className="text-blue-600 hover:text-orange-500">info@snacktrack.nl</a>
        </p>

        <p className="text-lg leading-relaxed mb-4">
          📞 Telefoon: <a href="tel:+31612345678" className="text-blue-600 hover:text-orange-500">+31 6 12345678</a>
        </p>

        <p className="text-lg leading-relaxed mb-8">
          📍 Gevestigd in Rotterdam – actief in de Alpen
        </p>

        <h2 className="text-3xl font-bold mb-4 text-blue-900">Of gebruik het contactformulier hieronder. We reageren binnen 24 uur.</h2>

        {/* Contactformulier */}
        <form onSubmit={handleSubmit} method="POST" action="https://formspree.io/f/mwknejzv" className="space-y-4">  {/* Voeg je Form ID hier in */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium">Naam</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-3 border border-gray-300 rounded" 
              required 
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium">E-mail</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-3 border border-gray-300 rounded" 
              required 
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium">Bericht</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full p-3 border border-gray-300 rounded" 
              rows="6" 
              required 
            />
          </div>

          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
          >
            Verstuur
          </button>
        </form>

        {/* Statusbericht */}
        {status && <p className="mt-4 text-lg">{status}</p>}
      </main>
      <Footer />
    </div>
  );
}
