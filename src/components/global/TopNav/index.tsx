import React from 'react';
import Logo from '../Logo';
import MenuIcon from './MenuIcon';

const TopNav = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-[15px] py-[20px]">
      <section className="mx-auto flex max-w-[1200px] items-center justify-between">
        <picture className="w-[150px] block">
          <Logo />
        </picture>
        <MenuIcon />
      </section>
    </nav>
  );
};

export default TopNav;
