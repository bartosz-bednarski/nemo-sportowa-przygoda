import {AttractionsPropsType} from '@/components/OfertaLetnia/PolkolonieObozy/Attractions/Attractions';
import {HeroPropsType} from '@/components/OfertaLetnia/PolkolonieObozy/Hero/Hero';
import {SchedulePropsType} from '@/components/OfertaLetnia/PolkolonieObozy/Schedule/Schedule';
import {ContactPropsType} from '@/components/OfertaLetnia/Ui/Contact/Contact';
import {DetailsPropsType} from '@/components/OfertaLetnia/Ui/Details/Details';
import {PriceDetailsPropsType} from '@/components/OfertaLetnia/Ui/PriceDetails/PriceDetails';
import {ColonyLinkPropsType} from '@/components/Ui/Links/ColonyLink/Summer/ColonyLinkSummer';
import {StaticImageData} from 'next/image';
import LesnaRybaLandscapeImg from '@/public/gallery/lesnaryba/landscapes/01.webp';
import LesnaRybaPortraitImg from '@/public/gallery/lesnaryba/landscapes/04.webp';
import Attraction1Img from '@/public/gallery/lesnaryba/landscapes/02.webp';
import Attraction2Img from '@/public/gallery/bobowskaprzygoda2/portraits/02.webp';
import Attraction3Img from '@/public/gallery/lesnaryba/landscapes/05.webp';
import Attraction4Img from '@/public/gallery/lesnaryba/landscapes/06.webp';
import Attraction5Img from '@/public/gallery/wakacyjnafrajda/portraits/29.webp';
import Attraction6Img from '@/public/gallery/lesnaryba/landscapes/04.webp';
import Attraction7Img from '@/public/gallery/lesnaryba/landscapes/03.webp';
import Attraction8Img from '@/public/gallery/bobowskaprzygoda/portraits/26.webp';
import LogoBom4Sports from '@/public/assets/logo/bom4sports_logo.svg';

import SummerLogoWithName from '@/public/assets/logo/Logo-nemo-summer-with-name.svg';
type ObozType = {
  logo: StaticImageData;
  hero: HeroPropsType;
  details: DetailsPropsType;
  contact: ContactPropsType;
  collabContact?: ContactPropsType;
  attractions: AttractionsPropsType;
  priceDetails: PriceDetailsPropsType;
};

export const OBOZY_LISTA_2025: ColonyLinkPropsType[] = [
  {
    active: true,
    title: 'OBÓZ ROWEROWY LEŚNA RYBA',
    price: '2749 PLN',
    localization: 'LEŚNA RYBA & STARA JEDLANKA',
    date: '29.06 - 07.07',
    coverImage: LesnaRybaLandscapeImg,
    href: '/ofertaletnia/obozy/rowerowe/lesnaryba',
  },
];

//
// _____________________EKSTREMALNE LATO BOBOWA_____________________
//
export const OBOZ_LESNA_RYBA_2025: ObozType = {
  logo: SummerLogoWithName,
  hero: {
    collab: {
      image: LogoBom4Sports,
      company: 'Bom4Sports',
    },
    logo: SummerLogoWithName,
    images: {
      landscape: LesnaRybaLandscapeImg,
      portrait: LesnaRybaPortraitImg,
    },
    sticker: {
      firstLine: 'OBÓZ ROWEROWY',
      secondLine: 'LEŚNA RYBA 2025',
    },
    location: 'LEŚNA RYBA',
    dateRange: '29.06 - 07.07.2025',
  },
  details: {
    location: 'LEŚNA RYBA & STARA JEDLANKA',
    dateRange: '29.06 - 07.07.2025',
    price: {
      price: '2749 PLN',
      promotion: true,
      promotionPrice: '1000 PLN',
      promotionInfo: 'KWOTA ZADATKU',
    },
    about: {
      title: 'OBÓZ ROWEROWY - LEŚNA RYBA 2025',
      description:
        'Chcesz, aby Twoje dziecko przeżyło niezapomnianą wakacyjną przygodę pełną aktywności i dobrej zabawy? Zapraszamy na Obóz Rowerowy „Leśna Ryba 2025”, gdzie każdy dzień to nowe wyzwania, sportowe atrakcje i mnóstwo radości!',
    },
    ageRange: '7-12 LAT',
    accomodation: 'DOMKI 4-5 OSOBOWE',
    argumentsList: {
      title: 'Dlaczego warto wybrać nasze obozy?',
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
    title: 'Dołącz do nas i przeżyj niesamowity obóz pełen sportowych wrażeń!',
    phone: '+48 519 625 894',
    email: 'szkolaplywanianemo1@gmail.com',
  },
  collabContact: {
    title: 'Sprawdź stronę Bom4Sports i zapisz się już dziś!',
    phone: '+48 505 852 290',
    email: 'kontakt@bom4sports.pl',
    website: 'https://www.bom4sports.pl',
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
        title: 'GRY TERENOWE',
        image: Attraction2Img,
        description: 'Integracyjne gry terenowe na świeżym powietrzu',
      },
      {
        title: 'KĄPIELE WODNE',
        image: Attraction3Img,
        description: 'Kąpiele wodne i skoki do wody pod czujnym okiem kadry',
      },
      {
        title: 'Rowerki wodne i kajaki',
        image: Attraction4Img,
        description: 'Idealne dla początkujących',
      },
      {
        title: 'GRY ZESPOŁOWE',
        image: Attraction5Img,
        description:
          'Wspólne gry zespołowe,która zbliżą wszystkich uczestników',
      },
      {
        title: 'PARK LINOWY I TYROLKA',
        image: Attraction6Img,
        description: 'Sprawdź swoje granice i pokonaj lęki!',
      },
      {
        title: 'zabawy integracyjne',
        image: Attraction7Img,
        description: 'Wspólne zabawy pełne uśmiechu i energii',
      },
      {
        title: 'festiwal kolorów',
        image: Attraction8Img,
        description: 'Wyrzucanie kolorowych proszków w radosnej atmosferze',
      },
    ],
  },
  priceDetails: {
    priceDetailsList: [
      'Śniadania, obiady, desery i kolacje',
      'Transport Kraków - Stara Jedlanka + rowery',
      'Transport Stara Jedlanka - Kraków + rowery',
      'Domki 4-5 osobowe',
      'Codzienne wycieczki rowerowe',
      'Rowerki wodne',
      'Kajaki',
      'Bilety do parku linowego',
      'Zabawy wodne',
      'Gry zespołowe',
      'Profesjonalna opieka',
      'Ubezpieczenie NNW',
      'Fotorelacja z wyjazdu',
    ],
  },
};
