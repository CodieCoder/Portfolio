import React from "react"
import { IGlobalContext } from "./types"

export const GlobalContext = React.createContext<IGlobalContext>({
  isNavbarOpen: false,
  navBarToggler: () => {},
  baseUrl: "/",
  addInteraction: () => {},
  sendMessage: () => {
    new Promise((resolve) => resolve)
  },
  sendMessageLoading: false,
  showNotification: false,
  setShowNotification: () => {},
  setShowAlert: () => {},
})
