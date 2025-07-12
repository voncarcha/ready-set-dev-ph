'use client';

import React, { useEffect, useState } from 'react';
import Logo from '../Logo';
import MenuIcon from './MenuIcon';
import useGlobalStore from '@/hooks/useGlobalStore';
import Link from 'next/link';

const TopNav = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const { isNavOpen, setNavOpen } = useGlobalStore();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < prevScrollY);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  return (
    <nav
      className={`left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrollingUp ? 'fixed' : 'absolute'
      }`}
    >
      <section className="mx-auto flex max-w-[1650px] items-center justify-between">
        <Link href="/" className="block w-[150px] ml-[15px]">
          <Logo />
        </Link>
        <button onClick={() => setNavOpen(!isNavOpen)} className="block mr-[40px]">
          <MenuIcon />
        </button>
      </section>
    </nav>
  );
};

export default TopNav;
