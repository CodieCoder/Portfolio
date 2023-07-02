import React from "react";
import { SectionTypes } from "./constant";

const Container: React.FC<{
  children: React.ReactNode;
  id: string;
  type: SectionTypes;
}> = ({ children, id, type }) => {
  return (
    <div className={`min-h-screen max-w-screen ${type}`} id={id}>
      <div className="w-[98%] lg:w-4/6  m-auto">{children}</div>
    </div>
  );
};

const Title: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={`font-bold text-teal-200 ${className ? className : ""}`}>
      {children}
    </div>
  );
};

const Section = { Container, Title };

export default Section;
