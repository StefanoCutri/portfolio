import React from "react";
import "../styles/contact.css";

export const Contact = () => {
  return (
    <div className="info-container" id="contact">
      <div className="pt-[15%]">
        <div className="flex flex-row items-center justify-center mb-3 mt-[12%]">
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
        <div className="flex flex-col h-[40vh] items-center justify-evenly">
          <a href="mailto:stefanocutristecco@gmail.com">
            <button className="button type3">Let's talk!</button>
          </a>
        </div>
      </div>
    </div>
  );
};
