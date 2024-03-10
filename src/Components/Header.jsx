import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div class="h-colorcao ">
        <div class="h-firstly container ">
          <div class="row">
            <div class="h-petbot col-md-4 pt-3">
              <span>PETBot</span>
              <i class="fas fa-wine-bottle"></i>
            </div>
            <div class="col-md-8 float-end py-2 px-sm-3 px-lg-5">
              <div class="h-tel float-end">
                <Link
                  to={`/register`}
                  class="h-header btn btn-outline-secondary"
                >
                  <i class="far fa-clock"></i>
                  <span> REGISTER</span>
                </Link>

                <Link to={`/login`} class="h-header btn btn-outline-secondary">
                  <i class="fas fa-user"></i>
                  <span> LOGIN</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
