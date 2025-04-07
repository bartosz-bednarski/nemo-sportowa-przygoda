'use client';
import React from 'react';
import styles from '../sticker.module.scss';
import {customColors} from '@/types/UI/colors';
import { COLORS } from '@/utils/UI/colors';

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

const stripStyles = `${styles.scrapBox} ${styles[`${stripBgColor}`]}`
const stripTextStyles = {
  color: COLORS[stripTextColor !== undefined ? stripTextColor : 'white'],
}
  return (
    <h1 className={styles.box}>
      <span className={styles.h1Title}>{title} </span>
      {title2 !== '' && <span className={styles.h1Title2}>{title2} </span>}

      <span className={stripStyles}>
        <span className={styles.scrapLeft}></span>
        <span className={styles.scrapText} style={stripTextStyles}> {titleStrip}</span>
        <span className={styles.scrapRight}></span>
        </span>
    </h1>
  );
};
export default StickerH1;
