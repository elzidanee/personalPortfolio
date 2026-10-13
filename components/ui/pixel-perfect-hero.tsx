"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── LOGO DATA ─────────────────────────────────────────────────── */

type LogoItem = { label: string; svg: React.ReactNode };

const LOGOS: LogoItem[] = [
  {
    label: "Next.js",
    svg: (
      <svg className="h-8 w-auto fill-white shrink-0" viewBox="0 0 180 180">
        <mask id="nxt" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#nxt)">
          <circle cx="90" cy="90" r="90" fill="white" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="#090a0f" />
          <rect x="115" y="54" width="12" height="72" fill="#090a0f" />
        </g>
      </svg>
    ),
  },
  {
    label: "Flutter",
    svg: (
      <svg className="h-8 w-auto shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M14.314 0L2.3 12 6 15.7 21.684 0zm0 9.257L8.2 15.372l3.7 3.7 6.1-6.1zm0 7.429l-3.7 3.7 3.7 3.7 6.1-6.1z" fill="#54C5F8" />
        <path d="M14.314 16.686L10.614 20.386l3.7 3.614 6.1-6.1z" fill="#01579B" />
        <path d="M8.2 15.372l3.7-3.7 2.414 2.414-3.7 3.7z" fill="#29B6F6" />
      </svg>
    ),
  },
  {
    label: "TypeScript",
    svg: (
      <svg className="h-8 w-auto shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M11.5 14.5H9.5V8.5H6.5V6.8H14.5V8.5H11.5V14.5ZM19.2 8.7C18.6 8.3 17.8 8.1 16.9 8.1C15.8 8.1 15.1 8.5 15.1 9.2C15.1 9.8 15.6 10.1 16.6 10.4L17.4 10.7C18.8 11.1 19.6 11.9 19.6 13.1C19.6 14.6 18.2 15.7 16.3 15.7C15.1 15.7 14.1 15.3 13.3 14.7L14.1 13.3C14.8 13.8 15.6 14.1 16.4 14.1C17.3 14.1 18 13.7 18 13C18 12.3 17.5 12 16.5 11.7L15.7 11.4C14.5 11 13.7 10.2 13.7 9.1C13.7 7.7 14.9 6.7 16.8 6.7C17.8 6.7 18.7 7 19.3 7.4L19.2 8.7Z" fill="white" />
      </svg>
    ),
  },
  {
    label: "Supabase",
    svg: (
      <svg className="h-8 w-auto shrink-0" viewBox="0 0 109 113" fill="none">
        <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0647L99.1934 40.0647C107.384 40.0647 111.954 49.5247 106.845 55.9587L63.7076 110.284Z" fill="#249361" />
        <path d="M45.317 2.716C48.1765 -0.885141 53.9744 1.08779 54.0433 5.68608L54.4285 72.9353H9.83161C1.64104 72.9353 -2.92928 63.4753 2.17988 57.0413L45.317 2.716Z" fill="#3ECF8E" />
      </svg>
    ),
  },
  {
    label: "Tailwind",
    svg: (
      <svg className="h-8 w-auto shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8" />
      </svg>
    ),
  },
  {
    label: "Figma",
    svg: (
      <svg className="h-8 w-auto shrink-0" viewBox="0 0 38 57" fill="none">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    label: "Python",
    svg: (
      <svg className="h-8 w-auto shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M11.914 0C5.824 0 6.2 2.643 6.2 2.643L6.205 5.38h5.803v.825H3.902S0 5.76 0 11.905c0 6.143 3.4 5.925 3.4 5.925h2.033v-2.85s-.11-3.4 3.345-3.4h5.753s3.235.053 3.235-3.136V3.136S18.23 0 11.914 0zm-3.23 1.83a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1z" fill="#3776AB" />
        <path d="M12.086 24c6.09 0 5.714-2.643 5.714-2.643l-.005-2.737h-5.803v-.825h8.106s3.902.445 3.902-5.7c0-6.143-3.4-5.925-3.4-5.925h-2.033v2.85s.11 3.4-3.345 3.4h-5.753s-3.235-.053-3.235 3.136v5.309S5.77 24 12.086 24zm3.23-1.83a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z" fill="#FFD438" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    svg: (
      <svg className="h-8 w-auto fill-white shrink-0" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "Kotlin",
    svg: (
      <svg className="h-8 w-auto shrink-0" viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient id="kt-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E44857" />
            <stop offset="50%" stopColor="#C711E1" />
            <stop offset="100%" stopColor="#7F52FF" />
          </linearGradient>
        </defs>
        <path d="M0 24L12 12 0 0h24L12 12l12 12z" fill="url(#kt-g)" />
      </svg>
    ),
  },
  {
    label: "Jetpack",
    svg: (
      <svg className="h-8 w-auto shrink-0" viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient id="jc-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4285F4" />
            <stop offset="100%" stopColor="#34A853" />
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="5" fill="url(#jc-g)" />
        <path d="M5 5h5l4 7-4 7H5l4-7z" fill="white" opacity="0.9" />
        <path d="M11 5h8v3l-4 4 4 4v3h-8l4-7z" fill="white" opacity="0.7" />
      </svg>
    ),
  },
  {
    label: "Android",
    svg: (
      <svg className="h-8 w-auto shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M17.523 15.341a5.34 5.34 0 0 0 2.142-4.28A5.34 5.34 0 0 0 14.37 5.72l-1.018 1.763a3.34 3.34 0 0 1 1.648 2.858 3.34 3.34 0 0 1-1.648 2.858l1.018 1.763a5.34 5.34 0 0 0 3.153-1.62zm-11.046 0a5.34 5.34 0 0 1-2.142-4.28 5.34 5.34 0 0 1 5.295-5.341L10.648 7.483A3.34 3.34 0 0 0 9 10.341a3.34 3.34 0 0 0 1.648 2.858L9.63 14.962a5.34 5.34 0 0 1-3.153-1.62zM8.25 4.5l1.5-2.598M14.25 4.5l-1.5-2.598M7.5 11.25h9v9a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-9z" stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

/* ─── SEAMLESS MARQUEE (CSS-only, GPU-composited) ────────────────── */
function Marquee() {
  return (
    <>
      <style>{`
        .zk-mq-root {
          position: relative;
          z-index: 10;
          width: 100%;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 18px 0;
          overflow: hidden;
          contain: layout style;
          user-select: none;
        }
        .zk-mq-fade {
          overflow: hidden;
          mask-image: linear-gradient(to right,transparent,black 6%,black 94%,transparent);
          -webkit-mask-image: linear-gradient(to right,transparent,black 6%,black 94%,transparent);
        }
        .zk-mq-track {
          display: flex;
          width: max-content;
          animation: zkMqScroll 28s linear infinite;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        .zk-mq-root:hover .zk-mq-track {
          animation-play-state: paused;
        }
        @keyframes zkMqScroll {
          from { transform: translateZ(0) translateX(0); }
          to   { transform: translateZ(0) translateX(-50%); }
        }
        .zk-mq-set { display:flex; align-items:center; flex-shrink:0; }
        .zk-mq-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          width: 72px;
          margin: 0 18px;
          opacity: 0.32;
          transition: opacity 0.22s ease, transform 0.22s cubic-bezier(0.22,1,0.36,1);
          flex-shrink: 0;
          cursor: default;
        }
        .zk-mq-item:hover { opacity: 0.8; transform: translateY(-3px) scale(1.1); }
        .zk-mq-lbl {
          font-size: 9px;
          font-family: 'JetBrains Mono', monospace;
          color: rgba(255,255,255,0.28);
          letter-spacing: 0.05em;
          white-space: nowrap;
          transition: color 0.2s ease;
        }
        .zk-mq-item:hover .zk-mq-lbl { color: rgba(255,255,255,0.55); }
        @media (prefers-reduced-motion: reduce) {
          .zk-mq-track { animation-duration: 80s !important; }
        }
      `}</style>
      <div className="zk-mq-root">
        <div className="zk-mq-fade">
          <div className="zk-mq-track">
            {[0, 1].map((clone) => (
              <div key={clone} className="zk-mq-set" aria-hidden={clone > 0 ? true : undefined}>
                {LOGOS.map((item, i) => (
                  <div key={`${clone}-${i}`} className="zk-mq-item" title={item.label}>
                    {item.svg}
                    <span className="zk-mq-lbl">{item.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── DEV BENTO ──────────────────────────────────────────────────── */
type ActiveTab = "about" | "stack" | "status";

const STACK_ROWS: [string, string][] = [
  ["WEB",     "Next.js 16 App Router"],
  ["MOBILE",  "Flutter · Kotlin · Jetpack"],
  ["BACKEND", "Supabase & PostgreSQL"],
  ["LANG",    "TypeScript & Python"],
  ["STYLE",   "Tailwind CSS"],
  ["DESIGN",  "Figma · Android Studio"],
];

function DevBento() {
  const [tab, setTab] = useState<ActiveTab>("about");
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  return (
    <div
      className={cn(
        "w-full rounded-2xl border border-white/[0.08] overflow-hidden transition-all duration-700",
        "bg-gradient-to-br from-[#0d0f1a] via-[#0e101a] to-[#0b0d16]",
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 24px 64px -12px rgba(0,0,0,0.7), 0 0 40px -20px rgba(91,127,255,0.15)" }}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-0 border-b border-white/[0.06] bg-white/[0.015]">
        <div className="flex items-center gap-1.5 px-4 py-3 border-r border-white/[0.06]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" style={{ boxShadow: "0 0 6px rgba(255,95,86,0.55)" }} />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" style={{ boxShadow: "0 0 6px rgba(255,189,46,0.45)" }} />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" style={{ boxShadow: "0 0 6px rgba(39,201,63,0.45)" }} />
        </div>
        <div className="flex items-center gap-0 flex-1">
          {(["about", "stack", "status"] as ActiveTab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "px-4 py-3 text-xs font-mono tracking-wide border-r border-white/[0.06] transition-all duration-200 cursor-pointer relative",
                tab === t ? "text-white bg-white/[0.06]" : "text-white/30 hover:text-white/60 hover:bg-white/[0.03]"
              )}
            >
              {tab === t && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-t"
                  style={{ background: "linear-gradient(90deg,#60a5fa,#a78bfa)" }} />
              )}
              {t === "about" && "about.ts"}
              {t === "stack" && "stack.sh"}
              {t === "status" && "profile.id"}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 font-mono text-[13px] leading-6 min-h-[270px]">
        {tab === "about" && (
          <div className="space-y-0.5 text-white/50">
            <div className="text-white/20 mb-3 text-[11px]">// about.ts</div>
            <div><span className="text-[#93c5fd]/60">const</span> <span className="text-white/80">zidane</span> <span className="text-white/30">=</span> {"{"}</div>
            <div className="pl-5"><span className="text-[#7dd3fc]/70">name</span><span className="text-white/30">:</span> <span className="text-[#86efac]/60">&quot;EL Zidane Ardyansyah&quot;</span><span className="text-white/30">,</span></div>
            <div className="pl-5"><span className="text-[#7dd3fc]/70">school</span><span className="text-white/30">:</span> <span className="text-[#86efac]/60">&quot;SMK Telkom Malang&quot;</span><span className="text-white/30">,</span></div>
            <div className="pl-5"><span className="text-[#7dd3fc]/70">focus</span><span className="text-white/30">:</span> <span className="text-[#86efac]/60">&quot;Web &amp; Mobile Engineering&quot;</span><span className="text-white/30">,</span></div>
            <div className="pl-5"><span className="text-[#7dd3fc]/70">openToWork</span><span className="text-white/30">:</span> <span className="text-[#c084fc]/80">true</span></div>
            <div>{"}"}<span className="text-white/30">;</span></div>
          </div>
        )}
        {tab === "stack" && (
          <div className="space-y-2 text-white/50">
            <div className="text-white/20 mb-3 text-[11px]">$ cat stack.sh</div>
            {STACK_ROWS.map(([label, value]) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-white/20 w-16 shrink-0 text-[11px]">{label}</span>
                <span className="text-white/15">/</span>
                <span className="text-[13px] font-mono text-white/70">{value}</span>
              </div>
            ))}
          </div>
        )}
        {tab === "status" && (
          <div className="flex flex-col items-center justify-center gap-4 py-4 text-center">
            <div className="relative">
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                <img src="/asset/zidan.JPG" alt="EL Zidane" className="w-full h-full object-cover" />
              </div>
              <span
                className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#22c55e] border-2 border-[#0e101a] text-[9px] flex items-center justify-center text-white font-bold"
                style={{ boxShadow: "0 0 8px rgba(34,197,94,0.7)" }}
              >✓</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/90">EL Zidane Ardyansyah</div>
              <div className="text-xs text-white/40 font-mono mt-0.5">Fullstack &amp; Mobile Dev · SMK Telkom Malang</div>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/40 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse"
                style={{ boxShadow: "0 0 6px rgba(34,197,94,0.8)" }} />
              Available · Malang, ID (GMT+7)
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── PIXEL HERO ─────────────────────────────────────────────────── */

export interface PixelHeroProps {
  word1?: string;
  word2?: string;
  description?: string;
  primaryCta?: string;
  primaryCtaMobile?: string;
  secondaryCta?: string;
  secondaryCtaMobile?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  githubUrl?: string;
}

export function PixelHero({
  word1 = "Fullstack",
  word2 = "Mobile Dev.",
  description = "Siswa RPL di SMK Telkom Malang. Membangun web modern dengan Next.js dan aplikasi mobile performatif dengan Flutter & Kotlin.",
  primaryCta = "Lihat Portofolio",
  primaryCtaMobile = "Portofolio",
  secondaryCta = "Unduh CV",
  secondaryCtaMobile = "CV",
  onPrimaryClick,
  onSecondaryClick,
  githubUrl = "https://github.com/elzidanee",
}: PixelHeroProps) {
  return (
    <div
      className="relative w-full isolate flex flex-col"
      style={{ minHeight: "100dvh", contain: "layout" }}
    >
      <style>{`
        /* ── Ambient orbs (CSS-only, GPU-composited) ── */
        .zk-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        .zk-orb-1 {
          top: -18%; left: -6%;
          width: 620px; height: 620px;
          background: radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, transparent 65%);
          animation: zkFloat1 16s ease-in-out infinite;
        }
        .zk-orb-2 {
          top: 5%; right: -8%;
          width: 480px; height: 480px;
          background: radial-gradient(ellipse at center, rgba(255,255,255,0.025) 0%, transparent 65%);
          animation: zkFloat2 20s ease-in-out infinite;
        }
        .zk-orb-3 {
          bottom: 2%; left: 28%;
          width: 380px; height: 280px;
          background: radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, transparent 65%);
          animation: zkFloat3 24s ease-in-out infinite;
        }
        @keyframes zkFloat1 {
          0%,100% { transform: translateZ(0) translate(0,0) scale(1); }
          33%      { transform: translateZ(0) translate(18px,-14px) scale(1.04); }
          66%      { transform: translateZ(0) translate(-10px,18px) scale(0.97); }
        }
        @keyframes zkFloat2 {
          0%,100% { transform: translateZ(0) translate(0,0); }
          50%      { transform: translateZ(0) translate(-22px,18px); }
        }
        @keyframes zkFloat3 {
          0%,100% { transform: translateZ(0) translate(0,0); }
          50%      { transform: translateZ(0) translate(14px,-18px); }
        }
        /* Grid mesh */
        .zk-grid-mesh {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.013) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.013) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(ellipse 75% 55% at 50% 40%, black 28%, transparent 72%);
          -webkit-mask-image: radial-gradient(ellipse 75% 55% at 50% 40%, black 28%, transparent 72%);
          pointer-events: none;
        }
        /* Staggered entrance */
        .zk-in-0 { animation: zkUp 0.55s cubic-bezier(0.22,1,0.36,1) both 0.08s; }
        .zk-in-1 { animation: zkUp 0.6s  cubic-bezier(0.22,1,0.36,1) both 0.18s; }
        .zk-in-2 { animation: zkUp 0.6s  cubic-bezier(0.22,1,0.36,1) both 0.28s; }
        .zk-in-3 { animation: zkUp 0.6s  cubic-bezier(0.22,1,0.36,1) both 0.38s; }
        .zk-in-4 { animation: zkUp 0.6s  cubic-bezier(0.22,1,0.36,1) both 0.48s; }
        .zk-in-5 { animation: zkUp 0.6s  cubic-bezier(0.22,1,0.36,1) both 0.58s; }
        .zk-in-r { animation: zkRight 0.7s cubic-bezier(0.22,1,0.36,1) both 0.22s; }
        @keyframes zkUp {
          from { opacity:0; transform: translateY(22px); }
          to   { opacity:1; transform: translateY(0); }
        }
        @keyframes zkRight {
          from { opacity:0; transform: translateX(26px); }
          to   { opacity:1; transform: translateX(0); }
        }
        /* Headline stays plain white — no gradient per original palette */
        .zk-gtext {
          color: #ffffff;
        }
        .zk-gtext-accent {
          color: #ffffff;
        }
        /* Tag pill */
        .zk-pill {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 4px 10px; border-radius: 6px;
          font-size: 11px; font-family: 'JetBrains Mono', monospace;
          color: rgba(255,255,255,0.38);
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.025);
          transition: color .2s, border-color .2s, background .2s;
          cursor: default;
        }
        .zk-pill:hover { color:rgba(255,255,255,0.72); border-color:rgba(255,255,255,0.15); background:rgba(255,255,255,0.05); }
        /* CTA buttons */
        .zk-btn-p {
          display: inline-flex; align-items: center; gap: 8px;
          height: 44px; padding: 0 24px; border-radius: 10px;
          background: linear-gradient(135deg,#ffffff 0%,#e8eaf6 100%);
          color: #0f0f1a; font-size: 14px; font-weight: 700;
          letter-spacing: -.01em; cursor: pointer; text-decoration: none;
          transition: transform .18s cubic-bezier(0.22,1,0.36,1), box-shadow .18s ease;
          box-shadow: 0 4px 16px rgba(255,255,255,0.12), 0 1px 3px rgba(0,0,0,0.3);
          flex-shrink: 0;
        }
        .zk-btn-p:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 8px 24px rgba(255,255,255,0.2); }
        .zk-btn-p:active { transform: scale(0.98); }
        .zk-btn-g {
          display: inline-flex; align-items: center; gap: 8px;
          height: 44px; padding: 0 20px; border-radius: 10px;
          font-size: 14px; font-weight: 600;
          color: rgba(255,255,255,0.55);
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.025);
          cursor: pointer;
          transition: all .18s ease;
          backdrop-filter: blur(8px);
          flex-shrink: 0;
        }
        .zk-btn-g:hover { border-color:rgba(255,255,255,0.22); color:rgba(255,255,255,0.9); background:rgba(255,255,255,0.05); transform:translateY(-1px); }
        .zk-btn-g:active { transform: scale(0.98); }
        .zk-btn-i {
          display: inline-flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.025);
          color: rgba(255,255,255,0.45);
          cursor: pointer;
          transition: all .18s ease;
          backdrop-filter: blur(8px);
          text-decoration: none;
          flex-shrink: 0;
        }
        .zk-btn-i:hover { border-color:rgba(255,255,255,0.22); color:rgba(255,255,255,0.9); background:rgba(255,255,255,0.05); transform:translateY(-1px); }
        /* Status badge */
        .zk-status-badge {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-family:'JetBrains Mono',monospace;
          color: rgba(255,255,255,0.38);
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.025);
          padding: 5px 12px; border-radius: 100px;
          backdrop-filter: blur(8px);
        }
        .zk-status-dot {
          width:6px; height:6px; border-radius:50%;
          background:#22c55e; flex-shrink:0;
          box-shadow: 0 0 8px rgba(34,197,94,0.8);
          animation: blink 2s infinite ease-in-out;
        }
        /* Stat divider */
        .zk-stat-div { width:1px; height:32px; background:rgba(255,255,255,0.06); }
        /* Reduce motion */
        @media (prefers-reduced-motion: reduce) {
          .zk-in-0,.zk-in-1,.zk-in-2,.zk-in-3,.zk-in-4,.zk-in-5,.zk-in-r {
            animation: none !important; opacity:1 !important; transform:none !important;
          }
          .zk-orb-1,.zk-orb-2,.zk-orb-3 { animation: none !important; }
        }
      `}</style>

      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="zk-grid-mesh" />
        <div className="zk-orb zk-orb-1" />
        <div className="zk-orb zk-orb-2" />
        <div className="zk-orb zk-orb-3" />
        {/* Center top glow */}
        <div style={{
          position:"absolute", top:0, left:"50%", transform:"translateX(-50%)",
          width:"580px", height:"380px",
          background:"radial-gradient(ellipse at top, rgba(255,255,255,0.035) 0%, transparent 65%)"
        }} />
      </div>

      {/* Main content */}
      <div
        className="relative z-10 w-full flex-1 flex items-center"
        style={{ paddingTop: "92px", paddingBottom: "48px", paddingLeft: "8%", paddingRight: "8%" }}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT ── */}
          <div className="flex flex-col gap-6">

            {/* Status */}
            <div className="zk-in-0">
              <span className="zk-status-badge">
                <span className="zk-status-dot" />
                Available for projects &amp; internship
                <span style={{ color:"rgba(255,255,255,0.18)" }}>·</span>
                Malang, ID
              </span>
            </div>

            {/* Headline */}
            <div className="zk-in-1">
              <h1 className="text-5xl sm:text-6xl lg:text-[62px] xl:text-[68px] font-extrabold tracking-tight leading-[1.05]">
                <span className="zk-gtext">{word1}</span>
                <span className="text-white/18"> </span>
                <br className="hidden sm:block" />
                <span className="zk-gtext-accent">{word2}</span>
              </h1>
              <div className="mt-3 text-[10px] font-mono text-white/20 tracking-[0.22em] uppercase">
                EL Zidane Ardyansyah
              </div>
            </div>

            {/* Description */}
            <p className="zk-in-2 text-white/50 text-[15px] leading-relaxed max-w-[380px]">
              {description}
            </p>

            {/* Stack tags */}
            <div className="zk-in-3 flex flex-wrap gap-1.5">
              {["Next.js", "Flutter", "Kotlin", "Supabase", "TypeScript", "Tailwind"].map((tag) => (
                <span key={tag} className="zk-pill">{tag}</span>
              ))}
            </div>

            {/* CTAs */}
            <div className="zk-in-4 flex items-center gap-3 flex-wrap">
              <a href="#portfolio" onClick={onPrimaryClick} className="zk-btn-p">
                <span className="hidden sm:inline">{primaryCta}</span>
                <span className="sm:hidden">{primaryCtaMobile}</span>
                <ArrowRight size={15} />
              </a>
              <button id="btn-cv" onClick={onSecondaryClick} className="zk-btn-g">
                <Download size={15} />
                <span className="hidden sm:inline">{secondaryCta}</span>
                <span className="sm:hidden">{secondaryCtaMobile}</span>
              </button>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="zk-btn-i" aria-label="GitHub">
                <i className="fab fa-github text-base" />
              </a>
            </div>

            {/* Stats */}
            <div className="zk-in-5 flex items-center gap-8 pt-2 border-t border-white/[0.05]">
              {[["9+","Proyek"],["3+","Tahun"],["15+","Tech Stack"]].map(([n,l],idx) => (
                <React.Fragment key={l}>
                  {idx > 0 && <div className="zk-stat-div" />}
                  <div>
                    <div className="text-2xl font-bold font-mono text-white tracking-tight">{n}</div>
                    <div className="text-[11px] font-mono text-white/25 uppercase tracking-wider mt-0.5">{l}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Bento ── */}
          <div className="zk-in-r flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[460px]">
              <DevBento />
            </div>
          </div>

        </div>
      </div>

      {/* Marquee */}
      <Marquee />
    </div>
  );
}
