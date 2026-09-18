"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

/* -----------------------------------------------------------------------------
 * VECTOR BRAND LOGO COMPONENTS (ZeeDev Tech Stack)
 * Next.js, Flutter, TypeScript, Supabase, Tailwind CSS, Figma, Python, GitHub
 * -------------------------------------------------------------------------- */

const BRAND_LOGOS = [
  // Next.js
  () => (
    <div className="flex items-center gap-2 text-foreground/80 opacity-70 hover:opacity-100 transition-opacity duration-300 select-none">
      <svg
        className="h-5 sm:h-6 w-auto fill-current"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_next"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="180"
          height="180"
          style={{ maskType: "alpha" }}
        >
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#mask0_next)">
          <circle cx="90" cy="90" r="90" fill="currentColor" />
          <path
            d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
            fill="var(--bg, #07080b)"
          />
          <rect x="115" y="54" width="12" height="72" fill="var(--bg, #07080b)" />
        </g>
      </svg>
      <span className="font-bold text-sm sm:text-base tracking-tight text-white">
        Next.js
      </span>
    </div>
  ),
  // Flutter
  () => (
    <div className="flex items-center gap-2 text-foreground/80 opacity-70 hover:opacity-100 transition-opacity duration-300 select-none">
      <svg className="h-5 sm:h-6 w-auto" viewBox="0 0 24 24" fill="none">
        <path
          d="M14.314 0L2.3 12 6 15.7 21.684 0zm0 9.257L8.2 15.372l3.7 3.7 6.1-6.1zm0 7.429l-3.7 3.7 3.7 3.7 6.1-6.1z"
          fill="#02569B"
        />
        <path
          d="M14.314 16.686L10.614 20.386l3.7 3.614 6.1-6.1z"
          fill="#0175C2"
        />
        <path
          d="M8.2 15.372l3.7-3.7 2.414 2.414-3.7 3.7z"
          fill="#29B6F6"
        />
      </svg>
      <span className="font-bold text-sm sm:text-base tracking-tight text-cyan-400">
        Flutter
      </span>
    </div>
  ),
  // TypeScript
  () => (
    <div className="flex items-center gap-2 text-foreground/80 opacity-70 hover:opacity-100 transition-opacity duration-300 select-none">
      <svg className="h-5 sm:h-6 w-auto" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M11.5 14.5H9.5V8.5H6.5V6.8H14.5V8.5H11.5V14.5ZM19.2 8.7C18.6 8.3 17.8 8.1 16.9 8.1C15.8 8.1 15.1 8.5 15.1 9.2C15.1 9.8 15.6 10.1 16.6 10.4L17.4 10.7C18.8 11.1 19.6 11.9 19.6 13.1C19.6 14.6 18.2 15.7 16.3 15.7C15.1 15.7 14.1 15.3 13.3 14.7L14.1 13.3C14.8 13.8 15.6 14.1 16.4 14.1C17.3 14.1 18 13.7 18 13C18 12.3 17.5 12 16.5 11.7L15.7 11.4C14.5 11 13.7 10.2 13.7 9.1C13.7 7.7 14.9 6.7 16.8 6.7C17.8 6.7 18.7 7 19.3 7.4L19.2 8.7Z"
          fill="white"
        />
      </svg>
      <span className="font-bold text-sm sm:text-base tracking-tight text-blue-400">
        TypeScript
      </span>
    </div>
  ),
  // Supabase
  () => (
    <div className="flex items-center gap-2 text-foreground/80 opacity-70 hover:opacity-100 transition-opacity duration-300 select-none">
      <svg className="h-5 sm:h-6 w-auto" viewBox="0 0 109 113" fill="none">
        <path
          d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0647L99.1934 40.0647C107.384 40.0647 111.954 49.5247 106.845 55.9587L63.7076 110.284Z"
          fill="#249361"
        />
        <path
          d="M45.317 2.716C48.1765 -0.885141 53.9744 1.08779 54.0433 5.68608L54.4285 72.9353H9.83161C1.64104 72.9353 -2.92928 63.4753 2.17988 57.0413L45.317 2.716Z"
          fill="#3ECF8E"
        />
      </svg>
      <span className="font-bold text-sm sm:text-base tracking-tight text-emerald-400">
        Supabase
      </span>
    </div>
  ),
  // Tailwind CSS
  () => (
    <div className="flex items-center gap-2 text-foreground/80 opacity-70 hover:opacity-100 transition-opacity duration-300 select-none">
      <svg
        className="h-5 sm:h-6 w-auto"
        viewBox="0 0 262 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="fill-cyan-400"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z"
        />
      </svg>
      <span className="font-bold text-sm sm:text-base tracking-tight text-cyan-300">
        Tailwind CSS
      </span>
    </div>
  ),
  // Figma
  () => (
    <div className="flex items-center gap-2 text-foreground/80 opacity-70 hover:opacity-100 transition-opacity duration-300 select-none">
      <svg className="h-5 sm:h-6 w-auto" viewBox="0 0 38 57" fill="none">
        <path
          d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"
          fill="#1ABCFE"
        />
        <path
          d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
          fill="#0ACF83"
        />
        <path
          d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
          fill="#FF7262"
        />
        <path
          d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
          fill="#F24E1E"
        />
        <path
          d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
          fill="#A259FF"
        />
      </svg>
      <span className="font-bold text-sm sm:text-base tracking-tight text-pink-400">
        Figma
      </span>
    </div>
  ),
  // Python
  () => (
    <div className="flex items-center gap-2 text-foreground/80 opacity-70 hover:opacity-100 transition-opacity duration-300 select-none">
      <svg className="h-5 sm:h-6 w-auto" viewBox="0 0 24 24" fill="none">
        <path
          d="M11.9 1C8.2 1 8.4 2.6 8.4 2.6L8.4 4.3H12V4.8H5.2C2.5 4.8 1 6.2 1 9.3C1 12.4 2.2 12.8 3.5 12.8H4.6V11.2C4.6 9.5 6 9.5 6 9.5H9.6C11 9.5 11.2 8.3 11.2 8.3L11.2 4.4C11.2 4.4 11.4 1 11.9 1ZM9.9 2.1C10.4 2.1 10.7 2.4 10.7 2.9C10.7 3.4 10.4 3.7 9.9 3.7C9.5 3.7 9.1 3.4 9.1 2.9C9.1 2.4 9.5 2.1 9.9 2.1Z"
          fill="#3776AB"
        />
        <path
          d="M12.1 23C15.8 23 15.6 21.4 15.6 21.4L15.6 19.7H12V19.2H18.8C21.5 19.2 23 17.8 23 14.7C23 11.6 21.8 11.2 20.5 11.2H19.4V12.8C19.4 14.5 18 14.5 18 14.5H14.4C13 14.5 12.8 15.7 12.8 15.7L12.8 19.6C12.8 19.6 12.6 23 12.1 23ZM14.1 21.9C13.6 21.9 13.3 21.6 13.3 21.1C13.3 20.6 13.6 20.3 14.1 20.3C14.5 20.3 14.9 20.6 14.9 21.1C14.9 21.6 14.5 21.9 14.1 21.9Z"
          fill="#FFD43B"
        />
      </svg>
      <span className="font-bold text-sm sm:text-base tracking-tight text-amber-300">
        Python
      </span>
    </div>
  ),
  // GitHub
  () => (
    <div className="flex items-center gap-2 text-foreground/80 opacity-70 hover:opacity-100 transition-opacity duration-300 select-none">
      <svg className="h-5 sm:h-6 w-auto fill-current" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
      <span className="font-bold text-sm sm:text-base tracking-tight text-slate-200">
        GitHub
      </span>
    </div>
  ),
];

/* -----------------------------------------------------------------------------
 * HERO COMPONENT (Tailored for EL Zidane Ardyansyah / ZeeDev)
 * -------------------------------------------------------------------------- */

interface PixelHeroProps {
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
  word1 = "Fullstack &",
  word2 = "Mobile Dev.",
  description = "Siswa Rekayasa Perangkat Lunak di SMK Telkom Malang. Menguasai arsitektur web modern dengan Next.js, aplikasi mobile performa tinggi dengan Flutter, dan backend cloud Supabase.",
  primaryCta = "Lihat Portofolio",
  primaryCtaMobile = "Portofolio",
  secondaryCta = "Unduh CV",
  secondaryCtaMobile = "CV",
  onPrimaryClick,
  onSecondaryClick,
  githubUrl = "https://github.com/elzidanee",
}: PixelHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadTimer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(loadTimer);
  }, []);

  return (
    <div className="relative w-full min-h-[92dvh] md:min-h-[100dvh] flex flex-col justify-between md:justify-center md:gap-6 py-12 md:py-0 px-3 sm:px-6 overflow-hidden select-none isolate">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-hero-marquee {
          animation: marquee 26s linear infinite;
        }
        .hero-marquee-wrap:hover .animate-hero-marquee {
          animation-play-state: paused;
        }
        .tahoe-glass-text {
            color: transparent;
            background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.45) 25%, rgba(0, 229, 195, 0.8) 45%, rgba(255, 255, 255, 0.95) 55%, rgba(56, 189, 248, 0.7) 75%, rgba(255, 255, 255, 1) 100%);
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-stroke: 1.2px rgba(255, 255, 255, 0.25);
            filter: drop-shadow(0 15px 35px rgba(0, 229, 195, 0.2)) drop-shadow(0 5px 10px rgba(0,0,0,0.3));
            animation: shimmer 8s linear infinite;
        }
        @keyframes shimmer {
            0% { background-position: 200% center; }
            100% { background-position: 0% center; }
        }
      `}</style>

      {/* Clean Radial Ambient Glow (Zero Particles) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-cyan-500/[0.07] via-blue-500/[0.04] to-indigo-500/[0.05] blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--bg,#07080b)_95%)] pointer-events-none opacity-80" />
      </div>

      {/* Top Tag & Tahoe Glass Header */}
      <div className="flex flex-col items-center justify-center text-center order-1 md:order-1 mt-16 sm:mt-0 pointer-events-none w-full z-10">
        {/* Profile Avatar Badge */}
        <div className="relative mb-3.5 pointer-events-auto">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 shadow-[0_0_30px_rgba(0,229,195,0.35)]">
            <img
              src="/asset/zidan.JPG"
              alt="EL Zidane Ardyansyah"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 px-2.5 py-0.5 rounded-full bg-[#090b10] border border-cyan-400/40 text-[10px] font-semibold text-cyan-300 flex items-center gap-1.5 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Open to Work
          </div>
        </div>

        <div className="hero-tag fade-in mb-4 pointer-events-auto inline-flex items-center gap-2">
          <span className="hero-tag-dot"></span>
          TERSEDIA UNTUK PROYEK &middot; MALANG, INDONESIA
        </div>

        <h1 className="flex flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-6 px-1 w-full flex-wrap text-[2.6rem] xs:text-[3.2rem] sm:text-6xl md:text-7xl lg:text-8xl leading-none font-bold">
          <span className="font-serif italic font-medium text-white drop-shadow-[0_2px_20px_rgba(255,255,255,0.25)]">
            {word1}
          </span>
          <span className="font-sans font-extrabold tracking-tighter bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,229,195,0.45)]">
            {word2}
          </span>
        </h1>
      </div>

      {/* Center Container: Description & Quick Stats */}
      <div className="flex flex-col items-center justify-center text-center mt-3 md:mt-2 order-2 md:order-2 px-1 w-full z-10">
        <p className="text-sm sm:text-base md:text-lg font-normal text-slate-200/90 max-w-[95%] sm:max-w-md md:max-w-2xl px-1 leading-relaxed mt-2 mb-6 drop-shadow-sm">
          {description}
        </p>

        {/* Quick Stats Pill */}
        <div className="hero-stats fade-in inline-flex items-center justify-center gap-6 sm:gap-10 py-2.5 px-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 shadow-lg">
          <div className="text-center">
            <div className="stat-num countup text-cyan-400 font-bold text-lg sm:text-2xl" data-target="9">
              0
            </div>
            <div className="stat-label text-[11px] text-slate-400">Proyek Selesai</div>
          </div>
          <div className="w-[1px] h-8 bg-white/10"></div>
          <div className="text-center">
            <div className="stat-num countup text-sky-400 font-bold text-lg sm:text-2xl" data-target="3">
              0
            </div>
            <div className="stat-label text-[11px] text-slate-400">Tahun Belajar</div>
          </div>
          <div className="w-[1px] h-8 bg-white/10"></div>
          <div className="text-center">
            <div className="stat-num countup text-indigo-400 font-bold text-lg sm:text-2xl" data-target="15">
              0
            </div>
            <div className="stat-label text-[11px] text-slate-400">Tech Stack</div>
          </div>
        </div>

        {/* Mobile-only Vector Marquee */}
        <div className="block md:hidden w-full mt-6 pointer-events-auto hero-marquee-wrap">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground/80 font-medium mb-3">
            Tools &amp; Tech Stack yang Dikuasai
          </div>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <div className="flex w-max gap-8 py-1 animate-hero-marquee">
              <div className="flex gap-8 items-center">
                {BRAND_LOGOS.map((Logo, i) => (
                  <Logo key={i} />
                ))}
              </div>
              <div className="flex gap-8 items-center" aria-hidden="true">
                {BRAND_LOGOS.map((Logo, i) => (
                  <Logo key={`c-${i}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Container: CTA Row */}
      <div
        className={cn(
          "pointer-events-auto flex flex-row items-center justify-center gap-3 mt-4 md:mt-6 mb-4 md:mb-0 order-4 md:order-3 transition-all duration-1000 transform px-1 z-20",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "450ms" }}
      >
        <a
          href="#portfolio"
          onClick={onPrimaryClick}
          className="relative inline-flex h-11 md:h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-5 md:px-8 text-xs md:text-sm font-bold text-white shadow-[0_0_25px_rgba(0,229,195,0.35)] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
        >
          <span className="inline md:hidden">{primaryCtaMobile}</span>
          <span className="hidden md:inline">{primaryCta}</span>
          <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
        </a>

        <button
          id="btn-cv"
          onClick={onSecondaryClick}
          className="relative inline-flex h-11 md:h-12 items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 px-5 md:px-8 text-xs md:text-sm font-semibold text-slate-100 border border-white/15 backdrop-blur-md transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
        >
          <Download className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400" />
          <span className="inline md:hidden">{secondaryCtaMobile}</span>
          <span className="hidden md:inline">{secondaryCta}</span>
        </button>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex h-11 md:h-12 w-11 md:w-12 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-slate-100 border border-white/15 backdrop-blur-md transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          title="GitHub Profile"
          aria-label="GitHub Profile"
        >
          <i className="fab fa-github text-base"></i>
        </a>
      </div>

      {/* Desktop-only Vector Marquee Block */}
      <div
        className={cn(
          "hidden md:flex relative bottom-2 left-0 right-0 w-full z-10 pointer-events-auto flex-col items-center justify-center gap-3 transition-all duration-1000 transform order-3 md:order-4 hero-marquee-wrap",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "600ms" }}
      >
        <span className="text-[11px] uppercase tracking-widest text-slate-400 font-mono select-none">
          Tools &amp; Tech Stack yang Dikuasai
        </span>
        <div className="relative w-full max-w-5xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <div className="flex w-max gap-12 py-2 animate-hero-marquee">
            <div className="flex gap-12 items-center">
              {BRAND_LOGOS.map((Logo, i) => (
                <Logo key={i} />
              ))}
            </div>
            <div className="flex gap-12 items-center" aria-hidden="true">
              {BRAND_LOGOS.map((Logo, i) => (
                <Logo key={`c-${i}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
