import React from "react"
import { GlobalContext } from "./Context"
import { deviceDetect } from "react-device-detect"
import { apiPost, firstVisit } from "@/api/visit"
import {
  ButtonClickedEnum,
  EndpointEnum,
  IDeviceInfo,
  IInteraction,
  IMessage,
} from "@/api/visit/constants"

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(false)
  const [baseUrl, setBaseUrl] = React.useState("/")
  const [deviceInfo, setDeviceInfo] = React.useState<IDeviceInfo>()
  const [sendMessageLoading, setSendMessageLoading] = React.useState(false)
  const [showNotification, setShowNotification] = React.useState(false)
  const [showAlert, setShowAlert] = React.useState<
    { isSuccess: boolean } | undefined
  >()

  //Nav bar toggler (for mobile)
  const navBarToggler = () => setIsNavbarOpen((prev) => !prev)

  const memoValues = React.useMemo(
    () => ({ isNavbarOpen, baseUrl, showAlert }),
    [isNavbarOpen, baseUrl, showAlert]
  )

  const identifyUser = async (deviceInfo: IDeviceInfo) => {
    await firstVisit(deviceInfo)
  }

  /**
   * @description - sends user's interaction of the app to the server
   * @returns - doesn't return anything.
   */
  const addInteraction = (buttonClicked: string, description = "") => {
    const currentUrl = window.location.href || ""
    const dataToPost: IInteraction = {
      buttonClicked,
      description,
      currentUrl,
    }
    deviceInfo && apiPost(EndpointEnum.interaction, dataToPost, deviceInfo)
  }

  /**
   * @description - sends message to the app to the server
   * @returns - true or false.
   */
  const sendMessage = async (messageObject: IMessage) => {
    setSendMessageLoading(true)
    const device = deviceInfo!
    await apiPost(EndpointEnum.message, messageObject, device)
      .then((data) =>
        data
          ? setShowAlert({
              isSuccess: true,
            })
          : setShowAlert({
              isSuccess: false,
            })
      )
      .catch(() =>
        setShowAlert({
          isSuccess: false,
        })
      )
      .finally(() => {
        setSendMessageLoading(false)
      })
  }

  React.useEffect(() => {
    //set device info
    setDeviceInfo(deviceDetect(undefined))
    //get the base URL
    const baseUrl = `${window.location.protocol}//${window.location.host}`
    setBaseUrl(baseUrl)
  }, [])

  React.useEffect(() => {
    deviceInfo && identifyUser(deviceInfo)
  }, [deviceInfo])

  return (
    <GlobalContext.Provider
      value={{
        ...memoValues,
        navBarToggler,
        addInteraction,
        sendMessage,
        sendMessageLoading,
        showNotification,
        setShowNotification,
        setShowAlert,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
