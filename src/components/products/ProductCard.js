import React from "react";
import { useState } from "react";
import "./style.css";
export default function ProductCard({ product }) {
  const [qty, setQty] = useState(1);

  // When Clicking Add To Cart
  function handleAddToCart() {
    console.log("the total is " + qty * product.price);
  }

  function handleQtyChange(e) {
    setQty(e.target.value);
  }
  return (
    <div className="product-card">
      <img src={product.img} height="200px" width="200px"></img>
      <h3 className="product-card-name">{product.name}</h3>
      <p className="product-card-description">{product.desc}</p>
      <div className="product-card-input-row">
        <label htmlFor="quantity">Qty</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          min="1"
          className="input-quantity"
          value={qty}
          onChange={handleQtyChange}
        />
        <h3 className="product-card-price">{product.price} $</h3>
      </div>
      <button className="primary" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
