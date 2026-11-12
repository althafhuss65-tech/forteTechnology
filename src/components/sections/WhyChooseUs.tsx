import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="background-repeat border-top border-color-light-gray position-relative overlap-height z-index-1" style={{ backgroundColor: "#E8EDE3" }}>
      <div className="container overlap-gap-section">
        {/* Row 1: image + existing content */}
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
            <Image src="/images/forte/roof-coat.jpg" className="w-100 border-radius-4px" alt="Industrial coating work on site" width={1200} height={800} style={{ height: "auto" }} sizes="(max-width: 768px) 100vw, 45vw" />
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

        {/* Row 2: Working with Leading Manufacturers */}
        <div className="row mt-7 pt-5 border-top border-color-light-gray" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'>
          <div className="col-12 mb-35px">
            <span className="fs-15 mb-5px text-base-color fw-500 d-block">Working with Leading Industrial Coating Manufacturers</span>
            <h3 className="alt-font ls-minus-1px text-dark-gray mb-0">Multiple Brands. Right System. Better Performance.</h3>
          </div>
          <div className="col-lg-4 col-md-6 mb-30px md-mb-30px">
            <p className="lh-30 mb-0">
              FORTE Technologies works with leading manufacturers of industrial and protective coating systems to identify suitable solutions for different project requirements.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-30px md-mb-30px">
            <p className="lh-30 mb-0">
              Our manufacturer-independent approach allows us to evaluate products and coating systems based on technical specifications, operating conditions, performance requirements and project economics.
            </p>
          </div>
          <div className="col-lg-4 col-md-12">
            <p className="lh-30 mb-0">
              We focus on selecting the right coating system for the application rather than limiting our solutions to a single brand. Working with leading industrial coating manufacturers to identify suitable solutions for every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
