import { render, screen } from "@testing-library/react";
import { memoryRouter } from "react-router-dom";
import ProductCard from "./ProductCard";
import Products from "./Products";

test("renders Card correctly", () => {
  render(<ProductCard />);
});
