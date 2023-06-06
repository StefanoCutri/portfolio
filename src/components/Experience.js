import React from "react";
import works from "../data/work.json";
import { WorkCard } from "./WorkCard";

export const Experience = () => {
  return (
    <div className="info-container mt-[10%]" id="experience">
      <div className="pt-[20%]">
        <div className="flex flex-row items-center justify-center mb-3">
          <h2 className="font-bold text-2xl">Where I've worked</h2>
          <div
            className="bg-[#52b788] h-1 ml-5"
            style={{
              height: 0.5,
              width: "30%",
            }}
          ></div>
        </div>
        <div className="mt-9 flex flex-col justify-around h-[80vh]">
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
