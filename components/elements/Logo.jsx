'use client';

import React from 'react';
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useRouter } from 'next/navigation';
import IconButton from '@/components/elements/IconButton';
import { IoClose } from 'react-icons/io5';

const Logo = ({ isInDrawer = false, onClickClose = () => {} }) => {
  const { push } = useRouter();
  const onClickLogo = () => {
    //Home이동 로직
    push('/');
  };

  // const onClickClose = () => {};

  const onClickMenu = () => {};

  return (
    <section className="flex flex-row items-center gap-3">
      {isInDrawer ? (
        <IconButton icon={<IoClose width={30} />} onClickIcon={onClickClose} />
      ) : (
        <IconButton
          icon={<RxHamburgerMenu width={24} />}
          onClickIcon={onClickMenu}
        />
      )}
      <div className="cursor-pointer relative" onClick={onClickLogo}>
        <Image alt="logo" width={100} height={30} src={'/main-logo.svg'} />
      </div>
    </section>
  );
};

export default Logo;
