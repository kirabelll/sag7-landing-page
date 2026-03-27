'use client';

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      <div className="text-center z-10 mix-blend-difference" id="philosophy-content">
        <p className="text-sm md:text-base text-accent uppercase tracking-[0.3em] mb-4 opacity-0">Backing the Boldest Ideas</p>
        <h2 className="font-display font-medium text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-tight opacity-0 scale-95" id="philosophy-title">
          Beyond Investments.<br />
          <span className="text-white/40">Beyond Growth.</span>
        </h2>
      </div>
    </section>
  );
}