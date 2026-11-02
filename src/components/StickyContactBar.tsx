import React from 'react';
import { Phone, Calendar, MessageSquare } from 'lucide-react';

interface StickyContactBarProps {
  onOpenBooking: () => void;
}

export const StickyContactBar: React.FC<StickyContactBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#090b10]/95 backdrop-blur-xl border-t border-white/10 py-2.5 px-4 md:py-3 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left Side: Call Info (Desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          <span className="text-[11px] uppercase font-bold text-slate-400">Call Studio:</span>
          <a
            href="tel:9003188816"
            className="flex items-center gap-1.5 text-xs font-mono font-bold text-white hover:text-[#facc15] bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#facc15]" />
            <span>90031 88816</span>
          </a>
          <a
            href="tel:9500087188"
            className="flex items-center gap-1.5 text-xs font-mono font-bold text-white hover:text-[#facc15] bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#facc15]" />
            <span>95000 87188</span>
          </a>
        </div>

        {/* Mobile Left: Quick Call Pill */}
        <div className="flex sm:hidden items-center gap-1.5">
          <a
            href="tel:9003188816"
            className="flex items-center gap-1 bg-[#181a24] border border-white/10 text-[#facc15] text-[11px] font-mono font-bold px-2.5 py-2 rounded-lg"
          >
            <Phone className="w-3 h-3" />
            <span>9003188816</span>
          </a>
          <a
            href="tel:9500087188"
            className="flex items-center gap-1 bg-[#181a24] border border-white/10 text-[#facc15] text-[11px] font-mono font-bold px-2.5 py-2 rounded-lg"
          >
            <Phone className="w-3 h-3" />
            <span>9500087188</span>
          </a>
        </div>

        {/* Right Side: Fast Actions */}
        <div className="flex items-center gap-2">
          <a
            href="#calendar-mirror"
            className="hidden md:flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-white/5 border border-white/10 px-3 py-2 rounded-xl transition-colors"
          >
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>Live Calendar</span>
          </a>

          <a
            href="https://wa.me/919003188816?text=Hi%20Sokobane%20Studios,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20slot."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-xs px-3 sm:px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow-md"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="bg-[#facc15] hover:bg-[#eab308] text-black font-extrabold text-xs uppercase tracking-wider px-4 sm:px-5 py-2 rounded-xl shadow-lg transition-all"
          >
            Book Slot
          </button>
        </div>

      </div>
    </div>
  );
};
