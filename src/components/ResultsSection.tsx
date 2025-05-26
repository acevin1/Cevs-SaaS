
import { TrendingUp, Users, Eye, Star } from 'lucide-react';

const ResultsSection = () => {
  const testimonials = [
    {
      name: "Sarah Weber",
      business: "Fahrradladen Weber",
      text: "Ich hatte keine Ahnung von Social Media – jetzt läuft mein Fahrradladen online besser als je zuvor!",
      rating: 5
    },
    {
      name: "Thomas Klein",
      business: "Klein's Bäckerei",
      text: "Die Zusammenarbeit mit Max war menschlich, professionell und direkt. Kein Blabla – sondern Ergebnisse.",
      rating: 5
    },
    {
      name: "Lisa Hoffmann",
      business: "Yoga Studio Balance",
      text: "Endlich hat jemand zugehört und nicht einfach verkauft. 100% Empfehlung!",
      rating: 5
    }
  ];

  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Echte <span className="text-orange-600">Ergebnisse</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Zahlen, die sprechen – und Kunden, die begeistert sind.
          </p>
        </div>

        {/* Highlight Projekt */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-200">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
                Highlight-Projekt
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                Instagram Car-Profil
              </h3>
              <p className="text-lg text-gray-700">
                Durch gezielte Trendanalyse und strategischen Content-Aufbau über 
                <strong className="text-orange-600"> 30 Millionen Aufrufe in einem Monat</strong> erreicht.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">30M+</div>
                  <div className="text-sm text-gray-600">Aufrufe</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">150K+</div>
                  <div className="text-sm text-gray-600">Neue Follower</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
                alt="Social Media Analytics Dashboard" 
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Live-Projekt
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-orange-600 text-sm">{testimonial.business}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
