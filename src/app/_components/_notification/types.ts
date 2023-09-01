import { NotificationTypeEnum } from "./constants"

export type INotificationHandler = (
  content: React.ReactNode,
  type: NotificationTypeEnum,
  duration?: number
) => React.ReactNode

export type INotificationMessage = (
  content: React.ReactNode,
  duration?: number
) => React.ReactNode

export interface INotificatioMessageTypes {
  Default: INotificationMessage
  Error: INotificationMessage
  Success: INotificationMessage
  Warning: INotificationMessage
}
