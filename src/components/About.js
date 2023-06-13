import React from "react";
import me from "../assets/me.jpeg";
import "../styles/about.css";

export const About = () => {
  return (
    <div
      className="flex flex-col items-start justify-evenly info-container pb-32"
      id="about"
    >
      <div className="mt-[90%] about">
        <div className="flex flex-col justify-start">
          <div className="flex flex-row items-center justify-start mb-3">
            <h2 className="font-bold text-2xl ml-6">About me</h2>
            <div
              className="bg-[#52b788] h-1 ml-5"
              style={{
                height: 0.5,
                width: "20%",
              }}
            ></div>
          </div>
          <div className="flex justify-start pl-6 about-description">
            <p className="text-[#8892b0] text-md pr-5 mb-14">
              Hello! My name is Stefano and I enjoy building web and mobile
              apps! <br />
              My passion for technology started back in 2020 while I was in
              lockdown due to the pandemic and saw a Web Development free course
              and thought it could be a good idea to give it a try! From that
              moment to now, I've been building amazing web and mobile apps!
            </p>
          </div>
        </div>
        <img
          src={me}
          className="h-[40%] m-auto rounded-full shadow-2xl my-image"
          alt="Stefano"
        />
      </div>
    </div>
  );
};
