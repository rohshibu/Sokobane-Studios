import React from 'react';
import { Phone, MapPin, Calendar, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const googleMapsUrl = 'https://www.google.com/maps/place/Sokobane+Studios/@12.9927856,80.2036461,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52671d857ca4c9:0xc7e375d062d7f1dc!8m2!3d12.9927856!4d80.2062264!16s%2Fg%2F11p272djgv?hl=en&authuser=0&entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D';

  return (
    <footer className="bg-[#050608] border-t border-white/5 py-10 text-slate-400 text-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo.png"
              alt="Sokobane Studios"
              className="h-9 w-auto object-contain"
            />
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:9003188816"
              className="text-[#facc15] font-mono font-bold flex items-center gap-1.5 hover:underline"
            >
              <Phone className="w-3.5 h-3.5" /> 90031 88816
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="tel:9500087188"
              className="text-[#facc15] font-mono font-bold flex items-center gap-1.5 hover:underline"
            >
              <Phone className="w-3.5 h-3.5" /> 95000 87188
            </a>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3 text-slate-400" />
            <span>Adambakkam, Chennai - 600088</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://calendar.google.com/calendar/embed?src=sokobanestudios%40gmail.com&ctz=Asia%2FKolkata"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 flex items-center gap-1"
            >
              <Calendar className="w-3 h-3" />
              <span>Calendar</span>
            </a>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 flex items-center gap-1"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Google Maps</span>
            </a>
            <span>© {new Date().getFullYear()} Sokobane Studios</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
