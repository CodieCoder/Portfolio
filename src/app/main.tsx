"use client";

import React from "react";
import { NavBar } from "./_components/_navBar/NavBar";
import GlobalProvider from "./_provider/Provider";

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <GlobalProvider>
      <div className="w-full bg-gray-800 shadow min-h-screen" id="navbar">
        <NavBar />
        <div className="w-full bg-gray-800 m-auto mt-12">{children}</div>
      </div>
    </GlobalProvider>
  );
};

export default Main;
