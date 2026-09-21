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
    <div
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden select-none bg-[var(--bg,#07080b)]"
      style={{ contain: "strict", transform: "translateZ(0)" }}
    >
      {/* ─── 21ST.DEV @ibelick RADIAL SPOTLIGHT (JULIEN THIBEAUT) — ZERO BLUR OVERHEAD ─── */}
      <div
        className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] h-[550px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(6, 182, 212, 0.08) 0%, rgba(14, 165, 233, 0.03) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[35%] -left-[10%] w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.05) 0%, rgba(37, 99, 235, 0.02) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[5%] -right-[10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.05) 0%, rgba(147, 51, 234, 0.02) 50%, transparent 70%)",
        }}
      />

      {/* ─── 21ST.DEV SUBTLE TECHNICAL GRID (100% CLEAN, ZERO BLOCKS, ZERO PARTICLES) ─── */}
      <SubtleGrid width={52} height={52} />

      {/* ─── 21ST.DEV BUNDUI FLOATING PATHS (SMOOTH FLOWING VECTOR BEZIER CURVES) ─── */}
      <FloatingPaths position={1} className="opacity-80" />
    </div>
  );
};
