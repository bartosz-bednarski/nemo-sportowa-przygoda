import {LinkSwimmingPoolCoverPropsType} from '@/components/Ui/Links/LinkSwimmingPoolCover/LinkSwimmingPoolCover';
import {instructorBubbleType} from '../Globals/globals';
import {StickerH3PropsType} from '@/components/Ui/Headers/Stickers/StickerH3/StickerH3';

export type instructorsType = {
  backgroundText: string;
  stripH3: StickerH3PropsType;
  instructors: instructorBubbleType[];
};

export type poolsType = {
  stripH3: StickerH3PropsType;
  backgroundText: string;
  swimmingPools: LinkSwimmingPoolCoverPropsType[];
};
