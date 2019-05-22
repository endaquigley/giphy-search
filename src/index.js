import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { App } from "./App";
import { store } from "./store";

import "./index.css";

const Index = React.memo(() => (
  <Provider store={store}>
    <App />
  </Provider>
));

ReactDOM.render(<Index />, document.getElementById("root"));
