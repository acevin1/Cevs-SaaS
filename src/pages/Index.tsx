
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ResultsSection from '@/components/ResultsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import DynamicBackground from '@/components/DynamicBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <DynamicBackground />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ServicesOverview />
        <AboutSection />
        <ServicesSection />
        <ResultsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
