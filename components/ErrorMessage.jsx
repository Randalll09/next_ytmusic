'use client';

import React from 'react';
import { GridLoader } from 'react-spinners';

const ErrorMessage = () => {
  return (
    <div className=" my-20 w-full flex flex-col items-center gap-5">
      <GridLoader color="red" />
      <div className="text-4xl">OOPS!</div>
      <div>잠시 후 다시 확인해주세요</div>
    </div>
  );
};

export default ErrorMessage;
