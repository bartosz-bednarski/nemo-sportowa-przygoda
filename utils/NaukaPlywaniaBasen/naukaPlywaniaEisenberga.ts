import {instructorsRowBoxType, poolTutorialType} from '@/types/Globals/globals';
import {poolInformationsType} from '@/types/NaukaPlywania/naukaPlywania';
import {customColors} from '@/types/UI/colors';
import {GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS} from '../Grupy/grupyPoziomZaawansowania';
import {NAUKA_PLYWANIA} from '../NaukaPlywania/NaukaPlywania';
import {PriceListPropsType} from '@/components/NaukaPlywania/Ui/PriceList/PriceList';
import {GroupsPropsType} from '@/components/NaukaPlywania/Ui/Groups/Groups';
import {NaukaPływaniaAboutPropsType} from '@/components/NaukaPlywania/Ui/NaukaPlywaniaAbout/NaukaPlywaniaAbout';

type naukaPlywaniaBasen = {
  zRodzicami: {
    backgroundColor: customColors;
    about: NaukaPływaniaAboutPropsType;
    instructors: instructorsRowBoxType;
    groups: GroupsPropsType;
    priceList: PriceListPropsType;
  };
  dzieciMlodziez: {
    backgroundColor: customColors;
    about: NaukaPływaniaAboutPropsType;
    instructors: instructorsRowBoxType;
    groups: GroupsPropsType;
    priceList: PriceListPropsType;
  };
  dorosli: {
    backgroundColor: customColors;
    about: NaukaPływaniaAboutPropsType;
    instructors: instructorsRowBoxType;
    groups: GroupsPropsType;
    priceList: PriceListPropsType;
  };
};
const CENNIK_Z_RODZICAMI_EISENBERGA: PriceListPropsType = [
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
      time: 30,
    },
    tenLessons: {
      price: '700 zł',
      time: '10 x 30',
    },
    button: {
      title: 'Zapisz się na zajęcia',
      textColor: 'lightBlue',
      bgColor: 'white',
      href: 'https://zapisy.activenow.pl/szkola-plywania-nemo1/',
    },
  },
];
const CENNIK_DZIECI_MLODZIEZ_EISENBERGA: PriceListPropsType = [
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
  {
    stickerH4: {
      title: 'LEKCJE',
      titleStrip: 'INDYWIDUALNE',
      scale: 1.2,
      stripTextColor: 'lightBlue',
      stripBgColor: 'basicOrange',
      paddingBottom: 0,
    },
    oneLesson: {
      price: '160 zł',
      time: 45,
    },
    tenLessons: {
      price: '1200 zł',
      time: '10 x 45',
    },
    button: {
      title: 'Zapisz się na zajęcia',
      textColor: 'lightBlue',
      bgColor: 'white',
      href: 'https://zapisy.activenow.pl/szkola-plywania-nemo1/',
    },
  },
  {
    stickerH4: {
      title: 'LEKCJE',
      titleStrip: '2 OSOBOWE',
      scale: 1.2,
      stripBgColor: 'darkBlue',
      stripTextColor: 'white',
      paddingBottom: 0,
    },
    oneLesson: {
      price: '240 zł',
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
      href: 'https://zapisy.activenow.pl/szkola-plywania-nemo1/',
    },
  },
];
const CENNIK_DOROSLI_EISENBERGA: PriceListPropsType = [
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
  {
    stickerH4: {
      title: 'LEKCJE',
      titleStrip: 'INDYWIDUALNE',
      scale: 1.2,
      stripTextColor: 'lightBlue',
      stripBgColor: 'basicOrange',
      paddingBottom: 0,
    },
    oneLesson: {
      price: '160 zł',
      time: 45,
    },
    tenLessons: {
      price: '1200 zł',
      time: '10 x 45',
    },
    button: {
      title: 'Zapisz się na zajęcia',
      textColor: 'lightBlue',
      bgColor: 'white',
      href: 'https://zapisy.activenow.pl/szkola-plywania-nemo1/',
    },
  },
  {
    stickerH4: {
      title: 'LEKCJE',
      titleStrip: '2 OSOBOWE',
      scale: 1.2,
      stripBgColor: 'lightBlue',
      stripTextColor: 'white',
      paddingBottom: 0,
    },
    oneLesson: {
      price: '240 zł',
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
      href: 'https://zapisy.activenow.pl/szkola-plywania-nemo1/',
    },
  },
];
export const NAUKA_PLYWANIA_EISENBERGA: naukaPlywaniaBasen = {
  zRodzicami: {
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
        alt: 'nauka pływania z rodzicami',
      },
      button: {
        title: 'Dowiedz się więcej',
        href: '/naukaplywania#tips',
      },
    },
    priceList: CENNIK_Z_RODZICAMI_EISENBERGA,
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
        title: 'GRUPY',
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
  dzieciMlodziez: {
    backgroundColor: 'mediumBlue',
    about: {
      stickerH2: {
        title: 'NAUKA PŁYWANIA',
        titleStrip: 'DZIECI I MŁODZIEŻ',
        stripTextColor: 'lightBlue',
        stripBgColor: 'white',
      },
      aboutTextPoppins: {
        titleColor: 'mediumBlue',
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
    priceList: CENNIK_DZIECI_MLODZIEZ_EISENBERGA,
    instructors: {
      bgColor: 'mediumBlue',
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
        title: 'GRUPY',
        scale: 1.2,
        stripBgColor: 'white',
        stripTextColor: 'darkBlue',
      },
      groups: [
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.poczatkujacaDzieci,
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.kontynuacjaDzieci,
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.srednioZaawansowana,
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.zaawansowana,
      ],
    },
  },
  dorosli: {
    backgroundColor: 'darkBlue',
    about: {
      stickerH2: {
        title: 'NAUKA PŁYWANIA',
        titleStrip: 'DOROŚLI',
        stripTextColor: 'darkBlue',
        stripBgColor: 'white',
      },
      aboutTextPoppins: {
        titleColor: 'darkBlue',
        title: 'Dorośli',
        description:
          'Mogą zarówno doskonalić swoje umiejętności, jak i rozpocząć naukę pływania od zera. Bez względu na poziom zaawansowania, zajęcia pomagają zbudować pewność siebie w wodzie, poprawić kondycję oraz nauczyć się prawidłowej techniki pod okiem doświadczonych instruktorów.',
        alignItems: 'flex-start',
        textAlign: 'left',
      },
      image: {
        src: 'lessonsTypes/dorosli.webp',
        alt: 'nauka pływania dorośli',
      },
    },
    priceList: CENNIK_DOROSLI_EISENBERGA,
    instructors: {
      bgColor: 'darkBlue',
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
        title: 'GRUPY',
        scale: 1.2,
        stripBgColor: 'white',
        stripTextColor: 'darkBlue',
      },
      groups: [
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.poczatkujacaDorosli,
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.kontynuacjaDorosli,
      ],
    },
  },
};

export const BASEN_EISENBERGA_INFORMATIONS: poolInformationsType = {
  color: 'darkBlue',
  title: 'Basen Eisenberga',
  imageSrc: 'custom-pool.webp',
  mapSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.8758871211735!2d19.96455712691966!3d50.06988596469174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b20d70ce221%3A0x4553a84f578feaa9!2sCentrum%20Sportu%20i%20Rekreacji%20Przysta%C5%84%20na%20Eisenberga!5e0!3m2!1spl!2spl!4v1727424719893!5m2!1spl!2spl',
  stickerH2: {
    title: 'BASEN',
    titleStrip: 'EISENBERGA',
    stripBgColor: 'basicOrange',
    stripTextColor: 'darkBlue',
    scale: 1.2,
    paddingBottom: 0,
  },
  icons: {
    pool1: {
      exists: true,
      title: 'BASEN SPORTOWY 25 X 16M, GŁĘBOKOŚĆ 1,30-1,80M',
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
      title: 'DARMOWY ZA SZLABANEM',
    },
  },
};
export const BASEN_EISENBERGA_TUTORIAL_Z_RODZICAMI: poolTutorialType = {
  header: true,
  stripH4: {
    type: 'h4',
    title: 'ZAJĘCIA Z RODZICAMI',
    stripBgColor: 'white',
    stripTextColor: 'basicOrange',
    scale: 1.3,
    marginBottom: '6rem',
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
export const BASEN_EISENBERGA_TUTORIAL_DZIECI_MLODZIEZ: poolTutorialType = {
  header: true,
  stripH4: {
    type: 'h4',
    title: 'DZIECI I MŁODZIEŻ',
    stripBgColor: 'white',
    stripTextColor: 'basicOrange',
    scale: 1.2,
    marginBottom: '6rem',
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
