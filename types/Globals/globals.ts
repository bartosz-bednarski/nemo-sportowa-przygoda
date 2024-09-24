import { aboutTextPoppinsType } from "../UI/aboutTextPoppins";
import { signInButtonType } from "../UI/buttons";
import { customColors } from "../UI/colors";
import { stickerH2Type, stickerH4Type } from "../UI/stickerStripStrap";

export type instructorBubbleType = {
  instructorName?: string;
  scale: number;
  img1: string;
  img2?: string;
  href: string;
};
export type instructorsRowBoxType = {
  bgColor: customColors;
  instructors: instructorBubbleType[];
};
export type VideosSectionType = {
  scrapColor: customColors;
  col1: {
    image: {
      src: string;
      alt: string;
    };
    stickerH2: stickerH2Type;
  };
  col2: {
    image: {
      src: string;
      alt: string;
    };
    stickerH2: stickerH2Type;
  };
  col3: {
    image: {
      src: string;
      alt: string;
    };
    stickerH2: stickerH2Type;
  };
};
export type groupLvlType = {
  stickerH4: stickerH4Type;
  aboutTextPoppins: aboutTextPoppinsType;
};
export type priceLessonsType = {
  stickerH4: stickerH4Type;
  oneLesson: {
    price: number;
    time: number;
  };
  tenLessons: {
    price: number;
    time: string;
  };
  button: signInButtonType;
};
export type priceListType = priceLessonsType[];
export type lessonTypeComponent = {
  bgColor: customColors;
  lessonType: lessonType;
};
export type lessonType = {
  img: string;
  stickerH4: stickerH4Type;
  aboutTextPoppins: aboutTextPoppinsType;
};
