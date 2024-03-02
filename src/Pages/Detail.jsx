import React from "react";
import Product from "../Data/Product.json";
import { useParams } from "react-router-dom";

function Detail() {
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
                              $<b>{item.new_price}</b>
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
                            <button className="btn btn-danger text-uppercase mr-2 px-4">
                              Add to cart
                            </button>{" "}
                            <i className="fa fa-heart text-muted"></i>{" "}
                            <i className="fa fa-share-alt text-muted"></i>{" "}
                          </div>
                        </div>
                        <div className="col">
                          <div className="cart mt-4 align-items-center">
                            {" "}
                            <a href="" download="">
                              <button className="btn btn-danger text-uppercase mr-2 px-4">
                                Download
                              </button>
                            </a>{" "}
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
      </div>
    </div>
  );
}

export default Detail;
