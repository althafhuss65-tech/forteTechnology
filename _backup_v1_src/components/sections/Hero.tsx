export default function Hero() {
  return (
    <section className="p-0 bg-dark-gray">
      <div
        className="swiper full-screen ipad-top-space-margin md-h-600px sm-h-500px"
        data-slider-options='{ "slidesPerView": 1, "loop": true, "pagination": false, "navigation": false, "autoplay": { "delay": 5000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "fade" }'
        data-anime-text='{ "translateY": [50,0], "opacity": [0,1], "easing": "easeOutQuad", "duration": 500, "delay": { "staggervalue": 20 } }'
      >
        <div className="swiper-wrapper">
          {/* Slide 1 */}
          <div className="swiper-slide">
            <div className="position-absolute left-0px top-0px w-100 h-100 cover-background" style={{ backgroundImage: "url('/images/forte/hero-1.jpg')" }} data-anime='{ "translateY": [0,0], "opacity": [1,1], "scale": [1,1.1], "duration": 7000, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'></div>
            <div className="opacity-light bg-gradient-nero-grey-brown"></div>
            <div className="container h-100">
              <div className="row align-items-center h-100 justify-content-center">
                <div className="col-xl-8 col-lg-9 position-relative text-white text-center">
                  <span className="fs-15 d-block mb-15px ls-4px text-uppercase" data-anime='{ "opacity": [0,1], "easing": "easeOutCubic", "duration": 500, "delay": 200 }'>
                    Industrial Coating Specialists
                  </span>
                  <div
                    className="alt-font fs-80 sm-fs-60 xs-fs-50 mb-40px w-80 lg-w-100 md-w-90 sm-w-100 mx-auto sm-mb-35px anime-text ls-minus-2px"
                    data-fancy-text='{ "opacity": [0,1], "translateY": [50,0], "string": ["Protect. Restore. Perform."], "duration": 500, "delay": 200, "speed": 10, "easing": "easeOutQuad" }'
                  ></div>
                  <a href="/contact" className="btn btn-medium fw-500 btn-double-border btn-border-color-transparent-white" data-anime='{ "opacity": [0,1], "easing": "easeOutCubic", "delay": 800, "duration": 800 }'>
                    <span><span className="btn-double-text" data-text="Get a Quote">Get a Quote</span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="swiper-slide">
            <div className="position-absolute left-0px top-0px w-100 h-100 cover-background" style={{ backgroundImage: "url('/images/forte/refinery.jpg')" }} data-anime='{ "translateY": [0,0], "opacity": [1,1], "scale": [1,1.1], "duration": 7000, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'></div>
            <div className="opacity-light bg-gradient-nero-grey-brown"></div>
            <div className="container h-100">
              <div className="row align-items-center h-100 justify-content-center">
                <div className="col-xl-8 col-lg-9 position-relative text-white text-center">
                  <span className="fs-15 d-block mb-15px ls-4px text-uppercase" data-anime='{ "opacity": [0,1], "easing": "easeOutCubic", "duration": 500, "delay": 200 }'>
                    Anticorrosive & Fireproofing
                  </span>
                  <div
                    className="alt-font fs-80 sm-fs-60 xs-fs-50 mb-40px w-80 lg-w-100 md-w-90 sm-w-100 mx-auto sm-mb-35px anime-text ls-minus-2px"
                    data-fancy-text='{ "opacity": [0,1], "translateY": [50,0], "string": ["Industrial protection solutions"], "duration": 500, "delay": 200, "speed": 10, "easing": "easeOutQuad" }'
                  ></div>
                  <a href="/contact" className="btn btn-medium fw-500 btn-double-border btn-border-color-transparent-white" data-anime='{ "opacity": [0,1], "easing": "easeOutCubic", "delay": 800, "duration": 800 }'>
                    <span><span className="btn-double-text" data-text="Get a Quote">Get a Quote</span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="swiper-slide">
            <div className="position-absolute left-0px top-0px w-100 h-100 cover-background" style={{ backgroundImage: "url('/images/forte/floor-apply.jpg')" }} data-anime='{ "translateY": [0,0], "opacity": [1,1], "scale": [1,1.1], "duration": 7000, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'></div>
            <div className="opacity-light bg-gradient-nero-grey-brown"></div>
            <div className="container h-100">
              <div className="row align-items-center h-100 justify-content-center">
                <div className="col-xl-8 col-lg-9 position-relative text-white text-center">
                  <span className="fs-15 d-block mb-15px ls-4px text-uppercase" data-anime='{ "opacity": [0,1], "easing": "easeOutCubic", "duration": 500, "delay": 200 }'>
                    Floor Coatings & Refurbishment
                  </span>
                  <div
                    className="alt-font fs-80 sm-fs-60 xs-fs-50 mb-40px w-80 lg-w-100 md-w-90 sm-w-100 mx-auto sm-mb-35px anime-text ls-minus-2px"
                    data-fancy-text='{ "opacity": [0,1], "translateY": [50,0], "string": ["Expert coatings for demanding sites"], "duration": 500, "delay": 200, "speed": 10, "easing": "easeOutQuad" }'
                  ></div>
                  <a href="/contact" className="btn btn-medium fw-500 btn-double-border btn-border-color-transparent-white" data-anime='{ "opacity": [0,1], "easing": "easeOutCubic", "delay": 800, "duration": 800 }'>
                    <span><span className="btn-double-text" data-text="Get a Quote">Get a Quote</span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
