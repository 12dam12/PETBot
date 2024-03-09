import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Gallery from "./Pages/Gallery";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Detail from "./Pages/Detail";
import Categories from "./Pages/Categories";
import Feedback from "./Pages/Feedback";
import Checkout from "./Pages/Checkout";
import { useState } from "react";

function App() {
  //add cart
  const [cartItems, setCartItems] = useState([]);
  const handleAdd = (product) => {
    const ProductExits = cartItems.find((item) => item.id === product.id);
    if (ProductExits) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExits, quantity: ProductExits.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    alert("Add cart Success");
  };

  const deleteCart = (GFGCourse) => {
    const updatedCart = cartItems.filter((item) => item.id !== GFGCourse.id);
    setCartItems(updatedCart);
    alert("Delete cart success!");
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Menu />

        <Routes>
          <Route path="/" element={<Home handleAdd={handleAdd} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/categories/:id" element={<Categories />} />
          <Route path="/feedback" element={<Feedback />} />

          <Route
            path="/checkout"
            element={<Checkout cartItems={cartItems} deleteCart={deleteCart} />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
