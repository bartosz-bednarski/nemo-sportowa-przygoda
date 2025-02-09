import {customColors} from '@/types/UI/colors';
import {GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS} from '../Grupy/grupyPoziomZaawansowania';
import {NAUKA_PLYWANIA} from '../NaukaPlywania/NaukaPlywania';
import {PriceListPropsType} from '@/components/NaukaPlywania/Ui/PriceList/PriceList';
import {GroupsPropsType} from '@/components/NaukaPlywania/Ui/Groups/Groups';
import {NaukaPływaniaAboutPropsType} from '@/components/NaukaPlywania/Ui/NaukaPlywaniaAbout/NaukaPlywaniaAbout';
import {PoolInformationsPropsType} from '@/components/NaukaPlywania/Ui/PoolInformations/PoolInformations';
import {PoolTutorialPropsType} from '@/components/NaukaPlywania/Ui/PoolTutorial/PoolTutorial';

type NaukaPlywaniaBasen = {
  zRodzicami: {
    backgroundColor: customColors;
    about: NaukaPływaniaAboutPropsType;
    groups: GroupsPropsType;
    priceList: PriceListPropsType;
  };
};

export const CENNIK_Z_RODZICAMI_GORLICE: PriceListPropsType = [
  {
    stickerH4: {
      title: 'LEKCJE',
      titleStrip: 'GRUPOWE',
      stripTextColor: 'basicOrange',
      stripBgColor: 'white',
    },
    oneLesson: {
      price: '40 zł (z rodzicem)',
      time: 30,
    },
    tenLessons: {
      price: '400 zł (z rodzicem)',
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
export const NAUKA_PLYWANIA_GORLICE: NaukaPlywaniaBasen = {
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
    priceList: CENNIK_Z_RODZICAMI_GORLICE,

    groups: {
      stripH2: {
        type: 'h2',
        title: 'ZAJĘCIA',
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

export const BASEN_GORLICE_INFORMATIONS: PoolInformationsPropsType = {
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

export const BASEN_GORLICE_TUTORIAL: PoolTutorialPropsType = {
  header: false,
  color: 'mediumBlue',
  firstRule: 'Zostaw odzież wierzchnią w szatni obok kasy biletowej.',
  rules: [
    'Kup bilet dla siebie (dziecko do 3 lat ma darmowe wejście)',
    'Poproś o klucz do dolnej szatni.',
    'Przebierz siebie i dziecko.',
    'Załóż dziecku wodoodporną pieluchę.',
    'Owiń dziecko ręcznikiem.',
    'Zabierz czepek dla siebie.',
    'Udaj się na dolny basen.',
    'Życzymy udanej zabawy!',
  ],
};
