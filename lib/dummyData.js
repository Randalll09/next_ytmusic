import { getRandomInt } from './utils';

export const dummyAllSongList = [
  {
    name: 'ch1',
    channelId: 1,
    channel: 'Calm Music',
    src: '/music/Calm Music - ch1.mp3',
    imageSrc: '/img/Calm Music - ch1.jpg',
  },
  {
    name: 'ch2',
    channelId: 1,
    channel: 'Calm Music',
    src: '/music/Calm Music - ch2.mp3',
    imageSrc: '/img/Calm Music - ch2.jpg',
  },
  {
    name: 'ch3',
    channelId: 1,
    channel: 'Calm Music',
    src: '/music/Calm Music - ch3.mp3',
    imageSrc: '/img/Calm Music - ch3.jpg',
  },
  {
    name: 'ch4',
    channelId: 1,
    channel: 'Calm Music',
    src: '/music/Calm Music - ch4.mp3',
    imageSrc: '/img/Calm Music - ch4.jpg',
  },
  {
    name: 'Ailien in Me',
    channelId: 2,
    channel: 'The Angry',
    src: '/music/The Angry - Ailien in Me.mp3',
    imageSrc: '/img/The Angry - Ailien in Me.jpg',
  },
  {
    name: 'Apple',
    channelId: 2,
    channel: 'The Angry',
    src: '/music/The Angry - Apple.mp3',
    imageSrc: '/img/The Angry - Apple.jpg',
  },
  {
    name: 'Calibrana',
    channelId: 2,
    channel: 'The Angry',
    src: '/music/The Angry - Calibrana.mp3',
    imageSrc: '/img/The Angry - Calibrana.jpg',
  },
  {
    name: 'The Man with His',
    channelId: 2,
    channel: 'The Angry',
    src: '/music/The Angry - The Man with His.mp3',
    imageSrc: '/img/The Angry - The Man with His.jpg',
  },
  {
    name: 'Track 01',
    channelId: 3,
    channel: 'Clean Soap',
    src: '/music/Clean Soap - Track 01.mp3',
    imageSrc: '/img/Clean Soap - Track 01.jpg',
  },
  {
    name: 'Track 02',
    channelId: 3,
    channel: 'Clean Soap',
    src: '/music/Clean Soap - Track 02.mp3',
    imageSrc: '/img/Clean Soap - Track 02.jpg',
  },
  {
    name: 'Harsh Winter',
    channelId: 4,
    channel: 'Tender Me',
    src: '/music/Tender Me - Harsh Winter.mp3',
    imageSrc: '/img/Tender Me - Harsh Winter.jpg',
  },
  {
    name: '그녀의 손',
    channelId: 4,
    channel: 'Tender Me',
    src: '/music/Tender Me - 그녀의 손.mp3',
    imageSrc: '/img/Tender Me - 그녀의 손.jpg',
  },
  {
    name: '노란나비와 너',
    channelId: 4,
    channel: 'Tender Me',
    src: '/music/Tender Me - 노란나비와 너.mp3',
    imageSrc: '/img/Tender Me - 노란나비와 너.jpg',
  },
  {
    name: '여기서 읽는 것',
    channelId: 4,
    channel: 'Tender Me',
    src: '/music/Tender Me - 여기서 읽는 것.mp3',
    imageSrc: '/img/Tender Me - 여기서 읽는 것.jpg',
  },
];

export const getSongsBychannel = (channel) => {
  return dummyAllSongList.filter((song) => song.channel === channel);
};

// playlist
export const dummyPlaylistArray = [
  {
    id: 1,
    owner: 'Calm Music',
    playlistName: "Calm Music's playlist",
    songList: getSongsBychannel('Calm Music'),
  },
  {
    id: 2,
    owner: 'The Angry',
    playlistName: "The Angry's playlist",
    songList: getSongsBychannel('The Angry'),
  },
  {
    id: 3,
    owner: 'Clean Soap',
    playlistName: "Clean Soap's playlist ears",
    songList: getSongsBychannel('Clean Soap'),
  },
  {
    id: 4,
    owner: 'Tender Me',
    playlistName: 'Tender Meylist music',
    songList: getSongsBychannel('Tender Me'),
  },
  {
    id: 5,
    owner: '도도',
    playlistName: "dodo's playlist music",
    songList: [
      ...getSongsBychannel('The Angry'),
      ...getSongsBychannel('Clean Soap'),
      ...getSongsBychannel('Tender Me'),
    ],
  },
];

export const getAllPlaylist = async () => [...dummyPlaylistArray];

export const getPlaylistByOwner = (owner) => {
  return dummyPlaylistArray.filter((playlist) => playlist.owner === owner);
};

export const getPlaylistById = async (id) => {
  return dummyPlaylistArray.filter((playlist) => playlist.id === id)?.[0];
};

export const getSongListTop10 = async () =>
  dummyAllSongList.map((song, idx) => {
    return {
      rank: idx,
      prevRank: idx + getRandomInt(-3, 3),
      ...song,
    };
  });

// channel
export const dummyChannelList = [
  {
    id: 1,
    subscribers: 4200,
    name: 'Calm Music',
    songList: getSongsBychannel('Calm Music'),
    playlistArray: getPlaylistByOwner('Calm Music'),
  },
  {
    id: 2,
    subscribers: 2900,
    name: 'The Angry',
    songList: getSongsBychannel('The Angry'),
    playlistArray: getPlaylistByOwner('The Angry'),
  },
  {
    id: 3,
    subscribers: 3900,
    name: 'Tender Me',
    songList: getSongsBychannel('Tender Me'),
    playlistArray: getPlaylistByOwner('Tender Me'),
  },
  {
    id: 4,
    subscribers: 3900,
    name: 'Clean Soap',
    songList: getSongsBychannel('Clean Soap'),
    playlistArray: getPlaylistByOwner('Clean Soap'),
  },
  {
    id: 5,
    subscribers: 3900,
    name: '도도',
    songList: [
      ...getSongsBychannel('Calm Music'),
      ...getSongsBychannel('The Angry'),
    ],
    playlistArray: [
      ...getPlaylistByOwner('Calm Music'),
      ...getPlaylistByOwner('The Angry'),
    ],
  },
];

export const getChannelById = async (id) => {
  return dummyChannelList.filter((channel) => channel.id === id)?.[0];
};

// home - 카테고리
export const homeCategoryList = [
  {
    label: '운동',
    src: 'https://images.unsplash.com/photo-1487956382158-bb926046304a',
  },
  {
    label: '행복한 기분',
    src: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70',
  },
  {
    label: '에너지 충전',
    src: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94',
  },
  {
    label: '휴식',
    src: 'https://images.unsplash.com/photo-1528962862197-29c4f24ccc04',
  },
  {
    label: '집중',
    src: 'https://images.unsplash.com/photo-1472745433479-4556f22e32c2',
  },
  {
    label: '출퇴근길',
    src: 'https://images.unsplash.com/photo-1657073895095-b050616ab369',
  },
  {
    label: '로맨스',
    src: 'https://images.unsplash.com/photo-1581700501514-95e559cff7e9',
  },
  {
    label: '파티',
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
  },
  {
    label: '슬픔',
    src: 'https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc',
  },
  {
    label: '잠잘 때',
    src: 'https://images.unsplash.com/photo-1429117237875-aa29229d99f0',
  },
];

// 분위기 및 장르
// Array.from(document.querySelectorAll("#items")[7].querySelectorAll("button")).map( el => el.textContent.replaceAll("\n","").trim())
export const dymmyGenreList = [
  '잠잘 때',
  '인디 & 얼터너티브',
  '계절 변화를 위한 테마',
  '국내 발라드',
  '국내 록/얼터너티브',
  '슬픔',
  '연말연시',
  '아프리카',
  '출퇴근 & 등하교',
  '사랑 노래',
  '한국 힙합',
  '힙합',
  '국내 R&B',
  '2010년대',
  'R&B 및 소울',
  '록',
  '국내 댄스',
  '힘이 필요할 때',
  '편안한 분위기',
  '운동할 때',
  'OST & 뮤지컬',
  '파티 음악',
  '행복한 기분',
  '트로트',
  'Reggae & Caribbean',
  '집중할 때',
  '1980년대',
  '2000년대',
  '포크/어쿠스틱',
  '크리스마스',
  '1990년대',
  'Pop',
  '블랙 라이브즈 매터',
  '재즈',
  '클래식',
  '가족',
  '1970년대 음악',
  '아랍 음악',
  '1960년대',
  '댄스 & 일렉트로닉',
  '만도팝 및 캔터팝',
  '컨트리 & 아메리카나',
  'J팝',
  '블루스',
  '라틴',
  '메탈',
  '이라크 음악',
  '발리우드 & 인도',
];
