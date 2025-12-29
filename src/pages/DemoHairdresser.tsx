import { ArrowLeft, Scissors, Clock, MapPin, Phone, Star, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import DynamicBackground from '@/components/DynamicBackground';

const DemoHairdresser = () => {
  const services = [
    { name: 'Haarschnitt Damen', price: 'ab 45€', duration: '60 Min' },
    { name: 'Haarschnitt Herren', price: 'ab 25€', duration: '30 Min' },
    { name: 'Färben & Strähnen', price: 'ab 80€', duration: '120 Min' },
    { name: 'Styling & Hochsteck', price: 'ab 60€', duration: '45 Min' },
  ];

  const team = [
    { name: 'Sarah Müller', role: 'Inhaberin & Stylistin', years: 15 },
    { name: 'Tom Weber', role: 'Senior Stylist', years: 8 },
    { name: 'Lisa Schmidt', role: 'Coloristin', years: 6 },
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
            <Scissors className="w-8 h-8 text-gold" />
            <span className="text-2xl font-bold text-foreground">Hair Atelier</span>
          </div>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Ihr Stil. </span>
            <span className="text-gold">Unsere Leidenschaft.</span>
          </h1>
          <p className="text-xl text-silver max-w-2xl mx-auto mb-8">
            Willkommen im Hair Atelier – wo Kreativität auf Handwerk trifft. 
            Entdecken Sie Ihren perfekten Look.
          </p>
          <button className="bg-gold hover:bg-gold-light text-background px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-flex items-center gap-2">
            <Calendar size={20} />
            Termin buchen
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Unsere <span className="text-gold">Leistungen</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-gold/50 transition-all group text-center">
                <Scissors className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground group-hover:text-gold transition-colors mb-2">{service.name}</h3>
                <p className="text-2xl font-bold text-gold mb-2">{service.price}</p>
                <p className="text-silver text-sm flex items-center justify-center gap-1">
                  <Clock size={14} /> {service.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Unser <span className="text-gold">Team</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-gold/50 transition-all text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-gold/30 to-gold/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Scissors className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-gold mb-2">{member.role}</p>
                <p className="text-silver text-sm">{member.years} Jahre Erfahrung</p>
                <div className="flex items-center justify-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center hover:border-gold/50 transition-all">
              <Clock className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Öffnungszeiten</h3>
              <p className="text-silver">Di-Fr: 09:00 - 19:00</p>
              <p className="text-silver">Sa: 09:00 - 16:00</p>
              <p className="text-silver">Mo & So: Geschlossen</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center hover:border-gold/50 transition-all">
              <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Adresse</h3>
              <p className="text-silver">Salonstraße 42</p>
              <p className="text-silver">12345 Musterstadt</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center hover:border-gold/50 transition-all">
              <Phone className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Kontakt</h3>
              <p className="text-silver">+49 123 987654</p>
              <p className="text-silver">termin@hair-atelier.de</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center text-silver">
          <p>© 2024 Hair Atelier - Demo Website</p>
        </div>
      </footer>
    </div>
  );
};

export default DemoHairdresser;
