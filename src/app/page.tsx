import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import BrandPhilosophy from '@/components/BrandPhilosophy';
import BilonaStory from '@/components/BilonaStory';
import TestimonialsSection from '@/components/TestimonialsSection';
import WellnessJournal from '@/components/WellnessJournal';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <BrandPhilosophy />
      <BilonaStory />
      <TestimonialsSection />
      <WellnessJournal />
    </div>
  );
}
