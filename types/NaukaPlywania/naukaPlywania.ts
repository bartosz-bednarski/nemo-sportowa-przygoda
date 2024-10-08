import { groupLvlType, instructorBubbleType } from "../Globals/globals";
import { aboutTextPoppinsType } from "../UI/aboutTextPoppins";
import { customColors } from "../UI/colors";
import {
  stickerH2Type,
  stripH2Type,
  stripH3Type,
} from "../UI/stickerStripStrap";
import { swimmingPoolCoverType } from "../UI/swimmingPoolCover";
export type naukaPlywaniaType = {
  about: aboutType;
  pools: poolsType;
  groups?: groupsType;
  backgroundColor: customColors;
};
export type aboutType = {
  stickerH2: stickerH2Type;
  aboutTextPoppins: aboutTextPoppinsType;
  image: { src: string; alt: string };
  button?: { title: string; href: string };
};

export type instructorsType = {
  backgroundText: string;
  stripH3: stripH3Type;
  instructors: instructorBubbleType[];
};

export type poolsType = {
  stripH3: stripH3Type;
  backgroundText: string;
  swimmingPools: swimmingPoolCoverType[];
};
export type groupsType = {
  stripH2: stripH2Type;
  groups: groupLvlType[];
};
export type poolInformationsType = {
  color: customColors;
  title: string;
  imageSrc: string;
  stickerH2: stickerH2Type;
  mapSrc: string;
  icons: {
    pool1?: {
      exists: boolean;
      title: string;
    };
    pool2?: {
      exists: boolean;
      title: string;
    };
    stand?: {
      exists: boolean;
      title: string;
    };
    cloakroomWomen?: {
      exists: boolean;
      title: "SZATNIA DAMSKA";
    };
    cloakroomMen?: {
      exists: boolean;
      title: "SZATNIA MĘSKA";
    };
    cloakroomFamily?: {
      exists: boolean;
      title: "SZATNIA RODZINNA";
    };
    parking?: {
      exists: boolean;
      title: string;
    };
  };
};
