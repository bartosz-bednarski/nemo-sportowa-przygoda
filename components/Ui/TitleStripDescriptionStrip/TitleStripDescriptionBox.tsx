'use client';
import React, { useEffect, useState } from 'react';
import styles from './titleStripDescriptionBox.module.scss';
import {customColors} from '@/types/UI/colors';
import {COLORS} from '@/utils/UI/colors';
import StickerH4 from '../Headers/Stickers/StickerH4/StickerH4';

export interface TitleStripDescriptionBoxPropsType {
  title: string;
  titleStripTextColor: customColors;
  titleStripBgColor: customColors;
  description: string;
  descriptionBgColor:customColors
}

const TitleStripDescriptionBox = ({
  title,
  titleStripTextColor,
  titleStripBgColor,
  description,
  descriptionBgColor
}: TitleStripDescriptionBoxPropsType) => {

const stripStyles = `${styles.paragraphBox} ${styles[`${descriptionBgColor}`]}`
const stripTextStyles = {
  color: COLORS[titleStripTextColor !== undefined ? titleStripTextColor : 'white'],
}
  return (
    <div className={styles.titleStripDescription}>
      <StickerH4
        title=""
        titleStrip={title}
        stripTextColor={titleStripTextColor}
        stripBgColor={titleStripBgColor}
      />
      <span className={stripStyles}>
        <span className={styles.scrapLeft}></span>
        <p className={styles.paragraphText} style={stripTextStyles}> {description}</p>
        <span className={styles.scrapRight}></span>
        </span>
      
    </div>
  );
};

export default TitleStripDescriptionBox;
