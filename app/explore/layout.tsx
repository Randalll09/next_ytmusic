import React, { ReactNode } from 'react';
interface Props {
  children?: ReactNode;
  // any props that come into the component
}
const layout = ({ children }: Props) => {
  return (
    <div>
      레이아웃
      {children}
    </div>
  );
};

export default layout;
