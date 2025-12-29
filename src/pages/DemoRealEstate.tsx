import { ArrowLeft, Building2, Home, MapPin, Phone, Mail, BedDouble, Bath, Square } from 'lucide-react';
import { Link } from 'react-router-dom';
import DynamicBackground from '@/components/DynamicBackground';

const DemoRealEstate = () => {
  const properties = [
    { title: 'Moderne Stadtwohnung', beds: 3, baths: 2, sqm: 120, price: '450.000 €' },
    { title: 'Villa mit Garten', beds: 5, baths: 3, sqm: 280, price: '890.000 €' },
    { title: 'Penthouse City', beds: 4, baths: 2, sqm: 180, price: '720.000 €' },
    { title: 'Familienhaus', beds: 4, baths: 2, sqm: 200, price: '550.000 €' },
  ];

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
            <Building2 className="w-8 h-8 text-gold" />
            <span className="text-2xl font-bold text-foreground">Prime Immobilien</span>
          </div>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Finden Sie Ihr </span>
            <span className="text-gold">Traumhaus</span>
          </h1>
          <p className="text-xl text-silver max-w-2xl mx-auto mb-8">
            Ihr Partner für exklusive Immobilien. Wir begleiten Sie von der Suche 
            bis zum Einzug in Ihr neues Zuhause.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gold hover:bg-gold-light text-background px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Immobilien entdecken
            </button>
            <button className="border-2 border-gold text-gold hover:bg-gold hover:text-background px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Beratungstermin
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '500+', label: 'Objekte' },
              { value: '15+', label: 'Jahre Erfahrung' },
              { value: '98%', label: 'Zufriedenheit' },
              { value: '1000+', label: 'Zufriedene Kunden' },
            ].map((stat, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:border-gold/50 transition-all">
                <div className="text-3xl font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-silver">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Aktuelle <span className="text-gold">Angebote</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((property, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-gold/50 transition-all group">
                <div className="w-full h-48 bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                  <Home className="w-20 h-20 text-gold/50" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-gold transition-colors mb-3">{property.title}</h3>
                  <div className="flex items-center gap-4 text-silver text-sm mb-4">
                    <span className="flex items-center gap-1"><BedDouble size={16} /> {property.beds}</span>
                    <span className="flex items-center gap-1"><Bath size={16} /> {property.baths}</span>
                    <span className="flex items-center gap-1"><Square size={16} /> {property.sqm}m²</span>
                  </div>
                  <div className="text-xl font-bold text-gold">{property.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">Kontaktieren Sie uns</h2>
            <p className="text-silver mb-8">Wir beraten Sie gerne persönlich</p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-silver">
                <Phone className="w-5 h-5 text-gold" />
                <span>+49 123 456789</span>
              </div>
              <div className="flex items-center gap-2 text-silver">
                <Mail className="w-5 h-5 text-gold" />
                <span>info@prime-immobilien.de</span>
              </div>
              <div className="flex items-center gap-2 text-silver">
                <MapPin className="w-5 h-5 text-gold" />
                <span>Hauptstraße 1, 12345 Stadt</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center text-silver">
          <p>© 2024 Prime Immobilien - Demo Website</p>
        </div>
      </footer>
    </div>
  );
};

export default DemoRealEstate;
