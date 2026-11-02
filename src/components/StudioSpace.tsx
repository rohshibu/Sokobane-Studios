import React, { useState } from 'react';
import { Camera } from 'lucide-react';

export const StudioSpace: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<'front' | 'angle' | 'curtain'>('front');

  const photos = {
    front: {
      src: '/assets/studio-front.jpg',
      label: 'Main Stage & Microphones',
    },
    angle: {
      src: '/assets/studio-angle.jpg',
      label: 'Acoustic Wood Lounge Angle',
    },
    curtain: {
      src: '/assets/studio-curtain.jpg',
      label: 'Acoustic Curtain Backdrop & Track Lighting',
    },
  };

  return (
    <section id="studio" className="py-12 bg-[#08090d] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-6 space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            The Studio
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Acoustic fluted wood battens, dual broadcast mics & curtain backdrop setup.
          </p>
        </div>

        {/* Single High Quality Photo Display with 3 Views */}
        <div className="bg-[#12141c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-[16/10] sm:aspect-[16/9] w-full relative overflow-hidden bg-black">
            <img
              src={photos[activePhoto].src}
              alt={photos[activePhoto].label}
              className="w-full h-full object-cover transition-opacity duration-300"
              loading="eager"
            />
          </div>

          {/* Photo Switcher Toolbar */}
          <div className="p-3 sm:p-4 bg-[#0e1017] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-[#facc15]" />
              <span className="text-slate-200 font-medium">
                {photos[activePhoto].label}
              </span>
            </div>

            <div className="flex items-center gap-1.5 bg-[#181a24] p-1 rounded-lg border border-white/5">
              <button
                onClick={() => setActivePhoto('front')}
                className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                  activePhoto === 'front'
                    ? 'bg-[#facc15] text-black shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                View 1: Main Stage
              </button>
              <button
                onClick={() => setActivePhoto('angle')}
                className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                  activePhoto === 'angle'
                    ? 'bg-[#facc15] text-black shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                View 2: Lounge
              </button>
              <button
                onClick={() => setActivePhoto('curtain')}
                className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                  activePhoto === 'curtain'
                    ? 'bg-[#facc15] text-black shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                View 3: Curtain Backdrop
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
