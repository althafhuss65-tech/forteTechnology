export default function SafetySection() {
  return (
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
  );
}
