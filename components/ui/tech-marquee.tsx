"use client";

import React from "react";
import { Marquee } from "./marquee";

interface TechItem {
  name: string;
  category: string;
  icon: string;
  color: string;
  badge: string;
}

const techRow1: TechItem[] = [
  {
    name: "Next.js",
    category: "Fullstack Architecture",
    icon: "fab fa-react",
    color: "#38bdf8",
    badge: "v16 / App Router",
  },
  {
    name: "Flutter",
    category: "Mobile Application",
    icon: "fas fa-mobile-alt",
    color: "#06b6d4",
    badge: "iOS & Android",
  },
  {
    name: "TypeScript",
    category: "Type-Safe Development",
    icon: "fas fa-code",
    color: "#3b82f6",
    badge: "Clean Code",
  },
  {
    name: "Supabase",
    category: "Backend & PostgreSQL",
    icon: "fas fa-database",
    color: "#10b981",
    badge: "Auth & DB",
  },
  {
    name: "Tailwind CSS",
    category: "Modern UI Styling",
    icon: "fas fa-palette",
    color: "#38bdf8",
    badge: "Responsive",
  },
  {
    name: "Dart",
    category: "Mobile Performance",
    icon: "fas fa-feather-alt",
    color: "#60a5fa",
    badge: "Native Speed",
  },
];

const techRow2: TechItem[] = [
  {
    name: "Figma",
    category: "UI/UX & Prototyping",
    icon: "fab fa-figma",
    color: "#f43f5e",
    badge: "Design System",
  },
  {
    name: "Three.js",
    category: "3D Graphics & WebGL",
    icon: "fas fa-cube",
    color: "#a855f7",
    badge: "Interactive 3D",
  },
  {
    name: "Python",
    category: "Automation & AI",
    icon: "fab fa-python",
    color: "#eab308",
    badge: "Backend & OCR",
  },
  {
    name: "GitHub",
    category: "Version Control & CI/CD",
    icon: "fab fa-github",
    color: "#f1f5f9",
    badge: "26+ Repos",
  },
  {
    name: "Node.js",
    category: "Server Runtime & APIs",
    icon: "fab fa-node-js",
    color: "#22c55e",
    badge: "RESTful APIs",
  },
  {
    name: "Vercel",
    category: "Cloud Deployment",
    icon: "fas fa-cloud-upload-alt",
    color: "#ffffff",
    badge: "Edge Network",
  },
];

function TechCard({ item }: { item: TechItem }) {
  return (
    <div className="flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-white/[0.03] dark:bg-[#10131c]/80 hover:bg-white/[0.08] dark:hover:bg-[#171b28] border border-white/10 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-md shadow-sm hover:shadow-[0_0_20px_rgba(0,229,195,0.15)] group cursor-default min-w-[240px]">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 shadow-inner transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundColor: `${item.color}15`,
          border: `1px solid ${item.color}35`,
          color: item.color,
        }}
      >
        <i className={item.icon}></i>
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="font-bold text-sm text-slate-100 tracking-tight group-hover:text-cyan-400 transition-colors">
            {item.name}
          </span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400 group-hover:border-cyan-400/30 group-hover:text-cyan-300 transition-colors">
            {item.badge}
          </span>
        </div>
        <span className="text-[11px] text-slate-400 truncate mt-0.5">
          {item.category}
        </span>
      </div>
    </div>
  );
}

export const TechMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-8 my-4">
      {/* Top and Bottom borders with subtle glowing line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>

      {/* Left and Right Fade Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[var(--bg)] to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[var(--bg)] to-transparent z-10"></div>

      {/* Row 1: Left */}
      <Marquee pauseOnHover duration="40s" gap="1.25rem" className="py-1">
        {techRow1.map((item, idx) => (
          <TechCard key={idx} item={item} />
        ))}
      </Marquee>

      {/* Row 2: Right (Reverse) */}
      <Marquee reverse pauseOnHover duration="45s" gap="1.25rem" className="py-1 mt-3">
        {techRow2.map((item, idx) => (
          <TechCard key={idx} item={item} />
        ))}
      </Marquee>
    </div>
  );
};
