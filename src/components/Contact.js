import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/contact.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <div className="info-container" id="contact">
      <div className="flex flex-row items-center justify-center mb-3">
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
      <div className="flex flex-col items-center justify-end h-[30%]">
      <div className="flex flex-row justify-evenly w-[100%] pb-3">
        <a href="https://github.com/stefanocutri">
          <FontAwesomeIcon
            icon={faGithub}
            color="white"
            className="social-link"
            size="lg"
          />
        </a>
        <a href="https://www.linkedin.com/in/stefano-cutri-601b4b224/">
          <FontAwesomeIcon
            icon={faLinkedin}
            color="white"
            className="social-link"
            size="lg"
          />
        </a>
      </div>
        <a href="https://github.com/StefanoCutri/portfolio">
          <p className="text-white font-mono text-sm social-link">
            Designed and Developed by Stefano Cutri
          </p>
        </a>
      </div>
    </div>
  );
};
