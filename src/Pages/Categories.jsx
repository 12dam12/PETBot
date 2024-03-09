import React, { useState } from "react";
import Product from "../Data/Product.json";
import Category from "../Data/Categories.json";
import { useParams } from "react-router-dom";

function Categories() {
  var { id } = useParams();

  var sanpham = Product.filter((items) => items.categories[0].id == id);
  // phaan trang
  const [currentPage, setCurrentPage] = useState(1); //so trang ban dau mac dinh la 1
  const recordsPerPage = 6; //so san pham tren 1 trang
  const lastIndex = currentPage * recordsPerPage; //trang cuoi dung
  const firstIndex = lastIndex - recordsPerPage; //trang dau tien
  const records = sanpham.slice(firstIndex, lastIndex); //tong dong du lieu
  const npage = Math.ceil(sanpham.length / recordsPerPage); //so trang
  const numbers = [...Array(npage + 1).keys()].slice(1);
  return (
    <div classNameName="c-categories">
      <div className="container py-3">
        <div className="row">
          <div className="col-12 h-categories ca-div-h1">
            <h1>Categories</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-3 mb-3">
          <aside className="col-md-3">
            <div className="card">
              <article className="filter-group">
                <header className="card-header">
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse_1"
                    aria-expanded="true"
                    className=""
                  >
                    <h6 className="title">Product type</h6>
                  </a>
                </header>
                <div className="filter-content collapse show" id="collapse_1">
                  <div className="card-body">
                    <form className="pb-3">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-light" type="button">
                            <i className="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </form>

                    <ul className="list-menu">
                      {Category.map((item) => (
                        <li>
                          <a href={`/categories/${item.id}`}>{item.name} </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>

              <article className="filter-group">
                <header className="card-header">
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse_2"
                    aria-expanded="true"
                    className=""
                  >
                    <h6 className="title">Categories</h6>
                  </a>
                </header>
                <div className="filter-content collapse show" id="collapse_2">
                  <div className="card-body">
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        checked=""
                        className="custom-control-input"
                      />
                      <div className="custom-control-label">
                        PET Bottle & Containers
                        <b className="badge badge-pill badge-light float-right">
                          120
                        </b>
                      </div>
                    </label>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        checked=""
                        className="custom-control-input"
                      />
                      <div className="custom-control-label">
                        PP Bottle & Containers
                        <b className="badge badge-pill badge-light float-right">
                          15
                        </b>
                      </div>
                    </label>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        checked=""
                        className="custom-control-input"
                      />
                      <div className="custom-control-label">
                        HDPE Bottle & Containers
                        <b className="badge badge-pill badge-light float-right">
                          35
                        </b>
                      </div>
                    </label>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        checked=""
                        className="custom-control-input"
                      />
                      <div className="custom-control-label">
                        GLASS Bottle & Containers
                        <b className="badge badge-pill badge-light float-right">
                          89
                        </b>
                      </div>
                    </label>
                  </div>
                </div>
              </article>

              <article className="filter-group">
                <header className="card-header">
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse_4"
                    aria-expanded="true"
                    className=""
                  ></a>
                </header>
              </article>
            </div>
          </aside>
          <main className="col-md-9">
            <header className="mb-4 pb-3">
              <div className="cate-record mt-3 mb-2 float-start">
                12 Items found
              </div>
              {/* <select className="cate-filter-select mt-4 mb-2 form-control float-end">
                <option>Latest items</option>
                <option>Trending</option>
                <option>Most Popular</option>
                <option>Cheapest</option>
              </select> */}
            </header>

            <div className="clearfix"></div>
            <div className="row">
              {records.map((item) => (
                <div className="col-md-4 mt-3">
                  <div className="card card-home c-div-image">
                    <a href={`/detail/${item.id}`}>
                      <img
                        src={item.image}
                        className="card-img-top img-fluid"
                        alt="Image 1"
                      />
                    </a>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text"> ${item.new_price}</p>

                      <div className="price float-end">
                        <a href={`/detail/${item.id}`}>
                          <button className="btn btn-secondary">
                            <i class="fas fa-eye"></i> View Detail
                          </button>
                        </a>
                      </div>

                      <a href="" className="btn btn-secondary">
                        <i className="fa fa-shopping-cart"></i> Add cart
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <nav className="mt-4" aria-label="Page navigation sample">
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
            </nav>
          </main>
        </div>
      </div>
    </div>
  );
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

export default Categories;
