import React from "react";
import me from "../assets/me.jpeg";
import "../styles/about.css";

const TECHS = [
  "React",
  "Next.js",
  "JavaScript ES6+",
  "Node.js",
  "REST APIs",
  "HTML5 & CSS3",
  "Git & GitHub",
  "MongoDB",
];

export const About = () => {
  return (
    <section id="about">
      {/* Section header */}
      <div className="section-header reveal">
        <span className="section-num">01.</span>
        <h2 className="section-title">About me</h2>
        <div className="section-line" />
      </div>

      <div className="about-grid">
        {/* Text */}
        <div className="about-text reveal">
          <p>
            I'm a Frontend Developer focused on building modern web applications
            using React and JavaScript.
          </p>
          <p>
            I have experience creating responsive user interfaces, integrating
            APIs, and developing real-world projects both individually and in
            collaborative environments.
          </p>
          <p>
            Currently studying Software Development at UADE and continuously
            improving my skills by building projects and learning new
            technologies.
          </p>

          <span className="tech-label">Technologies</span>
          <div className="tech-grid">
            {TECHS.map((tech) => (
              <span key={tech} className="tech-item">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="photo-frame reveal">
          <img src={me} alt="Stefano Cutri" className="my-image" />
        </div>
      </div>
    </section>
  );
};
