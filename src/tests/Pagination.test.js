import React from "react";
import { render } from "react-testing-library";

import { Pagination } from "../Pagination";

import "react-testing-library/cleanup-after-each";

describe("Pagination Component", () => {
  it("renders a disabled previous button on page 1", () => {
    const { container } = render(<Pagination page={0} />);

    expect(container.querySelectorAll("button")[0].disabled).toBe(true);
    expect(container.querySelectorAll("button")[1].disabled).toBe(false);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders an enabled previous button on pages greater than 1", () => {
    const { container } = render(<Pagination page={1} />);

    expect(container.querySelectorAll("button")[0].disabled).toBe(false);
    expect(container.querySelectorAll("button")[1].disabled).toBe(false);

    expect(container.firstChild).toMatchSnapshot();
  });
});
