import React, { useRef, useState } from "react";
import { slideInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "../styles/header.css";

export const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const backgroundRef = useRef();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const styles = {
    slideInLeft: {
      animation: "x 1s",
      animationName: Radium.keyframes(slideInLeft, "slideInLeft"),
    },
  };

  return (
    <nav
      className="navigation px-5 flex flex-row justify-between"
      ref={backgroundRef}
    >
      <p href="/" className="brand-name">
        Portfolio
      </p>
      <button className="hamburger" onClick={handleShowNavbar}>
        <i className="fa-solid fa-bars fa-lg text-[#52b788]"></i>
      </button>
      <StyleRoot>
        <div
          className={
            showNavbar ? "navigation-menu expanded" : "navigation-menu"
          }
          style={styles.slideInLeft}
        >
          <ul>
            <li className="animate__slideInLeft">
              <a href="/#about">About</a>
            </li>
            <li className="animate__slideInLeft">
              <a href="/skills">Skills</a>
            </li>
            <li className="animate__slideInLeft">
              <a href="/experience">Experience</a>
            </li>
            <li className="animate__slideInLeft">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </StyleRoot>
    </nav>
  );
};
