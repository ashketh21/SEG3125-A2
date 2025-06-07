// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-col gap-6 px-5 py-10 text-center @container">
          <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
            <a className="text-[#688268] text-base font-normal min-w-40" href="#">123 Wellness Lane, Ottawa, ON</a>
            <a className="text-[#688268] text-base font-normal min-w-40" href="#">(613) 123-4567</a>
            <a className="text-[#688268] text-base font-normal min-w-40" href="#">info@greenvalleyclinic.ca</a>
          </div>
          <p className="text-[#688268] text-base font-normal">© 2024 Green Valley Family Clinic. All rights reserved.</p>
          <p className="text-[#688268] text-base font-normal">
            This website was designed by{' '}
            <a href="https://ashvinkportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-700">
              Ashvin Kethiswaran
            </a>{' '}
            and{' '}
            <a href="https://svippu.github.io/entrypagesailvippu/" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-700">
              Sailendhar Vippu
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;