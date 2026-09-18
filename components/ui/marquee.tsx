"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  duration?: string;
  gap?: string;
}

export const Marquee = ({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 4,
  duration = "35s",
  gap = "1.25rem",
}: MarqueeProps) => {
  return (
    <div
      style={
        {
          "--duration": duration,
          "--gap": gap,
        } as React.CSSProperties
      }
      className={cn(
        "group flex overflow-hidden p-2 select-none",
        pauseOnHover && "marquee-pause",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around items-center gap-[var(--gap)]",
            vertical
              ? reverse
                ? "animate-marquee-vertical-reverse"
                : "animate-marquee-vertical"
              : reverse
              ? "animate-marquee-reverse"
              : "animate-marquee"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
};
