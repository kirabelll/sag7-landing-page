'use client';

import { useEffect } from 'react';
// @ts-ignore - GSAP types are available but TypeScript can't find them
import gsap from 'gsap';
// @ts-ignore - GSAP types are available but TypeScript can't find them
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const criteriaData = [
  {
    icon: "solar:box-linear",
    title: "Niches",
    description: "AI, Social Discovery, iGaming, Finance and other high-growth digital sectors."
  },
  {
    icon: "solar:pie-chart-2-linear",
    title: "Stake",
    description: "Significant Minority Stakes Orientation, typically targeting between 20% to 49%."
  },
  {
    icon: "solar:wad-of-money-linear",
    title: "Financing",
    description: "Smart Money Financing, providing not just capital but strategic operational support."
  },
  {
    icon: "solar:routing-2-linear",
    title: "Business Models",
    description: "Preference for Traffic-driven Business Models with clear unit economics and scalability."
  },
  {
    icon: "solar:sprout-linear",
    title: "Stages",
    description: "Partnering early. We focus primarily on Idea, Pre-Seed & Seed Stages."
  },
  {
    icon: "solar:banknotes-linear",
    title: "Ticket Size",
    description: "Investment Commitments ranging from USD 200K to USD 3 MLN per project."
  }
];

export default function CriteriaSection() {
  useEffect(() => {
    const initializeCardAnimations = async () => {
      // Register plugin
      gsap.registerPlugin(ScrollTrigger);
      
      // Subtle 3D tilt on cards via JS
      const cards = document.querySelectorAll('.criteria-card');
      cards.forEach(card => {
        const cardElement = card as HTMLElement;
        
        cardElement.addEventListener('mousemove', (e) => {
          const rect = cardElement.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -5;
          const rotateY = ((x - centerX) / centerX) * 5;
          
          gsap.to(cardElement, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.5,
            ease: "power2.out"
          });
        });
        
        cardElement.addEventListener('mouseleave', () => {
          gsap.to(cardElement, { 
            rotateX: 0, 
            rotateY: 0, 
            duration: 0.5, 
            ease: "power2.out" 
          });
        });
      });
    };

    initializeCardAnimations();
  }, []);

  return (
    <section id="criteria" className="min-h-screen py-32 px-6 relative z-10 bg-dark/50 backdrop-blur-3xl border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32">
          <h2 className="font-display font-medium text-3xl md:text-5xl tracking-tight mb-4">Our Investment Criteria</h2>
          <p className="text-base text-white/50 max-w-xl">Strategic capital tailored for high-leverage digital business models.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="criteria-grid">
          {criteriaData.map((criteria, index) => (
            <div key={index} className="criteria-card glass-panel p-8 rounded-2xl opacity-0 translate-y-10 hover:bg-white/5 transition-colors duration-500 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent/50 transition-colors">
                <iconify-icon icon={criteria.icon} className="text-2xl text-white/70 group-hover:text-accent"></iconify-icon>
              </div>
              <h3 className="font-display text-xl font-medium mb-3">{criteria.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{criteria.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}