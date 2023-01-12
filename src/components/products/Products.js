import React from "react";
import ProductCard from "./ProductCard";
import stock from "./stock";

export default function Products(props) {
  // Get products in stock (separate file).
  const productsArray = stock;
  // Loop through them and render product cards.
  const renderProductCards = productsArray.map((product) => {
    return (
      <ProductCard key={product.id} product={product} setCart={props.setCart} />
    );
  });
  return (
    <>
      <div className="products">
        <h1>{props.heading}</h1>
        <p>
          3 Boards to take you from beginner to pro. All you'll need for your
          surfing journey.
        </p>

        <div className="product-list">{renderProductCards}</div>
      </div>
    </>
  );
}
