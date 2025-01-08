'use client';
import React, {useEffect, useState} from 'react';
import styles from '../strip.module.scss';
import {COLORS} from '@/utils/UI/colors';
import {customColors} from '@/types/UI/colors';
import LightBlueStripImg from '@/public/assets/ui/Strips/stripLightBlue.svg';
import BasicBrownStripImg from '@/public/assets/ui/Strips/stripBasicBrown.svg';
import BasicOrangeStripImg from '@/public/assets/ui/Strips/stripBasicOrange.svg';
import DarkBlueStripImg from '@/public/assets/ui/Strips/stripDarkBlue.svg';
import MediumBlueStripImg from '@/public/assets/ui/Strips/stripMediumBlue.svg';
import WhiteStripImg from '@/public/assets/ui/Strips/stripWhite.svg';
import WinterIceStripImg from '@/public/assets/ui/Strips/stripWinterIce.svg';
import BasicGreenStripImg from '@/public/assets/ui/Strips/stripBasicGreen.svg';

import LightBlueScrapLeftImg from '@/public/assets/ui/ScrapLeft/scrapLeftLightBlue.svg';
import BasicBrownScrapLeftImg from '@/public/assets/ui/ScrapLeft/scrapLeftBasicBrown.svg';
import BasicOrangeScrapLeftImg from '@/public/assets/ui/ScrapLeft/scrapLeftBasicOrange.svg';
import DarkBlueScrapLeftImg from '@/public/assets/ui/ScrapLeft/scrapLeftDarkBlue.svg';
import MediumBlueScrapLeftImg from '@/public/assets/ui/ScrapLeft/scrapLeftMediumBlue.svg';
import WhiteScrapLeftImg from '@/public/assets/ui/ScrapLeft/scrapLeftWhite.svg';
import WinterIceScrapLeftImg from '@/public/assets/ui/ScrapLeft/scrapLeftWinterIce.svg';
import BasicGreenScrapLeftImg from '@/public/assets/ui/ScrapLeft/scrapLeftBasicGreen.svg';

import LightBlueScrapRightImg from '@/public/assets/ui/ScrapRight/scrapRightLightBlue.svg';
import BasicBrownScrapRightImg from '@/public/assets/ui/ScrapRight/scrapRightBasicBrown.svg';
import BasicOrangeScrapRightImg from '@/public/assets/ui/ScrapRight/scrapRightBasicOrange.svg';
import DarkBlueScrapRightImg from '@/public/assets/ui/ScrapRight/scrapRightDarkBlue.svg';
import MediumBlueScrapRightImg from '@/public/assets/ui/ScrapRight/scrapRightMediumBlue.svg';
import WhiteScrapRightImg from '@/public/assets/ui/ScrapRight/scrapRightWhite.svg';
import WinterIceScrapRightImg from '@/public/assets/ui/ScrapRight/scrapRightWinterIce.svg';
import BasicGreenScrapRightImg from '@/public/assets/ui/ScrapRight/scrapRightBasicGreen.svg';
import Image from 'next/image';

export interface StripH2PropsType {
  type: 'span' | 'h2';
  stripBgColor: customColors;
  stripTextColor: customColors;
  title: string;
}

const StripH2 = ({
  stripBgColor,
  stripTextColor,
  title,
  type,
}: StripH2PropsType) => {
  const [scrap, setScrap] = useState<null | {
    main: typeof BasicBrownStripImg;
    left: typeof BasicBrownScrapLeftImg;
    right: typeof BasicBrownScrapRightImg;
  }>(null);

  useEffect(() => {
    switch (stripBgColor) {
      case 'basicBrown':
        setScrap({
          main: BasicBrownStripImg,
          left: BasicBrownScrapLeftImg,
          right: BasicBrownScrapRightImg,
        });
        break;
      case 'basicOrange':
        setScrap({
          main: BasicOrangeStripImg,
          left: BasicOrangeScrapLeftImg,
          right: BasicOrangeScrapRightImg,
        });
        break;
      case 'basicGreen':
        setScrap({
          main: BasicGreenStripImg,
          left: BasicGreenScrapLeftImg,
          right: BasicGreenScrapRightImg,
        });
        break;
      case 'darkBlue':
        setScrap({
          main: DarkBlueStripImg,
          left: DarkBlueScrapLeftImg,
          right: DarkBlueScrapRightImg,
        });
        break;
      case 'lightBlue':
        setScrap({
          main: LightBlueStripImg,
          left: LightBlueScrapLeftImg,
          right: LightBlueScrapRightImg,
        });
        break;
      case 'mediumBlue':
        setScrap({
          main: MediumBlueStripImg,
          left: MediumBlueScrapLeftImg,
          right: MediumBlueScrapRightImg,
        });
        break;
      case 'white':
        setScrap({
          main: WhiteStripImg,
          left: WhiteScrapLeftImg,
          right: WhiteScrapRightImg,
        });
        break;
      case 'winterIce':
        setScrap({
          main: WinterIceStripImg,
          left: WinterIceScrapLeftImg,
          right: WinterIceScrapRightImg,
        });
        break;
      default:
        setScrap({
          main: BasicOrangeStripImg,
          left: BasicOrangeScrapLeftImg,
          right: BasicOrangeScrapRightImg,
        });
    }
  }, []);

  if (scrap !== null)
    return (
      <span
        className={styles.box}
        style={{
          backgroundColor: COLORS[stripBgColor],
        }}
      >
        <Image src={scrap.main} alt="mainScrap" className={styles.mainScrap} />
        <Image src={scrap.left} alt="scrapLeft" className={styles.scrapLeft} />
        {type === 'span' ? (
          <span
            className={styles.h2Title}
            style={{
              color: COLORS[stripTextColor],
              background: COLORS[stripBgColor],
            }}
          >
            {title}
          </span>
        ) : (
          <h2
            className={styles.h2Title}
            style={{
              color: COLORS[stripTextColor],
              background: COLORS[stripBgColor],
            }}
          >
            {title}
          </h2>
        )}
        <Image
          src={scrap.right}
          alt="scrapRight"
          className={styles.scrapRight}
        />
      </span>
    );
  return null;
};
export default StripH2;
