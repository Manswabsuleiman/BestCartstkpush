import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import About from "./pages/About";

import Products from "./components/Client/Products";
import Details from "./components/Client/Details";
import Headphones from "./components/Client/Headphones";
import PS5 from "./components/Client/PS5";
import Pods from "./components/Client/Pods";
import WomenDetails from "./components/Client/WomenDetails";
import MensDetails from "./components/Client/MensDetails";
import FloralDetails from "./components/Client/FloralDetails";
import Watches from "./components/Client/Watches";
import WatchDetails from "./components/Client/WatchDetails";
import BrandDetails from "./components/Client/BrandDetails";
import MacbookDetails from "./components/Client/MacbookDetails";
import PlaceOrder from "./pages/PlaceOrder";
import StkTest from "./components/StkTest";

const App = () => {
  return (
    <div>
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />


        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />

        <Route path="/product" element={<Products />} />
        <Route path="/product/macbook" element={<Details />} />
        <Route path="/product/headphones" element={<Headphones />} />
        <Route path="/product/ps5" element={<PS5 />} />
        <Route path="/product/pods" element={<Pods />} />

        <Route path="/women/details" element={<WomenDetails />} />
        <Route path="/men/details" element={<MensDetails />} />

        <Route path="/floral/:id" element={<FloralDetails />} />
        <Route path="/watch/:id/details" element={<WatchDetails />} />
        <Route path="/brand-details" element={<BrandDetails />} />
        <Route path="/product/macbook" element={<MacbookDetails />} />

      </Routes>
      <StkTest/>
    </div>
  );
};

export default App;


