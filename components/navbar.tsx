"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

/* -----------------------------------
   Magnetic Item
----------------------------------- */
function MagneticItem({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const strength = 25;

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(el, {
      x: x / strength,
      y: y / strength,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <Link
      ref={ref}
      href="#"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        px-4 py-2 text-sm text-white rounded-full
        hover:bg-white hover:text-black
        transition-colors duration-300
        will-change-transform
      "
    >
      {children}
    </Link>
  );
}

/* -----------------------------------
   Navbar
----------------------------------- */
export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  const navItems = ["Home", "Members", "Blog", "Privacy", "Contact"];

  return (
    <div className="w-full flex justify-center mt-6">
      <div
        ref={navRef}
        className="
          flex items-center
          px-4 py-1
          bg-black rounded-full
          
          min-w-249
          justify-between
        
        shadow-[0_12px_36px_rgba(0,0,0,0.4),0_6px_16px_rgba(0,0,0,0.3)]"
      >
        {/* LEFT : ICON */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-full" />
          </div>
        </div>

        {/* CENTER : NAV LINKS */}
        <div className="flex-1 flex justify-center gap-3">
          {navItems.map((item) => (
            <MagneticItem key={item}>{item}</MagneticItem>
          ))}
        </div>

        {/* RIGHT : AUTH */}
        <div className="flex items-center gap-3">
          <MagneticItem>Log In</MagneticItem>
          <MagneticItem>Register</MagneticItem>
        </div>
      </div>
    </div>
  );
}
