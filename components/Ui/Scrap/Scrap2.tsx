'use client';
import {customColors} from '@/types/UI/colors';
import React from 'react';
import styles from './scrap.module.scss';
import topScraplightBlue from '@/public/assets/ui/Scraps/scrapBottomLightBlue.svg';
import topScrapmediumBlue from '@/public/assets/ui/Scraps/scrapBottomMediumBlue.svg';
import topScrapdarkBlue from '@/public/assets/ui/Scraps/scrapBottomDarkBlue.svg';
import topScrapbasicOrange from '@/public/assets/ui/Scraps/scrapBottomBasicOrange.svg';
import topScrapbasicBrown from '@/public/assets/ui/Scraps/scrapBottomBasicBrown.svg';
import topScrapbasicGreen from '@/public/assets/ui/Scraps/scrapBottomBasicGreen.svg';
import topScrapwhite from '@/public/assets/ui/Scraps/scrapBottomWhite.svg';
import topScrapwinterIce from '@/public/assets/ui/Scraps/scrapBottomWinterIce.svg';

import bottomScraplightBlue from '@/public/assets/ui/Scraps/scrapTopLightBlue.svg';
import bottomScrapmediumBlue from '@/public/assets/ui/Scraps/scrapTopMediumBlue.svg';
import bottomScrapdarkBlue from '@/public/assets/ui/Scraps/scrapTopDarkBlue.svg';
import bottomScrapbasicOrange from '@/public/assets/ui/Scraps/scrapTopBasicOrange.svg';
import bottomScrapbasicBrown from '@/public/assets/ui/Scraps/scrapTopBasicBrown.svg';
import bottomScrapbasicGreen from '@/public/assets/ui/Scraps/scrapTopBasicGreen.svg';
import bottomScrapwhite from '@/public/assets/ui/Scraps/scrapTopWhite.svg';
import bottomScrapwinterIce from '@/public/assets/ui/Scraps/scrapTopWinterIce.svg';

export interface Scrap2PropsType {
  position: 'top' | 'bottom';
  color: customColors;
}

const Scraps = {
  bottomScraplightBlue,
  bottomScrapmediumBlue,
  bottomScrapdarkBlue,
  bottomScrapbasicOrange,
  bottomScrapbasicBrown,
  bottomScrapbasicGreen,
  bottomScrapwhite,
  bottomScrapwinterIce,

  topScraplightBlue,
  topScrapmediumBlue,
  topScrapdarkBlue,
  topScrapbasicOrange,
  topScrapbasicBrown,
  topScrapbasicGreen,
  topScrapwhite,
  topScrapwinterIce,
};
const Scrap2 = ({position, color}: Scrap2PropsType) => {
  const key = `${position}Scrap${color}` as keyof typeof Scraps;
  const scrap = Scraps[key];
  const scrapStyle = `${styles[`${position}Scrap`]}`;
  return (
    <img
      className={scrapStyle}
      src={scrap.src}
      alt="fala"
      width={1920}
      height={30}
      loading={position === 'bottom' ? 'eager' : 'lazy'}
      fetchPriority={position === 'bottom' ? 'high' : 'low'}
    />
  );
};

export default Scrap2;
