import React from "react";
import { NavLink } from "react-router-dom";
import cartIcon from "./cart.svg";
import logo from "/logo.svg";

import "./style.css";

export default function Navbar(props) {
  return (
    <nav data-testid="navbar">
      <NavLink to="/">
        <img
          className="logo"
          src={logo}
          alt="The Surf Shop"
          width=" 60px"
          height="60px"
        />
      </NavLink>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="shopping-cart">
            <img className="cart-icon" src={cartIcon} alt="cart" />
            <span className={`cart-qty ${props.cartItems > 0 && "opacity-1"}`}>
              {props.cartItems > 0 ? props.cartItems : ""}
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
