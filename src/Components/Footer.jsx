import React from "react";
import { Link } from "react-router-dom";

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
              <Link
                to={`https://www.twitch.tv/login`}
                className="btn btn-outline-primary btn-square mr-2"
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                to={`https://www.facebook.com/`}
                className="btn btn-outline-primary btn-square mr-2"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                to={`https://www.linkedin.com/company/login`}
                className="btn btn-outline-primary btn-square mr-2"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link
                to={`https://www.instagram.com/`}
                className="btn btn-outline-primary btn-square"
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-white text-uppercase mb-4">Size Map</h5>
            <div className="d-flex flex-column justify-content-start">
              <Link to={`/`} className="text-white-50 mb-2">
                <i className="fa fa-angle-right mr-2"></i>Home
              </Link>
              <Link to={`/about`} className="text-white-50 mb-2">
                <i className="fa fa-angle-right mr-2"></i>About US
              </Link>
              <Link to={`/product`} className="text-white-50 mb-2">
                <i className="fa fa-angle-right mr-2"></i>Product
              </Link>
              <Link to={`#`} className="text-white-50 mb-2">
                <i className="fa fa-angle-right mr-2"></i>Categories
              </Link>
              <Link to={`/gallery`} className="text-white-50 mb-2">
                <i className="fa fa-angle-right mr-2"></i>Gallery
              </Link>
              <Link to={`/contact`} className="text-white-50 mb-2">
                <i className="fa fa-angle-right mr-2"></i>Contact
              </Link>
              <Link to={`/feedback`} className="text-white-50">
                <i className="fa fa-angle-right mr-2"></i>Feedback
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-white text-uppercase mb-4">Categories</h5>
            <div className="d-flex flex-column justify-content-start">
              <Link to={`/categories/1`} className="text-white-50 mb-2">
                <i className="fa fa-angle-right mr-2"></i>PET Bottle &
                Containers
              </Link>
              <Link to={`/categories/2`} className="text-white-50 mb-2">
                <i className="fa fa-angle-right mr-2"></i>PP Bottle & Containers
              </Link>
              <Link to={`/categories/3`} className="text-white-50 mb-2">
                <i className="fa fa-angle-right mr-2"></i>HDPE Bottle &
                Containers
              </Link>
              <Link to={`/categories/4`} className="text-white-50 mb-2">
                <i className="fa fa-angle-right mr-2"></i>GLASS Bottle &
                Containers
              </Link>
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
              <a href="mailto:your_email@example.com">
                {" "}
                www.petbot-group-3.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
