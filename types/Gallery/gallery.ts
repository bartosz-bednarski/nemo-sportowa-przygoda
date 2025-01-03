import {customColors} from '../UI/colors';

export type galleryItemType = {
  href: string;
  type: galleryType;
  title: string;
  coverImage: string;
  stripColor: customColors;
  stripTextColor: customColors;
  collab: boolean;
  collabLogo: string;
  collabHref: string;
  images: {
    landscapes: string[][];
    portraits: string[];
  };
};
export type galleryType = 'LATO' | 'ZIMA' | 'PLYWANIE';
export type galleryMainType = galleryItemType[];
