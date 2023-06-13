import React from "react";
import me from "../assets/me.jpeg";
import "../styles/about.css";

export const About = () => {
  return (
    <div id="about" className="pb-20 pt-20">
    <div className="flex flex-row items-center justify-start mb-3 pl-[5%] work-header">
          <h2 className="font-bold text-2xl">About me</h2>
          <div
            className="bg-[#52b788] h-1 ml-5"
            style={{
              height: 0.5,
              width: "40%",
            }}
          ></div>
        </div>
      <div className="flex justify-start pl-6 about-description">
        <p className="text-[#8892b0] text-md pr-5 mb-14">
          Hello! My name is Stefano and I enjoy building web and mobile apps!{" "}
          <br />
          My passion for technology started back in 2020 while I was in lockdown
          due to the pandemic and saw a Web Development free course and thought
          it could be a good idea to give it a try! From that moment to now,
          I've been building amazing web and mobile apps!
        </p>
      </div>
      <img
        src={me}
        className="p-5 rounded-full my-image"
        alt="Stefano"
      />
    </div>
  );
};
