import React from "react";
import { render } from "react-testing-library";

import App from "../App";
import useStore from "../hooks/useStore";
import { Provider } from "../StoreContext";

import "react-testing-library/cleanup-after-each";

const Store = React.memo(({ children }) => {
  return children(useStore());
});

describe("App Component", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Store>
        {([state, dispatch]) => (
          <Provider value={{ state, dispatch }}>
            <App />
          </Provider>
        )}
      </Store>
    );

    expect(container).toMatchSnapshot();
  });
});
