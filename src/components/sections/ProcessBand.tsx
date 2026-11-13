const STEPS = [
  {
    num: "01",
    title: "Site Assessment",
    desc: "We evaluate substrate conditions, existing coatings and service environment before specifying a system.",
  },
  {
    num: "02",
    title: "System Selection",
    desc: "The right primer, intermediate and topcoat combination is selected to match the exposure and performance requirements.",
  },
  {
    num: "03",
    title: "Surface Preparation",
    desc: "Blasting or mechanical preparation to the specified standard - the most critical step for coating adhesion and longevity.",
  },
  {
    num: "04",
    title: "Application & QC",
    desc: "Certified applicators execute the system with DFT checks and documentation at every stage.",
  },
];

const BRANDS = ["AkzoNobel", "International", "GEM Paints", "Jotun", "Berger"];

export default function ProcessBand() {
  return (
    <section className="border-top border-color-light-gray" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">

        {/* Heading */}
        <div className="row mb-2" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "delay": 0, "duration": 600, "staggervalue": 300, "easing": "easeOutQuad" }'>
          <div className="col-lg-8 col-12">
            <span className="fs-15 mb-10px text-base-color fw-500 d-block">How we work</span>
            <h3 className="alt-font ls-minus-1px text-dark-gray mb-0">From assessment to handover - a proven process.</h3>
          </div>
        </div>

        {/* Steps */}
        <div className="row g-0" data-anime='{ "el": "childs", "translateY": [20,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 120, "easing": "easeOutQuad" }'>
          {STEPS.map(({ num, title, desc }) => (
            <div key={num} className="col-lg-3 col-sm-6 col-12 pb-step-col">
              <span className="pb-num">{num}</span>
              <div className="pb-accent" />
              <span className="pb-step-title">{title}</span>
              <p className="pb-step-desc">{desc}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-top border-color-light-gray" style={{ margin: "48px 0 40px" }} />

        {/* Brand partners */}
        <div className="row align-items-center" data-anime='{ "el": "childs", "opacity": [0,1], "duration": 600, "delay": 200, "staggervalue": 80, "easing": "easeOutQuad" }'>
          <div className="col-lg-4 col-12 mb-20px mb-lg-0">
            <span className="fs-12 fw-500 text-medium-gray d-block">
              Approved applicators for leading coating manufacturers
            </span>
          </div>
          <div className="col-lg-8 col-12">
            <div className="d-flex justify-content-lg-end flex-wrap">
              {BRANDS.map((name, i) => (
                <span key={name} className="forte-brand-name alt-font fw-500"
                  style={{ padding: "4px 20px", borderLeft: i > 0 ? "1px solid rgba(0,0,0,0.1)" : "none" }}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
