import React from "react";
import Section from "../_sectionContainer";
import { SectionTypes } from "../_sectionContainer/constant";
import HeroButton from "../_buttons/HeroButton";
import { TechStackCategories } from "../_icons";
import Image from "next/image";
import { IIcon } from "./types";
import { TechStackEnum, techStack_head } from "./constants";

const About: React.FC = () => {
  const [selectedStack, setSelectedStack] = React.useState<TechStackEnum>(
    TechStackEnum.All
  );

  const TechStack_head = () => {
    const StackFilters = [
      { lg: TechStackEnum.All, md: "All", stack: TechStackCategories.All },
      ...techStack_head,
    ];
    return (
      <div className='lg:w-4/5 m-auto grid grid-cols-4 font-bold text-teal-500'>
        {StackFilters.map((head, index) => (
          <div key={index}>
            <span
              className={`text-lg hidden lg:block text-center cursor-pointer underline-offset-8 hover:underline ${
                selectedStack === head.lg ? "underline underline-offset-8" : ""
              }`}
              onClick={() => setSelectedStack(head.lg)}
            >
              {head.lg}
            </span>
            <span
              className='text-center lg:hidden'
              onClick={() => setSelectedStack(head.lg)}
            >
              {head.md}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const TechStack_Items = (): React.ReactNode => {
    const techs: IIcon[] = [];
    if (selectedStack === TechStackEnum.All) {
      techStack_head.forEach((tech) => {
        techs.push(
          ...tech.stack.map((stack) => ({
            name: stack.name,
            icon: stack.icon,
            type: stack.type,
          }))
        );
      });
    } else {
      techStack_head.forEach((tech) => {
        if (tech.lg === selectedStack) {
          techs.push(
            ...tech.stack.map((stack) => ({
              name: stack.name,
              icon: stack.icon,
              type: stack.type,
            }))
          );
        }
      });
    }

    return techs.map((stack, index) => {
      return (
        <div
          className='flex m-1 mt-8 mb-1 border-teal-700 p-2 rounded h-[4.4rem] hover:border cursor-pointer'
          key={index}
        >
          <div className='bg-gray-100 rounded-full w-[3rem] h-[3rem] border-l-neutral-50'>
            <Image
              src={stack.icon}
              alt={stack.name}
              className='m-auto rounded-full w-[3rem] h-[3rem] overflow-hidden bg-transparent'
            />
          </div>
          <div className='ml-2'>
            <span className='font-semibold text-lg text-teal-500'>
              {stack.name}
            </span>
            <br />
            <span className='text-gray-400'>{stack.type}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <Section.Container id='about' type={SectionTypes.About}>
      <br />
      <br />
      <Section.Title className='pl-2 pt-10 text-4xl'>About me</Section.Title>
      <hr className='w-4/6 lg:w-3/12 border-teal-900 mt-6' />
      <div className='mt-10 w-[90%] mx-auto'>
        <div className='font-bold text-gray-300'>
          With a keen eye for detail and a commitment to innovation, I strive to
          create solutions that not only meet the technical requirements but
          also provide a delightful user experience. Whether it's optimizing
          performance, implementing scalable architectures, or staying
          up-to-date with the latest industry trends, I am dedicated to pushing
          the boundaries of what's possible in web development. I look forward
          to utilizing my skills and experience to create impactful solutions
          that actually make a difference in people's lives.
          <br />
          <br />
          <a href='#experience'>
            <HeroButton>My experience</HeroButton>
          </a>
        </div>
        <div className='m-auto mt-10 lg:w-2/3 lg:h-[700px]'>
          <div className='text-2xl font-semibold text-teal-500 text-center'>
            Tech stack
          </div>
          <br />
          <TechStack_head />
          <div className='lg:w-11/12 m-auto mt-5 grid grid-cols-2 md:grid-cols-3'>
            <TechStack_Items />
          </div>
        </div>
      </div>
    </Section.Container>
  );
};

export default About;
