import React, { useState, useContext } from "react";
import { observer } from "mobx-react";

import DatePicker from "components/common/DatePicker";
import CustomSelect from "components/common/CustomSelect";

import RootStore from 'store';

import { LOCATIONS } from 'constants/locations';
import { getNewFormate } from 'helpers/calendar';

const PickUpSettings = observer(() => {
  const { calendarStore, searchStore } = useContext(RootStore);
  const { startDate, returnDate } = calendarStore;
  const { selectedLocation } = searchStore;

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

  const onSearch = () => {
    searchStore.onSearchBtnClick();
    setShowReturnDateDropdown(false);
    setShowPickUpDropdown(false);
    setShowPickUpDateDropdown(false);
  }

  return (
    <div className="pick-up-settings">
      <ul className={calendarStore.isError || searchStore.isError ? "pick-up-settings-list has-error" : "pick-up-settings-list"}>
        <li className="pick-up-settings-item">
          <div className="setting-item-header" onClick={togglePickUpDropdown}>
            <i className="icon icon-location"></i>
            <span className="dropdown-title">{selectedLocation ? selectedLocation.label : "Pick up"}</span>
            <i className="icon icon-keyboard_arrow_down"></i>
          </div>
          {showPickUpDropdown && (
              <CustomSelect
                options={LOCATIONS}
                placeholder="Select an option"
                onChange={(location) => searchStore.setSelectedLocation(location)}
              />
          )}
        </li>
        <li className = "pick-up-settings-item">
          <div className="setting-item-header" onClick={togglePickUpDateDropdown}>
            <i className="icon icon-calendar"></i>
            <span className="dropdown-title">{startDate ? getNewFormate(startDate) : "Pick up date"}</span>
            <i className="icon icon-keyboard_arrow_down"></i>
          </div>
          {showPickUpDateDropdown && (
            <DatePicker
              value={startDate}
              onChange={(date) => {
                calendarStore.setStartDate(date);
              }}
              />
          )}
        </li>
        <li className={calendarStore.isError ? "pick-up-settings-item has-error" : "pick-up-settings-item"}>
          <div className="setting-item-header" onClick={toggleReturnDateDropdown}>
            <i className="icon icon-calendar icon-return"></i>
            <span className="dropdown-title">{returnDate ? getNewFormate(returnDate) : "Return date"}</span>
            <i className="icon icon-keyboard_arrow_down drop"></i>
          </div>
          {showReturnDateDropdown && (
            <DatePicker
                value={returnDate}
                onChange={(date) => {
                  calendarStore.setReturnDate(date);
                }}
            />
          )}
          {calendarStore.isError && <p className="error-message">Return date is not valid. Return date should be later then Pick up date</p>}
        </li>
        <li className="pick-up-settings-item search">
            <button type="button" className="button pick-up-search-button" onClick={() => onSearch()}>
              Search
            </button>
        </li>
        {searchStore.isError && <p className={"error-message"}>You've missed some required fields. Please go back and fill in all the blanks.</p>}
      </ul>
    </div>
  );
});

export default PickUpSettings;
