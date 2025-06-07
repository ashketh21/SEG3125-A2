// src/components/LandingPage.js
import React from 'react';

const LandingPage = ({ onBookAppointment }) => {
  return (
    <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
            <div 
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBivvKPtb-1EsxrMrodcSYp2COqSDMTL7j4tVWqHU5djupB4EKx358S_BhempGq4noaK9h7uBmtotTWwAE-NykDaduLudJJzz7KPHFxaYv8QHnplFw1DqZsRtPJehz2jKh2PjWk_4CVDfiLTTXTq81KsrzY7hYsUNEFIDvcpgzhgA3gVV2ECPkMvXhiJ-LwAeo13Jxv2Q-Bx2FgWIjFqZMs-pT4QRo8ZT6SSInhVd--IWH8Kka1OmaDRX40ydT2KBGJTQBqJEt1eFs")'}}
            ></div>
            <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-[#121712] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">Your Health, Our Priority</h1>
                <h2 className="text-[#121712] text-sm font-normal leading-normal @[480px]:text-base">Green Valley Family Clinic offers comprehensive healthcare services for all ages.</h2>
              </div>
              <button 
                onClick={onBookAppointment}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#afe8af] text-[#121712] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base"
              >
                <span className="truncate">Book an Appointment</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 p-4">
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dde4dd] bg-white p-4 items-center">
            <div className="text-[#121712]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M212,152a12,12,0,1,1-12-12A12,12,0,0,1,212,152Zm-4.55,39.29A48.08,48.08,0,0,1,160,232H136a48.05,48.05,0,0,1-48-48V143.49A64,64,0,0,1,32,80V40A16,16,0,0,1,48,24H64a8,8,0,0,1,0,16H48V80a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V40H128a8,8,0,0,1,0-16h16a16,16,0,0,1,16,16V79.17c0,32.84-24.53,60.29-56,64.31V184a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM224,152a24,24,0,1,0-24,24A24,24,0,0,0,224,152Z"></path>
              </svg>
            </div>
            <h2 className="text-[#121712] text-base font-bold leading-tight">General Checkups</h2>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dde4dd] bg-white p-4 items-center">
            <div className="text-[#121712]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
              </svg>
            </div>
            <h2 className="text-[#121712] text-base font-bold leading-tight">Family Care</h2>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dde4dd] bg-white p-4 items-center">
            <div className="text-[#121712]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M216.42,39.6a53.26,53.26,0,0,0-75.32,0L39.6,141.09a53.26,53.26,0,0,0,75.32,75.31h0L216.43,114.91A53.31,53.31,0,0,0,216.42,39.6ZM103.61,205.09h0a37.26,37.26,0,0,1-52.7-52.69L96,107.31,148.7,160ZM205.11,103.6,160,148.69,107.32,96l45.1-45.09a37.26,37.26,0,0,1,52.69,52.69ZM189.68,82.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,1,1-11.31-11.32l24-24A8,8,0,0,1,189.68,82.34Z"></path>
              </svg>
            </div>
            <h2 className="text-[#121712] text-base font-bold leading-tight">Prescription Renewals</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;