import React from "react";

const PickUpSettings = () => {
  return (
    <div className="pick-up-settings">
      <ul className="pick-up-settings-list">
        <li className="pick-up-settings-items  icon icon-keyboard_arrow_down drop">
          <span className="icon icon-location ">Pick up</span>
        </li>
        <li className="pick-up-settings-items drop">
          <span className="icon icon-calendar icon-keyboard_arrow_down">
            Pick up date
          </span>
        </li>
        <li className="pick-up-settings-items icon icon-keyboard_arrow_down drop">
          <span className="icon icon-calendar icon-return">Return date</span>
        </li>
        <li className="pick-up-settings-items search">
          <button type="button" className="button pick-up-search-button ">
            Search
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PickUpSettings;
