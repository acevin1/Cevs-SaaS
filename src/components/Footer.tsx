
import { Instagram, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">WebDev Pro</h3>
            <p className="text-gray-400">
              Webentwicklung, Digitalberatung & Social-Media-Analyse für lokale Unternehmen
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail size={16} />
              <span>max.mueller@webdev-pro.de</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-orange-500 transition-colors">
                Home
              </a>
              <a href="#about" className="block text-gray-400 hover:text-orange-500 transition-colors">
                Über mich
              </a>
              <a href="#services" className="block text-gray-400 hover:text-orange-500 transition-colors">
                Leistungen
              </a>
              <a href="#results" className="block text-gray-400 hover:text-orange-500 transition-colors">
                Ergebnisse
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-orange-500 transition-colors">
                Kontakt
              </a>
            </div>
          </div>

          {/* Social & Language */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Folge mir</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
            
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-2">Sprache</h4>
              <div className="flex gap-2">
                <button className="bg-orange-600 px-3 py-1 rounded text-sm font-semibold">
                  🇩🇪 DE
                </button>
                <button className="bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600 transition-colors">
                  🇬🇧 EN
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} WebDev Pro. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              Impressum
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
