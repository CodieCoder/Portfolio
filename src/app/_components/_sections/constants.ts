import { TechStackCategories } from "../_icons";
import ProjectsScreenshotList from "../_icons/projects";
import SchoolsLogo from "../_icons/schools";
import { IProjectList, ITechStacks } from "./types";

export enum TechStackEnum {
  All = "All",
  Frontend = "Front-End",
  Backend = "Back-End",
  Database = "Database",
}

export const ExperiencesList = [
  {
    year: "08/2022 - Present",
    role: "Front-end Developer",
    company: "MBL Hightech",
    location: "Cyprus",
    activities: [
      "Collaborating with the team to create and maintain CRM, Ecommerce and trading web app.",
      "Constant meeting with the team and teamwork.",
      "Working in front-end using JavaScript, Reactjs and collaborating with back-end.",
      "Use of state management like Redux, and other JavaScript powerful libraries/frameworks.",
      "Collaborating with the WebRTC team creating great calling feature for web browsers and mobile devices.",
      "Working with the team to create, maintain and expand an IB system for both companies and clients.",
    ],
  },
  {
    year: "01/2020 - Presnt",
    role: "Fullstack Engineer",
    company: "Freelance",
    location: "Remote",
    activities: [
      "Developed/maintained several websites",
      "Integrated several APIs to fetch external resources.",
      "Upgraded websites from landing page to full websites.",
      "Worked with PHP (vanilla), Javascript, Jquery, Bootstrap, HTML, CSS and MySQL",
      "Integrated MySQL database system for data storage",
    ],
  },
  {
    year: "03/2014 - 09/2019",
    role: "Fullstack Engineer",
    company: "Prolifike Technology",
    location: "Nigeria",
    activities: [
      "Developing and maintaining the back-end of POS systems with PHP and MySQL.",
      "Designing web pages with HTML, CSS and JavaScript.",
      "Developing POS systems for businesses.",
      "Maintaining and upgrade of POS systems.",
      "Researching and analyzing new technologies",
    ],
  },
  {
    year: "2008 - 2013",
    role: "IT Personnel",
    company: "Clementus Enterprise",
    location: "Nigeria",
    activities: [
      "Installation and maintenance of CCTV.",
      "Installation and maintenance of Intercom system.",
      "Configuration of PABX systems.",
      "Installation and maintenance of computer networking.",
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

export const projectsList: IProjectList[] = [
  {
    name: "Cryptowise",
    website: "cryptowise.netlify.app",
    screenshot: ProjectsScreenshotList.Site1,
    github: "github.com/CodieCoder/cryptoIntel",
  },
  {
    name: "AmarAI",
    website: "amar-ai.vercel.app",
    screenshot: ProjectsScreenshotList.Site4,
    github: "github.com/CodieCoder/amarAI-UI",
  },
  {
    name: "KryptoIntel",
    website: "kryptointel.netlify.app/",
    screenshot: ProjectsScreenshotList.Site2,
    github: "github.com/CodieCoder/kryptoIntel-Blockchain",
  },
  {
    name: "NASA Project",
    website: "github.com/CodieCoder/NasaProject",
    screenshot: ProjectsScreenshotList.Site3,
    github: "github.com/CodieCoder/NasaProject",
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
    link: "github.com/CodieCoder",
    color: "hover:text-gray-100",
  },
  {
    name: SocialIconsEnum.LinkedIn,
    link: "linkedin.com/in/nonsonnalue",
    color: "hover:text-[#0a66c2]",
  },
  {
    name: SocialIconsEnum.Twitter,
    link: "twitter.com/SuperKindaBreed",
    color: "hover:text-sky-400",
  },
];

export const CertificationList = [
  {
    name: "NestJs : The Complete Developer's Guide",
    school: "Udemy",
    date: "July 2023",
    link: "https://www.udemy.com/certificate/UC-1dd69971-077b-49a0-a1f4-fd3845da4a03",
    logo: SchoolsLogo.Udemy,
  },
  {
    name: "NodeJs: Complete Nodejs Developer in 2023",
    school: "Udemy",
    date: "January 2023",
    link: "https://www.udemy.com/certificate/UC-fd0b8742-2d12-4dd6-a86b-104770c249ff/",
    logo: SchoolsLogo.Udemy,
  },
  {
    name: "Getting Started with NodeJs",
    school: "Simplilearn",
    date: "October 2022",
    link: "https://simpli.app.link/e/LFhdRjivsub",
    logo: SchoolsLogo.Simplilearn,
  },
  {
    name: "ReactJs for Beginners",
    school: "Simplilearn",
    date: "August 2022",
    link: "https://simpli.app.link/e/sm3HJEebAsb",
    logo: SchoolsLogo.Simplilearn,
  },
];

export const CV_LINK = "https://github.com/CodieCoder/CV";
