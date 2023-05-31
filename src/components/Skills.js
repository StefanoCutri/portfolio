import React from "react";
import { ProjectCard } from "./ProjectCard";
import projects from '../data/projects.json';

import "../styles/skills.css";

export const Skills = () => {
  return (
    <div id="skills" className="info-container pb-4 mt-[20%]">
      <div>
        <div className="flex flex-row items-center px-4 mb-3">
          <h2 className="text-3xl font-bold mr-5 ">Some of my projects</h2>
          <div
            className="bg-[#52b788]"
            style={{
              height: 0.5,
              width: "20%",
            }}
          ></div>
        </div>
        <div className="flex justify-start pl-6">
          <p className="text-[#8892b0] text-sm pr-5">
            Here are some of my works using these technologies:
            <br />
          </p>
        </div>
        <ul className="flex flex-row justify-evenly mt-3 ml-6 technologies">
          <li className="text-sm tech-item text-white"> React</li>
          <li className="text-sm tech-item text-white"> React Native</li>
          <li className="text-sm tech-item text-white"> JavaScript (ES6+)</li>
          <li className="text-sm tech-item text-white"> TypeScript</li>
          <li className="text-sm tech-item text-white"> Node. js</li>
          <li className="text-sm tech-item text-white"> Redux</li>
        </ul>
      </div>
      <div className="pb-20">
      {
        projects.map((project)=>(
          <ProjectCard key={project.id} title={project.title} description={project.description} respository={project.repository} hosted={project.hosted} />
        ))
      }
      </div>
    </div>
  );
};
