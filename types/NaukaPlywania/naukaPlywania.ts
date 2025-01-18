import {AboutTextPoppinsPropsType} from '@/components/Ui/AboutTextPoppins/AboutTextPoppins';
import {instructorBubbleType} from '../Globals/globals';
import {customColors} from '../UI/colors';
import {stickerH2Type, stripH3Type} from '../UI/stickerStripStrap';
import {swimmingPoolCoverType} from '../UI/swimmingPoolCover';
import {StickerH2PropsType} from '@/components/Ui/Stickers/StickerH2/StickerH2';
import {StripH3PropsType} from '@/components/Ui/Strips/StripH3/StripH3';

export type instructorsType = {
  backgroundText: string;
  stripH3: StripH3PropsType;
  instructors: instructorBubbleType[];
};

export type poolsType = {
  stripH3: StripH3PropsType;
  backgroundText: string;
  swimmingPools: swimmingPoolCoverType[];
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
      title: 'SZATNIA DAMSKA';
    };
    cloakroomMen?: {
      exists: boolean;
      title: 'SZATNIA MĘSKA';
    };
    cloakroomFamily?: {
      exists: boolean;
      title: 'SZATNIA RODZINNA';
    };
    parking?: {
      exists: boolean;
      title: string;
    };
  };
};
