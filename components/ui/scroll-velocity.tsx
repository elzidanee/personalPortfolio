"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

// Pure mathematical wrap helper
function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  className?: string;
}

function ParallaxText({
  children,
  baseVelocity = 100,
  className,
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap select-none py-2">
      <motion.div
        className={cn(
          "font-mono font-bold uppercase tracking-wider text-xl md:text-3xl flex whitespace-nowrap flex-nowrap gap-8 text-cyan-400/70",
          className
        )}
        style={{ x }}
      >
        <span>{children} ✦</span>
        <span>{children} ✦</span>
        <span>{children} ✦</span>
        <span>{children} ✦</span>
      </motion.div>
    </div>
  );
}

export function ScrollVelocity({
  texts,
  velocity = 3,
  className,
}: {
  texts: string[];
  velocity?: number;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden py-4 my-8 border-y border-white/5 bg-black/20 backdrop-blur-sm",
        className
      )}
    >
      {texts.map((text, index) => (
        <ParallaxText
          key={index}
          baseVelocity={index % 2 === 0 ? velocity : -velocity}
        >
          {text}
        </ParallaxText>
      ))}
    </section>
  );
}
