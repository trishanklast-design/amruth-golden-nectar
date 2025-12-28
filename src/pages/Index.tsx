import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ProductsSection from '@/components/sections/ProductsSection';
import LabReportsSection from '@/components/sections/LabReportsSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProcessSection />
        <ProductsSection />
        <WhyChooseSection />
        <LabReportsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
