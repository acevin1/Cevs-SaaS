
import { Award, Heart, Target, Monitor } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Über mich – <span className="text-red-500 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Ehrlich & Direkt</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mb-8"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p className="hover:text-white transition-colors duration-300">
                Mit einem starken IT-Hintergrund und 2,5 Jahren Erfahrung in der digitalen Welt bringe ich 
                technisches Know-how und kreative Social-Media-Expertise zusammen.
              </p>
              
              <p className="hover:text-white transition-colors duration-300">
                Meine Mission ist einfach: <strong className="text-white">Lokale Unternehmen digital sichtbar machen</strong> – 
                ohne Fachchinesisch, ohne Verkaufsdruck, dafür mit echten Ergebnissen.
              </p>
              
              <p className="hover:text-white transition-colors duration-300">
                Besonders stolz bin ich auf meinen Car-Account, der durch gezielte Trendanalyse 
                <strong className="text-red-500"> über 30 Millionen Aufrufe</strong> in einem Monat erreicht hat.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 group">
                <Heart className="w-8 h-8 text-red-500 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-bold text-white">Ehrlichkeit</h4>
                <p className="text-sm text-gray-300">Transparente Kommunikation</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 group">
                <Award className="w-8 h-8 text-red-500 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-bold text-white">Qualität</h4>
                <p className="text-sm text-gray-300">Keine Kompromisse</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 group">
                <Target className="w-8 h-8 text-red-500 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-bold text-white">Individualität</h4>
                <p className="text-sm text-gray-300">Maßgeschneiderte Lösungen</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in delay-300">
            <div className="w-full h-96 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500 rounded-xl shadow-2xl flex items-center justify-center text-white border border-gray-600 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-red-500 rounded-full mx-auto flex items-center justify-center">
                  <Monitor className="w-10 h-10 text-white" />
                </div>
                <div className="text-xl font-bold">Arbeitsplatz Setup</div>
                <div className="text-sm text-gray-200">Webentwicklung & Design</div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-xl shadow-xl border border-red-500/50 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold">30M+</div>
              <div className="text-sm">Aufrufe generiert</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
