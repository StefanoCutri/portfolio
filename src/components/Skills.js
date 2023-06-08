import React from "react";
import { ProjectCard } from "./ProjectCard";
import projects from "../data/projects.json";

import "../styles/skills.css";

export const Skills = () => {
  return (
    <div id="skills" className="pb-20 py-3">
      <div className="skills-container">
        <div className="flex flex-row items-center justify-start pl-[1.5rem] mb-3 pt-[15%] skills-header">
          <h2 className="text-2xl font-bold">Some of my projects</h2>
        </div>
        <div className="flex justify-start px-4 skills-info">
          <p className="text-[#8892b0] text-md ">
            Here are some of my works using these technologies:
            <br />
          </p>
        </div>
        <ul className="flex flex-row justify-start mt-3 ml-6 technologies">
          <li className="text-sm tech-item text-white"> React</li>
          <li className="text-sm tech-item text-white"> React Native</li>
          <li className="text-sm tech-item text-white"> JavaScript (ES6+)</li>
          <li className="text-sm tech-item text-white"> TypeScript</li>
          <li className="text-sm tech-item text-white"> Node. js</li>
          <li className="text-sm tech-item text-white"> Redux</li>
        </ul>
      </div>
      <div className="cards-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            respository={project.repository}
            hosted={project.hosted}
          />
        ))}
      </div>
    </div>
  );
};
