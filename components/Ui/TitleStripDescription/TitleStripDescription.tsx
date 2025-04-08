'use client';
import React from 'react';
import styles from './titleStripDescription.module.scss';
import {customColors} from '@/types/UI/colors';
import StickerH4 from '../Headers/Stickers/StickerH4/StickerH4';

const TitleStripDescription: React.FC<{
  title: string;
  stripTextColor: customColors;
  stripBgColor: customColors;
  description: string;
}> = ({title, stripBgColor, stripTextColor, description}) => {
  return (
    <div className={styles.titleStripDescription}>
      <StickerH4
        titleStrip={title}
        title=""
        stripTextColor={stripTextColor}
        stripBgColor={stripBgColor}
      />
      <p>{description}</p>
    </div>
  );
};
export default TitleStripDescription;
