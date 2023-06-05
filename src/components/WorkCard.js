import React from "react";
import "../styles/work.css";

export const WorkCard = ({ role, description, workTime, company }) => {
  return (
    <div className="flex flex-col items-start ml-2 px-3 mb-3">
      <div className="flex flex-col justify-start items-start">
        <div className="flex flex-row items-center">
          <h3 className="font-bold pr-3 text-lg">{company} -</h3>
          <p className="text-[#8892b0]">{role}</p>
        </div>
        <p className="text-white text-sm font-sans font-medium">{workTime}</p>
      </div>
      <ul className="ml-2">
        {description.map((item) => (
          <li
            key={item}
            className="text-[#8892b0] font-extralight font-sans work-item my-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
