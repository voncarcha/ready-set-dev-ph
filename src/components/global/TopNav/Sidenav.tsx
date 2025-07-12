import useGlobalStore from '@/hooks/useGlobalStore';
import Link from 'next/link';
import React from 'react';
import { IconMenuClose } from './Icons';

const Sidenav = () => {
  const { isNavOpen, setNavOpen } = useGlobalStore();

  const handleClose = () => {
    setNavOpen(false);
  };

  return (
    <nav
      className={`fixed right-0 top-0 z-50 h-full w-full max-w-[400px] bg-slate-700 transition-all duration-300 ${
        isNavOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button
        onClick={() => setNavOpen(!isNavOpen)}
        className="absolute right-[40px] top-[40px] block"
      >
        <IconMenuClose />
      </button>
      <ul className="flex flex-col gap-[20px] p-[50px] text-[26px] text-white">
        <li>
          <Link href="/" onClick={handleClose}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/#about" onClick={handleClose}>
            About
          </Link>
        </li>
        <li>
          <Link href="/#projects" onClick={handleClose}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/#services" onClick={handleClose}>
            Services
          </Link>
        </li>
        <li>
          <Link href="/#contact" onClick={handleClose}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
