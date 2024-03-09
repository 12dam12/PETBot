import React, { useState } from "react";
import Selling_product from "../Data/Selling_product.json";
import { useParams } from "react-router-dom";

function Product() {
  const [currentPage, setCurrentPage] = useState(1); //so trang ban dau mac dinh la 1
  const recordsPerPage = 8; //so san pham tren 1 trang
  const lastIndex = currentPage * recordsPerPage; //trang cuoi dung
  const firstIndex = lastIndex - recordsPerPage; //trang dau tien
  const records = Selling_product.slice(firstIndex, lastIndex); //tong dong du lieu
  const npage = Math.ceil(Selling_product.length / recordsPerPage); //so trang
  const numbers = [...Array(npage + 1).keys()].slice(1);
  var { id } = useParams();

  return (
    <div>
      <div class="container">
        <h1 className="product_h1 mt-5">Selling Products</h1>
        <div class="row mt-5">
          {records.map((itemm) => (
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
        <ul className="pagination mt-4">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>
              Prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? "active" : ""}`}
              key={i}
            >
              {" "}
              <a href="#" className="page-link" onClick={() => changeCPage(n)}>
                {n}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Prev
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
  //ham trang truoc do
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  //ham cac trang
  function changeCPage(id) {
    setCurrentPage(id);
  }
  //ham trang tiep theo
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
}

export default Product;
