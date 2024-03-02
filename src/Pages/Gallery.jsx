import React from "react";
import Product from "../Data/Product.json";

function Gallery() {
  return (
    <div>
      <div className="container">
        <div className="container g-div-h1">
          <h1 className="text-center mt-4 mb-0">Thumbnail Gallery</h1>
          <div className="gallery-list text-center mt-3 mb-3 gallery-div-a-m">
            <a href="#" className="btn btn-primary btn-sm ">
              PET Bottle & Containers
            </a>
            <a href="#" className="btn btn-primary btn-sm">
              PP Bottle & Containers
            </a>
            <a href="#" className="btn btn-primary btn-sm">
              HDPE Bottle & Containers
            </a>
            <a href="#" className="btn btn-primary btn-sm">
              GLASS Bottle & Containers
            </a>
          </div>
          <hr className="mt-2 mb-5" />

          <div className="row text-center text-lg-start">
            {Product.map((item) => (
              <div className="col-lg-3 col-md-4 col-6 g-div-image">
                <a href="#" className="d-block mb-4 h-100">
                  <img
                    className="img-fluid img-thumbnail"
                    src={item.image}
                    alt=""
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
