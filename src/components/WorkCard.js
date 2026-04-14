import React from "react";

export const WorkCard = ({ role, description, workTime, company }) => {
  return (
    <div className="work-card reveal">
      <p className="work-company">{company}</p>
      <h3 className="work-role">{role}</h3>
      <p className="work-time">{workTime}</p>

      <ul className="work-desc-list">
        {description.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
