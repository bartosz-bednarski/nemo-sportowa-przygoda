import { lessonType } from "@/types/Globals/globals";

type rodzajeLekcji = {
  indywidualne: lessonType;
  dwuosobowe: lessonType;
  trzyosobowe: lessonType;
  grupowe: lessonType;
};
export const RODZAJE_LEKCJI: rodzajeLekcji = {
  indywidualne: {
    img: "indywidualne.png",
    stickerH4: {
      title: "LEKCJE",
      titleStrip: "INDYWIDUALNE",
      stripBgColor: "white",
      stripTextColor: "basicOrange",
      scale: 1.2,
      paddingBottom: 0,
    },
    aboutTextPoppins: {
      title: "Lekcje indywidualne",
      titleColor: "basicOrange",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu.",
    },
  },
  dwuosobowe: {
    img: "dwuosobowe.png",
    stickerH4: {
      title: "LEKCJE",
      titleStrip: "DWUOSOBOWE",
      stripBgColor: "basicOrange",
      stripTextColor: "mediumBlue",
      scale: 1.2,
      paddingBottom: 0,
    },
    aboutTextPoppins: {
      title: "Lekcje dwuosobowe",
      titleColor: "mediumBlue",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu.",
    },
  },
  trzyosobowe: {
    img: "trzyosobowe.png",
    stickerH4: {
      title: "LEKCJE",
      titleStrip: "TRZYOSOBOWE",
      stripBgColor: "mediumBlue",
      stripTextColor: "white",
      scale: 1.2,
      paddingBottom: 0,
    },
    aboutTextPoppins: {
      title: "Lekcje trzyosobowe",
      titleColor: "mediumBlue",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu.",
    },
  },
  grupowe: {
    img: "grupowe.png",
    stickerH4: {
      title: "LEKCJE",
      titleStrip: "GRUPOWE",
      stripBgColor: "mediumBlue",
      stripTextColor: "basicOrange",
      scale: 1.2,
      paddingBottom: 0,
    },
    aboutTextPoppins: {
      title: "Lekcje grupowe",
      titleColor: "basicOrange",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu.",
    },
  },
};
