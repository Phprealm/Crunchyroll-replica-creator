
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, User, Bell, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const CrunchyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50 border-b border-border">
      <div className="cr-container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center">
            <img
              src="https://static.crunchyroll.com/cxweb/assets/img/logo-cr.png"
              alt="Crunchyroll"
              className="h-8"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-secondary">Browse</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-3">
                      <div>
                        <h4 className="mb-2 text-sm font-medium leading-none text-crunchyroll-orange">Popular</h4>
                        <ul className="space-y-2 text-sm">
                          <li><NavigationMenuLink className="cr-link">Top Anime</NavigationMenuLink></li>
                          <li><NavigationMenuLink className="cr-link">Fall 2023</NavigationMenuLink></li>
                          <li><NavigationMenuLink className="cr-link">Winter 2024</NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 text-sm font-medium leading-none text-crunchyroll-orange">Genres</h4>
                        <ul className="space-y-2 text-sm">
                          <li><NavigationMenuLink className="cr-link">Action</NavigationMenuLink></li>
                          <li><NavigationMenuLink className="cr-link">Drama</NavigationMenuLink></li>
                          <li><NavigationMenuLink className="cr-link">Comedy</NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 text-sm font-medium leading-none text-crunchyroll-orange">Simulcast</h4>
                        <ul className="space-y-2 text-sm">
                          <li><NavigationMenuLink className="cr-link">All Titles</NavigationMenuLink></li>
                          <li><NavigationMenuLink className="cr-link">Release Calendar</NavigationMenuLink></li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-secondary">Manga</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[200px]">
                      <ul className="space-y-2 text-sm">
                        <li><NavigationMenuLink className="cr-link">All Manga</NavigationMenuLink></li>
                        <li><NavigationMenuLink className="cr-link">Popular</NavigationMenuLink></li>
                        <li><NavigationMenuLink className="cr-link">New</NavigationMenuLink></li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-foreground hover:text-crunchyroll-orange px-3 py-2">
                    News
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button variant="ghost" className="text-crunchyroll-orange">
                    Try Premium
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right side navigation elements */}
        <div className="flex items-center gap-4">
          {/* Search bar */}
          <div className={`header-search ${searchFocus ? 'ring-1 ring-crunchyroll-orange' : ''}`}>
            <input
              type="text"
              placeholder="Search"
              className="bg-secondary py-1 px-3 rounded-l-md text-sm w-32 md:w-64 outline-none"
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
            />
            <button className="bg-crunchyroll-orange p-1 rounded-r-md">
              <Search className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span className="hidden lg:inline">Account</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary p-4 animate-fade-in">
          <nav className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-crunchyroll-orange">Browse</h3>
              <ul className="space-y-2 pl-4">
                <li><Link to="/" className="cr-link text-sm">Top Anime</Link></li>
                <li><Link to="/" className="cr-link text-sm">Genres</Link></li>
                <li><Link to="/" className="cr-link text-sm">Simulcast</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-crunchyroll-orange">Manga</h3>
              <ul className="space-y-2 pl-4">
                <li><Link to="/" className="cr-link text-sm">All Manga</Link></li>
                <li><Link to="/" className="cr-link text-sm">Popular</Link></li>
              </ul>
            </div>
            <Link to="/" className="block text-sm font-medium text-crunchyroll-orange">
              News
            </Link>
            <Button className="w-full">Try Premium</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default CrunchyNavbar;
