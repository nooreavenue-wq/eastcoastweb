import HeroSection from '@/components/sections/HeroSection';
import MarqueeTicker from '@/components/sections/MarqueeTicker';
import AboutSection from '@/components/sections/AboutSection';
import ProductsSection from '@/components/sections/ProductsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import GallerySection from '@/components/sections/GallerySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeTicker />
      <AboutSection />
      <ProductsSection />
      <ProcessSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
