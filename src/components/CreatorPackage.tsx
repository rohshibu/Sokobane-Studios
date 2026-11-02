import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export const CreatorPackage: React.FC = () => {
  return (
    <section id="creator-package" className="py-12 bg-[#0a0c12] border-t border-white/5">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-6">
        
        {/* Simple Section Title */}
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            The Creator Package
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            All-inclusive monthly production, scripting, studio access & editing.
          </p>
        </div>

        {/* Creator Package Poster Graphic - Constrained for Razor Sharp Quality */}
        <div className="bg-[#12141c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-2 max-w-md mx-auto">
          <img
            src="/assets/creator-package.jpg"
            alt="The Creator Package - Sokobane Studios - ₹30,000 per month"
            className="w-full h-auto rounded-xl object-contain shadow"
            style={{ imageRendering: 'auto' }}
          />
        </div>

        {/* Direct Booking Call / WhatsApp Actions (No phone number in button text) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="tel:9003188816"
            className="w-full sm:w-auto bg-[#facc15] hover:bg-[#eab308] text-black font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>Book Creator Package</span>
          </a>

          <a
            href="https://wa.me/919003188816?text=Hi%20Sokobane%20Studios,%20I%20am%20interested%20in%20The%20Creator%20Package."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
