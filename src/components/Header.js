import React from "react";

export const Header = () => {
  return (
    <div className="flex flex-row justify-between px-20 text-[#f5f1ed] py-4">
      <p>LOGO</p>
      <ul className="flex flex-row w-1/2 justify-around list-none text-sm">
        <li>
          <a href="#">01. About</a>
        </li>
        <li>
          <a href="#">02. Experience</a>
        </li>
        <li>
          <a href="#">03. Work</a>
        </li>
        <li>
          <a href="#">04. Contact</a>
        </li>
      </ul>
    </div>
  );
};
