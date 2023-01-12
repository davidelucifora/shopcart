import React, { useEffect } from "react";
import { useState } from "react";
export default function CartItem({ item, setCart }) {
  const [itemQuantity, setItemQuantity] = useState(item.qty);

  // Update cart whenever itemQuantity changes
  useEffect(() => {
    setCart((prevCart) =>
      prevCart
        .map((product) => {
          // Find the product
          return product.id === item.id
            ? // Update its qty
              { ...product, qty: itemQuantity }
            : product;
        })
        // Remove all items with qty: 0 from the cart
        .filter((product) => product.qty > 0)
    );
  }, [itemQuantity]);

  // Sets item qty to the value of the input
  function handleUpdateCart(e) {
    setItemQuantity(e.target.value);
  }
  // Increment or decrement item qty when clicking buttons
  function updateQtyInput(e) {
    const sign = e.target.innerText;
    sign === "+"
      ? setItemQuantity(itemQuantity + 1)
      : setItemQuantity(itemQuantity - 1);
  }
  function handleDeleteItem() {
    setCart((prevCart) => prevCart.filter((item) => !item));
  }
  return (
    // Cart Item to list in Cart
    <div className="cart-item">
      {/** Left side with thumb and qty */}
      <div className="cart-item-thumbnail">
        <img src={item.img} alt="" width="100px" height="100px" />
        <div className="cart-item-qty">
          <button className="decrement" onClick={updateQtyInput}>
            {item.qty > 1 ? "-" : <i className="gg-trash"></i>}
          </button>
          <input
            type="text"
            id="qtyInput"
            value={itemQuantity}
            onChange={handleUpdateCart}
          />
          <button className="increment" onClick={updateQtyInput}>
            +
          </button>
        </div>
      </div>

      {/** Right side with Price + text */}
      <div className="cart-item-text">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-price">$ {item.price}</div>
        <a className="cart-item-del" href="#" onClick={handleDeleteItem}>
          Remove
        </a>
      </div>
    </div>
  );
}
