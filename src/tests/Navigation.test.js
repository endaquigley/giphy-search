import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render } from "react-testing-library";

import { Navigation } from "../Navigation";

const mockStore = configureStore([]);

describe("Navigation Component", () => {
  it("should render in the cat state", () => {
    const store = mockStore({
      query: "cat"
    });

    const { container, getByText } = render(
      <Provider store={store}>
        <Navigation />
      </Provider>
    );

    expect(getByText("Dog Search").disabled).toBe(false);
    expect(getByText("Cat Search").disabled).toBe(true);

    expect(container).toMatchSnapshot();
  });

  it("should render in the dog state", () => {
    const store = mockStore({
      query: "dog"
    });

    const { container, getByText } = render(
      <Provider store={store}>
        <Navigation />
      </Provider>
    );

    expect(getByText("Dog Search").disabled).toBe(true);
    expect(getByText("Cat Search").disabled).toBe(false);

    expect(container).toMatchSnapshot();
  });
});
