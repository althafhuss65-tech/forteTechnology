import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface HeroContent {
  badge?: string;
  h1?: string;
  subtitle?: string;
  cta1?: string;
  cta2?: string;
}

const D: Required<HeroContent> = {
  badge: "Industrial coating specialists",
  h1: "Protective Coatings Built for Industrial Performance.",
  subtitle: "Anticorrosive, thermal, fireproofing and floor coating solutions for industrial, commercial and infrastructure projects.",
  cta1: "Our Services",
  cta2: "Get a Quote",
};

export default function Hero({ content }: { content?: HeroContent }) {
  const c = { ...D, ...content };

  return (
    <section className="sr-hero">
      <div className="sr-hero-content">
        <div className="sr-hero-pill">
          <span className="sr-hero-pill-dot" />
          {c.badge}
        </div>
        <h1 className="sr-hero-headline">{c.h1}</h1>
        <p className="sr-hero-desc">{c.subtitle}</p>
        <div className="sr-hero-actions">
          <a href="/services" className="sr-hero-btn-primary">
            {c.cta1} <ArrowRight size={14} strokeWidth={2} style={{ display: "inline", verticalAlign: "middle", marginLeft: "6px" }} />
          </a>
          <a href="/contact" className="sr-hero-btn-secondary">
            {c.cta2} <ArrowRight size={14} strokeWidth={2} style={{ display: "inline", verticalAlign: "middle", marginLeft: "6px" }} />
          </a>
        </div>
      </div>

      <div className="sr-hero-image-wrap" aria-hidden="true">
        <div className="sr-hero-image-fade" />
        <Image
          src="/images/forte/forte-technologies-hero-img.png"
          alt=""
          className="sr-hero-image"
          width={1180}
          height={900}
          priority
          sizes="(max-width: 768px) 95vw, 85vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </section>
  );
}
