// import { campsCoversType, campTypeCover } from "@/types/SummerWinter/Camps";

// export const BOBOWSKA_PRZYGODA: campTypeCover = {
//   active: false,
//   title: "BOBOWSKA PRZYGODA",
//   localization: "KORZENNA",
//   coverImage: "bobowska-przygoda-2.webp",
//   href: "/galeria",
// };
// export const KREATYWNE_LABORATORIUM: campTypeCover = {
//   active: false,
//   title: "KREATYWNE LABORATORIUM",
//   localization: "KRAKÓW",
//   coverImage: "kreatywne-laboratorium.webp",
//   href: "/galeria",
// };
// export const POLKOLONIE_LATO_COVERS: campsCoversType = [
//   BOBOWSKA_PRZYGODA,
//   KREATYWNE_LABORATORIUM,
//   BOBOWSKA_PRZYGODA,
//   KREATYWNE_LABORATORIUM,
//   KREATYWNE_LABORATORIUM,
// ];
import EkstremalneLatoBobowaLandscapeImg from '@/public/gallery/bobowskaprzygoda2/landscapes/01.webp';
import EkstremalneLatoBobowaPortraitImg from '@/public/gallery/bobowskaprzygoda2/portraits/02.webp';
import SummerLogoWithName from '@/public/assets/logo/Logo-nemo-summer-with-name.svg';
import Attraction1Img from '@/public/gallery/naukaplywaniadzieciimlodziez/portraits/14.webp';
import Attraction2Img from '@/public/gallery/bobowskaprzygoda2/landscapes/05.webp';
import Attraction3Img from '@/public/gallery/bobowskaprzygoda2/landscapes/02.webp';
import Attraction4Img from '@/public/gallery/bobowskaprzygoda/portraits/26.webp';
import Attraction5Img from '@/public/gallery/bobowskaprzygoda/landscapes/05.webp';
import Attraction6Img from '@/public/gallery/bobowskaprzygoda2/landscapes/01.webp';
import Attraction7Img from '@/public/gallery/bobowskaprzygoda2/portraits/06.webp';
import Attraction8Img from '@/public/gallery/bobowskaprzygoda2/portraits/14.webp';
import Attraction9Img from '@/public/gallery/bobowskaprzygoda/portraits/03.webp';
import Attraction10Img from '@/public/gallery/kreatywnelaboratorium/landscapes/03.webp';

import {StaticImageData} from 'next/image';
import {HeroPropsType} from '@/components/OfertaLetnia/Polkolonie/Hero/Hero';
import {DetailsPropsType} from '@/components/OfertaLetnia/Ui/Details/Details';
import {ContactPropsType} from '@/components/OfertaZimowa/Ui/Contact/Contact';
import {AttractionsPropsType} from '@/components/OfertaLetnia/Polkolonie/Attractions/Attractions';
import {PriceDetailsPropsType} from '@/components/OfertaLetnia/Ui/PriceDetails/PriceDetails';

type PolkoloniaType = {
  logo: StaticImageData;
  hero: HeroPropsType;
  details: DetailsPropsType;
  contact: ContactPropsType;
  attractions: AttractionsPropsType;
  priceDetails: PriceDetailsPropsType;
};

export const POLKOLONIA_EKSTREMALNE_LATO_BOBOWA: PolkoloniaType = {
  logo: SummerLogoWithName,
  hero: {
    logo: SummerLogoWithName,
    images: {
      landscape: EkstremalneLatoBobowaLandscapeImg,
      portrait: EkstremalneLatoBobowaPortraitImg,
    },
    sticker: {
      firstLine: 'PÓŁKOLONIA SPORTOWA',
      secondLine: 'EKSTREMALNE LATO 2025',
    },
    location: 'BOBOWA',
    dateRange: '07.07-11.07.2025',
  },
  details: {
    location: 'BOBOWA',
    dateRange: '07.07-11.07.2025',
    price: {
      price: '800 PLN',
      promotion: true,
      promotionPrice: '700 PLN',
      promotionInfo: 'DLA KLIENTÓW NEMO',
    },
    about: {
      title: 'PÓŁKOLONIA SPORTOWA - EKSTREMALNE LATO 2025',
      description:
        'Chcesz, aby Twoje dziecko przeżyło niezapomnianą wakacyjną przygodę pełną aktywności i dobrej zabawy? Zapraszamy na Półkolonię „Ekstremalne Lato 2025”, gdzie każdy dzień to nowe wyzwania, sportowe atrakcje i mnóstwo radości!',
    },
    argumentsList: {
      title: 'Dlaczego warto wybrać nasze półkolonie?',
      arguments: [
        {
          title: 'Aktywne wakacje',
          description: '- różnorodne atrakcje każdego dnia.',
        },
        {
          title: 'Sport i zabawa',
          description: '- połączenie rekreacji z edukacją ruchową.',
        },
        {
          title: 'Integracja',
          description:
            '- zajęcia sprzyjające budowaniu relacji i pracy w grupie.',
        },
        {
          title: 'Bezpieczeństwo',
          description: '- doświadczona kadra i opieka przez cały dzień.',
        },
        {
          title: 'Zdrowe wyżywienie',
          description:
            '- pełnowartościowe posiłki dopasowane do aktywnego trybu dnia.',
        },
      ],
    },
  },
  contact: {
    title:
      'Dołącz do nas i przeżyj najbardziej EKSTREMALNE LATO pełne sportowych wrażeń!',
    phone: '+48 519 625 894',
    email: 'szkolaplywanianemo1@gmail.com',
  },
  attractions: {
    title: 'ATRAKCJE W PROGRAMIE',
    attracions: [
      {
        title: 'Zajęcia na basenie',
        image: Attraction1Img,
        description: 'Doskonalenie technik pływackich i zabawy wodne',
      },
      {
        title: 'Wycieczka rowerowa',
        image: Attraction2Img,
        description: 'DAktywna eksploracja okolicy',
      },
      {
        title: 'Ognisko',
        image: Attraction3Img,
        description: 'Wspólna zabawa i integracja',
      },
      {
        title: 'festiwal kolorów',
        image: Attraction4Img,
        description: 'Wyrzucanie kolorowych proszków w radosnej atmosferze',
      },
      {
        title: 'Puszczanie latawców',
        image: Attraction5Img,
        description: 'Kreatywna zabawa na świeżym powietrzu',
      },
      {
        title: 'Wycieczka do Krynicy',
        image: Attraction6Img,
        description: 'Jaworzyny - zjazdy i górskie atrakcje',
      },
      {
        title: 'Wyprawa do Jurasówki',
        image: Attraction7Img,
        description: 'Aktywne spędzanie czasu w plenerze',
      },
      {
        title: 'Wizyta w „Zimnej Krainie”',
        image: Attraction8Img,
        description: 'Pyszne lody na zakończenie półkolonii',
      },
      {
        title: 'Zajęcia artystyczne',
        image: Attraction9Img,
        description: 'Warsztaty kreatywne, malowanie, tworzenie rękodzieła',
      },
      {
        title: 'Piana Party ',
        image: Attraction10Img,
        description: 'Szalona zabawa w pianie, muzyka i taniec',
      },
    ],
  },
  priceDetails: {
    priceDetailsList: [
      'Tańce',
      'Zawody strażackie',
      'Zawody wspinaczkowe',
      'Dzień na basenie',
      'Warsztaty z robotyki',
      'Nauka podstaw ratownictwa',
      'Kulig',
      'Wodny tor przeszkód',
      'Wycieczka jednodniowa',
      'Gry integracyjne',
      'Zabawy ruchowe',
      'Drugie śniadania',
      'Ciepłe obiady',
      'Ubezpieczenie NNW',
    ],
  },
};
