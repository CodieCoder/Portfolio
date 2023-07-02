import React from "react";
import { GlobalContext } from "./Context";

const useGlobalProvider = () => {
  return React.useContext(GlobalContext);
};

export default useGlobalProvider;
