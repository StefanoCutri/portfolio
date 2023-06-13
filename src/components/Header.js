import React, { useContext } from "react";
import NavbarContext from "../context/NavbarContext";

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

  return (
    <nav className="navigation px-5 flex flex-row justify-between">
      <a href="/#home">
        <p className="brand-name">Stefano Cutri</p>
      </a>
      <button className="hamburger" onClick={handleShowNavbar}>
        <i className="fa-solid fa-bars fa-lg text-[#52b788]"></i>
      </button>
        <div
          className={
            navbarState.isNavbarOpen
              ? "navigation-menu expanded"
              : "navigation-menu"
          }
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
    </nav>
  );
};
