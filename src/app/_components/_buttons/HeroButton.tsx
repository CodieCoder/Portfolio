import React from "react";
import { HeroButton_ClassName } from "./constants";

interface IHeroButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: React.ReactNode;
}

const HeroButton: React.FC<IHeroButton> = (props) => {
  return (
    <button
      {...props}
      className={`${HeroButton_ClassName.join(",")} ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </button>
  );
};

export default HeroButton;
