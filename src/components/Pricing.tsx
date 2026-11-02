import React from 'react';
import { Check, Sparkles, ArrowRight, Zap } from 'lucide-react';

interface PricingProps {
  onOpenBooking: (pkg: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenBooking }) => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#090b10] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-[#facc15]" />
            <span>Transparent Studio Rates</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Simple, Creator-Centric <span className="text-[#facc15]">Pricing</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Whether you need a quick 2-hour interview recording or want us to manage your entire 30-day content pipeline from competitor analysis to daily video delivery.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          
          {/* Tier 1: Hourly Studio Rental */}
          <div className="bg-[#12141c] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-white/25 transition-all duration-300">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Hourly Studio</div>
              <h3 className="text-2xl font-bold text-white mb-2">Pay-As-You-Shoot</h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Ideal for solo interviews, corporate voiceovers, or single guest podcast episodes.
              </p>

              <div className="mb-6 pb-6 border-b border-white/10">
                <span className="text-xs text-slate-400 block mb-1">Standard Hourly Rate</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white">Custom / Hr</span>
                </div>
                <span className="text-[11px] text-[#facc15] font-medium mt-1 block">
                  *Special introductory slot rates available
                </span>
              </div>

              <ul className="space-y-3 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#facc15] shrink-0" />
                  <span>1,000 sq ft acoustic studio access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#facc15] shrink-0" />
                  <span>Dual broadcast microphone rigging</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#facc15] shrink-0" />
                  <span>Studio sound engineer on standby</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#facc15] shrink-0" />
                  <span>Raw 4K & WAV multi-track audio handover</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenBooking('Hourly Studio Rental')}
              className="w-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all"
            >
              Book Hourly Slot
            </button>
          </div>

          {/* Tier 2: 30-Day Creator Growth Package (Featured) */}
          <div className="bg-gradient-to-b from-[#181c2b] to-[#12141c] border-2 border-[#facc15] rounded-3xl p-8 flex flex-col justify-between relative shadow-2xl shadow-[#facc15]/10 transform lg:-translate-y-2">
            
            {/* Best Value Ribbon */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#facc15] text-black font-extrabold text-[11px] uppercase tracking-widest px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Most Popular Choice</span>
            </div>

            <div>
              <div className="text-xs font-bold text-[#facc15] uppercase tracking-wider mb-2 mt-1">
                Full Production & Growth
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">30-Day Creator Package</h3>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                The all-in-one content engine: Anytime studio bulk shooting, competitor research, viral scripting & daily delivered edits.
              </p>

              <div className="mb-6 pb-6 border-b border-white/10">
                <span className="text-xs text-slate-400 block mb-1">Monthly Creator Engine</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white">Full 30 Days</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-semibold mt-1 block">
                  ✓ 30 Editable & Postable Videos Guaranteed
                </span>
              </div>

              <ul className="space-y-3 text-xs text-slate-200 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" />
                  <span className="font-semibold text-white">Anytime Bulk Shooting in 1,000 sq ft Studio</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" />
                  <span className="font-semibold text-white">Competitor Internet Scraping & Trend Audits</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" />
                  <span className="font-semibold text-white">Superior Custom Scripting & Hook Engineering</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" />
                  <span className="font-semibold text-white">Daily Video Editing & Turnkey Publishing Delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" />
                  <span>Color grading, kinetic subtitles & B-roll overlays</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenBooking('30-Day Creator Growth Package')}
              className="w-full bg-[#facc15] hover:bg-[#eab308] text-black font-extrabold py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 group"
            >
              <span>Apply For Creator Package</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Tier 3: Bulk Shoot Pass */}
          <div className="bg-[#12141c] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-white/25 transition-all duration-300">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Multi-Hour Pass</div>
              <h3 className="text-2xl font-bold text-white mb-2">Half / Full Day Pass</h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Record 4-8 episodes or batch all your brand campaigns in one uninterrupted session.
              </p>

              <div className="mb-6 pb-6 border-b border-white/10">
                <span className="text-xs text-slate-400 block mb-1">Session Based</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white">4 & 8 Hr Slots</span>
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Flexible blockout with calendar sync
                </span>
              </div>

              <ul className="space-y-3 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#facc15] shrink-0" />
                  <span>Full exclusive studio lock</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#facc15] shrink-0" />
                  <span>Dedicated audio-visual technician</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#facc15] shrink-0" />
                  <span>Multi-cam switching & ISO recording</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#facc15] shrink-0" />
                  <span>Green room lounge & refreshments</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenBooking('Bulk Shoot Pass (Half/Full Day)')}
              className="w-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all"
            >
              Book Bulk Session
            </button>
          </div>

        </div>

        {/* Instant Contact Line */}
        <div className="text-center">
          <p className="text-xs text-slate-400">
            Have custom requirements or need a specific production setup? Call our studio managers directly:
          </p>
          <div className="inline-flex items-center gap-4 mt-2">
            <a href="tel:9003188816" className="text-sm font-mono font-bold text-[#facc15] hover:underline">
              +91 90031 88816
            </a>
            <span className="text-slate-600">•</span>
            <a href="tel:9500087188" className="text-sm font-mono font-bold text-[#facc15] hover:underline">
              +91 95000 87188
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
