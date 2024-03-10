import React from "react";
import DataCategories from "../Data/Categories.json";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="h-color">
      <div className="h-full-header m-3">
        <header className="container h-menu">
          <div className="row">
            <div className="h-logo col-md-1">
              <div>
                <img src="all/images/logo.png" alt="" />
              </div>
            </div>
            <div className="col-md-10 m-div-menu">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link
                          to={`/`}
                          className="nav-link active"
                          aria-current="page"
                          href="/"
                        >
                          HOME
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to={`/about`} className="nav-link">
                          ABOUT US
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to={`/product`} className="nav-link">
                          PRODUCT
                        </Link>
                      </li>

                      <li className="nav-item dropdown">
                        <Link
                          to={`/categories`}
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          CATEGORIES
                        </Link>
                        <ul className="dropdown-menu">
                          {DataCategories.map((item) => (
                            <li>
                              <Link
                                to={`/categories/${item.id}`}
                                className="dropdown-item"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link to={`/gallery`} className="nav-link">
                          GALLERY
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to={`/contact`} className="nav-link">
                          CONTACT
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to={`/feedback`} className="nav-link">
                          FEEDBACK
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>

            <div className="h-cart col-md-1 mt-3 float-end">
              <div>
                <Link to={`/checkout`}>
                  <button className="menu_button_card">
                    <i class="fas fa-shopping-cart text-primary"></i>
                  </button>
                  <span class="badge">0</span>
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>

    //
  );
}

export default Menu;
