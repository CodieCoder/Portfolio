import React from "react"

const Alert: React.FC<{
  type?: "success" | "error"
  showAlert: boolean
  setShowAlert: () => void
  children: React.ReactNode
}> = ({ showAlert, setShowAlert, children, type }) => {
  const colorType = () => {
    switch (type) {
      case "success":
        return { bg: "bg-teal-200", txt: "text-gray-800" }
      case "error":
        return { bg: "bg-red-200", txt: "text-gray-800" }
      default:
        return { bg: "bg-blueGray-500", txt: "text-white" }
    }
  }

  const bg = colorType()
  return (
    <>
      {showAlert ? (
        <div
          className={` px-2 py-4 border-0 rounded relative mb-4 ${bg.bg} ${bg.txt}`}
        >
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8">{children}</span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() => setShowAlert()}
          >
            <span>×</span>
          </button>
        </div>
      ) : null}
    </>
  )
}

export default Alert
