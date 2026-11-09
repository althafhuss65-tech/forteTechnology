import { ArrowRight, Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="background-repeat border-top border-color-light-gray" style={{ backgroundImage: "url('/crafto/images/demo-spa-salon-home-bg-01.jpg')" }}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-8 col-lg-9" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'>
            <span className="fs-15 mb-10px text-base-color fw-500 d-block text-uppercase ls-2px">Get in touch</span>
            <h3 className="alt-font ls-minus-1px text-dark-gray mb-30px">Ready to protect, restore and extend the life of your assets?</h3>
            <p className="w-75 mx-auto md-w-100 mb-40px">Tell us about your project and our team will assess your requirements and recommend the right coating system — regardless of the size or complexity of the job.</p>
            <a href="/contact" className="btn btn-medium fw-500 btn-double-border btn-border-base-color me-25px xs-me-0 xs-mb-20px xs-d-block">
              <span>
                <span className="btn-double-text" data-text="Get a quote">Get a quote</span>
                <span><ArrowRight size={14} strokeWidth={2} /></span>
              </span>
            </a>
            <span className="fw-500 d-inline-block align-middle text-dark-gray fs-18">
              <Phone size={16} strokeWidth={1.5} style={{ display: "inline", verticalAlign: "middle" }} className="me-10px" />
              <a href="tel:+916364227475">+91 6364 227475</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

