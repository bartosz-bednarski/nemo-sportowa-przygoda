'use client';
import React from 'react';
import styles from '../sticker.module.scss';
import {COLORS} from '@/utils/UI/colors';
import {customColors} from '@/types/UI/colors';

export interface StickerH2PropsType {
  stripTextColor: customColors;
  stripBgColor: customColors;
  title: string;
  titleStrip: string;
  titleColor?: customColors;
}

const StickerH2 = ({
  stripBgColor,
  title,
  titleStrip,
  titleColor,
  stripTextColor,
}: StickerH2PropsType) => {
  const stripStyles = `${styles.scrapBox} ${styles[`${stripBgColor}`]}`;
  const stripTextStyles = {
    color: COLORS[stripTextColor !== undefined ? stripTextColor : 'white'],
  };
  const titleStyles = {
    color: COLORS[titleColor !== undefined ? titleColor : 'white'],
  };
  return (
    <h2 className={styles.box}>
      <span className={styles.h2Title} style={titleStyles}>
        {title}{' '}
      </span>
      <span className={stripStyles}>
        <span className={styles.scrapLeft}></span>
        <span className={styles.scrapText} style={stripTextStyles}>
          {' '}
          {titleStrip}
        </span>

        <span className={styles.scrapRight}></span>
      </span>
    </h2>
  );
};
export default StickerH2;
