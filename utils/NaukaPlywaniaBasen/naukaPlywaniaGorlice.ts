import { instructorsRowBoxType, priceListType } from "@/types/Globals/globals";
import { aboutType } from "@/types/NaukaPlywania/naukaPlywania";
import { customColors } from "@/types/UI/colors";

export type naukaPlywaniaBasen = {
  niemowlaki: {
    backgroundColor: customColors;
    about: aboutType;
    instructors: instructorsRowBoxType;
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

export const CENNIK_NIEMOWLAKI_GORLICE: priceListType = [
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
];
export const NAUKA_PLYWANIA_GORLICE: naukaPlywaniaBasen = {
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
  },
};
