
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  currentLanguage: 'de' | 'en';
}

const HeroSection = ({ currentLanguage }: HeroSectionProps) => {
  const content = {
    de: {
      greeting: "Hallo! Ich bin",
      name: "Max Müller",
      title: "Webentwickler & Digitalexperte",
      description: "Ich helfe lokalen Unternehmen dabei, ihre Online-Präsenz zu stärken und mehr Kunden zu gewinnen durch professionelle Webentwicklung und strategische Digitalberatung.",
      cta: "Projekt besprechen",
      imageAlt: "Max Müller - Webentwickler"
    },
    en: {
      greeting: "Hello! I'm",
      name: "Max Müller",
      title: "Web Developer & Digital Expert",
      description: "I help local businesses strengthen their online presence and attract more customers through professional web development and strategic digital consulting.",
      cta: "Discuss Project",
      imageAlt: "Max Müller - Web Developer"
    }
  };

  const t = content[currentLanguage];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative z-10">
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-lg text-gray-800 font-medium">
                {t.greeting}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight drop-shadow-sm">
                {t.name}
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-orange-600 font-semibold drop-shadow-sm">
                {t.title}
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
              {t.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToContact}
                className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg"
              >
                {t.cta}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-br from-orange-100 to-orange-200 border-4 border-orange-300 flex items-center justify-center shadow-2xl overflow-hidden">
                <div className="text-center text-gray-600">
                  <div className="w-24 h-24 mx-auto mb-4 bg-orange-300 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">{t.imageAlt}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {currentLanguage === 'de' ? 'Foto hier einfügen' : 'Insert photo here'}
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-500 rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
