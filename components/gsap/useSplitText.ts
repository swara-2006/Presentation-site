import { useLayoutEffect, RefObject, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { CustomEase } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const useSplitText = (scope: RefObject<HTMLElement>) => {
  const hasInit = useRef(false);

  useLayoutEffect(() => {
    if (!scope.current || hasInit.current) return;
    hasInit.current = true;

    const ctx = gsap.context(() => {
      gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger);
      CustomEase.create('hop', '0.9, 0, 0.1, 1');
    }, scope);

    return () => {
      ctx.revert();
      hasInit.current = false;
    };
  }, [scope]);

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

  return { splitText };
};
