interface Step { title: string; desc: string; }
interface ProcessContent {
  eyebrow?: string;
  heading?: string;
  steps?: Step[];
  brandsLabel?: string;
  brands?: string;
}

const D: Required<ProcessContent> = {
  eyebrow: "How we work",
  heading: "From assessment to handover - a proven process.",
  steps: [
    { title: "Site Assessment",     desc: "We evaluate substrate conditions, existing coatings and service environment before specifying a system." },
    { title: "System Selection",    desc: "The right primer, intermediate and topcoat combination is selected to match the exposure and performance requirements." },
    { title: "Surface Preparation", desc: "Blasting or mechanical preparation to the specified standard - the most critical step for coating adhesion and longevity." },
    { title: "Application & QC",   desc: "Certified applicators execute the system with DFT checks and documentation at every stage." },
  ],
  brandsLabel: "Approved applicators for leading coating manufacturers",
  brands: "AkzoNobel, International, GEM Paints, Jotun, Berger, Asian Paints PPG, Nippon Paints",
};

export default function ProcessBand({ content }: { content?: ProcessContent }) {
  const c = { ...D, ...content };
  const steps = c.steps ?? D.steps;
  const brandList = (c.brands ?? D.brands).split(",").map(b => b.trim()).filter(Boolean);

  return (
    <section className="border-top border-color-light-gray" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">

        <div className="row mb-2" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "delay": 0, "duration": 600, "staggervalue": 300, "easing": "easeOutQuad" }'>
          <div className="col-lg-8 col-12">
            <span className="fs-15 mb-10px text-base-color fw-500 d-block">{c.eyebrow}</span>
            <h3 className="alt-font ls-minus-1px text-dark-gray mb-0">{c.heading}</h3>
          </div>
        </div>

        <div className="row g-0" data-anime='{ "el": "childs", "translateY": [20,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 120, "easing": "easeOutQuad" }'>
          {steps.map(({ title, desc }, i) => (
            <div key={i} className="col-lg-3 col-sm-6 col-12 pb-step-col">
              <span className="pb-num">{String(i + 1).padStart(2, "0")}</span>
              <div className="pb-accent" />
              <span className="pb-step-title">{title}</span>
              <p className="pb-step-desc">{desc}</p>
            </div>
          ))}
        </div>

        <div className="border-top border-color-light-gray" style={{ margin: "48px 0 40px" }} />

        <div data-anime='{ "el": "childs", "opacity": [0,1], "duration": 600, "delay": 200, "staggervalue": 80, "easing": "easeOutQuad" }'>
          <span className="fs-12 fw-500 text-medium-gray d-block mb-15px text-center">{c.brandsLabel}</span>
          <div className="d-flex flex-wrap justify-content-center">
            {brandList.map((name, i) => (
              <span key={name} className="forte-brand-name alt-font fw-500"
                style={{ padding: "4px 13px", borderLeft: i > 0 ? "1px solid rgba(0,0,0,0.1)" : "none", whiteSpace: "nowrap" }}>
                {name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
