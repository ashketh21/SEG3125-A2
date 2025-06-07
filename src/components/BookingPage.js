// components/BookingPage.js
import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';
import TimeSlots from './TimeSlots';
import ServiceHours from './ServiceHours';

const BookingPage = ({ state, updateState, onConfirm }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [patientDetails, setPatientDetails] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleServiceSelect = (e) => {
    updateState({ selectedService: e.target.value });
  };

  const handleDateSelect = (date) => {
    updateState({ 
      selectedDate: date,
      selectedTime: '' // Clear selected time when date changes
    });
  };

  const handleTimeSelect = (time) => {
    updateState({ selectedTime: time });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (!state.selectedService || !state.selectedDate || !state.selectedTime || !patientDetails.name) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }
    
    updateState({ patientDetails });
    onConfirm();
  };

  const getSelectedDetailsText = () => {
    const { selectedService, selectedDate, selectedTime } = state;
    if (!selectedService && !selectedDate && !selectedTime) {
      return 'Please select a service, date, and time.';
    }
    
    let detailsText = selectedService || '';
    if (selectedDate) {
      detailsText += ` - ${selectedDate.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      })}`;
    }
    if (selectedTime) {
      detailsText += ` at ${selectedTime}`;
    }
    return detailsText;
  };

  return (
    <div className="gap-1 px-2 sm:px-6 flex flex-col lg:flex-row flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[920px] lg:max-w-[520px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#111811] tracking-light text-[32px] font-bold leading-tight min-w-72">Book an Appointment</p>
        </div>

        {/* Service Selection */}
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <span className="text-[#111811] text-sm font-medium pb-1.5">Service</span>
            <select 
              value={state.selectedService}
              onChange={handleServiceSelect}
              className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111811] focus:outline-0 focus:ring-0 border border-[#dce5dc] bg-white focus:border-[#dce5dc] h-14 bg-no-repeat bg-right pr-8 placeholder:text-[#638863] p-[15px] text-base font-normal leading-normal"
            >
              <option value="">Select Service</option>
              <option value="General Checkups">General Checkups</option>
              <option value="Family Care">Family Care</option>
              <option value="Prescription Renewals">Prescription Renewals</option>
            </select>
          </label>
        </div>

        {/* Calendar Section */}
        <div className="p-4">
          <p className="text-[#111811] text-base font-medium pb-2">Select Date</p>
          <Calendar 
            currentMonth={state.currentMonth}
            currentYear={state.currentYear}
            selectedDate={state.selectedDate}
            onDateSelect={handleDateSelect}
            onMonthChange={(month, year) => updateState({ currentMonth: month, currentYear: year })}
          />
        </div>

        {/* Time Slots Section */}
        <div className="p-4">
          <p className="text-[#111811] text-base font-medium pb-2">Select Time</p>
          <TimeSlots 
            selectedDate={state.selectedDate}
            selectedTime={state.selectedTime}
            onTimeSelect={handleTimeSelect}
          />
        </div>

        {/* Patient Information */}
        <div className="p-4">
          <p className="text-[#111811] text-base font-medium pb-3">Your Information</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name*"
              value={patientDetails.name}
              onChange={(e) => setPatientDetails(prev => ({ ...prev, name: e.target.value }))}
              className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111811] focus:outline-0 focus:ring-0 border border-[#dce5dc] bg-white focus:border-[#dce5dc] h-14 placeholder:text-[#638863] p-[15px] text-base font-normal leading-normal"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={patientDetails.phone}
              onChange={(e) => setPatientDetails(prev => ({ ...prev, phone: e.target.value }))}
              className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111811] focus:outline-0 focus:ring-0 border border-[#dce5dc] bg-white focus:border-[#dce5dc] h-14 placeholder:text-[#638863] p-[15px] text-base font-normal leading-normal"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={patientDetails.email}
              onChange={(e) => setPatientDetails(prev => ({ ...prev, email: e.target.value }))}
              className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111811] focus:outline-0 focus:ring-0 border border-[#dce5dc] bg-white focus:border-[#dce5dc] h-14 placeholder:text-[#638863] p-[15px] text-base font-normal leading-normal"
            />
            {errorMessage && (
              <p className="text-red-600 text-sm h-5">{errorMessage}</p>
            )}
            <button 
              type="submit"
              className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#afe8af] text-[#111811] text-sm font-bold hover:bg-[#9bd89b]"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>

      {/* Selected Details Sidebar */}
      <div className="layout-content-container flex flex-col w-full lg:w-[360px]">
        <div className="p-4 sticky top-4">
          <div className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[132px]" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_V-lTj-kLvdw2WuRJB-VzbG0Ajj2Xdqf45g1cSvuzB1aeaCBLvaOrQGNt67HI-ZLRQDpiLaq9CPHI7fttpesK0qm8wOXiu5WjfupMtum3Wgdk2EKFbWN5s1y_qDdlzcywjCjzNtftjshp_ntsCQM9T8llStKxCb2aNab6PpZaSa79teX43kVZm9OzSW2H28fQH71XvDMMiJ2idUELEBgz9y0nR-Iui2V5d9PyxHNBcXH1x5xIzM52bEQisyqEMk9YwygDWvWfbMQ")'}}>
            <div className="flex w-full items-end justify-between gap-4 p-4">
              <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                <p className="text-white tracking-light text-2xl font-bold">Selected Details</p>
                <p className="text-white text-base font-medium">{getSelectedDetailsText()}</p>
              </div>
            </div>
          </div>
          <ServiceHours />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;