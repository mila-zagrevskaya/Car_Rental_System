import React, { useState, useEffect } from "react";
import { NavHashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

import { navItems } from "constants/pages.js";

const VerticalSliderNavigation = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState('#top');

  useEffect(() => {
    if (!location.hash) {
      setActivePage('#top');
      window.location.hash = '#top';
    } else {
      setActivePage(location.hash);
    }
  }, [location, location.hash]);


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
