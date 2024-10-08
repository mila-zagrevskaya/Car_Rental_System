import React, { useRef } from "react";

import PickUpSettings from "./PickUpSettings";
import useInView from "helpers/useInView";

const Hero = () => {
  const sectionRef = useRef(null);

  useInView(sectionRef);

  return (
    <div className="section hero" data-anchor="/" id="/" ref={sectionRef}>
      <div className="container">
        <div className="hero-sliding-car" />
        <div className="hero-content">
          <div className="hero-title">
            <h1 className="title-1 primary-title">Car Rental</h1>
            <span className="title-help ">Helps you</span>
          </div>
          <div className="hero-description">
          <span className="text-bold">
            Here you can rent a car of any brand
          </span>
            <p className="hero-desc">
              The Car Rental revolution: no more paperwork or endless waiting
              lines,
              <br></br>premium cars guaranteed and your virtual key directly in
              your smartphone!
            </p>
          </div>
        </div>
        <PickUpSettings />
      </div>
    </div>
  );
};

export default Hero;
