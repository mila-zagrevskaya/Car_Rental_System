import React from "react";

import Hero from "./Hero";
import Services from "./OurServices";
import Vehicles from "./Vehicles";
import Benefits from "./Benefits";

const VerticalSlider = () => {
  return (
    <div className="vertical-slider" id="vertical-slider">
      <Hero />
      <Services />
      <Vehicles />
      <Benefits />

      <section
        className="section testimonials"
        data-anchor="/testimonials"
        id="testimonials">
        <h2 className="title-2 col-offset-1">testimonials</h2>
      </section>
      <section
        className="section stations"
        data-anchor="/stations"
        id="stations">
        <h2 className="title-2 col-offset-1">stations</h2>
      </section>
    </div>
  );
};

export default VerticalSlider;
