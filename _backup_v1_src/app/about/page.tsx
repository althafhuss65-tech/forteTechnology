import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ContactCTA from "@/components/sections/ContactCTA";
import { Icon } from "@/components/ui/Icon";
import { Eye, Target, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Forte Technologies - a Bangalore-based industrial coating company established in 2020, specialising in protective coatings, industrial coatings and floor coatings.",
};

const QUALITY_ITEMS = [
  { icon: "check-circle", text: "Workmanship excellence" },
  { icon: "file-check", text: "Material compliance" },
  { icon: "list-checks", text: "Application procedures" },
  { icon: "folder", text: "Project documentation" },
  { icon: "search", text: "Technical supervision" },
  { icon: "refresh", text: "Continuous improvement" },
  { icon: "hard-hat", text: "Responsible execution" },
  { icon: "star", text: "Attention to detail" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page title */}
        <section
          className="page-title-parallax-background bg-dark-gray ipad-top-space-margin"
          data-parallax-background-ratio="0.5"
          style={{ backgroundImage: "url('/images/forte/team-spray.jpg')" }}
        >
          <div className="opacity-very-light bg-gradient-nero-grey-brown"></div>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 text-center position-relative page-title-extra-large">
                <div className="d-flex flex-column extra-small-screen">
                  <div className="mt-auto">
                    <h1
                      className="text-white alt-font mb-0 text-shadow-extra-large fw-400 ls-minus-1px"
                      data-fancy-text='{ "opacity": [0,1], "translateY": [50,0], "filter": ["blur(20px)","blur(0px)"], "string": ["About us"], "duration": 500, "delay": 0, "speed": 50, "easing": "easeOutQuad" }'
                    ></h1>
                  </div>
                  <div className="mt-auto justify-content-center breadcrumb breadcrumb-style-01 text-white">
                    <ul data-anime='{ "el": "childs", "translateY": [50,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                      <li><a href="/" className="text-white">Home</a></li>
                      <li>About</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About main section */}
        <section className="background-repeat" style={{ backgroundImage: "url('/crafto/images/demo-spa-salon-home-bg-01.jpg')" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-5" data-anime='{ "el": "childs", "translateX": [-30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <span className="fs-15 mb-10px text-base-color fw-500 d-block text-uppercase ls-2px">About Forte Technologies</span>
                <h3 className="alt-font ls-minus-1px text-dark-gray mb-12 md-mb-50px sm-mb-30px">Industrial coating specialists delivering performance-driven solutions since 2020.</h3>
                <img src="/images/forte/surface-prep.jpg" className="border-radius-6px mb-20px w-100" alt="Surface preparation on industrial substrate" />
              </div>
              <div className="col-lg-6 offset-lg-1" data-anime='{ "el": "childs", "translateX": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <img className="mb-40px border-radius-6px w-100" src="/images/forte/blueprints.jpg" alt="Project planning on site" />
                <p className="w-90 mb-35px lg-w-100">
                  Forte Technologies is a Bangalore-based industrial coating company delivering high-performance protective coating solutions. Our certified applicators bring deep expertise in <span className="text-dark-gray fw-500">anticorrosive, thermal, fireproofing and floor coating systems</span> - ensuring your assets are protected and your operations continue uninterrupted.
                </p>
                <div className="d-block d-md-flex align-items-center border-top border-color-light-gray pt-25px sm-pt-35px">
                  <div className="col-auto text-center sm-mb-15px">
                    <h2 className="text-dark-gray fw-600 ls-minus-2px mb-0 alt-font">5+</h2>
                  </div>
                  <div className="col text-center text-md-start ps-20px sm-ps-0">
                    <div className="fs-20">
                      <div className="text-center bg-base-color text-white fs-16 lh-36 border-radius-30px d-inline-block ps-20px pe-20px align-middle me-10px sm-me-0">
                        <Star size={14} fill="white" color="white" strokeWidth={0} style={{ display: "inline", verticalAlign: "middle" }} />
                        <Star size={14} fill="white" color="white" strokeWidth={0} style={{ display: "inline", verticalAlign: "middle" }} />
                        <Star size={14} fill="white" color="white" strokeWidth={0} style={{ display: "inline", verticalAlign: "middle" }} />
                        <Star size={14} fill="white" color="white" strokeWidth={0} style={{ display: "inline", verticalAlign: "middle" }} />
                        <Star size={14} fill="white" color="white" strokeWidth={0} style={{ display: "inline", verticalAlign: "middle" }} />
                      </div>
                      <span className="text-dark-gray fw-500 d-block d-md-inline-block sm-mt-10px">Years of industry experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-0 border-top border-color-light-gray background-repeat" style={{ backgroundImage: "url('/crafto/images/demo-spa-salon-home-bg-01.jpg')" }}>
          <div className="container">
            <div className="row justify-content-center mb-2 pt-7 md-pt-50px">
              <div className="col-lg-6 col-md-8 text-center" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "delay": 0, "duration": 600, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <span className="fs-15 mb-5px text-base-color fw-500 d-block text-uppercase ls-2px">Our purpose</span>
                <h3 className="alt-font ls-minus-1px text-dark-gray">Vision and mission guiding every project we take on.</h3>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-0 pb-7 md-pb-50px" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
              <div className="col icon-with-text-style-03 border-end border-color-light-gray md-border-end-0 md-mb-30px">
                <div className="feature-box ps-8 pe-8 xl-ps-5 xl-pe-5">
                  <div className="feature-box-icon mb-20px">
                    <Eye size={52} color="#1565C0" strokeWidth={1.5} />
                  </div>
                  <div className="feature-box-content last-paragraph-no-margin">
                    <span className="d-inline-block text-dark-gray alt-font fs-22 mb-10px">Our Vision</span>
                    <p className="lh-28">To be a trusted name in protective and industrial coating solutions, recognised for quality, reliability and lasting performance.</p>
                  </div>
                </div>
              </div>
              <div className="col icon-with-text-style-03">
                <div className="feature-box ps-8 pe-8 xl-ps-5 xl-pe-5">
                  <div className="feature-box-icon mb-20px">
                    <Target size={52} color="#1565C0" strokeWidth={1.5} />
                  </div>
                  <div className="feature-box-content last-paragraph-no-margin">
                    <span className="d-inline-block text-dark-gray alt-font fs-22 mb-10px">Our Mission</span>
                    <p className="lh-28">To deliver practical, performance-driven coating solutions through technical expertise, quality workmanship, safe execution and strong customer relationships.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality commitment */}
        <section className="background-repeat border-top border-color-light-gray" style={{ backgroundImage: "url('/crafto/images/demo-spa-salon-home-bg-01.jpg')" }}>
          <div className="container">
            <div className="row justify-content-center mb-6 md-mb-8">
              <div className="col-xl-7 col-lg-8 col-md-10 text-center" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <span className="fs-15 mb-5px text-base-color fw-500 d-block text-uppercase ls-2px">Quality commitment</span>
                <h3 className="alt-font ls-minus-1px text-dark-gray">Quality in every layer. Confidence in every project.</h3>
                <p className="w-90 md-w-100">At Forte Technologies, quality is fundamental to every project we undertake. We are committed to delivering coating and flooring solutions that meet agreed specifications, customer requirements and applicable industry standards.</p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center gy-5" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
              {QUALITY_ITEMS.map((item) => (
                <div key={item.text} className="col icon-with-text-style-03 border-end border-color-light-gray md-mb-30px xs-border-end-0">
                  <div className="feature-box ps-4 pe-4">
                    <div className="feature-box-icon mb-15px">
                      <Icon name={item.icon} size={40} />
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin">
                      <p className="text-dark-gray fw-500 lh-26 mb-0">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety section */}
        <section className="background-repeat border-top border-color-light-gray" style={{ backgroundImage: "url('/crafto/images/demo-spa-salon-home-bg-01.jpg')" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 md-mb-50px sm-mb-30px" data-anime='{ "el": "childs", "translateX": [-30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <span className="fs-15 mb-10px text-base-color fw-500 d-block text-uppercase ls-2px">Safety</span>
                <h3 className="alt-font ls-minus-1px text-dark-gray mb-30px">Dedicated to a safe working environment.</h3>
                <p className="mb-20px">Forte Technologies is dedicated to protecting and preserving the working environment in a responsible manner. Any successful project is directly attributed to exceptional performance and well-planned services — and safety is non-negotiable at every stage.</p>
                <p className="mb-35px">We acknowledge that our staff and professionals are our biggest asset. We will never compromise the safety of our team, equipment or clients.</p>
                <span className="fs-13 fw-500 text-medium-gray d-block text-uppercase ls-2px mb-20px">Our Internal Safety Programme Includes:</span>
                <ul className="p-0 list-style-01 fs-18 alt-font">
                  <li className="border-color-light-gray pt-15px pb-15px text-dark-gray">Daily job hazard analysis meetings before every task</li>
                  <li className="border-color-light-gray pt-15px pb-15px text-dark-gray">All team members trained on best industry safety practices</li>
                  <li className="border-color-light-gray pt-15px pb-15px text-dark-gray">Extensive training for new members before joining active projects</li>
                  <li className="border-color-light-gray pt-15px pb-15px text-dark-gray">Operatives rewarded for safe and productive performance</li>
                </ul>
              </div>
              <div className="col-lg-5 offset-lg-1" data-anime='{ "effect": "slide", "color": "#1565C0", "direction":"rl", "easing": "easeOutQuad", "duration": 600, "delay": 500 }'>
                <img src="/images/forte/safety-brief.jpg" className="w-100 border-radius-6px" alt="Daily safety briefing on site" />
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

