// Built using Hyperiux Vault: https://vault.hyperiux.com
"use client";

import {
  type CSSProperties,
  useEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const monthOrder = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
} as const;

type Month = keyof typeof monthOrder;

type JourneyItem = {
  id: string;
  year: string;
  month: Month;
  content: string;
};

export type TimelineProps = {
  title?: string;
  periodLabel?: string;
  textColor?: string;
  mutedTextColor?: string;
  activeColor?: string;
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
  /** Reveal animation duration, in seconds. */
  duration?: number;
  /** Fallback reveal duration when `duration` is omitted, in seconds. */
  scrollDuration?: number;
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener("change", callback);

  return () => mediaQueryList.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;

  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function getServerReducedMotionSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );
}

/* ─── DATA PERJALANAN ZIDANE ─── */

const topJourneyData: JourneyItem[] = [
  {
    id: "2024-july",
    year: "2024",
    month: "July",
    content: "Masuk SMK Telkom Malang jurusan Rekayasa Perangkat Lunak, mulai mendalami pemrograman dan arsitektur software",
  },
  {
    id: "2025-may",
    year: "2025",
    month: "May",
    content: "Bergabung sebagai UI/UX Designer di PortaTrip — merancang design system, wireframe, dan prototype interaktif di Figma",
  },
  {
    id: "2026-january",
    year: "2026",
    month: "January",
    content: "Membangun Monsef App dari nol menggunakan Flutter & Supabase — fitur OCR scan struk dan dashboard analitik",
  },
  {
    id: "2026-october",
    year: "2026",
    month: "October",
    content: "Open to Work — aktif mengikuti kompetisi IT, membangun portofolio, dan terbuka untuk internship & kolaborasi",
  },
];

const bottomJourneyData: JourneyItem[] = [
  {
    id: "2024-october",
    year: "2024",
    month: "October",
    content: "Meraih Sertifikasi Front-End Web dari Dicoding Indonesia — HTML5, CSS3, dan JavaScript responsif",
  },
  {
    id: "2025-march",
    year: "2025",
    month: "March",
    content: "Menyelesaikan Sertifikasi Aplikasi Flutter dari Dicoding — widget system, state management, dan UI adaptif",
  },
  {
    id: "2026-august",
    year: "2026",
    month: "August",
    content: "Peserta Digital Talent Scholarship 2026 dari Kominfo — mendalami AI Engineering dan pengembangan web menengah",
  },
];

const allJourneyItems: JourneyItem[] = [
  ...topJourneyData,
  ...bottomJourneyData,
].sort((a, b) => {
  const yearDiff = Number(a.year) - Number(b.year);
  if (yearDiff !== 0) return yearDiff;
  return monthOrder[a.month] - monthOrder[b.month];
});

export default function Timeline({
  title = "Perjalanan Saya",
  periodLabel = "2024 — 2026",
  textColor = "var(--color-foreground, #ffffff)",
  mutedTextColor = "var(--color-muted-foreground, #a1a1aa)",
  activeColor = "#ffffff",
  backgroundColor = "var(--color-background, #090a0f)",
  imageUrl = "/asset/foto123.png",
  imageAlt = "EL Zidane Ardyansyah",
  duration,
  scrollDuration = 1.2,
}: TimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const wholeSliderRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const animationDuration = duration ?? scrollDuration;
  const normalizedDuration = Math.max(0.2, animationDuration);
  const sectionStyle: CSSProperties = {
    color: textColor,
    backgroundColor,
  };
  const activeStyle: CSSProperties = {
    backgroundColor: activeColor,
  };
  const mutedTextStyle: CSSProperties = {
    color: mutedTextColor,
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const activeGsap = (window as any).gsap || gsap;
    const ST = (window as any).ScrollTrigger || ScrollTrigger;
    activeGsap.registerPlugin(ST);

    const section = sectionRef.current;
    const slider = wholeSliderRef.current;
    if (!section || !slider) return;

    // Sync Lenis smooth scroll with ScrollTrigger
    if ((window as any).lenis) {
      (window as any).lenis.on("scroll", ST.update);
    }

    const ctx = activeGsap.context(() => {
      const getScrollDist = () =>
        Math.max(slider.scrollWidth - window.innerWidth + 80, 700);

      const tl = activeGsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinSpacing: true,
          start: "top top",
          end: () => `+=${getScrollDist()}`,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Horizontal sliding
      tl.to(
        slider,
        {
          x: () => -(slider.scrollWidth - window.innerWidth),
          ease: "none",
          duration: 1,
        },
        0
      );

      // Horizontal central line animation
      if (reducedMotion) {
        tl.set(".journey-line", { width: "98%" }, 0);
        allJourneyItems.forEach((item) => {
          activeGsap.set(`.jl-${item.id}`, { scaleY: 1 });
          activeGsap.set(`.jd-${item.id}`, { scale: 1 });
        });
        return;
      }

      tl.to(".journey-line", { width: "98%", ease: "none", duration: 1 }, 0);

      // Initialize milestone vertical stems & dots
      allJourneyItems.forEach((item) => {
        const isTop = topJourneyData.some((t) => t.id === item.id);
        activeGsap.set(`.jl-${item.id}`, {
          scaleY: 0,
          transformOrigin: isTop ? "bottom center" : "top center",
        });
        activeGsap.set(`.jd-${item.id}`, { scale: 0 });
      });

      // Animate milestones evenly along timeline
      const total = allJourneyItems.length;
      allJourneyItems.forEach((item, idx) => {
        const t = idx / Math.max(total - 1, 1);
        const at = 0.05 + t * 0.83;

        tl.to(`.jl-${item.id}`, { scaleY: 1, duration: 0.06, ease: "power2.out" }, at)
          .to(`.jd-${item.id}`, { scale: 1.15, duration: 0.05, ease: "power2.out" }, at)
          .fromTo(
            `.title-${item.id}`,
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.07, ease: "power2.out" },
            at + 0.02
          )
          .fromTo(
            `.description-${item.id}`,
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.07, ease: "power2.out" },
            at + 0.03
          );
      });
    }, section);

    const onResize = () => ST.refresh();
    window.addEventListener("resize", onResize);
    const refreshTimer = setTimeout(() => ST.refresh(), 350);

    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [reducedMotion, normalizedDuration]);

  return (
    <div className="relative w-full overflow-visible">
      <section
        ref={sectionRef}
        id="journey"
        className="relative w-full overflow-hidden select-none"
        style={{ ...sectionStyle, height: "100svh", minHeight: "620px" }}
      >
        <div className="h-full w-full pt-[8%] overflow-hidden max-[600px]:pt-[5%] flex items-center">
          <div
            ref={wholeSliderRef}
            className="mr-[2vw] flex h-[32vw] w-[240vw] items-center gap-[5vw] px-[5vw] max-[600px]:h-[80vh] max-[600px]:w-[800vw] max-[600px]:px-[7vw]"
            style={{ willChange: "transform" }}
          >
            <div className="h-full w-[30vw] overflow-hidden rounded-[1.2vw] max-[600px]:h-[65vw] max-[600px]:w-[85vw] max-[600px]:rounded-[5vw] border border-white/10 shrink-0 shadow-2xl">
              <img
                src={imageUrl}
                alt={imageAlt}
                draggable={false}
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="relative h-full w-full">
              {/* Central horizontal line */}
              <div className="w-full absolute left-0 top-[49%] -translate-y-1/2 flex items-center h-fit pointer-events-none">
                <div
                  className="h-[.8vw] max-[600px]:h-[2vw] max-[600px]:w-[2vw] w-[.8vw] rounded-full shrink-0"
                  style={activeStyle}
                ></div>
                <div
                  className="h-px w-[0%] rounded-full journey-line"
                  style={activeStyle}
                ></div>
                <div
                  className="h-[.8vw] max-[600px]:h-[2vw] max-[600px]:w-[2vw] w-[.8vw] rounded-full shrink-0"
                  style={activeStyle}
                ></div>
              </div>

              {/* Top Journey Items */}
              <div className="flex h-1/2 w-full items-center justify-start gap-[.5vw]">
                <div className="h-full w-[22%] pt-[1vw] max-[600px]:h-fit max-[600px]:pt-[5vw] shrink-0">
                  <h2
                    className="w-[85%] font-extrabold tracking-tight leading-[1.05] text-[clamp(28px,2.4vw,40px)] max-[600px]:text-[7vw]"
                    style={{ fontFamily: "var(--font-head, 'Plus Jakarta Sans', sans-serif)" }}
                  >
                    {title}
                  </h2>
                </div>

                <div className="w-full flex h-full gap-x-[15vw] max-[600px]:gap-x-[40vw]">
                  {topJourneyData.map((item) => (
                    <div
                      key={`top-${item.id}`}
                      className="relative h-full w-[30vw] px-[3vw] max-[600px]:flex max-[600px]:w-[70vw] max-[600px]:flex-col max-[600px]:px-[7vw]"
                    >
                      <div className="w-full absolute left-0 bottom-0 top-0 h-full pointer-events-none">
                        <div
                          className={`size-[1vw] max-[600px]:size-[2.5vw] -translate-x-1/2 relative aspect-square rounded-full jd-${item.id}`}
                          style={activeStyle}
                        ></div>
                        <div
                          className={`h-[94%] w-px origin-bottom rounded-full jl-${item.id}`}
                          style={activeStyle}
                        ></div>
                      </div>

                      <div className="mt-[-1vw] space-y-[0.7vw] max-[600px]:mt-[-2vw]">
                        <h4
                          className={`title-${item.id} font-bold tracking-tight text-[clamp(18px,1.6vw,26px)] leading-tight max-[600px]:text-[5.5vw]`}
                          style={{ fontFamily: "var(--font-head, 'Plus Jakarta Sans', sans-serif)" }}
                        >
                          <span className="font-mono text-[0.85em] opacity-60 mr-2 tracking-wide font-medium">{item.year}</span>
                          {item.month}
                        </h4>
                        <p
                          className={`description-${item.id} w-[92%] text-[clamp(12px,1.05vw,15px)] leading-[1.6] max-[600px]:w-[90%] max-[600px]:text-[3.8vw]`}
                          style={{ ...mutedTextStyle, fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)" }}
                        >
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Journey Items */}
              <div className="h-1/2 flex items-center justify-start w-full">
                <div className="w-[34%] pt-[2vw] max-[600px]:pt-[5vw] max-[600px]:w-[30%] h-full shrink-0">
                  <p
                    className="font-mono text-[clamp(12px,1.1vw,16px)] tracking-widest uppercase opacity-60 max-[600px]:text-[3.8vw]"
                    style={mutedTextStyle}
                  >
                    {periodLabel}
                  </p>
                </div>

                <div className="w-full flex h-full gap-x-[20vw] ml-[7vw] max-[600px]:gap-x-[40vw] max-[600px]:ml-[7vw]">
                  {bottomJourneyData.map((item) => (
                    <div
                      key={`bottom-${item.id}`}
                      className="relative h-full w-[25vw] px-[3vw] max-[600px]:w-[70vw] max-[600px]:px-[7vw]"
                    >
                      <div className="w-full absolute left-0 bottom-[-1%] h-full pointer-events-none">
                        <div
                          className={`h-[94%] origin-top w-px rounded-full max-[600px]:h-full jl-${item.id}`}
                          style={activeStyle}
                        ></div>
                        <div
                          className={`size-[1vw] max-[600px]:size-[2.5vw] -translate-x-1/2 relative w-auto aspect-square rounded-full jd-${item.id}`}
                          style={activeStyle}
                        ></div>
                      </div>

                      <div className="flex h-full w-full flex-col justify-end space-y-[0.7vw]">
                        <h4
                          className={`title-${item.id} font-bold tracking-tight text-[clamp(18px,1.6vw,26px)] leading-tight max-[600px]:text-[5.5vw]`}
                          style={{ fontFamily: "var(--font-head, 'Plus Jakarta Sans', sans-serif)" }}
                        >
                          <span className="font-mono text-[0.85em] opacity-60 mr-2 tracking-wide font-medium">{item.year}</span>
                          {item.month}
                        </h4>
                        <p
                          className={`description-${item.id} w-[92%] text-[clamp(12px,1.05vw,15px)] leading-[1.6] max-[600px]:w-[90%] max-[600px]:text-[3.8vw]`}
                          style={{ ...mutedTextStyle, fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)" }}
                        >
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
