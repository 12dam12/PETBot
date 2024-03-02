import React from "react";

function Contact() {
  return (
    <div>
      <div className="container mt-5 c-div-h1">
        <h1 className="text-center mb-4">Contact Us</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        <div className="embed-responsive embed-responsive-16by9 mt-5">
          <iframe
            className="embed-responsive-item"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15673.813515177326!2d106.67790100000002!3d10.85308!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175284af5c6aaab%3A0x38c7a7af5db9421!2zS2h1IER1IEzhu4tjaCBC4bq_biBYxrBh!5e0!3m2!1svi!2sus!4v1709037929565!5m2!1svi!2sus"
            title="Embedded Google Map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="400px"
          ></iframe>
        </div>
      </div>

      {/*  */}
      <div className="container py-5 c-container-div mt-5">
        <div className="row">
          <div className=" col-md-6 mt-5 col-xl-6 col-12">
            <h5 className="">Contact Us</h5>
            <p>
              <i className="fa fa-map-marker-alt mr-2"></i>62 Street 36, Van
              Phuc Residential Area, Hiep Binh Phuoc Ward, Thu Duc City
            </p>
            <p className="c-phone">
              <i className="fa fa-phone-alt mr-2"></i>
              <a href="tel:012 345 67890"> +012 345 6789</a>
            </p>
            <p className="c-email">
              <i className="fa fa-envelope mr-2 "></i>
              <a href="mailto:your_email@example.com"> www.petbot.com</a>
            </p>
          </div>
          <div className="col-md-6 mt-3 col-xl-6 col-12">
            <div className="c-div-logo">
              <img className="img-fluid" src="all/images/logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
