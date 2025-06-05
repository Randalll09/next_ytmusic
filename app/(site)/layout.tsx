import React from 'react';
import Header from '@/components/elements/Header';

interface Props {
  children: ReactNode;
}

const layout = ({ children }: { children }:Props) => {
  return (
    <div className="w-full h-full">
      <Header>{children}</Header>
    </div>
  );
};

export default layout;
