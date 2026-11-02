import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Sparkles, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090a0f]/95 backdrop-blur-md border-b border-white/10 py-2.5 shadow-xl'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img
              src="/assets/logo.png"
              alt="Sokobane Studios"
              className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-300">
            <a href="#studio" className="hover:text-[#facc15] transition-colors">
              Studio
            </a>
            <a href="#creator-package" className="hover:text-[#facc15] transition-colors flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#facc15]" />
              Creator Package
            </a>
            <a href="#calendar" className="hover:text-[#facc15] transition-colors">
              Calendar
            </a>
            <a href="#location" className="hover:text-[#facc15] transition-colors flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Location
            </a>
          </div>

          {/* Direct Phone Call Button (Without displaying raw number on button) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:9003188816"
              className="bg-[#facc15] hover:bg-[#eab308] text-black font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-lg flex items-center gap-1.5 transition-all shadow-md active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Book Slot</span>
            </a>
          </div>

          {/* Mobile Button & Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:9003188816"
              className="bg-[#facc15] text-black font-extrabold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Book Slot</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-300 hover:text-white rounded-lg"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0d14] border-b border-white/10 px-5 py-4 space-y-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
          <a
            href="#studio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 hover:text-[#facc15]"
          >
            Studio
          </a>
          <a
            href="#creator-package"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 hover:text-[#facc15]"
          >
            The Creator Package
          </a>
          <a
            href="#calendar"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 hover:text-[#facc15]"
          >
            Availability Calendar
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 hover:text-[#facc15]"
          >
            Location & Map
          </a>
          <div className="pt-2 border-t border-white/10">
            <a
              href="tel:9003188816"
              className="w-full bg-[#facc15] text-black text-center font-bold py-2.5 rounded-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call To Book Slot</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
