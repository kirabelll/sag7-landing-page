'use client';

import React, { useEffect, useRef } from 'react';

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const initThreeJS = async () => {
      const THREE = await import('three');
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      // Register GSAP plugins first
      gsap.registerPlugin(ScrollTrigger);

      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      const scene = new THREE.Scene();
      
      // Fog for depth
      scene.fog = new THREE.FogExp2(0x0a0a0a, 0.015);

      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 25;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const isMobile = window.innerWidth < 768;

      // Groups to manage transformations
      const mainGroup = new THREE.Group();
      scene.add(mainGroup);

      const heroGroup = new THREE.Group();
      const arcsGroup = new THREE.Group();
      const bgGroup = new THREE.Group();
      mainGroup.add(heroGroup, arcsGroup, bgGroup);

      // --- Create Hero Object (Abstract Crystalline Polyhedron) ---
      const heroGeo = new THREE.IcosahedronGeometry(4, 1);
      const heroMat = new THREE.MeshBasicMaterial({ 
        color: 0x0a0a0a, 
        wireframe: false,
        transparent: true,
        opacity: 0.9
      });
      const heroWireMat = new THREE.LineBasicMaterial({ color: 0x333333, transparent: true, opacity: 0.5 });
      const heroMesh = new THREE.Mesh(heroGeo, heroMat);
      
      const wireframe = new THREE.WireframeGeometry(heroGeo);
      const line = new THREE.LineSegments(wireframe, heroWireMat);
      heroMesh.add(line);

      // Inner core
      const coreGeo = new THREE.OctahedronGeometry(2, 0);
      const coreMat = new THREE.MeshBasicMaterial({ color: 0x00F0FF, wireframe: true, transparent: true, opacity: 0.3 });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      heroMesh.add(coreMesh);

      heroGroup.add(heroMesh);
      heroGroup.position.set(0, 0, 0);

      // --- Create 7 Arcs ---
      const arcsCount = 7;
      const radius = 8;
      const tube = 0.05;
      const arcMeshes: THREE.Mesh[] = [];
      
      // Hide arcs initially
      arcsGroup.position.y = -50; 
      arcsGroup.rotation.x = Math.PI / 3; // Tilt it

      for (let i = 0; i < arcsCount; i++) {
        // Calculate segment angle
        const angleSpan = (Math.PI * 2) / arcsCount;
        const gap = 0.2;
        const geo = new THREE.TorusGeometry(radius, tube, 8, 64, angleSpan - gap);
        
        const mat = new THREE.MeshBasicMaterial({ 
          color: 0x222222, 
          transparent: true, 
          opacity: 0.3 
        });
        
        const mesh = new THREE.Mesh(geo, mat);
        
        // Position around circle
        mesh.rotation.z = (i * angleSpan) + (gap/2);
        
        arcMeshes.push(mesh);
        arcsGroup.add(mesh);
      }

      // --- Background Particles ---
      const particlesCount = 1000;
      const posArray = new Float32Array(particlesCount * 3);
      for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100;
      }
      const particlesGeo = new THREE.BufferGeometry();
      particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      const particlesMat = new THREE.PointsMaterial({
        size: 0.05,
        color: 0xffffff,
        transparent: true,
        opacity: 0.3
      });
      const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
      bgGroup.add(particlesMesh);

      // Animation Loop
      const timer = new THREE.Timer();
      
      function animate() {
        timer.update();
        const elapsedTime = timer.getElapsed();

        // Idle animations
        if (!isMobile) {
          heroMesh.rotation.y = elapsedTime * 0.1;
          heroMesh.rotation.x = elapsedTime * 0.05;
          coreMesh.rotation.y = -elapsedTime * 0.2;
          
          arcsGroup.rotation.z = elapsedTime * 0.05;
          
          bgGroup.rotation.y = elapsedTime * 0.02;
        }

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
      animate();

      // GSAP Scroll Animations (if not mobile)
      if (!isMobile) {
        
        // Navbar blur effect
        ScrollTrigger.create({
          start: "top -50",
          end: 99999,
          toggleClass: {className: "bg-dark/70", targets: "#navbar"}
        });

        // Hero to Arcs Transition
        gsap.to(heroGroup.position, {
          y: 15, // Move up and out
          z: -20,
          ease: "none",
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });

        // Arcs Pinned Section
        const arcsTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#arcs-scroll-wrapper",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          }
        });

        // Bring arcs group into view
        arcsTl.to(arcsGroup.position, { y: 0, duration: 0.1 }, 0);
        arcsTl.to(arcsGroup.rotation, { x: 0, duration: 0.2 }, 0);
        arcsTl.to("#arcs-main-title", { opacity: 1, duration: 0.1 }, 0);

        // Animate through the 7 steps
        const stepDuration = 1 / arcsCount;
        
        for(let i=0; i < arcsCount; i++) {
          const startTime = i * stepDuration;
          
          // Highlight corresponding 3D arc
          arcsTl.call(() => {
            // Reset all
            arcMeshes.forEach(m => {
              (m.material as THREE.MeshBasicMaterial).color.setHex(0x222222);
              (m.material as THREE.MeshBasicMaterial).opacity = 0.3;
            });
            // Highlight active
            (arcMeshes[i].material as THREE.MeshBasicMaterial).color.setHex(0x00F0FF);
            (arcMeshes[i].material as THREE.MeshBasicMaterial).opacity = 1;
          }, null, startTime);
        }

        // Move arcs away
        arcsTl.to(arcsGroup.position, { z: 30, opacity: 0, duration: 0.2 }, 0.9);
        arcsTl.to("#arcs-main-title", { opacity: 0, duration: 0.1 }, 0.9);

        // Philosophy Push-through (Camera movement)
        const philTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#philosophy",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });

        // Camera zooms in dramatically
        philTl.to(camera.position, { z: -30, ease: "power1.inOut" }, 0);
        
        // HTML text scale up
        gsap.to("#philosophy-title", {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: "#philosophy",
            start: "top 60%",
            end: "top 20%",
            scrub: true
          }
        });
        gsap.to("#philosophy-content p", {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: "#philosophy",
            start: "top 60%",
            end: "top 30%",
            scrub: true
          }
        });

        // Criteria Cards Stagger
        gsap.to(".criteria-card", {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#criteria",
            start: "top 60%",
          }
        });

      } else {
        // Mobile Fallbacks (Simplified)
        gsap.to(".criteria-card", {
          y: 0, opacity: 1, stagger: 0.1, duration: 0.5,
          scrollTrigger: { trigger: "#criteria", start: "top 80%" }
        });
        
        gsap.to("#philosophy-title", {
          scale: 1, opacity: 1,
          scrollTrigger: { trigger: "#philosophy", start: "top 70%", end: "top 30%", scrub: true }
        });
      }

      // Handle Resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
      };
    };

    initThreeJS();
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      id="webgl-canvas" 
      className="fixed inset-0 z-0 pointer-events-none w-full h-full"
    />
  );
}