import { ArrowRight, Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <section style={{ backgroundColor: "#354B35" }}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-8 col-lg-9" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'>
            <span className="fs-15 mb-10px fw-500 d-block" style={{ color: "#E8EDE3" }}>Get in touch</span>
            <h3 className="alt-font ls-minus-1px mb-30px" style={{ color: "#FFFFFF" }}>Ready to protect, restore and extend the life of your assets?</h3>
            <p className="w-75 mx-auto md-w-100 mb-40px" style={{ color: "rgba(255,255,255,0.65)" }}>Tell us about your project and our team will assess your requirements and recommend the right coating system - regardless of the size or complexity of the job.</p>
            <a href="/contact" className="btn btn-medium btn-white btn-round-edge fw-500 me-25px xs-me-0 xs-mb-20px xs-d-block">
              <span>
                <span className="btn-double-text" data-text="Get a quote">Get a quote</span>
                <span><ArrowRight size={14} strokeWidth={2} /></span>
              </span>
            </a>
            <span className="fw-500 d-inline-block align-middle fs-18" style={{ color: "#fff" }}>
              <Phone size={16} strokeWidth={1.5} style={{ display: "inline", verticalAlign: "middle" }} className="me-10px" />
              <a href="tel:+917899298718" style={{ color: "#fff", textDecoration: "none" }}>+91 78992 98718</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
