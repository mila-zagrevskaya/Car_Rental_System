import React from "react";

import Advantage from "./Advantage/index";
import BenefitsList from "./BenefitsList";

const Benefits = () => {
  return (
    <div className="section benefits" data-anchor="/benefits" id="benefits">
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
