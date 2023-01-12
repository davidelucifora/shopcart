import React from "react";
import CartItem from "./CartItem";
import "./style.css";

// Message to show if cart is empty
function EmptyCartMessage(props) {
  return (
    <div className="empty-cart-message">
      <h1>{props.heading}</h1>
      <a href="/products">See Products</a>
    </div>
  );
}

export default function Cart({ cart, setCart }) {
  // Calculate subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  // List cart items
  const listCartItems = cart.map((product) => {
    return <CartItem key={product.id} item={product} setCart={setCart} />;
  });

  return (
    <>
      {!cart.length ? (
        <EmptyCartMessage heading="Wow such Empty :(" />
      ) : (
        <div className="cart">
          {listCartItems}
          <h3>
            Subtotal: <span className="total-price">{subtotal} $</span>
          </h3>
          <button className="primary">Buy Now</button>
        </div>
      )}
    </>
  );
}
