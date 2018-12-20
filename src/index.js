import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import useStore from "./hooks/useStore";
import { Provider } from "./StoreContext";

import "./index.css";

const Index = React.memo(() => {
  const [state, dispatch] = useStore();

  return (
    <Provider value={{ state, dispatch }}>
      <App />
    </Provider>
  );
});

ReactDOM.render(<Index />, document.getElementById("root"));
