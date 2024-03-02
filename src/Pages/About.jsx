import React from "react";

function About() {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-md-12-col-xl-12">
            {" "}
            <div className="about">
              <h1>ABOUT US</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="container py-5">
        <div class="row">
          <div class="col-md-6 col-xl-6 col-sm-12">
            <img src="all/images/about_us.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col col-md-6 col-xl-6 col-sm-12 mt-5 about_h1">
            <h1>About the company</h1>
            <ul>
              <li>
                <p>
                  PETBot Company is a distinguished business entity specializing
                  in the manufacturing, supplying, and exporting of a diverse
                  range of PET/PP/PC Bottles. Our commitment to excellence and
                  innovation has established us as a leader in the industry.
                </p>
              </li>
              <li>
                Quality is at the forefront of everything we do at PETBot
                Company. From sourcing the finest materials to implementing
                stringent quality control measures throughout the production
                process, we are committed to delivering products that meet or
                exceed industry standards.
              </li>
              <li>
                Throughout our history, innovation has remained at the core of
                PETBot Company's ethos. We continually strive to push the
                boundaries of what is possible, embracing new technologies and
                techniques to stay ahead of the curve. Our relentless pursuit of
                innovation ensures that we continue to meet and exceed the
                evolving needs of our customers in an ever-changing marketplace.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row about_color mt-5 py-5 mb-5">
          <div class="col-md-6 col-xl-6 col-sm-12 mt-5 about_color_p">
            <ul>
              <li>
                <p>
                  With 25 years of industry expertise under our belt, our
                  company stands as a testament to enduring quality and
                  reliability. Over the years, we have honed our skills,
                  perfected our processes, and built a solid reputation for
                  excellence in the manufacturing sector.
                </p>
              </li>
              <li>
                <p>
                  At the heart of our operations lies a fleet of modern
                  machinery, meticulously maintained and constantly upgraded to
                  meet the demands of a dynamic market. Our commitment to
                  technological advancement ensures that we remain at the
                  forefront of innovation, delivering products of the highest
                  quality and precision to our valued customers.
                </p>
              </li>
              <li>
                Beyond our dedication to superior craftsmanship, we are equally
                devoted to safeguarding the environment. Recognizing our
                responsibility as stewards of the planet, we have implemented
                eco-friendly practices throughout our production processes. From
                sustainable sourcing to energy-efficient operations, we strive
                to minimize our ecological footprint and contribute to a
                healthier, more sustainable future.
              </li>
            </ul>
          </div>
          <div class="col-md-6 col-xl-6 col-sm-12 mt-5">
            <img class="img-fluid" src="all/images/about_image.webp" alt="" />
          </div>
        </div>
      </div>

      {/* <div className="container-fluid bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="d-flex flex-column align-items-center justify-content-center bg-secondary h-100 py-5 px-3 a-div-us">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 15 320 512">
                  <path d="M120 0h80c13.3 0 24 10.7 24 24V64H96V24c0-13.3 10.7-24 24-24zM32 167.5c0-19.5 10-37.6 26.6-47.9l15.8-9.9C88.7 100.7 105.2 96 122.1 96h75.8c16.9 0 33.4 4.7 47.7 13.7l15.8 9.9C278 129.9 288 148 288 167.5c0 17-7.5 32.3-19.4 42.6C280.6 221.7 288 238 288 256c0 19.1-8.4 36.3-21.7 48c13.3 11.7 21.7 28.9 21.7 48s-8.4 36.3-21.7 48c13.3 11.7 21.7 28.9 21.7 48c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64c0-19.1 8.4-36.3 21.7-48C40.4 388.3 32 371.1 32 352s8.4-36.3 21.7-48C40.4 292.3 32 275.1 32 256c0-18 7.4-34.3 19.4-45.9C39.5 199.7 32 184.5 32 167.5zM96 240c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zm16 112c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H112z " />
                </svg>
                <h4 className="display-3 mb-3">25+</h4>
                <h1 className="m-0">Years Experience</h1>
              </div>
            </div>
            <div className="col-lg-7 m-0 my-lg-5 pt-5 pb-5 pb-lg-2 pl-lg-5">
              <h6 className="text-primary font-weight-normal text-uppercase mb-3">
                Learn About Us
              </h6>
              <h2 className="mb-4 section-title">
                We offer a wide range of high quality PET, PP and PC bottles,
                manufactured with modern technology to ensure durability, safety
                and aesthetics.
              </h2>
              <p>
                Our team of experts are always available to advise and assist
                you in designing bottles according to your custom requirements.
                We provide unique and suitable solutions for all business needs
              </p>
              <div className="row py-5 mt-5">
                <div className="col-sm-6 mt-5">
                  <div className="d-flex align-items-center mb-4">
                    <img
                      src="  https://cdn-icons-png.flaticon.com/128/2079/2079312.png "
                      width="35"
                      height="35"
                      alt=""
                      title=""
                      margin="3px "
                      className="img-small"
                    />

                    <h5 className="text-truncate m-0">Cooking Oil</h5>
                  </div>
                </div>
                <div className="col-sm-6 mt-5">
                  <div className="d-flex align-items-center mb-4">
                    <img
                      src="  https://cdn-icons-png.flaticon.com/128/7368/7368749.png "
                      width="35"
                      height="35"
                      alt=""
                      title=""
                      margin="3px "
                      className="img-small"
                    />
                    <h5 className="text-truncate m-0">Household Chemical</h5>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center mb-4 mt-5">
                    <img
                      src=" https://cdn-icons-png.flaticon.com/128/4560/4560107.png "
                      width="35"
                      height="35"
                      alt=""
                      title=""
                      margin="3px "
                      className="img-small"
                    />
                    <h5 className="text-truncate m-0">Pharmaceuticals</h5>
                  </div>
                </div>
                <div className="col-sm-6 mt-5">
                  <div className="d-flex align-items-center mb-4">
                    <img
                      src=" https://cdn-icons-png.flaticon.com/128/4284/4284980.png "
                      width="35"
                      height="35"
                      alt=""
                      title=""
                      margin="3px "
                      className="img-small"
                    />
                    <h5 className="text-truncate m-0">Pesticides</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-white mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mt-5 py-5 pr-lg-5">
              <h6 className="text-primary font-weight-normal text-uppercase mb-3">
                Why Choose Us?
              </h6>
              <h2 className="mb-4 section-title">
                25+ Years Experience in the manufacturing, supply, and export of
                various types of PET/PP/PC bottles.
              </h2>
              <p className="mb-4">
                We work diligently and wholeheartedly for the satisfaction of
                our valued customers.
              </p>
              <ul className="list-inline">
                <li>
                  <h5>
                    <i className="far fa-check-square text-primary mr-3"></i>25+
                    Years Experience
                  </h5>
                </li>
                <li>
                  <h5>
                    <i className="far fa-check-square text-primary mr-3"></i>The
                    Best Quality
                  </h5>
                </li>
                <li>
                  <h5>
                    <i className="far fa-check-square text-primary mr-3"></i>
                    Customer Satisfaction
                  </h5>
                </li>
              </ul>
              <a href="" className="btn btn-primary mt-3 py-2 px-4">
                View More
              </a>
            </div>
            <div className="col-lg-5">
              <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                <img className="h-100" src="all/images/chai.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default About;
