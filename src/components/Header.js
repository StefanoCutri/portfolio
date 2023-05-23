import React, { useState } from "react";
import "../styles/header.css";

export const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    console.log("click");
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Stefano Cutri
      </a>
      <button className="hamburger" onClick={handleShowNavbar}>
        {/* icon from heroicons.com */}
        <i className="fa-solid fa-bars fa-lg text-[#52b788]"></i>
      </button>
      <div
        className={showNavbar ? "navigation-menu expanded" : "navigation-menu"}
      >
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/experience">Experience</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    
  );
};
