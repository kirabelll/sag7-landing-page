'use client';

import { useEffect } from 'react';

const arcsData = [
  { title: "Money", desc: "Funding and capital" },
  { title: "Expertise", desc: "Mentorship and domain expertise" },
  { title: "Insights", desc: "Market analytics and data-driven insights" },
  { title: "Infrastructure", desc: "Technical and operational infrastructure" },
  { title: "Network", desc: "Access to a curated network of contacts" },
  { title: "Collaborations", desc: "Strategic partnerships and collaborations" },
  { title: "Leverage", desc: "Scaling and growth leverage" }
];

export default function ArcsSection() {
  useEffect(() => {
    // Populate Arc Texts in DOM
    const arcsContainer = document.getElementById('arc-texts-container');
    if (arcsContainer) {
      arcsContainer.innerHTML = '';
      arcsData.forEach((arc, i) => {
        const div = document.createElement('div');
        div.className = `arc-text-item arc-item-${i}`;
        div.innerHTML = `
          <h3 class="font-display text-4xl md:text-6xl font-medium tracking-tight mb-2 ${i === 0 ? 'text-accent' : 'text-white'}">${arc.title}</h3>
          <p class="text-sm md:text-base text-white/50">${arc.desc}</p>
        `;
        arcsContainer.appendChild(div);
      });
    }
  }, []);

  return (
    <section id="arcs-section" className="relative">
      {/* Taller wrapper for scrolling duration */}
      <div className="h-[400vh]" id="arcs-scroll-wrapper">
        {/* Pinned inner container */}
        <div className="h-screen sticky top-0 flex items-center justify-center overflow-hidden w-full pointer-events-none" id="arcs-pinned">
          
          <div className="absolute top-32 left-1/2 -translate-x-1/2 text-center w-full z-20">
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-tight text-white/20" id="arcs-main-title">7 Arcs of Growth</h2>
          </div>

          {/* Text overlays controlled by JS */}
          <div className="relative w-full max-w-2xl mx-auto z-20 h-64 flex items-center justify-center">
            <div id="arc-texts-container" className="relative w-full h-full">
              {/* Injected by useEffect */}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}