"use client";
import React from "react";

const Scroller = () => {
  const [showScroller, setShowScroller] = React.useState(false);

  const handleVisibleButton = () => {
    const position = window.scrollY;
    if (position > window.screen.height - 200) {
      setShowScroller(true);
    } else {
      setShowScroller(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(function mount() {
    window.addEventListener("scroll", handleVisibleButton);

    return function unMount() {
      window.removeEventListener("scroll", handleVisibleButton);
    };
  }, []);

  return (
    <div
      className={`fixed flex bottom-2 right-2 lg:bottom-5 lg:right-10 rounded-full bg-gray-800/[0.5] lg:bg-transparent hover:bg-gray-800 w-12 h-12 hover:border-2 cursor-pointer border-teal-700 text-teal-500 ${
        showScroller ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="m-auto"
        viewBox="0 0 16 16"
      >
        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
      </svg>
    </div>
  );
};

export default Scroller;
