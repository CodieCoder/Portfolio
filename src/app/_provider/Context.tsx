import React from "react";

export const GlobalContext = React.createContext<IGlobalContext>({
  isNavbarOpen: false,
  navBarToggler: () => {},
  baseUrl: "/",
});
