import React, { useState } from 'react';
import { ExternalLink, Phone } from 'lucide-react';

export const CalendarMirror: React.FC = () => {
  // Default view is MONTH per user specification
  const [currentMode, setCurrentMode] = useState<'MONTH' | 'WEEK'>('MONTH');

  const baseCalendarUrl = 'https://calendar.google.com/calendar/embed?src=sokobanestudios%40gmail.com&ctz=Asia%2FKolkata&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=1';
  const calendarEmbedSrc = `${baseCalendarUrl}&mode=${currentMode}`;

  return (
    <section id="calendar" className="py-12 bg-[#08090d] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Simple Section Header */}
        <div className="text-center mb-6 space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Studio Availability
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Click any day to view booked and open hours.
          </p>
        </div>

        {/* Compact Calendar Frame */}
        <div className="bg-[#12141c] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
          
          {/* Header Controls: Only Month and Week with Month as Default */}
          <div className="p-3 bg-[#0e1017] border-b border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-1.5 bg-[#181a24] p-1 rounded-lg border border-white/5">
              <button
                onClick={() => setCurrentMode('MONTH')}
                className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                  currentMode === 'MONTH'
                    ? 'bg-[#facc15] text-black shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Month (Default)
              </button>
              <button
                onClick={() => setCurrentMode('WEEK')}
                className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                  currentMode === 'WEEK'
                    ? 'bg-[#facc15] text-black shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Week
              </button>
            </div>

            <a
              href="https://calendar.google.com/calendar/embed?src=sokobanestudios%40gmail.com&ctz=Asia%2FKolkata"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-[#facc15] flex items-center gap-1 transition-colors"
            >
              <span>Open in Google Calendar</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Compact Sized Iframe */}
          <div className="w-full h-[400px] sm:h-[460px] relative bg-[#141620]">
            <iframe
              src={calendarEmbedSrc}
              style={{ border: 0 }}
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              title="Sokobane Studios Calendar"
              className="w-full h-full bg-white filter invert-[0.9] hue-rotate-180 contrast-125"
            ></iframe>
          </div>

          {/* Quick Call Bar (No phone number in button text) */}
          <div className="p-3 bg-[#0e1017] border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-slate-400">Ready to lock in a slot?</span>
            <a
              href="tel:9003188816"
              className="bg-[#facc15] hover:bg-[#eab308] text-black font-extrabold px-4 py-2 rounded-lg flex items-center gap-1.5 transition-all shadow"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Book Slot</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
