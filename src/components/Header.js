import React, { useState } from "react";
import "../styles/header.css";

export const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    console.log("click");
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="flex flex-row justify-between px-20 text-[#f5f1ed] py-4">
      <a href="/">
        <p className="text-[#52b788] text-3xl font-bold font-mono header">
          Stefano Cutri
        </p>
      </a>
      <ul className={`flex flex-row w-1/2 justify-around items-center list-none text-sm ${showNavbar && 'active'}`}>
        <li>
          <a href="#">
            <p className="text-[#52b788] px-1">01.</p>
            About
          </a>
        </li>
        <li>
          <a href="#">
            <p className="text-[#52b788] px-1">02.</p>
            Skills
          </a>
        </li>
        <li>
          <a href="#">
            <p className="text-[#52b788] px-1">03.</p>
            Experience
          </a>
        </li>
        <li>
          <a href="#">
            <p className="text-[#52b788] px-1">04.</p>
            Contact
          </a>
        </li>
      </ul>
      <div className={`flex flex-row justify-center items-center ${showNavbar && 'active-bars'}`} id="bars-menu" onClick={handleShowNavbar}>
        <i className="fa-solid fa-bars fa-lg text-[#52b788]"></i>
      </div>
    </div>
  );
};
