"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header>
      <nav className={`sr-nav${scrolled ? " sr-nav-scrolled" : ""}`}>
        {/* Left: Logo */}
        <Link href="/" className="sr-nav-brand">
          <Image src="/forte-logo-off-white-2.png" alt="Forte Technologies" height={56} width={224} style={{ width: "auto", height: "56px" }} priority />
        </Link>

        {/* Center: Frosted-glass pill with all nav links */}
        <div className="sr-nav-pills">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`sr-nav-pill-link${isActive ? " sr-active" : ""}`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Right: CTA + mobile toggler */}
        <div className="sr-nav-right">
          <Link href="/contact" className="sr-nav-cta d-none d-lg-inline-flex">
            Get a Quote
          </Link>
          <button
            className="sr-nav-toggler d-lg-none"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={menuOpen ? "sr-line open" : "sr-line"} />
            <span className={menuOpen ? "sr-line open" : "sr-line"} />
            <span className={menuOpen ? "sr-line open" : "sr-line"} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sr-mobile-menu" role="navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="sr-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="sr-mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
