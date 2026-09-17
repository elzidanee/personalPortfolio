import React from "react";
import PortfolioClient from "@/components/PortfolioClient";
import { LampContainer } from "@/components/ui/lamp";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { BorderBeam } from "@/components/ui/border-beam";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { ScrollVelocity } from "@/components/ui/scroll-velocity";

export default function Home() {
  return (
    <>
      <PortfolioClient />

      {/* 3D PERSISTENT WEBGL CANVAS */}
      <canvas id="three-canvas"></canvas>

      {/* SCROLL PROGRESS */}
      <div id="scroll-progress"></div>

      {/* GRID BG */}
      <div className="grid-bg"></div>

      {/* ─── SPLASH ─────────────────────────────────────────────── */}
      <div id="splash">
        <div className="splash-logo">ZeeDev</div>
        <div className="splash-bar-track">
          <div className="splash-bar-fill" id="splash-fill"></div>
        </div>
        <div className="splash-label" id="splash-label">
          MEMUAT PORTOFOLIO...
        </div>
      </div>

      {/* ─── MOBILE NAV ─────────────────────────────────────────── */}
      <div id="mobile-nav">
        <button id="mobile-close" aria-label="Tutup menu">
          <i className="fas fa-times"></i>
        </button>
        <a href="#home" className="mobile-link">
          Beranda
        </a>
        <a href="#about" className="mobile-link">
          Tentang
        </a>
        <a href="#portfolio" className="mobile-link">
          Portofolio
        </a>
        <a href="#skills" className="mobile-link">
          Skills
        </a>
        <a href="#certificates" className="mobile-link">
          Sertifikat
        </a>
        <a href="#experience" className="mobile-link">
          Pengalaman
        </a>
        <a href="#contact" className="mobile-link">
          Kontak
        </a>
      </div>

      {/* ─── STICKY TOP NAVBAR ──────────────────────────────────── */}
      <nav id="nav">
        <div className="nav-container">
          <a href="#home" className="nav-logo">
            Z<span>ee</span>Dev
          </a>
          <div className="nav-links">
            <a href="#home">Beranda</a>
            <a href="#about">Tentang</a>
            <a href="#portfolio">Portofolio</a>
            <a href="#skills">Skills</a>
            <a href="#certificates">Sertifikat</a>
            <a href="#experience">Pengalaman</a>
            <a href="#contact">Kontak</a>
          </div>
          <div className="nav-actions">
            <button
              id="audio-toggle"
              className="nav-icon-btn"
              title="Toggle Sound (Mute/Unmute)"
              aria-label="Toggle Sound"
            >
              <i className="fas fa-volume-mute"></i>
            </button>
            <button
              id="terminal-nav-btn"
              className="nav-icon-btn"
              title="Open Terminal"
              aria-label="Open Terminal"
            >
              <i className="fas fa-terminal"></i>
            </button>
            <button
              id="theme-toggle"
              className="nav-icon-btn"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              <i className="fas fa-moon"></i>
            </button>
            <a href="#contact" className="nav-cta">
              HIRE ME
            </a>
            <button
              className="hamburger"
              id="hamburger"
              aria-label="Menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section id="home" className="relative overflow-hidden">
        <LampContainer className="absolute -top-28 left-0 right-0 h-[480px] -z-1 opacity-70 pointer-events-none" />
        <div className="hero-ambient-glow"></div>
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-tag fade-in">
              <span className="hero-tag-dot"></span>
              TERSEDIA UNTUK PROYEK &middot; MALANG, INDONESIA
            </div>
            <h1
              className="hero-h1 fade-in"
              style={{ transitionDelay: "0.1s" }}
            >
              Fullstack &amp; Mobile Developer
              <br />
              <span className="line-accent">Membangun Produk Berkualitas.</span>
            </h1>
            <p
              className="hero-sub fade-in"
              style={{ transitionDelay: "0.15s" }}
            >
              Siswa Rekayasa Perangkat Lunak di SMK Telkom Malang. Menguasai
              arsitektur web modern dengan <strong>Next.js</strong>, aplikasi
              mobile performa tinggi dengan <strong>Flutter</strong>, dan backend
              cloud <strong>Supabase</strong>.
            </p>
            <div
              className="hero-btns fade-in"
              style={{ transitionDelay: "0.2s" }}
            >
              <a href="#portfolio" className="btn-primary">
                Lihat Portofolio <i className="fas fa-arrow-right"></i>
              </a>
              <button className="btn-ghost" id="btn-cv">
                Unduh CV <i className="fas fa-download"></i>
              </button>
            </div>
            <div
              className="hero-stats fade-in"
              style={{ transitionDelay: "0.25s" }}
            >
              <div>
                <div className="stat-num countup" data-target="9">
                  0
                </div>
                <div className="stat-label">Proyek Selesai</div>
              </div>
              <div>
                <div className="stat-num countup" data-target="3">
                  0
                </div>
                <div className="stat-label">Tahun Pengalaman</div>
              </div>
              <div>
                <div className="stat-num countup" data-target="15">
                  0
                </div>
                <div className="stat-label">Teknologi Dikuasai</div>
              </div>
            </div>
          </div>
          <div
            className="hero-image-side fade-in-r"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="hero-img-frame">
              <img src="/asset/zidan.JPG" alt="EL Zidane Ardyansyah" />
              <div className="hero-badge badge-top">
                <span className="badge-dot"></span>
                <span>Open to Work</span>
              </div>
              <div className="hero-badge badge-bottom">
                <i
                  className="fas fa-graduation-cap"
                  style={{ color: "var(--accent)", fontSize: "0.75rem" }}
                ></i>
                <span>SMK Telkom Malang</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3D CONTAINER SCROLL SHOWCASE (21ST.DEV) ──────────── */}
      <div className="w-full max-w-7xl mx-auto px-4 -mt-12 md:-mt-8">
        <ContainerScroll
          titleComponent={
            <div className="mb-4">
              <span className="hero-tag mb-4 inline-flex">
                <span className="hero-tag-dot"></span>
                PREVIEW SHOWCASE
              </span>
              <h2 className="text-2xl md:text-5xl font-extrabold text-white tracking-tight">
                Membangun Arsitektur Web &amp; Mobile
                <br />
                <span className="line-accent">Interaktif &amp; Skalabilitas Nyata</span>
              </h2>
            </div>
          }
        >
          <div className="relative w-full h-full flex flex-col justify-between overflow-hidden bg-[#0e111a] rounded-xl border border-white/10">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#141724] border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="ml-2 text-xs font-mono text-slate-400 bg-black/40 px-3 py-1 rounded-full border border-white/5">
                https://eazychise.vercel.app — EazyChise Platform
              </span>
            </div>
            <div className="relative flex-1 overflow-hidden">
              <img
                src="/asset/eazychise.png"
                alt="EazyChise Showcase"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </ContainerScroll>
      </div>

      {/* ─── SCROLL VELOCITY MARQUEE (21ST.DEV) ────────────────── */}
      <ScrollVelocity
        texts={[
          "FULLSTACK DEVELOPER • FLUTTER MOBILE • UI/UX DESIGNER",
          "NEXT.JS • SUPABASE • TYPESCRIPT • TAILWIND CSS • FIGMA",
        ]}
        velocity={2.5}
      />

      {/* ─── ABOUT ─────────────────────────────────────────────── */}
      <section id="about" style={{ position: "relative", overflow: "hidden" }}>
        {/* Parallax Background Elements */}
        <div
          className="bg-text-parallax"
          data-parallax
          data-parallax-dir="x"
          data-speed="0.15"
          data-rotate="3"
          style={{ top: "25%", left: "-5%" }}
        >
          INNOVATION
        </div>
        <div
          className="hero-orb"
          data-parallax
          data-speed="-0.12"
          style={{
            width: "400px",
            height: "400px",
            background: "rgba(91,127,255,0.04)",
            top: "15%",
            right: "5%",
            filter: "blur(130px)",
            position: "absolute",
            zIndex: -1,
            borderRadius: "50%",
          }}
        ></div>

        <div className="section-inner">
          <div className="about-grid">
            <div className="fade-in-l">
              <div className="about-img-wrap">
                <img src="/asset/foto1.jpg" alt="About Me" />
                <div className="about-img-overlay"></div>
                <div className="available-badge">
                  <span className="badge-dot"></span>
                  <span>Tersedia untuk Proyek</span>
                </div>
              </div>
            </div>
            <div className="fade-in-r">
              <div className="section-eyebrow">TENTANG SAYA</div>
              <h2 className="section-h2">
                Halo, Saya
                <br />
                <span style={{ color: "var(--accent)" }}>EL Zidane</span>{" "}
                Ardyansyah
              </h2>
              <div className="divider" style={{ marginBottom: "1.5rem" }}></div>
              <div className="about-text">
                <p>
                  Siswa Rekayasa Perangkat Lunak di SMK Telkom Malang yang
                  berfokus pada pengembangan produk digital. Saya menguasai
                  pengembangan fullstack menggunakan Next.js, Flutter, dan
                  backend cloud modern dengan Supabase.
                </p>
                <p>
                  Berpengalaman merancang sistem dengan keamanan autentikasi,
                  manajemen data multi-akses, dan integrasi API yang optimal —
                  untuk menghadirkan solusi teknologi yang siap pakai dan berdampak
                  nyata.
                </p>
              </div>
              <div className="skills-progress">
                <div className="progress-item">
                  <div className="progress-header">
                    <span>Pengembangan Web</span>
                    <span style={{ color: "var(--accent)" }}>80%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" data-width="80"></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-header">
                    <span>Desain UI/UX</span>
                    <span style={{ color: "var(--accent)" }}>85%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" data-width="85"></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-header">
                    <span>Pengembangan Mobile</span>
                    <span style={{ color: "var(--accent)" }}>90%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" data-width="90"></div>
                  </div>
                </div>
              </div>
              <a
                href="#contact"
                className="btn-primary"
                style={{ display: "inline-flex", marginTop: "0.5rem" }}
              >
                Hubungi Saya <i className="fas fa-paper-plane"></i>
              </a>
            </div>
          </div>

          {/* GitHub Stats Widget */}
          <div
            className="about-github fade-in"
            style={{ transitionDelay: "0.3s" }}
          >
            <h3 className="github-title">Aktivitas GitHub</h3>
            <div className="github-cards-wrap">
              {/* Stats Card */}
              <div className="github-stat-card" id="github-stats-card">
                <div className="gh-card-header">
                  <div className="gh-user-info">
                    <div className="gh-avatar-wrap">
                      <img
                        id="gh-avatar"
                        src=""
                        alt="Avatar"
                        className="gh-avatar"
                      />
                      <div className="gh-avatar-skeleton"></div>
                    </div>
                    <div>
                      <div className="gh-username" id="gh-username">
                        elzidanee
                      </div>
                      <div className="gh-tag">
                        <i className="fab fa-github"></i> GitHub Stats
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://github.com/elzidanee"
                    target="_blank"
                    rel="noreferrer"
                    className="gh-profile-link"
                    id="gh-profile-link"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
                <div className="gh-stats-grid" id="gh-stats-grid">
                  <div className="gh-stat-item">
                    <div className="gh-stat-val" id="gh-repos">
                      —
                    </div>
                    <div className="gh-stat-label">Repos</div>
                  </div>
                  <div className="gh-stat-item">
                    <div className="gh-stat-val" id="gh-stars">
                      —
                    </div>
                    <div className="gh-stat-label">Stars</div>
                  </div>
                  <div className="gh-stat-item">
                    <div className="gh-stat-val" id="gh-followers">
                      —
                    </div>
                    <div className="gh-stat-label">Followers</div>
                  </div>
                  <div className="gh-stat-item">
                    <div className="gh-stat-val" id="gh-following">
                      —
                    </div>
                    <div className="gh-stat-label">Following</div>
                  </div>
                </div>
                <div className="gh-contrib-section">
                  <div className="gh-contrib-label">
                    Kontribusi (12 bulan terakhir)
                  </div>
                  <div className="gh-contrib-bar-wrap" id="gh-contrib-bars">
                    {/* bars injected by JS */}
                  </div>
                </div>
                <div className="gh-loading-overlay" id="gh-loading">
                  <div className="gh-spinner"></div>
                </div>
              </div>

              {/* Top Languages Card */}
              <div className="github-stat-card" id="github-langs-card">
                <div className="gh-card-header">
                  <div className="gh-lang-title">
                    <i
                      className="fas fa-code"
                      style={{ color: "var(--accent)" }}
                    ></i>
                    Bahasa Teratas
                  </div>
                  <div className="gh-tag">
                    <i className="fab fa-github"></i> Top Langs
                  </div>
                </div>
                <div id="gh-languages-list" className="gh-lang-list">
                  {/* injected by JS */}
                </div>
                <div className="gh-lang-bar-total" id="gh-lang-bar-total">
                  {/* colored bar injected by JS */}
                </div>
                <div className="gh-loading-overlay" id="gh-langs-loading">
                  <div className="gh-spinner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO ─────────────────────────────────────────── */}
      <section
        id="portfolio"
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(to bottom, transparent, rgba(91,127,255,0.02), transparent)",
        }}
      >
        {/* Parallax Background Elements */}
        <div
          className="bg-text-parallax"
          data-parallax
          data-parallax-dir="x"
          data-speed="-0.18"
          data-rotate="-2"
          style={{ top: "10%", right: "-2%" }}
        >
          PORTFOLIO
        </div>
        <div
          className="hero-orb"
          data-parallax
          data-speed="0.15"
          style={{
            width: "350px",
            height: "350px",
            background: "rgba(0,229,195,0.03)",
            bottom: "10%",
            left: "5%",
            filter: "blur(110px)",
            position: "absolute",
            zIndex: -1,
            borderRadius: "50%",
          }}
        ></div>

        <div className="section-inner">
          <div className="section-header fade-in">
            <div className="section-eyebrow">PORTOFOLIO</div>
            <h2 className="section-h2">Proyek Unggulan</h2>
            <p className="section-sub">
              Pameran karya dan proyek terbaru saya di berbagai domain teknologi.
            </p>
            <div className="divider"></div>
          </div>
          <div className="projects-bento-grid">
            {/* Card 1 — EazyChise (Featured Flagship) */}
            <div
              className="project-card spotlight-card bento-card bento-featured relative overflow-hidden"
              data-3d-scroll
              data-modal-id="0"
            >
              <BorderBeam size={300} duration={12} delay={0} colorFrom="#38bdf8" colorTo="#3b82f6" />
              <div className="card-spotlight-border"></div>
              <div className="card-inner">
                <div className="project-img-frame">
                  <img
                    src="/asset/eazychise.png"
                    alt="EazyChise Marketplace"
                    className="parallax-img"
                  />
                  <div className="project-img-overlay">
                    <a
                      href="https://eazychise.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      title="Kunjungi Live Demo"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <button
                      className="project-link-btn btn-view-modal"
                      title="Detail Proyek"
                      aria-label="Detail Proyek"
                    >
                      <i className="fas fa-search-plus"></i>
                    </button>
                  </div>
                  <div className="project-badges-top">
                    <span className="badge-tag web">
                      <i className="fas fa-globe"></i> WEB
                    </span>
                    <span className="badge-status live">
                      <span className="badge-pulse"></span> LIVE APP
                    </span>
                  </div>
                </div>
                <div className="project-body">
                  <div className="project-heading-row">
                    <h3>EazyChise</h3>
                    <span className="project-year">2026</span>
                  </div>
                  <p>
                    Platform marketplace waralaba responsif dengan autentikasi
                    multi-user, pencarian multi-kategori cerdas, dan kalkulator
                    simulasi ROI bisnis.
                  </p>
                  <div className="tech-pills">
                    <span className="tech-pill">
                      <i className="fab fa-react"></i> Next.js
                    </span>
                    <span className="tech-pill">TypeScript</span>
                    <span className="tech-pill">
                      <i className="fas fa-database"></i> Supabase
                    </span>
                    <span className="tech-pill">Tailwind CSS</span>
                    <span className="tech-pill">Vercel</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 — Monsef (Flagship Mobile) */}
            <div
              className="project-card spotlight-card bento-card bento-highlight relative overflow-hidden"
              data-3d-scroll
              data-modal-id="1"
            >
              <BorderBeam size={300} duration={14} delay={5} colorFrom="#c084fc" colorTo="#06b6d4" />
              <div className="card-spotlight-border"></div>
              <div className="card-inner">
                <div className="project-img-frame">
                  <img
                    src="/asset/monsef.png"
                    alt="Monsef Pencatat Keuangan"
                    className="parallax-img"
                  />
                  <div className="project-img-overlay">
                    <a
                      href="https://monsef.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      title="Kunjungi Live Demo"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <button
                      className="project-link-btn btn-view-modal"
                      title="Detail Proyek"
                      aria-label="Detail Proyek"
                    >
                      <i className="fas fa-search-plus"></i>
                    </button>
                  </div>
                  <div className="project-badges-top">
                    <span className="badge-tag mobile">
                      <i className="fas fa-mobile-alt"></i> MOBILE
                    </span>
                    <span className="badge-status ai">
                      <i className="fas fa-brain"></i> AI OCR
                    </span>
                  </div>
                </div>
                <div className="project-body">
                  <div className="project-heading-row">
                    <h3>Monsef — Pencatat Keuangan</h3>
                    <span className="project-year">2026</span>
                  </div>
                  <p>
                    Aplikasi mobile multi-platform dengan scanner struk otomatis
                    OCR, input transaksi suara (Speech-to-Text), dan sinkronisasi
                    real-time cloud.
                  </p>
                  <div className="tech-pills">
                    <span className="tech-pill">Flutter</span>
                    <span className="tech-pill">Dart</span>
                    <span className="tech-pill">OCR Engine</span>
                    <span className="tech-pill">Supabase</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 — HaloAir */}
            <div
              className="project-card spotlight-card bento-card relative overflow-hidden"
              data-3d-scroll
              data-modal-id="2"
            >
              <BorderBeam size={260} duration={16} delay={8} colorFrom="#00e5c3" colorTo="#3b82f6" />
              <div className="card-spotlight-border"></div>
              <div className="card-inner">
                <div className="project-img-frame">
                  <img
                    src="/asset/HaloAir.png"
                    alt="HaloAir PDAM"
                    className="parallax-img"
                  />
                  <div className="project-img-overlay">
                    <button
                      className="project-link-btn btn-view-modal"
                      title="Detail Proyek"
                      aria-label="Detail Proyek"
                    >
                      <i className="fas fa-search-plus"></i>
                    </button>
                  </div>
                  <div className="project-badges-top">
                    <span className="badge-tag mobile">
                      <i className="fas fa-mobile-alt"></i> MOBILE
                    </span>
                  </div>
                </div>
                <div className="project-body">
                  <div className="project-heading-row">
                    <h3>HaloAir — Manajemen PDAM</h3>
                    <span className="project-year">2026</span>
                  </div>
                  <p>
                    Aplikasi mobile multi-role (Admin &amp; User) dengan
                    sinkronisasi tagihan real-time via RESTful API.
                  </p>
                  <div className="tech-pills">
                    <span className="tech-pill">Flutter</span>
                    <span className="tech-pill">Dart</span>
                    <span className="tech-pill">REST API</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 — PortaTrip */}
            <div
              className="project-card spotlight-card bento-card"
              data-3d-scroll
              data-modal-id="3"
            >
              <div className="card-spotlight-border"></div>
              <div className="card-inner">
                <div className="project-img-frame">
                  <img
                    src="/asset/portatrip.png"
                    alt="PortaTrip UI/UX Design"
                    className="parallax-img"
                  />
                  <div className="project-img-overlay">
                    <button
                      className="project-link-btn btn-view-modal"
                      title="Detail Proyek"
                      aria-label="Detail Proyek"
                    >
                      <i className="fas fa-search-plus"></i>
                    </button>
                  </div>
                  <div className="project-badges-top">
                    <span className="badge-tag uiux">
                      <i className="fas fa-bezier-curve"></i> UI/UX
                    </span>
                  </div>
                </div>
                <div className="project-body">
                  <div className="project-heading-row">
                    <h3>PortaTrip — UI/UX Design</h3>
                    <span className="project-year">2025</span>
                  </div>
                  <p>
                    Desain platform pemesanan porter guide wisata — user flow,
                    wireframe hingga high-fidelity interactive prototype di
                    Figma.
                  </p>
                  <div className="tech-pills">
                    <span className="tech-pill">Figma</span>
                    <span className="tech-pill">Whimsical</span>
                    <span className="tech-pill">Prototyping</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 — Web Visit SMK Telkom Malang */}
            <div
              className="project-card spotlight-card bento-card"
              data-3d-scroll
              data-modal-id="4"
            >
              <div className="card-spotlight-border"></div>
              <div className="card-inner">
                <div className="project-img-frame">
                  <img
                    src="/asset/webvisit.png"
                    alt="Web Visit SMK Telkom Malang"
                    className="parallax-img"
                  />
                  <div className="project-img-overlay">
                    <a
                      href="https://mokletvisit.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <button
                      className="project-link-btn btn-view-modal"
                      title="Detail Proyek"
                      aria-label="Detail Proyek"
                    >
                      <i className="fas fa-search-plus"></i>
                    </button>
                  </div>
                  <div className="project-badges-top">
                    <span className="badge-tag web">
                      <i className="fas fa-globe"></i> WEB
                    </span>
                  </div>
                </div>
                <div className="project-body">
                  <div className="project-heading-row">
                    <h3>Web Visit SMK Telkom</h3>
                    <span className="project-year">2025</span>
                  </div>
                  <p>
                    Website resmi kunjungan SMK Telkom Malang dengan sistem
                    pendataan pengunjung terstruktur.
                  </p>
                  <div className="tech-pills">
                    <span className="tech-pill">HTML5</span>
                    <span className="tech-pill">CSS3</span>
                    <span className="tech-pill">JavaScript</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 — Aplikasi Mobile Eazychise */}
            <div
              className="project-card spotlight-card bento-card"
              data-3d-scroll
              data-modal-id="5"
            >
              <div className="card-spotlight-border"></div>
              <div className="card-inner">
                <div className="project-img-frame">
                  <img
                    src="/asset/monsef.png"
                    alt="Aplikasi Mobile Eazychise"
                    className="parallax-img"
                  />
                  <div className="project-img-overlay">
                    <button
                      className="project-link-btn btn-view-modal"
                      title="Detail Proyek"
                      aria-label="Detail Proyek"
                    >
                      <i className="fas fa-search-plus"></i>
                    </button>
                  </div>
                  <div className="project-badges-top">
                    <span className="badge-tag mobile">
                      <i className="fas fa-mobile-alt"></i> MOBILE
                    </span>
                  </div>
                </div>
                <div className="project-body">
                  <div className="project-heading-row">
                    <h3>Mobile Eazychise</h3>
                    <span className="project-year">2026</span>
                  </div>
                  <p>
                    Platform marketplace franchise versi native mobile untuk
                    eksplorasi dan transaksi bisnis cepat.
                  </p>
                  <div className="tech-pills">
                    <span className="tech-pill">Flutter</span>
                    <span className="tech-pill">Dart</span>
                    <span className="tech-pill">Mobile UI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 7 — Aplikasi Toko Online */}
            <div
              className="project-card spotlight-card bento-card"
              data-3d-scroll
              data-modal-id="6"
            >
              <div className="card-spotlight-border"></div>
              <div className="card-inner">
                <div className="project-img-frame">
                  <img
                    src="/asset/foto123.png"
                    alt="Aplikasi Toko Online"
                    className="parallax-img"
                  />
                  <div className="project-img-overlay">
                    <button
                      className="project-link-btn btn-view-modal"
                      title="Detail Proyek"
                      aria-label="Detail Proyek"
                    >
                      <i className="fas fa-search-plus"></i>
                    </button>
                  </div>
                  <div className="project-badges-top">
                    <span className="badge-tag web">
                      <i className="fas fa-shopping-cart"></i> E-COMMERCE
                    </span>
                  </div>
                </div>
                <div className="project-body">
                  <div className="project-heading-row">
                    <h3>Toko Online Fullstack</h3>
                    <span className="project-year">2024</span>
                  </div>
                  <p>
                    Aplikasi toko online komprehensif untuk katalog produk dan
                    checkout digital yang mulus.
                  </p>
                  <div className="tech-pills">
                    <span className="tech-pill">Fullstack</span>
                    <span className="tech-pill">REST API</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 8 — Aplikasi EcoGuard */}
            <div
              className="project-card spotlight-card bento-card"
              data-3d-scroll
              data-modal-id="7"
            >
              <div className="card-spotlight-border"></div>
              <div className="card-inner">
                <div className="project-img-frame">
                  <img
                    src="/asset/ecoguard.png"
                    alt="Aplikasi EcoGuard"
                    className="parallax-img"
                  />
                  <div className="project-img-overlay">
                    <button
                      className="project-link-btn btn-view-modal"
                      title="Detail Proyek"
                      aria-label="Detail Proyek"
                    >
                      <i className="fas fa-search-plus"></i>
                    </button>
                  </div>
                  <div className="project-badges-top">
                    <span className="badge-tag app">
                      <i className="fas fa-leaf"></i> ECO
                    </span>
                  </div>
                </div>
                <div className="project-body">
                  <div className="project-heading-row">
                    <h3>Aplikasi EcoGuard</h3>
                    <span className="project-year">2025</span>
                  </div>
                  <p>
                    Aplikasi peduli lingkungan dengan fitur edukasi masyarakat
                    dan gamifikasi aksi hijau berkelanjutan.
                  </p>
                  <div className="tech-pills">
                    <span className="tech-pill">Environment</span>
                    <span className="tech-pill">Gamification</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 9 — Website Mokleters */}
            <div
              className="project-card spotlight-card bento-card"
              data-3d-scroll
              data-modal-id="8"
            >
              <div className="card-spotlight-border"></div>
              <div className="card-inner">
                <div className="project-img-frame">
                  <img
                    src="/asset/mokleters.png"
                    alt="Website Mokleters"
                    className="parallax-img"
                  />
                  <div className="project-img-overlay">
                    <a
                      href="https://mokleters.com"
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-btn"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <button
                      className="project-link-btn btn-view-modal"
                      title="Detail Proyek"
                      aria-label="Detail Proyek"
                    >
                      <i className="fas fa-search-plus"></i>
                    </button>
                  </div>
                  <div className="project-badges-top">
                    <span className="badge-tag web">
                      <i className="fas fa-users"></i> COMMUNITY
                    </span>
                  </div>
                </div>
                <div className="project-body">
                  <div className="project-heading-row">
                    <h3>Website Mokleters</h3>
                    <span className="project-year">2024</span>
                  </div>
                  <p>
                    Portal interaktif komunitas Mokleters dengan informasi
                    agenda, event, dan ruang temu virtual.
                  </p>
                  <div className="tech-pills">
                    <span className="tech-pill">Web Community</span>
                    <span className="tech-pill">Interactive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ────────────────────────────────────────────── */}
      <section id="skills" style={{ position: "relative", overflow: "hidden" }}>
        {/* Parallax Background Elements */}
        <div
          className="bg-text-parallax"
          data-parallax
          data-parallax-dir="x"
          data-speed="0.12"
          data-rotate="1"
          style={{ top: "30%", left: "5%" }}
        >
          EXPERTISE
        </div>
        <div
          className="hero-orb"
          data-parallax
          data-speed="-0.1"
          style={{
            width: "300px",
            height: "300px",
            background: "rgba(91,127,255,0.03)",
            top: "20%",
            right: "10%",
            filter: "blur(100px)",
            position: "absolute",
            zIndex: -1,
            borderRadius: "50%",
          }}
        ></div>

        <div className="section-inner">
          <div className="section-header fade-in">
            <div className="section-eyebrow">TECH STACK</div>
            <h2 className="section-h2">Teknologi yang Saya Kuasai</h2>
            <p className="section-sub">
              Tools dan teknologi yang saya gunakan sehari-hari untuk membangun
              produk digital.
            </p>
            <div className="divider"></div>
          </div>
          <div className="skills-layout">
            <div className="skills-left">
              <div className="skills-grid">
                <div className="skill-card spotlight-card" data-3d-scroll>
                  <div className="card-spotlight-border"></div>
                  <div className="skill-icon">
                    <i className="fab fa-html5" style={{ color: "#e34f26" }}></i>
                  </div>
                  <div className="skill-name">HTML5</div>
                  <div className="skill-desc">Semantic Markup</div>
                </div>
                <div className="skill-card spotlight-card" data-3d-scroll>
                  <div className="card-spotlight-border"></div>
                  <div className="skill-icon">
                    <i
                      className="fab fa-css3-alt"
                      style={{ color: "#1572b6" }}
                    ></i>
                  </div>
                  <div className="skill-name">CSS3</div>
                  <div className="skill-desc">Modern Styling</div>
                </div>
                <div className="skill-card spotlight-card" data-3d-scroll>
                  <div className="card-spotlight-border"></div>
                  <div className="skill-icon">
                    <i className="fab fa-js" style={{ color: "#f7df1e" }}></i>
                  </div>
                  <div className="skill-name">JavaScript</div>
                  <div className="skill-desc">ES6+ / TypeScript</div>
                </div>
                <div className="skill-card spotlight-card" data-3d-scroll>
                  <div className="card-spotlight-border"></div>
                  <div className="skill-icon">
                    <i className="fab fa-react" style={{ color: "#61dafb" }}></i>
                  </div>
                  <div className="skill-name">React / Next.js</div>
                  <div className="skill-desc">Frontend SPA / SSR</div>
                </div>
                <div className="skill-card spotlight-card" data-3d-scroll>
                  <div className="card-spotlight-border"></div>
                  <div className="skill-icon" style={{ color: "#54c5f8" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M5.9 15.375L2.5 12l11-11h6.775zM13.5 23l-5.925-5.925L13.5 11.15h6.775l-5.925 5.925L20.275 23z" />
                    </svg>
                  </div>
                  <div className="skill-name">Flutter</div>
                  <div className="skill-desc">Mobile App</div>
                </div>
                <div className="skill-card spotlight-card" data-3d-scroll>
                  <div className="card-spotlight-border"></div>
                  <div className="skill-icon">
                    <i className="fab fa-figma" style={{ color: "#a259ff" }}></i>
                  </div>
                  <div className="skill-name">Figma</div>
                  <div className="skill-desc">UI/UX Design</div>
                </div>
                <div className="skill-card spotlight-card" data-3d-scroll>
                  <div className="card-spotlight-border"></div>
                  <div className="skill-icon" style={{ color: "#3fcf8e" }}>
                    <i className="fas fa-database"></i>
                  </div>
                  <div className="skill-name">Supabase</div>
                  <div className="skill-desc">Backend / Cloud DB</div>
                </div>
                <div className="skill-card spotlight-card" data-3d-scroll>
                  <div className="card-spotlight-border"></div>
                  <div className="skill-icon">
                    <i
                      className="fab fa-git-alt"
                      style={{ color: "#f05032" }}
                    ></i>
                  </div>
                  <div className="skill-name">Git &amp; Postman</div>
                  <div className="skill-desc">Version Control &amp; API</div>
                </div>
              </div>
            </div>
            <div
              className="skills-right fade-in"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="skills-chart-card spotlight-card">
                <div className="card-spotlight-border"></div>
                <div className="chart-header">
                  <span className="radar-dot"></span>
                  <h3>Peta Kompetensi Dev</h3>
                </div>
                <div className="skills-chart-wrapper">
                  <canvas id="skills-radar-chart"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATES ───────────────────────────────────────── */}
      <section
        id="certificates"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div
          className="bg-text-parallax"
          data-parallax
          data-parallax-dir="x"
          data-speed="0.15"
          data-rotate="2"
          style={{ top: "20%", right: "3%" }}
        >
          CERTIFIED
        </div>
        <div
          className="hero-orb"
          data-parallax
          data-speed="-0.1"
          style={{
            width: "350px",
            height: "350px",
            background: "rgba(0,229,195,0.04)",
            top: "10%",
            left: "-5%",
            filter: "blur(100px)",
            position: "absolute",
            zIndex: -1,
            borderRadius: "50%",
          }}
        ></div>

        <div className="section-inner">
          <div className="section-header fade-in">
            <div className="section-eyebrow">PENCAPAIAN</div>
            <h2 className="section-h2">Sertifikat &amp; Penghargaan</h2>
            <p className="section-sub">
              Sertifikasi profesional dan penghargaan yang telah saya raih dalam
              perjalanan belajar.
            </p>
            <div className="divider"></div>
          </div>
          {/* Category Filters */}
          <div
            className="cert-filters fade-in"
            style={{ transitionDelay: "0.02s" }}
          >
            <button className="cert-filter-btn active" data-filter="all">
              Semua
            </button>
            <button className="cert-filter-btn" data-filter="lomba">
              Lomba
            </button>
            <button className="cert-filter-btn" data-filter="pelatihan">
              Pelatihan
            </button>
            <button className="cert-filter-btn" data-filter="lainnya">
              Lainnya
            </button>
          </div>

          <div className="cert-grid">
            {/* Lomba 1 — WebCreation 2026 */}
            <div
              className="cert-card fade-in"
              data-category="lomba"
              style={{ transitionDelay: "0.05s" }}
            >
              <div className="cert-badge">WINNER</div>
              <div className="cert-img-wrap">
                <img
                  src="/asset/sertif/lomba3.png"
                  alt="Lomba WebCreation Competition 2026"
                  className="cert-img"
                />
                <div className="cert-img-overlay">
                  <span className="cert-view-btn">
                    <i className="fas fa-search-plus"></i> LIHAT DETAIL
                  </span>
                </div>
              </div>
              <div className="cert-body">
                <div className="cert-header">
                  <div className="cert-icon blue">
                    <i className="fas fa-globe"></i>
                  </div>
                  <h3 className="cert-name">
                    Lomba Web Creation Competition
                  </h3>
                </div>
                <div className="cert-issuer">Web Creation Competition</div>
                <div className="cert-footer">
                  <span className="cert-date">
                    <i className="fas fa-calendar-alt"></i> 2026
                  </span>
                </div>
              </div>
            </div>

            <div
              className="cert-card fade-in"
              data-category="lomba"
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="cert-badge">RUNNER UP</div>
              <div className="cert-img-wrap">
                <img
                  src="/asset/sertif/lomba4.jpg"
                  alt="Peserta Seminar Artificial Intelligence"
                  className="cert-img"
                />
                <div className="cert-img-overlay">
                  <span className="cert-view-btn">
                    <i className="fas fa-search-plus"></i> LIHAT DETAIL
                  </span>
                </div>
              </div>
              <div className="cert-body">
                <div className="cert-header">
                  <div className="cert-icon green">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3 className="cert-name">Juara 2 Flutter Competition</h3>
                </div>
                <div className="cert-issuer">
                  Institut Sains Dan Teknologi Terpadu Surabaya
                </div>
                <div className="cert-footer">
                  <span className="cert-date">
                    <i className="fas fa-calendar-alt"></i> 2026
                  </span>
                </div>
              </div>
            </div>

            {/* Lomba 2 — UI/UX ISINDO */}
            <div
              className="cert-card fade-in"
              data-category="lomba"
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="cert-badge">WINNER</div>
              <div className="cert-img-wrap">
                <img
                  src="/asset/sertif/lomba2.png"
                  alt="Lomba UI/UX ISINDO Champions 2024"
                  className="cert-img"
                />
                <div className="cert-img-overlay">
                  <span className="cert-view-btn">
                    <i className="fas fa-search-plus"></i> LIHAT DETAIL
                  </span>
                </div>
              </div>
              <div className="cert-body">
                <div className="cert-header">
                  <div className="cert-icon green">
                    <i className="fas fa-paint-brush"></i>
                  </div>
                  <h3 className="cert-name">
                    Lomba UI/UX ISINDO Champions
                  </h3>
                </div>
                <div className="cert-issuer">ISINDO</div>
                <div className="cert-footer">
                  <span className="cert-date">
                    <i className="fas fa-calendar-alt"></i> 2024
                  </span>
                </div>
              </div>
            </div>

            {/* Lomba 3 — BusinessPlan Finalist */}
            <div
              className="cert-card fade-in"
              data-category="lomba"
              style={{ transitionDelay: "0.15s" }}
            >
              <div className="cert-badge">FINALIS</div>
              <div className="cert-img-wrap">
                <img
                  src="/asset/sertif/lomba1.png"
                  alt="Finalis Business Plan Competition 2025"
                  className="cert-img"
                />
                <div className="cert-img-overlay">
                  <span className="cert-view-btn">
                    <i className="fas fa-search-plus"></i> LIHAT DETAIL
                  </span>
                </div>
              </div>
              <div className="cert-body">
                <div className="cert-header">
                  <div className="cert-icon orange">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <h3 className="cert-name">
                    Finalis Business Plan Competition
                  </h3>
                </div>
                <div className="cert-issuer">BEGIN 1.0</div>
                <div className="cert-footer">
                  <span className="cert-date">
                    <i className="fas fa-calendar-alt"></i> 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Pelatihan 1 — React Dicoding */}
            <div
              className="cert-card fade-in"
              data-category="pelatihan"
              style={{ transitionDelay: "0.35s" }}
            >
              <div className="cert-badge">VERIFIED</div>
              <div className="cert-img-wrap">
                <img
                  src="/asset/sertif/image.png"
                  alt="AI Engineer & Intermediate Web Developer - Digital Talent Scholarship"
                  className="cert-img"
                />
                <div className="cert-img-overlay">
                  <span className="cert-view-btn">
                    <i className="fas fa-search-plus"></i> LIHAT DETAIL
                  </span>
                </div>
              </div>
              <div className="cert-body">
                <div className="cert-header">
                  <div className="cert-icon orange">
                    <i className="fas fa-brain"></i>
                  </div>
                  <h3 className="cert-name">
                    Sertifikasi Software Engineer HackerRank
                  </h3>
                </div>
                <div className="cert-issuer">HackerRank</div>
                <div className="cert-footer">
                  <span className="cert-date">
                    <i className="fas fa-calendar-alt"></i> 2026
                  </span>
                </div>
              </div>
            </div>

            <div
              className="cert-card fade-in"
              data-category="pelatihan"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="cert-badge">VERIFIED</div>
              <div className="cert-img-wrap">
                <img
                  src="/asset/sertif/sertif1.png"
                  alt="Membuat Aplikasi Web dengan ReactJS"
                  className="cert-img"
                />
                <div className="cert-img-overlay">
                  <span className="cert-view-btn">
                    <i className="fas fa-search-plus"></i> LIHAT DETAIL
                  </span>
                </div>
              </div>
              <div className="cert-body">
                <div className="cert-header">
                  <div className="cert-icon blue">
                    <i className="fab fa-react"></i>
                  </div>
                  <h3 className="cert-name">
                    Membuat Aplikasi Web dengan ReactJS
                  </h3>
                </div>
                <div className="cert-issuer">Dicoding Indonesia</div>
                <div className="cert-footer">
                  <span className="cert-date">
                    <i className="fas fa-calendar-alt"></i> 2024
                  </span>
                </div>
              </div>
            </div>

            {/* Pelatihan 2 — Front-End Dicoding */}
            <div
              className="cert-card fade-in"
              data-category="pelatihan"
              style={{ transitionDelay: "0.25s" }}
            >
              <div className="cert-badge">VERIFIED</div>
              <div className="cert-img-wrap">
                <img
                  src="/asset/sertif/sertif2.png"
                  alt="Belajar Membuat Front-End Web untuk Pemula"
                  className="cert-img"
                />
                <div className="cert-img-overlay">
                  <span className="cert-view-btn">
                    <i className="fas fa-search-plus"></i> LIHAT DETAIL
                  </span>
                </div>
              </div>
              <div className="cert-body">
                <div className="cert-header">
                  <div className="cert-icon cyan">
                    <i className="fas fa-code"></i>
                  </div>
                  <h3 className="cert-name">
                    Belajar Membuat Front-End Web untuk Pemula
                  </h3>
                </div>
                <div className="cert-issuer">Dicoding Indonesia</div>
                <div className="cert-footer">
                  <span className="cert-date">
                    <i className="fas fa-calendar-alt"></i> 2024
                  </span>
                </div>
              </div>
            </div>

            {/* Pelatihan 3 — Flutter Dicoding */}
            <div
              className="cert-card fade-in"
              data-category="pelatihan"
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="cert-badge">VERIFIED</div>
              <div className="cert-img-wrap">
                <img
                  src="/asset/sertif/sertif4.jpg"
                  alt="Belajar Membuat Aplikasi Flutter untuk Pemula"
                  className="cert-img"
                />
                <div className="cert-img-overlay">
                  <span className="cert-view-btn">
                    <i className="fas fa-search-plus"></i> LIHAT DETAIL
                  </span>
                </div>
              </div>
              <div className="cert-body">
                <div className="cert-header">
                  <div className="cert-icon cyan">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <h3 className="cert-name">
                    Belajar Membuat Aplikasi Flutter untuk Pemula
                  </h3>
                </div>
                <div className="cert-issuer">Dicoding Indonesia</div>
                <div className="cert-footer">
                  <span className="cert-date">
                    <i className="fas fa-calendar-alt"></i> 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Pelatihan 4 — Digital Talent Scholarship */}
            <div
              className="cert-card fade-in"
              data-category="pelatihan"
              style={{ transitionDelay: "0.35s" }}
            >
              <div className="cert-badge">VERIFIED</div>
              <div className="cert-img-wrap">
                <img
                  src="/asset/sertif/sertif3.png"
                  alt="AI Engineer & Intermediate Web Developer - Digital Talent Scholarship"
                  className="cert-img"
                />
                <div className="cert-img-overlay">
                  <span className="cert-view-btn">
                    <i className="fas fa-search-plus"></i> LIHAT DETAIL
                  </span>
                </div>
              </div>
              <div className="cert-body">
                <div className="cert-header">
                  <div className="cert-icon orange">
                    <i className="fas fa-brain"></i>
                  </div>
                  <h3 className="cert-name">
                    Pelatihan AI Engineer &amp; Intermediate Web Developer
                  </h3>
                </div>
                <div className="cert-issuer">
                  Digital Talent Scholarship 2026
                </div>
                <div className="cert-footer">
                  <span className="cert-date">
                    <i className="fas fa-calendar-alt"></i> 2026
                  </span>
                </div>
              </div>
            </div>

            {/* Lainnya — Seminar AI */}
            <div
              className="cert-card fade-in"
              data-category="lainnya"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="cert-badge">VERIFIED</div>
              <div className="cert-img-wrap">
                <img
                  src="/asset/sertif/sertif5.png"
                  alt="Membuat Aplikasi Web dengan ReactJS"
                  className="cert-img"
                />
                <div className="cert-img-overlay">
                  <span className="cert-view-btn">
                    <i className="fas fa-search-plus"></i> LIHAT DETAIL
                  </span>
                </div>
              </div>
              <div className="cert-body">
                <div className="cert-header">
                  <div className="cert-icon blue">
                    <i className="fab fa-react"></i>
                  </div>
                  <h3 className="cert-name">TalkSHow AMD Ryzen</h3>
                </div>
                <div className="cert-issuer">AMD Indonesia</div>
                <div className="cert-footer">
                  <span className="cert-date">
                    <i className="fas fa-calendar-alt"></i> 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ────────────────────────────────────────── */}
      <section
        id="experience"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Parallax Background Elements */}
        <div
          className="bg-text-parallax"
          data-parallax
          data-parallax-dir="x"
          data-speed="-0.15"
          data-rotate="-3"
          style={{ top: "25%", right: "2%" }}
        >
          TIMELINE
        </div>
        <div
          className="hero-orb"
          data-parallax
          data-speed="0.1"
          style={{
            width: "400px",
            height: "400px",
            background: "rgba(0,229,195,0.03)",
            bottom: "15%",
            left: "10%",
            filter: "blur(120px)",
            position: "absolute",
            zIndex: -1,
            borderRadius: "50%",
          }}
        ></div>

        <div className="section-inner">
          <div className="section-header fade-in">
            <div className="section-eyebrow">PERJALANAN</div>
            <h2 className="section-h2">Pengalaman &amp; Pendidikan</h2>
            <p className="section-sub">
              Timeline perjalanan belajar dan pengalaman saya di dunia
              teknologi.
            </p>
            <div className="divider"></div>
          </div>
          <TracingBeam className="px-2 md:px-6">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2024 — SEKARANG</div>
                <div className="timeline-title">
                  Siswa Rekayasa Perangkat Lunak
                </div>
                <div className="timeline-org">SMK Telkom Malang</div>
                <div className="timeline-desc">
                  Mempelajari pengembangan perangkat lunak dari dasar pemrograman,
                  OOP, basis data, hingga proyek nyata. Aktif dalam berbagai
                  kompetisi IT tingkat regional dan nasional.
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">JUNI 2026 — SEKARANG</div>
                <div className="timeline-title">
                  Full Stack Web Developer — EazyChise
                </div>
                <div className="timeline-org">Web Creation Competition</div>
                <div className="timeline-desc">
                  Mengembangkan platform marketplace waralaba responsif
                  menggunakan Next.js, Tailwind CSS, dan Vercel. Mengimplementasikan
                  fitur autentikasi, pencarian multi-kategori, kalkulator simulasi
                  keuntungan, dan formulir digital berbasis Supabase.
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">APRIL 2026 — SEKARANG</div>
                <div className="timeline-title">
                  Mobile Application Developer — Monsef
                </div>
                <div className="timeline-org">Project Mandiri</div>
                <div className="timeline-desc">
                  Merancang dan membangun aplikasi pencatat keuangan mobile dari
                  awal hingga produksi menggunakan Flutter &amp; Dart.
                  Mengintegrasikan OCR API (Scan Struk), Speech-to-Text, dan
                  Supabase untuk efisiensi otomatisasi input transaksi.
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">JUNI 2026 — SEKARANG</div>
                <div className="timeline-title">
                  Mobile Application Developer — HaloAir
                </div>
                <div className="timeline-org">Project Mandiri</div>
                <div className="timeline-desc">
                  Mengembangkan aplikasi mobile manajemen PDAM dengan Flutter
                  menggunakan arsitektur Multi-Role (Admin &amp; User).
                  Mengintegrasikan RESTful API untuk sinkronisasi data operasional
                  dan manajemen tagihan real-time.
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">MEI 2025 — SEKARANG</div>
                <div className="timeline-title">
                  UI/UX Designer — PortaTrip
                </div>
                <div className="timeline-org">Lomba Design</div>
                <div className="timeline-desc">
                  Merancang User Flow dan Wireframe platform aplikasi wisata dan
                  pemesanan porter guide menggunakan Figma dan Whimsical. Membangun
                  Interactive Prototype untuk validasi alur navigasi yang intuitif
                  dan responsif.
                </div>
              </div>
            </div>
          </TracingBeam>
        </div>
      </section>

      {/* ─── CONTACT ───────────────────────────────────────────── */}
      <section
        id="contact"
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(to bottom, transparent, rgba(0,229,195,0.02), transparent)",
        }}
      >
        {/* Parallax Background Elements */}
        <div
          className="bg-text-parallax"
          data-parallax
          data-parallax-dir="x"
          data-speed="0.16"
          data-rotate="2"
          style={{ top: "15%", left: "-2%" }}
        >
          COLLABORATE
        </div>
        <div
          className="hero-orb"
          data-parallax
          data-speed="-0.12"
          style={{
            width: "350px",
            height: "350px",
            background: "rgba(91,127,255,0.04)",
            top: "10%",
            right: "5%",
            filter: "blur(100px)",
            position: "absolute",
            zIndex: -1,
            borderRadius: "50%",
          }}
        ></div>

        <div className="section-inner">
          <div className="section-header fade-in">
            <div className="section-eyebrow">KONTAK</div>
            <h2 className="section-h2">Ayo Berkolaborasi</h2>
            <p className="section-sub">
              Punya proyek menarik? Mari kita diskusikan dan wujudkan bersama.
            </p>
            <div className="divider"></div>
          </div>
          <div className="contact-grid">
            <div className="fade-in-l">
              <h3>Mari Bangun Sesuatu yang Luar Biasa Bersama.</h3>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="ci-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <div className="ci-label">EMAIL</div>
                    <div className="ci-val">elzidaneardyansyah265@gmail.com</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="ci-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <div className="ci-label">LOKASI</div>
                    <div className="ci-val">Kota Malang, Jawa Timur</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="ci-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <div className="ci-label">TELEPON</div>
                    <div className="ci-val">+62 877 9273 5999</div>
                  </div>
                </div>
              </div>
              <div className="social-row">
                <a
                  href="https://www.instagram.com/_elzdne"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://github.com/elzidane"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://linkedin.com/in/elzidane"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="social-btn"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="fade-in-r">
              <form id="contact-form" className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="f-name">NAMA</label>
                    <input type="text" id="f-name" placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="f-email">EMAIL</label>
                    <input
                      type="email"
                      id="f-email"
                      placeholder="john@email.com"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="f-subject">SUBJEK</label>
                  <input
                    type="text"
                    id="f-subject"
                    placeholder="Kolaborasi Proyek"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="f-message">PESAN</label>
                  <textarea
                    id="f-message"
                    rows={5}
                    placeholder="Ceritakan tentang proyek Anda..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  id="btn-send"
                  className="btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "1rem",
                    gap: "0.6rem",
                    transition: "all 0.3s",
                  }}
                >
                  <span id="btn-send-text">Kirim Pesan</span>{" "}
                  <i className="fas fa-paper-plane" id="btn-send-icon"></i>
                </button>
                <div
                  id="form-status"
                  style={{
                    marginTop: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    textAlign: "center",
                    display: "none",
                  }}
                ></div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────────── */}
      <footer>
        <div className="footer-logo">
          Z<span>ee</span>Dev
        </div>
        <div>
          &copy; 2026 EL Zidane Ardyansyah &middot; Dibuat dengan{" "}
          <i className="fas fa-heart" style={{ color: "var(--accent-3)" }}></i>
        </div>
      </footer>

      {/* ─── PROJECT MODAL ──────────────────────────────────── */}
      <div
        className="project-modal-overlay"
        id="project-modal-overlay"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="project-modal"
          id="project-modal"
          style={{ position: "relative" }}
        >
          <button
            className="project-modal-close"
            id="project-modal-close"
            aria-label="Tutup"
          >
            <i className="fas fa-times"></i>
          </button>
          <img src="" alt="" className="project-modal-img" id="modal-img" />
          <div className="project-modal-body">
            <span className="project-modal-tag" id="modal-tag">
              WEB
            </span>
            <h2 className="project-modal-title" id="modal-title"></h2>
            <p className="project-modal-desc" id="modal-desc"></p>
            <p className="project-modal-section-title">FITUR UTAMA</p>
            <ul className="project-modal-features" id="modal-features"></ul>
            <p className="project-modal-section-title">TECH STACK</p>
            <div className="project-modal-tech" id="modal-tech"></div>
            <div className="project-modal-footer">
              <a
                href="#"
                id="modal-live-link"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ fontSize: "0.85rem", padding: "0.65rem 1.4rem" }}
              >
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
              <a
                href="#"
                id="modal-github-link"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
                style={{ fontSize: "0.85rem", padding: "0.65rem 1.4rem" }}
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ─── DEVELOPER TERMINAL ──────────────────────────────── */}
      <button
        id="terminal-toggle"
        title="Developer Terminal"
        aria-label="Open Developer Terminal"
      >
        <i className="fas fa-terminal"></i>
      </button>
      <div id="terminal-widget">
        <div className="terminal-titlebar">
          <span className="terminal-dot red"></span>
          <span className="terminal-dot yellow"></span>
          <span className="terminal-dot green"></span>
          <span className="terminal-title">zeedev@portfolio:~$</span>
        </div>
        <div className="terminal-body" id="terminal-body"></div>
        <div className="terminal-input-row">
          <span className="terminal-prompt">zeedev@portfolio:~$&nbsp;</span>
          <input
            type="text"
            id="terminal-input"
            placeholder="ketik 'help' untuk mulai..."
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>

      {/* Back to Top */}
      <button id="btt" aria-label="Back to top">
        <i className="fas fa-arrow-up"></i>
      </button>

      {/* Notification */}
      <div id="notif">
        <i className="fas fa-check-circle" id="notif-icon"></i>
        <span id="notif-msg">Pesan terkirim!</span>
      </div>

      {/* Lightbox Modal for Certificates */}
      <div id="cert-lightbox" className="lightbox">
        <span className="lightbox-close">&times;</span>
        <img
          className="lightbox-content"
          id="lightbox-img"
          alt="Certificate Preview"
        />
        <div id="lightbox-caption" className="lightbox-caption"></div>
      </div>
    </>
  );
}
