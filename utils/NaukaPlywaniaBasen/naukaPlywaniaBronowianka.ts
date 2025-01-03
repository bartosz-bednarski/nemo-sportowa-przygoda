import {
  instructorsRowBoxType,
  poolTutorialType,
  priceListType,
} from '@/types/Globals/globals';
import {
  aboutType,
  groupsType,
  poolInformationsType,
} from '@/types/NaukaPlywania/naukaPlywania';
import {customColors} from '@/types/UI/colors';
import {GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS} from '../Grupy/grupyPoziomZaawansowania';
import {NAUKA_PLYWANIA} from '../NaukaPlywania/naukaPlywania';

type naukaPlywaniaBasen = {
  zRodzicami: {
    backgroundColor: customColors;
    about: aboutType;
    instructors: instructorsRowBoxType;
    groups: groupsType;
    priceList: priceListType;
  };
  // dzieci: {
  //   backgroundColor: customColors;
  //   about: aboutType;
  //   instructors: instructorsType;
  //   pools: poolsType;
  //   groups: groupsType;
  // };
  // dorosli: {
  //   backgroundColor: customColors;
  //   about: aboutType;
  //   instructors: instructorsType;
  //   pools: poolsType;
  //   groups: groupsType;
  // };
};

export const CENNIK_Z_RODZICAMI_BRONOWIANKA: priceListType = [
  {
    stickerH4: {
      title: 'LEKCJE',
      titleStrip: 'GRUPOWE',
      scale: 1.6,
      stripTextColor: 'basicOrange',
      stripBgColor: 'white',
      paddingBottom: 0,
    },
    oneLesson: {
      price: '70 zł',
      time: 45,
    },
    tenLessons: {
      price: '700 zł',
      time: '10 x 45',
    },
    button: {
      title: 'Zapisz się na zajęcia',
      textColor: 'lightBlue',
      bgColor: 'white',
      href: 'https://zapisy.activenow.pl/szkola-plywania-nemo1/',
    },
  },
];
export const NAUKA_PLYWANIA_BRONOWIANKA: naukaPlywaniaBasen = {
  zRodzicami: {
    backgroundColor: 'lightBlue',
    about: {
      stickerH2: {
        title: 'NAUKA PŁYWANIA',
        titleStrip: 'Z RODZICAMI',
        scale: 1.2,
        stripTextColor: 'lightBlue',
        stripBgColor: 'white',
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        titleColor: 'lightBlue',
        title: NAUKA_PLYWANIA.zRodzicami.about.aboutTextPoppins.title,
        description:
          NAUKA_PLYWANIA.zRodzicami.about.aboutTextPoppins.description,
      },
      image: {
        src: 'lessonsTypes/zRodzicami.webp',
        alt: 'nauka pływania niemowlaki',
      },
      button: {
        title: 'Dowiedz się więcej',
        href: '/naukaplywania#tips',
      },
    },
    priceList: CENNIK_Z_RODZICAMI_BRONOWIANKA,
    instructors: {
      bgColor: 'lightBlue',
      instructors: [
        {
          instructorName: 'WIKTORIA FRYCZEK',
          scale: 0.7,
          img1: 'instructor-1.png',
          img2: 'instructor-1.png',
          href: '/',
        },
        {
          instructorName: 'WIKTORIA FRYCZ',
          scale: 0.7,
          img1: 'instructor-1.png',
          img2: 'instructor-1.png',
          href: '/',
        },
        {
          instructorName: 'WIKTORIA FRYCZE',
          scale: 0.7,
          img1: 'instructor-1.png',
          img2: 'instructor-1.png',
          href: '/',
        },
      ],
    },
    groups: {
      stripH2: {
        type: 'h2',
        title: 'ZAJĘCIA',
        scale: 1.2,
        stripBgColor: 'white',
        stripTextColor: 'darkBlue',
      },
      groups: [
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.trzyMiesiace,
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.siedemMiesiecy,
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.dwanascieMiesiecy,
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.dwaLata,
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.czteryLata,
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.czteryLataBez,
      ],
    },
  },
};

export const BASEN_BRONOWIANKA_INFORMATIONS: poolInformationsType = {
  color: 'darkBlue',
  title: 'Basen BRONOWIANKA',
  imageSrc: 'custom-pool.webp',
  mapSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.5784458489893!2d19.879274776919935!3d50.075455964292786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165bdabd2c10ef%3A0xa2da596d64995360!2sBronowianka.%20Klub%20sportowy!5e0!3m2!1spl!2spl!4v1727429256774!5m2!1spl!2spl',
  stickerH2: {
    title: 'BASEN',
    titleStrip: 'BRONOWIANKA',
    stripBgColor: 'basicOrange',
    stripTextColor: 'darkBlue',
    scale: 1.2,
    paddingBottom: 0,
  },
  icons: {
    pool1: {
      exists: false,
      title: 'BASEN SPORTOWY 25 X 12,5M, GŁĘBOKOŚĆ 1,35-1,90M',
    },
    pool2: {
      exists: true,
      title: 'BASEN REKREACYJNY 12,5 X 7M, GŁĘBOKOŚĆ 0,00-1,20M',
    },
    stand: {
      exists: false,
      title: 'TRYBUNY NA BASENIE',
    },
    cloakroomWomen: {
      exists: true,
      title: 'SZATNIA DAMSKA',
    },
    cloakroomMen: {
      exists: true,
      title: 'SZATNIA MĘSKA',
    },
    cloakroomFamily: {
      exists: true,
      title: 'SZATNIA RODZINNA',
    },
    parking: {
      exists: true,
      title: 'PARKING PRZED OBIEKTEM',
    },
  },
};
export const BASEN_BRONOWIANKA_TUTORIAL: poolTutorialType = {
  header: false,
  color: 'darkBlue',
  firstRule:
    'Odzież wierzchnią oraz buty zostaw w wyznaczonym miejscu w holu - przy recepcji w hotelu.',
  rules: [
    'W kasie biletowej kup bilet na lekcję pływania „Nemo Sportowa Przygoda” dla swojego dziecka.',
    'Rodzic może pomóc dziecku przebrać się w szatni. Dziecko powinno być ubrane w strój kąpielowy, czepek, okulary i klapki.',
    'Po przebraniu, przyprowadzamy dziecko do miejsca przejścia na basen. ',
    'W wyznaczonym miejscu (przejście między szatnią a basenem) instruktor odbiera dziecko i prowadzi je na lekcję pływania.',
    'Po zakończonej lekcji, trwającej 45 minut, instruktor przyprowadza dzieci z powrotem w to samo miejsce, gdzie rodzic może odebrać dziecko.',
  ],
};
