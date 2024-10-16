import React, { useState } from "react";

import DatePicker from '../../common/DatePicker';

const PickUpSettings = () => {
  const [showPickUpDropdown, setShowPickUpDropdown] = useState(false);
  const [showPickUpDateDropdown, setShowPickUpDateDropdown] = useState(false);
  const [showReturnDateDropdown, setShowReturnDateDropdown] = useState(false);

  const togglePickUpDropdown = () => {
    setShowPickUpDropdown(!showPickUpDropdown);
    setShowPickUpDateDropdown(false);
    setShowReturnDateDropdown(false);
  };

  const togglePickUpDateDropdown = () => {
    setShowPickUpDateDropdown(!showPickUpDateDropdown);
    setShowPickUpDropdown(false);
    setShowReturnDateDropdown(false);
  };

  const toggleReturnDateDropdown = () => {
    setShowReturnDateDropdown(!showReturnDateDropdown);
    setShowPickUpDropdown(false);
    setShowPickUpDateDropdown(false);
  };

  return (
    <div className="pick-up-settings">
      <ul className="pick-up-settings-list">
      <li
        className="pick-up-settings-item icon icon-keyboard_arrow_down drop"
        onClick={togglePickUpDropdown}
      >
          <span className="icon icon-location"></span>
          <span className="dropdown-title">Pick up</span>

          {showPickUpDropdown && (
            <div className="dropdown has-scroll">
              <ul className="drop-down-list">
                <li className="dropdown-item">Location 1</li>
                <li className="dropdown-item">Location 2</li>
                <li className="dropdown-item">Location 2</li>
                <li className="dropdown-item">Location 1</li>
                <li className="dropdown-item">Location 2</li>
                <li className="dropdown-item">Location 2</li>
                <li className="dropdown-item">Location 1</li>
                <li className="dropdown-item">Location 2</li>
                <li className="dropdown-item">Location 2</li>
              </ul>
            </div>
          )}
        </li>
        <li
          className="pick-up-settings-item drop"
          
        >
          <span className="icon icon-calendar"></span>
          <span className="dropdown-title">Pick up date</span>
          <i className="icon icon-keyboard_arrow_down" onClick={togglePickUpDateDropdown}></i>
          {showPickUpDateDropdown && (
              <DatePicker returnValue="start" />
          )}
        </li>
        <li
          className="pick-up-settings-item"
          // onClick={toggleReturnDateDropdown}
        >
          <span className="icon icon-calendar icon-return"></span>
          <span className="dropdown-title">Return date</span>
          <i className="icon icon-keyboard_arrow_down drop" onClick={toggleReturnDateDropdown}></i>
          
          {/* <i className="icon-keyboard_arrow_down"></i> */}
          {showReturnDateDropdown && (
            <DatePicker returnValue="end"/>
          )}
        </li>
        <li className="pick-up-settings-item search">
          <button type="button" className="button pick-up-search-button">
            Search
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PickUpSettings;
