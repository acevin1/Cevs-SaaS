
import { Award, Heart, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Über mich – <span className="text-orange-600">Ehrlich & Direkt</span>
              </h2>
              <div className="w-20 h-1 bg-orange-500 mb-8"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Mit einem starken IT-Hintergrund und 2,5 Jahren Erfahrung in der digitalen Welt bringe ich 
                technisches Know-how und kreative Social-Media-Expertise zusammen.
              </p>
              
              <p>
                Meine Mission ist einfach: <strong>Lokale Unternehmen digital sichtbar machen</strong> – 
                ohne Fachchinesisch, ohne Verkaufsdruck, dafür mit echten Ergebnissen.
              </p>
              
              <p>
                Besonders stolz bin ich auf meinen Car-Account, der durch gezielte Trendanalyse 
                <strong className="text-orange-600"> über 30 Millionen Aufrufe</strong> in einem Monat erreicht hat.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Heart className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <h4 className="font-bold text-gray-900">Ehrlichkeit</h4>
                <p className="text-sm text-gray-600">Transparente Kommunikation</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Award className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <h4 className="font-bold text-gray-900">Qualität</h4>
                <p className="text-sm text-gray-600">Keine Kompromisse</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Target className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <h4 className="font-bold text-gray-900">Individualität</h4>
                <p className="text-sm text-gray-600">Maßgeschneiderte Lösungen</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop" 
              alt="Arbeitsplatz - Webentwicklung" 
              className="w-full h-96 object-cover rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-orange-600 text-white p-6 rounded-xl shadow-xl">
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
