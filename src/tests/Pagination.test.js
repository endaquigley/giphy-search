import React from "react";
import { render } from "react-testing-library";

import { Pagination } from "../Pagination";

import "react-testing-library/cleanup-after-each";

describe("Pagination Component", () => {
  it("renders a disabled previous button the first page", () => {
    const { container, getByText } = render(
      <Pagination
        page={0}
        minPage={0}
        maxPage={99}
        prevPage={jest.fn()}
        nextPage={jest.fn()}
      />
    );

    expect(getByText("Prev Page").disabled).toBe(true);
    expect(getByText("Next Page").disabled).toBe(false);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders an enabled previous button on pages greater than 1", () => {
    const { container, getByText } = render(
      <Pagination
        page={1}
        minPage={0}
        maxPage={99}
        prevPage={jest.fn()}
        nextPage={jest.fn()}
      />
    );

    expect(getByText("Prev Page").disabled).toBe(false);
    expect(getByText("Next Page").disabled).toBe(false);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders a disabled next button the last page", () => {
    const { container, getByText } = render(
      <Pagination
        page={99}
        minPage={0}
        maxPage={99}
        prevPage={jest.fn()}
        nextPage={jest.fn()}
      />
    );

    expect(getByText("Prev Page").disabled).toBe(false);
    expect(getByText("Next Page").disabled).toBe(true);

    expect(container.firstChild).toMatchSnapshot();
  });
});
