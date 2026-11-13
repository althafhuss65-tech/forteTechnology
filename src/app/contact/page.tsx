import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Forte Technologies for industrial and protective coating enquiries. Call +91 6364227475 or email info@fortetechnologies.in. Based in Attibele, Bangalore.",
};

const CONTACT_ITEMS = [
  {
    Icon: Phone,
    label: "Call us",
    value: "+91 6364 227475",
    href: "tel:+916364227475",
  },
  {
    Icon: Mail,
    label: "Write to us",
    value: "info@fortetechnologies.in",
    href: "mailto:info@fortetechnologies.in",
  },
  {
    Icon: MapPin,
    label: "Find us",
    value: "Attibele, Bangalore",
    href: null,
  },
  {
    Icon: Clock,
    label: "Working hours",
    value: "Mon – Sat, 9 am – 6 pm",
    href: null,
  },
];

const STEPS = [
  {
    n: "01",
    title: "A reply within a day",
    text: "From our technical team, with follow-up questions about your project.",
  },
  {
    n: "02",
    title: "A site assessment",
    text: "We review the substrate, environment and your specification requirements.",
  },
  {
    n: "03",
    title: "A detailed proposal",
    text: "With the right coating system, estimated timeline and fixed project cost.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero - left-aligned, extra pb for form straddle */}
        <section
          className="page-title-parallax-background bg-dark-gray ipad-top-space-margin"
          data-parallax-background-ratio="0.5"
          style={{
            backgroundImage: "url('/images/forte/tank-blast.jpg')",
            paddingBottom: "160px",
          }}
        >
          <div className="opacity-medium bg-gradient-nero-grey-brown"></div>
          <div className="position-absolute w-100 h-100 top-0 start-0" style={{ backgroundColor: "rgba(53,75,53,0.35)", zIndex: 0 }}></div>
          {/* edge rail */}
          <p
            className="d-none d-xl-block position-absolute text-white fw-400 fs-11 ls-3px text-uppercase"
            aria-hidden="true"
            style={{
              right: "50px",
              bottom: "180px",
              writingMode: "vertical-rl",
              opacity: 0.4,
              letterSpacing: "0.18em",
            }}
          >
            Protective · Industrial · Floor · Fireproofing - est. 2020
          </p>
          <div className="container position-relative" style={{ zIndex: 1 }}>
            <div className="row">
              <div className="col-xl-8 col-lg-9 position-relative">
                <div
                  data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
                >
                  {/* breadcrumb */}
                  <div className="breadcrumb breadcrumb-style-01 justify-content-start mb-25px">
                    <ul>
                      <li><a href="/" className="text-white">Home</a></li>
                      <li className="text-white opacity-6">Contact us</li>
                    </ul>
                  </div>
                  {/* eyebrow */}
                  <span
                    className="fs-13 fw-500 d-block text-uppercase ls-3px mb-20px"
                    style={{ color: "#879477" }}
                  >
                    Contact · Mon – Sat, 9 am – 6 pm
                  </span>
                  {/* two-line h1 */}
                  <h1
                    className="alt-font text-white mb-25px"
                    style={{
                      fontSize: "clamp(2.25rem, 1.5rem + 3vw, 4.25rem)",
                      lineHeight: 1.05,
                      letterSpacing: "-0.025em",
                    }}
                  >
                    <span className="d-block fw-300">Tell us about your project.</span>
                    <span className="d-block fw-700">We'll respond within a day.</span>
                  </h1>
                  {/* lead */}
                  <p
                    className="mb-0"
                    style={{
                      color: "rgba(255,255,255,0.72)",
                      fontSize: "1.0625rem",
                      lineHeight: 1.75,
                      maxWidth: "520px",
                    }}
                  >
                    Describe your surface, environment and timeline. Our team will assess your requirements and reply with the right coating recommendation.
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
                      What happens next
                    </p>
                    <div className="d-flex flex-column" style={{ gap: "0" }}>
                      {STEPS.map(({ n, title, text }, i) => (
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
                            {i < STEPS.length - 1 && (
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
                          <div style={{ paddingBottom: i < STEPS.length - 1 ? "0" : "0", paddingTop: "6px" }} className={i < STEPS.length - 1 ? "mb-30px" : ""}>
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
