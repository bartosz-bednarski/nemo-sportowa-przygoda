import {customColors} from '@/types/UI/colors';
import {GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS} from '../Grupy/grupyPoziomZaawansowania';
import {NAUKA_PLYWANIA} from '../NaukaPlywania/NaukaPlywania';
import {PriceListPropsType} from '@/components/NaukaPlywania/Ui/PriceList/PriceList';
import {GroupsBySkillPropsType} from '@/components/NaukaPlywania/Ui/GroupsBySkill/GroupsBySkill';
import {NaukaPływaniaAboutPropsType} from '@/components/NaukaPlywania/Ui/NaukaPlywaniaAbout/NaukaPlywaniaAbout';
import {PoolInformationsPropsType} from '@/components/NaukaPlywania/Ui/PoolInformations/PoolInformations';
import {PoolTutorialPropsType} from '@/components/NaukaPlywania/Ui/PoolTutorial/PoolTutorial';
import {PriceLessonsPropsType} from '@/components/NaukaPlywania/Ui/PriceList/PriceLessons/PriceLessons';

type NaukaPlywaniaBasen = {
  dzieciMlodziez: {
    backgroundColor: customColors;
    about: NaukaPływaniaAboutPropsType;
    groups: GroupsBySkillPropsType;
    priceList: PriceListPropsType;
  };
  dorosli: {
    backgroundColor: customColors;
    about: NaukaPływaniaAboutPropsType;
    groups: GroupsBySkillPropsType;
    priceList: PriceListPropsType;
  };
};




const CENNIK_DZIECI_MLODZIEZ_CCZ_PROKOCIM: PriceLessonsPropsType[] = [
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
      stripBgColor: 'white',
      stripTextColor: 'basicOrange',
    },
    oneLesson: {
      price: '200 zł',
      time: 45,
    },
    button: {
      title: 'Zapisz się na zajęcia',
      textColor: 'lightBlue',
      bgColor: 'white',
      href: '#harmonogram',
    },
  },
];
const CENNIK_DOROSLI_CCZ_PROKOCIM: PriceLessonsPropsType[] = [
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
      stripBgColor: 'lightBlue',
      stripTextColor: 'white',
    },
    oneLesson: {
      price: '200 zł',
      time: 45,
    },
    button: {
      title: 'Zapisz się na zajęcia',
      textColor: 'lightBlue',
      bgColor: 'white',
      href: '#harmonogram',
    },
  },
];
export const NAUKA_PLYWANIA_CCZ_PROKOCIM: NaukaPlywaniaBasen = {
  dzieciMlodziez: {
    backgroundColor: 'mediumBlue',
    about: {
      stickerH2: {
        title: 'NAUKA PŁYWANIA',
        titleStrip: 'DZIECI I MŁODZIEŻ',
        stripTextColor: 'mediumBlue',
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
    priceList: CENNIK_DZIECI_MLODZIEZ_CCZ_PROKOCIM,

    groups: {
      stripH2: {
        title: '',
        titleStrip: 'GRUPY',
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
    priceList: CENNIK_DOROSLI_CCZ_PROKOCIM,

    groups: {
      stripH2: {
        title: '',
        titleStrip: 'GRUPY',
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

export const BASEN_CCZ_PROKOCIM_INFORMATIONS: PoolInformationsPropsType = {
  color: 'darkBlue',
  title: 'Basen GORLICE',
  imageSrc: 'custom-pool.webp',
  mapSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2582.959838146512!2d21.16031532690143!3d49.65505599431353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dc68bf7396df3%3A0xfa103fb8fdb78dfe!2zUMWCeXdhbmlhICJPU2lSIg!5e0!3m2!1spl!2spl!4v1727270999281!5m2!1spl!2spl',
  stickerH2: {
    title: 'BASEN',
    titleStrip: 'GORLICE',
    stripBgColor: 'basicOrange',
    stripTextColor: 'darkBlue',
  },
  icons: {
    pool1: {
      exists: true,
      title: 'BASEN SPORTOWY 25 X 12,5M, GŁĘBOKOŚĆ 1,35-1,80M',
    },
    pool2: {
      exists: true,
      title: 'BASEN REKREACYJNY 12,5 X 7M, GŁĘBOKOŚĆ 0,00-1,20M',
    },
    stand: {
      exists: true,
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
      title: 'PARKING BEZPŁATNY',
    },
  },
};

export const BASEN_CCZ_PROKOCIM_TUTORIAL: PoolTutorialPropsType = {
  header: false,
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
