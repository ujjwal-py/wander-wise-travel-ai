
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Calendar, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  const [destination, setDestination] = useState('');
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResult, setAiResult] = useState<React.ReactNode>(null);
  const [aiLoading, setAiLoading] = useState(false);

  const handleAICreate = () => {
    if (!aiPrompt.trim()) return;
    setAiLoading(true);
    setTimeout(() => {
      if (aiPrompt.trim().toLowerCase() === 'plan me a 5 days rajasthan trip under 20000rs') {
        setAiResult(
          <div>
            <h2 className="text-xl font-bold text-travel-blue mb-2">5-Day Rajasthan Trip under ₹20,000</h2>
            <div className="grid gap-3 mb-4">
              <div className="bg-blue-50 rounded-lg p-3 shadow-sm flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <span className="font-semibold">Day 1: Jaipur</span>
                  <ul className="list-disc ml-6 text-gray-700 mb-2">
                    <li>Arrive in Jaipur</li>
                    <li>Visit Amber Fort, City Palace, Hawa Mahal</li>
                    <li>Stay in a budget hotel</li>
                  </ul>
                </div>
                <div className="flex gap-2 md:ml-4 mt-2 md:mt-0">
                  <a href="#" className="px-3 py-1 bg-travel-blue text-white rounded-md text-sm hover:opacity-90 transition">Book Flight</a>
                  <a href="#" className="px-3 py-1 bg-travel-emerald text-white rounded-md text-sm hover:opacity-90 transition">Book Taxi</a>
                  <a href="#" className="px-3 py-1 bg-travel-indigo text-white rounded-md text-sm hover:opacity-90 transition">Book Hotel</a>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 shadow-sm flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <span className="font-semibold">Day 2: Jaipur to Jodhpur</span>
                  <ul className="list-disc ml-6 text-gray-700 mb-2">
                    <li>Morning train/bus to Jodhpur</li>
                    <li>Visit Mehrangarh Fort, Jaswant Thada</li>
                    <li>Explore local markets</li>
                    <li>Overnight in Jodhpur</li>
                  </ul>
                </div>
                <div className="flex gap-2 md:ml-4 mt-2 md:mt-0">
                  <a href="#" className="px-3 py-1 bg-travel-blue text-white rounded-md text-sm hover:opacity-90 transition">Book Train</a>
                  <a href="#" className="px-3 py-1 bg-travel-emerald text-white rounded-md text-sm hover:opacity-90 transition">Book Taxi</a>
                  <a href="#" className="px-3 py-1 bg-travel-indigo text-white rounded-md text-sm hover:opacity-90 transition">Book Hotel</a>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 shadow-sm flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <span className="font-semibold">Day 3: Jodhpur to Udaipur</span>
                  <ul className="list-disc ml-6 text-gray-700 mb-2">
                    <li>Early bus/train to Udaipur</li>
                    <li>Visit City Palace, Lake Pichola</li>
                    <li>Evening at Bagore Ki Haveli</li>
                    <li>Overnight in Udaipur</li>
                  </ul>
                </div>
                <div className="flex gap-2 md:ml-4 mt-2 md:mt-0">
                  <a href="#" className="px-3 py-1 bg-travel-blue text-white rounded-md text-sm hover:opacity-90 transition">Book Bus</a>
                  <a href="#" className="px-3 py-1 bg-travel-emerald text-white rounded-md text-sm hover:opacity-90 transition">Book Taxi</a>
                  <a href="#" className="px-3 py-1 bg-travel-indigo text-white rounded-md text-sm hover:opacity-90 transition">Book Hotel</a>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 shadow-sm flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <span className="font-semibold">Day 4: Udaipur</span>
                  <ul className="list-disc ml-6 text-gray-700 mb-2">
                    <li>Visit Saheliyon-ki-Bari, Jagdish Temple</li>
                    <li>Explore local bazaars</li>
                    <li>Relax by Fatehsagar Lake</li>
                  </ul>
                </div>
                <div className="flex gap-2 md:ml-4 mt-2 md:mt-0">
                  <a href="#" className="px-3 py-1 bg-travel-emerald text-white rounded-md text-sm hover:opacity-90 transition">Book Taxi</a>
                  <a href="#" className="px-3 py-1 bg-travel-indigo text-white rounded-md text-sm hover:opacity-90 transition">Book Hotel</a>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 shadow-sm flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <span className="font-semibold">Day 5: Udaipur to Jaipur/Departure</span>
                  <ul className="list-disc ml-6 text-gray-700 mb-2">
                    <li>Morning return to Jaipur</li>
                    <li>Last-minute shopping</li>
                    <li>Depart</li>
                  </ul>
                </div>
                <div className="flex gap-2 md:ml-4 mt-2 md:mt-0">
                  <a href="#" className="px-3 py-1 bg-travel-blue text-white rounded-md text-sm hover:opacity-90 transition">Book Bus</a>
                  <a href="#" className="px-3 py-1 bg-travel-emerald text-white rounded-md text-sm hover:opacity-90 transition">Book Taxi</a>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <h3 className="font-semibold text-gray-900">Estimated Budget Split:</h3>
              <table className="w-full text-left mt-1 mb-2">
                <tbody>
                  <tr><td className="pr-4">Travel:</td><td>₹6,000</td></tr>
                  <tr><td className="pr-4">Accommodation:</td><td>₹5,000</td></tr>
                  <tr><td className="pr-4">Food:</td><td>₹4,000</td></tr>
                  <tr><td className="pr-4">Sightseeing & Misc:</td><td>₹5,000</td></tr>
                </tbody>
              </table>
            </div>
            <div className="italic text-green-700">Tip: Use trains/buses, book budget hotels, and eat at local dhabas for savings!</div>
          </div>
        );
      } else {
        setAiResult('AI is offline. Please try again later or use the sample prompt for a demo.');
      }
      setAiLoading(false);
    }, 1200);
  };

  const popularDestinations = [
    { name: 'Goa, India', image: 'photo-1512343879784-a960bf40e7f2', season: 'Perfect Weather' },
    { name: 'Kerala, India', image: 'photo-1602216056096-3b40cc0c9944', season: 'Monsoon Beauty' },
    { name: 'Rajasthan, India', image: '/images/giuliano-gabella-D93E_uNgaL8-unsplash.jpg', season: 'Cool Season' },
    { name: 'Himachal Pradesh, India', image: 'photo-1506905925346-21bda4d32df4', season: 'Mountain Escape' }
  ];

  return (
    <section id="home" className="relative min-h-[90vh] bg-gradient-to-br from-blue-50 via-teal-50 to-indigo-50 travel-pattern" data-aos="fade-up">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-travel-blue/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-travel-teal/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-travel-indigo/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16" data-aos="fade-up" data-aos-delay="100">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Plan Your Dream Trip with{' '}
            <span className="text-gradient">AI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover personalized travel experiences based on your preferences, budget, and the perfect season. 
            Let our AI create unforgettable journeys just for you.
          </p>

          {/* AI Trip Planner Section */}
          <div className="max-w-4xl mx-auto mb-16">
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
                <Button
                  className="w-full h-14 text-lg bg-travel-gradient hover:opacity-90 text-white rounded-xl"
                  onClick={handleAICreate}
                  disabled={aiLoading}
                >
                  {aiLoading ? 'Thinking...' : 'Create My AI Itinerary'}
                </Button>
                {aiResult && (
                  <div className="mt-6 p-4 bg-gray-50 border rounded-xl text-left whitespace-pre-line animate-fade-in">
                    <strong>AI Trip Plan:</strong>
                    <div>{aiResult}</div>
                  </div>
                )}
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
                      src={
                        dest.image.startsWith('/images/')
                          ? dest.image
                          : `https://images.unsplash.com/${dest.image}?w=400&h=300&fit=crop`
                      }
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
