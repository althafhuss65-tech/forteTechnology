import { Icon } from "@/components/ui/Icon";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  { icon: "grid", name: "Epoxy Floor Coating", desc: "Seamless, durable flooring for industrial and commercial use. Resistant to abrasion, impact and chemical exposure." },
  { icon: "droplets", name: "Cementitious PU Flooring", desc: "Heavy-duty, thermal-shock resistant flooring systems for demanding environments." },
  { icon: "zap", name: "MMA Rapid-Cure Flooring", desc: "Fast-return-to-service systems for facilities where installation time is critical." },
  { icon: "shield", name: "Anticorrosive Steel Coating", desc: "High-build systems protecting structural steel and piping from corrosion and chemical attack." },
  { icon: "flame", name: "Intumescent Fireproofing", desc: "Passive fire protection compliant with IS and BS standards for steel structures." },
  { icon: "thermometer", name: "Thermal Insulation Coating", desc: "Energy-saving coatings for pipelines, tanks and equipment to reduce heat transfer." },
];

export default function FloorCoatings() {
  return (
    <section className="background-repeat border-top border-color-light-gray" style={{ backgroundImage: "url('/crafto/images/demo-spa-salon-home-bg-01.jpg')" }}>
      <div className="container">
        <div className="row justify-content-center mb-2">
          <div className="col-12 text-center" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "delay": 0, "duration": 600, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <h5 className="alt-font text-dark-gray">
              Looking for a complete coating solution?{" "}
              <a href="/services" className="text-dark-gray text-dark-gray-hover text-decoration-line-bottom">View all services</a>
            </h5>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
          {SERVICES.map((s) => (
            <div key={s.name} className="col icon-with-text-style-03 border-end border-color-light-gray md-mb-30px xs-border-end-0">
              <div className="feature-box ps-6 pe-6 xl-ps-3 xl-pe-3">
                <div className="feature-box-icon mb-20px">
                  <Icon name={s.icon} size={52} />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="d-inline-block text-dark-gray alt-font fs-20 mb-5px">{s.name}</span>
                  <p className="lh-26 fs-15">{s.desc}</p>
                  <a href="/contact" className="btn btn-link btn-small text-dark-gray thin fw-500">
                    Enquire <ArrowRight size={12} strokeWidth={2} style={{ display: "inline", verticalAlign: "middle", marginLeft: "5px" }} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
