import React from "react";
import Product from "../Data/Product.json";
import { useParams } from "react-router-dom";

function Categories() {
  var { id } = useParams();

  var sanpham = Product.filter((items) => items.categories[0].id == id);
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
                      <li>
                        <a href="/categories/1"> PETBottle </a>
                      </li>
                      <li>
                        <a href="/categories/2"> PC Bottle </a>
                      </li>
                      <li>
                        <a href="/categories/3"> PP Bottle </a>
                      </li>
                      <li>
                        <a href="/categories/4"> HDPE Bottle </a>
                      </li>
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
              {sanpham.map((item) => (
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
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Categories;
