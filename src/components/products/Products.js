import React from "react";
import ProductCard from "./ProductCard";
import stock from "./stock";

export default function Products() {
  // Get products in stock (separate file).
  const productsArray = stock;
  // Loop through them and render product cards.

  const calcTotalForCart = (qty, price) => qty * price;

  const renderProductCards = productsArray.map((product) => {
    return (
      <ProductCard
        key={product.id}
        product={product}
        // id={product.id}
        // img={product.img}
        // name={product.name}
        // price={product.price}
        // size={product.size}
        // desc={product.desc}
      />
    );
  });
  return (
    <>
      <div className="products">
        <h1>Discover our Range</h1>
        <p>
          3 Boards to take you from beginner to pro. All you'll need for your
          surfing journey.
        </p>

        <div className="product-list">{renderProductCards}</div>
      </div>
    </>
  );
}
