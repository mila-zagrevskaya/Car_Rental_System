import React, { useState } from "react";
import Scrollchor from "react-scrollchor";

import { navItems } from "constants.js";

const VerticalSliderNavigation = () => {
  const [isActiveSection, changeSection] = useState(false);

  const setCurrentLinkActive = (link, path) => {
    const location = link.href.split("/")[3];
    changeSection(!isActiveSection);
    return location === path
      ? link.classList.add("is-active-section")
      : link.classList.remove("is-active-section");
  };

  return (
    <div className="vertical-slider-navigation">
      <ul className="vertical-slider-nav-list">
        <li className="vertical-nav-item" key="#home">
          <Scrollchor
            to="/"
            className="is-active-section vertical-nav-link "
            onClick={() => {}}>
            01
          </Scrollchor>
        </li>
        {navItems.map((page) => (
          <li className="vertical-nav-item" key={page.slideNumber}>
            <Scrollchor
              to={page.path}
              className="vertical-nav-link dotted"
              onClick={(event) =>
                setCurrentLinkActive(event.target, page.path)
              }>
              <span className="visually-hidden">{page.text}</span>
            </Scrollchor>
          </li>
        ))}
        <li className="vertical-nav-item">
          <Scrollchor
            to="/"
            className="vertical-nav-link dotted"
            onClick={() => {}}>
            <span className="visually-hidden">Contacts</span>
          </Scrollchor>
        </li>
      </ul>
    </div>
  );
};

export default VerticalSliderNavigation;
