import React from "react";
import works from "../data/work.json";
import { WorkCard } from "./WorkCard";

export const Experience = () => {
  return (
    <div className="info-container mt-[10%]" id="experience">
      <div className="pt-[20%] work">
        <div className="flex flex-row items-center justify-start mb-3 pl-[5%] work-header">
          <h2 className="font-bold text-2xl">Where I've worked</h2>
          <div
              className="bg-[#52b788] h-1 ml-5"
              style={{
                height: 0.5,
                width: "10%",
              }}
            ></div>
        </div>
        <div className="mt-9 flex flex-col justify-evenly h-[80vh] works-container">
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
      </div>
    </div>
  );
};
