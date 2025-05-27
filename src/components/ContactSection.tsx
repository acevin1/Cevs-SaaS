
import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
    callback: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('Vielen Dank für deine Nachricht! Ich melde mich innerhalb von 24h bei dir.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Lass uns über dein <span className="text-red-500">Projekt</span> sprechen
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ich antworte dir innerhalb von 24h – versprochen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Direkt kontaktieren</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-red-500" />
                  <span className="text-lg">max.mueller@webdev-pro.de</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-red-500" />
                  <span className="text-lg">+49 123 456 7890</span>
                </div>
                <div className="flex items-center gap-4">
                  <MessageCircle className="w-6 h-6 text-red-500" />
                  <span className="text-lg">WhatsApp Business verfügbar</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h4 className="text-xl font-bold mb-4 text-red-500">Warum mit mir arbeiten?</h4>
              <ul className="space-y-3 text-gray-300">
                <li>✓ Kostenlose Erstberatung (30 Min.)</li>
                <li>✓ Transparente Preisgestaltung</li>
                <li>✓ Schnelle Kommunikation</li>
                <li>✓ Nachbetreuung inklusive</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Dein Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="deine@email.de"
                />
              </div>

              <div>
                <label htmlFor="topic" className="block text-sm font-semibold mb-2">
                  Thema
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="website">Website-Erstellung</option>
                  <option value="social-media">Social Media</option>
                  <option value="google">Google-Eintrag</option>
                  <option value="consulting">Beratung</option>
                  <option value="general">Allgemein</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Erzähl mir von deinem Projekt..."
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="callback"
                  name="callback"
                  checked={formData.callback}
                  onChange={handleChange}
                  className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <label htmlFor="callback" className="text-sm">
                  Ich wünsche einen Rückruf
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center justify-center gap-2 group"
              >
                Nachricht senden
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
