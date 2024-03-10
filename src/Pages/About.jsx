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
    </div>
  );
}

export default About;
