import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import useStore from "./hooks/useStore";
import { Provider } from "./StoreContext";

import "./index.css";

const Store = React.memo(({ children }) => {
  return children(useStore());
});

const Index = React.memo(() => (
  <Store>
    {([state, dispatch]) => (
      <Provider value={{ state, dispatch }}>
        <App />
      </Provider>
    )}
  </Store>
));

ReactDOM.render(<Index />, document.getElementById("root"));
