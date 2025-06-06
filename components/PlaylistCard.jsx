'use client';

import Image from 'next/image';
import React from 'react';
import { getRandomElementFromArr } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { FiMoreVertical } from 'react-icons/fi';
import { FiPlay } from 'react-icons/fi';
import IconButton from './elements/IconButton';

const PlaylistCard = ({ playlist }) => {
  const { push } = useRouter();
  const { id, owner, playlistName, songList } = playlist;
  const imgSrc = getRandomElementFromArr(songList).imageSrc;

  const songListLen = songList?.length;

  const onClickCard = () => {
    push(`/playlist?list=${id}`);
  };

  const onClickPlay = () => {
    //todo Play
  };

  return (
    <article className="h-[240px] cursor-pointer group">
      <section onClick={onClickCard} className="relative h-[136px] ">
        <Image src={imgSrc} fill alt="thumbnail" className="object-cover" />
        <div className="hidden relative group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 w-full h-[136px]">
          <div className="absolute top-2 right-4">
            <IconButton icon={<FiMoreVertical size={20} />} />
          </div>
          <div className="absolute bottom-4 right-2 flex items-center justify-center hover:bg-[rgba(0,0,0,0.4)] w-[45px] h-[45px] transform-gpu transition-transform hover:scale-110 bg-[rgba(0,0,0,0.2)] rounded-full pl-[2px]">
            <FiPlay size={22} color="red" />
          </div>
        </div>
      </section>
      <section className="mt-2">
        <div>{playlistName}</div>
        <div>{`${owner} - 트랙 ${songListLen}개`}</div>
      </section>
    </article>
  );
};

export default PlaylistCard;
