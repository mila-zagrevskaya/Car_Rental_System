import React from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

const DatePicker = ({ value, onChange }) => {
  return (
    <div>
      <Calendar
        value={value}
        onChange={(date) => {
          onChange(date);
        }}
        minDate={new Date()}
        locale/>
    </div>
  );
}

export default DatePicker;
