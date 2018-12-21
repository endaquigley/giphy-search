import React from "react";
import { render } from "react-testing-library";

import App from "../App";
import { Provider } from "../store";

import "react-testing-library/cleanup-after-each";

describe("App Component", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Provider>
        <App />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
