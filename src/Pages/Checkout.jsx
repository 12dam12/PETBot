import React from "react";

function checkout() {
  return (
    <div>
      <div>
        <div className="container">
          <table id="cart" className="table table-hover table-condensed">
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              <tr>
                <td data-th="Product-checkout">
                  <div className="row">
                    <div className="col-sm-2 hidden-xs">
                      <img
                        src="assets/image/product_1.png"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-sm-10">
                      <h4 className="nomargin">Product 1</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </td>
                <td data-th="Price">$5.11</td>
                <td data-th="Quantity">
                  <input
                    type="number"
                    className="form-control text-center"
                    value="1"
                  />
                </td>
                <td data-th="Subtotal" className="text-center">
                  $5.11
                </td>
                <td className="actions" data-th="">
                  <button className="btn btn-info btn-sm">
                    <i className="fa fa-refresh"></i>
                  </button>
                  <button className="btn btn-danger btn-sm">
                    <i className="fa fa-trash-o"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="visible-xs">
                <td className="text-center">
                  <strong>Total $ 5.11</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" className="btn btn-warning">
                    <i className="fa fa-angle-left"></i> Continue Shopping
                  </a>
                </td>
                <td colspan="2" className="hidden-xs"></td>
                <td className="hidden-xs text-center">
                  <strong>Total $ 5.11</strong>
                </td>
                <td>
                  <a href="#" className="btn btn-success btn-block">
                    Checkout <i className="fa fa-angle-right"></i>
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default checkout;
