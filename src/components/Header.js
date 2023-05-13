import React from "react";

export const Header = () => {
  return (
    <div className="flex flex-row justify-between px-20 text-[#f5f1ed] py-4">
      <p>S</p>
      <ul className="flex flex-row w-1/2 justify-around list-none text-sm">
        <li>
          <a href="#">
            <p className="text-[#52b788] px-1">01.</p>
            About</a>
        </li>
        <li>
          <a href="#">
            <p className="text-[#52b788] px-1">02.</p>
            Skills</a>
        </li>
        <li>
          <a href="#">
            <p className="text-[#52b788] px-1">03.</p>
            Experience</a>
        </li>
        <li>
          <a href="#">
            <p className="text-[#52b788] px-1">04.</p>
            Contact</a>
        </li>
      </ul>
    </div>
  );
};
