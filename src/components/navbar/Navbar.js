import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

/** Using NavLink instead of Link for routing as it
 * comes with built in functionality that adds a .active class
 * to an active route link.
 */

export default function Navbar() {
  return (
    <nav data-testid="navbar">
      <h2 className="logo">DaShop</h2>
      <ul>
        <li>
          <NavLink data-testid="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink data-testid="nav-link" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink data-testid="nav-link" to="/cart" className="shopping-cart">
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
