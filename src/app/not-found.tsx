"use client";
import React from "react";
import HeroButton from "./_components/_buttons/HeroButton";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen pt-20 text-center">
      <div className="w-[90%] lg:w-4/6 m-auto">
        <div className="">
          <div className="text-[15rem] font-semibold text-gray-300">404</div>
          <div className="text-4xl text-gray-400 font-bold">
            Sorry, the page your're looking for doesn't exist
          </div>
          <div className="mt-12">
            <a href="/">
              <HeroButton>Let me show you something different</HeroButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
