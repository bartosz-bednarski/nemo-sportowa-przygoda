import {LinkSwimmingPoolCoverPropsType} from '@/components/Ui/Links/LinkSwimmingPoolCover/LinkSwimmingPoolCover';
import {instructorBubbleType} from '../Globals/globals';
import {StripH3PropsType} from '@/components/Ui/Strips/StripH3/StripH3';

export type instructorsType = {
  backgroundText: string;
  stripH3: StripH3PropsType;
  instructors: instructorBubbleType[];
};

export type poolsType = {
  stripH3: StripH3PropsType;
  backgroundText: string;
  swimmingPools: LinkSwimmingPoolCoverPropsType[];
};
