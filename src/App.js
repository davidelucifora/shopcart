import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Hero
              mainHeading="Surf like a Pro."
              subHeading="Three Boards, for every level. No fuss."
              ctaText="Shop Now"
            />
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
