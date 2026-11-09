import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import { ArrowRight, TrendingUp, Phone, Mail, MapPin } from "lucide-react";
import StatCounter from "@/components/ui/StatCounter";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Forte Technologies for industrial and protective coating enquiries. Call +91 6364227475 or email info@fortetechnologies.in. Based in Attibele, Bangalore.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page title */}
        <section
          className="page-title-parallax-background bg-dark-gray ipad-top-space-margin"
          data-parallax-background-ratio="0.5"
          style={{ backgroundImage: "url('/images/forte/roof-coat.jpg')" }}
        >
          <div className="opacity-very-light bg-gradient-nero-grey-brown"></div>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 text-center position-relative page-title-extra-large">
                <div className="d-flex flex-column extra-small-screen">
                  <div className="mt-auto">
                    <h1
                      className="text-white alt-font mb-0 text-shadow-extra-large fw-400 ls-minus-1px"
                      data-fancy-text='{ "opacity": [0,1], "translateY": [50,0], "filter": ["blur(20px)","blur(0px)"], "string": ["Contact us"], "duration": 500, "delay": 0, "speed": 50, "easing": "easeOutQuad" }'
                    ></h1>
                  </div>
                  <div className="mt-auto justify-content-center breadcrumb breadcrumb-style-01 text-white">
                    <ul data-anime='{ "el": "childs", "translateY": [50,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                      <li><a href="/" className="text-white">Home</a></li>
                      <li>Contact us</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="background-repeat" style={{ backgroundImage: "url('/crafto/images/demo-spa-salon-home-bg-01.jpg')" }}>
          <div className="container">
            <div className="row mb-5 sm-mb-40px">
              <div className="col-md-6 overflow-hidden" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'>
                <h1 className="alt-font fw-700 text-dark-gray ls-minus-2px">Get in touch</h1>
              </div>
              <div className="col-md-6 last-paragraph-no-margin">
                <p className="w-85 xl-w-100" data-anime='{ "el": "lines", "translateY": [30,0], "translateX": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'>Tell us about your project. Our team will review your enquiry and respond with an assessment and recommendation as soon as possible.</p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 mb-6 xs-mb-40px text-center text-sm-start" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'>
              <div className="col last-paragraph-no-margin sm-mb-30px">
                <h2 className="fw-600 ls-minus-3px text-dark-gray m-0"><StatCounter value={6} suffix="+" /><sup><TrendingUp size={18} color="#1565C0" strokeWidth={2} style={{ display: "inline", verticalAlign: "super" }} /></sup></h2>
                <p className="text-dark-gray lh-28">Years active</p>
              </div>
              <div className="col last-paragraph-no-margin sm-mb-30px">
                <h2 className="fw-600 ls-minus-3px text-dark-gray m-0"><StatCounter value={5} /><sup><TrendingUp size={18} color="#1565C0" strokeWidth={2} style={{ display: "inline", verticalAlign: "super" }} /></sup></h2>
                <p className="text-dark-gray lh-28">Approved brands</p>
              </div>
              <div className="col last-paragraph-no-margin xs-mb-30px">
                <h2 className="fw-600 ls-minus-3px text-dark-gray m-0"><StatCounter value={100} suffix="%" /><sup><TrendingUp size={18} color="#1565C0" strokeWidth={2} style={{ display: "inline", verticalAlign: "super" }} /></sup></h2>
                <p className="text-dark-gray lh-28">Safety compliance</p>
              </div>
              <div className="col last-paragraph-no-margin">
                <h2 className="fw-600 ls-minus-3px text-dark-gray m-0"><StatCounter value={4} /><sup><TrendingUp size={18} color="#1565C0" strokeWidth={2} style={{ display: "inline", verticalAlign: "super" }} /></sup></h2>
                <p className="text-dark-gray lh-28">Core service areas</p>
              </div>
            </div>
            <div className="row align-items-center justify-content-center" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'>
              <div className="col-auto text-center md-mb-20px">
                <span className="text-dark-gray fw-400 alt-font fs-24">Ready to protect your assets?</span>
              </div>
              <div className="col-auto d-none d-lg-block">
                <span className="w-200px lg-w-110px h-1px bg-dark-gray opacity-2 d-flex mx-auto"></span>
              </div>
              <div className="col-auto">
                <a href="#enquiry" className="btn btn-small btn-double-border btn-border-base-color section-link">
                  <span>
                    <span className="btn-double-text" data-text="Send an enquiry">Send an enquiry</span>
                    <span><ArrowRight size={14} strokeWidth={2} /></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Parallax banner */}
        <section
          className="position-relative one-half-screen sm-small-screen"
          data-parallax-background-ratio="0.5"
          style={{ backgroundImage: "url('/images/forte/aerial-roof.jpg')" }}
        >
          <div className="opacity-light bg-gradient-nero-grey-brown"></div>
          <div className="fs-225 lg-fs-160 sm-fs-200 xs-fs-140 ls-minus-10px alt-font text-very-light-gray fw-700 position-absolute left-100px bottom-minus-70px lg-bottom-minus-50px xs-bottom-minus-30px lg-left-0px">contact</div>
        </section>

        {/* Contact info + form */}
        <section
          id="enquiry"
          className="background-repeat position-relative sm-pt-0"
          style={{ backgroundImage: "url('/crafto/images/demo-spa-salon-home-bg-01.jpg')" }}
        >
          <div className="container">
            <div className="row justify-content-center mb-2">
              <div className="col-12 text-center" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'>
                <span className="fs-15 mb-5px text-base-color fw-500 d-block text-uppercase ls-2px">Get in touch with us</span>
                <h3 className="alt-font ls-minus-1px text-dark-gray">How can we help you?</h3>
              </div>
            </div>
            <div className="row row-cols-md-1 justify-content-center mb-10 md-mb-15 sm-mb-0">
              <div className="col-xl-9 col-lg-10 col-md-12">
                <ContactForm />
              </div>
            </div>
            {/* Contact details */}
            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-1 text-center mt-5 border-top border-color-light-gray pt-6" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'>
              <div className="col icon-with-text-style-03 border-end border-color-light-gray md-mb-30px xs-border-end-0">
                <div className="feature-box">
                  <div className="feature-box-icon mb-20px">
                    <Phone size={52} color="#1565C0" strokeWidth={1.5} />
                  </div>
                  <div className="feature-box-content last-paragraph-no-margin">
                    <span className="d-inline-block text-dark-gray alt-font fs-20 mb-5px">Phone</span>
                    <p><a href="tel:+916364227475" className="text-dark-gray text-dark-gray-hover">+91 6364 227475</a></p>
                  </div>
                </div>
              </div>
              <div className="col icon-with-text-style-03 border-end border-color-light-gray md-mb-30px xs-border-end-0">
                <div className="feature-box">
                  <div className="feature-box-icon mb-20px">
                    <Mail size={52} color="#1565C0" strokeWidth={1.5} />
                  </div>
                  <div className="feature-box-content last-paragraph-no-margin">
                    <span className="d-inline-block text-dark-gray alt-font fs-20 mb-5px">Email</span>
                    <p><a href="mailto:info@fortetechnologies.in" className="text-dark-gray text-dark-gray-hover">info@fortetechnologies.in</a></p>
                  </div>
                </div>
              </div>
              <div className="col icon-with-text-style-03">
                <div className="feature-box">
                  <div className="feature-box-icon mb-20px">
                    <MapPin size={52} color="#1565C0" strokeWidth={1.5} />
                  </div>
                  <div className="feature-box-content last-paragraph-no-margin">
                    <span className="d-inline-block text-dark-gray alt-font fs-20 mb-5px">Address</span>
                    <p>No. 618, Mahidhara Fortune City,<br />Attibele, Bangalore – 562107</p>
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
