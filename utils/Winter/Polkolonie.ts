import {HeroPropsType} from '@/components/OfertaZimowa/Ui/Hero/Hero';
import {DetailsPropsType} from '@/components/OfertaZimowa/Ui/Details/Details';
import {ContactPropsType} from '@/components/OfertaZimowa/Ui/Contact/Contact';
import {LocalizationPropsType} from '@/components/OfertaZimowa/Polkolonie/Localization/Localization';
import {SchedulePropsType} from '@/components/OfertaZimowa/Ui/Schedule/Schedule';
import {FoodPropsType} from '@/components/OfertaZimowa/Ui/Food/Food';
import {PriceDetailsPropsType} from '@/components/OfertaZimowa/Ui/PriceDetails/PriceDetails';
import {ColonyLinkPropsType} from '@/components/Ui/Links/ColonyLink/Winter/ColonyLinkWinter';
// import ColonyCoverImage from '@/public/assets/winter/polkolonie/polkolonie_winter.webp';
import ColonyCoverImage1 from '@/public/assets/winter/polkolonie/polkolonie_winter_1.webp';
import ColonyCoverImage2 from '@/public/assets/winter/polkolonie/polkolonie_winter_2.webp';
import ColonyCoverImage3 from '@/public/assets/winter/polkolonie/polkolonie_winter_3.webp';
import ColonyCoverImage4 from '@/public/assets/winter/polkolonie/polkolonie_winter_4.webp';
import ColonyCoverImage5 from '@/public/assets/winter/polkolonie/polkolonie_winter_5.webp';
import ColonyCoverImage6 from '@/public/assets/winter/polkolonie/polkolonie_winter_6.webp';
import ColonyCoverImage7 from '@/public/assets/winter/polkolonie/polkolonie_winter_7.webp';

export type PolkoloniaType = {
  title: string;
  hero: HeroPropsType;
  details: DetailsPropsType;
  contact: ContactPropsType;
  localization: LocalizationPropsType;
  schedule: SchedulePropsType;
  food: FoodPropsType;
  priceDetails: PriceDetailsPropsType;
};
export const POLKOLONIE_LISTA_2026: ColonyLinkPropsType[] = [
  {
    active: true,
    title: 'Zimowa Fabryka Pomysłów',
    price: '850 PLN',
    localization: 'SP W BOBOWEJ',
    date: '02.02-06.02.2026',
    coverImage: ColonyCoverImage1,
    href: '/ofertazimowa/polkolonia-zimowa-fabryka-pomyslow',
  },
  {
    active: true,
    title: 'Zimowa Fabryka Pomysłów',
    price: '850 PLN',
    localization: 'CK W KORZENNEJ',
    date: '02.02-06.02.2026',
    coverImage: ColonyCoverImage2,
    href: '/ofertazimowa/polkolonia-zimowa-fabryka-pomyslow',
  },
  {
    active: true,
    title: 'Zimowa Fabryka Pomysłów',
    price: '850 PLN',
    localization: 'MDK W GORLICACH',
    date: '02.02-06.02.2026',
    coverImage: ColonyCoverImage3,
    href: '/ofertazimowa/polkolonia-zimowa-fabryka-pomyslow',
  },
  {
    active: true,
    title: 'Zimowa Pracownia Marzeń',
    price: '850 PLN',
    localization: 'SP W BOBOWEJ',
    date: '09.02-13.02.2026',
    coverImage: ColonyCoverImage4,
    href: '/ofertazimowa/polkolonia-zimowa-pracownia-marzen',
  },
  {
    active: true,
    title: 'Zimowa Pracownia Marzeń',
    price: '850 PLN',
    localization: 'CK W KORZENNEJ',
    date: '09.02-13.02.2026',
    coverImage: ColonyCoverImage5,
    href: '/ofertazimowa/polkolonia-zimowa-pracownia-marzen',
  },
  {
    active: true,
    title: 'Zimowa Pracownia Marzeń',
    price: '850 PLN',
    localization: 'MDK W GORLICACH',
    date: '09.02-13.02.2026',
    coverImage: ColonyCoverImage6,
    href: '/ofertazimowa/polkolonia-zimowa-pracownia-marzen',
  },
];

export const POLKOLONIA_AKTYWNA_ZIMA_BOBOWA: PolkoloniaType = {
  title: 'PÓŁKOLONIA AKTYWNA ZIMA',
  hero: {
    pc: 'polkolonie/polkolonia_aktywnazima_bobowa_2025-pc',
    mobile: 'polkolonie/polkolonia_aktywnazima_bobowa_2025-mobile',
  },
  details: {
    location: 'BOBOWA',
    fullLocationName: 'MCK W BOBOWEJ',
    dateRange: '20.01-24.01',
    ageRange: '5-13 LAT',
    price: '800 PLN',
    promotion: true,
    promotionPrice: '650 PLN',
    promotionInfo: 'DLA KLIENTÓW NEMO',
    aboutTitle: 'PÓŁKOLONIA AKTYWNA ZIMA Z NEMO',
    aboutDescription:
      'Półkolonie w NEMO SPORTOWA PRZYGODA to idealne połączenie ruchu, nauki i świetnej zabawy. Nasi wykwalifikowani opiekunowie zadbają o bezpieczeństwo i doskonałą atmosferę, tak aby każdy dzień był pełen radości i inspiracji. Dzięki półkoloniom dzieci mają okazję nie tylko rozwinąć swoje pasje i zainteresowania, ale także poznać nowych przyjaciół.',
  },
  localization: {
    localizationDescription: [
      'Miejskie Centrum Kultury w Bobowej to przestrzeń, która łączy nowoczesność z tradycją, oferując różnorodne możliwości organizacji wydarzeń. Sala konferencyjna znajduje się na poziomie 0, co sprawia, że jest łatwo dostępna zarówno dla uczestników, jak i organizatorów. Wejście do budynku prowadzi przez główne drzwi, które są doskonale oznaczone i wygodne dla wszystkich gości. Po wejściu do środka należy zejść schodami znajdującymi się po prawej stronie, aby dotrzeć do sali.',
    ],
  },
  contact: {
    title:
      'Zapisz swoje dziecko już dziś i zapewnij mu niezapomniane wspomnienia!',
    phone: '+48 519 625 894',
    email: 'szkolaplywanianemo1@gmail.com',
  },
  schedule: {
    title: 'PLAN TYGODNIA',
    scheduleAbout:
      'Tydzień pełen różnorodnych aktywności zapewni dzieciom kreatywną zabawę, ruch i wartościową naukę. Rozpocznie się od budowania i programowania robotów, po czym przeniesie na basen, by odkrywać wodne przygody. W programie znajdzie się także kulig w zimowej scenerii, dzień strażacki pełen wyzwań oraz warsztaty uczące odpowiedzialności i pierwszej pomocy. To idealne połączenie rozwoju umiejętności technicznych, ruchu i integracji.',
    scheduleList: [
      {
        title: '1. DZIEŃ ROBOTYKI',
        text: 'Warsztaty z konstruowania i programowania robotów – kreatywna zabawa rozwijająca wyobraźnię i umiejętności techniczne.',
      },
      {
        title: '2. DZIEŃ WODNNEJ PRZYGODY',
        text: 'Zajęcia na basenie, wodny tor przeszkód oraz gry i zabawy w wodzie pod okiem doświadczonych instruktorów.',
      },
      {
        title: '3. WYCIECZKA NA KULIG',
        text: 'Dzień na świeżym powietrzu w zimowej scenerii – kulig, ognisko, pieczenie kiełbasek i mnóstwo zimowych zabaw.',
      },
      {
        title: '4. DZIEŃ STRAŻACKI',
        text: 'Pełen wrażeń dzień z bohaterami codzienności! Dzieci wezmą udział w zawodach strażackich na hali sportowej, które sprawdzą ich zręczność, szybkość i współpracę w zespole. Dodatkową atrakcją będzie wspinaczka na ściance wspinaczkowej – okazja do przełamania swoich barier i zdobycia nowych umiejętności pod okiem doświadczonych instruktorów.',
      },
      {
        title: "5. DZIEŃ ''MAŁYCH BOHATERÓW''",
        text: 'Warsztaty edukacyjne o pierwszej pomocy, ćwiczenia ratownicze oraz zabawy integracyjne, uczące współpracy, pomagania innym i odpowiedzialności.',
      },
    ],
  },
  food: {
    foodAbout:
      'Drugie śniadanie to pyszny i pożywny wybór, na który składa się świeży owoc lub tradycyjna drożdżówka, idealna na szybkie uzupełnienie energii w ciągu dnia. Smaczne obiady dostarczane są w ramach cateringu z restauracji Ostoja.',
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
export const POLKOLONIA_AKTYWNA_ZIMA_LUZNA: PolkoloniaType = {
  title: 'PÓŁKOLONIA AKTYWNA ZIMA',
  hero: {
    pc: 'polkolonie/polkolonia_aktywnazima_luzna_2025-pc',
    mobile: 'polkolonie/polkolonia_aktywnazima_luzna_2025-mobile',
  },
  details: {
    location: 'ŁUŻNA',
    fullLocationName: 'GOK W ŁUŻNEJ',
    dateRange: '20.01-24.01',
    ageRange: '5-13 LAT',
    price: '800 PLN',
    promotion: true,
    promotionPrice: '650 PLN',
    promotionInfo: 'DLA KLIENTÓW NEMO',
    aboutTitle: 'PÓŁKOLONIA AKTYWNA ZIMA Z NEMO',
    aboutDescription:
      'Półkolonie w NEMO SPORTOWA PRZYGODA to idealne połączenie ruchu, nauki i świetnej zabawy. Nasi wykwalifikowani opiekunowie zadbają o bezpieczeństwo i doskonałą atmosferę, tak aby każdy dzień był pełen radości i inspiracji. Dzięki półkoloniom dzieci mają okazję nie tylko rozwinąć swoje pasje i zainteresowania, ale także poznać nowych przyjaciół.',
  },
  contact: {
    title:
      'Zapisz swoje dziecko już dziś i zapewnij mu niezapomniane wspomnienia!',
    phone: '+48 519 625 894',
    email: 'szkolaplywanianemo1@gmail.com',
  },
  localization: {
    localizationDescription: [
      'Gminny Ośrodek Kultury w Łużnej to miejsce, w którym odbędą się zaplanowane zajęcia półkolonii. Lokalizacja jest łatwa do znalezienia – należy skorzystać z głównego wejścia do budynku. Po wejściu sala znajduje się bezpośrednio na wprost, co ułatwia dotarcie na miejsce. Przestrzeń jest przygotowana tak, aby zapewnić dzieciom komfort i sprzyjać różnorodnym aktywnościom.',
    ],
  },

  schedule: {
    title: 'PLAN TYGODNIA',
    scheduleAbout:
      'Tydzień pełen różnorodnych aktywności zapewni dzieciom kreatywną zabawę, ruch i wartościową naukę. Rozpocznie się od budowania i programowania robotów, po czym przeniesie na basen, by odkrywać wodne przygody. W programie znajdzie się także kulig w zimowej scenerii, dzień strażacki pełen wyzwań oraz warsztaty uczące odpowiedzialności i pierwszej pomocy. To idealne połączenie rozwoju umiejętności technicznych, ruchu i integracji.',
    scheduleList: [
      {
        title: '1. DZIEŃ ROBOTYKI',
        text: 'Warsztaty z konstruowania i programowania robotów – kreatywna zabawa rozwijająca wyobraźnię i umiejętności techniczne.',
      },
      {
        title: '2. DZIEŃ WODNNEJ PRZYGODY',
        text: 'Zajęcia na basenie, wodny tor przeszkód oraz gry i zabawy w wodzie pod okiem doświadczonych instruktorów.',
      },
      {
        title: '3. WYCIECZKA NA KULIG',
        text: 'Dzień na świeżym powietrzu w zimowej scenerii – kulig, ognisko, pieczenie kiełbasek i mnóstwo zimowych zabaw.',
      },
      {
        title: '4. DZIEŃ STRAŻACKI',
        text: 'Pełen wrażeń dzień z bohaterami codzienności! Dzieci wezmą udział w zawodach strażackich na hali sportowej, które sprawdzą ich zręczność, szybkość i współpracę w zespole. Dodatkową atrakcją będzie wspinaczka na ściance wspinaczkowej – okazja do przełamania swoich barier i zdobycia nowych umiejętności pod okiem doświadczonych instruktorów.',
      },
      {
        title: "5. DZIEŃ ''MAŁYCH BOHATERÓW''",
        text: 'Warsztaty edukacyjne o pierwszej pomocy, ćwiczenia ratownicze oraz zabawy integracyjne, uczące współpracy, pomagania innym i odpowiedzialności.',
      },
    ],
  },
  food: {
    foodAbout:
      'Drugie śniadanie to pyszny i pożywny wybór, na który składa się świeży owoc lub tradycyjna drożdżówka, idealna na szybkie uzupełnienie energii w ciągu dnia. Smaczne obiady dostarczane są w ramach cateringu z restauracji Ostoja.',
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
export const POLKOLONIA_AKTYWNA_ZIMA_KORZENNA: PolkoloniaType = {
  title: 'PÓŁKOLONIA AKTYWNA ZIMA',
  hero: {
    pc: 'polkolonie/polkolonia_aktywnazima_korzenna_2025-pc',
    mobile: 'polkolonie/polkolonia_aktywnazima_korzenna_2025-mobile',
  },
  details: {
    location: 'KORZENNA',
    fullLocationName: 'CSIR W KORZENNEJ',
    dateRange: '20.01-24.01',
    ageRange: '5-13 LAT',
    price: '800 PLN',
    promotion: true,
    promotionPrice: '650 PLN',
    promotionInfo: 'DLA KLIENTÓW NEMO',
    aboutTitle: 'PÓŁKOLONIA AKTYWNA ZIMA Z NEMO',
    aboutDescription:
      'Półkolonie w NEMO SPORTOWA PRZYGODA to idealne połączenie ruchu, nauki i świetnej zabawy. Nasi wykwalifikowani opiekunowie zadbają o bezpieczeństwo i doskonałą atmosferę, tak aby każdy dzień był pełen radości i inspiracji. Dzięki półkoloniom dzieci mają okazję nie tylko rozwinąć swoje pasje i zainteresowania, ale także poznać nowych przyjaciół.',
  },
  contact: {
    title:
      'Zapisz swoje dziecko już dziś i zapewnij mu niezapomniane wspomnienia!',
    phone: '+48 519 625 894',
    email: 'szkolaplywanianemo1@gmail.com',
  },
  localization: {
    localizationDescription: [
      'Centrum Sportu i Rekreacji w Korzennej to miejsce, w którym odbędą się półkolonie zimowe. Aby dotrzeć do sali, należy wejść głównym wejściem prowadzącym na basen. Następnie trzeba skierować się w lewą stronę i wejść schodami na górę. Sala znajduje się na pierwszym piętrze i jest jedyną salą na tym poziomie, co ułatwia jej znalezienie.',
    ],
  },

  schedule: {
    title: 'PLAN TYGODNIA',
    scheduleAbout:
      'Tydzień pełen różnorodnych aktywności zapewni dzieciom kreatywną zabawę, ruch i wartościową naukę. Rozpocznie się od budowania i programowania robotów, po czym przeniesie na basen, by odkrywać wodne przygody. W programie znajdzie się także kulig w zimowej scenerii, dzień strażacki pełen wyzwań oraz warsztaty uczące odpowiedzialności i pierwszej pomocy. To idealne połączenie rozwoju umiejętności technicznych, ruchu i integracji.',
    scheduleList: [
      {
        title: '1. DZIEŃ ROBOTYKI',
        text: 'Warsztaty z konstruowania i programowania robotów – kreatywna zabawa rozwijająca wyobraźnię i umiejętności techniczne.',
      },
      {
        title: '2. DZIEŃ WODNNEJ PRZYGODY',
        text: 'Zajęcia na basenie, wodny tor przeszkód oraz gry i zabawy w wodzie pod okiem doświadczonych instruktorów.',
      },
      {
        title: '3. WYCIECZKA NA KULIG',
        text: 'Dzień na świeżym powietrzu w zimowej scenerii – kulig, ognisko, pieczenie kiełbasek i mnóstwo zimowych zabaw.',
      },
      {
        title: '4. DZIEŃ STRAŻACKI',
        text: 'Pełen wrażeń dzień z bohaterami codzienności! Dzieci wezmą udział w zawodach strażackich na hali sportowej, które sprawdzą ich zręczność, szybkość i współpracę w zespole. Dodatkową atrakcją będzie wspinaczka na ściance wspinaczkowej – okazja do przełamania swoich barier i zdobycia nowych umiejętności pod okiem doświadczonych instruktorów.',
      },
      {
        title: "5. DZIEŃ ''MAŁYCH BOHATERÓW''",
        text: 'Warsztaty edukacyjne o pierwszej pomocy, ćwiczenia ratownicze oraz zabawy integracyjne, uczące współpracy, pomagania innym i odpowiedzialności.',
      },
    ],
  },
  food: {
    foodAbout:
      'Drugie śniadanie to pyszny i pożywny wybór, na który składa się świeży owoc lub tradycyjna drożdżówka, idealna na szybkie uzupełnienie energii w ciągu dnia. Smaczne obiady dostarczane są w ramach cateringu z restauracji Ostoja.',
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
export const POLKOLONIA_BIALE_SZALENSTWO_BOBOWA: PolkoloniaType = {
  title: 'PÓŁKOLONIA BIAŁE SZALEŃSTWO',
  hero: {
    pc: 'polkolonie/polkolonia_bialeszalenstwo_bobowa_2025-pc',
    mobile: 'polkolonie/polkolonia_bialeszalenstwo_bobowa_2025-mobile',
  },
  details: {
    location: 'BOBOWA',
    fullLocationName: 'MCK W BOBOWEJ',
    dateRange: '27.01-31.01',
    ageRange: '7-13 LAT',
    price: '800 PLN',
    promotion: true,
    promotionPrice: '650 PLN',
    promotionInfo: 'DLA KLIENTÓW NEMO',
    aboutTitle: 'PÓŁKOLONIA BIAŁE SZALEŃSTWO Z NEMO',
    aboutDescription:
      'Półkolonie w NEMO SPORTOWA PRZYGODA to idealne połączenie ruchu, nauki i świetnej zabawy. Nasi wykwalifikowani opiekunowie zadbają o bezpieczeństwo i doskonałą atmosferę, tak aby każdy dzień był pełen radości i inspiracji. Dzięki półkoloniom dzieci mają okazję nie tylko rozwinąć swoje pasje i zainteresowania, ale także poznać nowych przyjaciół.',
  },
  contact: {
    title:
      'Zapisz swoje dziecko już dziś i zapewnij mu niezapomniane wspomnienia!',
    phone: '+48 519 625 894',
    email: 'szkolaplywanianemo1@gmail.com',
  },
  localization: {
    localizationDescription: [
      'Miejskie Centrum Kultury w Bobowej to przestrzeń, która łączy nowoczesność z tradycją, oferując różnorodne możliwości organizacji wydarzeń. Sala konferencyjna znajduje się na poziomie 0, co sprawia, że jest łatwo dostępna zarówno dla uczestników, jak i organizatorów. Wejście do budynku prowadzi przez główne drzwi, które są doskonale oznaczone i wygodne dla wszystkich gości. Po wejściu do środka należy zejść schodami znajdującymi się po prawej stronie, aby dotrzeć do sali.',
    ],
  },

  schedule: {
    title: 'PLAN TYGODNIA',
    scheduleAbout:
      'Tydzień pełen wrażeń i różnorodnych aktywności to idealna propozycja dla dzieci, które chcą rozwijać swoje pasje, bawić się i zdobywać nowe umiejętności. Od konstruowania robotów, przez wodne zabawy i saneczkowe przygody, aż po dzień pełen szaleństwa i finałowe rozgrywki w gry planszowe oraz logiczne – każdy znajdzie coś dla siebie. To wyjątkowa okazja do aktywnego spędzenia czasu, nauki współpracy i świetnej zabawy.',
    scheduleList: [
      {
        title: '1. DZIEŃ ROBOTYKI',
        text: 'Warsztaty z konstruowania i programowania robotów, które w kreatywny sposób rozwijają wyobraźnię i umiejętności techniczne.',
      },
      {
        title: '2. DZIEŃ WODNNEJ PRZYGODY',
        text: 'Aktywny dzień na basenie, gdzie na uczestników czeka wodny tor przeszkód, gry i zabawy pod okiem doświadczonych instruktorów.',
      },
      {
        title: '3. WYCIECZKA NA TOR SANECZKOWY',
        text: 'Ekscytujący dzień na świeżym powietrzu z wyjazdem na tor saneczkowy w Muszynie, gdzie każdy uczestnik będzie mógł przeżyć jeden niezapomniany zjazd.',
      },
      {
        title: '4. DZIEŃ SZALEŃSTWA',
        text: 'Atrakcje dostosowane do pogody – jazda na sankach w zimowej scenerii lub, w razie niesprzyjającej aury, wyjazd do parku trampolin pełnego energii i zabawy.',
      },
      {
        title: '5. DZIEŃ WIELKIEGO FINAŁU',
        text: 'Dzień pełen emocji i rywalizacji w przyjaznej atmosferze! Odbędą się rozgrywki w warcaby, szachy, gry planszowe i logiczne, a także turniej zręcznościowy z użyciem prostych sportowych wyzwań. Na zakończenie dnia – relaksujący wieczór filmowy, który pozwoli podsumować pełen wrażeń tydzień.',
      },
    ],
  },
  food: {
    foodAbout:
      'Drugie śniadanie to pyszny i pożywny wybór, na który składa się świeży owoc lub tradycyjna drożdżówka, idealna na szybkie uzupełnienie energii w ciągu dnia. Smaczne obiady dostarczane są w ramach cateringu z restauracji Ostoja.',
  },

  priceDetails: {
    priceDetailsList: [
      'Tańce',
      'Dzień na basenie',
      'Warsztaty z robotyki',
      'Wycieczka jednodniowa',
      'Wodny tor przeszkód',
      'Zawody sportowe',
      'Gra w piłkę nożną',
      'Seans filmowy',
      'Drugie śniadania',
      'Ciepłe obiady',
      'Ubezpieczenie NNW',
    ],
  },
};
export const POLKOLONIA_BIALE_SZALENSTWO_KORZENNA: PolkoloniaType = {
  title: 'PÓŁKOLONIA BIAŁE SZALEŃSTWO',
  hero: {
    pc: 'polkolonie/polkolonia_bialeszalenstwo_korzenna_2025-pc',
    mobile: 'polkolonie/polkolonia_bialeszalenstwo_korzenna_2025-mobile',
  },
  details: {
    location: 'KORZENNA',
    fullLocationName: 'CSIR W KORZENNEJ',
    dateRange: '27.01-31.01',
    ageRange: '7-13 LAT',
    price: '800 PLN',
    promotion: true,
    promotionPrice: '650 PLN',
    promotionInfo: 'DLA KLIENTÓW NEMO',
    aboutTitle: 'PÓŁKOLONIA BIAŁE SZALEŃSTWO Z NEMO',
    aboutDescription:
      'Półkolonie w NEMO SPORTOWA PRZYGODA to idealne połączenie ruchu, nauki i świetnej zabawy. Nasi wykwalifikowani opiekunowie zadbają o bezpieczeństwo i doskonałą atmosferę, tak aby każdy dzień był pełen radości i inspiracji. Dzięki półkoloniom dzieci mają okazję nie tylko rozwinąć swoje pasje i zainteresowania, ale także poznać nowych przyjaciół.',
  },
  contact: {
    title:
      'Zapisz swoje dziecko już dziś i zapewnij mu niezapomniane wspomnienia!',
    phone: '+48 519 625 894',
    email: 'szkolaplywanianemo1@gmail.com',
  },
  localization: {
    localizationDescription: [
      'Centrum Sportu i Rekreacji w Korzennej to miejsce, w którym odbędą się półkolonie zimowe. Aby dotrzeć do sali, należy wejść głównym wejściem prowadzącym na basen. Następnie trzeba skierować się w lewą stronę i wejść schodami na górę. Sala znajduje się na pierwszym piętrze i jest jedyną salą na tym poziomie, co ułatwia jej znalezienie.',
    ],
  },

  schedule: {
    title: 'PLAN TYGODNIA',
    scheduleAbout:
      'Tydzień pełen wrażeń i różnorodnych aktywności to idealna propozycja dla dzieci, które chcą rozwijać swoje pasje, bawić się i zdobywać nowe umiejętności. Od konstruowania robotów, przez wodne zabawy i saneczkowe przygody, aż po dzień pełen szaleństwa i finałowe rozgrywki w gry planszowe oraz logiczne – każdy znajdzie coś dla siebie. To wyjątkowa okazja do aktywnego spędzenia czasu, nauki współpracy i świetnej zabawy.',
    scheduleList: [
      {
        title: '1. DZIEŃ ROBOTYKI',
        text: 'Warsztaty z konstruowania i programowania robotów, które w kreatywny sposób rozwijają wyobraźnię i umiejętności techniczne.',
      },
      {
        title: '2. DZIEŃ WODNNEJ PRZYGODY',
        text: 'Aktywny dzień na basenie, gdzie na uczestników czeka wodny tor przeszkód, gry i zabawy pod okiem doświadczonych instruktorów.',
      },
      {
        title: '3. WYCIECZKA NA TOR SANECZKOWY',
        text: 'Ekscytujący dzień na świeżym powietrzu z wyjazdem na tor saneczkowy w Muszynie, gdzie każdy uczestnik będzie mógł przeżyć jeden niezapomniany zjazd.',
      },
      {
        title: '4. DZIEŃ SZALEŃSTWA',
        text: 'Atrakcje dostosowane do pogody – jazda na sankach w zimowej scenerii lub, w razie niesprzyjającej aury, wyjazd do parku trampolin pełnego energii i zabawy.',
      },
      {
        title: '5. DZIEŃ WIELKIEGO FINAŁU',
        text: 'Dzień pełen emocji i rywalizacji w przyjaznej atmosferze! Odbędą się rozgrywki w warcaby, szachy, gry planszowe i logiczne, a także turniej zręcznościowy z użyciem prostych sportowych wyzwań. Na zakończenie dnia – relaksujący wieczór filmowy, który pozwoli podsumować pełen wrażeń tydzień.',
      },
    ],
  },
  food: {
    foodAbout:
      'Drugie śniadanie to pyszny i pożywny wybór, na który składa się świeży owoc lub tradycyjna drożdżówka, idealna na szybkie uzupełnienie energii w ciągu dnia. Smaczne obiady dostarczane są w ramach cateringu z restauracji Ostoja.',
  },

  priceDetails: {
    priceDetailsList: [
      'Tańce',
      'Dzień na basenie',
      'Warsztaty z robotyki',
      'Wycieczka jednodniowa',
      'Wodny tor przeszkód',
      'Zawody sportowe',
      'Gra w piłkę nożną',
      'Seans filmowy',
      'Drugie śniadania',
      'Ciepłe obiady',
      'Ubezpieczenie NNW',
    ],
  },
};
export const POLKOLONIA_ZIMOWA_FABRYKA_POMYSLOW: PolkoloniaType = {
  title: 'PÓŁKOLONIA ZIMOWA FABRYKA POMYSŁÓW',
  hero: {
    pc: 'polkolonia_zimowa_fabryka_pomyslow_2026-pc',
    mobile: 'polkolonia_zimowa_fabryka_pomyslow_2026-mobile',
  },
  details: {
    location: 'BOBOWA, KORZENNA, GORLICE',
    fullLocationName: 'MCK W BOBOWEJ',
    dateRange: '02.02-06.02',
    ageRange: '5-13 LAT',
    price: '850 PLN',
    promotion: true,
    promotionPrice: '700 PLN',
    promotionInfo: 'DLA KLIENTÓW NEMO',
    aboutTitle: 'Zimowe ferie pełne pasji, odkryć i radości!',
    aboutDescription:
      'Zapraszamy wszystkie dzieci na tydzień niezwykłych przygód, w którym każdy dzień przynosi coś nowego – naukę przez zabawę, sportowe emocje i zimową magię. W naszej Zimowej Fabryce Pomysłów nikt się nie nudzi, a uśmiech nie znika z twarzy! 😊',
  },
  localization: {
    localizationDescription: [
      'Miejskie Centrum Kultury w Bobowej to przestrzeń, która łączy nowoczesność z tradycją, oferując różnorodne możliwości organizacji wydarzeń. Sala konferencyjna znajduje się na poziomie 0, co sprawia, że jest łatwo dostępna zarówno dla uczestników, jak i organizatorów. Wejście do budynku prowadzi przez główne drzwi, które są doskonale oznaczone i wygodne dla wszystkich gości. Po wejściu do środka należy zejść schodami znajdującymi się po prawej stronie, aby dotrzeć do sali.',
    ],
  },
  contact: {
    title:
      'Zapisz swoje dziecko już dziś i zapewnij mu niezapomniane wspomnienia!',
    phone: '+48 519 625 894',
    email: 'szkolaplywanianemo1@gmail.com',
  },
  schedule: {
    title: 'PLAN TYGODNIA',
    scheduleAbout:
      'W nadchodzącym tygodniu czeka nas mnóstwo atrakcji — od naukowych eksperymentów i wodnych przygód, po zimowy kulig i wspólne kino. Będzie też czas na kreatywne gotowanie podczas pieczenia tortów! Nie zabraknie ruchu, zabawy i śmiechu każdego dnia. To tydzień pełen emocji, odkryć i niezapomnianych wspomnień!',
    scheduleList: [
      {
        title: '🧪 Poniedziałek – Fabryka Eksperymentów',
        text: 'Rozpoczynamy tydzień z hukiem! Wspólnie stworzymy małe laboratorium pełne kolorów i wybuchających pomysłów. Dzieci samodzielnie przeprowadzą eksperymenty, które pobudzą wyobraźnię i pokażą, że nauka może być naprawdę magiczna!',
      },
      {
        title: '💦 Wtorek – Wodny Tor Przeszkód w Korzennej',
        text: 'Czas na aktywny dzień pełen emocji! Odwiedzimy basen w Korzennej, gdzie czeka na nas gigantyczny wodny tor przeszkód – skoki, ślizgi, równowaga i mnóstwo śmiechu! A po wodnych atrakcjach zmierzymy się z wyzwaniami na ściance wspinaczkowej – idealna okazja, by pokonać własne granice!',
      },
      {
        title: '🛷 Środa – Kulig w Gładyszowie',
        text: 'Prawdziwa zimowa przygoda! Wybierzemy się na kulig do Gładyszowa, gdzie czekają nas zaprzęgi, śnieżne krajobrazy, ognisko i gorąca herbata. Ten dzień zapamiętamy na długo – gwarantowana dawka śmiechu i zimowej radości! (aktualnie wybieramy najlepszą ofertę, by zapewnić dzieciom jak najwięcej atrakcji!) ',
      },
      {
        title: '🎬 Czwartek – Kino w Nowym Sączu',
        text: 'Czas na chwilę relaksu! Wybierzemy się do kina w Nowym Sączu, by wspólnie obejrzeć film pełen przygód, śmiechu i emocji. Bo ferie to również czas na odpoczynek w dobrym towarzystwie i przy pachnącym popcornie! 🍿',
      },
      {
        title: '🍰 Piątek – Mister Chef: Pieczenie Tortów',
        text: 'Na zakończenie tygodnia czeka na nas prawdziwa kulinarna przygoda! W ten wyjątkowy piątek dzieci zamienią się w mistrzów kuchni, przygotowując własnoręcznie wypieczone torty – od pieczenia, przez dekorowanie, aż po degustację! To doskonały sposób, by rozwijać kreatywność, współpracować w grupie i stworzyć coś pysznego. Kto zostanie Mister Chef tego dnia? 🍓🎂 Zabawa, śmiech i słodkie wspomnienia gwarantowane!',
      },
      {
        title: '*Zimowa zabawa',
        text: 'Wspólne lepienie bałwana, bitwa na śnieżki, sanki, jabłuszka. W przypadku sprzyjających warunków pogodowych.',
      },
      {
        title: '*Poranna gimnastyka',
        text: 'Wspólna dawka ruchu przy muzyce! Skakanie, rozciąganie i taneczne wygibasy, które rozbudzą każdego śpiocha. 🌞🤸‍♀️',
      },
    ],
  },
  food: {
    foodAbout:
      'Drugie śniadanie to pyszny i pożywny wybór, na który składa się świeży owoc lub tradycyjna drożdżówka, idealna na szybkie uzupełnienie energii w ciągu dnia. Smaczne obiady dostarczane są w ramach cateringu z restauracji Ostoja.',
  },

  priceDetails: {
    priceDetailsList: [
      'Udział we wszystkich atrakcjach i wycieczkach z programu',
      'Ubezpieczenie NNW każdego uczestnika',
      'Drugie śniadanie i ciepły obiad oraz napój każdego dnia',
      'Profesjonalna opieka doświadczonych wychowawców',
      'Nieograniczona dawka radości, śmiechu i zimowych wspomnień!',
      'Prezent: unikatowa bluza dla uczestnika',
    ],
  },
};

export const POLKOLONIA_ZIMOWA_PRACOWNIA_MARZEN: PolkoloniaType = {
  title: 'PÓŁKOLONIA ZIMOWA PRACOWNIA MARZEŃ',
  hero: {
    pc: 'polkolonia_zimowa_pracownia_marzen_2026-pc',
    mobile: 'polkolonia_zimowa_pracownia_marzen_2026-mobile',
  },
  details: {
    location: 'BOBOWA, KORZENNA, GORLICE',
    fullLocationName: 'MCK W BOBOWEJ',
    dateRange: '09.02-13.02',
    ageRange: '5-13 LAT',
    price: '850 PLN',
    promotion: true,
    promotionPrice: '700 PLN',
    promotionInfo: 'DLA KLIENTÓW NEMO',
    aboutTitle: 'Drugi tydzień ferii zapowiada się wyjątkowo twórczo!',
    aboutDescription:
      'W naszej Zimowej Pracowni Marzeń każdy dzień to nowa przygoda, podczas której dzieci rozwijają swoje talenty, uczą się współpracy i przeżywają fantastyczne emocje. Czeka nas mnóstwo zabawy, kreatywności i niezapomnianych chwil w gronie przyjaciół! 💙',
  },
  localization: {
    localizationDescription: [
      'Miejskie Centrum Kultury w Bobowej to przestrzeń, która łączy nowoczesność z tradycją, oferując różnorodne możliwości organizacji wydarzeń. Sala konferencyjna znajduje się na poziomie 0, co sprawia, że jest łatwo dostępna zarówno dla uczestników, jak i organizatorów. Wejście do budynku prowadzi przez główne drzwi, które są doskonale oznaczone i wygodne dla wszystkich gości. Po wejściu do środka należy zejść schodami znajdującymi się po prawej stronie, aby dotrzeć do sali.',
    ],
  },
  contact: {
    title:
      'Zapisz swoje dziecko już dziś i zapewnij mu niezapomniane wspomnienia!',
    phone: '+48 519 625 894',
    email: 'szkolaplywanianemo1@gmail.com',
  },
  schedule: {
    title: 'PLAN TYGODNIA',
    scheduleAbout:
      'Tydzień pełen kreatywności, ruchu i świetnej zabawy! Dzieci wezmą udział w twórczych zajęciach, wodnych atrakcjach, kulinarnych warsztatach i filmowej przygodzie. Nie zabraknie zagadek, emocji i wspólnego śmiechu. Każdy dzień przyniesie nowe wyzwania i niezapomniane wspomnienia. To będzie wyjątkowy czas pełen radości i zimowej energii!',
    scheduleList: [
      {
        title: '🎨 Poniedziałek – Zimowa Pracownia Marzeń',
        text: 'Rozpoczynamy tydzień od twórczej eksplozji pomysłów! Dzieci stworzą wyjątkowe zimowe ozdoby, prace plastyczne i kreatywne projekty, które rozbudzą ich wyobraźnię i pozwolą poczuć się jak prawdziwi artyści. To idealny start do magicznego tygodnia! ✨',
      },
      {
        title: '💦 Wtorek – Wodny Tor Przeszkód w Korzennej',
        text: 'Czas na aktywny dzień pełen emocji! Odwiedzimy basen w Korzennej, gdzie czeka na nas gigantyczny wodny tor przeszkód – skoki, ślizgi, równowaga i mnóstwo śmiechu! A po wodnych atrakcjach zmierzymy się z wyzwaniami na ściance wspinaczkowej – idealna okazja, by pokonać własne granice!',
      },
      {
        title: '🍕 Środa – Warsztaty z Pizzy w Jaśle',
        text: 'Dziś zamieniamy się w kucharzy! Pod okiem instruktorów dzieci poznają sekrety przygotowania idealnej pizzy – od wyrabiania ciasta po wybór ulubionych dodatków. A na koniec – wspólna uczta i smakowita nagroda za kulinarne wysiłki! 😋',
      },
      {
        title: '🎬 Czwartek – Kino w Nowym Sączu',
        text: 'Czas na chwilę relaksu i filmową przygodę! Wybierzemy się do kina w Nowym Sączu, by obejrzeć film pełen humoru, emocji i przygód. To doskonały dzień na odpoczynek i wspólną zabawę w kinowej atmosferze. 🍿',
      },
      {
        title: '🕵️‍♂️ Piątek – Sekretne śledztwo',
        text: 'Ostatniego dnia czeka na uczestników coś naprawdę wyjątkowego… 🔎 Miasto zostało opanowane przez tajemniczych „gangsterów”, a tylko sprytni detektywi będą w stanie odkryć ich sekrety! Szyfry, ukryte wskazówki, tajne misje i nieoczekiwane zwroty akcji – to będzie dzień pełen emocji, napięcia i świetnej zabawy. Kto okaże się najbardziej przebiegły, a kto zachowa zimną krew do samego końca?',
      },
      {
        title: '*Zimowa zabawa',
        text: 'Wspólne lepienie bałwana, bitwa na śnieżki, sanki, jabłuszka. W przypadku sprzyjających warunków pogodowych.',
      },
      {
        title: '*Poranna gimnastyka',
        text: 'Wspólna dawka ruchu przy muzyce! Skakanie, rozciąganie i taneczne wygibasy, które rozbudzą każdego śpiocha. 🌞🤸‍♀️',
      },
    ],
  },
  food: {
    foodAbout:
      'Drugie śniadanie to pyszny i pożywny wybór, na który składa się świeży owoc lub tradycyjna drożdżówka, idealna na szybkie uzupełnienie energii w ciągu dnia. Smaczne obiady dostarczane są w ramach cateringu z restauracji Ostoja.',
  },

  priceDetails: {
    priceDetailsList: [
      'Udział we wszystkich atrakcjach i wycieczkach z programu',
      'Ubezpieczenie NNW każdego uczestnika',
      'Drugie śniadanie i ciepły obiad oraz napój każdego dnia',
      'Opieka profesjonalnej i zaangażowanej kadry wychowawczej',
      'Codzienna porcja radości, kreatywności i zimowej magii! ☃️',
      'Prezent: unikatowa bluza dla uczestnika',
    ],
  },
};
