import React from "react";
import Navbar from "./../navbar/Navbar";
import "./style.css";

export default function Hero(props) {
  return (
    <div className="hero">
      <div className="hero-cta-block">
        <h1 data-testid="hero-h1">{props.mainHeading}</h1>
        <h4>{props.subHeading}</h4>
        <a href="/products" className="primary">
          {props.ctaText}
        </a>
      </div>
    </div>
  );
}
