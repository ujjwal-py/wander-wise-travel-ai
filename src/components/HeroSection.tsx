
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Calendar, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import CurrencyConverter from './CurrencyConverter';

const HeroSection = () => {
  const [destination, setDestination] = useState('');
  const [aiPrompt, setAiPrompt] = useState('');

  const popularDestinations = [
    { name: 'Goa, India', image: 'photo-1512343879784-a960bf40e7f2', season: 'Perfect Weather' },
    { name: 'Kerala, India', image: 'photo-1602216056096-3b40cc0c9944', season: 'Monsoon Beauty' },
    { name: 'Rajasthan, India', image: 'photo-1477413874982-55c091ac5ce4', season: 'Cool Season' },
    { name: 'Himachal Pradesh, India', image: 'photo-1506905925346-21bda4d32df4', season: 'Mountain Escape' }
  ];

  return (
    <section id="home" className="relative min-h-[90vh] bg-gradient-to-br from-blue-50 via-teal-50 to-indigo-50 travel-pattern">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-travel-blue/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-travel-teal/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-travel-indigo/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Plan Your Dream Trip with{' '}
            <span className="text-gradient">AI Intelligence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover personalized travel experiences based on your preferences, budget, and the perfect season. 
            Let our AI create unforgettable journeys just for you.
          </p>

          {/* Currency Converter and AI Trip Planner Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Currency Converter */}
            <div className="lg:col-span-1 flex justify-center">
              <CurrencyConverter />
            </div>

            {/* AI Trip Planner Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 bg-travel-gradient rounded-full mr-3">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">AI Trip Planner</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Tell us your dream trip... (e.g., 'A spiritual journey in Rishikesh for 5 days under ₹25,000')"
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      className="w-full h-14 text-lg pl-12 pr-4 border-2 border-gray-200 focus:border-travel-blue rounded-xl"
                    />
                    <Sparkles className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-travel-blue" />
                  </div>
                  <Button className="w-full h-14 text-lg bg-travel-gradient hover:opacity-90 text-white rounded-xl">
                    Create My AI Itinerary
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Search Section */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Or search manually</h3>
            <Card className="p-6 max-w-4xl mx-auto travel-card-hover">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Where to?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="h-12 pl-10"
                  />
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                <div className="relative">
                  <Input type="date" className="h-12 pl-10" />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                <div className="relative">
                  <Input type="date" className="h-12 pl-10" />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                <Button className="h-12 bg-travel-blue hover:bg-travel-blue/90 text-white">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </Card>
          </div>

          {/* Popular Indian Destinations */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Trending Indian Destinations This Season</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularDestinations.map((dest, index) => (
                <Card key={index} className="overflow-hidden travel-card-hover group cursor-pointer">
                  <div className="relative h-48">
                    <img
                      src={`https://images.unsplash.com/${dest.image}?w=400&h=300&fit=crop`}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-travel-emerald text-white px-2 py-1 rounded-full text-xs font-medium">
                      {dest.season}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900">{dest.name}</h4>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
