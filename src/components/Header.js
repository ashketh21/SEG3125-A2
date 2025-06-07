// components/Header.js
import React from 'react';

const Header = ({ onBookAppointment, onNavigate }) => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e9f1e9] px-10 py-3">
      <div className="flex items-center gap-4 text-[#111811]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.2034 33.5558C29.8983 36.4484 25.5253 39.1679 20.3624 41.3665C19.0472 41.9091 17.8823 42.0362 17.0306 41.9441C16.2108 41.8563 15.2387 41.4815 14.8835 40.9077C14.4508 40.2274 14.8263 39.0877 15.2817 38.0179C15.7705 36.8505 16.4247 35.5535 17.2168 34.2102L17.2168 34.2102C19.3763 30.4851 22.2336 26.1441 25.3392 22.4276C26.8731 20.5849 28.4554 18.9469 29.9881 17.6266C31.4955 16.3262 32.8926 15.4159 34.0069 15.0249C34.2375 14.9492 34.5272 14.8832 34.8451 14.8409ZM34.0069 15.0249L34.5311 15.1985C34.3005 15.1242 34.1614 15.0967 34.0069 15.0249Z" fill="#059669"></path>
            <path d="M17.6262 39.475C17.4363 40.358 17.5589 40.6863 17.5934 40.7581C17.655 40.7876 17.857 40.8547 18.3336 40.8082C19.0255 40.7408 20.0046 40.4502 21.2301 39.8572C23.6631 38.6799 26.6631 36.5085 29.5558 33.2034C32.4484 29.8983 35.1679 25.5253 37.3665 20.3624C37.9091 19.0472 38.0362 17.8823 37.9441 17.0306C37.8563 16.2108 37.4815 15.2387 36.9077 14.8835C36.2274 14.4508 35.0877 14.8263 34.0179 15.2817C32.8505 15.7705 31.5535 16.4247 30.2102 17.2168C26.4851 19.3763 22.1441 22.2336 18.4276 25.3392C16.5849 26.8731 14.9469 28.4554 13.6266 29.9881C12.3262 31.4955 11.4159 32.8926 11.0249 34.0069C10.9492 34.2375 10.8832 34.5272 10.8409 34.8451L10.1985 34.5311C10.1242 34.3005 10.0967 34.1614 10.0249 34.0069C10.0249 34.0069 10.0249 34.0069 10.0249 34.0069L10.1985 34.5311Z" fill="#10b981"></path>
          </svg>
        </div>
        <h2 className="text-[#111811] text-lg font-bold leading-tight tracking-[-0.015em]">Green Valley Family Clinic</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <button 
            className="nav-link text-[#111811] text-sm font-medium leading-normal cursor-pointer"
            onClick={() => onNavigate('landing')}
          >
            Home
          </button>
        </div>
        <button 
          className="book-appointment-btn flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#afe8af] text-[#111811] text-sm font-bold leading-normal tracking-[0.015em]"
          onClick={onBookAppointment}
        >
          <span className="truncate">Book Appointment</span>
        </button>
      </div>
    </header>
  );
};

export default Header;