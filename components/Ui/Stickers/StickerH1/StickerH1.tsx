'use client';
import React from 'react';
import styles from '../sticker.module.scss';
import StripH1 from '../../Strips/StripH1/StripH1';
import {customColors} from '@/types/UI/colors';

export interface StickerH1PropsType {
  stripTextColor: customColors;
  stripBgColor: customColors;
  title: string;
  title2: string;
  titleStrip: string;
}

const StickerH1 = ({
  stripBgColor,
  stripTextColor,
  title,
  title2,
  titleStrip,
}: StickerH1PropsType) => {
  return (
    <h1 className={styles.box}>
      <span className={styles.h1Title}>{title} </span>
      {title2 !== '' && <span className={styles.h1Title2}>{title2} </span>}

      <StripH1
        stripTextColor={stripTextColor}
        stripBgColor={stripBgColor}
        title={titleStrip}
      />
    </h1>
  );
};
export default StickerH1;
