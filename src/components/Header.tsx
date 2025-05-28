
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentLanguage: 'de' | 'en';
}

const Header = ({ currentLanguage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const content = {
    de: {
      home: "Home",
      about: "Über mich",
      services: "Leistungen",
      results: "Ergebnisse",
      contact: "Kontakt"
    },
    en: {
      home: "Home",
      about: "About me",
      services: "Services",
      results: "Results",
      contact: "Contact"
    }
  };

  const t = content[currentLanguage];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">
            WebDev Pro
          </div>
          
          {/* Desktop Navigation - Properly Centered */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              {t.home}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              {t.about}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              {t.services}
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              {t.results}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
            >
              {t.contact}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-orange-600 transition-colors text-left"
              >
                {t.home}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-orange-600 transition-colors text-left"
              >
                {t.about}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-orange-600 transition-colors text-left"
              >
                {t.services}
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className="text-gray-700 hover:text-orange-600 transition-colors text-left"
              >
                {t.results}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors text-left"
              >
                {t.contact}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
