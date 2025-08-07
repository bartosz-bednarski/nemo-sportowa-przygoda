import EkstremalneLatoBobowaLandscapeImg from '@/public/gallery/bobowskaprzygoda2/landscapes/01.webp';
import EkstremalneLatoBobowaPortraitImg from '@/public/gallery/bobowskaprzygoda2/portraits/02.webp';
import EkstremalneLatoGorliceLandscapeImg from '@/public/gallery/bobowskaprzygoda/landscapes/06.webp';
import EkstremalneLatoGorlicePortraitImg from '@/public/gallery/bobowskaprzygoda2/portraits/12.webp';
import EkstremalneLatoKorzennaLandscapeImg from '@/public/gallery/kreatywnelaboratorium/landscapes/03.webp';
import EkstremalneLatoKorzennaPortraitImg from '@/public/gallery/kreatywnelaboratorium/portraits/26.webp';
import EkstremalneLatoNowySaczLandscapeImg from '@/public/gallery/bobowskaprzygoda2/landscapes/04.webp';
import EkstremalneLatoNowySaczPortraitImg from '@/public/gallery/bobowskaprzygoda2/portraits/11.webp';
import LetniaMisjaBobowaLandscapeImg from '@/public/gallery/wakacyjnafrajda/landscapes/05.webp';
import LetniaMisjaBobowaPortraitImg from '@/public/gallery/wakacyjnafrajda/portraits/29.webp';
import LetniaMisjaGorliceLandscapeImg from '@/public/gallery/bobowskaprzygoda2/landscapes/02.webp';
import LetniaMisjaGorlicePortraitImg from '@/public/gallery/kreatywnelaboratorium/portraits/09.webp';
import LetniaMisjaKorzennaLandscapeImg from '@/public/gallery/wakacyjnafrajda/landscapes/06.webp';
import LetniaMisjaKorzennaPortraitImg from '@/public/gallery/kreatywnelaboratorium/portraits/19.webp';
import LetniaMisjaNowySaczLandscapeImg from '@/public/gallery/wakacyjnafrajda/landscapes/04.webp';
import LetniaMisjaNowySaczPortraitImg from '@/public/gallery/bobowskaprzygoda2/portraits/06.webp';
import SummerLogoWithName from '@/public/assets/logo/Logo-nemo-summer-with-name.svg';
import Attraction1Img from '@/public/gallery/naukaplywaniadzieciimlodziez/portraits/14.webp';
import Attraction2Img from '@/public/gallery/bobowskaprzygoda2/portraits/24.webp';
import Attraction3Img from '@/public/gallery/bobowskaprzygoda2/landscapes/02.webp';
import Attraction4Img from '@/public/gallery/bobowskaprzygoda/portraits/26.webp';
import Attraction5Img from '@/public/gallery/bobowskaprzygoda/landscapes/05.webp';
import Attraction6Img from '@/public/gallery/bobowskaprzygoda2/landscapes/01.webp';
import Attraction7Img from '@/public/gallery/bobowskaprzygoda2/portraits/06.webp';
import Attraction8Img from '@/public/gallery/bobowskaprzygoda2/portraits/14.webp';
import Attraction9Img from '@/public/gallery/bobowskaprzygoda/portraits/03.webp';
import Attraction10Img from '@/public/gallery/kreatywnelaboratorium/landscapes/03.webp';
import Attraction11Img from '@/public/gallery/bobowskaprzygoda2/portraits/02.webp';
import Attraction12Img from '@/public/gallery/bobowskaprzygoda2/portraits/25.webp';
import Attraction13Img from '@/public/gallery/wakacyjnafrajda/portraits/29.webp';
import Attraction14Img from '@/public/gallery/bobowskaprzygoda/portraits/20.webp';
import Attraction15Img from '@/public/gallery/bobowskaprzygoda2/landscapes/02.webp';
import Attraction16Img from '@/public/gallery/bobowskaprzygoda/landscapes/05.webp';
import ScheduleBackgroundImg1 from '@/public/gallery/naukaplywaniadzieciimlodziez/portraits/13.webp';
import ScheduleBackgroundImg2 from '@/public/gallery/bobowskaprzygoda2/portraits/02.webp';
import ScheduleBackgroundImg3 from '@/public/gallery/bobowskaprzygoda2/landscapes/04.webp';
import ScheduleBackgroundImg4 from '@/public/gallery/wakacyjnafrajda/portraits/33.webp';
import ScheduleBackgroundImg5 from '@/public/gallery/bobowskaprzygoda/portraits/17.webp';

import {StaticImageData} from 'next/image';
import {HeroPropsType} from '@/components/OfertaLetnia/PolkolonieObozy/Hero/Hero';
import {DetailsPropsType} from '@/components/OfertaLetnia/Ui/Details/Details';
import {ContactPropsType} from '@/components/OfertaZimowa/Ui/Contact/Contact';
import {AttractionsPropsType} from '@/components/OfertaLetnia/PolkolonieObozy/Attractions/Attractions';
import {PriceDetailsPropsType} from '@/components/OfertaLetnia/Ui/PriceDetails/PriceDetails';
import {ColonyLinkPropsType} from '@/components/Ui/Links/ColonyLink/Winter/ColonyLinkWinter';
import {SchedulePropsType} from '@/components/OfertaLetnia/PolkolonieObozy/Schedule/Schedule';

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
    active: false,
    title: 'PÓŁKOLONIA EKSTREMALNE LATO',
    price: '850 PLN',
    localization: 'SP W BOBOWEJ',
    date: '07.07-11.07',
    coverImage: EkstremalneLatoBobowaLandscapeImg,
    href: '/ofertaletnia/polkolonie/bobowa/polkolonia-1',
  },
  {
    active: false,
    title: 'PÓŁKOLONIA EKSTREMALNE LATO',
    price: '850 PLN',
    localization: 'OSIR W GORLICACH',
    date: '07.07-11.07',
    coverImage: EkstremalneLatoGorliceLandscapeImg,
    href: '/ofertaletnia/polkolonie/gorlice/polkolonia-1',
  },
  {
    active: false,
    title: 'PÓŁKOLONIA EKSTREMALNE LATO',
    price: '850 PLN',
    localization: 'CSIR W KORZENNEJ',
    date: '14.07-18.07',
    coverImage: EkstremalneLatoKorzennaLandscapeImg,
    href: '/ofertaletnia/polkolonie/korzenna/polkolonia-1',
  },
  {
    active: false,
    title: 'PÓŁKOLONIA EKSTREMALNE LATO',
    price: '850 PLN',
    localization: 'NOWY SĄCZ',
    date: '14.07-18.07',
    coverImage: EkstremalneLatoNowySaczLandscapeImg,
    href: '/ofertaletnia/polkolonie/nowysacz/polkolonia-1',
  },
  {
    active: false,
    title: 'PÓŁKOLONIA LETNIA MISJA',
    price: '850 PLN',
    localization: 'SP W BOBOWEJ',
    date: '04.08-08.08',
    coverImage: LetniaMisjaBobowaLandscapeImg,
    href: '/ofertaletnia/polkolonie/bobowa/polkolonia-2',
  },
  {
    active: false,
    title: 'PÓŁKOLONIA LETNIA MISJA',
    price: '850 PLN',
    localization: 'OSIR W GORLICACH',
    date: '04.08-08.08',
    coverImage: LetniaMisjaGorliceLandscapeImg,
    href: '/ofertaletnia/polkolonie/gorlice/polkolonia-2',
  },
  {
    active: false,
    title: 'PÓŁKOLONIA LETNIA MISJA',
    price: '850 PLN',
    localization: 'CSIR W KORZENNEJ',
    date: '11.08-15.08',
    coverImage: LetniaMisjaKorzennaLandscapeImg,
    href: '/ofertaletnia/polkolonie/korzenna/polkolonia-2',
  },
  {
    active: false,
    title: 'PÓŁKOLONIA LETNIA MISJA',
    price: '850 PLN',
    localization: 'NOWY SĄCZ',
    date: '11.08-15.08',
    coverImage: LetniaMisjaNowySaczLandscapeImg,
    href: '/ofertaletnia/polkolonie/nowysacz/polkolonia-2',
  },
];

//
// _____________________EKSTREMALNE LATO BOBOWA_____________________
//
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

//
// _____________________EKSTREMALNE LATO GORLICE_____________________
//
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

//
// _____________________EKSTREMALNE LATO KORZENNA_____________________
//
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

//
// _____________________EKSTREMALNE LATO NOWY SACZ_____________________
//
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
    location: 'NOWY SĄCZ',
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
//
// _____________________LETNIA MISJA BOBOWA_____________________
//
export const POLKOLONIA_LETNIA_MISJA_BOBOWA: PolkoloniaType = {
  logo: SummerLogoWithName,
  hero: {
    logo: SummerLogoWithName,
    images: {
      landscape: LetniaMisjaBobowaLandscapeImg,
      portrait: LetniaMisjaBobowaPortraitImg,
    },
    sticker: {
      firstLine: 'PÓŁKOLONIA SPORTOWA',
      secondLine: 'LETNIA MISJA 2025',
    },
    location: 'SP W BOBOWEJ',
    dateRange: '04.08-08.08.2025',
  },
  details: {
    location: 'BOBOWA',
    dateRange: '04.08-08.08.2025',
    price: {
      price: '850 PLN',
      promotion: true,
      promotionPrice: '700 PLN',
      promotionInfo: 'DLA KLIENTÓW NEMO',
    },
    about: {
      title: 'PÓŁKOLONIA SPORTOWA - LETNIA MISJA 2025',
      description:
        'Chcesz, aby Twoje dziecko przeżyło niezapomnianą wakacyjną przygodę pełną aktywności i dobrej zabawy? Zapraszamy na Półkolonię „Letnia Misja 2025”, gdzie każdy dzień to nowe wyzwania, sportowe atrakcje i mnóstwo radości!',
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
        title: 'GRA TERENOWA',
        image: Attraction11Img,
        description: 'Integracyjna gra terenowa na świeżym powietrzu',
      },
      {
        title: 'TAJEMNICZE ŚLEDZTWO',
        image: Attraction12Img,
        description: 'Detektywistyczne śledztwo pełne zagadek',
      },
      {
        title: 'przygoda w jurasówce',
        image: Attraction7Img,
        description: 'Dzień pełen zabawy, ruchu i śmiechu',
      },
      {
        title: 'GRA ZESPOŁOWA',
        image: Attraction13Img,
        description:
          'Wspólna gra zespołowa,która zbliży wszystkich uczestników',
      },
      {
        title: 'PARK TRAMPOLIN',
        image: Attraction14Img,
        description: 'Energetyczne skoki, salta i wspólna zabawa',
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
      {
        title: 'festiwal kolorów',
        image: Attraction4Img,
        description: 'Wyrzucanie kolorowych proszków w radosnej atmosferze',
      },
      {
        title: 'Wycieczka rowerowa',
        image: Attraction2Img,
        description: 'Aktywna eksploracja okolicy',
      },
      {
        title: 'JAZDA KONNA',
        image: Attraction15Img,
        description: 'Wizyta w stadninie koni i jazda konna',
      },
      {
        title: 'pokaz talentów',
        image: Attraction16Img,
        description: 'Kreatywny pokaz z nagrodami',
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
      title: 'Basen, Eksperymenty i Śledztwo',
      description:
        'Poranny trening na basenie, potem fascynujące eksperymenty i detektywistyczne śledztwo pełne zagadek! Dzień zakończymy integracyjną grą terenową.',
      backgroundImg: ScheduleBackgroundImg1,
    },
    {
      day: 'WTOREK',
      title: 'Przygoda w Jurasówce',
      description:
        'Dzień pełen zabawy, ruchu i śmiechu w ośrodku Jurasówka. Czeka nas też wspólna gra zespołowa, która zbliży wszystkich uczestników.',
      backgroundImg: ScheduleBackgroundImg2,
    },
    {
      day: 'ŚRODA',
      title: 'Park Trampolin - Tarnów',
      description:
        'Energetyczne skoki, salta i wspólna zabawa w Parku Trampolin! Po powrocie kreatywne warsztaty pełne niespodzianek.',
      backgroundImg: Attraction13Img,
    },
    {
      day: 'CZWARTEK',
      title: 'Stadnina, Piana Party i Festiwal Kolorów',
      description:
        'Jazda konna, szalone Piana Party i kolorowe szaleństwo na zakończenie dnia. Dodatkowo zorganizujemy quiz z nagrodami.',
      backgroundImg: ScheduleBackgroundImg4,
    },
    {
      day: 'PIĄTEK',
      title: 'Rowerowa Wycieczka i Finał',
      description:
        'Emocjonująca wyprawa rowerowa, a na zakończenie pokaz talentów, nagrody i kolorowa zabawa, która na długo zostanie w pamięci!',
      backgroundImg: Attraction16Img,
    },
  ],
};

//
// _____________________LETNIA MISJA BOBOWA_____________________
//
export const POLKOLONIA_LETNIA_MISJA_GORLICE: PolkoloniaType = {
  logo: SummerLogoWithName,
  hero: {
    logo: SummerLogoWithName,
    images: {
      landscape: LetniaMisjaGorliceLandscapeImg,
      portrait: LetniaMisjaGorlicePortraitImg,
    },
    sticker: {
      firstLine: 'PÓŁKOLONIA SPORTOWA',
      secondLine: 'LETNIA MISJA 2025',
    },
    location: 'OSIR W GORLICACH',
    dateRange: '04.08-08.08.2025',
  },
  details: {
    location: 'GORLICE',
    dateRange: '04.08-08.08.2025',
    price: {
      price: '850 PLN',
      promotion: true,
      promotionPrice: '700 PLN',
      promotionInfo: 'DLA KLIENTÓW NEMO',
    },
    about: {
      title: 'PÓŁKOLONIA SPORTOWA - LETNIA MISJA 2025',
      description:
        'Chcesz, aby Twoje dziecko przeżyło niezapomnianą wakacyjną przygodę pełną aktywności i dobrej zabawy? Zapraszamy na Półkolonię „Letnia Misja 2025”, gdzie każdy dzień to nowe wyzwania, sportowe atrakcje i mnóstwo radości!',
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
        title: 'GRA TERENOWA',
        image: Attraction11Img,
        description: 'Integracyjna gra terenowa na świeżym powietrzu',
      },
      {
        title: 'TAJEMNICZE ŚLEDZTWO',
        image: Attraction12Img,
        description: 'Detektywistyczne śledztwo pełne zagadek',
      },
      {
        title: 'przygoda w jurasówce',
        image: Attraction7Img,
        description: 'Dzień pełen zabawy, ruchu i śmiechu',
      },
      {
        title: 'GRA ZESPOŁOWA',
        image: Attraction13Img,
        description:
          'Wspólna gra zespołowa,która zbliży wszystkich uczestników',
      },
      {
        title: 'PARK TRAMPOLIN',
        image: Attraction14Img,
        description: 'Energetyczne skoki, salta i wspólna zabawa',
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
      {
        title: 'festiwal kolorów',
        image: Attraction4Img,
        description: 'Wyrzucanie kolorowych proszków w radosnej atmosferze',
      },
      {
        title: 'Wycieczka rowerowa',
        image: Attraction2Img,
        description: 'Aktywna eksploracja okolicy',
      },
      {
        title: 'JAZDA KONNA',
        image: Attraction15Img,
        description: 'Wizyta w stadninie koni i jazda konna',
      },
      {
        title: 'pokaz talentów',
        image: Attraction16Img,
        description: 'Kreatywny pokaz z nagrodami',
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
      title: 'Basen, Eksperymenty i Śledztwo',
      description:
        'Poranny trening na basenie, potem fascynujące eksperymenty i detektywistyczne śledztwo pełne zagadek! Dzień zakończymy integracyjną grą terenową.',
      backgroundImg: ScheduleBackgroundImg1,
    },
    {
      day: 'WTOREK',
      title: 'Przygoda w Jurasówce',
      description:
        'Dzień pełen zabawy, ruchu i śmiechu w ośrodku Jurasówka. Czeka nas też wspólna gra zespołowa, która zbliży wszystkich uczestników.',
      backgroundImg: ScheduleBackgroundImg2,
    },
    {
      day: 'ŚRODA',
      title: 'Park Trampolin - Tarnów',
      description:
        'Energetyczne skoki, salta i wspólna zabawa w Parku Trampolin! Po powrocie kreatywne warsztaty pełne niespodzianek.',
      backgroundImg: Attraction13Img,
    },
    {
      day: 'CZWARTEK',
      title: 'Stadnina, Piana Party i Festiwal Kolorów',
      description:
        'Jazda konna, szalone Piana Party i kolorowe szaleństwo na zakończenie dnia. Dodatkowo zorganizujemy quiz z nagrodami.',
      backgroundImg: ScheduleBackgroundImg4,
    },
    {
      day: 'PIĄTEK',
      title: 'Rowerowa Wycieczka i Finał',
      description:
        'Emocjonująca wyprawa rowerowa, a na zakończenie pokaz talentów, nagrody i kolorowa zabawa, która na długo zostanie w pamięci!',
      backgroundImg: Attraction16Img,
    },
  ],
};

//
// _____________________LETNIA MISJA KORZENNA_____________________
//
export const POLKOLONIA_LETNIA_MISJA_KORZENNA: PolkoloniaType = {
  logo: SummerLogoWithName,
  hero: {
    logo: SummerLogoWithName,
    images: {
      landscape: LetniaMisjaKorzennaLandscapeImg,
      portrait: LetniaMisjaKorzennaPortraitImg,
    },
    sticker: {
      firstLine: 'PÓŁKOLONIA SPORTOWA',
      secondLine: 'LETNIA MISJA 2025',
    },
    location: 'CSIR W KORZENNEJ',
    dateRange: '11.08-15.08.2025',
  },
  details: {
    location: 'KORZENNA',
    dateRange: '11.08-15.08.2025',
    price: {
      price: '850 PLN',
      promotion: true,
      promotionPrice: '700 PLN',
      promotionInfo: 'DLA KLIENTÓW NEMO',
    },
    about: {
      title: 'PÓŁKOLONIA SPORTOWA - LETNIA MISJA 2025',
      description:
        'Chcesz, aby Twoje dziecko przeżyło niezapomnianą wakacyjną przygodę pełną aktywności i dobrej zabawy? Zapraszamy na Półkolonię „Letnia Misja 2025”, gdzie każdy dzień to nowe wyzwania, sportowe atrakcje i mnóstwo radości!',
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
        title: 'GRA TERENOWA',
        image: Attraction11Img,
        description: 'Integracyjna gra terenowa na świeżym powietrzu',
      },
      {
        title: 'TAJEMNICZE ŚLEDZTWO',
        image: Attraction12Img,
        description: 'Detektywistyczne śledztwo pełne zagadek',
      },
      {
        title: 'przygoda w jurasówce',
        image: Attraction7Img,
        description: 'Dzień pełen zabawy, ruchu i śmiechu',
      },
      {
        title: 'GRA ZESPOŁOWA',
        image: Attraction13Img,
        description:
          'Wspólna gra zespołowa,która zbliży wszystkich uczestników',
      },
      {
        title: 'PARK TRAMPOLIN',
        image: Attraction14Img,
        description: 'Energetyczne skoki, salta i wspólna zabawa',
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
      {
        title: 'festiwal kolorów',
        image: Attraction4Img,
        description: 'Wyrzucanie kolorowych proszków w radosnej atmosferze',
      },
      {
        title: 'Wycieczka rowerowa',
        image: Attraction2Img,
        description: 'Aktywna eksploracja okolicy',
      },
      {
        title: 'JAZDA KONNA',
        image: Attraction15Img,
        description: 'Wizyta w stadninie koni i jazda konna',
      },
      {
        title: 'pokaz talentów',
        image: Attraction16Img,
        description: 'Kreatywny pokaz z nagrodami',
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
      title: 'Basen, Eksperymenty i Śledztwo',
      description:
        'Poranny trening na basenie, potem fascynujące eksperymenty i detektywistyczne śledztwo pełne zagadek! Dzień zakończymy integracyjną grą terenową.',
      backgroundImg: ScheduleBackgroundImg1,
    },
    {
      day: 'WTOREK',
      title: 'Przygoda w Jurasówce',
      description:
        'Dzień pełen zabawy, ruchu i śmiechu w ośrodku Jurasówka. Czeka nas też wspólna gra zespołowa, która zbliży wszystkich uczestników.',
      backgroundImg: ScheduleBackgroundImg2,
    },
    {
      day: 'ŚRODA',
      title: 'Park Trampolin - Tarnów',
      description:
        'Energetyczne skoki, salta i wspólna zabawa w Parku Trampolin! Po powrocie kreatywne warsztaty pełne niespodzianek.',
      backgroundImg: Attraction13Img,
    },
    {
      day: 'CZWARTEK',
      title: 'Stadnina, Piana Party i Festiwal Kolorów',
      description:
        'Jazda konna, szalone Piana Party i kolorowe szaleństwo na zakończenie dnia. Dodatkowo zorganizujemy quiz z nagrodami.',
      backgroundImg: ScheduleBackgroundImg4,
    },
    {
      day: 'PIĄTEK',
      title: 'Rowerowa Wycieczka i Finał',
      description:
        'Emocjonująca wyprawa rowerowa, a na zakończenie pokaz talentów, nagrody i kolorowa zabawa, która na długo zostanie w pamięci!',
      backgroundImg: Attraction16Img,
    },
  ],
};

//
// _____________________LETNIA MISJA NOWY SACZ_____________________
//
export const POLKOLONIA_LETNIA_MISJA_NOWY_SACZ: PolkoloniaType = {
  logo: SummerLogoWithName,
  hero: {
    logo: SummerLogoWithName,
    images: {
      landscape: LetniaMisjaNowySaczLandscapeImg,
      portrait: LetniaMisjaNowySaczPortraitImg,
    },
    sticker: {
      firstLine: 'PÓŁKOLONIA SPORTOWA',
      secondLine: 'LETNIA MISJA 2025',
    },
    location: 'NOWY SĄCZ',
    dateRange: '11.08-15.08.2025',
  },
  details: {
    location: 'NOWY SĄCZ',
    dateRange: '11.08-15.08.2025',
    price: {
      price: '850 PLN',
      promotion: true,
      promotionPrice: '700 PLN',
      promotionInfo: 'DLA KLIENTÓW NEMO',
    },
    about: {
      title: 'PÓŁKOLONIA SPORTOWA - LETNIA MISJA 2025',
      description:
        'Chcesz, aby Twoje dziecko przeżyło niezapomnianą wakacyjną przygodę pełną aktywności i dobrej zabawy? Zapraszamy na Półkolonię „Letnia Misja 2025”, gdzie każdy dzień to nowe wyzwania, sportowe atrakcje i mnóstwo radości!',
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
        title: 'GRA TERENOWA',
        image: Attraction11Img,
        description: 'Integracyjna gra terenowa na świeżym powietrzu',
      },
      {
        title: 'TAJEMNICZE ŚLEDZTWO',
        image: Attraction12Img,
        description: 'Detektywistyczne śledztwo pełne zagadek',
      },
      {
        title: 'przygoda w jurasówce',
        image: Attraction7Img,
        description: 'Dzień pełen zabawy, ruchu i śmiechu',
      },
      {
        title: 'GRA ZESPOŁOWA',
        image: Attraction13Img,
        description:
          'Wspólna gra zespołowa,która zbliży wszystkich uczestników',
      },
      {
        title: 'PARK TRAMPOLIN',
        image: Attraction14Img,
        description: 'Energetyczne skoki, salta i wspólna zabawa',
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
      {
        title: 'festiwal kolorów',
        image: Attraction4Img,
        description: 'Wyrzucanie kolorowych proszków w radosnej atmosferze',
      },
      {
        title: 'Wycieczka rowerowa',
        image: Attraction2Img,
        description: 'Aktywna eksploracja okolicy',
      },
      {
        title: 'JAZDA KONNA',
        image: Attraction15Img,
        description: 'Wizyta w stadninie koni i jazda konna',
      },
      {
        title: 'pokaz talentów',
        image: Attraction16Img,
        description: 'Kreatywny pokaz z nagrodami',
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
      title: 'Basen, Eksperymenty i Śledztwo',
      description:
        'Poranny trening na basenie, potem fascynujące eksperymenty i detektywistyczne śledztwo pełne zagadek! Dzień zakończymy integracyjną grą terenową.',
      backgroundImg: ScheduleBackgroundImg1,
    },
    {
      day: 'WTOREK',
      title: 'Przygoda w Jurasówce',
      description:
        'Dzień pełen zabawy, ruchu i śmiechu w ośrodku Jurasówka. Czeka nas też wspólna gra zespołowa, która zbliży wszystkich uczestników.',
      backgroundImg: ScheduleBackgroundImg2,
    },
    {
      day: 'ŚRODA',
      title: 'Park Trampolin - Tarnów',
      description:
        'Energetyczne skoki, salta i wspólna zabawa w Parku Trampolin! Po powrocie kreatywne warsztaty pełne niespodzianek.',
      backgroundImg: Attraction13Img,
    },
    {
      day: 'CZWARTEK',
      title: 'Stadnina, Piana Party i Festiwal Kolorów',
      description:
        'Jazda konna, szalone Piana Party i kolorowe szaleństwo na zakończenie dnia. Dodatkowo zorganizujemy quiz z nagrodami.',
      backgroundImg: ScheduleBackgroundImg4,
    },
    {
      day: 'PIĄTEK',
      title: 'Rowerowa Wycieczka i Finał',
      description:
        'Emocjonująca wyprawa rowerowa, a na zakończenie pokaz talentów, nagrody i kolorowa zabawa, która na długo zostanie w pamięci!',
      backgroundImg: Attraction16Img,
    },
  ],
};
