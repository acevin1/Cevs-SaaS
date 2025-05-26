
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white pt-20 overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-scale-in">
                Kein Schnickschnack.<br />
                <span className="text-red-500 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  Qualität
                </span>, wie ich sie<br />
                selbst erwarten würde.
              </h1>
              <div className="w-20 h-1 bg-red-500 animate-slide-in-right"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-300 animate-fade-in delay-300">
              <p className="hover:text-white transition-colors duration-300">
                Hi, ich bin <strong className="text-white">Max Müller</strong> – Webentwickler, Digitalberater und Social-Media-Analyst. 
                Seit 2,5 Jahren helfe ich lokalen Unternehmen, endlich online sichtbar zu werden – ehrlich, direkt und mit echtem Impact.
              </p>
              
              <p className="hover:text-white transition-colors duration-300">
                Du hast keinen Plan von Websites, aber willst digital durchstarten? Ich höre zu und entwickle mit dir eine Lösung, 
                die funktioniert – <strong className="text-red-500">ohne Fachchinesisch, ohne Verkaufsdruck</strong>.
              </p>
            </div>

            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 inline-flex items-center gap-2 group shadow-lg hover:shadow-red-500/25 hover:shadow-xl transform hover:scale-105 animate-fade-in delay-500"
            >
              Erzähl mir von deinem Projekt
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
          </div>

          <div className="relative animate-fade-in delay-700">
            <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105">
              <div className="w-full h-80 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500 rounded-xl flex items-center justify-center text-white text-lg font-semibold shadow-inner">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-red-500 rounded-full mx-auto flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">MM</span>
                  </div>
                  <div>Professionelles Foto</div>
                  <div className="text-sm text-gray-300">Max Müller</div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-white">Max Müller</h3>
                <p className="text-red-400">Webentwickler & Digitalberater</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-red-600 to-red-700 rounded-2xl z-0 opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
