
import { Monitor, MapPin, Instagram, TrendingUp } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Monitor,
      title: "Website-Erstellung",
      description: "Individuelle Websites für Einzelunternehmer und kleine Unternehmen – keine Baukastensysteme."
    },
    {
      icon: MapPin,
      title: "Google-Einträge",
      description: "Optimiere deine lokale Sichtbarkeit mit professionellen Google Business Profilen."
    },
    {
      icon: Instagram,
      title: "Social-Media-Beratung",
      description: "Instagram-Strategien und Content-Tipps für mehr Reichweite und Engagement."
    },
    {
      icon: TrendingUp,
      title: "Trendanalysen & AI",
      description: "Nutze modernste AI-Tools für bessere Sichtbarkeit und smarte Content-Strategien."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Was ich für dich tun kann
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Individuelle Lösungen für deinen digitalen Erfolg – alles aus einer Hand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
