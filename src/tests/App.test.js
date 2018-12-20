import React from "react";
import { render } from "react-testing-library";

import App from "../App";
import Store from "../Store";
import { Provider } from "../StoreContext";

import "react-testing-library/cleanup-after-each";

describe("App Component", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Store>
        {({ state, dispatch }) => (
          <Provider value={{ state, dispatch }}>
            <App />
          </Provider>
        )}
      </Store>
    );

    expect(container).toMatchSnapshot();
  });
});
