import { render, screen } from "@testing-library/react";
import { memoryRouter } from "react-router-dom";
import ProductCard from "./ProductCard";
import Products from "./Products";

test("calculates correct price", () => {
  render(<ProductCard price="30" />);
  const qtyInput = parseInt(screen.getByLabelText("Qty").value);
  const price = parseInt(screen.getByText(/30/).textContent);
  // expect(qtyInput).toBeInTheDocument();
  // expect(price).toBeInTheDocument();
  expect(qtyInput * price).toEqual(30);
});
