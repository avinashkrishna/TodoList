import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Should verify title and button text", () => {
  const { container } = render(<App />);

  const title = container.querySelector(".title");
  expect(title.textContent).toBe("Recruitment Process");

  const todoTitle = container.querySelectorAll(".todo-title");

  expect(todoTitle.length).toBe(3);

  const buttons = container.querySelectorAll("button");
  expect(buttons[0].textContent).toBe("Add");
  expect(buttons[1].textContent).toBe("Delete");
  expect(buttons[2].textContent).toBe("Move to top");
  expect(buttons[3].textContent).toBe("Completed");
});
