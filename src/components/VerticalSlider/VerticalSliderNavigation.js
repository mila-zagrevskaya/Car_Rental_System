import React, { useState } from "react";
import { NavHashLink } from 'react-router-hash-link';

import { navItems } from "constants.js";

const VerticalSliderNavigation = () => {
  const [activePage, setActivePage] = useState("#top");

  const setCurrentLinkActive = (path) => {
    setActivePage(path);
    return;
  }

  return (
    <div className="vertical-slider-navigation">
      <ul className="vertical-slider-nav-list">
        {navItems.map((page) => (
          <li className="vertical-nav-item" key={page.slideNumber}>
            <NavHashLink 
              smooth to={page.path}
              className="vertical-nav-link"
              activeClassName={activePage && "is-active-section"}
              onClick= {() => setCurrentLinkActive(page.path)}
              >
              <span className="page-numbered">{page.slideNumber}</span>
              <span className="dotted"></span>
              <span className="visually-hidden">{page.text}</span>
            </NavHashLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalSliderNavigation;
