import Category from '@/app/(site)/components/Category';
import React from 'react';
import PagePadding from '@/components/PagePadding';
import PlaylistCarousel from '@/app/(site)/components/PlaylistCarousel';
import { dummyPlaylistArray } from '@/lib/dummyData';
import UserIcon from '@/components/elements/UserIcon';

const page = async () => {
  const dummyPlaylistArray1 = [...dummyPlaylistArray];
  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-12"></div>
        <Category></Category>
        <div className="mt-12">
          <PlaylistCarousel
            playlistArray={[...dummyPlaylistArray1]}
            Thumbnail={
              <div className="w-[56px] h-[56px]">
                <UserIcon size="lg" />
              </div>
            }
            title="다시 듣기"
            subTitle="도도"
          />
        </div>
        <div className="mt-20">
          <PlaylistCarousel
            playlistArray={[...dummyPlaylistArray1]}
            title="The Angry"
            subTitle="새로운 앨범"
          />
        </div>
        <div className="mt-20">
          <PlaylistCarousel
            playlistArray={[...dummyPlaylistArray1]}
            title="커뮤니티 제공"
          />
        </div>
        <div className="mt-20">
          <PlaylistCarousel
            playlistArray={[...dummyPlaylistArray1]}
            title="커버 및 리믹스"
          />
        </div>
      </div>
    </PagePadding>
  );
};

export default page;
