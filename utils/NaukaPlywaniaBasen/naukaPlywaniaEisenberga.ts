import { instructorsRowBoxType, priceListType } from "@/types/Globals/globals";
import {
  aboutType,
  groupsType,
  poolInformationsType,
} from "@/types/NaukaPlywania/naukaPlywania";
import { customColors } from "@/types/UI/colors";
import { GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS } from "../Grupy/grupyPoziomZaawansowania";

type naukaPlywaniaBasen = {
  dzieci: {
    backgroundColor: customColors;
    about: aboutType;
    instructors: instructorsRowBoxType;
    groups: groupsType;
    priceList: priceListType;
  };
  mlodziez: {
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
const CENNIK_DZIECI_EISENBERGA: priceListType = [
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
      price: 45,
      time: 45,
    },
    tenLessons: {
      price: 45,
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
const CENNIK_MLODZIEZ_EISENBERGA: priceListType = [
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
      price: 45,
      time: 45,
    },
    tenLessons: {
      price: 45,
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
      price: 45,
      time: 45,
    },
    tenLessons: {
      price: 45,
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
      price: 45,
      time: 45,
    },
    tenLessons: {
      price: 45,
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
const CENNIK_DOROSLI_EISENBERGA: priceListType = [
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
      price: 45,
      time: 45,
    },
    tenLessons: {
      price: 45,
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
      price: 45,
      time: 45,
    },
    tenLessons: {
      price: 45,
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
      price: 45,
      time: 45,
    },
    tenLessons: {
      price: 45,
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
export const NAUKA_PLYWANIA_EISENBERGA: naukaPlywaniaBasen = {
  dzieci: {
    backgroundColor: "lightBlue",
    about: {
      stickerH2: {
        title: "NAUKA PŁYWANIA",
        titleStrip: "DZIECI",
        scale: 1.2,
        stripTextColor: "lightBlue",
        stripBgColor: "white",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        titleColor: "lightBlue",
        title: "Dzieci od 3 miesiąca do 6 lat",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu.",
      },
      image: {
        src: "background-img-scrap-1.png",
        alt: "nauka pływania dzieci",
      },
    },
    priceList: CENNIK_DZIECI_EISENBERGA,
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
        scale: 1.2,
        stripBgColor: "white",
        stripTextColor: "darkBlue",
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
  mlodziez: {
    backgroundColor: "mediumBlue",
    about: {
      stickerH2: {
        title: "NAUKA PŁYWANIA",
        titleStrip: "MŁODZIEŻ",
        scale: 1.2,
        stripTextColor: "lightBlue",
        stripBgColor: "white",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        titleColor: "mediumBlue",
        title: "Młodzież od 6 do 18 lat",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu.",
      },
      image: {
        src: "background-img-scrap-1.png",
        alt: "nauka pływania dzieci",
      },
    },
    priceList: CENNIK_MLODZIEZ_EISENBERGA,
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
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.poczatkujacaDzieci,
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.kontynuacjaDzieci,
        GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS.srednioZaawansowana,
      ],
    },
  },
  dorosli: {
    backgroundColor: "darkBlue",
    about: {
      stickerH2: {
        title: "NAUKA PŁYWANIA",
        titleStrip: "DOROŚLI",
        scale: 1.2,
        stripTextColor: "darkBlue",
        stripBgColor: "white",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        titleColor: "darkBlue",
        title: "Dorośli",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu.",
      },
      image: {
        src: "background-img-scrap-1.png",
        alt: "nauka pływania dorośli",
      },
    },
    priceList: CENNIK_DOROSLI_EISENBERGA,
    instructors: {
      bgColor: "darkBlue",
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

export const BASEN_EISENBERGA_INFORMATIONS: poolInformationsType = {
  color: "darkBlue",
  title: "Basen Eisenberga",
  imageSrc: "eisenberga-bg.png",
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.8758871211735!2d19.96455712691966!3d50.06988596469174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b20d70ce221%3A0x4553a84f578feaa9!2sCentrum%20Sportu%20i%20Rekreacji%20Przysta%C5%84%20na%20Eisenberga!5e0!3m2!1spl!2spl!4v1727424719893!5m2!1spl!2spl",
  stickerH2: {
    title: "BASEN",
    titleStrip: "EISENBERGA",
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
