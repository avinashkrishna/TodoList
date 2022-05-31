import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

test("should pass props as Delete", () => {
  const { container } = render(<Button buttonName="Delete" />);
  const button = container.firstChild;
  expect(button.textContent).toBe("Delete");
});
