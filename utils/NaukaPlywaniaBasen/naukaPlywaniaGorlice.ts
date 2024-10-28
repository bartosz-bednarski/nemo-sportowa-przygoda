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
import { NAUKA_PLYWANIA } from "../NaukaPlywania/naukaPlywania";

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

export const CENNIK_Z_RODZICAMI_GORLICE: priceListType = [
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
      price: "40 zł (z rodzicem)",
      time: 30,
    },
    tenLessons: {
      price: "400 zł (z rodzicem)",
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
export const NAUKA_PLYWANIA_GORLICE: naukaPlywaniaBasen = {
  zRodzicami: {
    backgroundColor: "lightBlue",
    about: {
      stickerH2: {
        title: "NAUKA PŁYWANIA",
        titleStrip: "Z RODZICAMI",
        scale: 1.2,
        stripTextColor: "lightBlue",
        stripBgColor: "white",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        titleColor: "lightBlue",
        title: NAUKA_PLYWANIA.zRodzicami.about.aboutTextPoppins.title,
        description:
          NAUKA_PLYWANIA.zRodzicami.about.aboutTextPoppins.description,
      },
      image: {
        src: "lessonsTypes/zRodzicami.webp",
        alt: "nauka pływania z rodzicami",
      },
      button: {
        title: "Dowiedz się więcej",
        href: "/naukaplywania#tips",
      },
    },
    priceList: CENNIK_Z_RODZICAMI_GORLICE,
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
        title: "ZAJĘCIA",
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
};

export const BASEN_GORLICE_INFORMATIONS: poolInformationsType = {
  color: "darkBlue",
  title: "Basen GORLICE",
  imageSrc: "custom-pool.webp",
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2582.959838146512!2d21.16031532690143!3d49.65505599431353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dc68bf7396df3%3A0xfa103fb8fdb78dfe!2zUMWCeXdhbmlhICJPU2lSIg!5e0!3m2!1spl!2spl!4v1727270999281!5m2!1spl!2spl",
  stickerH2: {
    title: "BASEN",
    titleStrip: "GORLICE",
    stripBgColor: "basicOrange",
    stripTextColor: "darkBlue",
    scale: 1.2,
    paddingBottom: 0,
  },
  icons: {
    pool1: {
      exists: true,
      title: "BASEN SPORTOWY 25 X 12,5M, GŁĘBOKOŚĆ 1,35-1,80M",
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
    parking: {
      exists: true,
      title: "PARKING PŁATNY STREFA",
    },
  },
};

export const BASEN_GORLICE_TUTORIAL: poolTutorialType = {
  header: false,
  color: "mediumBlue",
  firstRule: "Zostaw odzież wierzchnią w szatni obok kasy biletowej.",
  rules: [
    "Kup bilet dla siebie (dziecko do 3 lat ma darmowe wejście)",
    "Poproś o klucz do dolnej szatni.",
    "Przebierz siebie i dziecko.",
    "Załóż dziecku wodoodporną pieluchę.",
    "Owiń dziecko ręcznikiem.",
    "Zabierz czepek dla siebie.",
    "Udaj się na dolny basen.",
    "Życzymy udanej zabawy!",
  ],
};
