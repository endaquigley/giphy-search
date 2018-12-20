import React from "react";
import { render } from "react-testing-library";

import { Navigation } from "../Navigation";

import "react-testing-library/cleanup-after-each";

describe("Navigation Component", () => {
  it("should render in the cat state", () => {
    const { container, getByText } = render(
      <Navigation query="cat" updateQuery={jest.fn()} />
    );

    expect(getByText("Dog Search").disabled).toBe(false);
    expect(getByText("Cat Search").disabled).toBe(true);

    expect(container).toMatchSnapshot();
  });

  it("should render in the dog state", () => {
    const { container, getByText } = render(
      <Navigation query="dog" updateQuery={jest.fn()} />
    );

    expect(getByText("Dog Search").disabled).toBe(true);
    expect(getByText("Cat Search").disabled).toBe(false);

    expect(container).toMatchSnapshot();
  });
});
