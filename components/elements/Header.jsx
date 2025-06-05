'use client';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';

import UserIcon from '@/components/elements/UserIcon';
import PagePadding from '@/components/PagePadding';
import { FaChromecast } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import Logo from './Logo';
import Navigator from './Navigator';
import { cn } from '@/lib/utils';

const HeaderDrawer = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Drawer direction="left" open={isOpen} onOpenChange={() => setOpen(true)}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        <div className="py-3">
          <div className="px-3">
            <Logo isInDrawer onClickClose={() => setOpen(false)} />
          </div>
          <Navigator />
        </div>
        <DrawerClose>Cancle</DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};

const Header = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = headRef?.current?.scrollTop;
      setIsScrolled(scrollValue !== 0);
    };
    headRef?.current?.addEventListener('scroll', handleScroll);
    return () => {
      headRef?.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={headRef} className="relative overflow-y-auto w-full h-full">
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image
            src={
              'https://cdn.pixabay.com/photo/2018/04/11/06/03/flamingo-3309628_1280.jpg'
            }
            alt="media Item"
            fill
            objectFit="cover"
          />
          <div className="absolute top-0 w-full h-full bg-black opacity-40"></div>
          <div className="absolute top-0 w-full h-full bg-gradient-to-t from-black"></div>
        </div>
      </section>
      <section
        className={cn(
          'sticky top-0 left-0 z-10 bg-opacity-0 transition',
          isScrolled && ' bg-black transition'
        )}
      >
        <PagePadding>
          <div className="h-[64px] flex flex-row justify-between items-center ">
            <article
              className="hidden lg:flex h-[42px] min-w-[480px] flex-row items-center bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px]       
                border-neutral-500
                border"
            >
              <div>
                <FiSearch size={20} />
              </div>
              <input
                className="h-full w-full bg-transparent
                "
                placeholder="노래, 앨범, 팟캐스트 검색"
                type="text"
              />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>
            <article className="flex flex-row gap-4 items-center">
              <FaChromecast />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="relative">{children}</section>
    </header>
  );
};

export default Header;
