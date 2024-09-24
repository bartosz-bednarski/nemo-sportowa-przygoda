import {
  aboutType,
  groupsType,
  instructorsType,
  poolsType,
} from "@/types/NaukaPlywania/naukaPlywania";
import { customColors } from "@/types/UI/colors";
import { GRUPY_POZIOM_ZAAWANSOWANIA } from "../Grupy/grupyPoziomZaawansowania";

type naukaPlywania = {
  niemowlaki: {
    backgroundColor: customColors;
    about: aboutType;
    instructors: instructorsType;
    pools: poolsType;
  };
  dzieci: {
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
  niemowlaki: {
    backgroundColor: "lightBlue",
    about: {
      stickerH2: {
        title: "NAUKA PŁYWANIA",
        titleStrip: "NIEMOWLAKI",
        scale: 1.2,
        stripTextColor: "lightBlue",
        stripBgColor: "white",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        titleColor: "lightBlue",
        title: "Dzieci  od  3  miesiąca  do  3 lat  z  rodzicami",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu.",
      },
      image: {
        src: "background-img-scrap-1.png",
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
        { instructorName: "WIKTORIA FRYCZEK", scale: 0.7 },
        { instructorName: "WIKTORIA FRYCZ", scale: 0.7 },
        { instructorName: "WIKTORIA FRYCZE", scale: 0.7 },
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
      swimmingPools: [{ title: "BASEN GORLICE", image: "gorlice.webp" }],
    },
  },
  dzieci: {
    backgroundColor: "mediumBlue",
    about: {
      stickerH2: {
        title: "NAUKA PŁYWANIA",
        titleStrip: "DZIECI I MŁODZIEŻ",
        scale: 1.4,
        stripTextColor: "mediumBlue",
        stripBgColor: "white",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        titleColor: "mediumBlue",
        title: "Dzieci  od  3  lat  i  młodzież do 18 lat",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu.",
      },
      image: {
        src: "background-img-scrap-1.png",
        alt: "nauka pływania niemowlaki",
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
        { instructorName: "WIKTORIA FRYCZEK", scale: 0.7 },
        { instructorName: "WIKTORIA FRYCZ", scale: 0.7 },
        { instructorName: "WIKTORIA FRYCZE", scale: 0.7 },
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
        { title: "BASEN KORZENNA", image: "korzenna.jpg" },
        { title: "BASEN EISENBERGA", image: "eisenberga.jpg" },
      ],
    },
    groups: {
      stripH2: {
        title: "GRUPY",
        scale: 1.2,
        stripBgColor: "white",
        stripTextColor: "mediumBlue",
      },
      groups: [
        {
          stickerH4: {
            title: "GRUPA",
            titleStrip: "POCZĄTKUJĄCA",
            scale: 1.2,
            stripBgColor: "basicOrange",
            stripTextColor: "mediumBlue",
            paddingBottom: 10,
          },
          aboutTextPoppins: {
            title: GRUPY_POZIOM_ZAAWANSOWANIA.poczatkujacaDzieci.age,
            description:
              GRUPY_POZIOM_ZAAWANSOWANIA.poczatkujacaDzieci.description,
            titleColor: "mediumBlue",
          },
        },
        {
          stickerH4: {
            title: "KONTYNUACJA",
            titleStrip: "NAUKI",
            scale: 1.2,
            stripBgColor: "basicOrange",
            stripTextColor: "mediumBlue",
            paddingBottom: 10,
          },
          aboutTextPoppins: {
            title: GRUPY_POZIOM_ZAAWANSOWANIA.kontynuacjaDzieci.age,
            description:
              GRUPY_POZIOM_ZAAWANSOWANIA.kontynuacjaDzieci.description,
            titleColor: "mediumBlue",
          },
        },
        {
          stickerH4: {
            title: "ŚREDNIO",
            titleStrip: "ZAAWANSOWANA",
            scale: 1.2,
            stripBgColor: "basicOrange",
            stripTextColor: "mediumBlue",
            paddingBottom: 10,
          },
          aboutTextPoppins: {
            title: GRUPY_POZIOM_ZAAWANSOWANIA.srednioZaawansowana.age,
            description:
              GRUPY_POZIOM_ZAAWANSOWANIA.srednioZaawansowana.description,
            titleColor: "mediumBlue",
          },
        },
        {
          stickerH4: {
            title: "MŁODZIEŻ",
            titleStrip: "ZAAWANSOWANA",
            scale: 1.2,
            stripBgColor: "basicOrange",
            stripTextColor: "mediumBlue",
            paddingBottom: 10,
          },
          aboutTextPoppins: {
            title: GRUPY_POZIOM_ZAAWANSOWANIA.zaawansowana.age,
            description: GRUPY_POZIOM_ZAAWANSOWANIA.zaawansowana.description,
            titleColor: "mediumBlue",
          },
        },
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
          "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu.",
      },
      image: {
        src: "background-img-scrap-1.png",
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
        { instructorName: "WIKTORIA FRYCZEK", scale: 0.7 },
        { instructorName: "WIKTORIA FRYCZ", scale: 0.7 },
        { instructorName: "WIKTORIA FRYCZE", scale: 0.7 },
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
        { title: "BASEN KORZENNA", image: "korzenna.jpg" },
        { title: "BASEN EISENBERGA", image: "eisenberga.jpg" },
        { title: "BASEN EISENBERGA", image: "gorlice.webp" },
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
        {
          stickerH4: {
            title: "GRUPA",
            titleStrip: "POCZĄTKUJĄCA",
            scale: 1.2,
            stripBgColor: "basicOrange",
            stripTextColor: "darkBlue",
            paddingBottom: 10,
          },
          aboutTextPoppins: {
            title: GRUPY_POZIOM_ZAAWANSOWANIA.poczatkujacaDorosli.age,
            description:
              GRUPY_POZIOM_ZAAWANSOWANIA.poczatkujacaDorosli.description,
            titleColor: "darkBlue",
          },
        },
        {
          stickerH4: {
            title: "KONTYNUACJA",
            titleStrip: "NAUKI",
            scale: 1.2,
            stripBgColor: "basicOrange",
            stripTextColor: "darkBlue",
            paddingBottom: 10,
          },
          aboutTextPoppins: {
            title: GRUPY_POZIOM_ZAAWANSOWANIA.kontynuacjaDorosli.age,
            description:
              GRUPY_POZIOM_ZAAWANSOWANIA.kontynuacjaDorosli.description,
            titleColor: "darkBlue",
          },
        },
      ],
    },
  },
};
