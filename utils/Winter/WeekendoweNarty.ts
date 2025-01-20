import {CampsCoversType} from './Obozy';
import { HeroPropsType } from '@/components/OfertaZimowa/Ui/Hero/Hero';
import { DetailsPropsType } from '@/components/OfertaZimowa/Ui/Details/Details';
import { ContactPropsType } from '@/components/OfertaZimowa/Ui/Contact/Contact';
import { WhatsWaiting4YouPropsType } from '@/components/OfertaZimowa/Obozy/WhatsWaiting4You/WhatsWaiting4You';
import { HillSidesPropsType } from '@/components/OfertaZimowa/Obozy/HillSides/HillSides';
import { WeekendNaStokuSchedulePropsType } from '@/components/OfertaZimowa/WeekendoweNarty/Schedule';
import { PriceDetailsPropsType } from '@/components/OfertaZimowa/Ui/PriceDetails/PriceDetails';

export type WeekendNaStokuType = {
  title: string;
  hero: HeroPropsType;
  details: DetailsPropsType;
  contactNemo: ContactPropsType;
  contactCollab?: ContactPropsType;
  whatsWaiting4You: WhatsWaiting4YouPropsType;
  hillSides:HillSidesPropsType;
  schedule:WeekendNaStokuSchedulePropsType;
  priceDetails: PriceDetailsPropsType;
};

export const WEEKEND_NA_STOKU_LISTA_2025: CampsCoversType = [
  {
    active: true,
    title: 'WEEKEND NA STOKU',
    price: '219 PLN + KARNET (80 PLN)',
    localization: 'TYLICZ',
    date: '22.12.2024',
    coverImage: 'winter/polkolonie/polkolonie_winter.webp',
    href: '/ofertazimowa/weekend-na-stoku/termin-1',
  },
  {
    active: true,
    title: 'WEEKEND NA STOKU',
    price: '219 PLN + KARNET (80 PLN)',
    localization: 'TYLICZ',
    date: '12.01.2025',
    coverImage: 'winter/polkolonie/polkolonie_winter.webp',
    href: '/ofertazimowa/weekend-na-stoku/termin-2',
  },
  {
    active: true,
    title: 'WEEKEND NA STOKU',
    price: '219 PLN + KARNET (80 PLN)',
    localization: 'TYLICZ',
    date: '26.01.2025',
    coverImage: 'winter/polkolonie/polkolonie_winter.webp',
    href: '/ofertazimowa/weekend-na-stoku/termin-3',
  },
  {
    active: true,
    title: 'WEEKEND NA STOKU',
    price: '219 PLN + KARNET (80 PLN)',
    localization: 'TYLICZ',
    date: '09.02.2025',
    coverImage: 'winter/polkolonie/polkolonie_winter.webp',
    href: '/ofertazimowa/weekend-na-stoku/termin-4',
  },
];
export const WEEKEND_NA_STOKU_22_12_2024: WeekendNaStokuType = {
  title: 'WEEKEND NA STOKU',
  hero: {
    pc: 'weekend_na_stoku/weekend_na_stoku_tylicz_22_12_2024-pc',
    mobile: 'weekend_na_stoku/weekend_na_stoku_tylicz_22_12_2024-mobile',
  },
  details: {
    location: 'TYLICZ',
    fullLocationName: 'TYLICZ',
    dateRange: '22.12.2024',
    price: '219 PLN + KARNET (80 PLN)',
    rally: 'BOBOWA (zajezdnia autobusowa)',
    promotion: false,
    promotionPrice: '',
    promotionInfo: '',
    aboutTitle:
      'Zimowa przygoda w Tyliczu - nauka jazdy na nartach i snowboardzie!',
    aboutDescription:
      'Drodzy Rodzice, zapraszamy Wasze dzieci na niezapomniane wyjazdy do Tylicza, pełne nauki, zabawy i sportowych wyzwań. Nasze zajęcia są przeznaczone zarówno dla początkujących, jak i zaawansowanych narciarzy oraz snowboardzistów!',
  },
  contactNemo: {
    title:
      'Nie zwlekaj! Zarezerwuj miejsce już dziś i spraw, by Twoje dziecko przeżyło niezapomnianą zimową przygodę!',
    phone: '+48 519 625 894',
    email: 'szkolaplywanianemo1@gmail.com',
  },
  whatsWaiting4You: {
    list: [
      'Zajęcia narciarskie - intensywny program szkoleniowy z wykwalifikowanymi instruktorami.',
      'Nowoczesne techniki i treningi - metody szkoleniowe dostosowane do każdego poziomu.',
      'Analiza techniki jazdy - regularna korekta błędów i wskazówki na temat techniki.',
      'Bezpieczeństwo na stoku - omówienie zasad bezpieczeństwa i odpowiedzialnego zachowania na trasie.',
      'Bezpieczeństwo i Opieka.',
    ],
    summary: '',
  },

  hillSides: {
    title1: 'OPISY',
    title2: 'STOKÓW',
    list: [
      {
        title: 'Master Ski Tylicz',
        listAbout: [
          'Stacja dysponuje 4 oraz 6 osobową kolejką krzesełkową oraz sześcioma wyciągami.',
          'Centrum oferuje łącznie 10 km tras zjazdowych, w tym dwie najdłuższe nartostrady w Tyliczu.',
          'Dzięki trasom o zróżnicowanym stopniu trudności każdy narciarz znajdzie tu coś dla siebie.',
        ],
        image: 'master_ski_tylicz',
      },
    ],
  },
  schedule: {
    title: 'PLAN DNIA',
    list: [
      {
        time: '07:30',
        info: 'Zbiórka: Bobowa, zajezdnia autobusowa. Wyjazd do Tylicza.',
      },
      {
        time: '08:30',
        info: 'Przyjazd na stok, czas na śniadanie (we własnym zakresie).',
      },
      {
        time: '09:00',
        info: 'Przygotowanie sprzętu, dopasowanie i rozgrzewka.',
      },
      {
        time: '10:00',
        info: 'Nauka jazdy na nartach lub snowboardzie.',
        subList: [
          {title: 'Grupa początkująca', about: 'Pierwsze kroki na stoku.'},
          {title: 'Grupa zaawansowana', about: 'Doskonalenie techniki.'},
        ],
      },
      {
        time: '14:30',
        info: 'Obiad: pyszna pizza dla każdego uczestnika.',
      },
      {
        time: '15:15',
        info: 'Wyjazd powrotny do Bobowej.',
      },
      {
        time: '16:00',
        info: 'Powrót na miejsce zbiórki: zajezdnia autobusowa w Bobowej.',
      },
    ],
  },
  priceDetails: {
    priceDetailsList: [
      '4h szkolenia narciarskiego',
      'Transport w obie strony',
      'Obiad - pizza',
      'Ubezpieczenie NNW',
      'Miła atmosfera',
      'Zdjęcia',
      'Relacje',
    ],
  },
};
export const WEEKEND_NA_STOKU_12_01_2025: WeekendNaStokuType = {
  title: 'WEEKEND NA STOKU',
  hero: {
    pc: 'weekend_na_stoku/weekend_na_stoku_tylicz_12_01_2025-pc',
    mobile: 'weekend_na_stoku/weekend_na_stoku_tylicz_12_01_2025-mobile',
  },
  details: {
    location: 'TYLICZ',
    fullLocationName: 'TYLICZ',
    dateRange: '12.01.2025',
    price: '219 PLN + KARNET (80 PLN)',
    promotion: false,
    promotionPrice: '',
    promotionInfo: '',
    rally: 'BOBOWA (zajezdnia autobusowa)',
    aboutTitle:
      'Zimowa przygoda w Tyliczu - nauka jazdy na nartach i snowboardzie!',
    aboutDescription:
      'Drodzy Rodzice, zapraszamy Wasze dzieci na niezapomniane wyjazdy do Tylicza, pełne nauki, zabawy i sportowych wyzwań. Nasze zajęcia są przeznaczone zarówno dla początkujących, jak i zaawansowanych narciarzy oraz snowboardzistów!',
  },
  contactNemo: {
    title:
      'Nie zwlekaj! Zarezerwuj miejsce już dziś i spraw, by Twoje dziecko przeżyło niezapomnianą zimową przygodę!',
    phone: '+48 519 625 894',
    email: 'szkolaplywanianemo1@gmail.com',
  },
  whatsWaiting4You: {
    list: [
      'Zajęcia narciarskie - intensywny program szkoleniowy z wykwalifikowanymi instruktorami.',
      'Nowoczesne techniki i treningi - metody szkoleniowe dostosowane do każdego poziomu.',
      'Analiza techniki jazdy - regularna korekta błędów i wskazówki na temat techniki.',
      'Bezpieczeństwo na stoku - omówienie zasad bezpieczeństwa i odpowiedzialnego zachowania na trasie.',
      'Bezpieczeństwo i Opieka.',
    ],
    summary: '',
  },

  hillSides: {
    title1: 'OPISY',
    title2: 'STOKÓW',
    list: [
      {
        title: 'Master Ski Tylicz',
        listAbout: [
          'Stacja dysponuje 4 oraz 6 osobową kolejką krzesełkową oraz sześcioma wyciągami.',
          'Centrum oferuje łącznie 10 km tras zjazdowych, w tym dwie najdłuższe nartostrady w Tyliczu.',
          'Dzięki trasom o zróżnicowanym stopniu trudności każdy narciarz znajdzie tu coś dla siebie.',
        ],
        image: 'master_ski_tylicz',
      },
    ],
  },
  schedule: {
    title: 'PLAN DNIA',
    list: [
      {
        time: '07:30',
        info: 'Zbiórka: Bobowa, zajezdnia autobusowa. Wyjazd do Tylicza.',
      },
      {
        time: '08:30',
        info: 'Przyjazd na stok, czas na śniadanie (we własnym zakresie).',
      },
      {
        time: '09:00',
        info: 'Przygotowanie sprzętu, dopasowanie i rozgrzewka.',
      },
      {
        time: '10:00',
        info: 'Nauka jazdy na nartach lub snowboardzie.',
        subList: [
          {title: 'Grupa początkująca', about: 'Pierwsze kroki na stoku.'},
          {title: 'Grupa zaawansowana', about: 'Doskonalenie techniki.'},
        ],
      },
      {
        time: '14:30',
        info: 'Obiad: pyszna pizza dla każdego uczestnika.',
      },
      {
        time: '15:15',
        info: 'Wyjazd powrotny do Bobowej.',
      },
      {
        time: '16:00',
        info: 'Powrót na miejsce zbiórki: zajezdnia autobusowa w Bobowej.',
      },
    ],
  },
  priceDetails: {
    priceDetailsList: [
      '4h szkolenia narciarskiego',
      'Transport w obie strony',
      'Obiad - pizza',
      'Ubezpieczenie NNW',
      'Miła atmosfera',
      'Zdjęcia',
      'Relacje',
    ],
  },
};
export const WEEKEND_NA_STOKU_26_01_2025: WeekendNaStokuType = {
  title: 'WEEKEND NA STOKU',
  hero: {
    pc: 'weekend_na_stoku/weekend_na_stoku_tylicz_26_01_2025-pc',
    mobile: 'weekend_na_stoku/weekend_na_stoku_tylicz_26_01_2025-mobile',
  },
  details: {
    location: 'TYLICZ',
    fullLocationName: 'TYLICZ',
    dateRange: '26.01.2025',
    price: '219 PLN + KARNET (80 PLN)',
    promotion: false,
    promotionPrice: '',
    promotionInfo: '',
    rally: 'BOBOWA (zajezdnia autobusowa)',
    aboutTitle:
      'Zimowa przygoda w Tyliczu - nauka jazdy na nartach i snowboardzie!',
    aboutDescription:
      'Drodzy Rodzice, zapraszamy Wasze dzieci na niezapomniane wyjazdy do Tylicza, pełne nauki, zabawy i sportowych wyzwań. Nasze zajęcia są przeznaczone zarówno dla początkujących, jak i zaawansowanych narciarzy oraz snowboardzistów!',
  },
  contactNemo: {
    title:
      'Nie zwlekaj! Zarezerwuj miejsce już dziś i spraw, by Twoje dziecko przeżyło niezapomnianą zimową przygodę!',
    phone: '+48 519 625 894',
    email: 'szkolaplywanianemo1@gmail.com',
  },
  whatsWaiting4You: {
    list: [
      'Zajęcia narciarskie - intensywny program szkoleniowy z wykwalifikowanymi instruktorami.',
      'Nowoczesne techniki i treningi - metody szkoleniowe dostosowane do każdego poziomu.',
      'Analiza techniki jazdy - regularna korekta błędów i wskazówki na temat techniki.',
      'Bezpieczeństwo na stoku - omówienie zasad bezpieczeństwa i odpowiedzialnego zachowania na trasie.',
      'Bezpieczeństwo i Opieka.',
    ],
    summary: '',
  },

  hillSides: {
    title1: 'OPISY',
    title2: 'STOKÓW',
    list: [
      {
        title: 'Master Ski Tylicz',
        listAbout: [
          'Stacja dysponuje 4 oraz 6 osobową kolejką krzesełkową oraz sześcioma wyciągami.',
          'Centrum oferuje łącznie 10 km tras zjazdowych, w tym dwie najdłuższe nartostrady w Tyliczu.',
          'Dzięki trasom o zróżnicowanym stopniu trudności każdy narciarz znajdzie tu coś dla siebie.',
        ],
        image: 'master_ski_tylicz',
      },
    ],
  },
  schedule: {
    title: 'PLAN DNIA',
    list: [
      {
        time: '07:30',
        info: 'Zbiórka: Bobowa, zajezdnia autobusowa. Wyjazd do Tylicza.',
      },
      {
        time: '08:30',
        info: 'Przyjazd na stok, czas na śniadanie (we własnym zakresie).',
      },
      {
        time: '09:00',
        info: 'Przygotowanie sprzętu, dopasowanie i rozgrzewka.',
      },
      {
        time: '10:00',
        info: 'Nauka jazdy na nartach lub snowboardzie.',
        subList: [
          {title: 'Grupa początkująca', about: 'Pierwsze kroki na stoku.'},
          {title: 'Grupa zaawansowana', about: 'Doskonalenie techniki.'},
        ],
      },
      {
        time: '14:30',
        info: 'Obiad: pyszna pizza dla każdego uczestnika.',
      },
      {
        time: '15:15',
        info: 'Wyjazd powrotny do Bobowej.',
      },
      {
        time: '16:00',
        info: 'Powrót na miejsce zbiórki: zajezdnia autobusowa w Bobowej.',
      },
    ],
  },
  priceDetails: {
    priceDetailsList: [
      '4h szkolenia narciarskiego',
      'Transport w obie strony',
      'Obiad - pizza',
      'Ubezpieczenie NNW',
      'Miła atmosfera',
      'Zdjęcia',
      'Relacje',
    ],
  },
};
export const WEEKEND_NA_STOKU_09_02_2025: WeekendNaStokuType = {
  title: 'WEEKEND NA STOKU',
  hero: {
    pc: 'weekend_na_stoku/weekend_na_stoku_tylicz_09_02_2025-pc',
    mobile: 'weekend_na_stoku/weekend_na_stoku_tylicz_09_02_2025-mobile',
  },
  details: {
    location: 'TYLICZ',
    fullLocationName: 'TYLICZ',
    dateRange: '09.02.2025',
    price: '219 PLN + KARNET (80 PLN)',
    promotion: false,
    promotionPrice: '',
    promotionInfo: '',
    rally: 'BOBOWA (zajezdnia autobusowa)',
    aboutTitle:
      'Zimowa przygoda w Tyliczu - nauka jazdy na nartach i snowboardzie!',
    aboutDescription:
      'Drodzy Rodzice, zapraszamy Wasze dzieci na niezapomniane wyjazdy do Tylicza, pełne nauki, zabawy i sportowych wyzwań. Nasze zajęcia są przeznaczone zarówno dla początkujących, jak i zaawansowanych narciarzy oraz snowboardzistów!',
  },
  contactNemo: {
    title:
      'Nie zwlekaj! Zarezerwuj miejsce już dziś i spraw, by Twoje dziecko przeżyło niezapomnianą zimową przygodę!',
    phone: '+48 519 625 894',
    email: 'szkolaplywanianemo1@gmail.com',
  },
  whatsWaiting4You: {
    list: [
      'Zajęcia narciarskie - intensywny program szkoleniowy z wykwalifikowanymi instruktorami.',
      'Nowoczesne techniki i treningi - metody szkoleniowe dostosowane do każdego poziomu.',
      'Analiza techniki jazdy - regularna korekta błędów i wskazówki na temat techniki.',
      'Bezpieczeństwo na stoku - omówienie zasad bezpieczeństwa i odpowiedzialnego zachowania na trasie.',
      'Bezpieczeństwo i Opieka.',
    ],
    summary: '',
  },

  hillSides: {
    title1: 'OPISY',
    title2: 'STOKÓW',
    list: [
      {
        title: 'Master Ski Tylicz',
        listAbout: [
          'Stacja dysponuje 4 oraz 6 osobową kolejką krzesełkową oraz sześcioma wyciągami.',
          'Centrum oferuje łącznie 10 km tras zjazdowych, w tym dwie najdłuższe nartostrady w Tyliczu.',
          'Dzięki trasom o zróżnicowanym stopniu trudności każdy narciarz znajdzie tu coś dla siebie.',
        ],
        image: 'master_ski_tylicz',
      },
    ],
  },
  schedule: {
    title: 'PLAN DNIA',
    list: [
      {
        time: '07:30',
        info: 'Zbiórka: Bobowa, zajezdnia autobusowa. Wyjazd do Tylicza.',
      },
      {
        time: '08:30',
        info: 'Przyjazd na stok, czas na śniadanie (we własnym zakresie).',
      },
      {
        time: '09:00',
        info: 'Przygotowanie sprzętu, dopasowanie i rozgrzewka.',
      },
      {
        time: '10:00',
        info: 'Nauka jazdy na nartach lub snowboardzie.',
        subList: [
          {title: 'Grupa początkująca', about: 'Pierwsze kroki na stoku.'},
          {title: 'Grupa zaawansowana', about: 'Doskonalenie techniki.'},
        ],
      },
      {
        time: '14:30',
        info: 'Obiad: pyszna pizza dla każdego uczestnika.',
      },
      {
        time: '15:15',
        info: 'Wyjazd powrotny do Bobowej.',
      },
      {
        time: '16:00',
        info: 'Powrót na miejsce zbiórki: zajezdnia autobusowa w Bobowej.',
      },
    ],
  },
  priceDetails: {
    priceDetailsList: [
      '4h szkolenia narciarskiego',
      'Transport w obie strony',
      'Obiad - pizza',
      'Ubezpieczenie NNW',
      'Miła atmosfera',
      'Zdjęcia',
      'Relacje',
    ],
  },
};
