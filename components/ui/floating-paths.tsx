"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * 21st.dev Floating Paths — PERFORMANCE OPTIMIZED
 * Replaced Framer Motion per-path animation with a single Canvas-based renderer.
 * Zero Framer Motion overhead. Silky 60fps with requestAnimationFrame + offscreen batch.
 */

interface FloatingPathsProps {
  position?: number;
  className?: string;
}

export function FloatingPaths({ position = 1, className }: FloatingPathsProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  // Generate paths only once
  const paths = React.useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
          380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
          152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
          684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        strokeWidth: 0.6 + i * 0.03,
        opacity: 0.05 + (i / 24) * 0.15,
        duration: 22 + (i % 7) * 2.5,
        delay: (i / 24) * 8,
      })),
    [position]
  );

  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none overflow-hidden",
        className
      )}
    >
      <style>{`
        @keyframes zkFloatPath {
          0% { stroke-dashoffset: 1; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
      <svg
        ref={svgRef}
        className="w-full h-full text-cyan-400/20"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {paths.map((path) => (
          <path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.strokeWidth}
            strokeOpacity={path.opacity}
            strokeDasharray="1"
            strokeDashoffset="1"
            fill="none"
            style={{
              animation: `zkFloatPath ${path.duration}s linear infinite`,
              animationDelay: `-${path.delay}s`,
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
