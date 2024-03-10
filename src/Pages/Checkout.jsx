import React, { useState } from "react";
import { Link } from "react-router-dom";

function Checkout({ cartItems, deleteCart }) {
  var checkEmaill = /^[a-zA-Z0-9]{1,20}@[a-z]{2,6}\.[a-z]{2,3}$/;
  var [name, setName] = useState("");
  var [add, setAdd] = useState("");
  var [phone, setPhone] = useState("");
  var [email, setEmail] = useState("");

  var handleName = (e) => {
    setName(e.target.value);
  };
  var handleAdd = (e) => {
    setAdd(e.target.value);
  };
  var handlePhone = (e) => {
    setPhone(e.target.value);
  };
  var handleEmail = (e) => {
    setEmail(e.target.value);
  };
  var handleButton = () => {
    if (name == "") {
      alert("Username");
      return false;
    }

    if (add == "") {
      alert("Please enter your address");
      return false;
    }
    if (phone == "") {
      alert("Please enter the phone number");
      return false;
    }
    if (!checkEmaill.test(email)) {
      alert("Please enter your Email");
      return false;
    }
    alert("Successful purchase");
    return true;
  };
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
                      <div className="input-group-btn"></div>
                      <input
                        type="text"
                        className="form-control form-control-sm bg-secondary text-center"
                        value={item.quantity}
                      />
                      <div className="input-group-btn"></div>
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
                  <strong>Group-3</strong>
                </td>
                <td>
                  <Link to={`/`} className="btn btn-success btn-block">
                    Home <i className="fa fa-angle-right"></i>
                  </Link>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-xl-12 text-center">
              <form action="" className="bg-secondary py-3 rounded mt-5 mb-5">
                <h2 className="text-center">Order information</h2>
                <div className="mt-3">
                  <input
                    type="text"
                    className="col-sm-10 rounded form-control-lg"
                    placeholder="Username"
                    required
                    onChange={handleName}
                  />
                </div>
                <div className="mt-3">
                  <input
                    type="text"
                    className="col-sm-10 rounded form-control-lg"
                    placeholder="Address"
                    required
                    onChange={handleAdd}
                  />
                </div>
                <div className="mt-3">
                  <input
                    type="number"
                    className="col-sm-10 rounded form-control-lg"
                    placeholder="Phone number"
                    required
                    onChange={handlePhone}
                  />
                </div>
                <div className="mt-3">
                  <input
                    type="text"
                    className="col-sm-10 rounded form-control-lg"
                    placeholder="Email"
                    required
                    onChange={handleEmail}
                  />
                </div>

                <div className=" button-checkout m-3">
                  <button
                    type="submit"
                    className="rounded form-control-lg"
                    onClick={handleButton}
                  >
                    Ordered
                  </button>

                  <button type="reset" className="rounded form-control-lg">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
