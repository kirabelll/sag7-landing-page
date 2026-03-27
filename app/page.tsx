'use client';

import { useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ArcsSection from './components/ArcsSection';
import PhilosophySection from './components/PhilosophySection';
import CriteriaSection from './components/CriteriaSection';
import PitchSection from './components/PitchSection';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import ThreeBackground from './components/ThreeBackground';

export default function Home() {
  useEffect(() => {
    // Initialize smooth scrolling and animations
    const initializeApp = async () => {
      const { default: Lenis } = await import('lenis');
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      // Register GSAP plugins first
      gsap.registerPlugin(ScrollTrigger);

      // Initialize Lenis (Smooth Scroll)
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Initial page load animations
      const tlLoad = gsap.timeline();
      tlLoad.to("#hero-badge", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
            .to("#hero-title", { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6")
            .to("#hero-subtitle", { opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6")
            .to("#hero-cta", { opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6");

      // Show cookie banner after delay
      setTimeout(() => {
        const cookieBanner = document.getElementById('cookie-banner');
        if (cookieBanner) {
          cookieBanner.classList.remove('translate-y-48');
        }
      }, 2000);
    };

    initializeApp();
  }, []);

  return (
    <>
      <ThreeBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <ArcsSection />
        <PhilosophySection />
        <CriteriaSection />
        <PitchSection />
        <Footer />
      </main>
      <CookieBanner />
    </>
  );
}
