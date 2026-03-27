'use client';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-baseline gap-3">
          <span className="font-display font-medium text-xl tracking-tighter text-white">SAG7</span>
          <span className="text-xs text-white/40 tracking-widest uppercase">Ventures</span>
        </div>
        <div className="flex items-center gap-6 text-xs text-white/40">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
        <div className="text-xs text-white/30">
          © 2026 SAG 7 Ventures. All rights reserved.
        </div>
      </div>
    </footer>
  );
}