// src/components/ConfirmationPage.js
import React, { useState } from 'react';

const ConfirmationPage = ({ state, onModify, onReturnHome }) => {
  const [showTips, setShowTips] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGetTips = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowTips(true);
    }, 2000);
  };

  return (
    <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-full sm:w-[512px] py-5 flex-1">
        <div className="px-4 py-3">
          <h1 className="text-[#111811] text-2xl font-bold leading-tight pb-3">Appointment Confirmed!</h1>
          <div className="bg-[#f0f4f0] rounded-xl p-4 mb-4">
            <p className="text-[#111811] text-base font-medium pb-2">Appointment Details:</p>
            <div className="text-[#111811] text-sm space-y-1">
              <p><strong>Service:</strong> {state.selectedService}</p>
              <p><strong>Date:</strong> {state.selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
              <p><strong>Time:</strong> {state.selectedTime}</p>
              <p><strong>Patient:</strong> {state.patientDetails.name}</p>
            </div>
          </div>
          <div className="mb-4">
            <button 
              onClick={handleGetTips}
              disabled={loading}
              className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#afe8af] text-[#111811] text-sm font-bold hover:bg-[#9bd89b] mb-2"
            >
              Get Preparation Tips
            </button>
            {loading && (
              <div className="text-center py-4">
                <p className="text-[#111811] text-sm">Generating personalized tips...</p>
              </div>
            )}
            {showTips && (
              <div className="bg-[#f9f9f9] rounded-xl p-4">
                <h3 className="text-[#111811] text-base font-medium pb-2">Preparation Tips for {state.selectedService}</h3>
                <ul className="text-[#111811] text-sm space-y-1 list-disc list-inside">
                  <li>Bring your health card and any relevant insurance information</li>
                  <li>Arrive 15 minutes early to complete any necessary paperwork</li>
                  <li>Prepare a list of current medications and dosages</li>
                  <li>Write down any questions or concerns you'd like to discuss</li>
                  <li>Bring a list of your medical history and any recent test results</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
            <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#16ce16] text-[#111811] text-sm font-bold">
              <span className="truncate">Add to Calendar</span>
            </button>
            <button 
              onClick={onModify}
              className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f4f0] text-[#111811] text-sm font-bold"
            >
              <span className="truncate">Modify Appointment</span>
            </button>
            <button 
              onClick={onReturnHome}
              className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f4f0] text-[#111811] text-sm font-bold"
            >
              <span className="truncate">Return to Homepage</span>
            </button>
          </div>
        </div>
        <p className="text-[#111811] text-base font-normal pb-3 pt-1 px-4 text-center">We look forward to seeing you! Don't forget to bring your health card.</p>
      </div>
    </div>
  );
};

export default ConfirmationPage;