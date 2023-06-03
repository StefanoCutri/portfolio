import React from "react";

export const Contact = () => {
  return (
    <div className="info-container">
      <div className="flex flex-row items-center justify-center mb-3">
        <div
          className="bg-[#52b788] h-1 mr-5"
          style={{
            height: 0.5,
            width: "50%",
          }}
        ></div>
        <h2 className="font-bold text-2xl">Get in touch</h2>
      </div>
      <div className="flex flex-row justify-center items-center mt-6">
        <p className="text-[#8892b0] px-5 text-center">
          I'm currently open to new positions, so if you are interested in
          contact me do not hesitate to send me a message!
        </p>
      </div>
      <div>
        <div>Let's talk!</div>
        <div>Download Resume</div>
      </div>
    </div>
  );
};
