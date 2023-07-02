import React from "react";
import { MenuItems } from "./constants";
import HeroButton from "../_buttons/HeroButton";
import useGlobalProvider from "@/app/_provider";
const Menus = () => {
  const { navBarToggler, baseUrl } = useGlobalProvider();
  return (
    <div className="text-sm lg:flex-grow">
      <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
        {MenuItems.map(
          (menu: { title: string; link: string }, index: number) => {
            return (
              <li className="font-semibold" key={index} onClick={navBarToggler}>
                <a
                  href={`${baseUrl}${menu.link}`}
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:underline underline-offset-8  mr-4"
                >
                  {menu.title}
                </a>
              </li>
            );
          }
        )}

        <li>
          <HeroButton>Download my resume</HeroButton>
        </li>
      </ul>
    </div>
  );
};

export default Menus;
