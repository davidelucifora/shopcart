import React from "react";
import ProductCard from "./ProductCard";
import Navbar from "./../navbar/Navbar";

import stock from "./stock";

export default function Products() {
  const productsArray = stock;
  const productsToShow = productsArray.map((product) => {
    return (
      <ProductCard
        id={product.id}
        img={product.img}
        name={product.name}
        price={product.price}
        size={product.size}
        desc={product.desc}
      />
    );
  });
  return (
    <>
      <Navbar />
      <div class="products">
        <h1>Discover our Range</h1>
        <p>
          3 Boards to take you from beginner to pro. All you'll need for your
          surfing journey.
        </p>
        <div className="product-list">{productsToShow}</div>
      </div>
    </>
  );
}
