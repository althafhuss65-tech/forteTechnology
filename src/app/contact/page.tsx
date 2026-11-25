import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, Mail, Clock } from "lucide-react";
import { prisma } from "@/lib/prisma";

export async function generateMetadata(): Promise<Metadata> {
  const page = await prisma.page.findUnique({ where: { slug: "contact" } }).catch(() => null);
  return {
    title: page?.metaTitle || "Contact Us",
    description: page?.metaDesc || "Get in touch with Forte Technologies for industrial and protective coating enquiries. Call +91 6364227475 or email info@fortetechnologies.in. Based in Attibele, Bangalore.",
  };
}

const dbReady = () => {
  const url = process.env.DATABASE_URL ?? "";
  return url.length > 0 && !url.includes("username") && !url.includes("xxx");
};

type ContactHeroContent = { line1?: string; line2?: string; subtitle?: string };
type ContactStepsContent = { heading?: string; steps?: { n: string; title: string; text: string }[] };

const D_HERO: Required<ContactHeroContent> = {
  line1: "Tell us about your project.",
  line2: "We'll respond within a day.",
  subtitle: "Describe your surface, environment and timeline. Our team will assess your requirements and reply with the right coating recommendation.",
};

const D_STEPS = {
  heading: "What happens next",
  steps: [
    { n: "01", title: "A reply within a day",  text: "From our technical team, with follow-up questions about your project." },
    { n: "02", title: "A site assessment",     text: "We review the substrate, environment and your specification requirements." },
    { n: "03", title: "A detailed proposal",   text: "With the right coating system, estimated timeline and fixed project cost." },
  ],
};

const CONTACT_ITEMS = [
  { Icon: Phone, label: "Call us",        value: "+91 78992 98718",          href: "tel:+917899298718" },
  { Icon: Mail,  label: "Write to us",    value: "info@fortetechnologies.in", href: "mailto:info@fortetechnologies.in" },
  { Icon: Clock, label: "Working hours",  value: "Mon – Sat, 9 am – 6 pm",   href: null },
];

export default async function ContactPage() {
  let heroContent: ContactHeroContent = {};
  let stepsContent: ContactStepsContent = {};

  if (dbReady()) {
    try {
      const rows = await prisma.pageSection.findMany({ where: { pageSlug: "contact" } });
      for (const r of rows) {
        if (r.sectionType === "contact-hero")  heroContent  = r.content as ContactHeroContent;
        if (r.sectionType === "contact-steps") stepsContent = r.content as ContactStepsContent;
      }
    } catch {
      // fall through to static defaults
    }
  }

  const h = { ...D_HERO, ...heroContent };
  const stepsHeading = stepsContent.heading ?? D_STEPS.heading;
  const steps = stepsContent.steps ?? D_STEPS.steps;

  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section
          className="page-title-parallax-background bg-dark-gray ipad-top-space-margin"
          data-parallax-background-ratio="0.5"
          style={{
            backgroundImage: "url('/images/forte/tank-blast.jpg')",
            paddingBottom: "120px",
            paddingTop: "120px",
            display: "flex",
            alignItems: "center",
            minHeight: "480px",
          }}
        >
          <div className="opacity-medium bg-gradient-nero-grey-brown"></div>
          <div className="position-absolute w-100 h-100 top-0 start-0" style={{ backgroundColor: "rgba(53,75,53,0.35)", zIndex: 0 }}></div>
          <div className="container position-relative h-100" style={{ zIndex: 1 }}>
            <div className="row h-100 align-items-center justify-content-center">
              <div className="col-12 position-relative text-center">
                <div
                  data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
                >
                  <h1
                    className="alt-font text-white mb-25px"
                    style={{
                      fontSize: "clamp(2.25rem, 1.5rem + 3vw, 4.25rem)",
                      lineHeight: 1.05,
                      letterSpacing: "-0.025em",
                    }}
                  >
                    <span className="d-block fw-300">{h.line1}</span>
                    <span className="d-block fw-700">{h.line2}</span>
                  </h1>
                  <p
                    className="mb-0"
                    style={{
                      color: "rgba(255,255,255,0.72)",
                      fontSize: "1.0625rem",
                      lineHeight: 1.75,
                      maxWidth: "100%",
                    }}
                  >
                    {h.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Straddle contact section */}
        <section className="contact-straddle pb-7" id="enquiry">
          <div className="container">
            <div className="row g-5">

              {/* Left: white form card */}
              <div className="col-lg-7">
                <div
                  className="bg-white border-radius-6px contact-form-card"
                  data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 120, "easing": "easeOutQuad" }'
                >
                  <h2
                    className="alt-font text-dark-gray mb-5px"
                    style={{ fontSize: "clamp(1.625rem, 1.3rem + 1vw, 2.125rem)", letterSpacing: "-0.025em" }}
                  >
                    <span className="d-block fw-300">Send us</span>
                    <span className="d-block fw-700">a message</span>
                  </h2>
                  <p className="fs-14 mb-40px" style={{ color: "#879477" }}>
                    Fields marked * are required.
                  </p>
                  <ContactForm />
                </div>
              </div>

              {/* Right: contact info + steps */}
              <div className="col-lg-5">
                <div
                  className="contact-info-col"
                  data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 200, "staggervalue": 100, "easing": "easeOutQuad" }'
                >

                  {/* Contact items */}
                  <ul className="list-unstyled m-0 p-0 d-flex flex-column" style={{ gap: "24px" }} role="list">
                    {CONTACT_ITEMS.map(({ Icon, label, value, href }) => (
                      <li key={label} className="d-flex align-items-start" style={{ gap: "16px" }}>
                        <span
                          className="d-flex align-items-center justify-content-center flex-shrink-0"
                          style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "50%",
                            border: "1px solid #E8EDE3",
                            backgroundColor: "#F7F8F4",
                            marginTop: "2px",
                          }}
                        >
                          <Icon size={18} color="#354B35" strokeWidth={1.5} />
                        </span>
                        <span>
                          <span
                            className="fs-12 fw-500 text-uppercase d-block mb-5px"
                            style={{ color: "#879477", letterSpacing: "0.1em" }}
                          >
                            {label}
                          </span>
                          {href ? (
                            <a
                              href={href}
                              className="alt-font fs-17 fw-600 text-dark-gray"
                              style={{ textDecoration: "none" }}
                            >
                              {value}
                            </a>
                          ) : (
                            <span className="alt-font fs-17 fw-600 text-dark-gray">{value}</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* What happens next */}
                  <div
                    className="mt-40px pt-40px"
                    style={{ borderTop: "1px solid #E8EDE3" }}
                  >
                    <p className="alt-font fs-18 fw-700 text-dark-gray mb-30px" style={{ letterSpacing: "-0.01em" }}>
                      {stepsHeading}
                    </p>
                    <div className="d-flex flex-column" style={{ gap: "0" }}>
                      {steps.map(({ n, title, text }, i) => (
                        <div key={n} className="d-flex" style={{ gap: "16px" }}>
                          {/* marker + line */}
                          <div className="d-flex flex-column align-items-center flex-shrink-0" style={{ width: "36px" }}>
                            <div
                              className="d-flex align-items-center justify-content-center"
                              style={{
                                width: "36px",
                                height: "36px",
                                borderRadius: "50%",
                                backgroundColor: "#354B35",
                                flexShrink: 0,
                              }}
                            >
                              <span className="text-white fw-600" style={{ fontSize: "11px" }}>{n}</span>
                            </div>
                            {i < steps.length - 1 && (
                              <div
                                style={{
                                  width: "1px",
                                  height: "36px",
                                  backgroundColor: "rgba(53,75,53,0.18)",
                                  margin: "4px 0",
                                }}
                              />
                            )}
                          </div>
                          {/* content */}
                          <div style={{ paddingTop: "6px" }} className={i < steps.length - 1 ? "mb-30px" : ""}>
                            <div className="text-dark-gray fw-600 mb-5px" style={{ fontSize: "15px" }}>{title}</div>
                            <p className="mb-0 lh-26" style={{ fontSize: "14px", color: "#879477" }}>{text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
