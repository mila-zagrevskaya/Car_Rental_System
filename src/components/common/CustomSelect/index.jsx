import React, { useState, useRef } from 'react';

const CustomSelect = ({ options, isOpen, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const selectRef = useRef(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    if (onChange) onChange(option);
  };

  return (
    <div
      className={`custom-select-container ${isOpen ? 'open' : ''}`}
      ref={selectRef}
    >
      <ul className="custom-select__options-list">
        {options.map((option) => (
          <li
            key={option.value}
            className={`custom-select__option ${
              selectedOption && selectedOption.value === option.value ? 'selected' : ''
            }`}
            onClick={() => handleSelectOption(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomSelect;
