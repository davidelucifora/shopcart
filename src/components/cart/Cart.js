import React from "react";
import CartItem from "./CartItem";

export default function Cart({ cart }) {
  const listCartItems = cart.map((product) => {
    return <CartItem item={product} />;
  });
  return (
    <div className="cart">
      {!cart.length ? <p>Nothing here :(</p> : listCartItems}
    </div>
  );
}
