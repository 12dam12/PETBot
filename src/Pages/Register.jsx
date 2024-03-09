import React from "react";
import { useState } from "react";

function Register() {
  var [namee, setNamee] = useState("");
  var [emaill, setEmaill] = useState("");
  var [password, setPassword] = useState("");
  var [reEnterPassword, setReEnterPassword] = useState("");

  var checkEmaill = /^[a-zA-Z0-9]{1,20}@[a-z]{2,6}\.[a-z]{2,3}$/;

  var handleNameChangee = (event) => {
    setNamee(event.target.value);
  };

  var handleEmailChangee = (event) => {
    setEmaill(event.target.value);
  };

  var handlePasswordChangee = (event) => {
    setPassword(event.target.value);
  };

  var handleRe_EnterPasswordChangee = (event) => {
    setReEnterPassword(event.target.value);
  };
  var handleSubmitt = () => {
    if (namee === "") {
      // Hiển thị cửa sổ thông báo nếu tên không được nhập
      alert("Please enter name");
      return false;
    }

    if (!checkEmaill.test(emaill)) {
      alert("Please enter email");
      return false;
    }

    if (password == "" || reEnterPassword == "") {
      alert("Please enter Password");
      return false;
    } else if (password !== reEnterPassword) {
      alert("Passwords are not the same");
      return false;
    }

    alert("Successfully registered account!");
    return true;
  };
  return (
    <div>
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
                              required
                              onChange={handleNameChangee}
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
                              onChange={handleEmailChangee}
                              required
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
                              required
                              type="password"
                              id="form3Example4c"
                              class="form-control"
                              placeholder="Password"
                              onChange={handlePasswordChangee}
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
                              required
                              type="password"
                              id="form3Example4cd"
                              class="form-control"
                              placeholder="Repeat your password"
                              onChange={handleRe_EnterPasswordChangee}
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
                            onClick={handleSubmitt}
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
  );
}

export default Register;
