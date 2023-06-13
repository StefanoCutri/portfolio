import React, { useContext } from "react";
import Radium, { StyleRoot } from "radium";
import NavbarContext from "../context/NavbarContext";
import { slideInLeft } from "react-animations";

import "../styles/header.css";

export const Header = () => {
  // Context
  const { navbarState, handleOpen } = useContext(NavbarContext);

  //Close and Open Navbar
  const handleShowNavbar = () => {
    if (!navbarState.isNavbarOpen) {
      handleOpen(true);
    } else {
      handleOpen(false);
    }
  };

  // Animations
  const styles = {
    slideInLeft: {
      animation: "x 1s",
      animationName: Radium.keyframes(slideInLeft, "slideInLeft"),
    },
  };
  return (
    <nav className="navigation px-5 flex flex-row justify-between">
      <a href="/#home">
        <p className="brand-name">Stefano Cutri</p>
      </a>
      <button className="hamburger" onClick={handleShowNavbar}>
        <i className="fa-solid fa-bars fa-lg text-[#52b788]"></i>
      </button>
      <StyleRoot>
        <div
          className={
            navbarState.isNavbarOpen
              ? "navigation-menu expanded"
              : "navigation-menu"
          }
          style={styles.slideInLeft}
        >
          <ul>
            <li className="animate__slideInLeft">
              <a className="navbar-link" href="/#about">
                About
              </a>
            </li>
            <li className="animate__slideInLeft">
              <a className="navbar-link" href="/#skills">
                Skills
              </a>
            </li>
            <li className="animate__slideInLeft">
              <a className="navbar-link" href="/#experience">
                Experience
              </a>
            </li>
            <li className="animate__slideInLeft">
              <a className="navbar-link" href="/#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </StyleRoot>
    </nav>
  );
};
