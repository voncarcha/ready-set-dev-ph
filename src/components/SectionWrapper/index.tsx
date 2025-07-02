import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper = ({ children, className = '', id }: Props) => {
  return (
    <div
      className={`mx-auto w-full max-w-[1410px] ${className}`}
      id={id}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
