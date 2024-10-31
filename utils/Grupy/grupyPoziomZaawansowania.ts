import { groupLvlType } from "@/types/Globals/globals";

export const GRUPY_POZIOM_ZAAWANSOWANIA = {
  rybkiDzieci: {
    title: "2-4 lata z rodzicami",
    age: "2-4 LAT",
    description:
      "Dla dzieci 2-4 lata zajęcia skupiają się na samodzielnym utrzymywaniu się na wodzie oraz bardziej świadomych zanurzeniach i wstrzymywaniu oddechu. Zabawki wyławiane spod wody uczą nurkowania i zwiększają pewność siebie.",
    skills: [],
  },
  poczatkujacaDzieci: {
    title: "Grupa początkująca RACZKI",
    age: "RACZKI 3-6 lat",
    description:
      "W tej grupie dzieci są zazwyczaj na pierwszym etapie oswajania się z wodą. Program koncentruje się na budowaniu zaufania do wody oraz rozwijaniu podstawowych umiejętności pływackich.",
    skills: [
      "Oswajanie się z wodą",
      "Nauka poruszania się w wodzie z pomocą instruktora lub na makaronie do pływania.",
      "Ćwiczenia oddychania",
      'Pływanie z pomocą, np. na plecach z deską, rękawkami lub "makaronami".',
      "Skoki do wody z niskiego brzegu basenu z asekuracją.",
      "Pierwsze próby leżenia na wodzie z asekuracją.",
    ],
  },
  kontynuacjaDzieci: {
    title: "Kontynuacja nauki KRABY",
    age: "KRABY 7-9 lat",
    description:
      "Dzieci w tej grupie posiadają podstawowe umiejętności pływackie i zaczynają rozwijać technikę. Celem jest zwiększenie samodzielności w wodzie oraz poprawa koordynacji ruchowej.",
    skills: [
      "Pływanie samodzielnie na krótkie dystanse,",
      "Nauka podstawowych technik pływackich, np. stylu grzbietowego i kraula.",
      "Pływanie z poprawnym oddechem do stylu.",
      "Skoki do wody bez asekuracji i nauka skoków na główkę.",
      "Rozwijanie wytrzymałości.",
    ],
  },
  srednioZaawansowana: {
    title: "Grupa średniozaawansowana MEDUZY",
    age: "MEDUZY 9-13 lat",
    description:
      "W tej grupie dzieci mają już opanowane podstawowe umiejętności pływackie i pracują nad doskonaleniem techniki w różnych stylach. Zwiększa się nacisk na wytrzymałość, szybkość i dokładność.",
    skills: [
      "Doskonalenie techniki pływania w stylu grzbietowym, kraulu, a także nauka stylu klasycznego.",
      "Ćwiczenia koordynacji ruchów rąk i nóg w różnych stylach.",
      "Zwiększanie dystansów i intensywności treningu.",
      "Ćwiczenie nawrotów pływackich oraz startów z bloku startowego.",
      "Nauka techniki skoków do wody, w tym skoki z większej wysokości.",
      "Rozwój umiejętności pływania w grupie oraz zachowania na torze pływackim.",
    ],
  },
  zaawansowana: {
    title: "Młodzież zaawansowana NEMO",
    age: "NEMO 14-18 lat",
    description:
      "Dzieci i młodzież w tej grupie są już na etapie doskonalenia technik wszystkich stylów pływackich. Treningi są bardziej wymagające, a celem jest przygotowanie do zawodów i rozwój wytrzymałości.",
    skills: [
      "Płynne i poprawne pływanie wszystkimi stylami pływackimi.",
      "Zaawansowane ćwiczenia wytrzymałościowe i kondycyjne.",
      "Doskonalenie startów i nawrotów w każdym stylu.",
      "Nauka techniki motylkowej i jej płynne wykonanie na dłuższych dystansach.",
      "Praca nad szybkością, techniką i wytrzymałością w kontekście zawodów pływackich.",
      "Taktyka wyścigów, nauka pracy na zmiany oraz zachowanie w sytuacjach startowych.",
      "W ten sposób dzieci w różnych grupach wiekowych stopniowo zdobywają coraz bardziej zaawansowane umiejętności pływackie, od podstawowej nauki pływania po przygotowanie do zawodów pływackich.",
    ],
  },
  poczatkujacaDorosli: {
    title: "Grupa początkująca",
    age: "18+ lat",
    description:
      "Grupa dla dorosłych, którzy zaczynają swoją przygodę z pływaniem lub mają minimalne doświadczenie w wodzie. Celem jest oswojenie się z wodą, zwiększenie pewności siebie oraz nabycie podstawowych umiejętności pływackich.",
    skills: [
      "Oswajanie się z wodą.",
      "Nauka podstawowych ruchów rąk i nóg.",
      "Wprowadzenie do techniki pływania kraulem, z użyciem deski do pływania lub innych pomocy.",
      "Utrzymywanie równowagi na wodzie, pływanie na plecach i brzuchu.",
      "Ćwiczenia oddechowe – koordynacja oddychania z ruchem.",
      "Pierwsze skoki do wody oraz ćwiczenia związane z pływaniem w różnych pozycjach.",
    ],
  },
  srednioZaawansowanaDorosli: {
    title: "Grupa śrdeniozaawansowana",
    age: "18+ lat",
    description:
      "Grupa dla dorosłych, którzy opanowali podstawy pływania i chcą rozwijać swoje umiejętności oraz techniki. Celem jest doskonalenie techniki pływania oraz zwiększenie wytrzymałości i efektywności w wodzie.",
    skills: [
      "Doskonalenie techniki pływania w stylu kraul, grzbietowym i klasycznym.",
      "Nauka pływania na dłuższe dystanse z poprawnym oddychaniem.",
      "Wprowadzenie do stylu motylkowego oraz technik startowych.",
      "Ćwiczenia nawrotów i skoków do wody.",
      "Rozwijanie wytrzymałości i siły w wodzie.",
      "Praca nad poprawą szybkości i techniki w kontekście pływania rekreacyjnego lub wyścigów.",
    ],
  },
  kontynuacjaDorosli: {
    title: "Kontynuacja nauki",
    age: "18+ lat",
    description:
      "Grupa dla dorosłych, którzy mają już dobrze rozwinięte umiejętności pływackie i chcą dążyć do perfekcji w swojej technice. Celem jest doskonalenie wszystkich stylów pływackich oraz przygotowanie do ewentualnych zawodów.",
    skills: [
      "Płynne i technicznie poprawne pływanie wszystkimi stylami.",
      "Ćwiczenia mające na celu poprawę szybkości oraz wytrzymałości na dłuższych dystansach.",
      "Doskonalenie skoków startowych oraz nawrotów w wyścigach.",
      "Praca nad techniką pływania w kontekście rywalizacji.",
      "Rozwój umiejętności analizy techniki pływackiej, w tym korzystanie z nagrań wideo do oceny i poprawy.",
      "Uczestnictwo w zawodach pływackich lub przygotowanie do nich, w zależności od celów indywidualnych.",
    ],
  },
};

export const GRUPY_POZIOM_ZAAWANSOWANIA_NIEMOWLAKI = {
  trzyMiesiace: {
    title: "3-7 miesięcy z rodzicami",
    age: "3-7 miesięcy",
    description:
      "Zajęcia dla grupy 3-7 miesięcy koncentrują się na oswajaniu dzieci z wodą, ucząc leżenia na plecach i brzuchu oraz delikatnych zanurzeń pod nadzorem instruktora. Zabawy z pływającymi zabawkami pomagają w oswojeniu się z wodą nad głową. ",
    skills: [],
  },
  siedemMiesiecy: {
    title: "7-12 miesięcy z rodzicami",
    age: "7-12 miesięcy",
    description:
      "Dla dzieci 8-12 miesięcy celem jest rozwijanie koordynacji oraz nauka prostych ruchów, takich jak kopanie nogami. Krótkie nurkowania i zanurzenia pomagają dzieciom nabrać pewności, a zabawki motywują je do aktywności w wodzie.",
    skills: [],
  },
  dwanascieMiesiecy: {
    title: "12-24 miesięcy z rodzicami",
    age: "12-24 miesięcy",
    description:
      "W grupie 12-24 miesiące dzieci uczą się samodzielnych zanurzeń oraz podstawowych ruchów pływackich, takich jak machanie rękami i kopanie nogami. Zabawy z zabawkami wspomagają ćwiczenia nurkowania oraz koordynację ruchową.",
    skills: [],
  },
  dwaLata: {
    title: "2-4 lata z rodzicami",
    age: "2-4 lata",
    description:
      "Dla dzieci 2-4 lata zajęcia skupiają się na samodzielnym utrzymywaniu się na wodzie oraz bardziej świadomych zanurzeniach i wstrzymywaniu oddechu. Zabawki wyławiane spod wody uczą nurkowania i zwiększają pewność siebie.",
    skills: [],
  },
  czteryLata: {
    title: "4-6 lat z rodzicami",
    age: "4-6 lat",
    description:
      "W grupie 4-6 lat dzieci doskonalą style pływackie, takie jak grzbiet i pływanie na brzuchu. Ćwiczą dłuższe zanurzenia i wyławianie przedmiotów z dna basenu, co rozwija ich umiejętności nurkowania oraz koordynację ruchów.",
    skills: [],
  },
  czteryLataBez: {
    title: "4-6 lat bez rodziców",
    age: "4-6 lat",
    description:
      "W grupie 4-6 lat dzieci doskonalą style pływackie, takie jak grzbiet i pływanie na brzuchu. Ćwiczą dłuższe zanurzenia i wyławianie przedmiotów z dna basenu, co rozwija ich umiejętności nurkowania oraz koordynację ruchów.",
    skills: [],
  },
};
type grupyPoziomZaawansowaniaForComponentsType = {
  rybkiDzieci: groupLvlType;
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
    rybkiDzieci: {
      stickerH4: {
        title: "GRUPOWE",
        titleStrip: "Z RODZICAMI",
        scale: 1.2,
        stripBgColor: "basicOrange",
        stripTextColor: "darkBlue",
        paddingBottom: 10,
      },
      aboutTextPoppins: {
        title: GRUPY_POZIOM_ZAAWANSOWANIA.rybkiDzieci.age,
        description: GRUPY_POZIOM_ZAAWANSOWANIA.rybkiDzieci.description,
        titleColor: "darkBlue",
      },
      skills: GRUPY_POZIOM_ZAAWANSOWANIA.rybkiDzieci.skills,
    },
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
      skills: GRUPY_POZIOM_ZAAWANSOWANIA.poczatkujacaDzieci.skills,
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
      skills: GRUPY_POZIOM_ZAAWANSOWANIA.kontynuacjaDzieci.skills,
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
      skills: GRUPY_POZIOM_ZAAWANSOWANIA.srednioZaawansowana.skills,
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
      skills: GRUPY_POZIOM_ZAAWANSOWANIA.zaawansowana.skills,
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
      skills: GRUPY_POZIOM_ZAAWANSOWANIA.poczatkujacaDorosli.skills,
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
      skills: GRUPY_POZIOM_ZAAWANSOWANIA.kontynuacjaDorosli.skills,
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
      skills: GRUPY_POZIOM_ZAAWANSOWANIA_NIEMOWLAKI.trzyMiesiace.skills,
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
      skills: GRUPY_POZIOM_ZAAWANSOWANIA_NIEMOWLAKI.siedemMiesiecy.skills,
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
      skills: GRUPY_POZIOM_ZAAWANSOWANIA_NIEMOWLAKI.dwanascieMiesiecy.skills,
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
      skills: GRUPY_POZIOM_ZAAWANSOWANIA_NIEMOWLAKI.dwaLata.skills,
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
      skills: GRUPY_POZIOM_ZAAWANSOWANIA_NIEMOWLAKI.czteryLata.skills,
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
      skills: GRUPY_POZIOM_ZAAWANSOWANIA_NIEMOWLAKI.czteryLataBez.skills,
    },
  };
