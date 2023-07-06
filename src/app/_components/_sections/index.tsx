import About from "./about"
import HeroButton from "../_buttons/HeroButton"
import Experience from "./experience"
import Projects from "./projects"
import Contact from "./contact"
import Scroller from "./scroller"
import Certifications from "./certifications"

const Body = () => {
  return (
    <div>
      <div className="flex min-h-screen pb-10">
        <div id="home" className="font-bold w-[90%] lg:w-4/6 m-auto">
          <div className="text-teal-200 text-lg">Hello, my name is </div>
          <br />
          <div className="text-gray-300 lg:text-5xl text-4xl">
            Chukwunonso Emmanuel Nnalue.
          </div>
          <br />
          <div className="text-gray-400 lg:text-5xl text-2xl">
            I build amazing products through technology.
          </div>
          <br />
          <div className="w-11/12 lg:w-4/6 text-gray-400">
            I'm a passionate software engineer with expertise in crafting
            exceptional digital experinces. With a specialization in building
            robust backend systems, captivating frontend interfaces and seamless
            mobile applications, I take pride in delivering accessible and
            human-centered products.
          </div>
          <div className="mt-10">
            <a href={"#contact"}>
              <HeroButton>Contact me</HeroButton>
            </a>
          </div>
        </div>
      </div>

      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Scroller />
      <div className=" bottom-0 p-2 bg-gray-900 text-center w-full text-teal-200 text-sm">
        &copy; {new Date().getFullYear()}. Chukwunonso E. Nnalue
      </div>
    </div>
  )
}

export default Body
