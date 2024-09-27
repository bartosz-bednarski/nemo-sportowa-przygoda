import {
  instructorsRowBoxType,
  poolTutorialType,
  priceListType,
} from "@/types/Globals/globals";
import {
  aboutType,
  groupsType,
  poolInformationsType,
} from "@/types/NaukaPlywania/naukaPlywania";
import { customColors } from "@/types/UI/colors";
import { GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS } from "../Grupy/grupyPoziomZaawansowania";

type naukaPlywaniaBasen = {
  dzieciMlodziez: {
    backgroundColor: customColors;
    about: aboutType;
    instructors: instructorsRowBoxType;
    groups: groupsType;
    priceList: priceListType;
  };
  dorosli: {
    backgroundColor: customColors;
    about: aboutType;
    instructors: instructorsRowBoxType;
    groups: groupsType;
    priceList: priceListType;
  };
};

const CENNIK_DZIECI_MLODZIEZ_KORZENNA: priceListType = [
  {
    stickerH4: {
      title: "LEKCJE",
      titleStrip: "GRUPOWE",
      scale: 1.6,
      stripTextColor: "basicOrange",
      stripBgColor: "white",
      paddingBottom: 0,
    },
    oneLesson: {
      price: "30 zł + bilet 14 zł",
      time: 45,
    },
    tenLessons: {
      price: "300 zł + cena za bilety",
      time: "10 x 45",
    },
    button: {
      title: "Zapisz się na zajęcia",
      textColor: "lightBlue",
      bgColor: "white",
      href: "/",
    },
  },
  {
    stickerH4: {
      title: "LEKCJE",
      titleStrip: "INDYWIDUALNE",
      scale: 1.2,
      stripTextColor: "lightBlue",
      stripBgColor: "basicOrange",
      paddingBottom: 0,
    },
    oneLesson: {
      price: "70 zł + bilet 14 zł",
      time: 45,
    },
    tenLessons: {
      price: "700 zł + cena za bilety",
      time: "10 x 45",
    },
    button: {
      title: "Zapisz się na zajęcia",
      textColor: "lightBlue",
      bgColor: "white",
      href: "/",
    },
  },
  {
    stickerH4: {
      title: "LEKCJE",
      titleStrip: "2 OSOBOWE",
      scale: 1.2,
      stripBgColor: "mediumBlue",
      stripTextColor: "white",
      paddingBottom: 0,
    },
    oneLesson: {
      price: "50 zł + bilety 2x14 zł",
      time: 45,
    },
    tenLessons: {
      price: "500 zł + cena za bilety",
      time: "10 x 45",
    },
    button: {
      title: "Zapisz się na zajęcia",
      textColor: "lightBlue",
      bgColor: "white",
      href: "/",
    },
  },
  {
    stickerH4: {
      title: "LEKCJE",
      titleStrip: "3 OSOBOWE",
      scale: 1.2,
      stripBgColor: "mediumBlue",
      stripTextColor: "basicOrange",
      paddingBottom: 0,
    },
    oneLesson: {
      price: "40 zł + bilety 3x14 zł",
      time: 45,
    },
    tenLessons: {
      price: "400 zł + cena za bilety",
      time: "10 x 45",
    },
    button: {
      title: "Zapisz się na zajęcia",
      textColor: "lightBlue",
      bgColor: "white",
      href: "/",
    },
  },
];
const CENNIK_DOROSLI_KORZENNA: priceListType = [
  {
    stickerH4: {
      title: "LEKCJE",
      titleStrip: "GRUPOWE",
      scale: 1.6,
      stripTextColor: "basicOrange",
      stripBgColor: "white",
      paddingBottom: 0,
    },
    oneLesson: {
      price: "30 zł + bilet 14 zł",
      time: 45,
    },
    tenLessons: {
      price: "300 zł + cena za bilety",
      time: "10 x 45",
    },
    button: {
      title: "Zapisz się na zajęcia",
      textColor: "lightBlue",
      bgColor: "white",
      href: "/",
    },
  },
  {
    stickerH4: {
      title: "LEKCJE",
      titleStrip: "INDYWIDUALNE",
      scale: 1.2,
      stripTextColor: "lightBlue",
      stripBgColor: "basicOrange",
      paddingBottom: 0,
    },
    oneLesson: {
      price: "70 zł + bilet 14 zł",
      time: 45,
    },
    tenLessons: {
      price: "700 zł + cena za bilety",
      time: "10 x 45",
    },
    button: {
      title: "Zapisz się na zajęcia",
      textColor: "lightBlue",
      bgColor: "white",
      href: "/",
    },
  },
  {
    stickerH4: {
      title: "LEKCJE",
      titleStrip: "2 OSOBOWE",
      scale: 1.2,
      stripBgColor: "lightBlue",
      stripTextColor: "white",
      paddingBottom: 0,
    },
    oneLesson: {
      price: "50 zł + bilety 2x14 zł",
      time: 45,
    },
    tenLessons: {
      price: "500 zł + cena za bilety",
      time: "10 x 45",
    },
    button: {
      title: "Zapisz się na zajęcia",
      textColor: "lightBlue",
      bgColor: "white",
      href: "/",
    },
  },
  {
    stickerH4: {
      title: "LEKCJE",
      titleStrip: "3 OSOBOWE",
      scale: 1.2,
      stripBgColor: "white",
      stripTextColor: "basicOrange",
      paddingBottom: 0,
    },
    oneLesson: {
      price: "40 zł + bilety 3x14 zł",
      time: 45,
    },
    tenLessons: {
      price: "400 zł + cena za bilety",
      time: "10 x 45",
    },
    button: {
      title: "Zapisz się na zajęcia",
      textColor: "lightBlue",
      bgColor: "white",
      href: "/",
    },
  },
];
export const NAUKA_PLYWANIA_KORZENNA: naukaPlywaniaBasen = {
  dzieciMlodziez: {
    backgroundColor: "lightBlue",
    about: {
      stickerH2: {
        title: "NAUKA PŁYWANIA",
        titleStrip: "DZIECI I MŁODZIEŻ",
        scale: 1.4,
        stripTextColor: "lightBlue",
        stripBgColor: "white",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        titleColor: "lightBlue",
        title: "Dzieci i młodzież do 18 lat",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu.",
      },
      image: {
        src: "background-img-scrap-1.png",
        alt: "nauka pływania dzieci",
      },
    },
    priceList: CENNIK_DZIECI_MLODZIEZ_KORZENNA,
    instructors: {
      bgColor: "lightBlue",
      instructors: [
        {
          instructorName: "WIKTORIA FRYCZEK",
          scale: 0.7,
          img1: "instructor-1.png",
          img2: "instructor-1.png",
          href: "/",
        },
        {
          instructorName: "WIKTORIA FRYCZ",
          scale: 0.7,
          img1: "instructor-1.png",
          img2: "instructor-1.png",
          href: "/",
        },
        {
          instructorName: "WIKTORIA FRYCZE",
          scale: 0.7,
          img1: "instructor-1.png",
          img2: "instructor-1.png",
          href: "/",
        },
      ],
    },
    groups: {
      stripH2: {
        title: "GRUPY",
        scale: 1.6,
        stripBgColor: "white",
        stripTextColor: "darkBlue",
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
    backgroundColor: "mediumBlue",
    about: {
      stickerH2: {
        title: "NAUKA PŁYWANIA",
        titleStrip: "DOROŚLI",
        scale: 1.2,
        stripTextColor: "mediumBlue",
        stripBgColor: "white",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        titleColor: "mediumBlue",
        title: "Dorośli",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu.",
      },
      image: {
        src: "background-img-scrap-1.png",
        alt: "nauka pływania dorośli",
      },
    },
    priceList: CENNIK_DOROSLI_KORZENNA,
    instructors: {
      bgColor: "mediumBlue",
      instructors: [
        {
          instructorName: "WIKTORIA FRYCZEK",
          scale: 0.7,
          img1: "instructor-1.png",
          img2: "instructor-1.png",
          href: "/",
        },
        {
          instructorName: "WIKTORIA FRYCZ",
          scale: 0.7,
          img1: "instructor-1.png",
          img2: "instructor-1.png",
          href: "/",
        },
        {
          instructorName: "WIKTORIA FRYCZE",
          scale: 0.7,
          img1: "instructor-1.png",
          img2: "instructor-1.png",
          href: "/",
        },
      ],
    },
    groups: {
      stripH2: {
        title: "GRUPY",
        scale: 1.2,
        stripBgColor: "white",
        stripTextColor: "darkBlue",
      },
      groups: [
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.poczatkujacaDorosli,
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.kontynuacjaDorosli,
      ],
    },
  },
};

export const BASEN_KORZENNA_INFORMATIONS: poolInformationsType = {
  color: "darkBlue",
  title: "Basen Korzenna",
  imageSrc: "korzenna-bg.png",
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2581.7345853683228!2d20.83965477690252!3d49.678138042669985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473def6a8b71a751%3A0x12dc24214a047309!2sBasen%20Korzenna!5e0!3m2!1spl!2spl!4v1727419661233!5m2!1spl!2spl",
  stickerH2: {
    title: "BASEN",
    titleStrip: "KORZENNA",
    stripBgColor: "basicOrange",
    stripTextColor: "darkBlue",
    scale: 1.2,
    paddingBottom: 0,
  },
  icons: {
    pool1: {
      exists: true,
      title: "BASEN SPORTOWY 25 X 12,5M, GŁĘBOKOŚĆ 1,35-1,90M",
    },
    pool2: {
      exists: true,
      title: "BASEN REKREACYJNY 12,5 X 7M, GŁĘBOKOŚĆ 0,00-1,20M",
    },
    stand: {
      exists: true,
      title: "TRYBUNY NA BASENIE",
    },
    cloakroomWomen: {
      exists: true,
      title: "SZATNIA DAMSKA",
    },
    cloakroomMen: {
      exists: true,
      title: "SZATNIA MĘSKA",
    },
    cloakroomFamily: {
      exists: true,
      title: "SZATNIA RODZINNA",
    },
  },
};

export const BASEN_KORZENNA_TUTORIAL: poolTutorialType = {
  header: false,
  color: "darkBlue",
  firstRule:
    'Kup bilet dla dziecka na lekcję pływania "Nemo Sportowa Przygoda".',
  rules: [
    "Dziecko otrzymuje 90 minut na zegarku – 45 minut lekcji oraz 45 minut pod opieką osoby dorosłej.",
    "Rodzic otrzymuje niebieski zegarek na 15 minut, aby pomóc dziecku się przebrać.",
    "Odzież wierzchnią zostaw w szafkach przed szatnią.",
    "Dziecko w szatni powinno być ubrane w strój kąpielowy, czepek, okulary i klapki.",
    "Po wyjściu z szatni dziecko przejmuje instruktor na 45-minutową lekcję.",
    "Po zakończeniu zajęć rodzic prosi w kasie biletowej o zegarek na 15 minut, aby pomóc dziecku w szatni.",
    "Dodatkowe 45 minut dziecko może wykorzystać pod opieką osoby dorosłej.",
  ],
};
