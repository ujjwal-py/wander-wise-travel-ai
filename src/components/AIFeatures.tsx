
import { Brain, MapPin, Users, Clock, TrendingUp, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AIFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: 'Smart Recommendations',
      description: 'AI analyzes your preferences, budget, and travel style to create personalized itineraries'
    },
    {
      icon: MapPin,
      title: 'Location Intelligence',
      description: 'We consider your location, local weather patterns, and seasonal trends for optimal timing'
    },
    {
      icon: TrendingUp,
      title: 'Global Trend Analysis',
      description: 'Access real-time insights from millions of travelers and emerging destination trends'
    },
    {
      icon: Clock,
      title: 'Perfect Timing',
      description: 'Get recommendations based on the best times to visit, avoiding crowds and bad weather'
    },
    {
      icon: Users,
      title: 'Travel Buddy Matching',
      description: 'Find like-minded solo travelers heading to the same destinations with AI compatibility scoring'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Real-time safety updates and travel advisories integrated into every recommendation'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Our <span className="text-gradient">AI</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced AI algorithms analyze millions of data points to create the perfect travel experience for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 travel-card-hover group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-travel-blue/10 to-travel-teal/10 rounded-lg group-hover:from-travel-blue/20 group-hover:to-travel-teal/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-travel-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-travel-blue/5 to-travel-teal/5 rounded-2xl p-8 border border-travel-blue/10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience AI-Powered Travel?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of travelers who have discovered their perfect trips with our AI recommendations
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-travel-emerald rounded-full"></div>
                <span>50,000+ AI-generated itineraries</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-travel-blue rounded-full"></div>
                <span>98% traveler satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-travel-teal rounded-full"></div>
                <span>Real-time global data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
