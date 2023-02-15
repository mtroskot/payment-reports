import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("renders App correctly", () => {
  render(<App />);
  const logo = screen.getByTitle(/alt_dashboard_logo/i);
  expect(logo).toBeInTheDocument();
});
