export default function Footer() {
  return (
    <footer className="half-footer pb-45px border-top border-color-light-gray background-repeat" style={{ backgroundImage: "url('/crafto/images/demo-spa-salon-home-bg-01.jpg')" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 last-paragraph-no-margin me-auto z-index-1 text-center text-sm-start xs-mb-20px">
            <img src="/forte-techn-olive-green-logo.png" alt="Forte Technologies" style={{ height: "120px", width: "auto" }} />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 last-paragraph-no-margin text-center text-sm-end z-index-1">
            <span className="fs-20 fw-500 text-dark-gray d-block mb-5px">How can we help?</span>
            <a href="mailto:info@fortetechnologies.in">info@fortetechnologies.in</a><br />
            <a href="tel:+917899298718">+91 78992 98718</a>
          </div>
        </div>
        <div className="row align-items-center justify-content-center mt-20px mb-10px md-mb-20px">
          <div className="col d-none d-md-flex">
            <div className="divider-style-03 divider-style-03-01 border-color-light-gray"></div>
          </div>
          <div className="col-xl-4 col-lg-5 col-md-7 text-center elements-social social-icon-style-04">
            <ul className="large-icon dark mb-0">
              <li>
                <a className="facebook" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span></span>
                </a>
              </li>
              <li>
                <a className="linkedin" href="http://www.linkedin.com/" target="_blank" rel="noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span></span>
                </a>
              </li>
              <li>
                <a className="instagram" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                  <span></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col d-none d-md-flex">
            <div className="divider-style-03 divider-style-03-01 border-color-light-gray"></div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 last-paragraph-no-margin text-center text-md-start sm-mb-10px">
            <p>&copy; {new Date().getFullYear()} <a href="/" className="text-decoration-line-bottom text-dark-gray fw-500">Forte Technologies.</a> All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end last-paragraph-no-margin">
            <p>Protective &amp; Industrial Coating Specialists</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
