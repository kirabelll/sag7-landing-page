'use client';

import { useState } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    // Add cookie acceptance logic here
  };

  const handleDecline = () => {
    setIsVisible(false);
    // Add cookie decline logic here
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 glass-panel p-6 rounded-2xl z-50 flex flex-col gap-4 transform translate-y-48 transition-transform duration-700" id="cookie-banner">
      <p className="text-xs text-white/70 leading-relaxed">
        We use cookies to optimize our website and our service. 
        <a href="#" className="text-white underline decoration-white/30 hover:decoration-white ml-1">
          Read more
        </a>.
      </p>
      <div className="flex gap-3">
        <button 
          onClick={handleDecline}
          className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg text-xs transition-colors"
        >
          Decline
        </button>
        <button 
          onClick={handleAccept}
          className="flex-1 bg-white text-dark py-2 rounded-lg text-xs font-medium hover:bg-white/90 transition-colors"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}