"use client";

import { useEffect } from "react";
import SplitText from "gsap/SplitText";
import gsap from "gsap";
import Tooltip from "./tooltip";

import CameraIcon from "@/icons/camera";

gsap.registerPlugin(SplitText);

export default function Tooltips() {
  useEffect(() => {
    // Split text for animation
    const titles = new SplitText(".tooltip .title h2", {
      type: "lines",
      linesClass: "line",
    });

    const descriptions = new SplitText(".tooltip .description p", {
      type: "lines",
      linesClass: "line",
    });

    [...titles.lines, ...descriptions.lines].forEach((line) => {
      line.innerHTML = `<span>${line.innerHTML}</span>`;
    });

    // Note: Animations are now controlled by ProductOverview ScrollTrigger
  }, []);

  return (
    <section className="tooltips absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 flex gap-60 z-[250]">
      <Tooltip
        icon={<CameraIcon />}
        title="Built to last"
        description="Designed to match your pace, GRND runs all week on a single charge. No interruptions, no slowing down."
        className="justify-start items-start [&_.divider]:origin-right"
      />
      <Tooltip
        icon={<CameraIcon />}
        title="Built to last"
        description="Designed to match your pace, GRND runs all week on a single charge. No interruptions, no slowing down."
        className="justify-end items-start [&_.icon]:w-[70%] [&_.title]:w-[70%] [&_.description]:w-[70%] [&_.divider]:origin-left"
      />
    </section>
  );
}
