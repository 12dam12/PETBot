import React from "react";

function Feedback() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-xl-12">
            <div className="fb-form py-3">
              <form action="#" className="form-group">
                <h2>Tell us what you think</h2>
                <input
                  className="form-control my-3"
                  placeholder="Name"
                  type="text"
                />
                <input
                  className="form-control my-3"
                  placeholder="Email"
                  type="text"
                />
                <textarea
                  className="form-control my-3"
                  id="fb-comment"
                  name=""
                  placeholder="Tell us what you think"
                ></textarea>
                <div className="rating f-div-i my-3">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <input
                  className="form-control btn btn-secondary fe-input-form"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="fe-div-ty">
              <h4>THANK YOU!</h4>
              <h5>
                It really means a lot to us <i class="far fa-smile-beam"></i>
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="fe-nholai">
        <section class="vh-100">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-12 col-xl-11">
                <div class="card text-black">
                  <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                      <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Sign up
                        </p>

                        <form class="mx-1 mx-md-4">
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                class="form-control"
                                placeholder="Name"
                              />
                              <label class="form-label" for="form3Example1c">
                                Your Name
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="form3Example3c"
                                class="form-control"
                                placeholder="Email"
                              />
                              <label class="form-label" for="form3Example3c">
                                Your Email
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4c"
                                class="form-control"
                                placeholder="Password"
                              />
                              <label class="form-label" for="form3Example4c">
                                Password
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4cd"
                                class="form-control"
                                placeholder="Repeat your password"
                              />
                              <label class="form-label" for="form3Example4cd">
                                Repeat your password
                              </label>
                            </div>
                          </div>

                          <div class="form-check d-flex justify-content-center mb-5">
                            <input
                              class="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example3c"
                            />
                            <label class="form-check-label" for="form2Example3">
                              I agree all statements in{" "}
                              <a href="#!" className="a-register">
                                Terms of service
                              </a>
                            </label>
                          </div>

                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              class="btn btn-outline-secondary btn-lg"
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      </div>
                      <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="all/images/logo.png"
                          class="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Feedback;
