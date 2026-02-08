"use client";

import { ReactNode } from "react";

interface TooltipProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function Tooltip({
  icon,
  title,
  description,
  className = "",
}: TooltipProps) {
  return (
    <div className={`tooltip flex-1 flex flex-col gap-2 text-[#e0dfdf] ${className}`}>
      <div className="icon text-[2.5rem] overflow-hidden">
        {icon}
      </div>

      <div className="divider relative w-full h-px bg-[#5f5f5f] my-2" style={{ transform: 'scaleX(0)' }} />

      <div className="title">
        <h2 className="text-[3rem] font-medium leading-[1.125] tracking-[-0.03rem]">{title}</h2>
      </div>

      <div className="description text-[#5f5f5f]">
        <p className="text-[1.1rem] font-medium leading-[1.5]">{description}</p>
      </div>
    </div>
  );
}
