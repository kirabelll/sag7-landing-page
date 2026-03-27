'use client';

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5 transition-all duration-300" id="navbar">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-baseline gap-3 cursor-pointer" 
          onClick={() => window.scrollTo(0, 0)}
        >
          <span className="font-display font-medium text-2xl tracking-tighter text-white">SAG7</span>
          <span className="text-xs text-white/50 tracking-widest uppercase hidden md:inline-block">Investment Office</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <button 
            onClick={() => scrollToSection('arcs-section')} 
            className="hover:text-white transition-colors"
          >
            7 Arcs
          </button>
          <button 
            onClick={() => scrollToSection('philosophy')} 
            className="hover:text-white transition-colors"
          >
            Philosophy
          </button>
          <button 
            onClick={() => scrollToSection('criteria')} 
            className="hover:text-white transition-colors"
          >
            Criteria
          </button>
        </div>
        <button 
          onClick={() => scrollToSection('pitch')}
          className="group relative px-5 py-2.5 glass-panel rounded-full overflow-hidden flex items-center gap-2 hover:bg-white/10 transition-colors"
        >
          <span className="relative z-10 text-sm font-medium tracking-wide">Pitch us</span>
          <iconify-icon icon="solar:arrow-right-up-linear" className="text-lg relative z-10 group-hover:text-accent transition-colors"></iconify-icon>
        </button>
      </div>
    </nav>
  );
}