"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[380px] flex-col items-center justify-center overflow-hidden w-full z-0 pointer-events-none select-none",
        className
      )}
    >
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.3, width: "12rem" }}
          whileInView={{ opacity: 0.8, width: "26rem" }}
          viewport={{ once: true }}
          transition={{
            duration: 1.0,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-44 overflow-visible w-[26rem] bg-gradient-conic from-cyan-500/70 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] [mask-image:linear-gradient(to_bottom,white_40%,transparent_90%)]"
        />

        <motion.div
          initial={{ opacity: 0.3, width: "12rem" }}
          whileInView={{ opacity: 0.8, width: "26rem" }}
          viewport={{ once: true }}
          transition={{
            duration: 1.0,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-44 w-[26rem] bg-gradient-conic from-transparent via-transparent to-cyan-500/70 text-white [--conic-position:from_290deg_at_center_top] [mask-image:linear-gradient(to_bottom,white_40%,transparent_90%)]"
        />

        {/* Ambient glows without solid opaque blocking boxes */}
        <div className="absolute inset-auto z-20 h-28 w-[24rem] -translate-y-12 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <motion.div
          initial={{ width: "6rem", opacity: 0.4 }}
          whileInView={{ width: "14rem", opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.0,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-20 h-24 w-56 -translate-y-[4.5rem] rounded-full bg-cyan-400/30 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "10rem", opacity: 0.5 }}
          whileInView={{ width: "24rem", opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.0,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-0.5 w-[24rem] -translate-y-[5.5rem] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee]"
        ></motion.div>
      </div>

      {children && (
        <div className="relative z-40 flex flex-col items-center px-5 pointer-events-auto">
          {children}
        </div>
      )}
    </div>
  );
};
