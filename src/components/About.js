import React from "react";
import me from "../assets/me.jpeg";
import "../styles/about.css";

export const About = () => {
  return (
    <section id="about" className="pb-20 pt-20">
      <div className="flex flex-row items-center justify-start mb-8">
        <h2 className="font-bold text-2xl">About me</h2>
        <div
          className="bg-[#52b788] h-1 ml-5"
          style={{
            height: 0.5,
            width: "40%",
          }}
        />
      </div>

      <div className="about-content">
        <div className="about-description">
          <p className="text-[#8892b0] mb-6">
            I'm a Frontend Developer focused on building modern web applications
            using React and JavaScript.
          </p>

          <p className="text-[#8892b0] mb-6">
            I have experience creating responsive user interfaces, integrating
            APIs, and developing real-world projects both individually and in
            collaborative environments.
          </p>

          <p className="text-[#8892b0] mb-6">
            Currently, I'm studying Software Development at UADE and
            continuously improving my skills by building projects and learning
            new technologies.
          </p>

          <p className="text-[#8892b0]">
            Technologies I work with:
            <br />
            <span className="text-white font-semibold leading-8">
              React · Next.js · JavaScript (ES6+) · Node.js · REST APIs <br />
              HTML5 · CSS3 · Git & GitHub <br />
              MongoDB · SQL (basic) <br />
              Java (basic) · Python (basic)
            </span>
          </p>
        </div>

        <div className="img-container">
          <img src={me} className="my-image" alt="Stefano" />
        </div>
      </div>
    </section>
  );
};
