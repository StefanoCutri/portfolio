import React from "react";
import me from "../assets/me.jpeg";

export const About = () => {
  return (
    <div
      className="flex flex-col items-start justify-evenly info-container py-3"
      id="about"
    >
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-center px-4 mb-3">
          <div
            className="bg-[#52b788] h-1 mr-5"
            style={{
              height: 0.5,
              width: "50%",
            }}
          ></div>
          <h2 className="font-bold text-2 xl">About me</h2>
        </div>
        <div className="flex justify-start pl-6">
          <p className="text-[#8892b0] text-md pr-5">
            Hello! My name is Stefano and I enjoy building web and mobile apps!{" "}
            <br />
            My passion for technology started back in 2020 while I was in
            lockdown due to the pandemic and saw a Web Development free course
            and thought it could be a good idea to give it a try!
          </p>
        </div>
      </div>
      <img
        src={me}
        className="h-[50%] m-auto rounded-full shadow-2xl"
        alt="Stefano"
      />
    </div>
  );
};
