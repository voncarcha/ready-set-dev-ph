import React from 'react';
import Logo from '../Logo';

const FooterSection = () => {
  return (
    <footer className="w-full border-t border-[rgba(255,255,255,0.1)] bg-primary px-[15px]">
      <div className="mx-auto flex max-w-[1200px] flex-col  items-center justify-between gap-[20px] md:flex-row">
        <span className="w-[150px]">
          <Logo />
        </span>
        <div className="flex ">
          <p className="text-[20px] text-white text-center md:text-left mt-[-30px] md:mt-0 mb-[20px] md:mb-0">
            ReadySetDev @ 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
