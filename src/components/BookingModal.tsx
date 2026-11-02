import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialPackage }) => {
  const [packageName, setPackageName] = useState(initialPackage || '30-Day Creator Growth Package');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (09:00 AM - 01:00 PM)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Studio Booking Inquiry - Sokobane Studios*%0A%0A` +
      `*Name:* ${encodeURIComponent(name || 'Creator')}%0A` +
      `*Phone:* ${encodeURIComponent(phone || 'Not provided')}%0A` +
      `*Package:* ${encodeURIComponent(packageName)}%0A` +
      `*Preferred Date:* ${encodeURIComponent(preferredDate || 'Flexible')}%0A` +
      `*Time Slot:* ${encodeURIComponent(timeSlot)}%0A` +
      `*Project Notes:* ${encodeURIComponent(notes || 'Interested in booking studio space')}`;

    const whatsappUrl = `https://wa.me/919003188816?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#12141c] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Booking Inquiry Initiated!</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              We have launched WhatsApp with your prefilled details. You can also connect directly with our studio line right now:
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <a
                href="tel:9003188816"
                className="bg-[#facc15] hover:bg-[#eab308] text-black font-extrabold text-xs py-3 rounded-xl uppercase tracking-wider"
              >
                Call Primary: +91 90031 88816
              </a>
              <a
                href="tel:9500087188"
                className="bg-white/10 hover:bg-white/15 text-white font-semibold text-xs py-3 rounded-xl uppercase tracking-wider"
              >
                Call Secondary: +91 95000 87188
              </a>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="text-xs text-slate-400 hover:text-white underline pt-2 block mx-auto"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#facc15] font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Reserve Studio Slot</span>
              </div>
              <h3 className="text-2xl font-black text-white">Book At Sokobane Studios</h3>
              <p className="text-xs text-slate-400">1,000 Sq. Ft. Audio & Video Space in Chennai</p>
            </div>

            <form onSubmit={handleWhatsAppBooking} className="space-y-4">
              
              {/* Package Select */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Select Package / Service
                </label>
                <select
                  value={packageName}
                  onChange={(e) => setPackageName(e.target.value)}
                  className="w-full bg-[#181a26] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#facc15]"
                >
                  <option value="30-Day Creator Growth Package">⭐ 30-Day Creator Package (Scripts + Studio + Daily Edits)</option>
                  <option value="Hourly Studio Rental">Hourly Studio Rental (Podcasts / Interviews)</option>
                  <option value="Bulk Shoot Pass (Half/Full Day)">Bulk Shoot Pass (Half / Full Day Exclusive)</option>
                  <option value="Custom Studio Inquiry">Custom Production Setup</option>
                </select>
              </div>

              {/* Date & Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Target Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#181a26] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#facc15]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Time Window
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-[#181a26] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#facc15]"
                  >
                    <option value="Morning (09:00 AM - 01:00 PM)">Morning (9 AM - 1 PM)</option>
                    <option value="Afternoon (02:00 PM - 06:00 PM)">Afternoon (2 PM - 6 PM)</option>
                    <option value="Evening (06:00 PM - 10:00 PM)">Evening (6 PM - 10 PM)</option>
                    <option value="Late Night / Flexible">Late Night / Custom Slot</option>
                  </select>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Roh Shibu"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#181a26] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#facc15]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 90031 88816"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#181a26] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#facc15]"
                  />
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  About Your Podcast or Shoot
                </label>
                <textarea
                  rows={2}
                  placeholder="Number of speakers, topics, or competitor info if requesting the Creator Package..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#181a26] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#facc15]"
                ></textarea>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full bg-[#facc15] hover:bg-[#eab308] text-black font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirm & Send via WhatsApp</span>
                </button>

                <div className="text-center">
                  <span className="text-[11px] text-slate-400">Prefer a phone call directly?</span>
                  <div className="flex justify-center gap-3 mt-1">
                    <a href="tel:9003188816" className="text-xs font-mono font-bold text-[#facc15] hover:underline">
                      Call 90031 88816
                    </a>
                    <span className="text-slate-600">•</span>
                    <a href="tel:9500087188" className="text-xs font-mono font-bold text-[#facc15] hover:underline">
                      Call 95000 87188
                    </a>
                  </div>
                </div>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
