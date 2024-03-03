import React from "react";

function Footer() {
  return (
    <div>
      <div className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5">
        <div className="row pt-3">
          <div className="col-lg-3 col-md-6 mb-5">
            <a href="" className="navbar-brand">
              <h1 className="text-primary">
                <span className="text-white">PETBot</span>
              </h1>
            </a>
            <p>
              “Our company, with a rich history and unwavering commitment, has
              earned trust and credibility in the industry. Our award-winning
              services and dedicated team exemplify our reliability.”
            </p>
            <h6 className="text-white text-uppercase mt-4 mb-3">Follow Us</h6>
            <div className="d-flex justify-content-start">
              <a className="btn btn-outline-primary btn-square mr-2" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-outline-primary btn-square mr-2" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-primary btn-square mr-2" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="btn btn-outline-primary btn-square" href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-white text-uppercase mb-4">Size Map</h5>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white-50 mb-2" href="/">
                <i className="fa fa-angle-right mr-2"></i>Home
              </a>
              <a className="text-white-50 mb-2" href="/about">
                <i className="fa fa-angle-right mr-2"></i>About US
              </a>
              <a className="text-white-50 mb-2" href="/product">
                <i className="fa fa-angle-right mr-2"></i>Product
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Categories
              </a>
              <a className="text-white-50 mb-2" href="/gallery">
                <i className="fa fa-angle-right mr-2"></i>Gallery
              </a>
              <a className="text-white-50 mb-2" href="/contact">
                <i className="fa fa-angle-right mr-2"></i>Contact
              </a>
              <a className="text-white-50" href="/feedback">
                <i className="fa fa-angle-right mr-2"></i>Feedback
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-white text-uppercase mb-4">Categories</h5>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white-50 mb-2" href="/categories/1">
                <i className="fa fa-angle-right mr-2"></i>PET Bottle &
                Containers
              </a>
              <a className="text-white-50 mb-2" href="/categories/2">
                <i className="fa fa-angle-right mr-2"></i>PP Bottle & Containers
              </a>
              <a className="text-white-50 mb-2" href="/categories/3">
                <i className="fa fa-angle-right mr-2"></i>HDPE Bottle &
                Containers
              </a>
              <a className="text-white-50 mb-2" href="/categories/4">
                <i className="fa fa-angle-right mr-2"></i>GLASS Bottle &
                Containers
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="f text-white text-uppercase mb-4">Contact Us</h5>
            <p>
              <i className="fa fa-map-marker-alt mr-2"></i>62 Street 36, Van
              Phuc Residential Area,Hiep Binh Phuoc Ward , Thu Duc City
            </p>
            <p className="f-phone">
              <i className="fa fa-phone-alt mr-2"></i>
              <a href="tel:012 345 67890">+012 345 6789</a>
            </p>
            <p className="f-email">
              <i className="fa fa-envelope mr-2"></i>
              <a href="mailto:your_email@example.com"> www.petbot.com</a>
            </p>
            <h6 className="f text-white text-uppercase mt-4 mb-3">
              Newsletter
            </h6>
            <div className="w-100">
              <div className="f input-group">
                <input
                  type="text"
                  className="f form-control border-light"
                  placeholder="Your Email"
                />
                <div className="f input-group-append">
                  <button className="btn btn-primary px-3">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
