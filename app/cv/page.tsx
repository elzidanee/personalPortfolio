"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function CvPage() {
  useEffect(() => {
    // Delay print popup slightly to let the page render completely
    const timer = setTimeout(() => {
      window.print();
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        :root {
          --bg-color: #0d0f14;
          --text-color: #333333;
          --header-bg: #161a23;
          --accent-color: #00e5c3;
          --accent-blue: #5b7fff;
          --border-color: #e0e0e0;
          --font-main: 'Arial', sans-serif;
          --paper-bg: #ffffff;
        }

        .cv-body-wrap {
          font-family: var(--font-main);
          background-color: var(--bg-color);
          color: var(--text-color);
          line-height: 1.5;
          padding-bottom: 3rem;
          min-height: 100vh;
        }

        /* ─── SCREEN CONTROLS ────────────────────────────────────── */
        .controls-bar {
          background-color: var(--header-bg);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .controls-logo {
          color: #ffffff;
          font-weight: 700;
          font-size: 1.2rem;
          text-decoration: none;
        }
        .controls-logo span {
          color: var(--accent-color);
        }

        .controls-btns {
          display: flex;
          gap: 1rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
        }

        .btn-back {
          background-color: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-back:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: var(--accent-blue);
        }

        .btn-print {
          background-color: var(--accent-color);
          color: #0d0f14;
          box-shadow: 0 4px 15px rgba(0, 229, 195, 0.2);
        }

        .btn-print:hover {
          background-color: #00c4a6;
          transform: translateY(-2px);
        }

        /* ─── RESUME CONTAINER (PAPER WRAP) ──────────────────────── */
        .resume-wrapper {
          max-width: 800px;
          margin: 2.5rem auto;
          background-color: var(--paper-bg);
          padding: 3rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          border-radius: 4px;
        }

        /* ─── ATS RESUME FORMAT ──────────────────────────────────── */
        .cv-header {
          text-align: center;
          border-bottom: 2px solid #333;
          padding-bottom: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .cv-name {
          font-size: 2rem;
          font-weight: bold;
          letter-spacing: -0.02em;
          color: #111111;
          margin-bottom: 0.25rem;
          text-transform: uppercase;
        }

        .cv-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #555555;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .cv-contact {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.85rem;
          color: #444444;
        }

        .cv-contact span {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .cv-contact a {
          color: #444444;
          text-decoration: none;
        }

        .cv-contact a:hover {
          text-decoration: underline;
        }

        /* Section Layout */
        .cv-section {
          margin-bottom: 1.75rem;
        }

        .cv-section-title {
          font-size: 1.1rem;
          font-weight: bold;
          color: #111111;
          border-bottom: 1px solid #333;
          padding-bottom: 0.2rem;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .cv-summary-text {
          font-size: 0.92rem;
          color: #333333;
          text-align: justify;
        }

        /* Timeline Items */
        .cv-item {
          margin-bottom: 1.25rem;
        }
        .cv-item:last-child {
          margin-bottom: 0;
        }

        .cv-item-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 0.25rem;
        }

        .cv-item-title {
          font-size: 0.95rem;
          font-weight: bold;
          color: #111111;
        }

        .cv-item-date {
          font-size: 0.85rem;
          font-weight: 600;
          color: #555555;
        }

        .cv-item-sub {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          font-style: italic;
          color: #555555;
          margin-bottom: 0.4rem;
        }

        .cv-item-bullets {
          list-style-type: square;
          margin-left: 1.25rem;
          font-size: 0.88rem;
          color: #333333;
        }

        .cv-item-bullets li {
          margin-bottom: 0.25rem;
        }

        /* Skills Lists */
        .skills-container {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .skills-row {
          font-size: 0.9rem;
          color: #333333;
        }

        .skills-label {
          font-weight: bold;
          color: #111111;
          display: inline-block;
          width: 180px;
        }

        /* ─── PRINT MEDIA INSTRUCTIONS ──────────────────────────── */
        @media print {
          .cv-body-wrap {
            background-color: #ffffff !important;
            color: #000000 !important;
            padding-bottom: 0 !important;
          }

          .controls-bar {
            display: none !important;
          }

          .resume-wrapper {
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            max-width: 100% !important;
            background-color: #ffffff !important;
          }

          /* Margins optimized for standard A4 */
          @page {
            size: A4;
            margin: 1.5cm;
          }

          a {
            text-decoration: none !important;
            color: #000000 !important;
          }
        }
      `}</style>

      <div className="cv-body-wrap">
        {/* CONTROL BAR (Screen Only) */}
        <div className="controls-bar">
          <Link href="/" className="controls-logo">
            Z<span>ee</span>Dev
          </Link>
          <div className="controls-btns">
            <Link href="/" className="btn btn-back">
              <i className="fas fa-arrow-left"></i> Portofolio
            </Link>
            <button onClick={() => window.print()} className="btn btn-print">
              <i className="fas fa-file-pdf"></i> Unduh / Cetak PDF
            </button>
          </div>
        </div>

        {/* ATS RESUME MAIN PAGE */}
        <div className="resume-wrapper">
          {/* HEADER CONTACT */}
          <header className="cv-header">
            <h1 className="cv-name">EL Zidane Ardyansyah</h1>
            <div className="cv-title">Fullstack Developer &amp; Mobile Developer</div>
            <div className="cv-contact">
              <span>
                <i className="fas fa-envelope"></i>{" "}
                <a href="mailto:elzidaneardyansyah265@gmail.com">
                  elzidaneardyansyah265@gmail.com
                </a>
              </span>
              <span>
                <i className="fas fa-phone"></i> +62 877 9273 5999
              </span>
              <span>
                <i className="fas fa-map-marker-alt"></i> Malang, Jawa Timur,
                Indonesia
              </span>
              <span>
                <i className="fab fa-github"></i>{" "}
                <a
                  href="https://github.com/elzidane"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/elzidane
                </a>
              </span>
            </div>
          </header>

          {/* PROFILE SUMMARY */}
          <section className="cv-section">
            <h2 className="cv-section-title">Ringkasan Profil</h2>
            <p className="cv-summary-text">
              Siswa Teknik Perangkat Lunak (RPL) di SMK Telkom Malang yang
              berdedikasi tinggi dengan pengalaman lebih dari 1 tahun dalam
              pengembangan aplikasi web dan mobile. Menguasai pengembangan
              fullstack menggunakan ekosistem JavaScript (React, Next.js, Node.js)
              serta pengembangan mobile multiplatform dengan Flutter. Terbukti
              sukses dalam membangun produk digital berkualitas serta berprestasi
              dalam kompetisi keahlian IT tingkat regional.
            </p>
          </section>

          {/* EDUCATION */}
          <section className="cv-section">
            <h2 className="cv-section-title">Pendidikan</h2>
            <div className="cv-item">
              <div className="cv-item-header">
                <span className="cv-item-title">SMK Telkom Malang</span>
                <span className="cv-item-date">2023 — Sekarang</span>
              </div>
              <div className="cv-item-sub">
                <span>Teknik Perangkat Lunak (Software Engineering)</span>
                <span>Malang, Indonesia</span>
              </div>
              <ul className="cv-item-bullets">
                <li>
                  Mempelajari dasar pemrograman terstruktur, pemrograman
                  berorientasi objek (OOP), basis data relasional (SQL) dan
                  non-relasional (NoSQL), serta rekayasa perangkat lunak.
                </li>
                <li>
                  Aktif dalam proyek pengembangan aplikasi sekolah dan pelatihan
                  kompetisi teknis.
                </li>
              </ul>
            </div>
          </section>

          {/* PROJECT EXPERIENCE */}
          <section className="cv-section">
            <h2 className="cv-section-title">Pengalaman Proyek</h2>

            {/* Project 1 */}
            <div className="cv-item">
              <div className="cv-item-header">
                <span className="cv-item-title">
                  Sistem Kunjungan Sekolah (Moklet Visit)
                </span>
                <span className="cv-item-date">2024</span>
              </div>
              <div className="cv-item-sub">
                <span>Web Developer (Proyek Mandiri)</span>
                <span>Next.js, Express.js, MySQL</span>
              </div>
              <ul className="cv-item-bullets">
                <li>
                  Membangun platform pendaftaran kunjungan sekolah dari tahap
                  perancangan basis data hingga deployment.
                </li>
                <li>
                  Mengembangkan backend RESTful API dengan Express.js dan
                  antarmuka administrator responsif menggunakan Next.js.
                </li>
                <li>
                  Mengimplementasikan modul otentikasi admin yang aman serta
                  visualisasi data status kunjungan secara real-time.
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="cv-item">
              <div className="cv-item-header">
                <span className="cv-item-title">
                  Dashboard SITU (Sistem Informasi Sekolah)
                </span>
                <span className="cv-item-date">2024</span>
              </div>
              <div className="cv-item-sub">
                <span>Frontend Developer (Proyek Kolaborasi)</span>
                <span>React, Node.js, MongoDB</span>
              </div>
              <ul className="cv-item-bullets">
                <li>
                  Mengembangkan modul dashboard administrasi sekolah untuk
                  kebutuhan manajemen surat-menyurat dan data administrasi.
                </li>
                <li>
                  Mengimplementasikan desain UI/UX interaktif menggunakan React
                  dengan integrasi state management yang bersih.
                </li>
                <li>
                  Mengintegrasikan modul input formulir dinamis dengan API backend
                  dan mengoptimalkan performa rendering halaman.
                </li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="cv-item">
              <div className="cv-item-header">
                <span className="cv-item-title">
                  Mobile Development Self-Learning &amp; Projects
                </span>
                <span className="cv-item-date">2023 — Sekarang</span>
              </div>
              <div className="cv-item-sub">
                <span>Mobile App Developer</span>
                <span>Flutter, Dart, Figma</span>
              </div>
              <ul className="cv-item-bullets">
                <li>
                  Merancang antarmuka UI/UX di Figma dan menerjemahkannya secara
                  presisi menjadi kode aplikasi mobile menggunakan Flutter.
                </li>
                <li>
                  Membangun beberapa prototipe aplikasi mobile multiplatform
                  dengan fokus pada performa yang lancar dan animasi mikro
                  responsif.
                </li>
              </ul>
            </div>
          </section>

          {/* CERTIFICATES & ACHIEVEMENTS */}
          <section className="cv-section">
            <h2 className="cv-section-title">Sertifikasi &amp; Penghargaan</h2>
            <div className="cv-item">
              <div className="cv-item-header">
                <span className="cv-item-title">
                  Juara 1 Web Technologies - Lomba Kompetensi Siswa (LKS) SMK
                </span>
                <span className="cv-item-date">2024</span>
              </div>
              <div className="cv-item-sub">
                <span>Dinas Pendidikan Kota Malang / regional</span>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-item-header">
                <span className="cv-item-title">
                  Sertifikasi Pengembang Aplikasi Web &amp; Mobile (Dicoding
                  Indonesia)
                </span>
                <span className="cv-item-date">2024 — 2025</span>
              </div>
              <div className="cv-item-sub">
                <span>
                  Kredensial Resmi: Pemrograman Web Dasar, Front-End Pemula,
                  Dasar JavaScript, React Web, Aplikasi Flutter
                </span>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-item-header">
                <span className="cv-item-title">
                  UI/UX Design Fundamentals Certification
                </span>
                <span className="cv-item-date">2024</span>
              </div>
              <div className="cv-item-sub">
                <span>Certiport / SMK Telkom Malang</span>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section className="cv-section">
            <h2 className="cv-section-title">Keahlian</h2>
            <div className="skills-container">
              <div className="skills-row">
                <span className="skills-label">Bahasa Pemrograman:</span>
                <span>JavaScript (ES6+), Dart, HTML5, CSS3, SQL (MySQL)</span>
              </div>
              <div className="skills-row">
                <span className="skills-label">Framework &amp; Pustaka:</span>
                <span>React.js, Next.js, Node.js, Express.js, Flutter</span>
              </div>
              <div className="skills-row">
                <span className="skills-label">Database:</span>
                <span>MongoDB, MySQL</span>
              </div>
              <div className="skills-row">
                <span className="skills-label">Tools &amp; Desain:</span>
                <span>
                  Git, GitHub, VS Code, Figma, UI/UX Design, RESTful API,
                  Postman
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
