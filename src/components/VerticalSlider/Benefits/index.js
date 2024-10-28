import React, { useRef } from "react";

import Advantage from "./Advantage";
import BenefitsList from "./BenefitsList";
import useInView from "helpers/useInView"

const Benefits = () => {
  const sectionRef = useRef(null);

  useInView(sectionRef);

  return (
    <div className="section benefits" data-anchor="/benefits" id="benefits" ref={sectionRef}>
      <div className="benefits-text col-offset-1">
        <h2 className="title-2 benefits-title" data-title="Why choose us?">Why choose us?</h2>
        <Advantage />
      </div>
      <div className="benefits-content">
        <BenefitsList />
      </div>
    </div>
  );
};

export default Benefits;
