import React, { useState } from "react";
import { NavHashLink } from 'react-router-hash-link';

import BurgerIcon from "components/common/BurgerMenu";

import { navItems } from "constants.js";
import logo from "assets/images/logo-red.png";

const Header = () => {
  const [activePage, setActivePage] = useState('#top');

  const setCurrentLinkActive = (path) => {
    setActivePage(path);
    return;
  }

  return (
    <header className="header">
      <div className="header-container container-fluid">
        <div className="logo">
          <NavHashLink smooth to="#top" className="logo-link">
            <img src={logo} className="logo-img" alt="logo" />
          </NavHashLink>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            {navItems.map((el) => (
              <li className="nav-item" key={el.path}>
                <NavHashLink
                  smooth to={el.path}
                  className="nav-link"
                  activeClassName={activePage && "is-active"}
                  onClick= {() => setCurrentLinkActive(el.path)}
                >
                  {el.text}
                </NavHashLink>
              </li>
            ))}
          </ul>
        </nav>
        <BurgerIcon />
      </div>
    </header>
  );
};

export default Header;
