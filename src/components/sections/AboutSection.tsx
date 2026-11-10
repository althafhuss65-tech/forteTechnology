import { ArrowRight, Phone } from "lucide-react";
import StatCounter from "@/components/ui/StatCounter";

export default function AboutSection() {
  return (
    <section className="background-repeat" style={{ backgroundImage: "url('/crafto/images/demo-spa-salon-home-bg-01.jpg')" }}>
      <div className="container">
        <div className="row align-items-center mb-10 md-mb-17 xs-mb-25">
          <div className="col-xl-5 col-lg-6 md-mb-70px sm-mb-45px">
            <span className="fs-15 mb-15px text-base-color fw-500 d-block" data-anime='{ "el": "lines", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 100, "easing": "easeOutQuad" }'>
              About Forte Technologies
            </span>
            <h3 className="alt-font ls-minus-1px text-dark-gray w-80 xl-w-90 md-w-100" data-anime='{ "el": "lines", "translateY": [30,0], "opacity": [0,1], "delay": 0, "duration": 600, "staggervalue": 100, "easing": "easeOutQuad" }'>
              Industrial coating specialists for demanding environments.
            </h3>
            <p className="w-80 md-w-100 mb-40px" data-anime='{ "el": "lines", "translateY": [30,0], "opacity": [0,1], "delay": 200, "duration": 600, "staggervalue": 100, "easing": "easeOutQuad" }'>
              Forte Technologies is a Bangalore-based industrial coating company delivering high-performance protective coating solutions. Our certified applicators bring deep expertise in anticorrosive, thermal, fireproofing and floor coating systems - ensuring your assets are protected and your operations continue uninterrupted.
            </p>
            <div className="d-inline-block w-100" data-anime='{ "el": "childs", "translateY": [50,0], "opacity": [0,1], "delay": 300, "duration": 600, "staggervalue": 300, "easing": "easeOutQuad" }'>
              <a href="/about" className="btn btn-small btn-double-border btn-border-base-color me-25px xs-me-15px">
                <span>
                  <span className="btn-double-text" data-text="Explore more">Explore more</span>
                  <span><ArrowRight size={14} strokeWidth={2} /></span>
                </span>
              </a>
              <div className="fw-500 d-inline-block align-middle text-dark-gray fs-18 xs-mt-20px xs-mb-20px">
                <Phone size={16} strokeWidth={1.5} style={{ display: "inline", verticalAlign: "middle" }} className="me-10px" />
                <a href="tel:+916364227475">+91 6364 227475</a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-5 position-relative offset-lg-1 offset-md-2">
            <span className="position-absolute fs-75 text-dark-gray fw-600 ls-minus-4px" style={{ zIndex: 3, left: '-70px', top: '-5px' }} data-anime='{ "opacity": [0,1], "duration": 600, "delay": 1000, "staggervalue": 100, "easing": "easeOutQuad" }'>
              <span className="fs-15 d-table lh-16 text-uppercase text-medium-gray fw-500 ls-1px">Started in</span>
              2020
            </span>
            <div className="w-80 overflow-hidden position-relative md-w-90 border-radius-6px float-end" style={{ zIndex: 1 }} data-anime='{ "effect": "slide", "color": "#354B35", "direction":"rl", "easing": "easeOutQuad", "duration": 600, "delay": 500 }'>
              <img className="w-100" src="/images/forte/team-spray.jpg" alt="Industrial work" />
            </div>
            <div className="position-absolute left-minus-70px bottom-minus-30px w-60 overflow-hidden md-left-minus-100px sm-left-15px" style={{ zIndex: 2 }} data-bottom-top="transform: translateY(50px)" data-top-bottom="transform: translateY(-50px)" data-anime='{ "effect": "slide", "color": "#36332e", "direction":"lr", "easing": "easeOutQuad", "duration": 600, "delay": 500 }'>
              <img className="w-100 border-radius-6px" src="/images/forte/columns.jpg" alt="Coating application" />
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 text-center" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "delay": 300, "staggervalue": 300, "easing": "easeOutQuad" }'>
          <div className="col last-paragraph-no-margin sm-mb-30px">
            <h2 className="fw-600 ls-minus-3px text-dark-gray m-0"><StatCounter value={6} suffix="+" /></h2>
            <p className="text-dark-gray lh-28">Years active</p>
          </div>
          <div className="col last-paragraph-no-margin sm-mb-30px">
            <h2 className="fw-600 ls-minus-3px text-dark-gray m-0"><StatCounter value={5} /></h2>
            <p className="text-dark-gray lh-28">Approved brands</p>
          </div>
          <div className="col last-paragraph-no-margin xs-mb-30px">
            <h2 className="fw-600 ls-minus-3px text-dark-gray m-0"><StatCounter value={100} suffix="%" /></h2>
            <p className="text-dark-gray lh-28">Safety compliance</p>
          </div>
          <div className="col last-paragraph-no-margin">
            <h2 className="fw-600 ls-minus-3px text-dark-gray m-0"><StatCounter value={4} /></h2>
            <p className="text-dark-gray lh-28">Core service areas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
