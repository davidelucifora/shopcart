import React from "react";

export default function Cart(props) {
  const cart = props.cart;
  return (
    <div className="cart">
      <p>{cart.map((item) => item.name)}</p>
    </div>
  );
}

/**Ok let's pseudcocode babyeyyyyyyy
 * So what I would like to achieve is that when a user clicks on add to cart for a product
 * it takes the amount x quantity of the product and the other product info
 * it updates the cart (state?)  with the product name, qty, price and a total
 * shows only one of a product if there are many of the same type
 *
 *
 * So I should link the state of my input in the productCard to a state.
 * What happens then? that state updates the state of the cart directly
 * Now all that would be easier if I stored state somewhere at the top
 * my top thing is the router but I don't wanna store state there.
 * WHat I wanna do is useContext
 * but before i jump into that let's figure out the ops
 *
 * OnClick of addToCart
 *  1. Check if the product is already in the cart
 *    1.1 get the product ID and see if it's in the cart.
 *    1.2 if it's in the cart, just add qty of that same product
 *    1.3 if it's not in the cart, just add that one product
 *
 *    Ok how do we go about this specifically tho?
 *    Well when I click add to Cart in a prodCard, I update the cart's state directly.
 *    the product cart state really just needs to keep track of the quantity I think
 *    that will dictate how many times the product will be added to the cart
 *
 *
 * 2.
 *    In the cart there needs to be a delete function
 *    and also a way to change quantities
 *    pretty easy tbh
 *
 */
