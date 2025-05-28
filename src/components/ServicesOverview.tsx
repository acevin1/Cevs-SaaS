
import { Code, Smartphone, BarChart, Zap } from 'lucide-react';

interface ServicesOverviewProps {
  currentLanguage: 'de' | 'en';
}

const ServicesOverview = ({ currentLanguage }: ServicesOverviewProps) => {
  const content = {
    de: {
      title: "Was ich für dich tun kann",
      services: [
        {
          icon: Code,
          title: "Webentwicklung",
          description: "Moderne, schnelle und responsive Websites"
        },
        {
          icon: Smartphone,
          title: "Mobile Optimierung",
          description: "Perfekte Darstellung auf allen Geräten"
        },
        {
          icon: BarChart,
          title: "SEO & Analytics",
          description: "Bessere Sichtbarkeit in Suchmaschinen"
        },
        {
          icon: Zap,
          title: "Performance",
          description: "Blitzschnelle Ladezeiten für bessere UX"
        }
      ]
    },
    en: {
      title: "What I can do for you",
      services: [
        {
          icon: Code,
          title: "Web Development",
          description: "Modern, fast and responsive websites"
        },
        {
          icon: Smartphone,
          title: "Mobile Optimization",
          description: "Perfect display on all devices"
        },
        {
          icon: BarChart,
          title: "SEO & Analytics",
          description: "Better visibility in search engines"
        },
        {
          icon: Zap,
          title: "Performance",
          description: "Lightning-fast loading times for better UX"
        }
      ]
    }
  };

  const t = content[currentLanguage];

  return (
    <section className="py-20 bg-gray-50 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6">
                <service.icon size={48} className="text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
