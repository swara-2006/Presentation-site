"use client";
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation'; // Next.js App Router hook
import { gsap } from 'gsap';
import { ArrowDown } from 'lucide-react';

export default function LuxuryPortfolio() {
  const containerRef = useRef(null);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-bar", { y: -30, opacity: 0, duration: 1, ease: "power4.out" });
      gsap.from(".hero-content", { x: -30, opacity: 0, duration: 1, delay: 0.2 });
      gsap.from(".image-container", { scale: 0.95, opacity: 0, duration: 1.2, delay: 0.4 });
      gsap.from(".stat-box", { 
        y: 20, 
        opacity: 0, 
        stagger: 0.15, 
        duration: 0.8, 
        delay: 0.6, 
        ease: "back.out(1.7)" 
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Navigation handler with a quick animation feedback
  const handleSeeWork = (e: React.MouseEvent) => {
    const target = e.currentTarget;
    
    // Quick GSAP "click" effect before navigating
    gsap.to(target, { 
      scale: 0.95, 
      duration: 0.1, 
      onComplete: () => {
        gsap.to(target, { scale: 1, duration: 0.1 });
        router.push('/overview'); // Navigate to the overview page
      } 
    });
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white px-8 py-6 md:px-20 lg:px-32 font-sans overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="nav-bar flex items-center justify-between max-w-6xl mx-auto bg-[#0a0a0a]/90 backdrop-blur-xl border border-blue-900/30 rounded-2xl p-4 mb-20 shadow-[0_0_20px_rgba(0,112,243,0.1)]">
        <div className="text-base font-bold tracking-widest uppercase text-blue-500">Adrian JSM</div>
        <div className="hidden md:flex gap-10 text-[13px] font-medium text-gray-400">
          {['Work', 'Skills', 'Experience', 'Testimonials'].map((item) => (
            <a key={item} href="#" className="hover:text-blue-400 transition-colors tracking-tight">{item}</a>
          ))}
        </div>
        <button className="bg-blue-600 text-white px-8 py-2 rounded-lg text-xs font-bold hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all active:scale-95">
          Contact 
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
        <div className="hero-content lg:col-span-7 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight">
            Shaping <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-900/30 text-blue-400 text-lg align-middle mx-1 border border-blue-500/20">🤝</span> <span className="text-white">Ideas</span> <br />
            into <span className="text-blue-500/80">Real Projects</span> <br />
            that Deliver Results
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-md leading-relaxed">
            Hi, I'm Adrian, a developer based in Croatia with a passion for code and high-performance interfaces.
          </p>
          
          {/* NAVIGATION BUTTON */}
          <button 
            onClick={handleSeeWork}
            className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-lg text-sm font-bold hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            See My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Refined Image Container */}
        <div className="image-container lg:col-span-5 relative">
          <div className="absolute -inset-2 bg-blue-600/20 rounded-[2rem] blur-2xl"></div>
          <div className="relative aspect-square max-w-[380px] mx-auto bg-gradient-to-b from-[#111] to-black rounded-[2rem] overflow-hidden border border-blue-500/20 shadow-2xl">
            <img 
              src="/images/hero.png" 
              alt="Project Showcase" 
              className="w-full h-full object-cover opacity-80 mix-blend-lighten"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Years of Experience", value: "15+" },
          { label: "Satisfied Clients", value: "200+" },
          { label: "Completed Projects", value: "108+" },
          { label: "Client Retention Rate", value: "90%" },
        ].map((stat, i) => (
          <div key={i} className="stat-box group bg-[#050505] border border-blue-900/20 p-6 rounded-2xl hover:border-blue-500/50 transition-all duration-500">
            <div className="text-2xl md:text-3xl font-bold mb-1 text-white group-hover:text-blue-500 transition-colors">{stat.value}</div>
            <div className="text-gray-600 text-[11px] uppercase tracking-widest font-semibold">{stat.label}</div>
          </div>
        ))}
      </section>
    </div>
  );
}