import { useEffect, useState } from 'react';
import { ArrowLeft, Building2, Home, MapPin, Phone, Mail, BedDouble, Bath, Square, Menu, X, Star, Users, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const DemoRealEstate = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'de' | 'en'>('de');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const savedLanguage = localStorage.getItem('selectedLanguage') as 'de' | 'en' | null;
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const propertyImages = [
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070',
  ];

  const content = {
    de: {
      back: 'Zurück',
      nav: {
        home: 'Home',
        team: 'Unser Team',
        properties: 'Immobilien',
        services: 'Leistungen',
        contact: 'Kontakt',
      },
      hero: {
        subtitle: 'Premium Immobilienmakler',
        title: 'Jürgen Immo',
        tagline: 'Immobilien',
        cta: 'Immobilien durchsuchen',
      },
      stats: [
        { value: '500+', label: 'Verkaufte Objekte' },
        { value: '15+', label: 'Jahre Erfahrung' },
        { value: '98%', label: 'Kundenzufriedenheit' },
        { value: '€2Mrd+', label: 'Transaktionsvolumen' },
      ],
      services: {
        title: 'Unsere Expertise',
        items: [
          { icon: Home, title: 'Verkauf', desc: 'Professionelle Vermarktung Ihrer Immobilie mit maximaler Reichweite' },
          { icon: Users, title: 'Kauf', desc: 'Finden Sie Ihr Traumobjekt mit unserer persönlichen Beratung' },
          { icon: Award, title: 'Bewertung', desc: 'Marktgerechte Immobilienbewertung durch zertifizierte Experten' },
          { icon: Clock, title: 'Beratung', desc: 'Individuelle Strategieberatung für Ihre Immobilieninvestition' },
        ],
      },
      properties: {
        title: 'Exklusive Objekte',
        featured: 'Ausgewählt',
        items: [
          { title: 'Penthouse am Park', location: 'Berlin Mitte', beds: 4, baths: 3, sqm: 220, price: '2.850.000 €' },
          { title: 'Altbauvilla', location: 'Hamburg Blankenese', beds: 6, baths: 4, sqm: 380, price: '4.200.000 €' },
          { title: 'Designerwohnung', location: 'München Schwabing', beds: 3, baths: 2, sqm: 145, price: '1.890.000 €' },
          { title: 'Stadthaus', location: 'Frankfurt Westend', beds: 5, baths: 3, sqm: 260, price: '3.150.000 €' },
        ],
      },
      testimonial: {
        title: 'Was unsere Kunden sagen',
        quote: '"Ein herausragender Service von Anfang bis Ende. Das Team hat jeden Schritt mit Professionalität und Hingabe begleitet."',
        author: 'Familie Müller',
        role: 'Käufer in Berlin',
      },
      contact: {
        title: 'Lassen Sie uns sprechen',
        subtitle: 'Kontaktieren Sie uns für eine unverbindliche Beratung',
        phone: '+49 30 123 456 789',
        email: 'info@juergen-immo.de',
        address: 'Kurfürstendamm 100, 10711 Berlin',
      },
      footer: '© 2024 Jürgen Immo - Demo Website',
    },
    en: {
      back: 'Back',
      nav: {
        home: 'Home',
        team: 'Our Team',
        properties: 'Properties',
        services: 'Services',
        contact: 'Contact',
      },
      hero: {
        subtitle: 'Premium Real Estate Agent',
        title: 'Jürgen Immo',
        tagline: 'Real Estate',
        cta: 'Search Properties',
      },
      stats: [
        { value: '500+', label: 'Properties Sold' },
        { value: '15+', label: 'Years Experience' },
        { value: '98%', label: 'Client Satisfaction' },
        { value: '€2B+', label: 'Transaction Volume' },
      ],
      services: {
        title: 'Our Expertise',
        items: [
          { icon: Home, title: 'Selling', desc: 'Professional marketing of your property with maximum reach' },
          { icon: Users, title: 'Buying', desc: 'Find your dream property with our personal consultation' },
          { icon: Award, title: 'Valuation', desc: 'Market-based property valuation by certified experts' },
          { icon: Clock, title: 'Advisory', desc: 'Individual strategy consulting for your real estate investment' },
        ],
      },
      properties: {
        title: 'Exclusive Properties',
        featured: 'Featured',
        items: [
          { title: 'Penthouse at the Park', location: 'Berlin Mitte', beds: 4, baths: 3, sqm: 220, price: '€2,850,000' },
          { title: 'Historic Villa', location: 'Hamburg Blankenese', beds: 6, baths: 4, sqm: 380, price: '€4,200,000' },
          { title: 'Designer Apartment', location: 'Munich Schwabing', beds: 3, baths: 2, sqm: 145, price: '€1,890,000' },
          { title: 'Townhouse', location: 'Frankfurt Westend', beds: 5, baths: 3, sqm: 260, price: '€3,150,000' },
        ],
      },
      testimonial: {
        title: 'What Our Clients Say',
        quote: '"Outstanding service from start to finish. The team guided every step with professionalism and dedication."',
        author: 'The Miller Family',
        role: 'Buyers in Berlin',
      },
      contact: {
        title: "Let's Connect",
        subtitle: 'Contact us for a no-obligation consultation',
        phone: '+49 30 123 456 789',
        email: 'info@juergen-immo.com',
        address: 'Kurfürstendamm 100, 10711 Berlin',
      },
      footer: '© 2024 Jürgen Immo - Demo Website',
    },
  };

  const t = content[currentLanguage];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]" />

      {/* Header */}
      <header className="relative z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Back Button */}
            <Link 
              to="/" 
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">{t.back}</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {Object.values(t.nav).map((item, index) => (
                <button 
                  key={index}
                  className="text-white/70 hover:text-white transition-colors text-sm tracking-wide uppercase"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <span className="text-2xl font-serif italic text-white tracking-wider">JI</span>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* CTA */}
            <button className="hidden lg:block text-sm text-white/70 hover:text-white transition-colors">
              {t.contact.phone}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-white/10">
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {Object.values(t.nav).map((item, index) => (
                <button 
                  key={index}
                  className="text-white/70 hover:text-white transition-colors text-left py-2 text-lg"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative z-10 min-h-[90vh] flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          {/* Subtitle */}
          <p className="text-white/60 text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
            {t.hero.subtitle}
          </p>
          
          {/* Main Title */}
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-wide mb-4">
            <span className="italic">{t.hero.title.charAt(0)}</span>
            <span>{t.hero.title.slice(1)}</span>
          </h1>
          
          {/* Decorative Line with Tagline */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 sm:w-32 bg-white/30" />
            <span className="text-white/60 text-sm tracking-[0.2em] uppercase italic">{t.hero.tagline}</span>
            <div className="h-px w-16 sm:w-32 bg-white/30" />
          </div>

          {/* CTA Button */}
          <button className="group relative bg-white text-[#0a0a0a] px-10 py-4 text-sm tracking-wide uppercase hover:bg-white/90 transition-all duration-300">
            {t.hero.cta}
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <div className="w-px h-12 bg-white/20 animate-pulse" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 border-t border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {t.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-serif text-white mb-2">{stat.value}</div>
                <div className="text-white/50 text-sm tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif text-center mb-16 font-light">
            {t.services.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.items.map((service, index) => (
              <div 
                key={index} 
                className="group p-8 border border-white/10 hover:border-white/30 transition-all duration-500 bg-white/5 hover:bg-white/10"
              >
                <service.icon className="w-10 h-10 text-white/70 mb-6 group-hover:text-white transition-colors" />
                <h3 className="text-xl font-serif mb-3">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="relative z-10 py-24 bg-[#111]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif text-center mb-16 font-light">
            {t.properties.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.properties.items.map((property, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-500"
              >
                {/* Property Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={propertyImages[index]} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {index === 0 && (
                    <span className="absolute top-4 left-4 bg-white text-[#0a0a0a] px-4 py-1 text-xs tracking-wide uppercase">
                      {t.properties.featured}
                    </span>
                  )}
                </div>
                
                {/* Property Details */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-white/50 text-sm mb-2">
                    <MapPin size={14} />
                    <span>{property.location}</span>
                  </div>
                  <h3 className="text-2xl font-serif mb-4 group-hover:text-white/80 transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center gap-6 text-white/50 text-sm mb-4">
                    <span className="flex items-center gap-2">
                      <BedDouble size={16} /> {property.beds}
                    </span>
                    <span className="flex items-center gap-2">
                      <Bath size={16} /> {property.baths}
                    </span>
                    <span className="flex items-center gap-2">
                      <Square size={16} /> {property.sqm}m²
                    </span>
                  </div>
                  <div className="text-2xl font-serif text-white">{property.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-serif mb-16 font-light">
            {t.testimonial.title}
          </h2>
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-white text-white" />
            ))}
          </div>
          <blockquote className="text-2xl sm:text-3xl font-serif font-light italic text-white/80 mb-8 leading-relaxed">
            {t.testimonial.quote}
          </blockquote>
          <div className="text-white/60">
            <p className="text-lg">{t.testimonial.author}</p>
            <p className="text-sm">{t.testimonial.role}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 bg-white text-[#0a0a0a]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif mb-4 font-light">
            {t.contact.title}
          </h2>
          <p className="text-[#0a0a0a]/60 mb-12">{t.contact.subtitle}</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>{t.contact.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>{t.contact.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>{t.contact.address}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center text-white/40 text-sm">
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
};

export default DemoRealEstate;