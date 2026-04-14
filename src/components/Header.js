import React, { useContext } from "react";
import NavbarContext from "../context/NavbarContext";
import "../styles/header.css";

import CV from "../assets/CVStefanoCutri.pdf";

export const Header = () => {
  const { navbarState, handleOpen } = useContext(NavbarContext);

  const handleShowNavbar = () => {
    handleOpen(!navbarState.isNavbarOpen);
  };

  const closeMenu = () => {
    handleOpen(false);
  };

  return (
    <>
      <nav>
        {/* Brand */}
        <a href="/#home" className="brand-name">
          SC<span>.dev</span>
        </a>

        {/* Desktop links */}
        <div
          className={
            navbarState.isNavbarOpen
              ? "navigation-menu expanded"
              : "navigation-menu"
          }
        >
          <ul>
            {[
              { href: "/#about", label: "About", num: "01" },
              { href: "/#projects", label: "Projects", num: "02" },
              { href: "/#experience", label: "Experience", num: "03" },
              { href: "/#contact", label: "Contact", num: "04" },
            ].map(({ href, label, num }) => (
              <li key={label}>
                <a
                  className="navbar-link"
                  href={href}
                  data-num={num}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resume CTA (desktop) */}
        <a href={CV} download className="nav-resume">
          Resume ↗
        </a>

        {/* Hamburger (mobile) */}
        <button
          className="hamburger"
          onClick={handleShowNavbar}
          aria-label="Toggle menu"
        >
          {navbarState.isNavbarOpen ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>
    </>
  );
};
