import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/contact.css";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <div className="info-container" id="contact">
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
        <div className="flex flex-col h-[40vh] items-center justify-evenly">
          <a href="mailto:stefanocutristecco@gmail.com">
            <button className="button type3">Let's talk!</button>
          </a>
        </div>
        <div className="flex flex-row justify-evenly">
          <FontAwesomeIcon icon={faGithub} color="white"/>
          <FontAwesomeIcon icon={faLinkedin} color="white"/>
        </div>
        <div className="flex justify-center mt-10">
        <p className="text-white font-mono">Designed and Developed by Stefano Cutri</p>
        </div>
    </div>
  );
};
