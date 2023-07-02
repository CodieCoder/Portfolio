import NextJs from "@/app/icons/techStack/NextJs.png";
import Javascript from "@/app/icons/techStack/javascript.png";
import ReactJs from "@/app/icons/techStack/react.png";
import JQuery from "@/app/icons/techStack/jquery.png";
import Html from "@/app/icons/techStack/html.png";
import Css from "@/app/icons/techStack/css.png";
import Sass from "@/app/icons/techStack/sass.png";
import Less from "@/app/icons/techStack/less.png";
import Tailwind from "@/app/icons/techStack/tailwindcss.png";
import AntDesign from "@/app/icons/techStack/antdesign.png";
import Bootstrap from "@/app/icons/techStack/bootstrap.png";
import NodeJs from "@/app/icons/techStack/nodejs.png";
import NestJs from "@/app/icons/techStack/nestjs.png";
import PHP from "@/app/icons/techStack/php.png";
import ExpressJs from "@/app/icons/techStack/express.png";
import MySQL from "@/app/icons/techStack/mysql.png";
import PostgreSql from "@/app/icons/techStack/postgresql.png";
import MongoDB from "@/app/icons/techStack/mongodb.png";

enum TechStackEnum {
  All = "All",
  Frontend = "Front-End",
  Backend = "Back-End",
  Database = "Database",
}
export const TechStackCategories = {
  All: [
    { name: "Javascript", icon: Javascript, type: TechStackEnum.Frontend },
    { name: "NextJs", icon: NextJs, type: TechStackEnum.Frontend },
    { name: "ReactJs", icon: ReactJs, type: TechStackEnum.Frontend },
    { name: "JQuery", icon: JQuery, type: TechStackEnum.Frontend },
    { name: "HTML", icon: Html, type: TechStackEnum.Frontend },
    { name: "CSS", icon: Css, type: TechStackEnum.Frontend },
    { name: "Sass", icon: Sass, type: TechStackEnum.Frontend },
    { name: "Less", icon: Less, type: TechStackEnum.Frontend },
    { name: "Tailwind", icon: Tailwind, type: TechStackEnum.Frontend },
    { name: "AntDesign", icon: AntDesign, type: TechStackEnum.Frontend },
    { name: "Bootstrap", icon: Bootstrap, type: TechStackEnum.Frontend },
    { name: "NodeJs", icon: NodeJs, type: TechStackEnum.Backend },
    { name: "NestJs", icon: NestJs, type: TechStackEnum.Backend },
    { name: "PHP", icon: PHP, type: TechStackEnum.Backend },
    { name: "ExpressJs", icon: ExpressJs, type: TechStackEnum.Backend },
    { name: "MySQL", icon: MySQL, type: TechStackEnum.Database },
    { name: "PostgreSql", icon: PostgreSql, type: TechStackEnum.Database },
    { name: "MongoDB", icon: MongoDB, type: TechStackEnum.Database },
  ],
  FE: [
    { name: "AntDesign", icon: AntDesign, type: TechStackEnum.Frontend },
    { name: "Bootstrap", icon: Bootstrap, type: TechStackEnum.Frontend },
    { name: "Javascript", icon: Javascript, type: TechStackEnum.Frontend },
    { name: "NextJs", icon: NextJs, type: TechStackEnum.Frontend },
    { name: "ReactJs", icon: ReactJs, type: TechStackEnum.Frontend },
    { name: "JQuery", icon: JQuery, type: TechStackEnum.Frontend },
    { name: "HTML", icon: Html, type: TechStackEnum.Frontend },
    { name: "CSS", icon: Css, type: TechStackEnum.Frontend },
    { name: "Sass", icon: Sass, type: TechStackEnum.Frontend },
    { name: "Less", icon: Less, type: TechStackEnum.Frontend },
    { name: "Tailwind", icon: Tailwind, type: TechStackEnum.Frontend },
  ],
  BE: [
    { name: "NodeJs", icon: NodeJs, type: TechStackEnum.Backend },
    { name: "NestJs", icon: NestJs, type: TechStackEnum.Backend },
    { name: "PHP", icon: PHP, type: TechStackEnum.Backend },
    { name: "ExpressJs", icon: ExpressJs, type: TechStackEnum.Backend },
  ],
  DB: [
    { name: "MySQL", icon: MySQL, type: TechStackEnum.Database },
    { name: "PostgreSql", icon: PostgreSql, type: TechStackEnum.Database },
    { name: "MongoDB", icon: MongoDB, type: TechStackEnum.Database },
  ],
};
