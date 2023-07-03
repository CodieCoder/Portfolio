import React from "react"
import Section from "../_sectionContainer"
import { SectionTypes } from "../_sectionContainer/constant"
import HeroButton from "../_buttons/HeroButton"
import { ExperiencesList } from "./constants"

const Experience = () => {
  return (
    <Section.Container id="experience" type={SectionTypes.Experience}>
      <br />
      <br />
      <Section.Title className="pt-10 pl-2 text-4xl">Experience</Section.Title>
      <hr className="w-4/6 lg:w-3/12 border-teal-600 mt-6" />
      <div className="mt-10">
        <div className="grid lg:grid-cols-2">
          {ExperiencesList.map((experience, index) => (
            <div className="mt-5 ml-2 lg:ml-10" key={index}>
              <div className="flex">
                <div className="flex text-lg font-bold rounded-full bg-teal-400 w-16 h-9 lg:w-9 lg:h-9  items-center justify-center content-center">
                  {index + 1}
                </div>
                <div className="ml-2 lg:ml-5 text-[1.2rem] font-semibold text-teal-400">
                  <span>{experience.company} - </span>
                  <span className="text-lg text-teal-600">
                    {experience.location}
                  </span>
                </div>
                <div className="ml-8 font-normal text-gray-300">
                  {experience.year}
                </div>
              </div>
              <div className="font-semibold ml-10 lg:ml-14 text-gray-400">
                {experience.role}
              </div>
              <div className="border-l border-teal-700  pl-6 lg:pl-14 ml-4 font-bold text-gray-300">
                {experience.activities.map((activity, index) => (
                  <li className="flex" key={index}>
                    <div className="mt-0.5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1"
                        stroke="currentColor"
                        className="mr-3 h-4 w-4 text-primary dark:text-primary-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>{activity}</div>
                  </li>
                ))}
              </div>
            </div>
          ))}
        </div>
        <br />
        <div className="h-20 text-center mt-10 font-bold">
          <a
            href="https://github.com/CodieCoder/CV/blob/cc67f9ca7b7a1a346748ad1e5106c81c89e8c08e/CV%20-%20Nonso%20Nnlaue.pdf"
            target="_blank"
          >
            <HeroButton>Download my resume</HeroButton>
          </a>
        </div>
      </div>
    </Section.Container>
  )
}

export default Experience
