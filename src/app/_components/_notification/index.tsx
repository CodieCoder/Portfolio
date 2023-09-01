import React from "react"

interface INotification {
  content: React.ReactNode
}
const Notification: React.FC<INotification> = ({ content }) => {
  return (
    <div
      id="myToast"
      className="fixed right-10 bottom-10 px-5 py-4 border-r-8 border-blue-500 bg-white drop-shadow-lg"
    >
      <div className="text-sm">
        <div></div>
        <span className="mr-2 inline-block px-3 py-1 rounded-full bg-blue-500 text-white font-extrabold">
          i
        </span>
        {content}
      </div>
    </div>
  )
}

export default Notification
