"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * 21st.dev Component Reference: Floating Paths (by Bundui.io)
 * Source: https://21st.dev/@bundui/components/floating-paths
 * 
 * Elegant, minimalist animated SVG bezier paths.
 * 100% Vector, Zero particles, Zero canvas pixels.
 */

interface FloatingPathsProps {
  position?: number;
  className?: string;
}

export function FloatingPaths({ position = 1, className }: FloatingPathsProps) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.6 + i * 0.03,
  }));

  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      <svg
        className="w-full h-full text-cyan-400/25 dark:text-cyan-400/20"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>21st.dev Floating Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.06 + (path.id / 36) * 0.18}
            initial={{ pathLength: 0.3, opacity: 0.4 }}
            animate={{
              pathLength: 1,
              opacity: [0.35, 0.7, 0.35],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 22 + (path.id % 7) * 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function FloatingPathsBackground({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
      {children}
    </div>
  );
}
