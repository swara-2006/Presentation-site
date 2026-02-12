import { JSX } from 'react';

export default function Hero(): JSX.Element {
  return (
    <div className="hero hero-content relative w-full h-screen overflow-hidden opacity-0 pointer-events-none">
      <div className="hero-bg absolute inset-0 [clip-path:polygon(50%_50%,50%_50%,50%_50%,50%_50%)] -z-10">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80" 
          alt="Hero Background"
          className="w-full h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[2]"
        />
      </div>

      <div className="header absolute bottom-16 w-full p-8 max-[1000px]:bottom-auto max-[1000px]:top-1/2 max-[1000px]:flex max-[1000px]:justify-center max-[1000px]:-translate-y-1/2">
        <h1 className="text-[clamp(5rem,18.5vh,20rem)] leading-none font-['DM_Sans'] font-bold max-[1000px]:text-[4rem]">lorem</h1>
      </div>

      <div className="hero-footer absolute bottom-8 w-full p-8 flex justify-between items-start">
        <p className="no-underline text-white font-['DM_Sans'] text-[0.85rem] font-medium">text</p>
        <p className="no-underline text-white font-['DM_Sans'] text-[0.85rem] font-medium">text</p>
        <p className="no-underline text-white font-['DM_Sans'] text-[0.85rem] font-medium">text</p>
      </div>

      <div className="progress-bar absolute left-8 bottom-24 w-[calc(100%-4rem)] h-px bg-[#3a3a3a] origin-left scale-x-0 overflow-hidden">
        <div className="progress w-full h-full bg-white origin-left scale-x-0" />
      </div>
    </div>
  );
}
