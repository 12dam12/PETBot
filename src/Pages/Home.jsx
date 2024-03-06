import React from "react";
import Banchay from "../Data/Product.json";

import Product from "../Data/Product.json";

function Home() {
  var limitdata = Banchay.slice(0, 12);
  return (
    <div>
      {/* slide */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="all/images/1.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="all/images/3.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="all/images/2.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* slide */}

      {/*uy tín */}
      <div className="h-uytin container mt-5">
        <div className="uytin row">
          <div className="box col-md-3">
            <h5>QUALITY</h5>
            <span>
              We ensure our products match the illustrated images and are of
              high standard.
            </span>
          </div>
          <div className="box col-md-3">
            <h5>RELIABILITY</h5>
            <span>Consistently delivering top-notch products on time.</span>
          </div>
          <div className="box col-md-3">
            <h5>DEDICATION</h5>
            <span>We serve our customers 24/7 with enthusiasm and care.</span>
          </div>
          <div className="box col-md-3">
            <h5>COOPERATION</h5>
            <span>
              A trusted partner, committed to long-term collaboration.
            </span>
          </div>
        </div>
      </div>
      {/*uy tín  */}

      {/*loại chai  */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 home-col-box">
            <div className="card home-div-image">
              {" "}
              <a href="/categories/1">
                <img
                  src="/all/images/pet1.webp"
                  className="card-img-top img-fluid"
                  alt="..."
                />
              </a>
              <div className="">
                <p className="card-text">PET Bottle & Containers</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 home-col-box">
            <div className="card home-div-image">
              {" "}
              <a href="/categories/2">
                <img
                  src="/all/images/pp1.jpg"
                  className="card-img-top img-fluid"
                  alt="..."
                />
              </a>
              <div className="">
                <p className="card-text">PET Bottle & Containers</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 home-col-box">
            <div className="card home-div-image">
              {" "}
              <a href="/categories/3">
                <img
                  src="/all/images/hdpe1.webp"
                  className="card-img-top img-fluid"
                  alt="..."
                />
              </a>
              <div className="">
                <p className="card-text">PET Bottle & Containers</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 home-col-box">
            <div className="card home-div-image">
              {" "}
              <a href="/categories/4">
                <img
                  src="/all/images/glass1.webp"
                  className="card-img-top img-fluid"
                  alt="..."
                />
              </a>
              <div className="">
                <p className="card-text">PET Bottle & Containers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end  loại chai  */}

      {/* dịch vụ tốt */}
      <div className="container mt-5">
        <div className="row">
          <div className="h-service col-md-3">
            <h5 className="dichvu">
              <i className="fas fa-check"></i> Quality Product
            </h5>
          </div>
          <div className="h-service col-md-3">
            <h5 className="dichvu">
              <i className="fas fa-truck-moving"></i> Free Shipping
            </h5>
          </div>
          <div className="h-service col-md-3">
            <h5 className="dichvu">
              <i className="fas fa-exchange-alt"></i> 14-Day Return
            </h5>
          </div>
          <div className="h-service col-md-3">
            <h5 className="dichvu">
              <i className="fas fa-phone-volume"></i> 24/7 Support
            </h5>
          </div>
        </div>
      </div>

      {/* end dịch vụ tốt */}

      {/* giảm giá */}

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <img
              className="img-fluid"
              src="all/images/small_banner2.png"
              alt=""
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <img
              className="img-fluid"
              src="all/images/small_banner1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/*end giảm giá */}

      {/* 2024*/}

      <div className="container mt-5">
        <div className="row">
          <div className="h-year col-md-12">
            <h1>--BEST-SELLING PRODUCTS IN 2024--</h1>
          </div>
        </div>
      </div>
      {/*end 2024*/}

      {/*bán chạy  */}

      <div className="container mt-1">
        <div className="row">
          {limitdata.map((item) => (
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 h-div-image">
                  <a href={`/detail/${item.id}`}>
                    <img className="h-image img-fluid" src={item.image} />
                  </a>
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">{item.name}</h6>
                  <div className="d-flex justify-content-center">
                    <h6>${item.new_price}</h6>
                    {"     -"}
                    <h6 className="text-muted ml-2">
                      <del>${item.old_price}</del>
                    </h6>
                  </div>
                </div>

                <div className="card-footer d-flex justify-content-between bg-light border">
                  <button className="btn btn-outline-secondary">
                    <a className="btn btn-sm text-dark p-0" href="/detail/2">
                      <i className="fas fa-eye text-primary mr-1"></i> View
                      Detail
                    </a>
                  </button>

                  <button
                    className="btn btn-outline-secondary p-0"
                    type="button"
                  >
                    <i className="fas fa-shopping-cart text-primary mr-1"></i>{" "}
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*end bán chạy  */}
    </div>
  );
}

export default Home;
