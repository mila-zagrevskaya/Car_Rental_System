import React from "react";
import Scrollchor from "react-scrollchor";

import { navItems } from "constants.js";

import BurgerIcon from "components/common/BurgerMenu";
import logo from "assets/images/logo-red.png";

const Header = () => {
  const setCurrentLinkActive = (link, path) => {
    const location = link.href.split("/")[3];
    console.log(location);
    return location === path
      ? link.classList.add("is-active")
      : link.classList.remove("is-active");
  };

  return (
    <header className="header">
      <div className="header-container container-fluid">
        <div className="logo">
          <Scrollchor to="/" className="logo-link">
            <img src={logo} className="logo-img" alt="logo" />
          </Scrollchor>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            {navItems.map((el) => (
              <li className="nav-item" key={el.path}>
                <Scrollchor
                  to={el.path}
                  className="nav-link"
                  onClick={(event) =>
                    setCurrentLinkActive(event.target, el.path)
                  }>
                  {el.text}
                </Scrollchor>
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
