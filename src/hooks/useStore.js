import { useReducer } from "react";
import { reducer, initialState } from "../reducer";

const useStore = () => {
  return useReducer(reducer, initialState);
};

export default useStore;
