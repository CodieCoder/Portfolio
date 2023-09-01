import axios from "axios"
import { IDeviceInfo, IInteraction, IMessage } from "./constants"

export enum AccessTokenEnum {
  localStorageKey = "access_token",
}

/**
 * @description a wrapper function for Axios. It checks for access_token
 * from the localStorage and if there's none, requests for one.
 */
const ApiClient = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  baseURL:
    process.env.NEXT_PUBLIC_SERVER_URL ||
    "https://wandering-red-jeans.cyclic.app",
  headers: { "Content-Type": "application/json" },
})

/**
 * @description - adds access_token to the localStorage
 * @param data - string. The access_token to add to localStorage
 */
export const addAccessToken = (data: string) => {
  if (!data) return
  try {
    localStorage.setItem(AccessTokenEnum.localStorageKey, JSON.stringify(data))
  } catch (error) {
    //failed
  }
}

/**
 * @description - gets the access_token from localStorage.
 * @returns - the access_token (string) or false if there's none
 */
export const getAccessToken = (): string | false => {
  const token = localStorage.getItem(AccessTokenEnum.localStorageKey)
  if (token) {
    return token
  } else {
    return false
  }
}

export const firstVisit = async (deviceInfo: IDeviceInfo) => {
  try {
    const addVisitor = await ApiClient.post("visitors", {
      deviceInfo,
    })
    if (addVisitor.data) {
      addAccessToken(addVisitor.data?.access_token)
      return addVisitor.data?.access_token
    }
  } catch (error) {
    return
  }
}

export const apiPost = async (
  url: string,
  data: IInteraction | IMessage,
  deviceInfo: IDeviceInfo
) => {
  const token = getAccessToken()
  if (token) {
    const config = {
      headers: { Authorization: "Bearer " + token },
    }
    try {
      await ApiClient.post(url, data, config)
      return true
    } catch (error) {
      return false
    }
  } else {
    const another_token = await firstVisit(deviceInfo)
    if (another_token) {
      const config = {
        headers: { Authorization: "Bearer " + another_token },
      }
      try {
        await ApiClient.post(url, data, config)
        return true
      } catch (error) {
        return false
      }
    }
  }
  return false
}
