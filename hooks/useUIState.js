import { create } from 'zustand';

const useUIState = create((set) => ({
  homeCategory: '',
  headerImageSrc:
    'https://cdn.pixabay.com/photo/2018/04/11/06/03/flamingo-3309628_1280.jpg',
  setHomeCategory: (value) => set({ homeCategory: value }),
  setHeaderSrc: (src) => set({ headerImageSrc: src }),
}));

export default useUIState;
