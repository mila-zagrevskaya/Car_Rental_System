import React from "react";

import CarouselSlider from "components/CarouselSlider";

const Vehicles = () => {
  return (
    <div className="section vehicles" data-anchor="/vehicles" id="vehicles">
      <div className="vehicles-sliding-car" />
      <div className="vehicles-text col-4">
        <h2 className="title-2 vehicles-title" data-title="Our vehicles">Our vehicles</h2>
        <span className="vehicles-text-help">
          Premium features at no extra cost
        </span>
      </div>
      <CarouselSlider />
    </div>
  );
};

export default Vehicles;
