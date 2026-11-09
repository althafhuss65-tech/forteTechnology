"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header>
      <nav className={`navbar navbar-expand-lg header-transparent bg-transparent center-logo${scrolled ? "" : " disable-fixed"}`}>
        <div className="container-fluid">
          <div className="col-auto col-lg-2 menu-logo">
            <Link className="navbar-brand" href="/" style={{ background: "none", boxShadow: "none", border: "none" }}>
              <img src="/forte-logo-white.png" alt="Forte Technologies" className="default-logo" style={{ maxHeight: "70px" }} />
              <img src="/forte-logo.png" alt="Forte Technologies" className="alt-logo" style={{ maxHeight: "70px" }} />
              <img src="/forte-logo-white.png" alt="Forte Technologies" className="mobile-logo" style={{ maxHeight: "55px" }} />
            </Link>
          </div>
          <div className="col-auto col-lg-8 menu-order">
            <button className="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
              <ul className="navbar-nav navbar-left justify-content-end">
                <li className="nav-item"><Link href="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link href="/about" className="nav-link">About</Link></li>
              </ul>
              <ul className="navbar-nav navbar-right justify-content-start">
                <li className="nav-item"><Link href="/services" className="nav-link">Services</Link></li>
                <li className="nav-item"><Link href="/contact" className="nav-link">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-auto col-lg-2"></div>
        </div>
      </nav>
    </header>
  );
}
