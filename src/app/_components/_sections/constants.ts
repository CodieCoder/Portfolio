import { TechStackCategories } from "../_icons";
import ProjectsScreenshotList from "../_icons/projects";
import { ITechStacks } from "./types";

export enum TechStackEnum {
  All = "All",
  Frontend = "Front-End",
  Backend = "Back-End",
  Database = "Database",
}

export const ExperiencesList = [
  {
    year: "01/2025 - Present",
    role: "Front-end Developer",
    company: "Horizon Over The Edge Limited",
    activities: [
      "Collaborating with the team to create and maintain ERP, AI and machine learning app.",
      "Working in front-end using javascript, ReactJs and collaborating with the back-end team.",
      "Collaborating with the team to create and maintain ERP, AI and machine learning app.",
      "Working in front-end using javascript, ReactJs and collaborating with the back-end team.",
      "Collaborating with the team to create and maintain ERP, AI and machine learning app.",
    ],
  },
  {
    year: "01/2025 - Present",
    role: "Fullstack Developer",
    company: "Horizon Over The Edge Limited",
    activities: [
      "Collaborating with the team to create and maintain ERP, AI and machine learning app.",
      "Working in front-end using javascript, ReactJs and collaborating with the back-end team.",
      "Collaborating with the team to create and maintain ERP, AI and machine learning app.",
      "Working in front-end using javascript, ReactJs and collaborating with the back-end team.",
      "Collaborating with the team to create and maintain ERP, AI and machine learning app.",
      "Working in front-end using javascript, ReactJs and collaborating with the back-end team.",
    ],
  },
  {
    year: "01/2025 - Present",
    role: "Front-end Developer",
    company: "Horizon Over The Edge Limited",
    activities: [
      "Collaborating with the team to create and maintain ERP, AI and machine learning app.",
      "Working in front-end using javascript, ReactJs and collaborating with the back-end team.",
      "Collaborating with the team to create and maintain ERP, AI and machine learning app.",
      "Working in front-end using javascript, ReactJs and collaborating with the back-end team.",
      "Collaborating with the team to create and maintain ERP, AI and machine learning app.",
      "Working in front-end using javascript, ReactJs and collaborating with the back-end team.",
    ],
  },
  {
    year: "01/2025 - Present",
    role: "Front-end Developer",
    company: "Horizon Over The Edge Limited",
    activities: [
      "Collaborating with the team to create and maintain ERP, AI and machine learning app.",
      "Working in front-end using javascript, ReactJs and collaborating with the back-end team.",
      "Collaborating with the team to create and maintain ERP, AI and machine learning app.",
      "Collaborating with the team to create and maintain ERP, AI and machine learning app.",
      "Working in front-end using javascript, ReactJs and collaborating with the back-end team.",
    ],
  },
];

export const techStack_head: ITechStacks[] = [
  {
    lg: TechStackEnum.Frontend,
    md: "FE",
    stack: TechStackCategories.FE,
  },
  {
    lg: TechStackEnum.Backend,
    md: "BE",
    stack: TechStackCategories.BE,
  },
  {
    lg: TechStackEnum.Database,
    md: "DB",
    stack: TechStackCategories.DB,
  },
];

export const projectsList = [
  {
    name: "Siteology One",
    webiste: "siteologyone.come",
    screenshot: ProjectsScreenshotList.Site1,
    github: "freecodecat/manificient/siteologyone",
  },
  {
    name: "Magnifient Opt",
    webiste: "siteologyomanificientne.come",
    screenshot: ProjectsScreenshotList.Site2,
    github: "manificient",
  },
  {
    name: "Ultimate Premium",
    webiste: "siteologyone.come",
    screenshot: ProjectsScreenshotList.Site3,
    github: "ultimatepremium",
  },
];

export enum SocialIconsEnum {
  LinkedIn = "LinkedIn",
  Twitter = "Twitter",
  GitHub = "Github",
}

export const SocialIconList = [
  {
    name: SocialIconsEnum.GitHub,
    link: "github.com",
    color: "hover:text-gray-100",
  },
  {
    name: SocialIconsEnum.LinkedIn,
    link: "linkedin.com",
    color: "hover:text-[#0a66c2]",
  },
  {
    name: SocialIconsEnum.Twitter,
    link: "twitter.com",
    color: "hover:text-sky-400",
  },
];
