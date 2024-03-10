import jsonData from "../Data/Product.json";
import React, { useEffect, useState } from "react";
import Category from "../Data/Categories.json";
import { Link } from "react-router-dom";
function Gallery() {
  //xét mặc định gia tri bien Product và filterData bằng rỗng
  const [Product, setProduct] = useState([]);
  const [filterData, setFilterData] = useState([]);

  //xét mặc định gia tri bằng jsonData cho bien Product và filterData
  useEffect(() => {
    setProduct(jsonData);
    setFilterData(jsonData);
  }, []);
  //tìm theo tên bottle
  const handleFilter = (filterName) => {
    const datanew = Product.filter((item) =>
      item.bottle.toLowerCase().includes(filterName.toLowerCase())
    );
    setFilterData(datanew);
  };

  const [currentPage, setCurrentPage] = useState(1); //so trang ban dau mac dinh la 1
  const recordsPerPage = 6; //so san pham tren 1 trang
  const lastIndex = currentPage * recordsPerPage; //trang cuoi dung
  const firstIndex = lastIndex - recordsPerPage; //trang dau tien
  const records = filterData.slice(firstIndex, lastIndex); //tong dong du lieu
  const npage = Math.ceil(filterData.length / recordsPerPage); //so trang
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <div>
      <div className="container">
        <div className="container g-div-h1">
          <h1 className="text-center mt-4 mb-0">Thumbnail Gallery</h1>

          <div className="gallery-list text-center mt-3 mb-3 gallery-div-a-m">
            {Category.map((item) => (
              <button
                onClick={() => handleFilter(item.name)}
                className="btn btn-primary btn-sm m-2"
              >
                {item.name}
              </button>
            ))}
          </div>

          <hr className="mt-2 mb-5" />

          <div className="row text-center text-lg-start">
            {records.map((item) => (
              <div className="col-lg-3 col-md-4 col-6 g-div-image">
                <Link to={`/detail/${item.id}`} className="d-block mb-4 h-100">
                  <img
                    className="img-fluid img-thumbnail"
                    src={item.image}
                    alt=""
                  />
                </Link>
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
