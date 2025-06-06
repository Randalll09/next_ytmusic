import React from 'react';
import PlaylistCard from '@/components/PlaylistCard';
import { Playlist } from '@/types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface PlaylistCarouselProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  playlistArray: Playlist[];
}

const PlaylistCarousel: React.FC<PlaylistCarouselProps> = ({
  title,
  subTitle,
  Thumbnail,
  playlistArray,
}) => {
  return (
    <div className="w-full">
      <Carousel>
        <div className="flex flex-row justify-between items-end my-2">
          <article className="flex flex-row gap-3 items-center">
            {Thumbnail}
            <div className="flex flex-col justify-center">
              <div className="text-neutral-500">
                {subTitle && <div>{subTitle}</div>}
              </div>
              <div className="text-[34px] font-bold leading-[34px]">
                {title}
              </div>
            </div>
          </article>
          <div className="relative left-[-45px]">
            <div className="absolute bottom-[20px]">
              <CarouselPrevious className="right-2" />
              <CarouselNext />
            </div>
          </div>
        </div>
        <CarouselContent className="mt-4">
          {playlistArray?.map((playlist, idx) => (
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/3"
              key={playlist.id}
            >
              <PlaylistCard playlist={playlist} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PlaylistCarousel;
