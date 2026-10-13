"use client";

import React, { useRef, useEffect, useSyncExternalStore } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type TimelineProps = {
  title?: string;
  periodLabel?: string;
  textColor?: string;
  mutedTextColor?: string;
  activeColor?: string;
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
};

type EntryType = "education" | "experience" | "achievement";

type JourneyItem = {
  id: string;
  period: string;         // e.g. "Juli 2024 — Sekarang"
  badge: string;          // e.g. "2024 · JULI"
  type: EntryType;
  institution: string;    // school / company name
  role: string;           // major / job title
  description: string;
  highlights: string[];   // 2–3 bullet points
  skills: string[];
  isTop: boolean;
};

/* ─── IKON SVG KATEGORI (INLINE, ZERO-DEP) ─── */
const icons: Record<EntryType, React.ReactNode> = {
  education: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="1.6">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  experience: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="1.6">
      <rect x="2" y="7" width="20" height="14" rx="2" strokeLinecap="round" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" strokeLinecap="round" />
      <path d="M12 12v4m-2-2h4" strokeLinecap="round" />
    </svg>
  ),
  achievement: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const typeLabel: Record<EntryType, string> = {
  education: "Pendidikan",
  experience: "Pengalaman",
  achievement: "Pencapaian",
};

const typeBg: Record<EntryType, string> = {
  education:   "rgba(255,255,255,0.06)",
  experience:  "rgba(255,255,255,0.06)",
  achievement: "rgba(255,255,255,0.06)",
};

/* ─── DATA PENDIDIKAN & PENGALAMAN ZIDANE ─── */
const allJourneyItems: JourneyItem[] = [
  /* ── TOP ROW (atas garis) ── */
  {
    id: "smk-telkom",
    period: "Juli 2024 — Sekarang",
    badge: "2024 · JULI",
    type: "education",
    institution: "SMK Telkom Malang",
    role: "Rekayasa Perangkat Lunak (RPL)",
    description:
      "Mendalami ilmu rekayasa perangkat lunak secara komprehensif — dari pemrograman dasar, algoritma & struktur data, hingga pengembangan aplikasi berbasis web dan mobile.",
    highlights: [
      "Belajar algoritma, OOP, dan arsitektur software",
      "Aktif dalam ekstrakurikuler pemrograman & kompetisi IT",
      "Mengasah kemampuan kolaborasi tim dengan Git & Agile",
    ],
    skills: ["Algoritma", "OOP", "Git", "Web Dev"],
    isTop: true,
  },
  {
    id: "portatrip",
    period: "Mei 2025 — Agustus 2025",
    badge: "2025 · MEI",
    type: "experience",
    institution: "PortaTrip",
    role: "UI/UX Designer",
    description:
      "Merancang pengalaman pengguna yang intuitif untuk platform travel PortaTrip. Bekerja langsung dengan tim produk mulai dari riset pengguna hingga pengiriman aset desain siap produksi.",
    highlights: [
      "Menyusun design system modular & panduan komponen UI",
      "Membuat wireframe, user flow, & prototype interaktif di Figma",
      "Melakukan usability testing & iterasi desain berdasarkan feedback",
    ],
    skills: ["Figma", "Design System", "Prototyping", "User Research"],
    isTop: true,
  },
  {
    id: "monsef",
    period: "Januari 2026 — April 2026",
    badge: "2026 · JANUARI",
    type: "experience",
    institution: "Monsef App",
    role: "Mobile App Developer",
    description:
      "Membangun aplikasi pelacak keuangan personal Monsef dari nol menggunakan Flutter & Supabase. Bertanggung jawab atas arsitektur frontend mobile, integrasi backend, dan pengiriman ke toko aplikasi.",
    highlights: [
      "Mengimplementasikan fitur OCR scan struk belanja otomatis",
      "Membangun dashboard analitik pengeluaran dengan grafik interaktif",
      "Mengintegrasikan autentikasi Supabase & row-level security",
    ],
    skills: ["Flutter", "Dart", "Supabase", "OCR"],
    isTop: true,
  },
  {
    id: "open-work",
    period: "Oktober 2026 — Sekarang",
    badge: "2026 · OKT",
    type: "achievement",
    institution: "Open to Work",
    role: "Fullstack & Mobile Developer",
    description:
      "Aktif dalam dunia teknologi — mengikuti kompetisi IT, membangun proyek mandiri, dan terbuka penuh untuk peluang internship maupun kolaborasi freelance.",
    highlights: [
      "Mengikuti lomba IT tingkat regional & nasional",
      "Membangun portofolio web & mobile produktif",
      "Terbuka untuk internship, freelance, & project kolaborasi",
    ],
    skills: ["Internship", "Freelance", "Competitive Prog."],
    isTop: true,
  },

  /* ── BOTTOM ROW (bawah garis) ── */
  {
    id: "dicoding-frontend",
    period: "Oktober 2024",
    badge: "2024 · OKT",
    type: "achievement",
    institution: "Dicoding Indonesia",
    role: "Sertifikasi Front-End Web",
    description:
      "Menyelesaikan kelas Belajar Membuat Front-End Web untuk Pemula di Dicoding Indonesia dan mendapatkan sertifikat resmi dari platform.",
    highlights: [
      "Memahami HTML5, CSS3, dan DOM manipulation dengan JS",
      "Membangun aplikasi web responsif & aksesibel",
      "Lulus dengan skor terbaik pada submission akhir",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    isTop: false,
  },
  {
    id: "dicoding-flutter",
    period: "Maret 2025",
    badge: "2025 · MAR",
    type: "achievement",
    institution: "Dicoding Indonesia",
    role: "Sertifikasi Aplikasi Flutter",
    description:
      "Menyelesaikan kelas Belajar Membuat Aplikasi Flutter untuk Pemula, mempelajari widget system, state management, dan navigasi di Flutter.",
    highlights: [
      "Memahami widget tree & lifecycle Flutter",
      "Mengimplementasikan stateful & stateless widget",
      "Membangun aplikasi mobile pertama dengan UI adaptif",
    ],
    skills: ["Flutter", "Dart", "State Mgmt", "Material 3"],
    isTop: false,
  },
  {
    id: "digital-talent",
    period: "Agustus 2026",
    badge: "2026 · AGU",
    type: "achievement",
    institution: "Digital Talent Scholarship",
    role: "AI Engineer & Intermediate Web",
    description:
      "Peserta program beasiswa Digital Talent Scholarship 2026 dari Kominfo. Mendalami pengembangan web tingkat menengah dan dasar-dasar AI engineering.",
    highlights: [
      "Belajar machine learning dasar & implementasi model AI",
      "Mengerjakan proyek akhir berbasis Next.js + AI integration",
      "Bergabung dengan 500+ developer nasional pilihan",
    ],
    skills: ["AI Basics", "Next.js", "Python", "ML"],
    isTop: false,
  },
];

/* ─── REDUCED MOTION ─── */
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
function subscribeToReducedMotion(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", cb);
  return () => mql.removeEventListener("change", cb);
}
const getReducedMotionSnapshot = () =>
  typeof window !== "undefined"
    ? (window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false)
    : false;
const getServerSnapshot = () => false;
function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribeToReducedMotion, getReducedMotionSnapshot, getServerSnapshot);
}

/* ─── MILESTONE CARD ─── */
function MilestoneCard({
  item,
  mutedTextColor,
}: {
  item: JourneyItem;
  mutedTextColor: string;
}) {
  return (
    <div
      className={`card-${item.id} group w-full rounded-2xl border border-white/[0.09] p-5 transition-all duration-500 hover:border-white/[0.22] relative overflow-hidden`}
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.015) 100%)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Subtle shine on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)" }} />

      {/* Header: type badge + icon */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          {/* Category icon */}
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: typeBg[item.type], color: "rgba(255,255,255,0.7)" }}
          >
            <div className="w-4 h-4">{icons[item.type]}</div>
          </div>
          <div>
            <div className="text-[9px] font-mono tracking-[0.15em] uppercase text-white/35">
              {typeLabel[item.type]}
            </div>
            <div className="text-[10px] font-mono text-white/50 mt-0.5">{item.period}</div>
          </div>
        </div>
        {/* Badge pill */}
        <span className="shrink-0 text-[9px] font-mono tracking-wider uppercase text-white/30 bg-white/[0.03] border border-white/[0.07] px-2 py-0.5 rounded-full">
          {item.badge}
        </span>
      </div>

      {/* Institution + Role */}
      <div className="mb-2.5">
        <h4 className="text-[15px] font-bold text-white tracking-tight leading-tight">{item.institution}</h4>
        <p className="text-[12px] font-medium text-white/55 mt-0.5">{item.role}</p>
      </div>

      {/* Description */}
      <p className="text-[11.5px] leading-[1.65] mb-3" style={{ color: mutedTextColor }}>
        {item.description}
      </p>

      {/* Highlights */}
      <ul className="space-y-1 mb-3">
        {item.highlights.map((h) => (
          <li key={h} className="flex items-start gap-1.5 text-[11px]" style={{ color: mutedTextColor }}>
            <span className="mt-[4px] w-1 h-1 rounded-full bg-white/40 shrink-0" />
            <span className="leading-snug">{h}</span>
          </li>
        ))}
      </ul>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-1 pt-2.5 border-t border-white/[0.05]">
        {item.skills.map((s) => (
          <span
            key={s}
            className="text-[9.5px] font-mono text-white/40 bg-white/[0.02] border border-white/[0.07] px-2 py-0.5 rounded-md"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─── */
export default function ExperienceTimeline({
  title = "Perjalanan Saya",
  periodLabel = "2024 — 2026",
  textColor = "#ffffff",
  mutedTextColor = "rgba(255,255,255,0.55)",
  activeColor = "#ffffff",
  backgroundColor = "#090a0f",
  imageUrl = "/asset/foto123.png",
  imageAlt = "EL Zidane Ardyansyah",
}: TimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const activeGsap: typeof gsap = (window as any).gsap || gsap;
    const ST: typeof ScrollTrigger = (window as any).ScrollTrigger || ScrollTrigger;
    activeGsap.registerPlugin(ST);

    // Sync with Lenis smooth scroll
    if ((window as any).lenis) {
      (window as any).lenis.on("scroll", ST.update);
    }

    const section = sectionRef.current;
    const slider = sliderRef.current;
    if (!section || !slider) return;

    if (reducedMotion) {
      activeGsap.set(slider, { x: 0 });
      activeGsap.set(".journey-progress-line", { width: "100%" });
      allJourneyItems.forEach((item) => {
        activeGsap.set(`.jd-${item.id}`, { scale: 1, opacity: 1 });
        activeGsap.set(`.jl-${item.id}`, { scaleY: 1, opacity: 1 });
        activeGsap.set(`.card-${item.id}`, { opacity: 1, y: 0 });
      });
      return;
    }

    const ctx = activeGsap.context(() => {
      // Calculate total scroll distance from actual DOM width
      const getSlideDist = () => Math.max(slider.scrollWidth - window.innerWidth + 120, 900);

      const tl = activeGsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinSpacing: true,
          start: "top top",
          end: () => `+=${getSlideDist()}`,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Horizontal slide
      tl.to(slider, {
        x: () => -(slider.scrollWidth - window.innerWidth),
        ease: "none",
        duration: 1,
      }, 0);

      // Progress line grows
      tl.to(".journey-progress-line", { width: "100%", ease: "none", duration: 1 }, 0);

      // Per-milestone reveal
      const total = allJourneyItems.length;
      allJourneyItems.forEach((item, idx) => {
        const t = idx / Math.max(total - 1, 1);
        const start = 0.03 + t * 0.88;

        tl.fromTo(`.jd-${item.id}`,
          { scale: 0.6, opacity: 0.3 },
          { scale: 1.15, opacity: 1, duration: 0.08, ease: "power2.out" },
          start
        );
        tl.fromTo(`.jl-${item.id}`,
          { scaleY: 0, opacity: 0 },
          { scaleY: 1, opacity: 1, duration: 0.09, ease: "power2.out" },
          start
        );
        tl.fromTo(`.card-${item.id}`,
          { opacity: 0.55, y: item.isTop ? 12 : -12 },
          { opacity: 1, y: 0, duration: 0.12, ease: "power3.out" },
          start + 0.01
        );
      });
    }, section);

    const onResize = () => ST.refresh();
    window.addEventListener("resize", onResize);
    setTimeout(() => ST.refresh(), 300);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, [reducedMotion]);

  const topItems = allJourneyItems.filter((i) => i.isTop);
  const bottomItems = allJourneyItems.filter((i) => !i.isTop);

  // Card dimensions
  const CARD_H = 280;     // px – height of each milestone card
  const CONNECTOR = 40;  // px – connector line height
  const DOT = 16;        // px – dot diameter
  const AXIS_Y_OFFSET = CARD_H + CONNECTOR; // distance from top to centre of axis line

  return (
    <section
      ref={sectionRef}
      id="experience-timeline"
      className="relative w-full overflow-hidden select-none"
      style={{
        height: "100svh",
        minHeight: "740px",
        maxHeight: "1020px",
        backgroundColor,
        color: textColor,
        contain: "layout",
      }}
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Fine grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
          }}
        />
        {/* Centre ambient glow */}
        <div
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.018) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── HORIZONTAL SLIDER ── */}
      <div
        ref={sliderRef}
        className="absolute inset-y-0 left-0 flex items-center gap-10 lg:gap-14 z-10"
        style={{
          paddingLeft: "clamp(24px, 5vw, 80px)",
          paddingRight: "clamp(120px, 14vw, 320px)",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        {/* ─── INTRO CARD ─── */}
        <div
          className="shrink-0 rounded-2xl border border-white/[0.09] p-7 flex flex-col justify-between relative overflow-hidden"
          style={{
            width: "clamp(280px,22vw,320px)",
            height: `${CARD_H * 2 + CONNECTOR * 2 + DOT}px`,
            background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.014) 100%)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)",
            backdropFilter: "blur(16px)",
          }}
        >
          {/* Decorative top-left glow blob */}
          <div
            className="absolute -top-20 -left-20 w-56 h-56 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 65%)" }}
          />

          <div>
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.09] text-[10px] font-mono tracking-[0.14em] uppercase text-white/45"
              style={{ background: "rgba(255,255,255,0.03)" }}>
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
              </svg>
              Perjalanan
            </div>

            <h3
              className="font-extrabold tracking-tight leading-[1.08] mt-6"
              style={{ fontSize: "clamp(28px,2.8vw,42px)", color: textColor }}
            >
              {title}
            </h3>

            <p className="text-[12px] font-mono text-white/40 mt-2 flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
              </svg>
              {periodLabel}
            </p>

            <p className="text-[13px] leading-relaxed mt-5 text-white/40">
              Dari bangku sekolah SMK Telkom hingga pengalaman nyata merancang UI, membangun mobile app, dan meraih sertifikasi nasional.
            </p>

            {/* Stats */}
            <div className="flex gap-5 mt-7 pt-5 border-t border-white/[0.07]">
              {[["3+","Tahun"], ["4","Pengalaman"], ["3","Sertifikasi"]].map(([n,l]) => (
                <div key={l}>
                  <div className="text-[20px] font-bold font-mono text-white tracking-tight">{n}</div>
                  <div className="text-[10px] font-mono text-white/30 uppercase tracking-wider mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar footer */}
          <div className="pt-4 border-t border-white/[0.07] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full border border-white/[0.15] overflow-hidden bg-white/[0.05] shrink-0">
                <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover object-top"
                  onError={(e) => { (e.target as HTMLElement).style.opacity = "0"; }} />
              </div>
              <div>
                <div className="text-[13px] font-semibold text-white/90">EL Zidane</div>
                <div className="text-[10px] font-mono text-white/35">Malang, ID</div>
              </div>
            </div>
            <div className="text-[10px] font-mono text-white/30 flex items-center gap-1.5">
              <span>geser</span>
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5"
                style={{ animation: "ping 1.8s ease-in-out infinite" }}>
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* ─── TIMELINE STAGE ─── */}
        {/* Height = top card + connector + dot + connector + bottom card */}
        <div
          className="relative shrink-0 flex-none"
          style={{ height: `${CARD_H * 2 + CONNECTOR * 2 + DOT}px` }}
        >
          {/* ── TOP CARDS row ── */}
          <div
            className="absolute top-0 left-0 right-0 flex gap-10 lg:gap-14"
            style={{ height: `${CARD_H}px` }}
          >
            {allJourneyItems.map((item) =>
              item.isTop ? (
                <div key={`top-${item.id}`} className="shrink-0" style={{ width: "clamp(264px,20vw,300px)" }}>
                  <MilestoneCard item={item} mutedTextColor={mutedTextColor} />
                </div>
              ) : (
                <div key={`top-${item.id}`} className="shrink-0" style={{ width: "clamp(264px,20vw,300px)" }} />
              )
            )}
          </div>

          {/* ── AXIS: connector lines, track, dots ── */}
          <div
            className="absolute left-0 right-0 flex gap-10 lg:gap-14"
            style={{ top: `${CARD_H}px`, height: `${CONNECTOR * 2 + DOT}px` }}
          >
            {/* full-width background track */}
            <div
              className="absolute left-0 right-0 h-[1.5px] bg-white/[0.07] z-0 pointer-events-none"
              style={{ top: `${CONNECTOR + DOT / 2}px` }}
            />
            {/* animated progress fill */}
            <div
              className="journey-progress-line absolute left-0 h-[1.5px] w-0 z-0 pointer-events-none"
              style={{
                top: `${CONNECTOR + DOT / 2}px`,
                backgroundColor: activeColor,
                boxShadow: "0 0 8px rgba(255,255,255,0.9), 0 0 20px rgba(255,255,255,0.25)",
              }}
            />

            {allJourneyItems.map((item) => (
              <div
                key={`axis-${item.id}`}
                className="shrink-0 relative flex flex-col items-center"
                style={{ width: "clamp(264px,20vw,300px)", height: "100%" }}
              >
                {/* top connector (only for isTop items) */}
                {item.isTop && (
                  <div
                    className={`jl-${item.id} w-[1.5px] bg-gradient-to-b from-white/20 to-white/65`}
                    style={{
                      height: `${CONNECTOR}px`,
                      transformOrigin: "top",
                    }}
                  />
                )}

                {/* Node dot — always at the same vertical centre */}
                <div
                  className={`jd-${item.id} rounded-full z-10 shrink-0`}
                  style={{
                    width: `${DOT}px`,
                    height: `${DOT}px`,
                    marginTop: item.isTop ? 0 : `${CONNECTOR}px`,
                    backgroundColor: activeColor,
                    border: `3px solid ${backgroundColor}`,
                    boxShadow: "0 0 0 2px rgba(255,255,255,0.18), 0 0 14px rgba(255,255,255,0.85)",
                  }}
                />

                {/* bottom connector (only for !isTop items) */}
                {!item.isTop && (
                  <div
                    className={`jl-${item.id} w-[1.5px] bg-gradient-to-t from-white/20 to-white/65`}
                    style={{
                      height: `${CONNECTOR}px`,
                      transformOrigin: "bottom",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* ── BOTTOM CARDS row ── */}
          <div
            className="absolute bottom-0 left-0 right-0 flex gap-10 lg:gap-14"
            style={{ height: `${CARD_H}px` }}
          >
            {allJourneyItems.map((item) =>
              !item.isTop ? (
                <div key={`bot-${item.id}`} className="shrink-0" style={{ width: "clamp(264px,20vw,300px)" }}>
                  <MilestoneCard item={item} mutedTextColor={mutedTextColor} />
                </div>
              ) : (
                <div key={`bot-${item.id}`} className="shrink-0" style={{ width: "clamp(264px,20vw,300px)" }} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
