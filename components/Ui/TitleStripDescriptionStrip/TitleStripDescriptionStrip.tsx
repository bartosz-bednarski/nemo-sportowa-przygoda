'use client';
import React from 'react';
import styles from './titleStripDescriptionStrip.module.scss';
import StripH3 from '../Strips/StripH3/StripH3';
import {customColors} from '@/types/UI/colors';
import StripParagraph from '../StripParagraph/StripParagraph';

const TitleStripDescriptionStrip: React.FC<{
  title: string;
  titleStripTextColor: customColors;
  titleStripBgColor: customColors;
  description: string;
  descriptionStripTextColor: customColors;
  descriptionStripBgColor: customColors;
  descriptionScale: number;
}> = ({
  title,
  titleStripTextColor,
  titleStripBgColor,
  description,
  descriptionStripTextColor,
  descriptionStripBgColor,
  descriptionScale,
}) => {
  return (
    <div className={styles['titleStripDescription']}>
      <StripH3
        title={title}
        stripTextColor={titleStripTextColor}
        stripBgColor={titleStripBgColor}
      />
      <StripParagraph
        title={description}
        stripTextColor={descriptionStripTextColor}
        stripBgColor={descriptionStripBgColor}
        scale={descriptionScale}
      />
    </div>
  );
};
export default TitleStripDescriptionStrip;
