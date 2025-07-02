import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const PageWrapper = ({ children, className = '', id }: Props) => {
  return (
    <div
      className={`mx-auto min-h-[100vh] w-full ${className}`}
      id={id}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
