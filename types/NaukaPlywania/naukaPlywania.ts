import {AboutTextPoppinsPropsType} from '@/components/Ui/AboutTextPoppins/AboutTextPoppins';
import {instructorBubbleType} from '../Globals/globals';
import {customColors} from '../UI/colors';
import {stickerH2Type, stripH3Type} from '../UI/stickerStripStrap';
import {swimmingPoolCoverType} from '../UI/swimmingPoolCover';

export type aboutType = {
  stickerH2: stickerH2Type;
  aboutTextPoppins: AboutTextPoppinsPropsType;
  image: {src: string; alt: string};
  button?: {title: string; href: string};
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
