import { groupLvlType } from "@/types/Globals/globals";

export const GRUPY_POZIOM_ZAAWANSOWANIA = {
  poczatkujacaDzieci: {
    title: "Grupa początkująca",
    age: "3-6 lat",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. ",
  },
  kontynuacjaDzieci: {
    title: "Kontynuacja nauki",
    age: "7-9 lat",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. ",
  },
  srednioZaawansowana: {
    title: "Grupa średniozaawansowana",
    age: "9-13 lat",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. ",
  },
  zaawansowana: {
    title: "Młodzież zaawansowana",
    age: "14-18 lat",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. ",
  },
  poczatkujacaDorosli: {
    title: "Grupa początkująca",
    age: "18+ lat",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. ",
  },
  kontynuacjaDorosli: {
    title: "Kontynuacja nauki",
    age: "18+ lat",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. ",
  },
};

export const GRUPY_POZIOM_ZAAWANSOWANIA_NIEMOWLAKI = {
  trzyMiesiace: {
    title: "3-7 miesięcy z rodzicami",
    age: "3-7 miesięcy",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. ",
  },
  siedemMiesiecy: {
    title: "7-12 miesięcy z rodzicami",
    age: "7-12 miesięcy",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. ",
  },
  dwanascieMiesiecy: {
    title: "12-24 miesięcy z rodzicami",
    age: "12-24 miesięcy",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. ",
  },
  dwaLata: {
    title: "2-4 lata z rodzicami",
    age: "2-4 lata",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. ",
  },
  czteryLata: {
    title: "4-6 lat z rodzicami",
    age: "4-6 lat",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. ",
  },
  czteryLataBez: {
    title: "4-6 lat bez rodziców",
    age: "4-6 lat",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. ",
  },
};
type grupyPoziomZaawansowaniaForComponentsType = {
  poczatkujacaDzieci: groupLvlType;
  kontynuacjaDzieci: groupLvlType;
  srednioZaawansowana: groupLvlType;
  zaawansowana: groupLvlType;
  poczatkujacaDorosli: groupLvlType;
  kontynuacjaDorosli: groupLvlType;
  trzyMiesiace: groupLvlType;
  siedemMiesiecy: groupLvlType;
  dwanascieMiesiecy: groupLvlType;
  dwaLata: groupLvlType;
  czteryLata: groupLvlType;
  czteryLataBez: groupLvlType;
};
export const GRUPY_POZIOM_ZAAWANSOWANIA_FOR_COMPONENTS: grupyPoziomZaawansowaniaForComponentsType =
  {
    poczatkujacaDzieci: {
      stickerH4: {
        title: "GRUPA",
        titleStrip: "POCZĄTKUJĄCA",
        scale: 1.2,
        stripBgColor: "basicOrange",
        stripTextColor: "darkBlue",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        title: GRUPY_POZIOM_ZAAWANSOWANIA.poczatkujacaDzieci.age,
        description: GRUPY_POZIOM_ZAAWANSOWANIA.poczatkujacaDzieci.description,
        titleColor: "darkBlue",
      },
    },
    kontynuacjaDzieci: {
      stickerH4: {
        title: "KONTYNUACJA",
        titleStrip: "NAUKI",
        scale: 1.2,
        stripBgColor: "basicOrange",
        stripTextColor: "darkBlue",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        title: GRUPY_POZIOM_ZAAWANSOWANIA.kontynuacjaDzieci.age,
        description: GRUPY_POZIOM_ZAAWANSOWANIA.kontynuacjaDzieci.description,
        titleColor: "darkBlue",
      },
    },
    srednioZaawansowana: {
      stickerH4: {
        title: "ŚREDNIO",
        titleStrip: "ZAAWANSOWANA",
        scale: 1.2,
        stripBgColor: "basicOrange",
        stripTextColor: "darkBlue",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        title: GRUPY_POZIOM_ZAAWANSOWANIA.srednioZaawansowana.age,
        description: GRUPY_POZIOM_ZAAWANSOWANIA.srednioZaawansowana.description,
        titleColor: "darkBlue",
      },
    },
    zaawansowana: {
      stickerH4: {
        title: "GRUPA",
        titleStrip: "ZAAWANSOWANA",
        scale: 1.2,
        stripBgColor: "basicOrange",
        stripTextColor: "darkBlue",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        title: GRUPY_POZIOM_ZAAWANSOWANIA.zaawansowana.age,
        description: GRUPY_POZIOM_ZAAWANSOWANIA.zaawansowana.description,
        titleColor: "darkBlue",
      },
    },
    poczatkujacaDorosli: {
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
        description: GRUPY_POZIOM_ZAAWANSOWANIA.poczatkujacaDorosli.description,
        titleColor: "darkBlue",
      },
    },
    kontynuacjaDorosli: {
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
        description: GRUPY_POZIOM_ZAAWANSOWANIA.kontynuacjaDorosli.description,
        titleColor: "darkBlue",
      },
    },
    trzyMiesiace: {
      stickerH4: {
        title: "GRUPOWE",
        titleStrip: "Z RODZICAMI",
        scale: 1.2,
        stripBgColor: "basicOrange",
        stripTextColor: "darkBlue",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        title: GRUPY_POZIOM_ZAAWANSOWANIA_NIEMOWLAKI.trzyMiesiace.age,
        description:
          GRUPY_POZIOM_ZAAWANSOWANIA_NIEMOWLAKI.trzyMiesiace.description,
        titleColor: "darkBlue",
      },
    },
    siedemMiesiecy: {
      stickerH4: {
        title: "GRUPOWE",
        titleStrip: "Z RODZICAMI",
        scale: 1.2,
        stripBgColor: "basicOrange",
        stripTextColor: "darkBlue",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        title: GRUPY_POZIOM_ZAAWANSOWANIA_NIEMOWLAKI.siedemMiesiecy.age,
        description:
          GRUPY_POZIOM_ZAAWANSOWANIA_NIEMOWLAKI.siedemMiesiecy.description,
        titleColor: "darkBlue",
      },
    },
    dwanascieMiesiecy: {
      stickerH4: {
        title: "GRUPOWE",
        titleStrip: "Z RODZICAMI",
        scale: 1.2,
        stripBgColor: "basicOrange",
        stripTextColor: "darkBlue",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        title: GRUPY_POZIOM_ZAAWANSOWANIA_NIEMOWLAKI.dwanascieMiesiecy.age,
        description:
          GRUPY_POZIOM_ZAAWANSOWANIA_NIEMOWLAKI.dwanascieMiesiecy.description,
        titleColor: "darkBlue",
      },
    },
    dwaLata: {
      stickerH4: {
        title: "GRUPOWE",
        titleStrip: "Z RODZICAMI",
        scale: 1.2,
        stripBgColor: "basicOrange",
        stripTextColor: "darkBlue",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        title: GRUPY_POZIOM_ZAAWANSOWANIA_NIEMOWLAKI.dwaLata.age,
        description: GRUPY_POZIOM_ZAAWANSOWANIA_NIEMOWLAKI.dwaLata.description,
        titleColor: "darkBlue",
      },
    },
    czteryLata: {
      stickerH4: {
        title: "GRUPOWE",
        titleStrip: "Z RODZICAMI",
        scale: 1.2,
        stripBgColor: "basicOrange",
        stripTextColor: "darkBlue",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        title: GRUPY_POZIOM_ZAAWANSOWANIA_NIEMOWLAKI.czteryLata.age,
        description:
          GRUPY_POZIOM_ZAAWANSOWANIA_NIEMOWLAKI.czteryLata.description,
        titleColor: "darkBlue",
      },
    },
    czteryLataBez: {
      stickerH4: {
        title: "GRUPOWE",
        titleStrip: "BEZ RODZICÓW",
        scale: 1.2,
        stripBgColor: "basicOrange",
        stripTextColor: "darkBlue",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        title: GRUPY_POZIOM_ZAAWANSOWANIA_NIEMOWLAKI.czteryLataBez.age,
        description:
          GRUPY_POZIOM_ZAAWANSOWANIA_NIEMOWLAKI.czteryLataBez.description,
        titleColor: "darkBlue",
      },
    },
  };
