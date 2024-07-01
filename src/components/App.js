import React from "react";

import ContactUsButton from "./common/ContactUsButton";
import VerticalSliderNavigation from "./VerticalSlider/VerticalSliderNavigation";
import VerticalSlider from "./VerticalSlider";
import "../scss/App.scss";

const App = () => {
  return (
    <div className="app">
      <div className="layout">
        <VerticalSliderNavigation />
        <VerticalSlider />
        <ContactUsButton />
      </div>
    </div>
  );
};

export default App;
