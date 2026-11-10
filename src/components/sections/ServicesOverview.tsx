import { Shield, Layers, Flame, Wrench } from "lucide-react";

const SERVICES = [
  {
    Icon: Shield,
    title: "Anticorrosive",
    desc: "Protect steel and concrete from corrosion and chemical attack.",
    img: "/images/forte/steel-primer.jpg",
    num: "01",
  },
  {
    Icon: Layers,
    title: "Floor Coatings",
    desc: "Epoxy, MMA and PU flooring for industrial environments.",
    img: "/images/forte/floor-epoxy.jpg",
    num: "02",
  },
  {
    Icon: Flame,
    title: "Fireproofing",
    desc: "Intumescent coatings for passive fire protection on steel.",
    img: "/images/forte/fireproof.jpg",
    num: "03",
  },
  {
    Icon: Wrench,
    title: "Refurbishment",
    desc: "Full-scope recoating and surface restoration of aged structures.",
    img: "/images/forte/cradle.jpg",
    num: "04",
  },
];

export default function ServicesOverview() {
  return (
    <section className="background-repeat border-top border-color-light-gray position-relative overlap-height z-index-1" style={{ backgroundImage: "url('/crafto/images/demo-spa-salon-home-bg-01.jpg')" }}>
      <div className="container overlap-gap-section">
        <div className="row justify-content-center mb-2">
          <div className="col-lg-6 col-md-8 text-center" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "delay": 0, "duration": 600, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <span className="fs-15 mb-5px text-base-color fw-500 d-block">Our services</span>
            <h3 className="alt-font ls-minus-1px text-dark-gray w-65 xl-w-80 sm-w-100 mx-auto">Explore our industrial coating solutions</h3>
          </div>
        </div>
        <div className="row mb-5 xs-mb-15px">
          <div className="col-12 position-relative">
            <div className="outside-box-right-40 sm-outside-box-right-0">
              <div className="swiper" data-slider-options='{ "slidesPerView": 1, "spaceBetween": 30, "loop": true, "autoplay": { "delay": 3000, "disableOnInteraction": false }, "pagination": false, "navigation": false, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "992": { "slidesPerView": 3 }, "768": { "slidesPerView": 2 }, "320": { "slidesPerView": 1 } }, "effect": "slide" }'>
                <div className="swiper-wrapper pt-20px pb-20px">
                  {SERVICES.map(({ Icon, title, desc, img, num }) => (
                    <div key={num} className="swiper-slide">
                      <div className="row g-0 services-box-style-02 border-radius-6px overflow-hidden">
                        <div className="col-sm-6 position-relative p-10 xxl-p-6 xs-p-10" style={{ backgroundColor: "#E8EDE3" }}>
                          <div className="services-box-icon mb-65px position-relative z-index-9 lg-mb-30px">
                            <Icon size={60} color="#879477" strokeWidth={1.5} />
                          </div>
                          <div className="services-box-content last-paragraph-no-margin position-relative z-index-9">
                            <span className="d-inline-block alt-font text-dark-gray fs-24 mb-5px">{title}</span>
                            <p className="text-light-opacity lh-30">{desc}</p>
                          </div>
                        </div>
                        <div className="col-sm-6 services-box-img overflow-hidden">
                          <div className="h-100 cover-background position-relative xs-h-300px" style={{ backgroundImage: `url('${img}')` }}>
                            <span className="position-absolute left-minus-30px bottom-50px fs-100 lg-fs-80 xs-fs-90 fw-600 text-very-light-gray xl-bottom-25px md-left-minus-20px">{num}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom CTA + Services list */}
        <div className="row mb-5 xs-mb-8">
          <div className="col-12 text-center">
            <h5 className="alt-font text-dark-gray">
              Need a comprehensive coating solution?{" "}
              <a href="/services" className="text-dark-gray text-dark-gray-hover text-decoration-line-bottom">View all services</a>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
