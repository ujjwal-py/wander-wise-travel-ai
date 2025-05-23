
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AIFeatures from '@/components/AIFeatures';
import TravelBuddies from '@/components/TravelBuddies';
import ExploreSection from '@/components/ExploreSection';
import Footer from '@/components/Footer';

import { useAOS } from '../aos-init';

const Index = () => {
  useAOS();
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AIFeatures />
        <TravelBuddies />
        <ExploreSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
