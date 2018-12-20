import { createContext } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;

export { Provider };
export default StoreContext;
