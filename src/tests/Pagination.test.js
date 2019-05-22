import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render } from "react-testing-library";

import { Pagination } from "../Pagination";

const mockStore = configureStore([]);

describe("Pagination Component", () => {
  it("renders a disabled previous button the first page", () => {
    const store = mockStore({
      page: 0
    });

    const { container, getByText } = render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );

    expect(getByText("Prev Page").disabled).toBe(true);
    expect(getByText("Next Page").disabled).toBe(false);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders an enabled previous button on pages greater than 1", () => {
    const store = mockStore({
      page: 1
    });

    const { container, getByText } = render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );

    expect(getByText("Prev Page").disabled).toBe(false);
    expect(getByText("Next Page").disabled).toBe(false);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders a disabled next button the last page", () => {
    const store = mockStore({
      page: 99
    });

    const { container, getByText } = render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );

    expect(getByText("Prev Page").disabled).toBe(false);
    expect(getByText("Next Page").disabled).toBe(true);

    expect(container.firstChild).toMatchSnapshot();
  });
});
