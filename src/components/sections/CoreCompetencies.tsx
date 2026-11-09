import { Icon } from "@/components/ui/Icon";

const COMPETENCIES = [
  { icon: "layers", title: "Surface Preparation", desc: "Dry abrasive blast cleaning, water blasting, hand and power tool cleaning — ensuring maximum coating adhesion and lifespan." },
  { icon: "shield", title: "Anticorrosive Coatings", desc: "Specially formulated coatings protecting surfaces from moisture, oxygen and corrosive substances, preventing rust and deterioration." },
  { icon: "hard-hat", title: "Protective Coatings", desc: "Barrier coatings against corrosion, wear, abrasion, chemical exposure, weathering and UV radiation for extended service life." },
  { icon: "thermometer", title: "Thermal Insulation", desc: "Specialised coatings that reduce heat transfer on walls, roofs, pipelines and equipment to improve energy efficiency." },
  { icon: "factory", title: "Industrial Coatings", desc: "Coating systems for equipment, machinery, metal components and industrial structures, selected to suit substrate and service environment." },
  { icon: "flame", title: "Fireproofing", desc: "Intumescent coatings that delay structural failure and prevent flame spread, providing passive fire protection for steel structures." },
  { icon: "wrench", title: "Industrial Refurbishment", desc: "Recoating, corrosion treatment, surface repairs and application of protective systems on deteriorated industrial assets." },
  { icon: "clipboard", title: "Project Execution", desc: "Coordinated planning, resource mobilisation, surface preparation, coating application and quality control from mobilisation to handover." },
];

export default function CoreCompetencies() {
  return (
    <section className="background-repeat border-top border-color-light-gray" style={{ backgroundImage: "url('/crafto/images/demo-spa-salon-home-bg-01.jpg')" }}>
      <div className="container">
        <div className="row justify-content-center mb-2">
          <div className="col-lg-6 col-md-8 text-center" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "delay": 0, "duration": 600, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <span className="fs-15 mb-5px text-base-color fw-500 d-block text-uppercase ls-2px">Our capabilities</span>
            <h3 className="alt-font ls-minus-1px text-dark-gray w-80 xl-w-90 sm-w-100 mx-auto">Core competencies</h3>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
          {COMPETENCIES.map((s) => (
            <div key={s.title} className="col icon-with-text-style-03 border-end border-color-light-gray md-mb-30px xs-border-end-0">
              <div className="feature-box ps-6 pe-6 xl-ps-3 xl-pe-3">
                <div className="feature-box-icon mb-20px">
                  <Icon name={s.icon} size={52} />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="d-inline-block text-dark-gray alt-font fs-20 mb-5px">{s.title}</span>
                  <p className="lh-26 fs-15">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
