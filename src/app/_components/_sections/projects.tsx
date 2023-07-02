import React from "react";
import Image from "next/image";
import Section from "../_sectionContainer";
import { SectionTypes } from "../_sectionContainer/constant";
import HeroButton from "../_buttons/HeroButton";
import { projectsList } from "./constants";
import { IProjectsRender } from "./types";

const ProjectRender: React.FC<IProjectsRender> = ({ projects }) => {
  return projects.map((project, index) => (
    <div className="font-semibold" key={index}>
      <Image
        src={project.screenshot}
        alt="site1"
        className="rounded-lg border-4 border-transparent hover:border-teal-500"
      />

      <div className="float-left mt-6 ml-4 text-lg text-gray-300">
        {project.name}
      </div>
      <div className="float-right">
        <HeroButton
          className="ml-8  mt-4"
          onClick={() => {
            window.open(`https://${project.webiste}`, "_blank");
          }}
        >
          View website
        </HeroButton>
        <HeroButton
          className="ml-8 mt-4"
          onClick={() => {
            window.open(`https://${project.github}`, "_blank");
          }}
        >
          View source
        </HeroButton>
      </div>
    </div>
  ));
};

const Projects = () => {
  return (
    <Section.Container id="projects" type={SectionTypes.Projects}>
      <br />
      <br />
      <Section.Title className="pt-10 text-4xl">Projects</Section.Title>
      <hr className="w-4/6 lg:w-3/12 border-teal-600 mt-6" />
      <div className="mt-10 grid lg:grid-cols-2 gap-12 pb-8">
        <ProjectRender projects={projectsList} />
      </div>
    </Section.Container>
  );
};

export default Projects;
