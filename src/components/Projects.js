import React from "react";
import { ProjectCard } from "./ProjectCard";
import projects from "../data/projects.json";
import "../styles/projects.css";

export const Projects = () => {
  return (
    <section id="projects">
      {/* Section header */}
      <div className="section-header reveal">
        <span className="section-num">02.</span>
        <h2 className="section-title">Some things I've built</h2>
        <div className="section-line" />
      </div>

      {/* Cards */}
      <div className="cards-container">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            repository={project.repository}
            hosted={project.hosted}
            style={{ transitionDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    </section>
  );
};
