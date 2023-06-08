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
        <p className="text-[#8892b0] px-5 text-center">
          I'm currently open to new positions, so if you are interested in
          contact me do not hesitate to send me a message!
        </p>
      </div>
      <form>
        <div
          className="flex flex-row justify-start
         items-center p-2"
        >
          <label> First Name: </label>
          <input type="text" placeholder="" />
        </div>
        <div
          className="flex flex-row justify-start
         items-center p-2"
        >
          <label> Last Name: </label>
          <input type="text" placeholder="" />
        </div>
        <div
          className="flex flex-row justify-start
         items-center p-2"
        >
          <label> Your Email: </label>
          <input type="text" placeholder="" />
        </div>
      </form>
      <div className="flex flex-col items-center justify-evenly mt-10">
        <a href="mailto:stefanocutristecco@gmail.com?subject=Email Subject&body=Contents of email">
          <button className="button type3">Let's talk!</button>
        </a>
      </div>
      <div className="flex flex-col items-center justify-end h-[10%] social-links">
        <div className="flex flex-row justify-evenly pb-3 socials-container">
          <a href="https://github.com/stefanocutri" className="pb-3">
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
