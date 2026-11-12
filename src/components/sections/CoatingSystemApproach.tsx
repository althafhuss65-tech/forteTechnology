"use client";
import { useRef, useEffect } from "react";

const CRITERIA = [
  {
    num: "01",
    title: "Project Requirements",
    text: "Understanding intended service life, operating conditions, performance expectations, project specifications, and operating environment. Identify the substrate and its existing coating condition.",
  },
  {
    num: "02",
    title: "Manufacturer Recommendations",
    text: "Following recommended primer, intermediate and topcoat systems, including specified application procedures. Consult the selected manufacturer's technical recommendations.",
  },
  {
    num: "03",
    title: "System Compatibility",
    text: "Ensuring compatibility between coating layers, substrate conditions and previously applied coatings, wherever applicable. Verify primer, intermediate, and topcoat compatibility.",
  },
  {
    num: "04",
    title: "Technical Specifications",
    text: "Aligning the selected system with project specifications, applicable standards, and customer requirements. Obtain technical confirmation or written approval for any proposed deviation.",
  },
  {
    num: "05",
    title: "Application Requirements",
    text: "Considering surface preparation, environmental conditions, film thickness, and application methods. Execute and monitor application against the agreed system requirements.",
  },
];

const N    = CRITERIA.length;
const BG   = "url('/crafto/images/demo-spa-salon-home-bg-01.jpg')";
const SEP  = "1px solid rgba(53,75,53,0.12)";

export default function CoatingSystemApproach() {
  const wrapRef  = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const wrap  = wrapRef.current;
    const stage = stageRef.current;
    if (!wrap || !stage) return;

    const items  = itemRefs.current.filter((x): x is HTMLDivElement => x !== null);
    const clamp  = (v: number) => Math.min(1, Math.max(0, v));
    const ease   = (t: number) => 1 - Math.pow(1 - t, 3); // easeOutCubic
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Hide items via JS (not CSS) so SSR still shows content
    items.forEach((el) => {
      el.style.opacity   = "0";
      el.style.transform = "translateY(45vh)";
    });

    function applyItem(el: HTMLDivElement, p: number) {
      const e = ease(p);
      el.style.opacity   = reduce ? (p > 0 ? "1" : "0") : String(0.05 + 0.95 * e);
      el.style.transform = reduce ? "none" : `translateY(${(1 - e) * 45}vh)`;
    }

    function update() {
      const mobile = window.innerWidth < 768;

      if (mobile) {
        // Mobile: flat layout, no sticky needed
        wrap.style.height        = "auto";
        stage.style.position     = "static";
        stage.style.height       = "auto";
        stage.style.overflow     = "visible";
        items.forEach((el) => {
          el.style.transform = "none";
          const r = el.getBoundingClientRect();
          const p = clamp((window.innerHeight - r.top) / (window.innerHeight * 0.6));
          el.style.opacity = String(0.05 + 0.95 * ease(p));
        });
        return;
      }

      // Desktop: set wrapper height for scroll room
      wrap.style.height = `calc(100vh + ${N * 75}vh)`;
      stage.style.height    = "100vh";
      stage.style.overflow  = "hidden";

      const rect  = wrap.getBoundingClientRect();
      const total = wrap.offsetHeight - window.innerHeight;

      /*
       * JS sticky: browser positions `fixed` elements natively every pixel
       * with zero lag. Switch to `absolute` only at the two boundary edges.
       * This is exactly what the browser does internally for CSS sticky,
       * bypassing the ancestor-overflow restriction.
       */
      if (rect.top > 0) {
        // Section not yet reached — stage sits at section top
        stage.style.position = "absolute";
        stage.style.top      = "0";
        stage.style.bottom   = "auto";
      } else if (-rect.top >= total) {
        // Scrolled past section — stage anchors to section bottom
        stage.style.position = "absolute";
        stage.style.top      = "auto";
        stage.style.bottom   = "0";
      } else {
        // Inside scroll window — fix to viewport (zero lag, no RAF jitter)
        stage.style.position = "fixed";
        stage.style.top      = "0";
        stage.style.bottom   = "auto";
      }

      // Drive item reveals: item i owns slice [i/N … (i+1)/N] of progress
      const progress = clamp(-rect.top / total);
      items.forEach((el, i) => applyItem(el, clamp(progress * N - i)));
    }

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => { update(); ticking = false; });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update(); // run once on mount

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    // Outer: tall scroll room. Height set by JS; starts auto so SSR layout isn't broken.
    <div
      ref={wrapRef}
      style={{ position: "relative", borderTop: "1px solid rgba(53,75,53,0.15)" }}
    >
      {/* Stage: left/right 0 so it fills full width whether absolute or fixed */}
      <div
        ref={stageRef}
        style={{
          position:         "absolute",
          top:              0,
          left:             0,
          right:            0,
          backgroundImage:  BG,
          backgroundRepeat: "repeat",
          backgroundColor:  "#f7f8f4",
          display:          "flex",
          alignItems:       "center",
        }}
      >
        <div className="container">
          <div className="row align-items-center">

            {/* Left — stays pinned */}
            <div className="col-lg-4 pe-lg-7 mb-50px mb-lg-0">
              <span className="fs-15 mb-5px text-base-color fw-500 d-block text-uppercase ls-2px">
                Our Coating System Approach
              </span>
              <h3 className="alt-font ls-minus-1px text-dark-gray">
                We Don&apos;t Just Select Coatings. We Follow Coating Systems.
              </h3>
              <p className="fs-15 fw-600 text-dark-gray mb-20px" style={{ fontStyle: "italic" }}>
                The Right System. The Right Compatibility. The Right Performance.
              </p>
              <p className="lh-30 mb-20px fs-15">
                At FORTE Technologies, we believe that long-term coating performance depends not
                just on selecting the right product, but on using the right coating system. We
                work with leading industrial coating manufacturers and follow their recommended
                coating systems, taking into consideration the specific requirements of each project.
              </p>
              <p
                className="lh-28 fs-14 mb-0"
                style={{ color: "#526747", borderLeft: "3px solid #526747", paddingLeft: "16px" }}
              >
                Our commitment is to execute coating projects using technically suitable,
                compatible and properly specified coating systems, rather than selecting products
                based on price or brand preference alone.
              </p>
            </div>

            {/* Right — items revealed on scroll */}
            <div className="col-lg-7 offset-lg-1">
              {CRITERIA.map((c, i) => (
                <div
                  key={c.num}
                  ref={(el) => { itemRefs.current[i] = el; }}
                  className="csa-item"
                  style={{
                    display:       "flex",
                    alignItems:    "flex-start",
                    gap:           "20px",
                    paddingTop:    i === 0 ? 0 : "18px",
                    paddingBottom: "18px",
                    borderBottom:  i < N - 1 ? SEP : "none",
                  }}
                >
                  <span
                    className="flex-shrink-0 fw-700 alt-font"
                    style={{
                      color:         "#879477",
                      fontSize:      "13px",
                      letterSpacing: "0.08em",
                      minWidth:      "28px",
                      paddingTop:    "3px",
                    }}
                  >
                    {c.num}
                  </span>
                  <div>
                    <div
                      className="alt-font text-dark-gray fw-600 mb-8px"
                      style={{ fontSize: "17px" }}
                    >
                      {c.title}
                    </div>
                    <p className="mb-0 lh-28 fs-15">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
