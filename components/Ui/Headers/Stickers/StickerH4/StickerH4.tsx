'use client';
import React from 'react';
import styles from '../sticker.module.scss';
import {customColors} from '@/types/UI/colors';
import {COLORS} from '@/utils/UI/colors';

export interface StickerH4PropsType {
  stripTextColor: customColors;
  stripBgColor: customColors;
  title: string;
  titleStrip: string;
}

const StickerH4 = ({
  stripBgColor,
  stripTextColor,
  title,
  titleStrip,
}: StickerH4PropsType) => {
  const stripStyles = `${styles.scrapBox} ${styles[`${stripBgColor}`]}`;
  const stripTextStyles = {
    color: COLORS[stripTextColor !== undefined ? stripTextColor : 'white'],
  };
  return (
    <h4 className={styles.box}>
      <span className={styles.h4Title}>{title} </span>
      <span className={stripStyles}>
        <span className={styles.scrapLeft}></span>
        <span className={styles.scrapText} style={stripTextStyles}>
          {' '}
          {titleStrip}
        </span>
        <span className={styles.scrapRight}></span>
      </span>
    </h4>
  );
};
export default StickerH4;
