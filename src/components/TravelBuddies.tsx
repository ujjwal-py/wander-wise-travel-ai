
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Users, MapPin, Calendar, Heart, Zap, Coffee } from 'lucide-react';

const TravelBuddies = () => {
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [showMatch, setShowMatch] = useState(false);

  const buddies = [
    {
      name: 'Akansha',
      destination: destination || 'Any Destination',
      dates: travelDate ? new Date(travelDate).toLocaleDateString() : 'Flexible Dates',
      style: 'Explorer & Foodie',
      matchPercentage: 98,
      interests: ['Local Food', 'Culture', 'Photography'],
      age: '27',
      initial: 'A',
    },
    {
      name: 'Rohan Garg',
      destination: destination || 'Any Destination',
      dates: travelDate ? new Date(travelDate).toLocaleDateString() : 'Flexible Dates',
      style: 'Adventure & Tech',
      matchPercentage: 94,
      interests: ['Hiking', 'Coding', 'Music'],
      age: '29',
      initial: 'R',
    },
    {
      name: 'Solani Mehta',
      destination: destination || 'Any Destination',
      dates: travelDate ? new Date(travelDate).toLocaleDateString() : 'Flexible Dates',
      style: 'Culture & Wellness',
      matchPercentage: 92,
      interests: ['Yoga', 'Art', 'Local Food'],
      age: '26',
      initial: 'S',
    },
  ];

  const getStyleIcon = (style: string) => {
    if (style.includes('Adventure')) return Zap;
    if (style.includes('Budget')) return Coffee;
    return Heart;
  };

  return (
    <section id="travel-buddies" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-travel-blue mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Find Your Travel Buddy
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Traveling solo? Connect with like-minded travelers heading to the same destination. 
            Our AI matches you based on travel style, interests, and compatibility.
          </p>
        </div>

        {/* Search Form */}
        <Card className="p-8 max-w-4xl mx-auto mb-16 travel-card-hover">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Find Your Perfect Travel Match</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="h-12 pl-10"
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <div className="relative">
              <Input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="h-12 pl-10"
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <Button
              className="h-12 bg-travel-gradient hover:opacity-90 text-white"
              onClick={() => setShowMatch(true)}
            >
              Find Matches
            </Button>
          </div>
          <p className="text-sm text-gray-500 text-center">
            Your privacy is protected. Names and contact info are only shared after mutual interest.
          </p>
        </Card>

        {/* Demo AI Match Results */}
        {showMatch && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mb-12 animate-fade-in">
            {buddies.map((buddy, idx) => (
              <Card key={idx} className="p-8 max-w-md w-full travel-card-hover mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 bg-travel-gradient rounded-full flex items-center justify-center text-white font-semibold text-2xl">
                      {buddy.initial}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">{buddy.name}</h4>
                      <p className="text-sm text-gray-500">Age {buddy.age}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-travel-emerald">{buddy.matchPercentage}%</div>
                    <div className="text-xs text-gray-500">Match</div>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 text-travel-blue" />
                    <span>{buddy.destination}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4 text-travel-blue" />
                    <span>{buddy.dates}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Heart className="h-4 w-4 text-travel-blue" />
                    <span>{buddy.style}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Shared Interests:</p>
                  <div className="flex flex-wrap gap-1">
                    {buddy.interests.map((interest, idx2) => (
                      <span
                        key={idx2}
                        className="px-2 py-1 bg-travel-blue/10 text-travel-blue text-xs rounded-full"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button className="flex-1 bg-travel-gradient hover:opacity-90 text-white">Connect</Button>
                  <Button variant="outline" className="flex-1">View Profile</Button>
                  <Button variant="ghost" className="flex-1">Send Message</Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* How It Works */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">How Travel Buddy Matching Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-travel-blue/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-travel-blue">1</span>
              </div>
              <h4 className="font-semibold text-gray-900">Share Your Plans</h4>
              <p className="text-gray-600 text-sm">Tell us your destination, dates, and travel style preferences</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-travel-teal/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-travel-teal">2</span>
              </div>
              <h4 className="font-semibold text-gray-900">AI Finds Matches</h4>
              <p className="text-gray-600 text-sm">Our algorithm matches you with compatible travelers with similar plans</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-travel-emerald/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-travel-emerald">3</span>
              </div>
              <h4 className="font-semibold text-gray-900">Connect & Travel</h4>
              <p className="text-gray-600 text-sm">Both parties agree to connect, and we share contact information</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelBuddies;
