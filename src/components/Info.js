import React from "react";
import CV from "../assets/StefanoCutriRESUME.pdf";
import "../styles/info.css";

export const Info = () => {
  return (
    <div className="flex flex-1 flex-col info-container pb-32" id="home">
      <div className="flex flex-col justify-start items-start ml-[5%] mt-[25%] info">
        <h1>Hi, I'm</h1>
        <h1 className="text-white text-5xl py-3">Stefano Cutri.</h1>
        <h1 className="text-[#8892b0] text-5xl">A Frontend Developer.</h1>
        <p className="w-[50%] text-[#8892b0]  mt-3">
          I'm a Junior Software Engineer specializing in building Frontend
          Applications. Currently, I'm looking for new oportunities to keep
          expanding my skills, which you can see{" "}
          <a
            style={{
              position: "revert",
            }}
            className="p-0 blank-link text-[#52b788]"
            href="https://github.com/stefanocutri"
            target="_blank"
            rel="noreferrer"
          >
            here.
          </a>
        </p>
        <div className="flex flex-row justify-start mt-3">
          <a href={CV} download="Stefano Cutri RESUME.pdf">
            <button className="button type3">Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};
