"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import SpotlightRow from "./SpotlightRow";
import SpotlightCard from "./SpotlightCard";
import StrokePath from "./storkePath";

gsap.registerPlugin(ScrollTrigger);

export default function SpotlightSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const path = document.getElementById("stroke-path") as unknown as SVGPathElement;
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-8 py-32 flex flex-col gap-40 overflow-hidden max-lg:gap-20"
    >
      <SpotlightRow image="/img1.png" center />

      <SpotlightRow image="/img2.png">
        <SpotlightCard
          title="A cleaner way to handle incoming updates"
          text="Instead of showing every message instantly, the app groups related
                items and keeps your workspace calm."
        />
      </SpotlightRow>

      <SpotlightRow image="/img3.png" reverse>
        <SpotlightCard
          title="Built for increasing information demands"
          text="The app sorts and prioritizes items automatically to prevent clutter."
        />
      </SpotlightRow>

      <SpotlightRow image="/img4.png" center />

      <StrokePath />
    </section>
  );
}
