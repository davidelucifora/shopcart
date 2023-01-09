import React from "react";
import { useState } from "react";
import "./style.css";

export default function ProductCard({ product, setCart }) {
  //Sets quantity selected for an item in a card
  const [qty, setQty] = useState(1);

  // When Clicking Add To Cart
  function handleAddToCart(productId) {
    setCart((prevCart) => {
      // Check if product is already in the cart
      const isProductInCart = prevCart.find(
        (product) => product.id === productId
      );
      if (isProductInCart) {
        // If it is, just increease the qty
        return prevCart.map((p) =>
          p.id === productId ? { ...product, qty: p.qty + qty } : p
        );
        // Otherwise add the product to the cart.
      } else return [...prevCart, { ...product, qty: qty }];
    });
  }

  function handleQtyChange(e) {
    setQty(parseInt(e.target.value));
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
      <button className="primary" onClick={() => handleAddToCart(product.id)}>
        Add to Cart
      </button>
    </div>
  );
}
