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
  instructors: instructorsType;
  pools: poolsType;
  groups?: groupsType;
  backgroundColor: customColors;
};
export type aboutType = {
  stickerH2: stickerH2Type;
  aboutTextPoppins: aboutTextPoppinsType;
  image: { src: string; alt: string };
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
