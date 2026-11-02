import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StudioSpace } from './components/StudioSpace';
import { CreatorPackage } from './components/CreatorPackage';
import { CalendarMirror } from './components/CalendarMirror';
import { LocationMap } from './components/LocationMap';
import { Footer } from './components/Footer';
import { Phone } from 'lucide-react';

export function App() {
  return (
    <div className="min-h-screen bg-[#08090d] text-[#e2e8f0] relative selection:bg-[#facc15] selection:text-black">
      {/* Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="pb-16 sm:pb-0">
        <Hero />
        <StudioSpace />
        <CreatorPackage />
        <CalendarMirror />
        <LocationMap />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Direct Call Bar (Clean button label, dials tel:9003188816) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090b10]/95 backdrop-blur-md border-t border-white/10 p-3 shadow-2xl">
        <a
          href="tel:9003188816"
          className="w-full bg-[#facc15] hover:bg-[#eab308] text-black font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg"
        >
          <Phone className="w-4 h-4" />
          <span>Book Slot</span>
        </a>
      </div>
    </div>
  );
}

export default App;
