import {customColors} from '@/types/UI/colors';

export type GalleryItemType = {
  href: string;
  type: GalleryType;
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
export type GalleryType = 'LATO' | 'ZIMA' | 'PLYWANIE';
export type GalleryMainType = GalleryItemType[];

export const GALLERY_MAIN: GalleryMainType = [
  {
    type: 'ZIMA',
    title: 'BAL KARNAWAŁOWY 2025',
    coverImage: 'bal-karnawalowy-2025.webp',
    stripColor: 'white',
    stripTextColor: 'darkBlue',
    href: 'balkarnawalowy2025',
    collab: true,
    collabLogo: '',
    collabHref: '',
    images: {
      landscapes: [
        ['01', '02'],
        ['03', '04'],
        ['05', ''],
      ],
      portraits: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
      ],
    },
  },
  {
    type: 'ZIMA',
    title: 'WEEKEND NA STOKU 2025',
    coverImage: 'weekend-na-stoku-2025.webp',
    stripColor: 'white',
    stripTextColor: 'darkBlue',
    href: 'weekendnastoku2025',
    collab: true,
    collabLogo: '',
    collabHref: '',
    images: {
      landscapes: [
        ['01', '02'],
        ['03', '04'],
        ['05', ''],
      ],
      portraits: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
      ],
    },
  },
  {
    type: 'PLYWANIE',
    title: 'NAUKA PŁYWANIA Z RODZICAMI',
    coverImage: 'nauka-plywania-z-rodzicami.webp',
    stripColor: 'darkBlue',
    stripTextColor: 'white',
    href: 'naukaplywaniazrodzicami',
    collab: false,
    collabLogo: '',
    collabHref: '',
    images: {
      landscapes: [['01', '']],
      portraits: ['01', '02', '03', '04', '05'],
    },
  },
  {
    type: 'PLYWANIE',
    title: 'NAUKA PŁYWANIA DZIECI I MŁODZIEŻ',
    coverImage: 'nauka-plywania-dzieci-i-mlodziez.webp',
    stripColor: 'darkBlue',
    stripTextColor: 'white',
    href: 'naukaplywaniadzieciimlodziez',
    collab: false,
    collabLogo: '',
    collabHref: '',
    images: {
      landscapes: [
        ['01', '02'],
        ['03', '04'],
        ['05', '06'],
        ['07', ''],
      ],
      portraits: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
      ],
    },
  },
  {
    type: 'ZIMA',
    title: 'WYJAZD NA NARTY 2024',
    coverImage: 'wyjazd-na-narty-2024.webp',
    stripColor: 'white',
    stripTextColor: 'darkBlue',
    href: 'wyjazdnanarty2024',
    collab: true,
    collabLogo: 'bom4sports-logo-black.webp',
    collabHref: 'https://www.bom4sports.pl/',
    images: {
      landscapes: [['01', '02']],
      portraits: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
      ],
    },
  },
  {
    type: 'LATO',
    title: 'BOBOWSKA PRZYGODA',
    coverImage: 'bobowska-przygoda.webp',
    stripColor: 'basicGreen',
    stripTextColor: 'white',
    href: 'bobowskaprzygoda',
    collab: false,
    collabLogo: '',
    collabHref: '',
    images: {
      landscapes: [
        ['01', '02'],
        ['03', '04'],
        ['05', '06'],
      ],
      portraits: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
        '32',
        '33',
        '34',
      ],
    },
  },
  {
    type: 'LATO',
    title: 'BOBOWSKA PRZYGODA II',
    coverImage: 'bobowska-przygoda-2.webp',
    stripColor: 'basicGreen',
    stripTextColor: 'white',
    href: 'bobowskaprzygoda2',
    collab: false,
    collabLogo: '',
    collabHref: '',
    images: {
      landscapes: [
        ['01', '02'],
        ['03', '04'],
        ['05', '06'],
      ],
      portraits: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
      ],
    },
  },
  {
    type: 'LATO',
    title: 'KREATYWNE LABORATORIUM',
    coverImage: 'kreatywne-laboratorium.webp',
    stripColor: 'basicGreen',
    stripTextColor: 'white',
    href: 'kreatywnelaboratorium',
    collab: false,
    collabLogo: '',
    collabHref: '',
    images: {
      landscapes: [
        ['01', '02'],
        ['03', ''],
      ],
      portraits: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
      ],
    },
  },
  {
    type: 'LATO',
    title: 'WAKACYJNA FRAJDA',
    coverImage: 'wakacyjna-frajda.webp',
    stripColor: 'basicGreen',
    stripTextColor: 'white',
    href: 'wakacyjnafrajda',
    collab: false,
    collabLogo: '',
    collabHref: '',
    images: {
      landscapes: [
        ['01', '02'],
        ['03', '04'],
      ],
      portraits: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
        '32',
        '33',
        '34',
      ],
    },
  },
];
