"use client";

import React, { useId } from "react";
import { FloatingPaths } from "./floating-paths";
import { cn } from "@/lib/utils";

/**
 * Clean Background - Sourced from top 21st.dev References:
 * 1. Bundui Floating Paths (https://21st.dev/@bundui/components/floating-paths)
 * 2. Julien Thibeaut (@ibelick) Tailwind CSS Background Snippet (https://21st.dev/@ibelick/components/background-snippets)
 * 3. Magic UI Clean Grid Pattern (Radial vignette mask, zero flashing squares, zero particles)
 */

interface CleanGridProps {
  width?: number;
  height?: number;
  className?: string;
}

function SubtleGrid({ width = 48, height = 48, className }: CleanGridProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full stroke-white/[0.04] dark:stroke-white/[0.04]",
        "[mask-image:radial-gradient(ellipse_80%_60%_at_50%_35%,#000_40%,transparent_90%)]",
        className
      )}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={-1}
          y={-1}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray="0"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}

export const CleanBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden select-none bg-[var(--bg,#07080b)]">
      {/* ─── 21ST.DEV @ibelick RADIAL SPOTLIGHT (JULIEN THIBEAUT) ─── */}
      <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] h-[600px] bg-gradient-to-b from-cyan-500/[0.07] via-sky-500/[0.03] to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] -left-[10%] w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/[0.035] via-blue-600/[0.02] to-transparent blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[5%] -right-[10%] w-[600px] h-[600px] bg-gradient-to-tl from-indigo-500/[0.035] via-purple-600/[0.02] to-transparent blur-[140px] rounded-full pointer-events-none" />

      {/* ─── 21ST.DEV SUBTLE TECHNICAL GRID (100% CLEAN, ZERO BLOCKS, ZERO PARTICLES) ─── */}
      <SubtleGrid width={52} height={52} />

      {/* ─── 21ST.DEV BUNDUI FLOATING PATHS (SMOOTH FLOWING VECTOR BEZIER CURVES) ─── */}
      <FloatingPaths position={1} className="opacity-90" />
      <FloatingPaths position={-1} className="opacity-60" />
    </div>
  );
};
