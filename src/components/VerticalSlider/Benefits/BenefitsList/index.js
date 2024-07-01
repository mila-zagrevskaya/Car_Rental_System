import React from "react";

import { benefits } from "constants.js";

const BenefitsList = () => {
  return (
    <ul className="benefits-list">
      {benefits.map((benefit) => {
        return (
          <div className="benefits-container" key={benefit.id}>
            <a href={benefit.href} className="benefits-item">
              <div className="benefits-list-content benefits-presentation transform-top">
                <div className={`benefits-icon ${benefit.icon}`}></div>
                <span className="benefits-name">{benefit.name}</span>
              </div>
            </a>
          </div>
        );
      })}
    </ul>
  );
};

export default BenefitsList;
