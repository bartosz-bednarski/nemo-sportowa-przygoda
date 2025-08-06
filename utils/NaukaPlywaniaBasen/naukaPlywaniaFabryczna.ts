import {customColors} from '@/types/UI/colors';
import {GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS} from '../Grupy/grupyPoziomZaawansowania';
import {PriceListPropsType} from '@/components/NaukaPlywania/Ui/PriceList/PriceList';
import {GroupsBySkillPropsType} from '@/components/NaukaPlywania/Ui/GroupsBySkill/GroupsBySkill';
import {NaukaPływaniaAboutPropsType} from '@/components/NaukaPlywania/Ui/NaukaPlywaniaAbout/NaukaPlywaniaAbout';
import {PoolInformationsPropsType} from '@/components/NaukaPlywania/Ui/PoolInformations/PoolInformations';
import {PoolTutorialPropsType} from '@/components/NaukaPlywania/Ui/PoolTutorial/PoolTutorial';
import { NAUKA_PLYWANIA } from '../NaukaPlywania/NaukaPlywania';

type NaukaPlywaniaBasen = {
  zRodzicami: {
    backgroundColor: customColors;
    about: NaukaPływaniaAboutPropsType;
    groups: GroupsBySkillPropsType;
    priceList: PriceListPropsType;
  };
  dzieciMlodziez: {
    backgroundColor: customColors;
    about: NaukaPływaniaAboutPropsType;
    groups: GroupsBySkillPropsType;
    priceList: PriceListPropsType;
  };
  // dorosli: {
  //   backgroundColor: customColors;
  //   about: NaukaPływaniaAboutPropsType;
  //   groups: GroupsBySkillPropsType;
  //   priceList: PriceListPropsType;
  // };
};
const CENNIK_Z_RODZICAMI_BRONOWIANKA: PriceListPropsType = [
  {
    stickerH4: {
      title: 'LEKCJE',
      titleStrip: 'GRUPOWE',
      stripTextColor: 'basicOrange',
      stripBgColor: 'white',
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
      href: '#harmonogram',
    },
  },
];

const CENNIK_DZIECI_MLODZIEZ_FABRYCZNA: PriceListPropsType = [
  {
    stickerH4: {
      title: 'LEKCJE',
      titleStrip: 'GRUPOWE',
      stripTextColor: 'basicOrange',
      stripBgColor: 'white',
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
      href: '#harmonogram',
    },
  },
  {
    stickerH4: {
      title: 'LEKCJE',
      titleStrip: 'INDYWIDUALNE',
      stripTextColor: 'lightBlue',
      stripBgColor: 'basicOrange',
    },
    oneLesson: {
      price: '145 zł',
      time: 45,
    },
    tenLessons: {
      price: '1450 zł',
      time: '10 x 45',
    },
    button: {
      title: 'Zapisz się na zajęcia',
      textColor: 'lightBlue',
      bgColor: 'white',
      href: '#harmonogram',
    },
  },
  {
    stickerH4: {
      title: 'LEKCJE',
      titleStrip: '2 OSOBOWE',
      stripBgColor: 'darkBlue',
      stripTextColor: 'white',
    },
    oneLesson: {
      price: '200 zł',
      time: 45,
    },
    tenLessons: {
      price: '2000 zł',
      time: '10 x 45',
    },
    button: {
      title: 'Zapisz się na zajęcia',
      textColor: 'lightBlue',
      bgColor: 'white',
      href: '#harmonogram',
    },
  },
];
// const CENNIK_DOROSLI_FABRYCZNA: PriceListPropsType = [
//   {
//     stickerH4: {
//       title: 'LEKCJE',
//       titleStrip: 'GRUPOWE',
//       stripTextColor: 'basicOrange',
//       stripBgColor: 'white',
//     },
//     oneLesson: {
//       price: '70 zł',
//       time: 45,
//     },
//     tenLessons: {
//       price: '700 zł',
//       time: '10 x 45',
//     },
//     button: {
//       title: 'Zapisz się na zajęcia',
//       textColor: 'lightBlue',
//       bgColor: 'white',
//       href: '#harmonogram',
//     },
//   },
//   {
//     stickerH4: {
//       title: 'LEKCJE',
//       titleStrip: 'INDYWIDUALNE',
//       stripTextColor: 'lightBlue',
//       stripBgColor: 'basicOrange',
//     },
//     oneLesson: {
//       price: '160 zł',
//       time: 45,
//     },
//     tenLessons: {
//       price: '1200 zł',
//       time: '10 x 45',
//     },
//     button: {
//       title: 'Zapisz się na zajęcia',
//       textColor: 'lightBlue',
//       bgColor: 'white',
//       href: '#harmonogram',
//     },
//   },
//   {
//     stickerH4: {
//       title: 'LEKCJE',
//       titleStrip: '2 OSOBOWE',
//       stripBgColor: 'lightBlue',
//       stripTextColor: 'white',
//     },
//     oneLesson: {
//       price: '240 zł',
//       time: 45,
//     },
//     tenLessons: {
//       price: '2000 zł',
//       time: '10 x 45',
//     },
//     button: {
//       title: 'Zapisz się na zajęcia',
//       textColor: 'lightBlue',
//       bgColor: 'white',
//       href: '#harmonogram',
//     },
//   },
// ];
export const NAUKA_PLYWANIA_FABRYCZNA: NaukaPlywaniaBasen = {
  zRodzicami:{
      backgroundColor: 'lightBlue',
      about: {
        stickerH2: {
          title: 'NAUKA PŁYWANIA',
          titleStrip: 'Z RODZICAMI',
          stripTextColor: 'lightBlue',
          stripBgColor: 'white',
        },
        aboutTextPoppins: {
          titleColor: 'lightBlue',
          title: NAUKA_PLYWANIA.zRodzicami.about.aboutTextPoppins.title,
          description:
            NAUKA_PLYWANIA.zRodzicami.about.aboutTextPoppins.description,
          alignItems: 'flex-start',
          textAlign: 'left',
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
  
      groups: {
        stripH2: {
          title: '',
          titleStrip: 'ZAJĘCIA',
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
  dzieciMlodziez: {
    backgroundColor: 'lightBlue',
    about: {
      stickerH2: {
        title: 'NAUKA PŁYWANIA',
        titleStrip: 'DZIECI I MŁODZIEŻ',
        stripTextColor: 'lightBlue',
        stripBgColor: 'white',
      },
      aboutTextPoppins: {
        titleColor: 'lightBlue',
        title: 'Dzieci od 3 lat i młodzież do 18 lat',
        description:
          'Dzieci uczą się podstaw pływania w formie zabawy. Poprawiają technikę i koordynację, zdobywając kolejne umiejętności, w kraulu oraz grzbiecie. Młodzież uczy się pływać czterema stylami (styl dowolny, grzbietowy, klasyczny, motylkowy) oraz technik nawrotów. Zajęcia pomagają doskonalić technikę, poprawiać wytrzymałość i przygotowują do ewentualnych startów w zawodach pływackich.',
        alignItems: 'flex-start',
        textAlign: 'left',
      },
      image: {
        src: 'lessonsTypes/dzieciMlodziez2.webp',
        alt: 'nauka pływania dzieci i mlodziez',
      },
    },
    priceList: CENNIK_DZIECI_MLODZIEZ_FABRYCZNA,

    groups: {
      stripH2: {
        title: '',
        titleStrip: 'GRUPY',
        stripBgColor: 'white',
        stripTextColor: 'darkBlue',
      },
      groups: [
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.rybkiDzieci,
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.poczatkujacaDzieci,
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.kontynuacjaDzieci,
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.srednioZaawansowana,
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.zaawansowana,
      ],
    },
  },
  // dorosli: {
  //   backgroundColor: 'mediumBlue',
  //   about: {
  //     stickerH2: {
  //       title: 'NAUKA PŁYWANIA',
  //       titleStrip: 'DOROŚLI',
  //       stripTextColor: 'mediumBlue',
  //       stripBgColor: 'white',
  //     },
  //     aboutTextPoppins: {
  //       titleColor: 'mediumBlue',
  //       title: 'Dorośli',
  //       description:
  //         'Mogą zarówno doskonalić swoje umiejętności, jak i rozpocząć naukę pływania od zera. Bez względu na poziom zaawansowania, zajęcia pomagają zbudować pewność siebie w wodzie, poprawić kondycję oraz nauczyć się prawidłowej techniki pod okiem doświadczonych instruktorów.',
  //       alignItems: 'flex-start',
  //       textAlign: 'left',
  //     },
  //     image: {
  //       src: 'lessonsTypes/dorosli.webp',
  //       alt: 'nauka pływania dorośli',
  //     },
  //   },
  //   priceList: CENNIK_DOROSLI_FABRYCZNA,

  //   groups: {
  //     stripH2: {
  //       title: '',
  //       titleStrip: 'GRUPY',
  //       stripBgColor: 'white',
  //       stripTextColor: 'darkBlue',
  //     },
  //     groups: [
  //       GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.poczatkujacaDorosli,
  //       GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.kontynuacjaDorosli,
  //     ],
  //   },
  // },
};

export const BASEN_FABRYCZNA_INFORMATIONS: PoolInformationsPropsType = {
  color: 'darkBlue',
  title: 'Basen Pływaczek',
  imageSrc: 'custom-pool.webp',
  mapSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.4020298195333!2d20.00558436653215!3d50.07875938459453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716453170f312bf%3A0xe3ac6ed98bd91e80!2sBasen%20Kryty%20%22P%C5%82ywaczek%22!5e0!3m2!1spl!2spl!4v1730119929819!5m2!1spl!2spl',
  stickerH2: {
    title: 'BASEN',
    titleStrip: 'PŁYWACZEK',
    stripBgColor: 'basicOrange',
    stripTextColor: 'darkBlue',
  },
  icons: {
    pool1: {
      exists: true,
      title: 'BASEN SPORTOWY 25 X 16M, GŁĘBOKOŚĆ 1,20-2,00M',
    },
    pool2: {
      exists: true,
      title: 'BASEN REKREACYJNY 16 X 5M, GŁĘBOKOŚĆ 0,80-1,20M',
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
      title: 'DARMOWY PRZY SZKOLE',
    },
  },
};
export const BASEN_FABRYCZNA_TUTORIAL_Z_RODZICAMI: PoolTutorialPropsType = {
  header: true,
  stripH4: {
    title: '',
    titleStrip: 'ZAJĘCIA Z RODZICAMI',
    stripBgColor: 'white',
    stripTextColor: 'basicOrange',
  },
  color: 'darkBlue',
  firstRule:
    'Przebierz odzież wierzchnią i buty, zostawiając je w szafkach przy kasie biletowej.',
  rules: [
    'W kasie podaj imię i nazwisko dziecka oraz informację, że dziecko idzie na zajęcia "Nemo Sportowa Przygoda".',
    'Przebierz siebie i dziecko.',
    'Załóż dziecku wodoodporną pieluchę.',
    'Owiń dziecko ręcznikiem.',
    'Zabierz czepek dla siebie.',
    'Następnie wejdź na wydzielony tor dla zajęć "Nemo Sportowa Przygoda".',
  ],
};
export const BASEN_FABRYCZNA_TUTORIAL_DZIECI_MLODZIEZ: PoolTutorialPropsType = {
    header: true,
    stripH4: {
      title: '',
      titleStrip: 'DZIECI I MŁODZIEŻ',
      stripBgColor: 'white',
      stripTextColor: 'basicOrange',
    },
    color: 'darkBlue',
    firstRule:
      'Przebierz odzież wierzchnią i buty, zostawiając je w szafkach przy kasie biletowej.',
    rules: [
      'W kasie podaj imię i nazwisko dziecka oraz informację, że dziecko idzie na zajęcia "Nemo Sportowa Przygoda".',
      'Rodzic ma 15 minut na przebranie i przygotowanie dziecka do zajęć.',
      'Przy wejściu na basen instruktor przejmuje dzieci i prowadzi 45-minutową lekcję.',
      'Po zakończonej lekcji rodzic ma prawo wejść na 15 minut, aby pomóc dziecku się przebrać.',
    ],
  };
