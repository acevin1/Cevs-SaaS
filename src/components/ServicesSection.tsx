
import { Code, Instagram, MapPin, Brain, CheckCircle } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Website-Erstellung",
      description: "Professionelle Websites für Einzelunternehmer, kleine Läden und Dienstleister",
      features: [
        "Individuell entwickelt – keine Baukastensysteme",
        "Responsive Design für alle Geräte",
        "SEO-optimiert für bessere Sichtbarkeit",
        "Wartung und Support inklusive"
      ]
    },
    {
      icon: Instagram,
      title: "Social-Media-Grundaufbau",
      description: "Strategischer Aufbau und Optimierung deiner Social-Media-Präsenz",
      features: [
        "Instagram-Firmenprofile einrichten",
        "Content-Strategien entwickeln",
        "Trendanalysen für virale Inhalte",
        "Reels/Shorts-Konzepte erstellen"
      ]
    },
    {
      icon: MapPin,
      title: "Google Business / Maps",
      description: "Lokale Sichtbarkeit maximieren und Kunden direkt erreichen",
      features: [
        "Google Business Profil optimieren",
        "Bewertungsmanagement",
        "Lokale SEO-Strategien",
        "Maps-Integration für bessere Auffindbarkeit"
      ]
    },
    {
      icon: Brain,
      title: "Individuelle Beratung mit AI",
      description: "Modernste AI-Tools für smarte Digitalstrategien",
      features: [
        "AI-gestützte Content-Erstellung",
        "Automatisierte Trendanalysen",
        "Personalisierte Marketing-Strategien",
        "Designhilfe mit KI-Tools"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900 text-white relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Meine <span className="text-red-500">Leistungen</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Alles individuell abgestimmt auf deine Bedürfnisse – keine Standard-Pakete, sondern maßgeschneiderte Lösungen.
          </p>
          <div className="bg-red-600/20 border border-red-600 rounded-lg p-4 inline-block">
            <p className="text-red-300 font-semibold">
              🛠️ Preise auf Anfrage – alles individuell. Klar und transparent.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-red-500 transition-colors duration-300">
              <div className="flex items-start gap-4 mb-6">
                <service.icon className="w-12 h-12 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
