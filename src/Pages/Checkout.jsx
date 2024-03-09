import React from "react";
import { Link } from "react-router-dom";

function checkout({ cartItems, deleteCart }) {
  return (
    <div>
      <div>
        <div className="container">
          <table id="cart" className="table table-hover table-condensed">
            <thead>
              <tr></tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr>
                  <td data-th="Product-checkout">
                    <div className="row">
                      <div className="col-sm-2 hidden-xs">
                        <img src={item.image} className="img-fluid" />
                      </div>
                      <div className="col-sm-10">
                        <h4 className="nomargin">{item.name}</h4>
                        <p>{item.describe}</p>
                      </div>
                    </div>
                  </td>
                  <td data-th="Price">${item.new_price}</td>
                  <td data-th="Quantity">
                    <div className="input-group quantity mx-auto">
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-minus">
                          <i className="fa fa-minus"></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-sm bg-secondary text-center"
                        value={item.quantity}
                      />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-plus">
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td data-th="Subtotal" className="text-center">
                    ${item.quantity * item.new_price}
                  </td>
                  <td className="actions" data-th="">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteCart(item)}
                    >
                      <i className="fa fa-trash-o"></i>Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr>
                <td>
                  <Link to={`/`} className="btn btn-warning">
                    <i className="fa fa-angle-left"></i> Continue Shopping
                  </Link>
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
