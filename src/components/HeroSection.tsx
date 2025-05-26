
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Kein Schnickschnack.<br />
                <span className="text-orange-500">Qualität</span>, wie ich sie<br />
                selbst erwarten würde.
              </h1>
              <div className="w-20 h-1 bg-orange-500"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Hi, ich bin <strong className="text-white">Max Müller</strong> – Webentwickler, Digitalberater und Social-Media-Analyst. 
                Seit 2,5 Jahren helfe ich lokalen Unternehmen, endlich online sichtbar zu werden – ehrlich, direkt und mit echtem Impact.
              </p>
              
              <p>
                Du hast keinen Plan von Websites, aber willst digital durchstarten? Ich höre zu und entwickle mit dir eine Lösung, 
                die funktioniert – <strong className="text-orange-500">ohne Fachchinesisch, ohne Verkaufsdruck</strong>.
              </p>
            </div>

            <button 
              onClick={scrollToContact}
              className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-all duration-300 inline-flex items-center gap-2 group"
            >
              Erzähl mir von deinem Projekt
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" 
                alt="Max Müller - Webentwickler" 
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">Max Müller</h3>
                <p className="text-gray-600">Webentwickler & Digitalberater</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-orange-500 rounded-2xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
