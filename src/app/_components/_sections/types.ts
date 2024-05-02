import { StaticImageData } from "next/dist/client/image";
import { TechStackEnum } from "./constants";

export interface IIcon {
  name: string;
  icon: StaticImageData;
  type: TechStackEnum;
}

export interface ITechStacks {
  lg: TechStackEnum;
  md: string;
  stack: IIcon[];
}

export interface IProjectsRender {
  projects: IProjectList[];
}

export interface IProjectList {
  name: string;
  website: string;
  screenshot: StaticImageData;
  github: string;
}
