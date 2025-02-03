// import React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import dayjs from 'dayjs';


// function CalenderInput({ value, onChange }) {
//   const today = dayjs(); // Get today's date
  
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DateRangePicker']} style={{ marginTop: '10px' }}>
//         <DateRangePicker
//           value={value}
//           onChange={onChange}
//           localeText={{ start: 'Check-in', end: 'Check-out' }}
//           minDate={today} 
//         />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }

// export default CalenderInput;


import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs from 'dayjs';

function CalenderInput({ value, onChange }) {
  const today = dayjs(); // Get today's date

  // Format dates for display
  const handleDateChange = (newValue) => {
    if (newValue && newValue.length === 2) {
      // Pass the selected date range to the parent component
      onChange([newValue[0], newValue[1]]);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']} style={{ marginTop: '10px' }}>
        <DateRangePicker
          value={value}
          onChange={handleDateChange}
          localeText={{ start: 'Check-in', end: 'Check-out' }}
          minDate={today} // Prevent selecting past dates
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default CalenderInput;
