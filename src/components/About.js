import React from "react";
import me from "../assets/me.jpeg";

export const About = () => {
  return (
    <div
      className="flex flex-col items-start justify-evenly pt-[12%] info-container"
      id="about"
    >
      <div className="flex flex-col">
        <div className="flex flex-row items-center px-4 mb-3">
          <div className="bg-[#52b788] h-1 mr-5" style={{
            height: 0.5,
            width: "50%"
          }}></div>
          <h2 className="font-bold text-3xl">About me</h2>
        </div>
        <div className="flex justify-start pl-6">
        <p className="text-[#8892b0] text-md w-[82%] ">Hello! My name is Stefano and enjoy building web and mobile apps!
        My passion for technology started back in 2020
        </p>
        </div>
      </div>
      <img src={me} className="h-[50%] m-auto rounded-full"/>
      {/* 
      <div className="flex flex-col items-end">
        <div className="flex flex-row items-center mb-4 text-white text-5xl">
          <div className="bg-[#52b788] h-1 w-32 mr-5"></div>
          <h2 className="font-bold">About me</h2>
        </div>
      </div> */}
    </div>
  );
};
