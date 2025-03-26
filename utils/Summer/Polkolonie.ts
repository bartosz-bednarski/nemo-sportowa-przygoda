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
import EkstremalneLatoGorliceLandscapeImg from '@/public/gallery/bobowskaprzygoda/landscapes/06.webp';
import EkstremalneLatoGorlicePortraitImg from '@/public/gallery/bobowskaprzygoda2/portraits/12.webp';
import EkstremalneLatoKorzennaLandscapeImg from '@/public/gallery/kreatywnelaboratorium/landscapes/03.webp';
import EkstremalneLatoKorzennaPortraitImg from '@/public/gallery/kreatywnelaboratorium/portraits/26.webp';
import EkstremalneLatoNowySaczLandscapeImg from '@/public/gallery/bobowskaprzygoda2/landscapes/04.webp';
import EkstremalneLatoNowySaczPortraitImg from '@/public/gallery/bobowskaprzygoda2/portraits/11.webp';
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
import ScheduleBackgroundImg1 from '@/public/gallery/naukaplywaniadzieciimlodziez/portraits/13.webp';
import ScheduleBackgroundImg2 from '@/public/gallery/bobowskaprzygoda2/portraits/02.webp';
import ScheduleBackgroundImg3 from '@/public/gallery/bobowskaprzygoda2/landscapes/04.webp';
import ScheduleBackgroundImg4 from '@/public/gallery/wakacyjnafrajda/portraits/33.webp';
import ScheduleBackgroundImg5 from '@/public/gallery/bobowskaprzygoda/portraits/17.webp';

import {StaticImageData} from 'next/image';
import {HeroPropsType} from '@/components/OfertaLetnia/Polkolonie/Hero/Hero';
import {DetailsPropsType} from '@/components/OfertaLetnia/Ui/Details/Details';
import {ContactPropsType} from '@/components/OfertaZimowa/Ui/Contact/Contact';
import {AttractionsPropsType} from '@/components/OfertaLetnia/Polkolonie/Attractions/Attractions';
import {PriceDetailsPropsType} from '@/components/OfertaLetnia/Ui/PriceDetails/PriceDetails';
import {ColonyLinkPropsType} from '@/components/Ui/Links/ColonyLink/Winter/ColonyLinkWinter';
import {SchedulePropsType} from '@/components/OfertaLetnia/Polkolonie/Schedule/Schedule';

type PolkoloniaType = {
  logo: StaticImageData;
  hero: HeroPropsType;
  details: DetailsPropsType;
  contact: ContactPropsType;
  attractions: AttractionsPropsType;
  priceDetails: PriceDetailsPropsType;
  schedule: SchedulePropsType[];
};

export const POLKOLONIE_LISTA_2025: ColonyLinkPropsType[] = [
  {
    active: true,
    title: 'PÓŁKOLONIA EKSTREMALNE LATO',
    price: '850 PLN',
    localization: 'SP W BOBOWEJ',
    date: '07.07-11.07',
    coverImage: EkstremalneLatoBobowaLandscapeImg,
    href: '/ofertaletnia/polkolonie/bobowa/polkolonia-1',
  },
  {
    active: true,
    title: 'PÓŁKOLONIA EKSTREMALNE LATO',
    price: '850 PLN',
    localization: 'OSIR W GORLICACH',
    date: '07.07-11.07',
    coverImage: EkstremalneLatoGorliceLandscapeImg,
    href: '/ofertaletnia/polkolonie/gorlice/polkolonia-1',
  },
  {
    active: true,
    title: 'PÓŁKOLONIA EKSTREMALNE LATO',
    price: '850 PLN',
    localization: 'CSIR W KORZENNEJ',
    date: '14.07-18.07',
    coverImage: EkstremalneLatoKorzennaLandscapeImg,
    href: '/ofertaletnia/polkolonie/korzenna/polkolonia-1',
  },
  {
    active: true,
    title: 'PÓŁKOLONIA EKSTREMALNE LATO',
    price: '850 PLN',
    localization: 'SP 21 W NOWYM SĄCZU',
    date: '14.07-18.07',
    coverImage: EkstremalneLatoNowySaczLandscapeImg,
    href: '/ofertaletnia/polkolonie/nowysacz/polkolonia-1',
  },
];

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
    location: 'SP W BOBOWEJ',
    dateRange: '07.07-11.07.2025',
  },
  details: {
    location: 'BOBOWA',
    dateRange: '07.07-11.07.2025',
    price: {
      price: '850 PLN',
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
        description: 'Aktywna eksploracja okolicy',
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
        description: 'Warsztaty kreatywne, malowanie, rękodzieło',
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
      'Drugie śniadanie',
      'Obiad',
      'Koszulka dla każdego uczestnika',
      'Prezent niespodzianka',

      'Profesjonalna opieka w godzinach 8:00 - 16:00',
      'Ubezpieczenie NNW',
      'Basen',
      'Jazda konna',
      'Zabawy wodne',
      'Gry zespołowe',
      'Zajęcia artystyczno-plastyczne',
      'Transport na wycieczki',
      'Nagrody i upominki',
      'Bilety wstępu',
      'Materiały do zdjęć',
    ],
  },
  schedule: [
    {
      day: 'PONIEDZIAŁEK',
      title: 'Basen i Survival',
      description:
        'Rozpoczynamy aktywnie! Trening na basenie, a potem survivalowe wyzwania - wiązanie lin, obsługa kompasu i sprytne sztuczki przetrwania. Idealny start pełen ruchu i emocji!',
      backgroundImg: ScheduleBackgroundImg1,
    },
    {
      day: 'WTOREK',
      title: 'Przygoda w Jurasówce',
      description:
        'Dzień pełen atrakcji w ośrodku Jurasówka! Będzie ruch, zabawa i mnóstwo śmiechu.',
      backgroundImg: ScheduleBackgroundImg2,
    },
    {
      day: 'ŚRODA',
      title: 'Wycieczka do Krynicy i Letnia Sankostrada',
      description:
        'Ruszamy w góry! W planie ekscytująca przejażdżka na letniej sankostradzie i czas na wspólną zabawę w pięknej scenerii Krynicy.',
      backgroundImg: ScheduleBackgroundImg3,
    },
    {
      day: 'CZWARTEK',
      title: 'Stadnina, Piana Party i Festiwal Kolorów',
      description:
        'Jazda konna, szalone Piana Party i finałowy Festiwal Kolorów - to będzie dzień pełen wrażeń, którego dzieci długo nie zapomną!',
      backgroundImg: ScheduleBackgroundImg4,
    },
    {
      day: 'PIĄTEK',
      title: 'Basen, Zawody i Kolorowe Zakończenie',
      description:
        'Sportowa rywalizacja na basenie, emocjonujące zawody i wielki finał kolonii z Festiwalem Kolorów - idealne zakończenie niezapomnianego tygodnia!',
      backgroundImg: ScheduleBackgroundImg5,
    },
  ],
};

export const POLKOLONIA_EKSTREMALNE_LATO_GORLICE: PolkoloniaType = {
  logo: SummerLogoWithName,
  hero: {
    logo: SummerLogoWithName,
    images: {
      landscape: EkstremalneLatoGorliceLandscapeImg,
      portrait: EkstremalneLatoGorlicePortraitImg,
    },
    sticker: {
      firstLine: 'PÓŁKOLONIA SPORTOWA',
      secondLine: 'EKSTREMALNE LATO 2025',
    },
    location: 'OSIR W GORLICACH',
    dateRange: '07.07-11.07.2025',
  },
  details: {
    location: 'GORLICE',
    dateRange: '07.07-11.07.2025',
    price: {
      price: '850 PLN',
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
        description: 'Aktywna eksploracja okolicy',
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
        description: 'Warsztaty kreatywne, malowanie, rękodzieło',
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
      'Drugie śniadanie',
      'Obiad',
      'Koszulka dla każdego uczestnika',
      'Prezent niespodzianka',

      'Profesjonalna opieka w godzinach 8:00 - 16:00',
      'Ubezpieczenie NNW',
      'Basen',
      'Jazda konna',
      'Zabawy wodne',
      'Gry zespołowe',
      'Zajęcia artystyczno-plastyczne',
      'Transport na wycieczki',
      'Nagrody i upominki',
      'Bilety wstępu',
      'Materiały do zdjęć',
    ],
  },
  schedule: [
    {
      day: 'PONIEDZIAŁEK',
      title: 'Basen i Survival',
      description:
        'Rozpoczynamy aktywnie! Trening na basenie, a potem survivalowe wyzwania - wiązanie lin, obsługa kompasu i sprytne sztuczki przetrwania. Idealny start pełen ruchu i emocji!',
      backgroundImg: ScheduleBackgroundImg1,
    },
    {
      day: 'WTOREK',
      title: 'Przygoda w Jurasówce',
      description:
        'Dzień pełen atrakcji w ośrodku Jurasówka! Będzie ruch, zabawa i mnóstwo śmiechu.',
      backgroundImg: ScheduleBackgroundImg2,
    },
    {
      day: 'ŚRODA',
      title: 'Wycieczka do Krynicy i Letnia Sankostrada',
      description:
        'Ruszamy w góry! W planie ekscytująca przejażdżka na letniej sankostradzie i czas na wspólną zabawę w pięknej scenerii Krynicy.',
      backgroundImg: ScheduleBackgroundImg3,
    },
    {
      day: 'CZWARTEK',
      title: 'Stadnina, Piana Party i Festiwal Kolorów',
      description:
        'Jazda konna, szalone Piana Party i finałowy Festiwal Kolorów - to będzie dzień pełen wrażeń, którego dzieci długo nie zapomną!',
      backgroundImg: ScheduleBackgroundImg4,
    },
    {
      day: 'PIĄTEK',
      title: 'Basen, Zawody i Kolorowe Zakończenie',
      description:
        'Sportowa rywalizacja na basenie, emocjonujące zawody i wielki finał kolonii z Festiwalem Kolorów - idealne zakończenie niezapomnianego tygodnia!',
      backgroundImg: ScheduleBackgroundImg5,
    },
  ],
};

export const POLKOLONIA_EKSTREMALNE_LATO_KORZENNA: PolkoloniaType = {
  logo: SummerLogoWithName,
  hero: {
    logo: SummerLogoWithName,
    images: {
      landscape: EkstremalneLatoKorzennaLandscapeImg,
      portrait: EkstremalneLatoKorzennaPortraitImg,
    },
    sticker: {
      firstLine: 'PÓŁKOLONIA SPORTOWA',
      secondLine: 'EKSTREMALNE LATO 2025',
    },
    location: 'CSIR W KORZENNEJ',
    dateRange: '14.07-18.07.2025',
  },
  details: {
    location: 'KORZENNA',
    dateRange: '14.07-18.07.2025',
    price: {
      price: '850 PLN',
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
        description: 'Aktywna eksploracja okolicy',
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
        description: 'Warsztaty kreatywne, malowanie, rękodzieło',
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
      'Drugie śniadanie',
      'Obiad',
      'Koszulka dla każdego uczestnika',
      'Prezent niespodzianka',

      'Profesjonalna opieka w godzinach 8:00 - 16:00',
      'Ubezpieczenie NNW',
      'Basen',
      'Jazda konna',
      'Zabawy wodne',
      'Gry zespołowe',
      'Zajęcia artystyczno-plastyczne',
      'Transport na wycieczki',
      'Nagrody i upominki',
      'Bilety wstępu',
      'Materiały do zdjęć',
    ],
  },
  schedule: [
    {
      day: 'PONIEDZIAŁEK',
      title: 'Basen i Survival',
      description:
        'Rozpoczynamy aktywnie! Trening na basenie, a potem survivalowe wyzwania - wiązanie lin, obsługa kompasu i sprytne sztuczki przetrwania. Idealny start pełen ruchu i emocji!',
      backgroundImg: ScheduleBackgroundImg1,
    },
    {
      day: 'WTOREK',
      title: 'Przygoda w Jurasówce',
      description:
        'Dzień pełen atrakcji w ośrodku Jurasówka! Będzie ruch, zabawa i mnóstwo śmiechu.',
      backgroundImg: ScheduleBackgroundImg2,
    },
    {
      day: 'ŚRODA',
      title: 'Wycieczka do Krynicy i Letnia Sankostrada',
      description:
        'Ruszamy w góry! W planie ekscytująca przejażdżka na letniej sankostradzie i czas na wspólną zabawę w pięknej scenerii Krynicy.',
      backgroundImg: ScheduleBackgroundImg3,
    },
    {
      day: 'CZWARTEK',
      title: 'Stadnina, Piana Party i Festiwal Kolorów',
      description:
        'Jazda konna, szalone Piana Party i finałowy Festiwal Kolorów - to będzie dzień pełen wrażeń, którego dzieci długo nie zapomną!',
      backgroundImg: ScheduleBackgroundImg4,
    },
    {
      day: 'PIĄTEK',
      title: 'Basen, Zawody i Kolorowe Zakończenie',
      description:
        'Sportowa rywalizacja na basenie, emocjonujące zawody i wielki finał kolonii z Festiwalem Kolorów - idealne zakończenie niezapomnianego tygodnia!',
      backgroundImg: ScheduleBackgroundImg5,
    },
  ],
};

export const POLKOLONIA_EKSTREMALNE_LATO_NOWY_SACZ: PolkoloniaType = {
  logo: SummerLogoWithName,
  hero: {
    logo: SummerLogoWithName,
    images: {
      landscape: EkstremalneLatoNowySaczLandscapeImg,
      portrait: EkstremalneLatoNowySaczPortraitImg,
    },
    sticker: {
      firstLine: 'PÓŁKOLONIA SPORTOWA',
      secondLine: 'EKSTREMALNE LATO 2025',
    },
    location: 'SP 21 W NOWYM SĄCZU',
    dateRange: '14.07-18.07.2025',
  },
  details: {
    location: 'NOWY SĄCZ',
    dateRange: '14.07-18.07.2025',
    price: {
      price: '850 PLN',
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
        description: 'Aktywna eksploracja okolicy',
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
        description: 'Warsztaty kreatywne, malowanie, rękodzieło',
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
      'Drugie śniadanie',
      'Obiad',
      'Koszulka dla każdego uczestnika',
      'Prezent niespodzianka',

      'Profesjonalna opieka w godzinach 8:00 - 16:00',
      'Ubezpieczenie NNW',
      'Basen',
      'Jazda konna',
      'Zabawy wodne',
      'Gry zespołowe',
      'Zajęcia artystyczno-plastyczne',
      'Transport na wycieczki',
      'Nagrody i upominki',
      'Bilety wstępu',
      'Materiały do zdjęć',
    ],
  },
  schedule: [
    {
      day: 'PONIEDZIAŁEK',
      title: 'Basen i Survival',
      description:
        'Rozpoczynamy aktywnie! Trening na basenie, a potem survivalowe wyzwania - wiązanie lin, obsługa kompasu i sprytne sztuczki przetrwania. Idealny start pełen ruchu i emocji!',
      backgroundImg: ScheduleBackgroundImg1,
    },
    {
      day: 'WTOREK',
      title: 'Przygoda w Jurasówce',
      description:
        'Dzień pełen atrakcji w ośrodku Jurasówka! Będzie ruch, zabawa i mnóstwo śmiechu.',
      backgroundImg: ScheduleBackgroundImg2,
    },
    {
      day: 'ŚRODA',
      title: 'Wycieczka do Krynicy i Letnia Sankostrada',
      description:
        'Ruszamy w góry! W planie ekscytująca przejażdżka na letniej sankostradzie i czas na wspólną zabawę w pięknej scenerii Krynicy.',
      backgroundImg: ScheduleBackgroundImg3,
    },
    {
      day: 'CZWARTEK',
      title: 'Stadnina, Piana Party i Festiwal Kolorów',
      description:
        'Jazda konna, szalone Piana Party i finałowy Festiwal Kolorów - to będzie dzień pełen wrażeń, którego dzieci długo nie zapomną!',
      backgroundImg: ScheduleBackgroundImg4,
    },
    {
      day: 'PIĄTEK',
      title: 'Basen, Zawody i Kolorowe Zakończenie',
      description:
        'Sportowa rywalizacja na basenie, emocjonujące zawody i wielki finał kolonii z Festiwalem Kolorów - idealne zakończenie niezapomnianego tygodnia!',
      backgroundImg: ScheduleBackgroundImg5,
    },
  ],
};
