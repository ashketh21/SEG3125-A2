// components/Calendar.js
import React from 'react';

const Calendar = ({ currentMonth, currentYear, selectedDate, onDateSelect, onMonthChange }) => {
  const renderCalendar = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });
    
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const calendarDays = [];
    
    // Day headers
    days.forEach(day => {
      calendarDays.push(
        <p key={`header-${day}`} className="text-[#111811] text-[13px] font-bold tracking-normal flex h-12 w-full items-center justify-center pb-0.5">
          {day}
        </p>
      );
    });
    
    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`}></div>);
    }
    
    // Calendar days
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const isToday = new Date().toDateString() === date.toDateString();
      const isPast = date < new Date().setHours(0,0,0,0);
      const isSelected = selectedDate && selectedDate.toDateString() === date.toDateString();
      
      calendarDays.push(
        <button
          key={`day-${i}`}
          onClick={() => !isPast && onDateSelect(date)}
          disabled={isPast}
          className={`calendar-day flex h-12 w-full cursor-pointer items-center justify-center rounded-xl text-[#111811] text-sm font-medium hover:bg-gray-100 ${
            isToday ? 'bg-blue-100' : ''
          } ${isPast ? 'opacity-50 cursor-not-allowed' : ''} ${
            isSelected ? 'bg-[#afe8af] border-[#16ce16]' : ''
          }`}
        >
          {i}
        </button>
      );
    }
    
    return calendarDays;
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      onMonthChange(11, currentYear - 1);
    } else {
      onMonthChange(currentMonth - 1, currentYear);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      onMonthChange(0, currentYear + 1);
    } else {
      onMonthChange(currentMonth + 1, currentYear);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between pb-2">
        <button 
          onClick={handlePrevMonth}
          className="p-2 rounded-md hover:bg-gray-100 text-[#111811] text-sm font-medium"
        >
          ◀ Previous
        </button>
        <p className="text-[#111811] text-base font-medium">
          {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
        </p>
        <button 
          onClick={handleNextMonth}
          className="p-2 rounded-md hover:bg-gray-100 text-[#111811] text-sm font-medium"
        >
          Next ▶
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {renderCalendar()}
      </div>
    </>
  );
};

export default Calendar;