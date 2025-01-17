'use client';
import React from 'react';
import styles from '../sticker.module.scss';
import StripH4 from '../../Strips/StripH4/StripH4';
import {customColors} from '@/types/UI/colors';

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
  return (
    <h4 className={styles.box}>
      <span className={styles.h4Title}>{title}</span>
      <StripH4
        type="span"
        stripTextColor={stripTextColor}
        stripBgColor={stripBgColor}
        title={titleStrip}
      />
    </h4>
  );
};
export default StickerH4;
