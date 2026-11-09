import { ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="background-repeat border-top border-color-light-gray position-relative overlap-height z-index-1" style={{ backgroundImage: "url('/crafto/images/demo-spa-salon-home-bg-01.jpg')" }}>
      <div className="container overlap-gap-section">
        <div className="row align-items-center position-relative justify-content-center justify-content-lg-start">
          <div className="position-absolute left-0px top-0px h-100 w-130px d-none d-lg-inline-block">
            <div className="vertical-title-center align-items-center justify-content-center">
              <div className="title fs-16">
                Industrial protection for{" "}
                <span className="text-dark-gray fw-600">reliability</span>{" "}and{" "}
                <span className="text-dark-gray fw-600 fancy-text-style-4">
                  <span data-fancy-text='{ "effect": "rotate", "string": ["Safety", "Performance", "Longevity"], "speed": 50 }'></span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-11 position-relative offset-lg-1 md-mb-35px">
            <img src="/images/forte/roof-coat.jpg" className="w-100 border-radius-4px" alt="Industrial coating work on site" />
          </div>
          <div className="col-xl-5 col-lg-6 col-md-11 ps-8 md-ps-15px" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <span className="fs-15 lg-10px mb-5px text-base-color fw-500 d-block">Why choose us</span>
            <h3 className="alt-font ls-minus-1px text-dark-gray">100% industry-grade materials and certified systems.</h3>
            <p className="w-100 mb-10px">Every project is approached with technical excellence. We assess substrate conditions, select the right system, and apply it precisely - ensuring performance that meets client expectations and industry standards.</p>
            <ul className="p-0 list-style-01 fs-20 alt-font mb-25px">
              <li className="border-color-light-gray pt-15px pb-15px text-dark-gray">Proven track record on industrial facilities</li>
              <li className="border-color-light-gray pt-15px pb-15px text-dark-gray">Certified applicators with surface prep expertise</li>
              <li className="border-color-light-gray pt-15px pb-15px text-dark-gray">Full system supply: primer to topcoat</li>
            </ul>
            <div className="d-inline-block w-100">
              <a href="/services" className="btn btn-small btn-double-border btn-border-base-color">
                <span>
                  <span className="btn-double-text" data-text="View services">View services</span>
                  <span><ArrowRight size={14} strokeWidth={2} /></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
