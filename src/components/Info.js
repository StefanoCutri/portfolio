import React from "react";
import "../styles/info.css";

export const Info = () => {
  return (
    <div className="flex flex-1 flex-col items-start info-container" id="#home">
      <div className="flex flex-col justify-start items-start ml-[10%] mt-[12%]">
        <h1>Hi, my name is</h1>
        <h1 className="text-white text-6xl py-3">Stefano Cutri.</h1>
        <h1 className="text-[#8892b0] text-6xl">A Frontend Developer.</h1>
        <p className="w-[50%] text-[#8892b0]  mt-3">
          I'm a Junior Software Engineer specializing in building Frontend
          Applications. Currently, I'm looking for new oportunities to keep
          training my skills that you can see{" "}
          <a
          style={{
            position: "revert"
          }}
            className="p-0 blank-link text-[#52b788]"
            href="https://github.com/stefanocutri"
            // target="_blank"
          >
            here.
          </a>
        </p>
      </div>
    </div>
  );
};
