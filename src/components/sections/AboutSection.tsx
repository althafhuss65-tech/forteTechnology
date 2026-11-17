import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import StatCounter from "@/components/ui/StatCounter";

interface Stat { value: number; suffix: string; label: string; }
interface AboutContent {
  eyebrow?: string;
  heading?: string;
  body?: string;
  phone?: string;
  yearFounded?: string;
  stats?: Stat[];
}

const D: Required<AboutContent> = {
  eyebrow: "About Forte Technologies",
  heading: "Industrial coating specialists for demanding environments.",
  body: "Forte Technologies is an industrial coating company delivering high-performance protective coating solutions. Our certified applicators bring deep expertise in anticorrosive, thermal, fireproofing and floor coating systems - ensuring your assets are protected and your operations continue uninterrupted.",
  phone: "+91 78992 98718",
  yearFounded: "2020",
  stats: [
    { value: 6,   suffix: "+", label: "Years active" },
    { value: 100, suffix: "%", label: "Safety compliance" },
    { value: 4,   suffix: "",  label: "Core service areas" },
  ],
};

export default function AboutSection({ content }: { content?: AboutContent }) {
  const c = { ...D, ...content };
  const stats = c.stats ?? D.stats;

  return (
    <section className="background-repeat" style={{ backgroundImage: "url('/crafto/images/demo-spa-salon-home-bg-01.jpg')" }}>
      <div className="container">
        <div className="row align-items-center mb-10 md-mb-17 xs-mb-25">
          <div className="col-xl-5 col-lg-6 md-mb-70px sm-mb-45px">
            <span className="fs-15 mb-15px text-base-color fw-500 d-block" data-anime='{ "el": "lines", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 100, "easing": "easeOutQuad" }'>
              {c.eyebrow}
            </span>
            <h3 className="alt-font ls-minus-1px text-dark-gray w-80 xl-w-90 md-w-100" data-anime='{ "el": "lines", "translateY": [30,0], "opacity": [0,1], "delay": 0, "duration": 600, "staggervalue": 100, "easing": "easeOutQuad" }'>
              {c.heading}
            </h3>
            <p className="w-80 md-w-100 mb-40px" data-anime='{ "el": "lines", "translateY": [30,0], "opacity": [0,1], "delay": 200, "duration": 600, "staggervalue": 100, "easing": "easeOutQuad" }'>
              {c.body}
            </p>
            <div className="d-inline-block w-100" data-anime='{ "el": "childs", "translateY": [50,0], "opacity": [0,1], "delay": 300, "duration": 600, "staggervalue": 300, "easing": "easeOutQuad" }'>
              <a href="/about" className="btn btn-small btn-double-border btn-border-base-color me-25px xs-me-15px">
                <span>
                  <span className="btn-double-text" data-text="Explore more">Explore more</span>
                  <span><ArrowRight size={14} strokeWidth={2} /></span>
                </span>
              </a>
              <div className="fw-500 d-inline-block align-middle text-dark-gray fs-18 xs-mt-20px xs-mb-20px">
                <Phone size={16} strokeWidth={1.5} style={{ display: "inline", verticalAlign: "middle" }} className="me-10px" />
                <a href={`tel:${c.phone.replace(/\s/g, "")}`}>{c.phone}</a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-5 position-relative offset-lg-1 offset-md-2 about-img-col">
            {/* Desktop year badge */}
            <span className="position-absolute fs-75 text-dark-gray fw-600 ls-minus-4px d-none d-md-block" style={{ zIndex: 3, left: "-70px", top: "-5px" }} data-anime='{ "opacity": [0,1], "duration": 600, "delay": 1000, "staggervalue": 100, "easing": "easeOutQuad" }'>
              <span className="fs-15 d-table lh-16 text-uppercase text-medium-gray fw-500 ls-1px">Started in</span>
              {c.yearFounded}
            </span>
            {/* Mobile year badge — no anime, always visible, centered */}
            <div className="d-block d-md-none text-center mb-20px">
              <span className="fs-13 text-uppercase text-medium-gray fw-500 ls-1px d-block mb-5px">Started in</span>
              <span className="fs-50 text-dark-gray fw-600 ls-minus-2px">{c.yearFounded}</span>
            </div>
            <div className="w-80 overflow-hidden position-relative md-w-90 border-radius-6px float-end about-img-primary" style={{ zIndex: 1 }} data-anime='{ "effect": "slide", "color": "#354B35", "direction":"rl", "easing": "easeOutQuad", "duration": 600, "delay": 500 }'>
              <Image className="w-100" src="/images/forte/team-spray.jpg" alt="Industrial work" width={900} height={600} style={{ height: "auto" }} sizes="(max-width: 768px) 100vw, 45vw" />
            </div>
            <div className="position-absolute left-minus-70px bottom-minus-30px w-60 overflow-hidden md-left-minus-100px about-img-secondary" style={{ zIndex: 2 }} data-bottom-top="transform: translateY(50px)" data-top-bottom="transform: translateY(-50px)" data-anime='{ "effect": "slide", "color": "#36332e", "direction":"lr", "easing": "easeOutQuad", "duration": 600, "delay": 500 }'>
              <Image className="w-100 border-radius-6px" src="/images/forte/columns.jpg" alt="Coating application" width={900} height={600} style={{ height: "auto" }} sizes="(max-width: 768px) 100vw, 35vw" />
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 row-cols-sm-3 text-center justify-content-center" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "delay": 300, "staggervalue": 300, "easing": "easeOutQuad" }'>
          {stats.map((stat, i) => (
            <div key={i} className="col last-paragraph-no-margin sm-mb-30px">
              <h2 className="fw-600 ls-minus-3px text-dark-gray m-0">
                <StatCounter value={Number(stat.value)} suffix={stat.suffix} />
              </h2>
              <p className="text-dark-gray lh-28">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
