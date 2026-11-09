import { Award, Layers, Shield, Clock } from "lucide-react";

export default function FeaturesStrip() {
  return (
    <section className="pt-60px pb-60px background-repeat border-bottom border-color-light-gray" style={{ backgroundImage: "url('/crafto/images/demo-spa-salon-home-bg-01.jpg')" }}>
      <div className="container-fluid ps-9 pe-9 lg-ps-1 lg-pe-1 md-ps-15px md-pe-15px">
        <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center" data-anime='{ "el": "childs", "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 100, "easing": "easeOutQuad" }'>
          <div className="col icon-with-text-style-03 border-end border-color-light-gray md-mb-30px xs-border-end-0">
            <div className="feature-box ps-8 pe-8 xl-ps-2 xl-pe-2">
              <div className="feature-box-icon mb-20px">
                <Award size={52} color="#1565C0" strokeWidth={1.5} />
              </div>
              <div className="feature-box-content last-paragraph-no-margin">
                <span className="d-inline-block text-dark-gray alt-font fs-22">Certified applicators</span>
                <p className="lh-26">Industry-trained specialists</p>
              </div>
            </div>
          </div>
          <div className="col icon-with-text-style-03 border-end border-color-light-gray md-mb-30px md-border-end-0">
            <div className="feature-box ps-8 pe-8 xl-ps-2 xl-pe-2">
              <div className="feature-box-icon mb-20px">
                <Layers size={52} color="#1565C0" strokeWidth={1.5} />
              </div>
              <div className="feature-box-content last-paragraph-no-margin">
                <span className="d-inline-block text-dark-gray alt-font fs-22">Industrial grade</span>
                <p className="lh-26">Premium coating systems</p>
              </div>
            </div>
          </div>
          <div className="col icon-with-text-style-03 border-end border-color-light-gray xs-border-end-0 xs-mb-30px">
            <div className="feature-box ps-8 pe-8 xl-ps-2 xl-pe-2">
              <div className="feature-box-icon mb-20px">
                <Shield size={52} color="#1565C0" strokeWidth={1.5} />
              </div>
              <div className="feature-box-content last-paragraph-no-margin">
                <span className="d-inline-block text-dark-gray alt-font fs-22">Safety compliant</span>
                <p className="lh-26">Full HSE adherence</p>
              </div>
            </div>
          </div>
          <div className="col icon-with-text-style-03">
            <div className="feature-box ps-8 pe-8 xl-ps-2 xl-pe-2">
              <div className="feature-box-icon mb-20px">
                <Clock size={52} color="#1565C0" strokeWidth={1.5} />
              </div>
              <div className="feature-box-content last-paragraph-no-margin">
                <span className="d-inline-block text-dark-gray alt-font fs-22">Since 2020</span>
                <p className="lh-26">Proven field experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
