// components/TimeSlots.js
import React, { useEffect, useState } from 'react';

const TimeSlots = ({ selectedDate, selectedTime, onTimeSelect }) => {
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM'
  ];

  if (!selectedDate) {
    return (
      <div className="p-4 text-center text-[#638863]">
        Please select a date first
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {timeSlots.map((time) => (
        <button
          key={time}
          onClick={() => onTimeSelect(time)}
          className={`
            px-4 py-2 rounded-lg border text-sm font-medium transition-colors
            ${selectedTime === time 
              ? 'bg-[#afe8af] border-[#afe8af] text-[#111811]' 
              : 'bg-white border-[#dce5dc] text-[#111811] hover:bg-[#f8f9f8]'
            }
          `}
        >
          {time}
        </button>
      ))}
    </div>
  );
};

export default TimeSlots;