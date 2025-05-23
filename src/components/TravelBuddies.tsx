
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Users, MapPin, Calendar, Heart, Zap, Coffee } from 'lucide-react';

const TravelBuddies = () => {
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');

  const mockBuddies = [
    {
      name: 'Roopali',
      destination: 'Bali, Indonesia',
      dates: 'Mar 15-22, 2024',
      style: 'Adventure & Culture',
      matchPercentage: 94,
      interests: ['Hiking', 'Local Food', 'Photography'],
      age: '28'
    },
    {
      name: 'Nitin Gaur',
      destination: 'Tokyo, Japan',
      dates: 'Apr 5-12, 2024',
      style: 'Budget Backpacking',
      matchPercentage: 87,
      interests: ['Street Food', 'Museums', 'Nightlife'],
      age: '25'
    },
    {
      name: 'Maya Pandey',
      destination: 'Santorini, Greece',
      dates: 'May 20-27, 2024',
      style: 'Luxury Relaxation',
      matchPercentage: 91,
      interests: ['Wine Tasting', 'Sunset Views', 'Spa'],
      age: '32'
    }
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
            <Button className="h-12 bg-travel-gradient hover:opacity-90 text-white">
              Find Matches
            </Button>
          </div>
          <p className="text-sm text-gray-500 text-center">
            Your privacy is protected. Names and contact info are only shared after mutual interest.
          </p>
        </Card>

        {/* Mock Results */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Your AI-Matched Travel Buddies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockBuddies.map((buddy, index) => {
              const StyleIcon = getStyleIcon(buddy.style);
              return (
                <Card key={index} className="p-6 travel-card-hover group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-travel-gradient rounded-full flex items-center justify-center text-white font-semibold">
                        {buddy.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{buddy.name}</h4>
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
                      <StyleIcon className="h-4 w-4 text-travel-blue" />
                      <span>{buddy.style}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Shared Interests:</p>
                    <div className="flex flex-wrap gap-1">
                      {buddy.interests.map((interest, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-travel-blue/10 text-travel-blue text-xs rounded-full"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-travel-gradient hover:opacity-90 text-white">
                    Send Match Request
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>

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
