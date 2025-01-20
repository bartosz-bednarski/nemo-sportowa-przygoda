import { AccommodationPropsType } from '@/components/OfertaZimowa/Obozy/Accommodation/Accommodation';
import { HillSidesPropsType } from '@/components/OfertaZimowa/Obozy/HillSides/HillSides';
import { SurroundingsPropsType } from '@/components/OfertaZimowa/Obozy/Surroundings/Surroundings';
import { WhatsWaiting4YouPropsType } from '@/components/OfertaZimowa/Obozy/WhatsWaiting4You/WhatsWaiting4You';
import { ContactPropsType } from '@/components/OfertaZimowa/Ui/Contact/Contact';
import { DetailsPropsType } from '@/components/OfertaZimowa/Ui/Details/Details';
import { FoodPropsType } from '@/components/OfertaZimowa/Ui/Food/Food';
import { HeroPropsType } from '@/components/OfertaZimowa/Ui/Hero/Hero';
import { PriceDetailsPropsType } from '@/components/OfertaZimowa/Ui/PriceDetails/PriceDetails';
import { SchedulePropsType } from '@/components/OfertaZimowa/Ui/Schedule/Schedule';

export type CampCoverType = {
  active: boolean;
  title: string;
  price: string;
  localization: string;
  date: string;
  coverImage: string;
  href: string;
};
export type CampType = {
  title: string;
  hero: HeroPropsType;
  details: DetailsPropsType;
  contactNemo: ContactPropsType;
  contactCollab?: ContactPropsType;
  whatsWaiting4You: WhatsWaiting4YouPropsType;
  accommodation: AccommodationPropsType;
  surroundings: SurroundingsPropsType;
  hillSides: HillSidesPropsType;
  schedule: SchedulePropsType;
  food: FoodPropsType;
  priceDetails: PriceDetailsPropsType;
};
export type CampsCoversType = CampCoverType[];

export const OBOZY_LISTA_2025: CampsCoversType = [
  {
    active: true,
    title: 'OBÓZ NARCIARSKI Z BOM4SPORTS',
    price: '2499 PLN + KARNETY (~600 PLN)',
    localization: 'MUSZYNA',
    date: '26.01-01.02',
    coverImage: 'winter/polkolonie/polkolonie_winter.webp',
    href: '/ofertazimowa/obozy/narciarskie/muszyna',
  },
];
export const OBOZ_NARCIARSKI_MUSZYNA: CampType = {
  title: 'OBÓZ NARCIARSKI Z BOM4SPORTS',
  hero: {
    pc: 'obozy/oboz_narciarski_muszyna_2025-pc',
    mobile: 'obozy/oboz_narciarski_muszyna_2025-mobile',
  },
  details: {
    location: 'BOBOWA',
    fullLocationName: 'MCK W BOBOWEJ',
    dateRange: '20.01-24.01',
    ageRange: '5-13 LAT',
    price: '2499 PLN + KARNETY (~600 PLN)',
    promotion: false,
    promotionPrice: '',
    promotionInfo: '',
    aboutTitle: 'OBÓZ NARCIARSKI Z BOM4SPORTS',
    aboutDescription:
      'Przygotujcie się na niezapomnianą przygodę na stoku! Wspólnie z firmą Bom4Sports zapraszamy dzieci i młodzież na wyjątkowy obóz narciarski organizowany podczas ferii zimowych. To idealna propozycja dla wszystkich, którzy chcą doskonalić swoje umiejętności narciarskie, rozwijać pasję do sportów zimowych i aktywnie spędzić czas w gronie rówieśników.',
    about2Title: 'Dlaczego warto wybrać nasz obóz?',
    about2Description:
      'Współpracując z ekspertami z Bom4Sports, zapewniamy profesjonalny poziom nauki oraz bezpieczeństwo na każdym etapie obozu. Nasze zajęcia są prowadzone przez doświadczonych instruktorów, którzy dostosowują program szkoleniowy do poziomu umiejętności uczestników - od początkujących po zaawansowanych',
  },
  contactNemo: {
    title:
      'Zapisz swoje dziecko już dziś i zapewnij mu niezapomniane wspomnienia!',
    phone: '+48 519 625 894',
    email: 'szkolaplywanianemo1@gmail.com',
  },
  contactCollab: {
    title: 'Sprawdź stronę Bom4Sports i zapisz się już dziś!',
    website: 'https://www.bom4sports.pl',
    phone: '+48 505 852 290',
    email: 'kontakt@bom4sports.pl',
  },
  whatsWaiting4You: {
    list: [
      'Codzienne zajęcia narciarskie – intensywny program szkoleniowy z wykwalifikowanymi instruktorami.',
      'Nowoczesne techniki i treningi – metody szkoleniowe dostosowane do każdego poziomu.',
      'Analiza techniki jazdy – regularna korekta błędów i wskazówki na temat techniki.',
      'Bezpieczeństwo na stoku – omówienie zasad bezpieczeństwa i odpowiedzialnego zachowania na trasie.',
      'Dodatkowe atrakcje – gry integracyjne, wieczorne animacje i zajęcia rekreacyjne po dniu na stoku.',
      'Bezpieczeństwo i Opieka.',
    ],
    summary:
      'Wspólnie z Bom4Sports zapewniamy pełną opiekę, transport i wyżywienie dla uczestników. Nasz zespół dba o bezpieczeństwo i komfort dzieci przez cały czas trwania obozu, zarówno na stoku, jak i poza nim.',
  },
  accommodation: {
    about:
      'Mieszkamy w domu wczasowym „Szczyt”, który znajduje się na pięknym wzgórzu ponad 500 m.n.pm, z którego rozciągają się widoki na miasto Muszynę oraz okalające pasma górskie.',
    list: [
      '3 sale do prowadzenia zajęć, imprez oraz zabaw.',
      'Pokoje 2, 3, 4, 5 osobowe',
      'Pokoje wyposażone w łazienki.',
      'Śniadania, obiady, kolacje.',
      'Dostęp do Wi-fi.',
      'Dostęp do telewizji.',
      'Klimatyczna, zielona okolica.',
    ],
    image: 'dom_wczasowy_szczyt',
    href: 'https://www.szczyt.com/',
  },
  surroundings: {
    about:
      'Obóz narciarski odbywa się w malowniczym rejonie pełnym atrakcji i doskonałych możliwości spędzania czasu zimą. W najbliższej okolicy znajdują się liczne stoki narciarskie, które zapewniają świetne warunki zarówno dla początkujących, jak i zaawansowanych narciarzy.',
    about2:
      'Bogactwo okolicznych atrakcji sprawia, że każdy dzień jest pełen emocji i nowych doświadczeń, a czas spędzony tutaj zapada w pamięć na długo.',
    list: {
      title:
        'Okolica oferuje również wiele możliwości aktywnego wypoczynku poza stokiem. Po nartach uczestnicy mogą korzystać z pobliskich atrakcji, takich jak:',
      list: [
        'Hale sportowe, gdzie organizowane są różnorodne zajęcia sportowe.',
        'Lodowiska, idealne do doskonalenia jazdy na łyżwach.',
        'Sankostrada, która gwarantuje świetną zabawę dla dzieci i młodzieży.',
        'Kręgielnie, gdzie można zrelaksować się i spędzić czas w miłym towarzystwie.',
        'Ścianka wspinaczkowa dla miłośników wyzwań.',
        'Kreatywne zabawy na śniegu, takie jak lepienie figur czy organizowanie zawodów.',
        'Ogniska, które pozwalają na integrację przy cieple płomieni i pieczeniu kiełbasek.',
      ],
    },
  },
  hillSides: {
    title1: 'OPISY',
    title2: 'STOKÓW',
    list: [
      {
        title: 'Słotwiny Arena',
        listAbout: [
          '10 tras zjazdowych o różnej skali trudności.',
          '6-osobowa kolej wyprzęgana firmy Doppelmayr.',
          'Kompleks wyciągów orczykowych oraz „Zimowy plac zabaw Kubuś-Ski” na wyciągu szkoleniowym dla dzieci.',
        ],
        image: 'slotwiny_arena',
      },
      {
        title: 'Tylicz Ski',
        listAbout: [
          'Polanki z wyciągiem taśmowym oraz orczykiem szkoleniowym dla początkujących.',
          'Mały stok z  koleją krzesełkową nr 2 oraz wyciągiem orczykowym.',
          'Główny Stok obsługiwany przez kolej krzesełkową nr 1.',
        ],
        image: 'tylicz_ski',
      },
      {
        title: 'Master Ski Tylicz',
        listAbout: [
          'Stacja dysponuje 4 oraz 6 osobową kolejką krzesełkową oraz sześcioma wyciągami.',
          'Centrum oferuje łącznie 10 km tras zjazdowych, w tym dwie najdłuższe nartostrady w Tyliczu.',
          'Dzięki trasom o zróżnicowanym stopniu trudności każdy narciarz znajdzie tu coś dla siebie.',
        ],
        image: 'master_ski_tylicz',
      },
      {
        title: 'Jaworzyna Krynicka',
        listAbout: [
          '14 tras o łącznej długości niemal 15 km.',
          'Najnowocześniejsza w Polsce 6-os kolej krzesełkowa Jaworzyna Express na trasie nr 6.',
          'Nowa 4-os kolej krzesełkowa wraz z trasą szkoleniową na szczycie Jaworzyny.',
          '6-os kolei gondolowej i najdłuższej oświetlonej trasie w Polsce o długości 2,6 km.',
        ],
        image: 'jaworzyna_krynicka',
      },
    ],
  },
  schedule: {
    title: 'PROGRAM OBOZU',
    scheduleAbout:
      'Jeździmy na okolicznych, bardzo dobrze przygotowanych stokach narciarskich takich jak: Słotwiny Arena, Tylicz Ski, Master Ski Tylicz, Jaworzyna Krynicka. Natomiast po nartach w programie zapewniamy zajęcia w hali sportowej i lodowisku, a wieczorami proponujemy wideo analizę, gry i zabawy tematyczne, pogadanki narciarskie i snowboardowe podparte zajawkowymi filmami.',
    scheduleList: [
      {
        title: '1. SZKOLENIE NARCIARSKIE',
        text: '4h dziennie szkolenie narciarskie pod okiem wykwalifikowanych instruktorów.',
      },
      {
        title: '2. CODZIENNE TRANSFERY NA STOKI',
        text: '',
      },
      {
        title: '3. DOSKONALENIE JAZDY',
        text: 'Zajęcia z doskonalenia jazdy po wymuszonym torze (tyczki).',
      },
      {
        title: '4. WIDEO ANALIZA',
        text: 'Codzienna wideo analiza postępów dzieci.',
      },
      {
        title: '5. ZAJĘCIA POZA NARTAMI',
        text: 'Łyżwy, sankostrada, kręgle, ścianka wspinaczkowa, lepienie figur z śniegu, ognisko.',
      },
      {
        title: '6. GRY I ZABAWY W OŚRODKU',
        text: '',
      },
    ],
  },
  food: {
    foodAbout:
      'Domu wczasowy „Szczyt” zapewnia nam wyśmienite i smaczne jedzenie w postaci 4 posiłków dziennie. W ofercie znajdują się śniadania w formie stołu szwedzkiego, podawane na ciepło obiady, kolacja w formie stołu szwedzkiego oraz podwieczorek.',
    foodList: [
      'Śniadania w formie stołu szwedzkiego.',
      'Ciepłe podawane obiady.',
      'Kolacja w formie stołu szwedzkiego.',
      'Podwieczorek.',
    ],
  },

  priceDetails: {
    priceDetailsList: [
      '4h szkolenia narciarskiego codziennie',
      'Transfery na stoki',
      'Wideo analiza',
      'Łyżwy',
      'Sankostrada',
      'Kręgle',
      'Ognisko',
      'Opieka 24h',
      'Ubezpieczenie NNW',
      'Miła atmosfera',
      'Zdjęcia',
      'Relacje',
      'Transport z Krakowa',
    ],
  },
};
