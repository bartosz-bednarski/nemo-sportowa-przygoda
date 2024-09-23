import { aboutTextPoppinsType } from "../UI/aboutTextPoppins";
import { customColors } from "../UI/colors";
import { stickerH2Type, stickerH4Type } from "../UI/stickerStripStrap";

export type instructorBubbleType = {
  instructorName?: string;
  scale: number;
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
