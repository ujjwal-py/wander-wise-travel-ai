
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AIFeatures from '@/components/AIFeatures';
import TravelBuddies from '@/components/TravelBuddies';
import ExploreSection from '@/components/ExploreSection';
import Footer from '@/components/Footer';

const Index = () => {
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
