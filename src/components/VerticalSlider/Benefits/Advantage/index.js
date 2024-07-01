import React from "react";

import CanvasLine from "components/common/CanvasLine";
import wheelImage from "assets/images/benefits/wheel-image/wheel-image.png";
import { ourAdvantages } from "constants.js";

const Advantage = () => {
  return (
    <div className="advantage">
      <ul className="advantage-list" id="advantage-list">
        {ourAdvantages.map((advantage) => {
          const advantageItemId = `advantage-item-${advantage.id}`;
          return (
            <li
              className="advantage-item"
              id={advantageItemId}
              key={advantage.id}>
              <span className="advantage-title title-4">{advantage.title}</span>
              <span className="advantage-sub-title">{advantage.subTitle}</span>
              <CanvasLine advantage={advantage} advantageItemId={advantageItemId}/>
            </li>
          );
        })}
      </ul>
      <img src={wheelImage} alt="wheel" className="benefits-sliding-wheel" />
    </div>
  );
};

export default Advantage;
