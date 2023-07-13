import React from "react"
import Section from "../_sectionContainer"
import { SectionTypes } from "../_sectionContainer/constant"
import HeroButton from "../_buttons/HeroButton"
import { SocialIconList } from "./constants"
import { SocialIcons } from "../_icons/socials"
import { IMessage } from "@/api/visit/constants"
import useGlobalProvider from "@/app/_provider"

interface IFormInput {
  name: string
  label: string
  value: string
  setValue: (value: string, name: string) => void
  loading: boolean
}

const FormInput: React.FC<IFormInput> = ({
  name,
  label,
  value,
  setValue,
  loading,
}) => {
  return (
    <div className="relative mt-5 text-gray-300 font-semibold">
      <label className="text-lg" htmlFor={label}>
        {label}
      </label>
      <br />
      <input
        type="text"
        className="mt-5 bg-transparent border-b-2 outline-none border-teal-800 focus:border-teal-400 w-[80%]"
        id={label}
        value={value}
        onChange={(event) => setValue(event.target.value, name)}
        disabled={loading}
      />
    </div>
  )
}

const Contact = () => {
  const [formValues, setFormValues] = React.useState<IMessage>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formError, setFormError] = React.useState(false)

  const setValues = (value: string, name: string) => {
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }
  const { sendMessage, sendMessageLoading } = useGlobalProvider()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setFormError(false)
    e.preventDefault()
    //minimalistic form checker...needs improvement
    if (
      formValues.email.length < 5 ||
      formValues.message.length < 15 ||
      formValues.name.length < 4 ||
      formValues.subject.length < 4
    ) {
      setFormError(true)
      return
    } else {
      //send message
      sendMessage(formValues)
    }
  }

  return (
    <Section.Container id="contact" type={SectionTypes.Contact}>
      <br />
      <br />
      <Section.Title className="pt-10 text-4xl">Contact Me</Section.Title>
      <hr className="w-4/6 lg:w-3/12 border-teal-700 mt-6" />
      <div className="mt-10 pb-10">
        <div className="lg:flex bg-black/[0.5] m-auto w-[98%]  lg:w-[55rem]">
          <div className="p-5 w-[90%] lg:w-[70%] m-auto">
            {formError ? (
              <div className="m-auto text-center text-red-400">
                Error. Please fill the form correctly.
              </div>
            ) : null}
            <form
              className="justify-items-center"
              data-netlify="true"
              name="contactMe"
              onSubmit={onSubmit}
            >
              <FormInput
                name={"name"}
                label="Name"
                setValue={setValues}
                value={formValues.name}
                loading={sendMessageLoading}
              />
              <FormInput
                name={"email"}
                label="Email"
                setValue={setValues}
                value={formValues.email}
                loading={sendMessageLoading}
              />
              <FormInput
                name={"subject"}
                label="Subject"
                setValue={setValues}
                value={formValues.subject}
                loading={sendMessageLoading}
              />
              <br />
              <div className="relative mt-5 text-gray-300 font-semibold">
                <label htmlFor="message-0978" className="text-left">
                  Message
                </label>
                <br />
                <textarea
                  className="mt-5 bg-transparent border-b-2 outline-none border-teal-800 focus:border-teal-400 w-[80%]"
                  id="message-0978"
                  rows={3}
                  value={formValues.message}
                  onChange={(e) => setValues(e.target.value, "message")}
                ></textarea>
              </div>
              <br />
              <div className="text-center m-auto">
                <HeroButton className="w-[70%]" loading={sendMessageLoading}>
                  Send message
                </HeroButton>
              </div>
            </form>
          </div>
          <div className="p-5 lg:bg-black/[0.8] lg:w-[30%]">
            <div className="text-lg font-bold text-gray-300">Contact Info</div>
            <div className="mt-10 w-[90%] m-auto font-semibold">
              <div className="text-teal-300 font-semibold">Email me at : </div>
              <div className="text-gray-400">
                <a href="mailto:nonso4emma@yahoo.com">nonso4emma@yahoo.com</a>
              </div>
              <div className="text-gray-400">
                <a href="mailto:nnalue.nonso@gmail.com">
                  nnalue.nonso@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-10 w-[90%] m-auto font-semibold">
              <div className="text-teal-300 font-semibold">Call me at : </div>
              <div className="text-gray-400">+2347033918932</div>
            </div>
            <div className="flex mt-10">
              {SocialIconList.map((icon, index) => (
                <div className="m-auto" key={index}>
                  <a
                    href={`https://${icon.link}`}
                    className={`text-3xl text-teal-300 ${icon.color}`}
                    target="_blank"
                  >
                    <SocialIcons type={icon.name} size={25} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section.Container>
  )
}

export default Contact
