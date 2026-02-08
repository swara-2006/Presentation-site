"use client";

import { useEffect, type ReactNode } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import * as THREE from "three";
import { modelRef } from "./modelContainer";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface ProductOverviewProps {
  children?: ReactNode;
}

export default function ProductOverview({ children }: ProductOverviewProps) {
  useEffect(() => {
    // Initialize smooth scrolling (optional - requires lenis package)
    // If you want to add Lenis: npm install lenis
    // import Lenis from 'lenis';
    // const lenis = new Lenis();
    // lenis.on('scroll', ScrollTrigger.update);
    // gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    // gsap.ticker.lagSmoothing(0);

    // Wait for tooltips to be ready (SplitText happens in Tooltips component)
    // Small delay ensures SplitText has processed before ScrollTrigger animates
    setTimeout(() => {
      const headerSplit = new SplitText(".header-1 h1", {
        type: "chars",
        charsClass: "char",
      });

      headerSplit.chars.forEach((char) => {
        char.innerHTML = `<span>${char.innerHTML}</span>`;
      });

      let rotation = 0;

      ScrollTrigger.create({
      trigger: ".product-overview",
      start: "top top",
      end: `+=${window.innerHeight * 10}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,

      onUpdate: ({ progress }) => {
        // Header 1 Animation
        const headerProgress = Math.max(
          0,
          Math.min(1, (progress - 0.05) / 0.3)
        );

        gsap.to(".header-1", {
          xPercent:
            progress < 0.05
              ? 0
              : progress > 0.35
              ? -100
              : -100 * headerProgress,
          duration: 0,
          overwrite: true,
        });

        // Circular Mask Animation
        const maskSize =
          progress < 0.2
            ? 0
            : progress > 0.3
            ? 100
            : 100 * ((progress - 0.2) / 0.1);

        gsap.to(".circular-mask", {
          clipPath: `circle(${maskSize}% at 50% 50%)`,
          duration: 0,
          overwrite: true,
        });

        // Header 2 Animation
        const header2Progress = (progress - 0.15) / 0.35;
        const header2XPercent =
          progress < 0.15
            ? 100
            : progress > 0.5
            ? -200
            : 100 - 300 * header2Progress;

        gsap.to(".header-2", {
          xPercent: header2XPercent,
          duration: 0,
          overwrite: true,
        });

        // Tooltip Divider Animation
        const scaleX =
          progress < 0.45
            ? 0
            : progress > 0.65
            ? 1
            : ((progress - 0.45) / 0.2);

        gsap.to(".tooltip .divider", {
          scaleX: scaleX,
          duration: 0,
          overwrite: true,
        });

        // Tooltip Elements Animation
        gsap.to(".tooltip:nth-child(1) .line > span, .tooltip:nth-child(1) .icon svg", {
          y: progress > 0.65 ? "0%" : "125%",
          duration: 0,
          overwrite: true,
        });

        gsap.to(".tooltip:nth-child(2) .line > span, .tooltip:nth-child(2) .icon svg", {
          y: progress > 0.85 ? "0%" : "125%",
          duration: 0,
          overwrite: true,
        });

        // Model Rotation Animation
        if (modelRef && progress >= 0.05) {
          const rotationProgress = (progress - 0.05) / 0.95;
          const targetRotation = Math.PI * 3 * 2 * rotationProgress;
          const rotationDiff = targetRotation - rotation;

          if (Math.abs(rotationDiff) > 0.001) {
            modelRef.rotateOnAxis(new THREE.Vector3(0, 1, 0), rotationDiff);
            rotation = targetRotation;
          }
        }
      },
    });
    }, 100); // 100ms delay to ensure Tooltips component has completed SplitText

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="product-overview relative w-screen h-svh overflow-hidden bg-[#f5f5f4] text-[#0d0d0d]">
      {/* HEADER 1 */}
      <div className="header-1 relative w-[200vw] h-svh translate-x-0 flex items-center justify-center px-8">
        <h1 className="w-full text-[15vw] leading-tight tracking-[-0.02em] font-medium">Every Rep Starts With</h1>
      </div>

      {/* HEADER 2 */}
      <div className="header-2 fixed top-0 left-0 w-[150vw] translate-x-full z-10 flex items-center justify-center px-8 text-[#e0dfdf]">
        <h1 className="w-full text-[15vw] leading-tight tracking-[-0.02em] font-medium">GRND Shaker</h1>
      </div>

      {/* MASK */}
      <div className="circular-mask absolute inset-0 bg-[#0d0d0d]" style={{ clipPath: 'circle(0% at 50% 50%)' }} />

      {/* 🔥 CHILDREN GO HERE */}
      {children}
    </section>
  );
}
