import React from "react";
import Product from "../Data/Product.json";
import { Link, useParams } from "react-router-dom";

function Detail({ handleAdd }) {
  var cut = Product.slice(0, 4);
  const { id } = useParams();
  var item = Product.filter((item) => item.id == id);
  item = item[0];
  return (
    <div>
      <div className="container">
        <div className="mt-5 mb-5">
          <div className="row">
            <div className="col-md-12 detail-product">
              <div className="card">
                <div className="row">
                  <div className="col-md-4 d-div-image">
                    <img src={item.image} className="d-img" alt="" />
                  </div>
                  <div className="col-md-8">
                    <div className="product p-4">
                      <div className="mt-4 mb-3">
                        {" "}
                        <span className="text-uppercase text-muted brand">
                          {item.bottle}
                        </span>
                        <h4 className="text-uppercase">{item.name}</h4>
                        <div className="price d-flex flex-row align-items-center">
                          {" "}
                          <span className="act-price p-3">
                            <del>
                              $ <b>{item.old_price}</b>
                            </del>
                          </span>{" "}
                          <div className="ml-2">
                            {" "}
                            <span>
                              $<b>{item.new_price} OFF</b>
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                      <p className="about">{item.describe}</p>

                      <div className="row">
                        <div className="col">
                          {" "}
                          <div className="cart mt-4 align-items-center">
                            {" "}
                            <button
                              className="btn btn-danger text-uppercase mr-2 px-4"
                              onClick={() => handleAdd(item)}
                            >
                              Add to cart
                            </button>{" "}
                            <i className="fa fa-heart text-muted"></i>{" "}
                            <i className="fa fa-share-alt text-muted"></i>{" "}
                          </div>
                        </div>
                        <div className="col">
                          <div className="cart mt-4 align-items-center">
                            <a href={item.file} download>
                              <button className="btn btn-danger text-uppercase mr-2 px-4">
                                {" "}
                                Download
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="bg-dark text-light text-center rounded ">
          YOU MAY ALSO LIKE
        </h2>
        <div className="row">
          {cut.map((item) => (
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 h-div-image">
                  <a href={item.id}>
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
                    <Link
                      to={`/detail/${item.id}`}
                      className="btn btn-sm text-dark p-0"
                    >
                      <i className="fas fa-eye text-primary mr-1"></i> View
                      Detail
                    </Link>
                  </button>

                  <button
                    className="btn btn-outline-secondary p-0"
                    type="button"
                    onClick={() => handleAdd(item)}
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
    </div>
  );
}

export default Detail;
