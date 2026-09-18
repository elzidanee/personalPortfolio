"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: any;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
}

export function AnimatedGridPattern({
  width = 52,
  height = 52,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  numSquares = 32,
  className,
  maxOpacity = 0.22,
  duration = 3.5,
  repeatDelay = 1,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState<Array<{ id: number; pos: [number, number] }>>([]);

  const getPos = () => {
    return [
      Math.floor((Math.random() * (dimensions.width || 1200)) / width),
      Math.floor((Math.random() * (dimensions.height || 1200)) / height),
    ] as [number, number];
  };

  // Adjust the number of squares based on the size of the container
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(
        Array.from({ length: numSquares }, (_, i) => ({
          id: i,
          pos: getPos(),
        }))
      );
    }
  }, [dimensions, numSquares]);

  // Resize observer to update container size
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-cyan-400/10 stroke-white/[0.035] dark:stroke-white/[0.03] select-none",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [xPos, yPos], id: sqId }, index) => (
          <motion.rect
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: Infinity,
              delay: index * 0.15,
              repeatType: "reverse",
            }}
            onAnimationComplete={() => {
              setSquares((prevSquares) =>
                prevSquares.map((sq) =>
                  sq.id === sqId ? { ...sq, pos: getPos() } : sq
                )
              );
            }}
            key={`${xPos}-${yPos}-${index}`}
            width={width - 1}
            height={height - 1}
            x={xPos * width + 1}
            y={yPos * height + 1}
            fill="currentColor"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  );
}
