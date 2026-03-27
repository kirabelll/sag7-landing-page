'use client';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="glass-panel px-4 py-1.5 rounded-full mb-8 inline-flex items-center gap-2 border-white/10 opacity-0 transform translate-y-4" id="hero-badge">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          <span className="text-xs tracking-wider text-white/70 uppercase">Venture Capital Fund</span>
        </div>
        <h1 className="font-display font-medium text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-tight mb-6 opacity-0 transform translate-y-8" id="hero-title">
          Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 italic">x7 Growth</span>
        </h1>
        <p className="text-base md:text-lg text-white/50 max-w-2xl font-light mb-10 opacity-0" id="hero-subtitle">
          Private Equity Investments for Digital Businesses. We back visionary founders building the infrastructure of tomorrow.
        </p>
        <div className="flex items-center gap-4 opacity-0" id="hero-cta">
          <button 
            onClick={() => scrollToSection('pitch')}
            className="bg-white text-dark px-8 py-4 rounded-full text-sm font-medium hover:bg-white/90 transition-all flex items-center gap-2"
          >
            Submit Pitch Deck
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <iconify-icon icon="solar:mouse-minimalistic-linear" className="text-xl animate-bounce"></iconify-icon>
      </div>
    </section>
  );
}