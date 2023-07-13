export enum EndpointEnum {
  interaction = "interaction",
  message = "message",
}

export interface IDeviceInfo {
  browserFullVersion: string
  browserMajorVersion: string
  browserName: string
  engineName: string
  engineVersion: string
  isBrowser: boolean
  osName: string
  osVersion: string
  userAgent: string
}
export enum ButtonClickedEnum {
  About = "About",
  Certifications = "Certifications",
  Contact = "Contact",
  Experience = "Experience",
  Projects = "Projects",
}

export interface IInteraction {
  buttonClicked: string
  description: string
  currentUrl: string
}

export interface IMessage {
  name: string
  email: string
  subject: string
  message: string
}
