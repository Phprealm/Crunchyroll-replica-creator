
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = ({ isTransparent = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className={`w-full z-50 py-4 ${isTransparent ? 'absolute top-0 left-0' : 'bg-moviebox-dark'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-moviebox-primary rounded flex items-center justify-center">
              <span className="text-white font-bold">TB</span>
            </div>
            <span className="text-white font-bold text-xl">MovieBox</span>
          </Link>
          
          {/* Desktop Search */}
          <div className="hidden md:flex header-search border border-gray-300 rounded-md overflow-hidden">
            <input 
              type="text" 
              placeholder="What do you want to watch?"
              className="bg-transparent text-white px-4 py-1.5 outline-none w-64"
            />
            <button className="px-4 text-white">
              <Search size={18} />
            </button>
          </div>
          
          {/* Sign In Button and Menu Toggle */}
          <div className="flex items-center gap-6">
            <Button 
              variant="link" 
              className="hidden md:flex text-white hover:text-moviebox-primary"
            >
              Sign In
            </Button>
            <button 
              className="w-8 h-8 rounded-full bg-moviebox-primary flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={18} className="text-white" />
            </button>
          </div>
        </div>
        
        {/* Mobile Search */}
        <div className="mt-4 md:hidden header-search border border-gray-300 rounded-md overflow-hidden">
          <input 
            type="text" 
            placeholder="What do you want to watch?"
            className="bg-transparent text-white px-4 py-1.5 outline-none w-full"
          />
          <button className="absolute right-0 px-4 text-white">
            <Search size={18} />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 right-4 bg-moviebox-dark border border-gray-700 shadow-lg rounded-md p-4 w-48 md:w-56 animate-fade-in">
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white hover:text-moviebox-primary block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/movies" className="text-white hover:text-moviebox-primary block">
                  Movies
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white hover:text-moviebox-primary block">
                  TV Series
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white hover:text-moviebox-primary block">
                  Upcoming
                </Link>
              </li>
              <li className="md:hidden pt-2 border-t border-gray-700">
                <Button 
                  variant="link" 
                  className="text-white hover:text-moviebox-primary p-0"
                >
                  Sign In
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
