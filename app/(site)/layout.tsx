import React, { ReactNode } from 'react';
import Header from '@/components/elements/Header';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const layout = ({ children }: Props) => {
  return (
    <div className="w-full h-full">
      <Header>{children}</Header>
    </div>
  );
};

export default layout;
