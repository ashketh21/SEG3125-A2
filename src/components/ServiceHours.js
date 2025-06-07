// components/ServiceHours.js
import React from 'react';

const ServiceHours = () => {
  return (
    <div className="bg-white rounded-xl border border-[#dce5dc] p-4 mt-4">
      <h3 className="text-[#111811] text-base font-bold pb-2">Service Hours</h3>
      <div className="text-[#111811] text-sm space-y-1">
        <p><strong>Monday - Friday:</strong> 10:00 AM - 7:00 PM</p>
        <p><strong>Saturday - Sunday:</strong> 9:00 AM - 2:00 PM</p>
      </div>
    </div>
  );
};

export default ServiceHours;