import React, { useReducer } from "react";
import { reducer, initialState } from "./reducer";

const Store = React.memo(({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return children({ state, dispatch });
});

export default Store;
