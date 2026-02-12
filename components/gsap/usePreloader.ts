import { useLayoutEffect, RefObject, useRef } from 'react';
import gsap from 'gsap';
import { useSplitText } from './useSplitText';

export const usePreloader = (
  scope: RefObject<HTMLElement>,
  onComplete?: () => void
) => {
  const { splitText } = useSplitText(scope);
  const hasInit = useRef(false);

  useLayoutEffect(() => {
    if (!scope.current || hasInit.current) return;
    hasInit.current = true;

    const ctx = gsap.context(() => {
      gsap.set('.intro-preloader', { autoAlpha: 0 });

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

      gsap.set('.intro-preloader', { autoAlpha: 1 });

      const counter: { value: number } = { value: 0 };
      
      // Auto preloader timeline
      const preloaderTl = gsap.timeline({
        onComplete: () => {
          if (onComplete) {
            onComplete();
          }
        },
      });

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
    }, scope);

    return () => {
      ctx.revert();
      hasInit.current = false;
    };
  }, [splitText, onComplete, scope]);
};
