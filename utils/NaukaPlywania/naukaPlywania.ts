import {
  aboutType,
  groupsType,
  instructorsType,
  poolsType,
} from "@/types/NaukaPlywania/naukaPlywania";
import { customColors } from "@/types/UI/colors";
import { GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS } from "../Grupy/grupyPoziomZaawansowania";

type naukaPlywania = {
  zRodzicami: {
    backgroundColor: customColors;
    about: aboutType;
    instructors: instructorsType;
    pools: poolsType;
    groups: groupsType;
  };
  dzieciMlodziez: {
    backgroundColor: customColors;
    about: aboutType;
    instructors: instructorsType;
    pools: poolsType;
    groups: groupsType;
  };
  dorosli: {
    backgroundColor: customColors;
    about: aboutType;
    instructors: instructorsType;
    pools: poolsType;
    groups: groupsType;
  };
};
export const NAUKA_PLYWANIA: naukaPlywania = {
  zRodzicami: {
    backgroundColor: "lightBlue",
    about: {
      stickerH2: {
        title: "NAUKA PŁYWANIA",
        titleStrip: "Z RODZICAMI",
        scale: 1.25,
        stripTextColor: "lightBlue",
        stripBgColor: "white",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        titleColor: "lightBlue",
        title: "Zajęcia od 3 miesiąca życia razem z rodzicem. BABY SWIM",
        description:
          "Nasze zajęcia są przeznaczone dla dzieci od 3. miesiąca życia, które uczestniczą w nich razem z rodzicem. To doskonała okazja, aby wspólnie odkrywać radość z zabawy w wodzie, wspierać rozwój malucha oraz wzmacniać więzi emocjonalne. Zajęcia pomagają oswoić dzieci z wodą w przyjaznej atmosferze, poprzez naukę przez zabawę, co wpływa pozytywnie zarówno na rozwój fizyczny, jak i psychiczny najmłodszych. U nas rodzice nie muszą umieć pływać – cała kadra instruktorska pomoże Wam bezpiecznie przejść przez każde ćwiczenie.",
      },
      image: {
        src: "lessonsTypes/zRodzicami.webp",
        alt: "nauka pływania niemowlaki",
      },
    },
    instructors: {
      backgroundText: "KADRA",
      stripH3: {
        title: "INSTRUKTORZY",
        scale: 1.2,
        stripBgColor: "white",
        stripTextColor: "lightBlue",
        marginBottom: "4rem",
      },
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
    pools: {
      stripH3: {
        title: "LOKALIZACJE",
        scale: 1.2,
        stripBgColor: "white",
        stripTextColor: "lightBlue",
        marginBottom: "",
      },
      backgroundText: "LOKALIZACJE",
      swimmingPools: [
        {
          title: "BASEN GORLICE",
          image: "gorlice.webp",
          url: "/naukaplywania/gorlice",
        },
        {
          title: "BASEN EISENBERGA",
          image: "eisenberga.webp",
          url: "/naukaplywania/krakow/eisenberga",
        },
        {
          title: "BASEN BRONOWIANKA",
          image: "bronowianka.webp",
          url: "/naukaplywania/krakow/bronowianka",
        },
        {
          title: "BASEN PŁYWACZEK",
          image: "plywaczek.webp",
          url: "/naukaplywania/krakow/plywaczek",
        },
      ],
    },
    groups: {
      stripH2: {
        type: "h2",
        title: "GRUPY",
        scale: 1.4,
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
  dzieciMlodziez: {
    backgroundColor: "mediumBlue",
    about: {
      stickerH2: {
        title: "NAUKA PŁYWANIA",
        titleStrip: "DZIECI I MŁODZIEŻ",
        scale: 1.8,
        stripTextColor: "mediumBlue",
        stripBgColor: "white",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        titleColor: "mediumBlue",
        title: "Dzieci  od  3  lat  i  młodzież do 18 lat",
        description:
          "Dzieci uczą się podstaw pływania w formie zabawy. Poprawiają technikę i koordynację, zdobywając kolejne umiejętności, w kraulu oraz grzbiecie. Młodzież uczy się pływać czterema stylami (styl dowolny, grzbietowy, klasyczny, motylkowy) oraz technik nawrotów. Zajęcia pomagają doskonalić technikę, poprawiać wytrzymałość i przygotowują do ewentualnych startów w zawodach pływackich.",
      },
      image: {
        src: "lessonsTypes/dzieciMlodziez2.webp",
        alt: "nauka pływania dzieci i mlodziez",
      },
    },
    instructors: {
      backgroundText: "KADRA",
      stripH3: {
        title: "INSTRUKTORZY",
        scale: 1.2,
        stripBgColor: "white",
        stripTextColor: "mediumBlue",
        marginBottom: "4rem",
      },
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
    pools: {
      stripH3: {
        title: "LOKALIZACJE",
        scale: 1.2,
        stripBgColor: "white",
        stripTextColor: "mediumBlue",
        marginBottom: "",
      },
      backgroundText: "LOKALIZACJE",
      swimmingPools: [
        {
          title: "BASEN KORZENNA",
          image: "korzenna.webp",
          url: "/naukaplywania/korzenna",
        },
        {
          title: "BASEN EISENBERGA",
          image: "eisenberga.webp",
          url: "/naukaplywania/krakow/eisenberga",
        },
        {
          title: "BASEN PŁYWACZEK",
          image: "plywaczek.webp",
          url: "/naukaplywania/krakow/plywaczek",
        },
      ],
    },
    groups: {
      stripH2: {
        type: "h2",
        title: "GRUPY",
        scale: 1.3,
        stripBgColor: "white",
        stripTextColor: "mediumBlue",
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
    backgroundColor: "darkBlue",
    about: {
      stickerH2: {
        title: "NAUKA PŁYWANIA",
        titleStrip: "DOROŚLI",
        scale: 1.1,
        stripTextColor: "darkBlue",
        stripBgColor: "white",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        titleColor: "darkBlue",
        title: "DOROŚLI",
        description:
          "Mogą zarówno doskonalić swoje umiejętności, jak i rozpocząć naukę pływania od zera. Bez względu na poziom zaawansowania, zajęcia pomagają zbudować pewność siebie w wodzie, poprawić kondycję oraz nauczyć się prawidłowej techniki pod okiem doświadczonych instruktorów.",
      },
      image: {
        src: "lessonsTypes/dorosli.webp",
        alt: "nauka pływania dorośli",
      },
    },
    instructors: {
      backgroundText: "KADRA",
      stripH3: {
        title: "INSTRUKTORZY",
        scale: 1.2,
        stripBgColor: "white",
        stripTextColor: "darkBlue",
        marginBottom: "4rem",
      },
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
    pools: {
      stripH3: {
        title: "LOKALIZACJE",
        scale: 1.2,
        stripBgColor: "white",
        stripTextColor: "darkBlue",
        marginBottom: "",
      },
      backgroundText: "LOKALIZACJE",
      swimmingPools: [
        {
          title: "BASEN KORZENNA",
          image: "korzenna.webp",
          url: "/naukaplywania/korzenna",
        },
        {
          title: "BASEN EISENBERGA",
          image: "eisenberga.webp",
          url: "/naukaplywania/krakow/eisenberga",
        },
        {
          title: "BASEN PŁYWACZEK",
          image: "plywaczek.webp",
          url: "/naukaplywania/krakow/plywaczek",
        },
      ],
    },
    groups: {
      stripH2: {
        type: "h2",
        title: "GRUPY",
        scale: 1.3,
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
