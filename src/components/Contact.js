import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/contact.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <div className="info-container relative" id="contact">
      <div className="flex flex-row items-center justify-center mb-3 pt-[25%] contact-info">
        <h2 className="font-bold text-2xl">Get in touch</h2>
      </div>
      <div className="flex flex-row justify-center items-center mt-6">
        <p className="text-[#8892b0] px-5 text-center contact-text">
          I'm currently open to new positions, so if you are interested in
          contact me do not hesitate to send me a message!
        </p>
      </div>
      <form>
        <div
          className="flex flex-col justify-start
         items-center p-2"
        >
          <input type="text" placeholder="First name" />
        </div>
        <div
          className="flex flex-col justify-start
         items-center p-2"
        >
          <input type="text" placeholder="Email" />
        </div>
        <div
          className="flex flex-col justify-start
         items-center p-2"
        >
          <textarea/>
          <input type="text" placeholder="message" />
        </div>
      </form>
      <div className="flex flex-col items-center justify-evenly mt-10">
        <a href="mailto:stefanocutristecco@gmail.com?subject=Email Subject&body=Contents of email">
          <button className="button type3">Let's talk!</button>
        </a>
      </div>
      <div className="flex flex-col items-start justify-end h-[10%] social-links">
        <div className="flex flex-row justify-evenly pl-3 pb-2 socials-container">
          <a href="https://github.com/stefanocutri" className="pr-3">
            <FontAwesomeIcon
              icon={faGithub}
              color="white"
              className="social-link"
              size="2x"
            />
          </a>
          <a href="https://www.linkedin.com/in/stefano-cutri-601b4b224/">
            <FontAwesomeIcon
              icon={faLinkedin}
              color="white"
              className="social-link"
              size="2x"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
