import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactCTA from "@/components/sections/ContactCTA";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Forte Technologies offers protective & anticorrosive coatings, industrial coatings, industrial floor coatings and industrial refurbishment & project execution services across Bangalore and South India.",
};

const PROTECTIVE_ANTICORROSIVE = [
  {
    icon: "layers",
    title: "Surface Preparation",
    tags: "Dry Blast · Water Blast · Hand Tool · Power Tool",
    desc: "Surface preparation is the most critical step in any coating system. We remove corrosion, contaminants and old coatings to achieve the substrate condition required for maximum adhesion and coating life.",
  },
  {
    icon: "shield",
    title: "Anticorrosive Coatings",
    tags: "Rust Prevention · Corrosion Resistance · Long-Term Protection",
    desc: "Specially formulated materials applied to protect surfaces from corrosion caused by moisture, oxygen and other corrosive substances. Systems are selected based on substrate type, service environment and the level of protection required.",
  },
  {
    icon: "hard-hat",
    title: "Protective Coatings",
    tags: "Corrosion · Wear · Chemical · UV · Weathering",
    desc: "Barrier coatings that protect surfaces against corrosion, wear, abrasion, chemical exposure, weathering and UV radiation. They preserve substrate integrity and extend the service life of structures and equipment.",
  },
  {
    icon: "thermometer",
    title: "Thermal Insulation Coatings",
    tags: "Heat Reduction · Energy Efficiency · Pipelines · Roofing",
    desc: "Specialised coatings designed to reduce heat transfer through walls, roofs, pipelines and equipment. Used to improve energy efficiency, reduce thermal conductivity and provide insulation in industrial and commercial applications.",
  },
];

const INDUSTRIAL = [
  {
    icon: "factory",
    title: "Industrial Coatings",
    tags: "Equipment · Machinery · Metal · Structures",
    desc: "Coating solutions designed to protect equipment, machinery, metal components and industrial structures against corrosion, abrasion, chemical exposure and demanding operating conditions.",
  },
  {
    icon: "flame",
    title: "Fireproofing",
    tags: "Intumescent · Fire Resistant · Structural Protection",
    desc: "Intumescent coatings that expand when exposed to heat, providing a protective char layer that delays structural failure and limits flame spread. Applied to steel structures requiring passive fire protection.",
  },
];

const FLOOR = [
  {
    icon: "grid",
    title: "Epoxy Flooring",
    tags: "Durability · Seamless Finish · Chemical Resistance",
    desc: "A durable, seamless and easy-to-maintain surface for industrial and commercial environments. Offers resistance to abrasion, impact and chemical exposure depending on the selected system.",
  },
  {
    icon: "droplets",
    title: "Cementitious PU Flooring",
    tags: "Thermal Shock Resistance · Heavy-Duty · Hygiene",
    desc: "Designed for demanding environments exposed to temperature variations, moisture, mechanical stress and aggressive cleaning regimes. Particularly suitable for facilities requiring durable, hygienic flooring.",
  },
  {
    icon: "zap",
    title: "MMA Flooring",
    tags: "Rapid Installation · Fast Return to Service · Versatility",
    desc: "Methyl Methacrylate flooring systems offer rapid curing, enabling floors to return to service quickly when installation time is critical. System selection depends on substrate, operating conditions and required performance.",
  },
  {
    icon: "plug",
    title: "ESD Flooring",
    tags: "Static Control · Operational Protection · Specialised",
    desc: "Electrostatic Discharge flooring systems help control the generation and dissipation of static electricity when correctly designed, installed and tested as part of an appropriate grounding system.",
  },
  {
    icon: "utensils",
    title: "Food-Grade Epoxy Flooring",
    tags: "Hygienic Surfaces · Easy Cleaning · Chemical Resistance",
    desc: "Designed for facilities where hygiene, cleanability and resistance to routine cleaning chemicals are important. The selected system meets applicable hygiene, regulatory and operational requirements.",
  },
];

const REFURBISHMENT = [
  {
    icon: "wrench",
    title: "Industrial Refurbishment",
    tags: "Recoating · Corrosion Treatment · Asset Restoration",
    desc: "Refurbishment and recoating of deteriorated industrial structures, equipment and facilities to restore surface integrity and extend asset service life. Includes surface preparation, coating removal and new protective systems.",
  },
  {
    icon: "clipboard",
    title: "Project Execution",
    tags: "Planning · Mobilisation · Quality Control · Handover",
    desc: "End-to-end project delivery through coordinated planning, resource mobilisation, surface preparation, coating application and quality control — with a focus on specifications, safe execution and project schedules.",
  },
];

function ServiceSection({
  eyebrow,
  heading,
  description,
  items,
  cols = "row-cols-lg-4",
}: {
  eyebrow: string;
  heading: string;
  description: string;
  items: typeof PROTECTIVE_ANTICORROSIVE;
  cols?: string;
}) {
  return (
    <section className="background-repeat" style={{ backgroundImage: "url('/crafto/images/demo-spa-salon-home-bg-01.jpg')" }}>
      <div className="container">
        <div className="row justify-content-center mb-2">
          <div className="col-lg-6 col-md-8 text-center" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "delay": 0, "duration": 600, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <span className="fs-15 mb-5px text-base-color fw-500 d-block text-uppercase ls-2px">{eyebrow}</span>
            <h3 className="alt-font ls-minus-1px text-dark-gray w-80 xl-w-90 sm-w-100 mx-auto">{heading}</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className={`row row-cols-1 ${cols} row-cols-sm-2 gy-5`} data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
          {items.map((s) => (
            <div key={s.title} className="col icon-with-text-style-03 border-end border-color-light-gray md-mb-30px xs-border-end-0">
              <div className="feature-box ps-6 pe-6 xl-ps-3 xl-pe-3">
                <div className="feature-box-icon mb-20px">
                  <Icon name={s.icon} size={52} />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="d-inline-block text-dark-gray alt-font fs-20 mb-5px">{s.title}</span>
                  <p className="fs-13 text-base-color fw-500 mb-10px text-uppercase ls-1px">{s.tags}</p>
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

function Divider() {
  return (
    <section className="background-repeat p-0" style={{ backgroundImage: "url('/crafto/images/demo-spa-salon-home-bg-01.jpg')" }}>
      <div className="container">
        <div className="divider-style-03 divider-style-03-01 border-color-light-gray"></div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page title */}
        <section
          className="page-title-parallax-background bg-dark-gray ipad-top-space-margin"
          data-parallax-background-ratio="0.5"
          style={{ backgroundImage: "url('/images/forte/refinery.jpg')" }}
        >
          <div className="opacity-very-light bg-gradient-nero-grey-brown"></div>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 text-center position-relative page-title-extra-large">
                <div className="d-flex flex-column extra-small-screen">
                  <div className="mt-auto">
                    <h1
                      className="text-white alt-font mb-0 text-shadow-extra-large fw-400 ls-minus-1px"
                      data-fancy-text='{ "opacity": [0,1], "translateY": [50,0], "filter": ["blur(20px)","blur(0px)"], "string": ["Our services"], "duration": 500, "delay": 0, "speed": 50, "easing": "easeOutQuad" }'
                    ></h1>
                  </div>
                  <div className="mt-auto justify-content-center breadcrumb breadcrumb-style-01 text-white">
                    <ul data-anime='{ "el": "childs", "translateY": [50,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                      <li><a href="/" className="text-white">Home</a></li>
                      <li>Services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceSection
          eyebrow="Protective & Anticorrosive"
          heading="Protective & Anticorrosive Coatings"
          description="Surface preparation, anticorrosive protection, thermal insulation and protective barrier coatings for structures, equipment and industrial assets."
          items={PROTECTIVE_ANTICORROSIVE}
          cols="row-cols-lg-4"
        />
        <Divider />
        <ServiceSection
          eyebrow="Industrial"
          heading="Industrial Coatings"
          description="Specialist coating solutions for industrial equipment, machinery, metal components and structures in demanding operating environments."
          items={INDUSTRIAL}
          cols="row-cols-lg-2"
        />
        <Divider />
        <ServiceSection
          eyebrow="Floor Coatings"
          heading="Industrial Floor Coatings"
          description="Specialised flooring systems selected to meet the functional, operational and performance needs of industrial and commercial facilities."
          items={FLOOR}
          cols="row-cols-lg-4"
        />
        <Divider />
        <ServiceSection
          eyebrow="Refurbishment & Execution"
          heading="Industrial Refurbishment & Project Execution"
          description="End-to-end management of industrial refurbishment and coating projects — from assessment and surface treatment through to quality handover."
          items={REFURBISHMENT}
          cols="row-cols-lg-2"
        />

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
