"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Temp2Page() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=clash-grotesk@400,500,600,700&display=swap');

        /* ── Visage tokens ── */
        .vg-page {
          font-family: 'Clash Grotesk', 'Helvetica Neue', Arial, sans-serif;
          background: #F5F8FF;
          color: #000;
          overflow-x: clip;
        }
        .vg-page *, .vg-page *::before, .vg-page *::after {
          box-sizing: border-box;
        }

        /* ── Nav ── */
        .vg-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 40px;
          transition: background 0.3s, box-shadow 0.3s;
        }
        .vg-nav-scrolled {
          background: rgba(255, 248, 245, 0.94);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 1px 0 rgba(0,0,0,0.07);
        }
        .vg-nav-brand img {
          height: 34px;
          width: auto;
          display: block;
        }
        .vg-nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .vg-nav-link {
          font-size: 14px;
          font-weight: 500;
          color: #000;
          text-decoration: none;
          transition: color 0.3s cubic-bezier(0.44, 0, 0.56, 1);
        }
        .vg-nav-link:hover { color: #1565C0; }
        .vg-nav-cta {
          font-size: 13px;
          font-weight: 500;
          color: #fff;
          background: #000;
          padding: 8px 20px;
          border-radius: 100px;
          text-decoration: none;
          transition: background 0.3s cubic-bezier(0.44, 0, 0.56, 1);
        }
        .vg-nav-cta:hover { background: #1565C0; color: #fff; }

        /* ── Hero ── */
        .vg-hero {
          padding-top: 110px;
          text-align: center;
        }
        .vg-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #1565C0;
          margin-bottom: 20px;
        }
        .vg-eyebrow-line {
          display: block;
          width: 28px;
          height: 1px;
          background: #1565C0;
          flex-shrink: 0;
        }
        .vg-hero-title {
          font-family: 'Clash Grotesk', 'Helvetica Neue', Arial, sans-serif;
          font-size: clamp(40px, 5.8vw, 87px);
          font-weight: 600;
          line-height: 0.95;
          letter-spacing: -3px;
          color: #000;
          max-width: 860px;
          margin: 0 auto 20px;
        }
        .vg-hero-desc {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(0,0,0,0.48);
          max-width: 460px;
          margin: 0 auto 36px;
        }
        .vg-hero-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
          margin-bottom: 56px;
        }
        .vg-btn-dark {
          display: inline-flex;
          align-items: center;
          font-size: 13px;
          font-weight: 500;
          color: #fff;
          background: #000;
          padding: 11px 22px;
          border-radius: 100px;
          text-decoration: none;
          transition: background 0.3s cubic-bezier(0.44, 0, 0.56, 1);
        }
        .vg-btn-dark:hover { background: #1565C0; color: #fff; }
        .vg-btn-outline {
          display: inline-flex;
          align-items: center;
          font-size: 13px;
          font-weight: 500;
          color: #000;
          background: transparent;
          padding: 10px 22px;
          border-radius: 100px;
          border: 1px solid rgba(0,0,0,0.18);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.44, 0, 0.56, 1);
        }
        .vg-btn-outline:hover { background: #000; color: #fff; border-color: #000; }

        /* Peach image band */
        .vg-hero-band {
          background: #D6E4FF;
          border-radius: 20px 20px 0 0;
          margin: 0 24px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: hidden;
          min-height: 320px;
        }
        .vg-hero-band img {
          width: 82%;
          max-width: 1000px;
          height: auto;
          display: block;
          mix-blend-mode: multiply;
        }

        /* ── Stats strip ── */
        .vg-stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          background: #fff;
          border-top: 1px solid rgba(0,0,0,0.07);
        }
        .vg-stat {
          flex: 1;
          text-align: center;
          padding: 40px 24px;
          border-right: 1px solid rgba(0,0,0,0.07);
        }
        .vg-stat:last-child { border-right: none; }
        .vg-stat-num {
          display: block;
          font-size: 42px;
          font-weight: 600;
          letter-spacing: -2px;
          color: #000;
          line-height: 1;
          margin-bottom: 6px;
        }
        .vg-stat-label {
          font-size: 13px;
          color: rgba(0,0,0,0.45);
        }

        /* ── About teaser ── */
        .vg-about {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border-top: 1px solid rgba(0,0,0,0.07);
        }
        .vg-about-text {
          padding: 80px 60px;
          background: #F5F8FF;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .vg-about-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #1565C0;
          margin-bottom: 20px;
        }
        .vg-about-heading {
          font-size: clamp(28px, 3vw, 48px);
          font-weight: 600;
          letter-spacing: -1.5px;
          line-height: 1.05;
          color: #000;
          margin: 0 0 20px;
        }
        .vg-about-body {
          font-size: 15px;
          line-height: 1.72;
          color: rgba(0,0,0,0.5);
          margin: 0 0 32px;
        }
        .vg-about-img {
          background: #D6E4FF;
          overflow: hidden;
        }
        .vg-about-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          mix-blend-mode: multiply;
        }

        /* ── Services teaser ── */
        .vg-services {
          padding: 80px 40px;
          background: #fff;
          border-top: 1px solid rgba(0,0,0,0.07);
        }
        .vg-services-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 48px;
        }
        .vg-services-title {
          font-size: clamp(28px, 3vw, 48px);
          font-weight: 600;
          letter-spacing: -1.5px;
          line-height: 1.05;
          color: #000;
          margin: 0;
          max-width: 400px;
        }
        .vg-services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(0,0,0,0.07);
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 10px;
          overflow: hidden;
        }
        .vg-service-card {
          background: #F5F8FF;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: background 0.3s cubic-bezier(0.44, 0, 0.56, 1);
        }
        .vg-service-card:hover { background: #D6E4FF; }
        .vg-service-num {
          font-size: 11px;
          font-weight: 500;
          color: #1565C0;
          letter-spacing: 1px;
        }
        .vg-service-name {
          font-size: 17px;
          font-weight: 600;
          color: #000;
          letter-spacing: -0.5px;
          margin: 0;
        }
        .vg-service-desc {
          font-size: 13px;
          line-height: 1.65;
          color: rgba(0,0,0,0.5);
          margin: 0;
        }

        /* ── CTA band ── */
        .vg-cta {
          background: #000;
          padding: 80px 40px;
          text-align: center;
        }
        .vg-cta-title {
          font-size: clamp(28px, 3.5vw, 56px);
          font-weight: 600;
          letter-spacing: -2px;
          color: #fff;
          margin: 0 0 16px;
        }
        .vg-cta-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.5);
          margin: 0 0 32px;
        }
        .vg-btn-peach {
          display: inline-flex;
          align-items: center;
          font-size: 13px;
          font-weight: 500;
          color: #000;
          background: #D6E4FF;
          padding: 12px 28px;
          border-radius: 100px;
          text-decoration: none;
          transition: background 0.3s cubic-bezier(0.44, 0, 0.56, 1);
        }
        .vg-btn-peach:hover { background: #1565C0; color: #fff; }

        /* ── Footer ── */
        .vg-footer {
          background: #F5F8FF;
          border-top: 1px solid rgba(0,0,0,0.07);
          padding: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          color: rgba(0,0,0,0.4);
        }

        /* ── Responsive ── */
        @media (max-width: 991px) {
          .vg-services-grid { grid-template-columns: 1fr 1fr; }
          .vg-about { grid-template-columns: 1fr; }
          .vg-about-img { min-height: 300px; }
        }
        @media (max-width: 767px) {
          .vg-nav { padding: 14px 20px; }
          .vg-nav-links { display: none; }
          .vg-hero { padding-top: 90px; }
          .vg-hero-title { letter-spacing: -1.5px; }
          .vg-hero-band { margin: 0 12px; min-height: 220px; }
          .vg-hero-band img { width: 95%; }
          .vg-stats { flex-direction: column; }
          .vg-stat { border-right: none; border-bottom: 1px solid rgba(0,0,0,0.07); padding: 28px; }
          .vg-stat:last-child { border-bottom: none; }
          .vg-services-grid { grid-template-columns: 1fr; }
          .vg-services-header { flex-direction: column; align-items: flex-start; gap: 16px; }
          .vg-about-text { padding: 48px 24px; }
          .vg-services { padding: 48px 20px; }
          .vg-footer { flex-direction: column; gap: 12px; text-align: center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .vg-btn-dark, .vg-btn-outline, .vg-btn-peach,
          .vg-nav-link, .vg-nav-cta, .vg-service-card { transition: none; }
        }
        :focus-visible { outline: 2px solid #1565C0; outline-offset: 3px; }
      `}</style>

      <div className="vg-page">

        {/* Nav */}
        <nav className={`vg-nav${scrolled ? " vg-nav-scrolled" : ""}`}>
          <Link href="/" className="vg-nav-brand">
            <img src="/forte-logo.png" alt="Forte Technologies" />
          </Link>
          <ul className="vg-nav-links">
            {NAV.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="vg-nav-link">{label}</Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="vg-nav-cta">Get a Quote</Link>
        </nav>

        {/* Hero */}
        <section className="vg-hero">
          <div className="vg-eyebrow">
            <span className="vg-eyebrow-line" />
            Certified Coating Applicators · Bangalore
            <span className="vg-eyebrow-line" />
          </div>
          <h1 className="vg-hero-title">
            Industrial Coatings<br />Built to Last.
          </h1>
          <p className="vg-hero-desc">
            Anticorrosive, thermal, fireproofing and floor coating solutions for industrial, commercial and infrastructure projects.
          </p>
          <div className="vg-hero-actions">
            <Link href="/services" className="vg-btn-dark">Our Services →</Link>
            <Link href="/contact" className="vg-btn-outline">Get a Quote →</Link>
          </div>
          <div className="vg-hero-band">
            <img src="/images/forte/forte-technologies-hero-img.png" alt="Industrial coating facility" />
          </div>
        </section>

        {/* Stats */}
        <div className="vg-stats">
          {[
            { num: "6+", label: "Years active" },
            { num: "5",  label: "Approved brands" },
            { num: "4",  label: "Core services" },
            { num: "100%", label: "Safety compliance" },
          ].map(({ num, label }) => (
            <div key={label} className="vg-stat">
              <span className="vg-stat-num">{num}</span>
              <span className="vg-stat-label">{label}</span>
            </div>
          ))}
        </div>

        {/* About teaser */}
        <div className="vg-about">
          <div className="vg-about-text">
            <p className="vg-about-label">About Forte Technologies</p>
            <h2 className="vg-about-heading">
              Protective coatings for industrial performance.
            </h2>
            <p className="vg-about-body">
              Forte Technologies is a Bangalore-based industrial coating company delivering high-performance protective coating solutions since 2020. Our certified applicators bring deep expertise in anticorrosive, thermal, fireproofing and floor coating systems.
            </p>
            <Link href="/about" className="vg-btn-dark" style={{ alignSelf: "flex-start" }}>Learn more →</Link>
          </div>
          <div className="vg-about-img">
            <img src="/images/forte/surface-prep.jpg" alt="Surface preparation on industrial substrate" />
          </div>
        </div>

        {/* Services teaser */}
        <section className="vg-services">
          <div className="vg-services-header">
            <h2 className="vg-services-title">What we do</h2>
            <Link href="/services" className="vg-btn-outline">All services →</Link>
          </div>
          <div className="vg-services-grid">
            {[
              { num: "01", name: "Anticorrosive Coatings", desc: "Long-term protection against corrosion for steel structures, pipelines and equipment." },
              { num: "02", name: "Thermal Insulation", desc: "Hot and cold insulation coatings for pipes, vessels and storage tanks." },
              { num: "03", name: "Fireproofing", desc: "Passive fire protection for structural steel and concrete surfaces." },
              { num: "04", name: "Floor Coatings", desc: "Epoxy and polyurethane floor systems for industrial and commercial facilities." },
            ].map(({ num, name, desc }) => (
              <div key={num} className="vg-service-card">
                <span className="vg-service-num">{num}</span>
                <h3 className="vg-service-name">{name}</h3>
                <p className="vg-service-desc">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="vg-cta">
          <h2 className="vg-cta-title">Ready to protect your assets?</h2>
          <p className="vg-cta-desc">Tell us about your project and we'll respond with an assessment.</p>
          <Link href="/contact" className="vg-btn-peach">Send an enquiry →</Link>
        </section>

        {/* Footer */}
        <footer className="vg-footer">
          <span>© 2024 Forte Technologies. All rights reserved.</span>
          <span>Attibele, Bangalore – 562107</span>
          <span>info@fortetechnologies.in</span>
        </footer>

      </div>
    </>
  );
}
