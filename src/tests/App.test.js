import React from "react";
import { Provider } from "react-redux";
import { render } from "react-testing-library";

import { App } from "../App";
import { store } from "../store";

describe("App Component", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
