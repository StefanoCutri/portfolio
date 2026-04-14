import React from "react";
import works from "../data/work.json";
import { WorkCard } from "./WorkCard";
import "../styles/work.css";

export const Experience = () => {
  return (
    <section id="experience">
      {/* Section header */}
      <div className="section-header reveal">
        <span className="section-num">03.</span>
        <h2 className="section-title">Where I've worked</h2>
        <div className="section-line" />
      </div>

      {/* Work cards */}
      <div className="works-container">
        {works.map((work) => (
          <WorkCard
            key={work.id}
            company={work.company}
            workTime={work.workingTime}
            role={work.role}
            description={work.description}
          />
        ))}
      </div>
    </section>
  );
};
