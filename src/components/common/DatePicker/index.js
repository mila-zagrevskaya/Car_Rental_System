import React, { useState } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

const DatePicker = () => {
  const [value, onChange] = useState(new Date());
  console.log("value", value);

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        minDate={new Date()}
        locale/>
    </div>
  );
}

export default DatePicker;
