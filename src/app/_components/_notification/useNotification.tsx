import React from "react"
import { NotificationTypeEnum, NotificationDurationEnum } from "./constants"
import useGlobalProvider from "@/app/_provider"
import Notification from "./"
import { INotificatioMessageTypes, INotificationHandler } from "./types"

const useNotification = () => {
  const { showNotification, setShowNotification } = useGlobalProvider()

  const showNotificationHandler: INotificationHandler = (
    content,
    type,
    duration
  ) => {
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false)
    }, duration)

    return showNotification && <Notification content={content} />
  }

  const message: INotificatioMessageTypes = {
    Default: (content, duration) =>
      showNotificationHandler(content, NotificationTypeEnum.Default, duration),
    Error: (content, duration) =>
      showNotificationHandler(content, NotificationTypeEnum.Error, duration),
    Success: (content, duration) =>
      showNotificationHandler(content, NotificationTypeEnum.Success, duration),
    Warning: (content, duration) =>
      showNotificationHandler(content, NotificationTypeEnum.Warning, duration),
  }

  return message
}

export default useNotification
