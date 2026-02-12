'use client';

import { JSX, useEffect } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { CustomEase } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Intro(): JSX.Element {
  useEffect(() => {
    gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger);

    CustomEase.create('hop', '0.9, 0, 0.1, 1');

    const splitText = (
      selector: string | Element,
      type: 'chars' | 'words',
      className: string
    ) => {
      return SplitText.create(selector, {
        type,
        [`${type}Class`]: className,
        mask: type,
      });
    };

    splitText('.intro-preloader .header h1', 'chars', 'char');
    splitText('.intro-preloader nav a', 'words', 'word');
    splitText('.intro-preloader .hero-footer p', 'words', 'word');

    const counterProgress = document.querySelector(
      '.preloader-counter h1'
    ) as HTMLElement;

    const counterContainer = document.querySelector(
      '.preloader-counter'
    ) as HTMLElement;

    if (!counterProgress || !counterContainer) return;

    const counter: { value: number } = { value: 0 };
    
    // Auto preloader timeline
    const preloaderTl = gsap.timeline();

    preloaderTl.to(counter, {
      value: 100,
      duration: 3,
      ease: 'power3.out',
      onUpdate: () => {
        if (counterProgress) {
          counterProgress.textContent = Math.floor(counter.value).toString();
        }
      },
    });

    preloaderTl.to(
      counterContainer,
      {
        scale: 1,
        duration: 3,
        ease: 'power3.out',
      },
      '<'
    );

    preloaderTl.to({}, { duration: 0.5 });

    preloaderTl.call(() => {
      const counterSplit = splitText(counterProgress, 'chars', 'digit');
      gsap.to(counterSplit.chars, {
        x: '-100%',
        duration: 0.75,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 0.5,
      });
    });

    // Scroll-triggered animations
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.intro-preloader',
        start: 'top top',
        end: `+=${window.innerHeight * 3}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      },
    });

    scrollTl.to(
      '.progress-bar',
      {
        scaleX: 1,
        ease: 'power3.out',
      }
    );

    scrollTl.to('.hero-bg', {
      clipPath: 'polygon(35% 35%, 65% 35%, 65% 65%, 35% 65%)',
      ease: 'power2.inOut',
    });

    scrollTl.to(
      '.hero-bg',
      {
        clipPath: 'polygon(35% 35%, 65% 35%, 65% 65%, 35% 65%)',
        ease: 'hop',
      },
      '+=0.05'
    );

    scrollTl.to(
      '.hero-bg img',
      {
        scale: 1.5,
        ease: 'hop',
      },
      '<'
    );

    scrollTl.to(
      '.hero-bg',
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: 'hop',
      },
      '+=0.1'
    );

    scrollTl.to(
      '.hero-bg img',
      {
        scale: 1,
        ease: 'hop',
      },
      '<'
    );

    scrollTl.to(
      '.progress',
      {
        scaleX: 1,
        ease: 'hop',
      },
      '<'
    );

    scrollTl.to(
      '.intro-preloader .header h1 .char',
      {
        x: '0%',
        ease: 'power4.out',
        stagger: 0.02,
      },
      '<+=0.1'
    );

    scrollTl.to(
      '.intro-preloader nav a .word',
      {
        y: '0%',
        ease: 'power4.out',
        stagger: 0.02,
      },
      '<+=0.05'
    );

    scrollTl.to(
      '.intro-preloader .hero-footer p .word',
      {
        y: '0%',
        ease: 'power4.out',
        stagger: 0.02,
      },
      '<'
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === '.intro-preloader') {
          trigger.kill();
        }
      });
      preloaderTl.kill();
    };
  }, []);

  return (
    <section className="intro-preloader">
      <div className="preloader-counter">
        <h1>0</h1>
      </div>

      <nav>
        <div className="navlogo">
          <a href="#">LOREM</a>
        </div>
        <div className="nav-links">
          <a href="#">text</a>
          <a href="#">text</a>
          <a href="#">text</a>
          <a href="#">text</a>
          <a href="#">text</a>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80" alt="Hero Background" />
        </div>

        <div className="header">
          <h1>lorem</h1>
        </div>

        <div className="hero-footer">
          <p>text</p>
          <p>text</p>
          <p>text</p>
        </div>

        <div className="progress-bar">
          <div className="progress" />
        </div>
      </div>

      <style jsx global>{`
        /* CSS untouched — exactly as requested */
        @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@100..1000&display=swap");

        :root {
          --base-100: #fff;
          --base-200: #3a3a3a;
          --base-300: #000;
        }

        .intro-preloader {
          position: relative;
          width: 100%;
          height: 100svh;
          overflow: hidden;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background-color: var(--base-300);
          color: var(--base-100);
        }

        .intro-preloader img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .intro-preloader h1 {
          line-height: 1;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
        }

        .intro-preloader a,
        .intro-preloader p {
          text-decoration: none;
          color: var(--base-100);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .intro-preloader .preloader-counter {
          position: fixed;
          top: 50vh;
          left: 2rem;
          transform: translateY(-50%) scale(0.25);
          transform-origin: left bottom;
          z-index: 2;
        }

        .intro-preloader .preloader-counter h1 {
          font-size: clamp(2.5rem, 25vh, 25rem);
        }

        .intro-preloader nav {
          position: fixed;
          width: 100%;
          padding: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          z-index: 1;
        }

        .intro-preloader .nav-links {
          display: flex;
          gap: 2rem;
        }

        .intro-preloader .hero {
          position: relative;
          width: 100%;
          height: 100svh;
          overflow: hidden;
        }

        .intro-preloader .hero-bg {
          position: absolute;
          inset: 0;
          clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
          z-index: -1;
        }

        .intro-preloader .hero-bg img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(2);
        }

        .intro-preloader .header {
          position: absolute;
          bottom: 4rem;
          width: 100%;
          padding: 2rem;
        }

        .intro-preloader .header h1 {
          font-size: clamp(5rem, 18.5vh, 20rem);
        }

        .intro-preloader .hero-footer {
          position: absolute;
          bottom: 2rem;
          width: 100%;
          padding: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .intro-preloader .progress-bar {
          position: absolute;
          left: 2rem;
          bottom: 6rem;
          width: calc(100% - 4rem);
          height: 1px;
          background-color: var(--base-200);
          transform-origin: left;
          transform: scaleX(0);
          overflow: hidden;
        }

        .intro-preloader .progress {
          width: 100%;
          height: 100%;
          background-color: var(--base-100);
          transform-origin: left;
          transform: scaleX(0);
        }

        .intro-preloader .word,
        .intro-preloader .char,
        .intro-preloader .digit {
          display: inline-block;
          position: relative;
          overflow: hidden;
        }

        .intro-preloader .header h1 .char {
          transform: translateX(100%);
        }

        .intro-preloader nav a .word,
        .intro-preloader .hero-footer p .word {
          transform: translateY(100%);
        }

        @media (max-width: 1000px) {
          .intro-preloader .nav-links {
            flex-direction: column;
            align-items: flex-end;
            gap: 0.5rem;
          }

          .intro-preloader .header {
            bottom: unset;
            top: 50svh;
            display: flex;
            justify-content: center;
            transform: translateY(-50%);
          }

          .intro-preloader .header h1 {
            font-size: 4rem;
          }
        }
      `}</style>
    </section>
  );
}
