import React from "react";
import { ProjectCard } from "./ProjectCard";
import projects from "../data/projects.json";

import "../styles/projects.css";

export const Projects = () => {
  return (
    <div id="projects" className="pb-20 py-3">
      <div className="projects-container">
        <div className="flex flex-row items-center justify-start pl-[1.5rem] mb-3 pt-[15%] projects-header">
          <h2 className="text-2xl font-bold">Some of my projects</h2>
        </div>
      </div>
      <div className="cards-container">
        {/* Project Cards */}
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
