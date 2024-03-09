import Product from "../Data/Product.json";
import React, { useState } from "react";
import Category from "../Data/Categories.json";
function Gallery() {
  const [currentPage, setCurrentPage] = useState(1); //so trang ban dau mac dinh la 1
  const recordsPerPage = 6; //so san pham tren 1 trang
  const lastIndex = currentPage * recordsPerPage; //trang cuoi dung
  const firstIndex = lastIndex - recordsPerPage; //trang dau tien
  const records = Product.slice(firstIndex, lastIndex); //tong dong du lieu
  const npage = Math.ceil(Product.length / recordsPerPage); //so trang
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <div>
      <div className="container">
        <div className="container g-div-h1">
          <h1 className="text-center mt-4 mb-0">Thumbnail Gallery</h1>

          <div className="gallery-list text-center mt-3 mb-3 gallery-div-a-m">
            {Category.map((item) => (
              <a href="#" className="btn btn-primary btn-sm ">
                {item.name}
              </a>
            ))}
          </div>

          <hr className="mt-2 mb-5" />

          <div className="row text-center text-lg-start">
            {records.map((item) => (
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
                <a
                  href="#"
                  className="page-link"
                  onClick={() => changeCPage(n)}
                >
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

export default Gallery;
