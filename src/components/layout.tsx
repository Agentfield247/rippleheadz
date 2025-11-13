import { Button } from "@/components/ui/button";
import logoImage from "@/assets/rippleheadz-logo.png";
import { Twitter, Send, ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'The Rippleheadz', href: '/team' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'How to Buy', href: '/how-to-buy' }, // Added How to Buy
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-ripple-sky to-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src={logoImage} 
                alt="Rippleheadz Logo" 
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-semibold transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Desktop Buy Now Button */}
              <Button className="bg-primary text-white hover:bg-primary/90 font-bold px-6 py-2 rounded-full">
                BUY NOW
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button className="bg-primary text-white hover:bg-primary/90 font-bold px-4 py-2 rounded-full text-sm">
                BUY NOW
              </Button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-semibold transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main content with padding for fixed nav */}
      <div className="pt-16">
        {children}
      </div>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 bg-primary text-primary-foreground text-center">
        <img 
          src={logoImage} 
          alt="Rippleheadz" 
          className="w-32 sm:w-48 mx-auto mb-4 sm:mb-6 opacity-90"
        />
        
        {/* Social Media Links */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
          <a 
            href="https://x.com/Rippleheadz?s=09" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative"
            aria-label="Twitter"
          >
            <div className="bg-white/10 p-2 sm:p-4 rounded-full transition-all duration-300 hover:bg-white hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
              <Twitter className="w-4 h-4 sm:w-6 sm:h-6 transition-colors duration-300 group-hover:text-primary" />
            </div>
          </a>
          
          <a 
            href="https://t.me/RIPPLEHEADZ_XRPL" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative"
            aria-label="Telegram"
          >
            <div className="bg-white/10 p-2 sm:p-4 rounded-full transition-all duration-300 hover:bg-white hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
              <Send className="w-4 h-4 sm:w-6 sm:h-6 transition-colors duration-300 group-hover:text-primary" />
            </div>
          </a>
          
          <a 
            href="https://dexscreener.com/xrpl/484541445a000000000000000000000000000000.rh3cps9tcn9gztwwkhfknjd5ygahsf9sfu_xrp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative"
            aria-label="DexScreener"
          >
            <div className="bg-white/10 p-2 sm:p-4 rounded-full transition-all duration-300 hover:bg-white hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
              <ExternalLink className="w-4 h-4 sm:w-6 sm:h-6 transition-colors duration-300 group-hover:text-primary" />
            </div>
          </a>
        </div>
        
        <p className="text-xs sm:text-sm opacity-90">© 2025 RIPPLEHEADZ. A Parody Memecoin.</p>
      </footer>
    </div>
  );
};

export default Layout;