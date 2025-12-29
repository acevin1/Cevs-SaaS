import { ArrowLeft, UtensilsCrossed, Clock, MapPin, Phone, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import DynamicBackground from '@/components/DynamicBackground';

const DemoRestaurant = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <DynamicBackground />
      
      {/* Header */}
      <header className="relative z-10 border-b border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-silver hover:text-gold transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Zurück</span>
          </Link>
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="w-8 h-8 text-gold" />
            <span className="text-2xl font-bold text-foreground">Bella Italia</span>
          </div>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Willkommen bei </span>
            <span className="text-gold">Bella Italia</span>
          </h1>
          <p className="text-xl text-silver max-w-2xl mx-auto mb-8">
            Authentische italienische Küche in gemütlicher Atmosphäre. 
            Frische Zutaten, traditionelle Rezepte, unvergesslicher Geschmack.
          </p>
          <button className="bg-gold hover:bg-gold-light text-background px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-flex items-center gap-2">
            Tisch reservieren
          </button>
        </div>
      </section>

      {/* Info Cards */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center hover:border-gold/50 transition-all">
              <Clock className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Öffnungszeiten</h3>
              <p className="text-silver">Mo-Fr: 11:00 - 22:00</p>
              <p className="text-silver">Sa-So: 12:00 - 23:00</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center hover:border-gold/50 transition-all">
              <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Adresse</h3>
              <p className="text-silver">Musterstraße 123</p>
              <p className="text-silver">12345 Musterstadt</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center hover:border-gold/50 transition-all">
              <Phone className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Kontakt</h3>
              <p className="text-silver">+49 123 456789</p>
              <p className="text-silver">info@bellaitalia.de</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Unsere <span className="text-gold">Spezialitäten</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Pizza Margherita', 'Spaghetti Carbonara', 'Tiramisu', 'Risotto ai Funghi'].map((dish, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-gold/50 transition-all group">
                <div className="w-full h-40 bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg mb-4 flex items-center justify-center">
                  <UtensilsCrossed className="w-16 h-16 text-gold/50" />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-gold transition-colors">{dish}</h3>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center text-silver">
          <p>© 2024 Bella Italia - Demo Website</p>
        </div>
      </footer>
    </div>
  );
};

export default DemoRestaurant;
