import React from 'react';
import { MapPin, Navigation, Phone, ExternalLink } from 'lucide-react';

export const LocationMap: React.FC = () => {
  const googleMapsUrl = 'https://www.google.com/maps/place/Sokobane+Studios/@12.9927856,80.2036461,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52671d857ca4c9:0xc7e375d062d7f1dc!8m2!3d12.9927856!4d80.2062264!16s%2Fg%2F11p272djgv?hl=en&authuser=0&entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D';

  return (
    <section id="location" className="py-12 bg-[#0a0c12] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Simple Section Header */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Studio Location
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Adambakkam, Chennai - 600088
          </p>
        </div>

        {/* Compact Map Card */}
        <div className="bg-[#12141c] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
          
          {/* Compact Embedded Map */}
          <div className="w-full h-[280px] sm:h-[340px] relative bg-[#181a24]">
            <iframe
              src="https://maps.google.com/maps?q=12.9927856,80.2062264&hl=en&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sokobane Studios Location"
              className="w-full h-full filter invert-[0.85] hue-rotate-180 contrast-125"
            ></iframe>
          </div>

          {/* Location Actions Bar (No phone number on the button itself) */}
          <div className="p-4 bg-[#0e1017] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-[#facc15] shrink-0" />
              <span>Adambakkam, Chennai - 600088</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none bg-[#facc15] hover:bg-[#eab308] text-black font-extrabold px-4 py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all shadow"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>

              <a
                href="tel:9003188816"
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-3 py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#facc15]" />
                <span>Call Studio</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
