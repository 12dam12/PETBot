import React from "react";
import Selling_product from "../Data/Selling_product.json";
import { useParams } from "react-router-dom";

function Product() {
  var { id } = useParams();

  return (
    <div>
      <div class="container">
        <h1 className="product_h1 mt-5">Selling Products</h1>
        <div class="row mt-5">
          {Selling_product.map((itemm) => (
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 h-div-image">
                  <a href={`detail/${itemm.id}`}>
                    <img className="h-image img-fluid" src={itemm.image} />
                  </a>
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">{itemm.name}</h6>
                  <div className="d-flex justify-content-center">
                    <h6>{itemm.new_price}</h6>
                    {"     -"}
                    <h6 className="text-muted ml-2">
                      <del> $914.24</del>
                    </h6>
                  </div>
                </div>

                <div className="card-footer d-flex justify-content-between bg-light border">
                  <button className="btn btn-outline-secondary">
                    <a
                      className="btn btn-sm text-dark p-0"
                      href={`/detail/${itemm.id}`}
                    >
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
    </div>
  );
}

export default Product;
