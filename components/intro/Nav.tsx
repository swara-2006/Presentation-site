import { JSX } from 'react';

export default function Nav(): JSX.Element {
  return (
    <nav className="nav-content fixed w-full p-8 flex justify-between items-start z-[1] opacity-0 pointer-events-none">
      <div className="navlogo">
        <a href="#" className="no-underline text-white font-['DM_Sans'] text-[0.85rem] font-medium">LOREM</a>
      </div>
      <div className="nav-links flex gap-8 max-[1000px]:flex-col max-[1000px]:items-end max-[1000px]:gap-2">
        <a href="#" className="no-underline text-white font-['DM_Sans'] text-[0.85rem] font-medium">text</a>
        <a href="#" className="no-underline text-white font-['DM_Sans'] text-[0.85rem] font-medium">text</a>
        <a href="#" className="no-underline text-white font-['DM_Sans'] text-[0.85rem] font-medium">text</a>
        <a href="#" className="no-underline text-white font-['DM_Sans'] text-[0.85rem] font-medium">text</a>
        <a href="#" className="no-underline text-white font-['DM_Sans'] text-[0.85rem] font-medium">text</a>
      </div>
    </nav>
  );
}
