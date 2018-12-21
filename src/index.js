import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Provider } from "./store";

import "./index.css";

const Index = React.memo(() => (
  <Provider>
    <App />
  </Provider>
));

ReactDOM.render(<Index />, document.getElementById("root"));
