import React from "react";
import { GlobalContext } from "./Context";

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);
  const [baseUrl, setBaseUrl] = React.useState("/");

  //Nav bar toggler (for mobile)
  const navBarToggler = () => setIsNavbarOpen((prev) => !prev);

  const memoValues = React.useMemo(
    () => ({ isNavbarOpen, baseUrl }),
    [isNavbarOpen, baseUrl]
  );

  React.useEffect(() => {
    //get the base URL
    const baseUrl = `${window.location.protocol}//${window.location.host}`;
    setBaseUrl(baseUrl);
  }, []);

  return (
    <GlobalContext.Provider value={{ ...memoValues, navBarToggler }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
