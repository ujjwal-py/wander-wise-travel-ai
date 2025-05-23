
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Search, Filter, MapPin, Star, Clock, Map, List } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';

const ExploreSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const { convertPrice } = useCurrency();

  const mockProperties = [
    {
      id: 1,
      title: 'Cozy Beachfront Villa',
      location: 'Bali, Indonesia',
      price: 120,
      rating: 4.8,
      reviews: 234,
      image: 'photo-1470071459604-3b5ec3a7fe05',
      amenities: ['WiFi', 'Pool', 'Kitchen', 'Beach Access'],
      host: 'Maria S.',
      responseTime: '1 hour'
    },
    {
      id: 2,
      title: 'Modern Tokyo Apartment',
      location: 'Shibuya, Tokyo',
      price: 85,
      rating: 4.9,
      reviews: 167,
      image: 'photo-1649972904349-6e44c42644a7',
      amenities: ['WiFi', 'Kitchen', 'Washer', 'Near Station'],
      host: 'Yuki T.',
      responseTime: '30 mins'
    },
    {
      id: 3,
      title: 'Santorini Sunset Suite',
      location: 'Oia, Santorini',
      price: 200,
      rating: 4.7,
      reviews: 89,
      image: 'photo-1500375592092-40eb2168fd21',
      amenities: ['WiFi', 'Balcony', 'Kitchen', 'Sea View'],
      host: 'Dimitri K.',
      responseTime: '2 hours'
    },
    {
      id: 4,
      title: 'Mountain Cabin Retreat',
      location: 'Reykjavik, Iceland',
      price: 95,
      rating: 4.6,
      reviews: 156,
      image: 'photo-1488590528505-98d2b5aba04b',
      amenities: ['WiFi', 'Fireplace', 'Kitchen', 'Hot Tub'],
      host: 'Erik L.',
      responseTime: '3 hours'
    }
  ];

  const filters = [
    'Price Range',
    'Property Type',
    'Amenities',
    'Guest Rating',
    'Instant Book',
    'AI Recommended'
  ];

  return (
    <section id="explore" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore <span className="text-gradient">Amazing Places</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover unique accommodations and experiences curated by our AI and trusted hosts worldwide
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Search destinations, properties, or experiences..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-12 pl-12 pr-4 text-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                onClick={() => setViewMode('list')}
                className="h-12 px-4"
              >
                <List className="h-4 w-4 mr-2" />
                List
              </Button>
              <Button
                variant={viewMode === 'map' ? 'default' : 'outline'}
                onClick={() => setViewMode('map')}
                className="h-12 px-4"
              >
                <Map className="h-4 w-4 mr-2" />
                Map
              </Button>
              <Button variant="outline" className="h-12 px-4">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {filters.map((filter, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="h-8 text-xs hover:bg-travel-blue hover:text-white hover:border-travel-blue"
              >
                {filter}
              </Button>
            ))}
          </div>
        </Card>

        {/* AI Smart Sort Toggle */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {mockProperties.length} properties found
            </h3>
            <div className="flex items-center space-x-2 px-3 py-1 bg-travel-blue/10 rounded-full">
              <div className="w-2 h-2 bg-travel-blue rounded-full animate-pulse"></div>
              <span className="text-sm text-travel-blue font-medium">AI Smart Sort Active</span>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Sort: Recommended
          </Button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {mockProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden travel-card-hover group cursor-pointer">
              <div className="relative h-64">
                <img
                  src={`https://images.unsplash.com/${property.image}?w=600&h=400&fit=crop`}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-xs font-medium">{property.rating}</span>
                </div>
                <div className="absolute top-3 left-3 bg-travel-emerald text-white px-2 py-1 rounded-full text-xs font-medium">
                  AI Recommended
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-lg">{property.title}</h3>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{convertPrice(property.price)}</div>
                    <div className="text-sm text-gray-500">per night</div>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-gray-600 mb-3">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span>{property.rating} ({property.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>Responds in {property.responseTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {property.amenities.slice(0, 4).map((amenity, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Hosted by <span className="font-medium">{property.host}</span>
                  </div>
                  <Button size="sm" className="bg-travel-blue hover:bg-travel-blue/90 text-white">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
