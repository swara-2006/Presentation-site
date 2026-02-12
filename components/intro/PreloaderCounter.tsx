import { JSX } from 'react';

export default function PreloaderCounter(): JSX.Element {
  return (
    <div className="preloader-counter fixed top-1/2 left-8 -translate-y-1/2 scale-[0.25] origin-left-bottom z-[2]">
      <h1 className="text-[clamp(2.5rem,25vh,25rem)] leading-none font-['DM_Sans'] font-bold">0</h1>
    </div>
  );
}
