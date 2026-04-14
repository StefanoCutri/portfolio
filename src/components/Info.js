import React from "react";
import CV from "../assets/CVStefanoCutri.pdf";
import "../styles/info.css";

export const Info = () => {
  return (
    <div id="home">
      <p className="hero-eyebrow">Hello, world! — I'm</p>
      <h1 className="hero-name">Stefano Cutri.</h1>
      <h2 className="hero-title">Frontend Developer.</h2>

      <p className="hero-desc">
        I build modern web applications using React and JavaScript, focusing on
        clean UI, performance, and real-world functionality. Currently studying
        Software Development at UADE.
      </p>

      <div className="hero-btns">
        <a href="#projects" className="btn-primary">
          View Projects
        </a>
        <a
          href={CV}
          download="Stefano Cutri RESUME.pdf"
          className="btn-secondary"
        >
          Download CV
        </a>
      </div>

      <div className="hero-line" aria-hidden="true" />
    </div>
  );
};
