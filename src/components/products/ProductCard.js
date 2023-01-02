import React from "react";
import "./style.css";
export default function ProductCard(props) {
  return (
    <div class="product-card">
      <img src={props.img} height="200px" width="200px"></img>
      <h3 className="product-card-name">{props.name}</h3>
      <p className="product-card-description">{props.desc}</p>
      <div className="product-card-input-row">
        <label htmlFor="quantity">Qty</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          min="1"
          className="input-quantity"
          defaultValue="1"
        />
        <h3 className="product-card-price">{props.price} $</h3>
      </div>
      <button className="primary">Add to Cart</button>
    </div>
  );
}
