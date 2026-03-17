import React from "react";
import CV from "../assets/CVStefanoCutri.pdf";
import "../styles/info.css";

export const Info = () => {
  return (
    <div className="flex flex-1 flex-col info-container pb-32" id="home">
      <div className="flex flex-col justify-start items-start ml-[5%] mt-[25%] info">
        <h1>Hi, I'm</h1>
        <h1 className="text-white text-5xl py-3">Stefano Cutri.</h1>
        <h1 className="text-[#8892b0] text-5xl">Frontend Developer.</h1>

        <p className="w-[50%] text-[#fff] mt-4">
          I build modern web applications using React and JavaScript, focusing
          on clean UI, performance and real-world functionality.
        </p>

        <p className="w-[50%] text-[#fff] mt-2">
          Currently studying Software Development at UADE and looking for new
          opportunities as a Frontend or Junior Fullstack Developer.
        </p>

        <div className="flex flex-row gap-4 mt-6">
          <a href="#projects">
            <button className="button type3">View Projects</button>
          </a>

          <a href={CV} download="Stefano Cutri RESUME.pdf">
            <button className="button type3">Download CV</button>
          </a>

          <a href="#contact">
            <button className="button type3">Contact Me</button>
          </a>
        </div>
      </div>
    </div>
  );
};
