import React from "react";

import { services } from "constants/pages.js";

const TilesList = () => {
  return (
    <div className="tiles-list">
      {services.map((service, index) => {
        const className = `tiles-list-content ${service.className}`;
        return (
          <div className="tiles-container" key={index}>
            <a href={service.href} className="tiles-item">
              <div className={className}>
                <div className="tiles-presentation">
                  <div className={`tiles-icon ${service.icon}`}></div>
                  <span className="tiles-name">{service.name}</span>
                </div>
                <div className="tiles-description">
                  <p>{service.description}</p>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default TilesList;
