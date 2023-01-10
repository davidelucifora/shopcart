import React from "react";
export default function CartItem({ item }) {
  return (
    <div className="cart-item">
      <div className="cart-item-thumbnail">
        <img src="/" alt="" className="cart-thumb" />
        <div className="cart-item-qty">
          <span className="cart-item-qty">{item.qty}</span>
          <button className="increment">-</button>
          <button className="increment">+</button>
        </div>
      </div>
      <div className="cart-item-text">
        <div className="price-name-row">{item.name}</div>
        <a href="#" className="cart-item-delete-btn"></a>
      </div>
    </div>
  );
}
