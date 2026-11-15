import { Award, Layers, Shield, Clock } from "lucide-react";

interface Feature { title: string; subtitle: string; }
interface FeaturesStripContent { features?: Feature[]; }

const ICONS = [Award, Layers, Shield, Clock];
const BORDERS = [
  "border-end border-color-light-gray md-mb-30px xs-border-end-0",
  "border-end border-color-light-gray md-mb-30px md-border-end-0",
  "border-end border-color-light-gray xs-border-end-0 xs-mb-30px",
  "",
];
const DEFAULT_FEATURES: Feature[] = [
  { title: "Certified applicators", subtitle: "Industry-trained specialists" },
  { title: "Industrial grade",       subtitle: "Premium coating systems" },
  { title: "Safety compliant",       subtitle: "Full HSE adherence" },
  { title: "Since 2020",             subtitle: "Proven field experience" },
];

export default function FeaturesStrip({ content }: { content?: FeaturesStripContent }) {
  const features = content?.features ?? DEFAULT_FEATURES;

  return (
    <section className="pt-60px pb-60px background-repeat border-bottom border-color-light-gray" style={{ backgroundImage: "url('/crafto/images/demo-spa-salon-home-bg-01.jpg')" }}>
      <div className="container-fluid ps-9 pe-9 lg-ps-1 lg-pe-1 md-ps-15px md-pe-15px">
        <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center" data-anime='{ "el": "childs", "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 100, "easing": "easeOutQuad" }'>
          {features.map((feat, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div key={i} className={`col icon-with-text-style-03 ${BORDERS[i] ?? ""}`}>
                <div className="feature-box ps-8 pe-8 xl-ps-2 xl-pe-2">
                  <div className="feature-box-icon mb-20px">
                    <Icon size={52} color="#879477" strokeWidth={1.5} />
                  </div>
                  <div className="feature-box-content last-paragraph-no-margin">
                    <span className="d-inline-block text-dark-gray alt-font fs-22">{feat.title}</span>
                    <p className="lh-26">{feat.subtitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
