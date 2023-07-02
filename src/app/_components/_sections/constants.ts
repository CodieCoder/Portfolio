import { TechStackCategories } from "../_icons"
import ProjectsScreenshotList from "../_icons/projects"
import { ITechStacks } from "./types"

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
      "Use of state management like Redux, and otherJavaScriptpowerful libraries/frameworks.",
      "Collaborating with the WebRTC team creating great calling feature for web browsers and mobile devices.",
      "Working with the team to create, maintain and expand an IB system for both companies and clients.",
    ],
  },
  {
    year: "01/2020 - 05/2022",
    role: "Fullstack Developer",
    company: "Swiftrader",
    location: "Nigeria",
    activities: [
      "Developing/maintaining the website/app.",
      "Integrating several APIs to fetch financial data and news.",
      "Upgrading the website from landing page to full website powered with Reactjs and Nodejs.",
      "Integrated MySQL database system for data storage",
    ],
  },
  {
    year: "03/2014 - 09/2019",
    role: "Fullstack Developer",
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
    role: "Fullstack Developer",
    company: "Clementus Enterprise",
    location: "Nigeria",
    activities: [
      "Installation and maintenance of CCTV.",
      "Installation and maintenance of Intercom system.",
      "Configuration of PABX systems.",
      "Installation and maintenance of computer networking.",
    ],
  },
]

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
]

export const projectsList = [
  {
    name: "Cryptowise",
    webiste: "cryptowise.netlify.app",
    screenshot: ProjectsScreenshotList.Site1,
    github: "github.com/CodieCoder/cryptoIntel",
  },
  {
    name: "KryptoIntel",
    webiste: "kryptointel.netlify.app/",
    screenshot: ProjectsScreenshotList.Site2,
    github: "github.com/CodieCoder/kryptoIntel-Blockchain",
  },
  {
    name: "NASA Project",
    webiste: "siteologyone.come",
    screenshot: ProjectsScreenshotList.Site3,
    github: "github.com/CodieCoder/NasaProject",
  },
]

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
]
