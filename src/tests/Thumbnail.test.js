import React from "react";
import { render } from "react-testing-library";

import Thumbnail from "../Thumbnail";

describe("Thumbnail Component", () => {
  it("renders an image element with the correct src", () => {
    const source = "https://enda.ie/filename-01.gif";
    const { container } = render(
      <Thumbnail source={source} handleClick={jest.fn()} />
    );

    const image = container.querySelector("img");
    expect(image.src).toBe("https://enda.ie/filename-01.gif");

    expect(container.firstChild).toMatchSnapshot();
  });
});
