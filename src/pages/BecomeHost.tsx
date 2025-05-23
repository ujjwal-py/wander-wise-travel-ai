
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Home, DollarSign, Users, Star, MapPin, Upload, Wifi, Car, Coffee } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const BecomeHost = () => {
  const [formData, setFormData] = useState({
    propertyName: '',
    propertyType: '',
    location: '',
    description: '',
    guests: '',
    bedrooms: '',
    bathrooms: '',
    price: '',
    amenities: [] as string[],
    images: [] as File[]
  });

  const propertyTypes = [
    'Apartment', 'House', 'Villa', 'Resort', 'Hotel', 'Hostel', 'Homestay', 'Guesthouse'
  ];

  const amenities = [
    { id: 'wifi', label: 'WiFi', icon: Wifi },
    { id: 'parking', label: 'Parking', icon: Car },
    { id: 'breakfast', label: 'Breakfast', icon: Coffee },
    { id: 'ac', label: 'Air Conditioning', icon: Home },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Earn Extra Income',
      description: 'Generate steady revenue from your property with our competitive pricing tools'
    },
    {
      icon: Users,
      title: 'Meet Travelers',
      description: 'Connect with interesting guests from around the world and share local experiences'
    },
    {
      icon: Star,
      title: 'Premium Support',
      description: '24/7 host support and guest screening to ensure quality stays'
    },
    {
      icon: MapPin,
      title: 'Global Reach',
      description: 'List your property to millions of travelers worldwide through our platform'
    }
  ];

  const handleAmenityToggle = (amenityId: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenityId)
        ? prev.amenities.filter(id => id !== amenityId)
        : [...prev.amenities, amenityId]
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...files].slice(0, 5) // Max 5 images
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! This is a demo form. In the real application, your property would be reviewed and listed.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-travel-blue to-travel-teal text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Become a WanderVia Host
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Share your space with travelers from around the world and earn extra income while creating memorable experiences
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Host with WanderVia?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 text-center travel-card-hover">
                  <div className="p-3 bg-travel-gradient rounded-full mx-auto mb-4 w-fit">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Listing Form */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                List Your Property
              </h2>
              <p className="text-gray-600">
                Fill out the form below to get started. Our team will review your submission and get back to you within 24 hours.
              </p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Name *
                    </label>
                    <Input
                      placeholder="Beautiful Villa in Goa"
                      value={formData.propertyName}
                      onChange={(e) => setFormData(prev => ({ ...prev, propertyName: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type *
                    </label>
                    <Select value={formData.propertyType} onValueChange={(value) => setFormData(prev => ({ ...prev, propertyType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        {propertyTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase()}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <Input
                    placeholder="City, State, Country"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Description *
                  </label>
                  <Textarea
                    placeholder="Describe your property, its unique features, and what makes it special..."
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    required
                  />
                </div>

                {/* Capacity and Price */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Max Guests *
                    </label>
                    <Input
                      type="number"
                      placeholder="4"
                      value={formData.guests}
                      onChange={(e) => setFormData(prev => ({ ...prev, guests: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bedrooms *
                    </label>
                    <Input
                      type="number"
                      placeholder="2"
                      value={formData.bedrooms}
                      onChange={(e) => setFormData(prev => ({ ...prev, bedrooms: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bathrooms *
                    </label>
                    <Input
                      type="number"
                      placeholder="2"
                      value={formData.bathrooms}
                      onChange={(e) => setFormData(prev => ({ ...prev, bathrooms: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price per night (₹) *
                    </label>
                    <Input
                      type="number"
                      placeholder="3000"
                      value={formData.price}
                      onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Amenities
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {amenities.map((amenity) => (
                      <label
                        key={amenity.id}
                        className={`flex items-center space-x-2 p-3 border rounded-lg cursor-pointer transition-colors ${
                          formData.amenities.includes(amenity.id)
                            ? 'border-travel-blue bg-travel-blue/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.amenities.includes(amenity.id)}
                          onChange={() => handleAmenityToggle(amenity.id)}
                          className="sr-only"
                        />
                        <amenity.icon className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">{amenity.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Images (Max 5)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-400">PNG, JPG up to 10MB each</p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="inline-block mt-2">
                      <Button type="button" variant="outline" className="cursor-pointer">
                        Choose Files
                      </Button>
                    </label>
                  </div>
                  {formData.images.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-600">
                        {formData.images.length} file(s) selected
                      </p>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button type="submit" className="w-full bg-travel-gradient hover:opacity-90 text-white h-12 text-lg">
                    Submit Property for Review
                  </Button>
                  <p className="text-sm text-gray-500 text-center mt-2">
                    * This is a demo form. No actual listing will be created.
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">How much can I earn as a host?</h3>
                <p className="text-gray-600">
                  Earnings vary based on location, property type, and local demand. Our hosts in popular destinations like Goa and Kerala earn ₹2,000-₹8,000 per night on average.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Is there a fee to list my property?</h3>
                <p className="text-gray-600">
                  It's free to list your property. We only charge a small commission (3-5%) when you receive a confirmed booking.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">How do you screen guests?</h3>
                <p className="text-gray-600">
                  All guests go through identity verification and we provide reviews from previous hosts to help you make informed decisions.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BecomeHost;
