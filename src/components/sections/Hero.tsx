import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="sr-hero">
      {/* Text content - floats above the image */}
      <div className="sr-hero-content">
        {/* Eyebrow pill - blue dot echoes logo colour */}
        <div className="sr-hero-pill">
          <span className="sr-hero-pill-dot" />
          Industrial coating specialists
        </div>

        {/* Large display headline */}
        <h1 className="sr-hero-headline">
          Protective Coatings Built<br />
          for Industrial Performance.
        </h1>

        {/* Short description */}
        <p className="sr-hero-desc">
          Anticorrosive, thermal, fireproofing and floor coating solutions
          for industrial, commercial and infrastructure projects.
        </p>

        {/* CTA row */}
        <div className="sr-hero-actions">
          <a href="/services" className="sr-hero-btn-primary">
            Our Services <ArrowRight size={14} strokeWidth={2} style={{ display: "inline", verticalAlign: "middle", marginLeft: "6px" }} />
          </a>
          <a href="/contact" className="sr-hero-btn-secondary">
            Get a Quote <ArrowRight size={14} strokeWidth={2} style={{ display: "inline", verticalAlign: "middle", marginLeft: "6px" }} />
          </a>
        </div>
      </div>

      {/* Full-bleed image - fades into background at top */}
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
