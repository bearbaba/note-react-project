import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { prettyDOM, render } from "@testing-library/react";
import Note from "./note";

test("renders content", () => {
  const note = {
    content: "Component testing is done with testing-library/react",
  };

  const component = render(<Note content={note.content} />);

  expect(component.container).toHaveTextContent(
    "Component testing is done with testing-library/react"
  );

  const element = component.getByText(
    "Component testing is done with testing-library/react"
  );

  expect(element).toBeDefined();

  const div = component.container.querySelector(".note");
  console.log(prettyDOM(div));
  expect(div).toHaveTextContent(
    "Component testing is done with testing-library/react"
  );
});
