import { useLayoutEffect, RefObject, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const useIntroScroll = (
  scope: RefObject<HTMLElement>,
  isReady: boolean
) => {
  const hasInit = useRef(false);

  useLayoutEffect(() => {
    if (!isReady || !scope.current || hasInit.current) return;
    hasInit.current = true;

    const ctx = gsap.context(() => {
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
    }, scope);

    return () => {
      ctx.revert();
      hasInit.current = false;
    };
  }, [isReady, scope]);
};
