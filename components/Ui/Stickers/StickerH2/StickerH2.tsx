'use client';
import React from 'react';
import styles from '../sticker.module.scss';
import {COLORS} from '@/utils/UI/colors';
import StripH2 from '../../Strips/StripH2/StripH2';
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
  stripTextColor,
  title,
  titleStrip,
  titleColor,
}: StickerH2PropsType) => {
  return (
    <h2 className={styles.box}>
      <span
        className={styles.h2Title}
        style={{
          color: COLORS[titleColor !== undefined ? titleColor : 'white'],
        }}
      >
        {title}
      </span>
      <StripH2
        type="span"
        stripTextColor={stripTextColor}
        stripBgColor={stripBgColor}
        title={titleStrip}
      />
    </h2>
  );
};
export default StickerH2;
