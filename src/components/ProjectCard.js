import React from "react";

export const ProjectCard = ({ title, description, link }) => {
  return (
      <div className="bg-[#00171f] mx-4 mt-4 py-4 px-4 flex-1 flex-col justify-center items-start rounded-lg">
        <h3 className="text-white font-bold text-xl">{title}</h3>
        <p className="text-white font-extralight font-sans">{description}</p>
        {/* <a href={link}>Project</a> */}
      </div>
  );
};
