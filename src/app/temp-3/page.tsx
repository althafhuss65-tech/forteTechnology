"use client";
import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Blogs", href: "#blogs" },
  { label: "About Us", href: "#about" },
  { label: "Join Us", href: "#join" },
  { label: "Contact Us", href: "#contact" },
];

const PARTNERS = ["Microsoft", "NVIDIA", "Startup India", "Nasscom DTC", "Lab32"];

const FEATURES = [
  {
    icon: "⬡",
    title: "Digital Twin Platform",
    desc: "Create real-time virtual replicas of physical assets, processes and systems — enabling live monitoring, simulation and predictive intelligence.",
  },
  {
    icon: "◈",
    title: "AI-Powered Analytics",
    desc: "Embedded machine learning models process sensor streams and operational data to surface anomalies, forecast failures and optimize performance.",
  },
  {
    icon: "◉",
    title: "IoT Integration",
    desc: "Connect any device, sensor or industrial controller through our protocol-agnostic edge layer — MQTT, OPC-UA, Modbus or REST.",
  },
  {
    icon: "◍",
    title: "3D Visualization",
    desc: "Photorealistic 3D models synced to live data let operators inspect every component, drill into telemetry and act in context.",
  },
  {
    icon: "◬",
    title: "Predictive Maintenance",
    desc: "Reduce unplanned downtime by up to 40% with AI models that learn degradation patterns and generate maintenance work orders automatically.",
  },
  {
    icon: "◫",
    title: "Enterprise Security",
    desc: "Zero-trust architecture, end-to-end encryption and role-based access control across cloud, on-premise and hybrid deployments.",
  },
];

const STATS = [
  { value: "400+", label: "Digital twins deployed" },
  { value: "98%", label: "Uptime SLA" },
  { value: "40%", label: "Downtime reduction" },
  { value: "60+", label: "Enterprise clients" },
];

const SOLUTIONS = [
  { name: "Smart Manufacturing", desc: "End-to-end digital twin coverage for factories, assembly lines and supply chains.", color: "#3B82F6" },
  { name: "Energy & Utilities", desc: "Real-time grid monitoring, renewable asset management and predictive fault detection.", color: "#8B5CF6" },
  { name: "Infrastructure", desc: "Structural health monitoring for bridges, buildings and civil assets over their lifecycle.", color: "#06B6D4" },
  { name: "Oil & Gas", desc: "Digital replicas of wells, pipelines and refineries for safer, more efficient operations.", color: "#10B981" },
];

export default function Temp3Page() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        .at-root {
          font-family: 'Inter', sans-serif;
          background: #060B18;
          color: #E2E8F0;
          overflow-x: hidden;
        }

        /* ── Nav ── */
        .at-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
          height: 68px;
          transition: background 0.3s, box-shadow 0.3s;
        }
        .at-nav.scrolled {
          background: rgba(6, 11, 24, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 1px 0 rgba(255,255,255,0.06);
        }
        .at-nav-logo {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .at-nav-logo-mark {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
        }
        .at-nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          margin: 0; padding: 0;
        }
        @media (max-width: 1024px) { .at-nav-links { display: none; } }
        .at-nav-link {
          font-size: 14px;
          font-weight: 450;
          color: rgba(226,232,240,0.7);
          text-decoration: none;
          padding: 6px 12px;
          border-radius: 6px;
          transition: color 0.15s, background 0.15s;
          white-space: nowrap;
        }
        .at-nav-link:hover { color: #fff; background: rgba(255,255,255,0.06); }
        .at-nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #3B82F6, #6366F1);
          padding: 8px 20px;
          border-radius: 8px;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .at-nav-cta:hover { opacity: 0.88; }
        .at-nav-cta:active { transform: scale(0.97); }
        .at-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        @media (max-width: 1024px) { .at-hamburger { display: flex; } }
        .at-ham-line {
          width: 22px; height: 2px;
          background: rgba(226,232,240,0.8);
          border-radius: 2px;
          transition: transform 0.2s, opacity 0.2s;
        }
        .at-mobile-menu {
          position: fixed;
          top: 68px; left: 0; right: 0;
          background: rgba(6,11,24,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 16px 24px 24px;
          z-index: 99;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .at-mobile-link {
          font-size: 15px;
          font-weight: 500;
          color: rgba(226,232,240,0.8);
          text-decoration: none;
          padding: 12px 16px;
          border-radius: 8px;
          transition: background 0.15s, color 0.15s;
        }
        .at-mobile-link:hover { background: rgba(255,255,255,0.06); color: #fff; }
        .at-mobile-cta {
          display: block;
          text-align: center;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #3B82F6, #6366F1);
          padding: 13px;
          border-radius: 10px;
          text-decoration: none;
          margin-top: 8px;
        }

        /* ── Hero ── */
        .at-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 120px 24px 80px;
          overflow: hidden;
        }
        .at-hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 80% 60%, rgba(139,92,246,0.12) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 20% 80%, rgba(6,182,212,0.08) 0%, transparent 50%);
        }
        .at-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
        }
        .at-hero-content {
          position: relative;
          z-index: 2;
          max-width: 820px;
        }
        .at-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.25);
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 12px;
          font-weight: 500;
          color: #93C5FD;
          margin-bottom: 32px;
        }
        .at-hero-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #3B82F6;
          flex-shrink: 0;
        }
        .at-hero-h1 {
          font-size: clamp(36px, 5.5vw, 72px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -2.5px;
          color: #fff;
          margin-bottom: 24px;
        }
        .at-hero-h1 span {
          background: linear-gradient(135deg, #60A5FA, #A78BFA, #67E8F9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .at-hero-desc {
          font-size: 18px;
          line-height: 1.7;
          color: rgba(226,232,240,0.6);
          max-width: 580px;
          margin: 0 auto 40px;
        }
        .at-hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .at-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #3B82F6, #6366F1);
          padding: 13px 28px;
          border-radius: 10px;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 24px rgba(59,130,246,0.35);
        }
        .at-btn-primary:hover { opacity: 0.9; box-shadow: 0 8px 32px rgba(59,130,246,0.45); }
        .at-btn-primary:active { transform: scale(0.97); }
        .at-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 500;
          color: rgba(226,232,240,0.8);
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 13px 28px;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .at-btn-ghost:hover { background: rgba(255,255,255,0.09); color: #fff; }

        /* ── Partners strip ── */
        .at-partners {
          padding: 48px 48px;
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .at-partners-label {
          text-align: center;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(226,232,240,0.3);
          margin-bottom: 32px;
        }
        .at-partners-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 48px;
          flex-wrap: wrap;
        }
        .at-partner-name {
          font-size: 15px;
          font-weight: 600;
          color: rgba(226,232,240,0.35);
          letter-spacing: 0.5px;
          transition: color 0.2s;
        }
        .at-partner-name:hover { color: rgba(226,232,240,0.7); }

        /* ── Sections shared ── */
        .at-section {
          padding: 96px 48px;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 768px) { .at-section { padding: 64px 24px; } }
        .at-section-eyebrow {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #60A5FA;
          margin-bottom: 16px;
          display: block;
        }
        .at-section-h2 {
          font-size: clamp(28px, 3.5vw, 48px);
          font-weight: 800;
          letter-spacing: -1.5px;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 16px;
        }
        .at-section-h2 span {
          background: linear-gradient(135deg, #60A5FA, #A78BFA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .at-section-desc {
          font-size: 17px;
          color: rgba(226,232,240,0.55);
          line-height: 1.7;
          max-width: 560px;
        }
        .at-section-header { margin-bottom: 64px; }

        /* ── Features grid ── */
        .at-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) { .at-features-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .at-features-grid { grid-template-columns: 1fr; } }
        .at-feature-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 32px;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .at-feature-card:hover {
          background: rgba(255,255,255,0.055);
          border-color: rgba(59,130,246,0.25);
          transform: translateY(-2px);
        }
        .at-feature-icon {
          width: 44px; height: 44px;
          background: rgba(59,130,246,0.12);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          margin-bottom: 20px;
          color: #60A5FA;
        }
        .at-feature-title {
          font-size: 16px;
          font-weight: 650;
          color: #fff;
          margin-bottom: 10px;
          letter-spacing: -0.3px;
        }
        .at-feature-desc {
          font-size: 14px;
          color: rgba(226,232,240,0.5);
          line-height: 1.65;
        }

        /* ── Stats ── */
        .at-stats-band {
          background: rgba(255,255,255,0.025);
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 64px 48px;
        }
        .at-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        @media (max-width: 768px) { .at-stats-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .at-stats-grid { grid-template-columns: 1fr; } }
        .at-stat-value {
          font-size: 48px;
          font-weight: 800;
          letter-spacing: -2px;
          background: linear-gradient(135deg, #60A5FA, #A78BFA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 10px;
          display: block;
        }
        .at-stat-label {
          font-size: 14px;
          color: rgba(226,232,240,0.45);
          font-weight: 450;
        }

        /* ── Solutions ── */
        .at-solutions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 768px) { .at-solutions-grid { grid-template-columns: 1fr; } }
        .at-solution-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 36px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.2s, transform 0.2s;
        }
        .at-solution-card:hover {
          border-color: rgba(255,255,255,0.14);
          transform: translateY(-2px);
        }
        .at-solution-accent {
          position: absolute;
          top: 0; left: 0;
          width: 3px;
          height: 100%;
        }
        .at-solution-name {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.5px;
          margin-bottom: 12px;
        }
        .at-solution-desc {
          font-size: 14px;
          color: rgba(226,232,240,0.5);
          line-height: 1.65;
        }
        .at-solution-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 20px;
          font-size: 13px;
          font-weight: 600;
          color: #60A5FA;
          text-decoration: none;
          transition: gap 0.15s;
        }
        .at-solution-link:hover { gap: 10px; }

        /* ── CTA band ── */
        .at-cta-band {
          position: relative;
          overflow: hidden;
          background: rgba(255,255,255,0.025);
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .at-cta-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(59,130,246,0.12) 0%, transparent 65%);
        }
        .at-cta-inner {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 96px 24px;
          max-width: 700px;
          margin: 0 auto;
        }
        .at-cta-h2 {
          font-size: clamp(28px, 3.5vw, 48px);
          font-weight: 800;
          letter-spacing: -1.5px;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 20px;
        }
        .at-cta-desc {
          font-size: 17px;
          color: rgba(226,232,240,0.55);
          line-height: 1.65;
          margin-bottom: 40px;
        }

        /* ── Footer ── */
        .at-footer {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 56px 48px 36px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .at-footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 48px;
        }
        @media (max-width: 1024px) { .at-footer-top { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 640px)  { .at-footer-top { grid-template-columns: 1fr; } }
        .at-footer-brand-desc {
          font-size: 14px;
          color: rgba(226,232,240,0.4);
          line-height: 1.65;
          margin-top: 14px;
          max-width: 260px;
        }
        .at-footer-col-title {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(226,232,240,0.35);
          margin-bottom: 16px;
        }
        .at-footer-links { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
        .at-footer-link {
          font-size: 14px;
          color: rgba(226,232,240,0.5);
          text-decoration: none;
          transition: color 0.15s;
        }
        .at-footer-link:hover { color: rgba(226,232,240,0.9); }
        .at-footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .at-footer-copy {
          font-size: 13px;
          color: rgba(226,232,240,0.3);
        }
        .at-footer-socials {
          display: flex;
          gap: 16px;
        }
        .at-social-link {
          width: 32px; height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          color: rgba(226,232,240,0.5);
          text-decoration: none;
          font-size: 13px;
          transition: background 0.15s, color 0.15s;
        }
        .at-social-link:hover { background: rgba(255,255,255,0.1); color: rgba(226,232,240,0.9); }

        /* ── Responsive nav ── */
        @media (max-width: 1024px) {
          .at-nav { padding: 0 24px; }
          .at-partners { padding: 40px 24px; }
          .at-partners-row { gap: 28px; }
          .at-stats-band { padding: 48px 24px; }
          .at-footer { padding: 48px 24px 32px; }
        }
      `}</style>

      <div className="at-root">

        {/* NAV */}
        <nav className={`at-nav${scrolled ? " scrolled" : ""}`}>
          <a href="#" className="at-nav-logo">
            <div className="at-nav-logo-mark">A</div>
            AIOTEL
          </a>
          <ul className="at-nav-links">
            {NAV_LINKS.map(l => (
              <li key={l.label}><a href={l.href} className="at-nav-link">{l.label}</a></li>
            ))}
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a href="#contact" className="at-nav-cta">Book Demo</a>
            <button className="at-hamburger" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="at-ham-line" />
              <span className="at-ham-line" />
              <span className="at-ham-line" />
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="at-mobile-menu">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} className="at-mobile-link" onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
            <a href="#contact" className="at-mobile-cta" onClick={() => setMenuOpen(false)}>Book Demo</a>
          </div>
        )}

        {/* HERO */}
        <section className="at-hero" ref={heroRef}>
          <div className="at-hero-bg" />
          <div className="at-hero-grid" />
          <div className="at-hero-content">
            <div className="at-hero-badge">
              <span className="at-hero-badge-dot" />
              Now powered by NVIDIA AI Enterprise
            </div>
            <h1 className="at-hero-h1">
              Innovating the Future<br />
              with <span>Digital Twins</span>
            </h1>
            <p className="at-hero-desc">
              AIOTEL's AI-powered digital twin platform connects your physical operations to intelligent virtual models — delivering real-time visibility, predictive intelligence and autonomous control.
            </p>
            <div className="at-hero-actions">
              <a href="#contact" className="at-btn-primary">
                Book your demo →
              </a>
              <a href="#solutions" className="at-btn-ghost">
                Explore solutions
              </a>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <div className="at-partners">
          <p className="at-partners-label">Trusted &amp; certified by industry leaders</p>
          <div className="at-partners-row">
            {PARTNERS.map(p => (
              <span key={p} className="at-partner-name">{p}</span>
            ))}
          </div>
        </div>

        {/* FEATURES */}
        <section id="products">
          <div className="at-section">
            <div className="at-section-header">
              <span className="at-section-eyebrow">Platform capabilities</span>
              <h2 className="at-section-h2">Everything you need to build<br /><span>intelligent digital twins</span></h2>
              <p className="at-section-desc">
                One platform. From edge data ingestion to AI-powered simulation and 3D visualization — built for industrial scale.
              </p>
            </div>
            <div className="at-features-grid">
              {FEATURES.map(f => (
                <div key={f.title} className="at-feature-card">
                  <div className="at-feature-icon">{f.icon}</div>
                  <div className="at-feature-title">{f.title}</div>
                  <p className="at-feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <div className="at-stats-band">
          <div className="at-stats-grid">
            {STATS.map(s => (
              <div key={s.label}>
                <span className="at-stat-value">{s.value}</span>
                <span className="at-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SOLUTIONS */}
        <section id="solutions">
          <div className="at-section">
            <div className="at-section-header">
              <span className="at-section-eyebrow">Industry solutions</span>
              <h2 className="at-section-h2">Built for the world's most<br /><span>demanding industries</span></h2>
              <p className="at-section-desc">
                AIOTEL digital twins are deployed across manufacturing, energy, infrastructure and oil &amp; gas operations globally.
              </p>
            </div>
            <div className="at-solutions-grid">
              {SOLUTIONS.map(s => (
                <div key={s.name} className="at-solution-card">
                  <div className="at-solution-accent" style={{ background: s.color }} />
                  <div className="at-solution-name">{s.name}</div>
                  <p className="at-solution-desc">{s.desc}</p>
                  <a href="#contact" className="at-solution-link" style={{ color: s.color }}>
                    Learn more →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BAND */}
        <section id="contact" className="at-cta-band">
          <div className="at-cta-bg" />
          <div className="at-cta-inner">
            <h2 className="at-cta-h2">Book your demo and<br />experience transformation</h2>
            <p className="at-cta-desc">
              See how AIOTEL's digital twin platform can unlock real-time intelligence across your operations. Talk to our team — no commitment required.
            </p>
            <div className="at-hero-actions">
              <a href="mailto:info@aiotel.com" className="at-btn-primary">Book a demo →</a>
              <a href="#about" className="at-btn-ghost">About AIOTEL</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="at-footer">
            <div className="at-footer-top">
              <div>
                <a href="#" className="at-nav-logo" style={{ textDecoration: "none" }}>
                  <div className="at-nav-logo-mark">A</div>
                  AIOTEL
                </a>
                <p className="at-footer-brand-desc">
                  AI-powered digital twin platform for industrial intelligence, predictive maintenance and real-time operational visibility.
                </p>
              </div>
              <div>
                <div className="at-footer-col-title">Products</div>
                <ul className="at-footer-links">
                  {["Digital Twin Platform","AI Analytics","IoT Integration","3D Visualization","Predictive Maintenance"].map(l => (
                    <li key={l}><a href="#products" className="at-footer-link">{l}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="at-footer-col-title">Solutions</div>
                <ul className="at-footer-links">
                  {SOLUTIONS.map(s => (
                    <li key={s.name}><a href="#solutions" className="at-footer-link">{s.name}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="at-footer-col-title">Company</div>
                <ul className="at-footer-links">
                  {["About Us","Blogs","Join Us","Contact Us","Privacy","Book Demo"].map(l => (
                    <li key={l}><a href="#" className="at-footer-link">{l}</a></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="at-footer-bottom">
              <span className="at-footer-copy">© Copyright 2026 AIOTEL. All rights reserved.</span>
              <div className="at-footer-socials">
                {[["in","Li"],["yt","Yt"],["fb","Fb"],["tw","X"],["ig","Ig"]].map(([k,l]) => (
                  <a key={k} href="#" className="at-social-link" aria-label={k}>{l}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
