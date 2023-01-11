import React from "react";
export default function CartItem({ item }) {
  return (
    // Cart Item to list in Cart
    <div className="cart-item">
      {/** Left side with thumb and qty */}
      <div className="cart-item-thumbnail">
        <img src={item.img} alt="" width="100px" height="100px" />
        <div className="cart-item-qty">
          <button className="decrement">-</button>
          <input type="text" value={item.qty} />
          <button className="increment">+</button>
        </div>
      </div>

      {/** Right side with Price + text */}
      <div className="cart-item-text">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-price">$ {item.price}</div>
      </div>
    </div>
  );
}
