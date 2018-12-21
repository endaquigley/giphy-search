import React, { createContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

const Store = createContext();

const useStore = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};

const Provider = ({ children }) => {
  const store = useStore(reducer, initialState);
  return <Store.Provider value={store}>{children}</Store.Provider>;
};

export { Store, Provider };
