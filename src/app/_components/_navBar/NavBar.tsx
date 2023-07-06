"use client"
import React from "react"
import Menus from "./Menus"
import ToggleButton from "./ToggleButton"
import useGlobalProvider from "@/app/_provider"
import { AnimatedHead } from "./constants"

export const NavBar = () => {
  const { isNavbarOpen, baseUrl } = useGlobalProvider()

  const HeaderSlider = () => {
    return (
      <h4 className="animatedHead">
        Mr. Nonso
        <span className="sliderAnim">
          {AnimatedHead.map((head, index) => (
            <span key={index} className="slider__word text-gray-400">
              {head}
            </span>
          ))}
        </span>
      </h4>
    )
  }

  return (
    <nav className="w-full bg-gray-800 shadow fixed top-0 left-0 right-0">
      <div className="justify-between px-4 mx-auto lg:w-full md:items-center md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href={`${baseUrl}#`}>
            <HeaderSlider />
          </a>

          <div className="md:hidden">
            <ToggleButton />
          </div>
        </div>
        <div className="flex">
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              isNavbarOpen ? "block" : "hidden"
            }`}
          >
            <Menus />
          </div>
        </div>
      </div>
    </nav>
  )
}
