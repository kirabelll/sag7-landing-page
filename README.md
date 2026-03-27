# SAG7 Ventures - Next.js Application

A modern investment office website built with Next.js, featuring 3D animations, smooth scrolling, and responsive design.

## Features

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Three.js** for 3D graphics and animations
- **GSAP** for advanced animations and scroll triggers
- **Lenis** for smooth scrolling
- **Responsive Design** optimized for all devices

## Project Structure

```
sag7/
├── app/
│   ├── components/          # React components
│   │   ├── Navigation.tsx   # Main navigation
│   │   ├── HeroSection.tsx  # Hero section with CTA
│   │   ├── ArcsSection.tsx  # 7 Arcs of Growth section
│   │   ├── PhilosophySection.tsx # Philosophy section
│   │   ├── CriteriaSection.tsx   # Investment criteria
│   │   ├── PitchSection.tsx      # Pitch form
│   │   ├── Footer.tsx            # Footer component
│   │   ├── CookieBanner.tsx      # Cookie consent
│   │   └── ThreeBackground.tsx   # 3D background
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── types/
│   └── iconify.d.ts         # TypeScript definitions
├── package.json
├── tailwind.config.js       # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Key Components

### ThreeBackground
- Manages the 3D scene with Three.js
- Creates animated crystalline polyhedron for hero section
- Renders 7 arcs animation during scroll
- Handles particle background effects

### ArcsSection
- Implements the "7 Arcs of Growth" concept
- Synchronized 3D animations with text content
- Scroll-triggered progression through each arc

### PitchSection
- Contact form for pitch submissions
- Controlled form inputs with React state
- Floating label animations

## Technologies Used

- **Next.js 16.2.1** - React framework
- **React 19.2.4** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **Three.js 0.160.0** - 3D graphics
- **GSAP 3.12.2** - Animation library
- **Lenis 1.0.42** - Smooth scrolling

## Build and Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Migration Notes

This project was migrated from a static HTML page to a modern Next.js application with the following improvements:

- Component-based architecture for better maintainability
- TypeScript integration for type safety
- Proper React state management
- Optimized performance with Next.js features
- Better SEO with proper meta tags
- Modular CSS with Tailwind CSS

## License

© 2026 SAG 7 Ventures. All rights reserved.
