import React from "react"
import Section from "../_sectionContainer"
import { SectionTypes } from "../_sectionContainer/constant"
import { CertificationList } from "./constants"
import HeroButton from "../_buttons/HeroButton"
import Image from "next/image"

const Certifications = () => {
  return (
    <Section.Container id="certifications" type={SectionTypes.Certifications}>
      <br />
      <br />
      <Section.Title className="pt-10 pl-2 text-4xl">
        Certifications
      </Section.Title>
      <hr className="w-4/6 lg:w-3/12 border-teal-600 mt-6" />
      <div className="mt-10">
        <div className="grid lg:grid-cols-2">
          {CertificationList.map((certification, index) => (
            <div className="mt-5 ml-2 lg:ml-10 p-6" key={index}>
              <div className="flex">
                <div className="h-20 w-20">
                  <Image
                    src={certification.logo}
                    alt={certification.school}
                    className="rounded h-18 w-20 "
                  />
                </div>
                <div className="ml-6">
                  <div className="font-bold text-teal-400">
                    {certification.name}
                  </div>
                  <div className="text-gray-300 font-semibold">
                    {certification.school}
                  </div>
                  <div className="text-gray-300">{certification.date}</div>
                  <br />
                  <HeroButton
                    onClick={() => window.open(certification.link, "_blank")}
                  >
                    Show credential
                  </HeroButton>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
      </div>
    </Section.Container>
  )
}

export default Certifications
