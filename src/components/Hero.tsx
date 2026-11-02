import React from 'react';
import { Phone, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-10 sm:pt-32 sm:pb-14 flex items-center justify-center overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[220px] bg-[#facc15]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full text-center space-y-6">
        
        {/* Child Company Badge with Sokobane Productions */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
          <img
            src="/assets/productions-logo.png"
            alt="Sokobane Productions"
            className="h-4 w-auto object-contain"
          />
          <span className="text-slate-400">A child company of</span>
          <span className="text-white font-semibold">Sokobane Productions</span>
        </div>

        {/* Centerpiece Official Logo */}
        <div className="flex justify-center py-2">
          <img
            src="/assets/logo.png"
            alt="Sokobane Studios"
            className="w-64 sm:w-80 md:w-96 h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Short, crisp description */}
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
          Premium podcast and video recording space in Adambakkam, Chennai. 
          1,000 sq. ft. sound-treated studio equipped with acoustic fluted timber, dual broadcast microphones, and 4K multi-cam capture.
        </p>

        {/* Direct Action Buttons (No raw phone numbers as button text) */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="tel:9003188816"
            className="w-full sm:w-auto bg-[#facc15] hover:bg-[#eab308] text-black font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>Book Slot</span>
          </a>

          <a
            href="#creator-package"
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#facc15]" />
            <span>The Creator Package</span>
          </a>
        </div>

        {/* Plain text contact reference */}
        <div className="pt-1 flex items-center justify-center gap-3 text-xs text-slate-400">
          <span>Inquiries:</span>
          <a href="tel:9003188816" className="text-white hover:text-[#facc15] font-mono font-bold">
            90031 88816
          </a>
          <span className="text-slate-600">•</span>
          <a href="tel:9500087188" className="text-white hover:text-[#facc15] font-mono font-bold">
            95000 87188
          </a>
        </div>

      </div>
    </section>
  );
};
