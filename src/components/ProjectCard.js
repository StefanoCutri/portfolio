import React from "react";

export const ProjectCard = ({ title, description, respository, hosted }) => {
  return (
    <div className="bg-[#00171f] mx-4 mt-4 py-4 px-4 flex-1 flex-col justify-center items-start rounded-lg">
      <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
      <p className=" font-extralight font-sans text-[#8892b0]">{description}</p>
      <div className="bg-[#00171f] mt-4 mb-3 flex flex-row">
        <a>
          <i className="fa-brands fa-github text-[#ccd6f6]  mr-3"></i>
        </a>
        <a>
          <i className="fa-solid fa-up-right-from-square text-[#ccd6f6]"></i>
        </a>
      </div>
      {/* <a href={link}>Project</a> */}
    </div>
  );
};
