import React from "react";

import TilesList from "../../TilesList";

const Services = () => {
  return (
    <div className="section services" data-anchor="/services" id="services">
      <div className="services-sliding-car"></div>
      <div className="container">
        <div className="services-content row">
          <div className="services-text col">
            <h2 className="title-2 services-title" data-title="Our services">Our services</h2>
            <div className="services-description">
              <p className="services-desc">
                We are offering a variety of cars, services, and partnerships to
                meet all your travel needs.
              </p>
            </div>
          </div>
          <div className="services-tiles col">
            <TilesList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
