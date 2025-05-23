
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Plane, Brain, Users, Search, Home } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-travel-gradient rounded-lg">
              <Plane className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">WanderVia</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="flex items-center space-x-1 text-gray-700 hover:text-travel-blue transition-colors">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </a>
            <a href="#ai-planner" className="flex items-center space-x-1 text-gray-700 hover:text-travel-blue transition-colors">
              <Brain className="h-4 w-4" />
              <span>AI Trip Planner</span>
            </a>
            <a href="#travel-buddies" className="flex items-center space-x-1 text-gray-700 hover:text-travel-blue transition-colors">
              <Users className="h-4 w-4" />
              <span>Travel Buddies</span>
            </a>
            <a href="#explore" className="flex items-center space-x-1 text-gray-700 hover:text-travel-blue transition-colors">
              <Search className="h-4 w-4" />
              <span>Explore</span>
            </a>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-travel-blue">
              Become a Host
            </Button>
            <Button className="bg-travel-gradient hover:opacity-90 text-white">
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200">
            <a href="#home" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </a>
            <a href="#ai-planner" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Brain className="h-4 w-4" />
              <span>AI Trip Planner</span>
            </a>
            <a href="#travel-buddies" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Users className="h-4 w-4" />
              <span>Travel Buddies</span>
            </a>
            <a href="#explore" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Search className="h-4 w-4" />
              <span>Explore</span>
            </a>
            <div className="px-4 space-y-2">
              <Button variant="outline" className="w-full">
                Become a Host
              </Button>
              <Button className="w-full bg-travel-gradient hover:opacity-90 text-white">
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
