import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);

  const totalCartQty = () => {
    let count = 0;
    cart.forEach((item) => {
      count += parseInt(item.qty);
    });
    return count;
  };

  return (
    <div className="app">
      <Navbar cartItems={totalCartQty()} />
      <Routes>
        <Route
          path=""
          element={
            <Hero
              mainHeading="Surf like a Pro."
              subHeading="Three Boards, for every level. No fuss."
              ctaText="Shop Now"
            />
          }
        />
        <Route
          path="products"
          element={<Products setCart={setCart} heading="Discover our Range" />}
        />
        <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
      <p>{console.log(cart)}</p>
    </div>
  );
}
