'use client';

import { useState } from 'react';

export default function PitchSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    deck: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="pitch" className="min-h-screen py-32 px-6 relative flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-2xl mx-auto glass-panel p-8 md:p-12 rounded-3xl relative z-10">
        <div className="mb-10 text-center">
          <h2 className="font-display font-medium text-4xl tracking-tight mb-3">Pitch Us</h2>
          <p className="text-sm text-white/50">Submit your deck. We review every submission.</p>
        </div>

        <form className="space-y-8 pointer-events-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input-line w-full pb-3 text-sm focus:ring-0 peer placeholder-transparent" 
                placeholder="Name" 
                required 
              />
              <label htmlFor="name" className="absolute left-0 top-0 text-sm text-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-accent -translate-y-5">
                Full Name
              </label>
            </div>
            <div className="relative">
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input-line w-full pb-3 text-sm focus:ring-0 peer placeholder-transparent" 
                placeholder="Email" 
                required 
              />
              <label htmlFor="email" className="absolute left-0 top-0 text-sm text-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-accent -translate-y-5">
                Email Address
              </label>
            </div>
          </div>

          <div className="relative">
            <input 
              type="text" 
              id="company" 
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="input-line w-full pb-3 text-sm focus:ring-0 peer placeholder-transparent" 
              placeholder="Company" 
              required 
            />
            <label htmlFor="company" className="absolute left-0 top-0 text-sm text-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-accent -translate-y-5">
              Company / Project Name
            </label>
          </div>

          <div className="relative">
            <input 
              type="url" 
              id="deck" 
              name="deck"
              value={formData.deck}
              onChange={handleInputChange}
              className="input-line w-full pb-3 text-sm focus:ring-0 peer placeholder-transparent" 
              placeholder="Deck URL" 
              required 
            />
            <label htmlFor="deck" className="absolute left-0 top-0 text-sm text-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-accent -translate-y-5">
              Pitch Deck URL
            </label>
          </div>

          <div className="relative">
            <textarea 
              id="description" 
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={3} 
              className="input-line w-full pb-3 text-sm focus:ring-0 peer placeholder-transparent resize-none" 
              placeholder="Description" 
              required
            />
            <label htmlFor="description" className="absolute left-0 top-0 text-sm text-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-accent -translate-y-5">
              Brief Description
            </label>
          </div>

          <button type="submit" className="w-full bg-white text-dark py-4 rounded-xl text-sm font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group">
            Send Protocol
            <iconify-icon icon="solar:plain-2-linear" className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></iconify-icon>
          </button>
        </form>
      </div>
    </section>
  );
}