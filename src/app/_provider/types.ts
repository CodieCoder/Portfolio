import { ButtonClickedEnum, IMessage } from "@/api/visit/constants"

export interface IGlobalContext {
  isNavbarOpen: boolean
  navBarToggler: () => void
  baseUrl: string
  addInteraction: (buttonClicked: string, description: string) => void
  sendMessage: (messageObject: IMessage) => void
  sendMessageLoading: boolean
  showNotification: boolean
  setShowNotification: React.Dispatch<React.SetStateAction<boolean>>
  showAlert?: { isSuccess: boolean }
  setShowAlert: React.Dispatch<
    React.SetStateAction<
      | {
          isSuccess: boolean
        }
      | undefined
    >
  >
}
