
import { ArrowRight } from 'lucide-react';
import DynamicBackground from './DynamicBackground';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-20">
      <DynamicBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-white">
              Kein Schnickschnack.
              <br />
              <span className="text-red-500 relative">
                Qualität
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-500 animate-slide-in-right"></div>
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
              Hi, ich bin <span className="text-white font-semibold">Max Müller</span> – Webentwickler und Digitalberater. 
              Seit 2,5 Jahren helfe ich lokalen Unternehmen dabei, digital sichtbar zu werden.
            </p>
          </div>

          <div className="space-y-8 animate-fade-in delay-500">
            <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-lg text-gray-200 leading-relaxed">
                Du willst digital durchstarten, aber hast keinen Plan von Websites? 
                <span className="text-red-400 font-medium"> Ich höre zu und entwickle mit dir eine Lösung, die funktioniert.</span>
              </p>
            </div>

            <button 
              onClick={scrollToContact}
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-flex items-center gap-3 group shadow-2xl hover:shadow-red-500/25 transform hover:scale-105"
            >
              Erzähl mir von deinem Projekt
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto animate-fade-in delay-700">
            <div className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-red-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-red-500">30M+</div>
              <div className="text-sm text-gray-400">Aufrufe</div>
            </div>
            <div className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-red-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-red-500">2.5</div>
              <div className="text-sm text-gray-400">Jahre</div>
            </div>
            <div className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-red-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-red-500">100%</div>
              <div className="text-sm text-gray-400">Ehrlich</div>
            </div>
            <div className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-red-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-red-500">∞</div>
              <div className="text-sm text-gray-400">Qualität</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
